---
layout: post
tags:
- maths
title: Vectors (Maths for Game Developers)
category: maths
permalink: /Vectors
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: Maths for Game Developers
    url: /maths
  - name: Vectors
    url: #
recommend:
- maths
- introduction
- sdk
editlink: /pages/general/maths/Vectors.md
updatedAt: '2026-04-26'
---

# Introduction to Vectors
A vector describes magnitude and direction [^1].
In game code, that usually means a small structure such as `Vector2` or `Vector3`, but the storage type is only the implementation detail.
The useful part is that a vector can represent both where something is pointing and how strong that movement, force, or offset is.

Vectors appear everywhere in game engines:
* **Position offsets** - The displacement from one object to another
* **Velocity** - Speed plus direction
* **Acceleration** - Forces such as gravity or recoil
* **Surface normals** - Perpendicular directions used for lighting and collision
* **Facing directions** - Where a camera, enemy, or projectile is aimed

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZoMmiQes_lE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Core Operations
A few vector operations appear in almost every game codebase:

### Addition and subtraction
Adding vectors combines offsets or forces [^1].
Subtracting `b - a` gives the vector from point `a` to point `b`, which is why subtraction is usually the first step for steering, target tracking, and range checks [^1].

This small example shows both operations in a gameplay-style context:

```ts
type Vec3 = { x: number; y: number; z: number };

function add(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

function subtract(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

const playerPos = { x: 4, y: 0, z: 1 };
const step = { x: 1, y: 0, z: 0 };
const enemyPos = { x: 10, y: 0, z: 5 };

const nextPlayerPos = add(playerPos, step);
const toEnemy = subtract(enemyPos, playerPos);
```

In the above example `nextPlayerPos` becomes `{ x: 5, y: 0, z: 1 }`, while `toEnemy` becomes `{ x: 6, y: 0, z: 4 }`.

### Magnitude and normalization
The magnitude is the length of the vector.
Normalization keeps the direction but rescales the length to `1`, which is useful when you want a direction without carrying the original speed or distance [^2].
If the vector has zero length, normalization has to be handled carefully because there is no valid direction to preserve [^2].

This short example shows how magnitude-related helpers are usually written in engine code:

```ts
type Vec3 = { x: number; y: number; z: number };

function magnitude(v: Vec3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

function normalize(v: Vec3): Vec3 {
  const len = magnitude(v);
  if (len === 0) {
    return { x: 0, y: 0, z: 0 };
  }

  return { x: v.x / len, y: v.y / len, z: v.z / len };
}

const velocity = { x: 3, y: 4, z: 0 };

const speed = magnitude(velocity);
const direction = normalize(velocity);
```

The result of the above is `speed = 5`, while `direction` keeps the same heading but rescales the vector to unit length so it is `{ x: 0.6, y: 0.8, z: 0 }`.
The zero-vector branch here is just a defensive programming choice for the example, because a vector with no length does not have a meaningful direction to normalize.

### Distance and squared distance
Distance between two points is the magnitude of their difference, so `distance(a, b) = length(b - a)` [^3].
Many engines also expose squared distance because it avoids the square root step that a true magnitude calculation needs [^1][^3].
That matters in hot code such as proximity checks, AI perception, and broad collision filtering.
For example, an enemy AI can check whether the player has entered its aggro radius, or a pickup can check whether the player is close enough to collect it, without paying for a square root every frame.

The [Brackeys](https://www.youtube.com/watch?v=wXI9_olSrqo) video below is a good companion for this section because it walks through displacement vectors, distance, and the cost of repeated square root operations in engine code:

<iframe width="560" height="315" src="https://www.youtube.com/embed/wXI9_olSrqo" title="Game Math Theory: Vectors" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

When you only need a comparison, prefer patterns like these:
* **Range checks** - Compare `distanceSq < maxRange * maxRange`
* **Sorting nearby objects** - Compare squared distances directly
* **Cheap rejection tests** - Reject obvious misses before doing more expensive work

This is the same optimization pattern exposed later on this page by `VEC_SquareMagnitude` and `VEC_SquareDistance`.

Here is the same idea in code using a player and enemy position:

```ts
type Vec3 = { x: number; y: number; z: number };

function subtract(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

function lengthSq(v: Vec3): number {
  return v.x * v.x + v.y * v.y + v.z * v.z;
}

const enemyPos = { x: 10, y: 0, z: 5 };
const playerPos = { x: 4, y: 0, z: 1 };

// `toEnemy` is the displacement vector from the player to the enemy.
const toEnemy = subtract(enemyPos, playerPos); // result: { x: 6, y: 0, z: 4 }
// `inRange` uses squared distance to avoid an unnecessary square root.
const inRange = lengthSq(toEnemy) < 64; // 8 units squared, result: true
```

In this example `lengthSq(toEnemy)` is `52`, so `inRange` is `true`.

### Dot product
The dot product measures how much one vector points in the direction of another [^1][^4].
For normalized vectors, it collapses to the cosine of the angle between them [^4].

The sign and size of the result usually mean:
* **Positive** - The vectors point in roughly the same direction
* **Zero** - The vectors are perpendicular
* **Negative** - The vectors point in opposite hemispheres

This makes dot products useful for:
* **Field-of-view checks** - Is a target broadly in front of an actor?
* **Back-face culling** - Is a triangle facing away from the camera?
* **Lighting** - How closely does a surface normal align with a light direction?
* **Signed speed tests** - How much of a velocity vector lies along a forward axis?

[PothOnProgramming](https://www.youtube.com/watch?v=b5TjpTBW6yw) offers a technical breakdown of the 2D dot product and its critical applications in game design and engine logic. The video highlights several fundamental applications of the dot product used in game development and vector math.

<iframe width="560" height="315" src="https://www.youtube.com/embed/b5TjpTBW6yw" title="2D Dot Product - Cool Things To Know" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This snippet shows a typical field-of-view style use of the dot product:

```ts
type Vec3 = { x: number; y: number; z: number };

function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function normalize(v: Vec3): Vec3 {
  const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  if (len === 0) {
    return { x: 0, y: 0, z: 0 };
  }

  return { x: v.x / len, y: v.y / len, z: v.z / len };
}

const playerForward = normalize({ x: 1, y: 0, z: 0 });
const toEnemy = normalize({ x: 6, y: 0, z: 4 });
// `facingScore` moves toward `1` when the player is looking directly at the enemy and toward `-1` when facing away.
const facingScore = dot(playerForward, toEnemy);
```

In this example it is about `0.83`, which means the enemy is clearly in front of the player but not perfectly centered.

### Cross product
The cross product only makes sense in 3D [^1][^5].
It returns a new vector perpendicular to both inputs, with a magnitude based on the sine of the angle between them [^5].
In practice, game programmers use it to build triangle normals, construct camera bases, and derive `right`, `up`, or `forward` axes from each other.

[Jorge Rodriguez](https://www.youtube.com/watch?v=FT7MShdqK6w) has a good video on how to derive a character's "right" vector from their "forward" and "up" vectors using the cross product. This video demonstrates how to implement lateral movement (strafing) relative to a camera's orientation, which is a fundamental requirement for first-person and third-person movement systems. Rodriguez provides both the mathematical theory for calculating orthogonal vectors and the practical C++ implementation needed to integrate these concepts into a game's velocity calculations.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FT7MShdqK6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Games often use a local coordinate frame for the player or camera, so movement can be relative to where the player is facing rather than fixed world axes. The cross product helps derive directions such as forward or right from the other local axes.
In this context `right`, `up`, and `forward` are direction axes, not movement values by themselves. Movement happens when the game moves an object along one of those axes.

This example shows how a game can derive a `forward` direction from existing axes, which is useful when building camera orientation, movement bases, or surface normals:

```ts
type Vec3 = { x: number; y: number; z: number };

function cross(a: Vec3, b: Vec3): Vec3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

const right = { x: 1, y: 0, z: 0 }; // the player's right
const up = { x: 0, y: 1, z: 0 }; // the player's up
const forward = cross(right, up); // the direction the player or camera is facing
```

In this basis `forward` becomes `{ x: 0, y: 0, z: 1 }`.
If you swap the argument order, the sign flips, which is why operand order matters when working with handedness.

If you want to continue from vectors into transforms and rotations, the Matrix page is the natural next step:

{% include_cached link-to-other-post.html post="/Matrix" description="Matrices build on vector operations for transforms such as translation, rotation, and projection." %}

---
## Vector Libraries used in Retail Console Game Development
Looking at retail SDK headers is useful because it shows which operations console programmers expected to use frequently.

### Nintendo DS Official Vector Library
The Nintendo DS boot ROM headers expose a compact vector helper API in `IrisVEC.h`, which is catalogued in this site's Platinum leak coverage [^6].
Before looking at the declarations, a few details stand out:
* **Multiple storage widths** - `Vec10`, `Vec16`, and `Vec32` show that Nintendo exposed vector math for different precision and packing tradeoffs
* **Bit-packed coordinates** - `Vec10` uses 10-bit fields, which is unusual enough to suggest tight memory or hardware-format constraints
* **Performance-aware helpers** - `VEC_SquareMagnitude`, `VEC_SquareDistance`, and `Fast` variants reflect the same cost-saving patterns seen in modern engines
* **2D and 3D support** - The header mixes full 3D structs with helper macros such as `VEC2D_DotProduct`

The fixed-point flavour is especially noticeable here.
Both `VEC2D_DotProduct` and `VEC2D_CrossProduct` shift by `V_SFT`, which looks more like a scaling constant than a floating-point API.

Combined with `Vec10` and the separate `Fast` variants, the header reads like an interface designed around compact integer storage and predictable performance on DS-era hardware.

{% capture ds_vector_types_tab %}
Here are the main storage types exposed by the header:

```c
#define vl volatile

// 10-bit packed coordinates
typedef struct {
    s32 x:10;
    s32 y:10;
    s32 z:10;
} Vec10, Pos10, TestVec;
typedef  vl Pos10     vPos10;
typedef  vl Vec10     vVec10;

// 16-bit
typedef struct {
    s16 x;
    s16 y;
    s16 z;
    s16 w;
} Vec16, Vec, Pos16, TestPos;
typedef  vl Pos16     vPos16;
typedef  vl Vec16     vVec16;
typedef  vl Vec       vVec;

// 32-bit
typedef struct {
    s32 x;
    s32 y;
    s32 z;
} Vec32, Pos32, Pos;
typedef  vl Vec32     vVec32;
typedef  vl Pos32     vPos32;
typedef  vl Pos       vPos;
```

{% endcapture %}

{% capture ds_vector_functions_tab %}
Here are the main vector helpers exposed by the header:

```c
void VEC_Copy2Vec10(const Vec   *srcp, Vec10 *dstp);
void VEC_Copy2Vec32(const Vec   *srcp, Vec32 *dstp);
void VEC32_Copy2Vec(const Vec32 *srcp, Vec   *dstp);

void VEC_AlignPoint2Vec10(const Vec   *srcp, Vec10 *dstp);
void VEC10_AlignPoint2Vec(const Vec10 *srcp, Vec   *dstp);

s32  VEC_DotProduct(      const Vec   *a, const Vec   *b);
s32  VEC32_DotProduct(    const Vec32 *a, const Vec32 *b);
s32  VEC32_DotProductFast(const Vec32 *a, const Vec32 *b);
s32  VEC32VEC_DotProduct( const Vec32 *a, const Vec   *b);
#define VEC2D_DotProduct(ax, ay, bx, by)    (((ax) * (bx) + (ay) * (by)) >>V_SFT)

void VEC_CrossProduct(      Vec   *a, Vec   *b, Vec   *axb);
void VEC32_CrossProduct(    Vec32 *a, Vec32 *b, Vec32 *axb);
void VEC32_CrossProductFast(Vec32 *a, Vec32 *b, Vec32 *axb);
#define VEC2D_CrossProduct(ax, ay, bx, by)    (((ax) * (by) - (ay) * (bx)) >>V_SFT)

void VEC_Normalize(      Vec   *srcp, Vec   *dstp);
void VEC32_Normalize(    Vec32 *srcp, Vec32 *dstp);
void VEC32_Normalize2Vec(Vec32 *srcp, Vec   *dstp);

void VEC_Add(Vec *a, Vec *b, Vec *ab);
void VEC_Sub(Vec *a, Vec *b, Vec *a_b);
void VEC_Scale(Vec *srcp, Vec *dstp, s32 scale);
void VEC_Reverse(const Vec *srcp, Vec *dstp);

u32  VEC_Magnitude(const Vec *v);
u32  VEC_SquareMagnitude(const Vec *v);

u32  VEC_Distance(const Vec *a, const Vec *b);
u32  VEC_SquareDistance(const Vec *a, const Vec *b);

void VEC_Lerp(Vec *a, Vec *b, Vec *d, s32 t);
void VEC32_Lerp(Vec32 *a, Vec32 *b, Vec32 *d, s32 t);
void VEC32_LerpFast(Vec32 *a, Vec32 *b, Vec32 *d, s32 t);
```

{% endcapture %}

{% capture ds_vector_tabs %}
{% include rr-tab.html title="Types" default=true content=ds_vector_types_tab %}
{% include rr-tab.html title="Functions" content=ds_vector_functions_tab %}
{% endcapture %}
{% include rr-tabs.html group="group1" tabs=ds_vector_tabs %}

You can find out more about the Nintendo DS Boot ROM in the Platinum leak:
{% include_cached link-to-other-post.html post="/platinumleak" description="For more information on the Nintendo Platinum leak that exposed these DS headers, check out this post." %}

---
### Sony PSP Vector Library
The official PlayStation Portable (PSP) SDK exposes vector types such as `ScePspVector2`, `ScePspVector3` through the `psptypes.h` header and vector functions through the VFPU library header `libvfpu.h`.
What makes the PSP vector API interesting is that it looks much closer to a modern real-time graphics math library than the simpler DS helper headers.

The use of floating-point vector types, 16-byte-aligned 4D vectors, and operations such as dot product, cross product, normalization, lerp, reflection, refraction, and face-forward suggests an API designed around the PSP's VFPU and 3D rendering workloads rather than just basic gameplay math.

The repeated `XYZ` variants are especially telling, because they imply that many engine data structures were stored in 4D form while still treating only the first three components as position or direction data.

{% capture psp_vector_types_tab %}
Here are the main storage types exposed by the header (`psptypes.h`). 
The prefix tells you the underlying storage format: `S` means `short`, `I` means `int`, `L64` means 64-bit integer storage, and `F` means `float`. 

The union forms such as `ScePspVector2` and `ScePspVector3` are useful because they let the same bytes be viewed either as named vector structs (`fv`, `iv`) or plain arrays (`f[]`, `i[]`), which makes it easier to switch between component-wise code and bulk math or VFPU-oriented helper code:
  ```c
  // 2D Vectors
  typedef struct ScePspSVector2 {
    short x, y;
  } ScePspSVector2;

  typedef struct ScePspIVector2 {
    int x, y;
  } ScePspIVector2;

  typedef struct ScePspL64Vector2 {
    SceLong64 x, y;
  } ScePspL64Vector2;

  typedef struct ScePspFVector2 {
    float x, y;
  } ScePspFVector2;

  typedef union ScePspVector2 {
    ScePspFVector2 fv;
    ScePspIVector2 iv;
    float f[2];
    int   i[2];
    struct {
      float fx, fy;
    };
    struct {
      int ix, iy;
    };
  } ScePspVector2;

  // 3D Vectors
  typedef struct ScePspSVector3 {
    short x, y, z;
  } ScePspSVector3;

  typedef struct ScePspIVector3 {
    int x, y, z;
  } ScePspIVector3;

  typedef struct ScePspL64Vector3 {
    SceLong64 x, y, z;
  } ScePspL64Vector3;

  typedef struct ScePspFVector3 {
    float x, y, z;
  } ScePspFVector3;

  typedef union ScePspVector3 {
    ScePspFVector3 fv;
    ScePspIVector3 iv;
    float f[3];
    int   i[3];
    struct {
      float fx, fy, fz;
    };
    struct {
      int ix, iy, iz;
    };
  } ScePspVector3;


  // 4D Vectors
  typedef struct ScePspSVector4 {
    short x, y, z, w;
  } ScePspSVector4;

  typedef struct ScePspIVector4 {
    int x, y, z, w;
  } ScePspIVector4 __attribute__((aligned(16)));

  typedef struct ScePspIVector4Unaligned {
    int x, y, z, w;
  } ScePspIVector4Unaligned;

  typedef struct ScePspL64Vector4 {
    SceLong64 x, y, z, w;
  } ScePspL64Vector4;

  typedef struct ScePspFVector4 {
    float x, y, z, w;
  } ScePspFVector4 __attribute__((aligned(16)));

  typedef struct ScePspFVector4Unaligned {
    float x, y, z, w;
  } ScePspFVector4Unaligned;

  typedef union ScePspVector4 {
    ScePspFVector4 fv;
    ScePspIVector4 iv;
    SceULong128 qw;
    float f[4];
    int   i[4];
    struct {
      float fx, fy, fz, fw;
    };
    struct {
      int ix, iy, iz, iw;
    };
  } ScePspVector4 __attribute__((aligned(16)));
  #define	SVector2		ScePspSVector2
  #define	IVector2		ScePspIVector2
  #define	L64Vector2		ScePspL64Vector2
  #define	FVector2		ScePspFVector2
  #define	Vector2			ScePspVector2

  #define	SVector3		ScePspSVector3
  #define	IVector3		ScePspIVector3
  #define	L64Vector3		ScePspL64Vector3
  #define	FVector3		ScePspFVector3
  #define	Vector3			ScePspVector3

  #define	SVector4		ScePspSVector4
  #define	IVector4		ScePspIVector4
  #define	L64Vector4		ScePspL64Vector4
  #define	FVector4		ScePspFVector4
  #define	Vector4			ScePspVector4
  ```
{% endcapture %}

{% capture psp_vector_functions_tab %}
Here are the main vector helpers exposed by the header `libvfpu.h`, note that they are repeated for each of the vector sizes so we only include first first one and have the variant names in the comment at the end of the line:

```c
// Initialize vectors to positive or negative zero
#define sceVfpuVector2Null(_pv)                          sceVfpuVector2PositiveZero(_pv) // Variants: sceVfpuVector2Zero, sceVfpuVector3Null, sceVfpuVector3Zero, sceVfpuVector4Null, sceVfpuVector4Zero
ScePspFVector2 *sceVfpuVector2PositiveZero(ScePspFVector2 *pv); // Variants: sceVfpuVector3PositiveZero, sceVfpuVector4PositiveZero
ScePspFVector2 *sceVfpuVector2NegativeZero(ScePspFVector2 *pv); // Variants: sceVfpuVector3NegativeZero, sceVfpuVector4NegativeZero

// Set and copy vectors
ScePspFVector2 *sceVfpuVector2Set(ScePspFVector2 *pv0, float x, float y); // Variants: sceVfpuVector3Set, sceVfpuVector4Set
ScePspFVector4 *sceVfpuVector4SetXYZ(ScePspFVector4 *pv0, float x, float y, float z);
ScePspFVector2 *sceVfpuVector2Copy(ScePspFVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Copy, sceVfpuVector4Copy

// Convert floating-point vectors to integer vectors
ScePspIVector2 *sceVfpuVector2Ceil(ScePspIVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Ceil, sceVfpuVector4Ceil
ScePspIVector2 *sceVfpuVector2Trunc(ScePspIVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Trunc, sceVfpuVector4Trunc
ScePspIVector2 *sceVfpuVector2Round(ScePspIVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Round, sceVfpuVector4Round
ScePspIVector2 *sceVfpuVector2Floor(ScePspIVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Floor, sceVfpuVector4Floor

// Convert integer vectors to floating-point vectors
ScePspFVector2 *sceVfpuVector2FromIVector(ScePspFVector2 *pv0, const ScePspIVector2 *pv1); // Variants: sceVfpuVector3FromIVector, sceVfpuVector4FromIVector

// Component-wise arithmetic
ScePspFVector2 *sceVfpuVector2Add(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Add, sceVfpuVector4Add
ScePspFVector4 *sceVfpuVector4AddXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2);

#define sceVfpuVector2Subtract(_pv0, _pv1, _pv2)        sceVfpuVector2Sub(_pv0, _pv1, _pv2) // Variants: sceVfpuVector3Subtract, sceVfpuVector4Subtract
#define sceVfpuVector4SubtractXYZ(_pv0, _pv1, _pv2)     sceVfpuVector4SubXYZ(_pv0, _pv1, _pv2)
ScePspFVector2 *sceVfpuVector2Sub(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Sub, sceVfpuVector4Sub
ScePspFVector4 *sceVfpuVector4SubXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2);

#define sceVfpuVector2Multiply(_pv0, _pv1, _pv2)        sceVfpuVector2Mul(_pv0, _pv1, _pv2) // Variants: sceVfpuVector3Multiply, sceVfpuVector4Multiply
#define sceVfpuVector4MultiplyXYZ(_pv0, _pv1, _pv2)     sceVfpuVector4MulXYZ(_pv0, _pv1, _pv2)
ScePspFVector2 *sceVfpuVector2Mul(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Mul, sceVfpuVector4Mul
ScePspFVector4 *sceVfpuVector4MulXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2);

#define sceVfpuVector2Divide(_pv0, _pv1, _pv2)          sceVfpuVector2Div(_pv0, _pv1, _pv2) // Variants: sceVfpuVector3Divide, sceVfpuVector4Divide
#define sceVfpuVector4DivideXYZ(_pv0, _pv1, _pv2)       sceVfpuVector4DivXYZ(_pv0, _pv1, _pv2)
ScePspFVector2 *sceVfpuVector2Div(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Div, sceVfpuVector4Div
ScePspFVector4 *sceVfpuVector4DivXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2);

// Unary operations and range helpers
ScePspFVector2 *sceVfpuVector2Neg(ScePspFVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Neg, sceVfpuVector4Neg
ScePspFVector2 *sceVfpuVector2Abs(ScePspFVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Abs, sceVfpuVector4Abs
ScePspFVector2 *sceVfpuVector2Clamp(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, float min, float max); // Variants: sceVfpuVector3Clamp, sceVfpuVector4Clamp
ScePspFVector4 *sceVfpuVector4ClampXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, float min, float max);
ScePspFVector2 *sceVfpuVector2Max(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Max, sceVfpuVector4Max
ScePspFVector2 *sceVfpuVector2Min(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Min, sceVfpuVector4Min

// Scale and interpolation
ScePspFVector2 *sceVfpuVector2Scale(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, float s); // Variants: sceVfpuVector3Scale, sceVfpuVector4Scale
ScePspFVector4 *sceVfpuVector4ScaleXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, float s);
#define sceVfpuVector2Inter(_pv0,_pv1,_pv2,_t)         sceVfpuVector2Lerp(_pv0,_pv1,_pv2,(1.0f - (_t))) // Variants: sceVfpuVector3Inter, sceVfpuVector4Inter
ScePspFVector2 *sceVfpuVector2Lerp(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2, float t); // Variants: sceVfpuVector3Lerp, sceVfpuVector4Lerp
#define sceVfpuVector4InterXYZ(_pv0,_pv1,_pv2,_t)      sceVfpuVector4LerpXYZ(_pv0,_pv1,_pv2,(1.0f - (_t)))
ScePspFVector4 *sceVfpuVector4LerpXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2, float t);

// Dot and cross products
#define sceVfpuVector2Dot(_v1,_v2)                      sceVfpuVector2InnerProduct(_v1,_v2) // Variants: sceVfpuVector3Dot, sceVfpuVector4Dot
#define sceVfpuVector4DotXYZ(_v1,_v2)                   sceVfpuVector4InnerProductXYZ(_v1,_v2)
float sceVfpuVector2InnerProduct(const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3InnerProduct, sceVfpuVector4InnerProduct
float sceVfpuVector4InnerProductXYZ(const ScePspFVector4 *pv1, const ScePspFVector4 *pv2);
#define sceVfpuVector3Cross(_v0,_v1,_v2)                sceVfpuVector3OuterProduct(_v0,_v1,_v2) // Variant: sceVfpuVector4Cross
ScePspFVector3 *sceVfpuVector3OuterProduct(ScePspFVector3 *pv0, const ScePspFVector3 *pv1, const ScePspFVector3 *pv2); // Variant: sceVfpuVector4OuterProductXYZ
ScePspFVector4 *sceVfpuVector4OuterProductXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2);

// Aggregate queries and comparison helpers
float sceVfpuVector2Funnel(const ScePspFVector2 *pv); // Variants: sceVfpuVector3Funnel, sceVfpuVector4Funnel
float sceVfpuVector2Average(const ScePspFVector2 *pv); // Variants: sceVfpuVector3Average, sceVfpuVector4Average
SceBool sceVfpuVector2IsEqual(const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3IsEqual, sceVfpuVector4IsEqual
#define sceVfpuVector2IsNull(_pv)                       sceVfpuVector2IsZero(_pv) // Variants: sceVfpuVector3IsNull, sceVfpuVector4IsNull
SceBool sceVfpuVector2IsZero(const ScePspFVector2 *pv0); // Variants: sceVfpuVector3IsZero, sceVfpuVector4IsZero
ScePspFVector2 *sceVfpuVector2SignFloat(ScePspFVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3SignFloat, sceVfpuVector4SignFloat
ScePspIVector2 *sceVfpuVector2SignInt(ScePspIVector2 *piv, const ScePspFVector2 *pfv); // Variants: sceVfpuVector3SignInt, sceVfpuVector4SignInt

// Length, normalization, and geometric helpers
ScePspFVector2 *sceVfpuVector2Normalize(ScePspFVector2 *pv0, const ScePspFVector2 *pv1); // Variants: sceVfpuVector3Normalize, sceVfpuVector4Normalize
ScePspFVector4 *sceVfpuVector4NormalizeXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1);
float sceVfpuVector2Length(const ScePspFVector2 *pfv); // Variants: sceVfpuVector3Length, sceVfpuVector4LengthXYZ
float sceVfpuVector2Distance(const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Distance, sceVfpuVector4DistanceXYZ
ScePspFVector4 *sceVfpuVector4NormalizePhase(ScePspFVector4 *pv0, const ScePspFVector4 *pv1);
ScePspFVector2 *sceVfpuVector2FaceForward(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2, const ScePspFVector2 *pv3); // Variants: sceVfpuVector3FaceForward, sceVfpuVector2FaceForwardXYZ
ScePspFVector4 *sceVfpuVector2FaceForwardXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2, const ScePspFVector4 *pv3);
ScePspFVector2 *sceVfpuVector2Reflect(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2); // Variants: sceVfpuVector3Reflect, sceVfpuVector4ReflectXYZ
ScePspFVector4 *sceVfpuVector4ReflectXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2);
ScePspFVector2 *sceVfpuVector2Refract(ScePspFVector2 *pv0, const ScePspFVector2 *pv1, const ScePspFVector2 *pv2, float eta); // Variants: sceVfpuVector3Refract, sceVfpuVector4RefractXYZ
ScePspFVector4 *sceVfpuVector4RefractXYZ(ScePspFVector4 *pv0, const ScePspFVector4 *pv1, const ScePspFVector4 *pv2, float eta);
```
{% endcapture %}

{% capture psp_vector_tabs %}
{% include rr-tab.html title="PSP Vector Types" default=true content=psp_vector_types_tab %}
{% include rr-tab.html title="PSP Vector Functions" content=psp_vector_functions_tab %}
{% endcapture %}
{% include rr-tabs.html group="psp-group1" tabs=psp_vector_tabs %}

---
# References
[^1]: [Unity Manual - Moving objects with vectors](https://docs.unity3d.com/Manual/VectorCookbook.html)
[^2]: [Unity Scripting API - Vector3.Normalize](https://docs.unity3d.com/ScriptReference/Vector3.Normalize.html)
[^3]: [Unity Scripting API - Vector3.Distance](https://docs.unity3d.com/ScriptReference/Vector3.Distance.html)
[^4]: [Unity Scripting API - Vector3.Dot](https://docs.unity3d.com/ScriptReference/Vector3.Dot.html)
[^5]: [Unity Scripting API - Vector3.Cross](https://docs.unity3d.com/ScriptReference/Vector3.Cross.html)
[^6]: [RetroReversing - Nintendo Platinum Leak](/platinumleak)
