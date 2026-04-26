---
layout: post
tags:
- maths
- psp
- ds
title: Matrices (Maths for Game Developers)
category: 
- maths
- ds
- psp
permalink: /Matrix
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: Maths for Game Developers
    url: /maths
  - name: Matrices
    url: #
recommend:
- maths
- sdk
- introduction
- psp
- ds
editlink: /pages/general/maths/Matrix.md
updatedAt: '2026-04-25'
---

# Introduction to Matrices
A matrix is a table of numbers, but in game code the important part is what that table does [^1].
Matrices let engines package translation, rotation, scale, camera transforms, and projection into a form that composes cleanly and applies efficiently to many points at once [^1][^2].

Matrices in games usually show up in three common shapes:
* **`3x3`** - Useful for rotation, scale, and basis changes when no translation is needed
* **`4x4`** - The standard choice for full 3D transforms because it can also encode translation and projection through homogeneous coordinates [^1]
* **`4x3`** - A compact affine form used by some SDKs, including the Nintendo DS, when projection is handled separately

Matrices are useful for:
* **Model transforms** - Move a mesh from local space into world space
* **Camera transforms** - Move the world into camera space
* **Projection** - Convert 3D positions into clip or screen-friendly space
* **Composition** - Combine several transforms into one reusable matrix
* **Batch processing** - Apply one transform to many vertices, bones, or collision points

Khan Academy's introduction to matrices is a useful warm-up if you want a quick visual refresher on what matrices are and how to read them:

<iframe width="560" height="315" src="https://www.youtube.com/embed/xyAuNHPsq-g" title="Introduction to matrices" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If vectors are still new, it helps to read that page first because matrix math builds directly on vector operations:
{% include_cached link-to-other-post.html post="/Vectors" description="Vectors are the building blocks that matrices transform, combine, and project." %}

---
## Core Matrix Concepts
### Identity matrix
The identity matrix is the matrix equivalent of multiplying by `1`.
Applying it leaves a vector unchanged, which is why it is the default starting point for many transform pipelines [^1].

This is the smallest useful example:

```ts
type Vec2 = { x: number; y: number };
type Mat2 = [[number, number], [number, number]];

function multiplyMat2Vec2(m: Mat2, v: Vec2): Vec2 {
  return {
    x: m[0][0] * v.x + m[0][1] * v.y,
    y: m[1][0] * v.x + m[1][1] * v.y,
  };
}

const identity: Mat2 = [
  [1, 0],
  [0, 1],
];

const velocity = { x: 3, y: -2 };
const unchanged = multiplyMat2Vec2(identity, velocity);
```

In this example `unchanged` is still `{ x: 3, y: -2 }`.
That sounds trivial, but it matters because identity matrices are the neutral element you compose other transforms onto.

### Matrix-vector multiplication
The most important matrix operation in games is multiplying a matrix by a point or direction.
That is how a local-space vertex becomes a world-space vertex, or how a world-space point becomes a camera-space point [^1][^3].

This small 2D homogeneous-coordinate example shows a translation:

```ts
type Vec3 = { x: number; y: number; w: number };
type Mat3 = [
  [number, number, number],
  [number, number, number],
  [number, number, number],
];

function multiplyMat3Vec3(m: Mat3, v: Vec3): Vec3 {
  return {
    x: m[0][0] * v.x + m[0][1] * v.y + m[0][2] * v.w,
    y: m[1][0] * v.x + m[1][1] * v.y + m[1][2] * v.w,
    w: m[2][0] * v.x + m[2][1] * v.y + m[2][2] * v.w,
  };
}

const translateRightBy3: Mat3 = [
  [1, 0, 3],
  [0, 1, 0],
  [0, 0, 1],
];

const point = { x: 2, y: 1, w: 1 };
const moved = multiplyMat3Vec3(translateRightBy3, point);
```

In this example `moved` becomes `{ x: 5, y: 1, w: 1 }`.
The extra `w` lane is what lets a matrix encode translation instead of only rotation and scale.

### Composition and order
One of the biggest practical lessons with matrices is that transform order matters [^2].
Scaling, then rotating, then translating is not the same as translating first and scaling afterward.

This example shows why:

```ts
type Mat3 = [
  [number, number, number],
  [number, number, number],
  [number, number, number],
];

type Vec3 = { x: number; y: number; w: number };

function multiplyMat3(a: Mat3, b: Mat3): Mat3 {
  return [
    [
      a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0],
      a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1],
      a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2],
    ],
    [
      a[1][0] * b[0][0] + a[1][1] * b[1][0] + a[1][2] * b[2][0],
      a[1][0] * b[0][1] + a[1][1] * b[1][1] + a[1][2] * b[2][1],
      a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2] * b[2][2],
    ],
    [
      a[2][0] * b[0][0] + a[2][1] * b[1][0] + a[2][2] * b[2][0],
      a[2][0] * b[0][1] + a[2][1] * b[1][1] + a[2][2] * b[2][1],
      a[2][0] * b[0][2] + a[2][1] * b[1][2] + a[2][2] * b[2][2],
    ],
  ];
}

function multiplyMat3Vec3(m: Mat3, v: Vec3): Vec3 {
  return {
    x: m[0][0] * v.x + m[0][1] * v.y + m[0][2] * v.w,
    y: m[1][0] * v.x + m[1][1] * v.y + m[1][2] * v.w,
    w: m[2][0] * v.x + m[2][1] * v.y + m[2][2] * v.w,
  };
}

const scaleX2: Mat3 = [
  [2, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

const translateRightBy5: Mat3 = [
  [1, 0, 5],
  [0, 1, 0],
  [0, 0, 1],
];

const point = { x: 1, y: 0, w: 1 };

const scaleThenMove = multiplyMat3Vec3(multiplyMat3(translateRightBy5, scaleX2), point);
const moveThenScale = multiplyMat3Vec3(multiplyMat3(scaleX2, translateRightBy5), point);
```

In this example `scaleThenMove` becomes `{ x: 7, y: 0, w: 1 }`, while `moveThenScale` becomes `{ x: 12, y: 0, w: 1 }`.
That is why APIs that expose `Before` and `After` variants are useful: they make the ordering explicit instead of forcing you to guess.

### 3x3, 4x3, 4x4, and homogeneous coordinates
In game math, matrix size usually tells you what kind of transform is being represented:
* **`3x3`** - Rotation, scale, or basis conversion only
* **`4x3`** - Affine 3D transform, usually rotation/scale plus translation, but not full projective math
* **`4x4`** - Full transform matrix, including projection [^1]

The usual trick behind `4x4` matrices is homogeneous coordinates [^1].
Points get a final coordinate of `w = 1`, while pure directions use `w = 0`.
That distinction is what makes translation affect positions but not affect direction vectors such as normals, velocity axes, or camera basis directions.

### Transpose
Transposing a matrix swaps rows and columns [^4].
That sounds simple, but it matters because engines and APIs often disagree about whether basis vectors live in rows or columns, or whether matrices are meant to be read left-to-right or right-to-left.
That row-major versus column-major confusion is one of the main reasons matrix code can feel inconsistent across engines even when the underlying math is the same.

For example:

```text
1 2 3        1 4 7
4 5 6   ->   2 5 8
7 8 9        3 6 9
```

In graphics code, transpose often appears when converting between storage conventions or when preparing data for another API that expects the opposite orientation [^4].

### View and projection matrices
Once you move past model transforms, matrices also define how the camera sees the world:
* **View matrix** - Moves world-space points into camera space, often through a `LookAt` helper
* **Perspective matrix** - Makes distant objects appear smaller and defines a frustum with a field of view, aspect ratio, and near/far clip planes [^1][^5]
* **Orthographic matrix** - Preserves parallel lines and does not apply perspective foreshortening [^1]
* **Frustum matrix** - Encodes an off-centre viewing volume directly, which is useful in lower-level rendering APIs

Here is a small `LookAt`-style example showing the intent of a view matrix:

```ts
const eye = { x: 0, y: 2, z: 5 };
const target = { x: 0, y: 0, z: 0 };
const up = { x: 0, y: 1, z: 0 };

// A real LookAt helper would build orthonormal axes from these values
// and produce a view matrix that transforms world-space points into
// camera-space coordinates.
```

In this setup the camera sits slightly above and behind the origin, looks toward the world origin, and uses positive `Y` as its up direction.
That is exactly the kind of input later SDK helpers such as `MTX_LookAt` on DS or `sceVfpuLookAtMatrix` on PSP are designed to consume.

The video below provides a visual explanation of how a perspective matrix turns a viewing frustum into clip-space coordinates and why field of view, aspect ratio, and clip planes all matter:

<iframe width="560" height="315" src="https://www.youtube.com/embed/jeO_ytN_0kk" title="Perspective matrix walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to continue from matrices into rotation-specific representations, the Quaternion page is the natural next step:
{% include_cached link-to-other-post.html post="/Quaternions" description="Quaternions solve many of the rotation problems that become awkward with matrix-only or Euler-only workflows." %}
Matrices can represent rotation perfectly well, but quaternions are often preferred when you need stable interpolation between orientations or want to avoid some of the bookkeeping problems that come with repeated Euler-style rotations.

---
## Matrix Libraries used in Retail Console Game Development
Looking at retail SDK headers is useful because it shows which matrix operations console programmers expected to use frequently.

### Nintendo DS Official Matrix Library
The Nintendo DS boot ROM headers expose a compact matrix helper API in `IrisMTX.h`, which is catalogued in this site's Platinum leak coverage [^6].
Before looking at the declarations, a few details stand out:
* **Three distinct matrix shapes** - `Mtx`, `Mtx33`, and `Mtx44` map neatly onto affine transforms, rotation/scale-only transforms, and full projection-oriented matrices
* **A compact affine default** - `Mtx` is stored as `4x3`, which is a strong hint that the DS SDK treated full `4x4` projection as a special case rather than the default
* **Order-aware helpers** - Functions such as `TranslateBefore`, `TranslateAfter`, `ScaleBefore`, and `ScaleAfter` make transform order explicit
* **Quantized angle domains** - Rotation helpers with `256`, `1024`, and `4096` variants suggest lookup-table or fixed-point style angle representations rather than plain floating-point radians
* **Precomputed trig and fast paths** - `SinCos` and `Fast` variants show the same performance-conscious flavour we already saw in the DS vector library
* **Full camera pipeline support** - `LookAt`, `Perspective`, `Frustum`, and `Ortho` show that the SDK was trying to cover the whole transform stack, not just local object movement

The split between `Mtx33`, `Mtx`, and `Mtx44` is especially informative.
A `3x3` matrix is enough for orientation and scale, a `4x3` matrix is enough for most model or view transforms, and the header explicitly reserves `4x4` matrices for cases such as projection.
That is a very game-engine-shaped design.

The `256`, `1024`, and `4096` rotation suffixes are also a good clue that the SDK expected developers to work with quantized turn units rather than only with conventional floating-point radians.
Those variants likely correspond to different angle-resolution domains or lookup-table granularities.

{% capture matrix_types_tab %}
Here are the main storage types exposed by the header:

```c
typedef s32 MtxRow3_t[3];
typedef struct {
    MtxRow3_t r;
} MtxRow3;

typedef MtxRow3   MtxRow;
typedef MtxRow3   Mtx33Row;

typedef vl MtxRow    vMtxRow;
typedef vl MtxRow3   vMtxRow3;
typedef vl Mtx33Row  vMtx33Row;

typedef s32 MtxRow4_t[4];
typedef struct {
    MtxRow4_t r;
} MtxRow4;

typedef MtxRow4   Mtx44Row;

typedef vl MtxRow4   vMtxRow4;
typedef vl Mtx44Row  vMtx44Row;

// compact 4x3 affine matrix
typedef s32 Mtx_t[4][3];
typedef union {
    Mtx_t m;
} Mtx;
typedef vl Mtx vMtx;

// 3x3 rotation/scale matrix
typedef s32 Mtx33_t[3][3];
typedef union {
    Mtx33_t m;
} Mtx33;
typedef vl Mtx33 vMtx33;

// full 4x4 matrix, used for projection
typedef s32 Mtx44_t[4][4];
typedef union {
    Mtx44_t m;
} Mtx44;
typedef vl Mtx44 vMtx44;
```

{% endcapture %}

{% capture matrix_functions_tab %}
Here are the main matrix helpers exposed by the header:

```c
void MTX_Identity(Mtx *dstp);
void MTX33_Identity(Mtx33 *dstp);
void MTX44_Identity(Mtx44 *dstp);

void MTX_Copy(      const Mtx *srcp, Mtx   *dstp);
void MTX_Copy2Mtx33(const Mtx *srcp, Mtx33 *dstp);
void MTX_Copy2Mtx44(const Mtx *srcp, Mtx44 *dstp);

void MTX33_Copy(      const Mtx33 *srcp, Mtx33 *dstp);
void MTX33_Copy2Mtx(  const Mtx33 *srcp, Mtx   *dstp);
void MTX33_Copy2Mtx44(const Mtx33 *srcp, Mtx44 *dstp);

void MTX44_Copy(      const Mtx44 *srcp, Mtx44 *dstp);
void MTX44_Copy2Mtx(  const Mtx44 *srcp, Mtx   *dstp);
void MTX44_Copy2Mtx33(const Mtx44 *srcp, Mtx33 *dstp);

void MTX_Concat(Mtx *src0p, Mtx *src1p, Mtx *dstp);
void MTX33_Concat(Mtx33 *src0p, Mtx33 *src1p, Mtx33 *dstp);
void MTX44_Concat(Mtx44 *src0p, Mtx44 *src1p, Mtx44 *dstp);

void MTX_Transpose(Mtx *srcp, Mtx *dstp);
void MTX33_Transpose(Mtx33 *srcp, Mtx33 *dstp);
void MTX44_Transpose(Mtx44 *srcp, Mtx44 *dstp);

void MTX_Translate(Mtx *dstp, s32 x, s32 y, s32 z);
void MTX44_Translate(Mtx44 *dstp, s32 x, s32 y, s32 z);

void MTX_TranslateBefore(Mtx *srcp, Mtx *dstp, s32 x, s32 y, s32 z);
void MTX44_TranslateBefore(Mtx44 *srcp, Mtx44 *dstp, s32 x, s32 y, s32 z);

void MTX_TranslateAfter(Mtx *srcp, Mtx *dstp, s32 x, s32 y, s32 z);
void MTX44_TranslateAfter(Mtx44 *srcp, Mtx44 *dstp, s32 x, s32 y, s32 z);

void MTX_Scale(Mtx *dstp, s32 xS, s32 yS, s32 zS);
void MTX33_Scale(Mtx33 *dstp, s32 xS, s32 yS, s32 zS);
void MTX44_Scale(Mtx44 *dstp, s32 xS, s32 yS, s32 zS);

void MTX_ScaleBefore(Mtx *srcp, Mtx *dstp, s32 xS, s32 yS, s32 zS);
void MTX33_ScaleBefore(Mtx33 *srcp, Mtx33 *dstp, s32 xS, s32 yS, s32 zS);
void MTX44_ScaleBefore(Mtx44 *srcp, Mtx44 *dstp, s32 xS, s32 yS, s32 zS);

void MTX_ScaleAfter(Mtx *srcp, Mtx *dstp, s32 xS, s32 yS, s32 zS);
void MTX33_ScaleAfter(Mtx33 *srcp, Mtx33 *dstp, s32 xS, s32 yS, s32 zS);
void MTX44_ScaleAfter(Mtx44 *srcp, Mtx44 *dstp, s32 xS, s32 yS, s32 zS);

#define MTX_RotateX(dstp, theta)           MTXxx_RotatePriv(_,   X, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX_RotateY(dstp, theta)           MTXxx_RotatePriv(_,   Y, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX_RotateZ(dstp, theta)           MTXxx_RotatePriv(_,   Z, SIN_NDIV_DEFAULT, dstp, theta)

#define MTX33_RotateX(dstp, theta)         MTXxx_RotatePriv(33_, X, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX33_RotateY(dstp, theta)         MTXxx_RotatePriv(33_, Y, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX33_RotateZ(dstp, theta)         MTXxx_RotatePriv(33_, Z, SIN_NDIV_DEFAULT, dstp, theta)

#define MTX44_RotateX(dstp, theta)         MTXxx_RotatePriv(44_, X, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX44_RotateY(dstp, theta)         MTXxx_RotatePriv(44_, Y, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX44_RotateZ(dstp, theta)         MTXxx_RotatePriv(44_, Z, SIN_NDIV_DEFAULT, dstp, theta)

void MTX_RotateX256(Mtx *dstp, u32 theta);
void MTX_RotateY256(Mtx *dstp, u32 theta);
void MTX_RotateZ256(Mtx *dstp, u32 theta);
void MTX_RotateX1024(Mtx *dstp, u32 theta);
void MTX_RotateY1024(Mtx *dstp, u32 theta);
void MTX_RotateZ1024(Mtx *dstp, u32 theta);
void MTX_RotateX4096(Mtx *dstp, u32 theta);
void MTX_RotateY4096(Mtx *dstp, u32 theta);
void MTX_RotateZ4096(Mtx *dstp, u32 theta);

void MTX33_RotateX256(Mtx33 *dstp, u32 theta);
void MTX33_RotateY256(Mtx33 *dstp, u32 theta);
void MTX33_RotateZ256(Mtx33 *dstp, u32 theta);
void MTX33_RotateX1024(Mtx33 *dstp, u32 theta);
void MTX33_RotateY1024(Mtx33 *dstp, u32 theta);
void MTX33_RotateZ1024(Mtx33 *dstp, u32 theta);
void MTX33_RotateX4096(Mtx33 *dstp, u32 theta);
void MTX33_RotateY4096(Mtx33 *dstp, u32 theta);
void MTX33_RotateZ4096(Mtx33 *dstp, u32 theta);

void MTX44_RotateX256(Mtx44 *dstp, u32 theta);
void MTX44_RotateY256(Mtx44 *dstp, u32 theta);
void MTX44_RotateZ256(Mtx44 *dstp, u32 theta);
void MTX44_RotateX1024(Mtx44 *dstp, u32 theta);
void MTX44_RotateY1024(Mtx44 *dstp, u32 theta);
void MTX44_RotateZ1024(Mtx44 *dstp, u32 theta);
void MTX44_RotateX4096(Mtx44 *dstp, u32 theta);
void MTX44_RotateY4096(Mtx44 *dstp, u32 theta);
void MTX44_RotateZ4096(Mtx44 *dstp, u32 theta);

#define MTXxx_RotatePriv(xx_, axis, ndiv, dstp, theta) MTXxx_RotateNDiv(xx_, axis, ndiv, dstp, theta)
#define MTXxx_RotateNDiv(xx_, axis, ndiv, dstp, theta) MTX##xx_##Rotate##axis##ndiv(dstp, theta)

void MTX_RotateXSinCos(Mtx *dstp, s32 sinA, s32 cosA);
void MTX_RotateYSinCos(Mtx *dstp, s32 sinA, s32 cosA);
void MTX_RotateZSinCos(Mtx *dstp, s32 sinA, s32 cosA);

void MTX33_RotateXSinCos(Mtx33 *dstp, s32 sinA, s32 cosA);
void MTX33_RotateYSinCos(Mtx33 *dstp, s32 sinA, s32 cosA);
void MTX33_RotateZSinCos(Mtx33 *dstp, s32 sinA, s32 cosA);

void MTX44_RotateXSinCos(Mtx44 *dstp, s32 sinA, s32 cosA);
void MTX44_RotateYSinCos(Mtx44 *dstp, s32 sinA, s32 cosA);
void MTX44_RotateZSinCos(Mtx44 *dstp, s32 sinA, s32 cosA);

#define MTX_RotateAxis(dstp, axisp, theta)          MTXxx_RotateAxisPriv(_,   SIN_NDIV_DEFAULT, dstp, axisp, theta)
#define MTX_RotateAxisFast(dstp, axisp, theta)      MTXxx_RotateAxisPrivFast(_,   SIN_NDIV_DEFAULT, dstp, axisp, theta)

#define MTX33_RotateAxis(dstp, axisp, theta)        MTXxx_RotateAxisPriv(33_, SIN_NDIV_DEFAULT, dstp, axisp, theta)
#define MTX33_RotateAxisFast(dstp, axisp, theta)    MTXxx_RotateAxisPrivFast(33_, SIN_NDIV_DEFAULT, dstp, axisp, theta)

#define MTX44_RotateAxis(dstp, axisp, theta)        MTXxx_RotateAxisPriv(44_, SIN_NDIV_DEFAULT, dstp, axisp, theta)
#define MTX44_RotateAxisFast(dstp, axisp, theta)    MTXxx_RotateAxisPrivFast(44_, SIN_NDIV_DEFAULT, dstp, axisp, theta)

void MTX_RotateAxis256(Mtx *dstp, const Vec *axisp, u32 theta);
void MTX_RotateAxis256Fast(Mtx *dstp, const Vec *axisp, u32 theta);
void MTX_RotateAxis1024(Mtx *dstp, const Vec *axisp, u32 theta);
void MTX_RotateAxis1024Fast(Mtx *dstp, const Vec *axisp, u32 theta);
void MTX_RotateAxis4096(Mtx *dstp, const Vec *axisp, u32 theta);
void MTX_RotateAxis4096Fast(Mtx *dstp, const Vec *axisp, u32 theta);

void MTX33_RotateAxis256(Mtx33 *dstp, const Vec *axisp, u32 theta);
void MTX33_RotateAxis256Fast(Mtx33 *dstp, const Vec *axisp, u32 theta);
void MTX33_RotateAxis1024(Mtx33 *dstp, const Vec *axisp, u32 theta);
void MTX33_RotateAxis1024Fast(Mtx33 *dstp, const Vec *axisp, u32 theta);
void MTX33_RotateAxis4096(Mtx33 *dstp, const Vec *axisp, u32 theta);
void MTX33_RotateAxis4096Fast(Mtx33 *dstp, const Vec *axisp, u32 theta);

void MTX44_RotateAxis256(Mtx44 *dstp, const Vec *axisp, u32 theta);
void MTX44_RotateAxis256Fast(Mtx44 *dstp, const Vec *axisp, u32 theta);
void MTX44_RotateAxis1024(Mtx44 *dstp, const Vec *axisp, u32 theta);
void MTX44_RotateAxis1024Fast(Mtx44 *dstp, const Vec *axisp, u32 theta);
void MTX44_RotateAxis4096(Mtx44 *dstp, const Vec *axisp, u32 theta);
void MTX44_RotateAxis4096Fast(Mtx44 *dstp, const Vec *axisp, u32 theta);

#define MTXxx_RotateAxisPriv(xx_, ndiv, dstp, axisp, theta)     MTXxx_RotateAxisNDiv(xx_, ndiv, dstp, axisp, theta)
#define MTXxx_RotateAxisPrivFast(xx_, ndiv, dstp, axisp, theta) MTXxx_RotateAxisNDivFast(xx_, ndiv, dstp, axisp, theta)
#define MTXxx_RotateAxisNDiv(xx_, ndiv, dstp, axisp, theta)     MTX##xx_##RotateAxis##ndiv(dstp, axisp, theta)
#define MTXxx_RotateAxisNDivFast(xx_, ndiv, dstp, axisp, theta) MTX##xx_##RotateAxis##ndiv##Fast(dstp, axisp, theta)

void MTX_RotateAxisSinCos(Mtx *dstp, const Vec *axisp, s32 sinA, s32 cosA);
void MTX_RotateAxisSinCosFast(Mtx *dstp, const Vec *axisp, s32 sinA, s32 cosA);

void MTX33_RotateAxisSinCos(Mtx33 *dstp, const Vec *axisp, s32 sinA, s32 cosA);
void MTX33_RotateAxisSinCosFast(Mtx33 *dstp, const Vec *axisp, s32 sinA, s32 cosA);

void MTX44_RotateAxisSinCos(Mtx44 *dstp, const Vec *axisp, s32 sinA, s32 cosA);
void MTX44_RotateAxisSinCosFast(Mtx44 *dstp, const Vec *axisp, s32 sinA, s32 cosA);

void MTX_AlignZ(Mtx *dstp, const Vec *vLookInvp);
void MTX33_AlignZ(Mtx33 *dstp, const Vec *vLookInvp);
void MTX44_AlignZ(Mtx44 *dstp, const Vec *vLookInvp);

void MTX_QuatMtx(Mtx *dstp, const Quat *quatp);
void MTX_QuatMtxFast(Mtx *dstp, const Quat *quatp);

void MTX33_QuatMtx(Mtx33 *dstp, const Quat *quatp);
void MTX33_QuatMtxFast(Mtx33 *dstp, const Quat *quatp);

void MTX44_QuatMtx(Mtx44 *dstp, const Quat *quatp);
void MTX44_QuatMtxFast(Mtx44 *dstp, const Quat *quatp);

void MTX_LookAt(Mtx *dstp, const Pos *eye, const Pos *at, const Vec *vUp, Vec *vDst);
void MTX_LookAtFast(Mtx *dstp, const Pos *eye, const Pos *at, const Vec *vUp, Vec *vDst);

#define MTX44_Perspective(dstp, fovy, aspect, near, far, scaleW) MTX44_PerspectivePriv(SIN_NDIV_DEFAULT, dstp, fovy, aspect, near, far, scaleW)

void MTX44_Perspective256(Mtx44 *dstp, u32 fovy, s32 aspect, s32 near, s32 far, s32 scaleW);
void MTX44_Perspective1024(Mtx44 *dstp, u32 fovy, s32 aspect, s32 near, s32 far, s32 scaleW);
void MTX44_Perspective4096(Mtx44 *dstp, u32 fovy, s32 aspect, s32 near, s32 far, s32 scaleW);

#define MTX44_PerspectivePriv(ndiv, dstp, fovy, aspect, near, far, scaleW) MTX44_PerspectiveNDiv(ndiv, dstp, fovy, aspect, near, far, scaleW)
#define MTX44_PerspectiveNDiv(ndiv, dstp, fovy, aspect, near, far, scaleW) MTX44_Perspective##ndiv(dstp, fovy, aspect, near, far, scaleW)

void MTX44_PerspectiveSinCos(Mtx44 *dstp, s32 sinA, s32 aspect, s32 near, s32 far, s32 scaleW, s32 cosA);

void MTX44_Frustum(Mtx44 *dstp, s32 t, s32 b, s32 l, s32 r, s32 n, s32 f, s32 scaleW);
void MTX44_Ortho(Mtx44 *dstp, s32 t, s32 b, s32 l, s32 r, s32 n, s32 f, s32 scaleW);

void MTX_MultVec(const Mtx *mult, Vec *srcp, Vec *dstp);
void MTX33_MultVec(const Mtx33 *mult, Vec *srcp, Vec *dstp);
void MTX44_MultVec(const Mtx44 *mult, Vec *srcp, Vec *dstp);

void MTX_MultVecArray(const Mtx *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
void MTX33_MultVecArray(const Mtx33 *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
void MTX44_MultVecArray(const Mtx44 *mult, Vec *srcBasep, Vec *dstBasep, u32 count);

void MTX_MultVecSR(const Mtx *mult, Vec *srcp, Vec *dstp);
void MTX44_MultVecSR(const Mtx44 *mult, Vec *srcp, Vec *dstp);

void MTX_MultVecArraySR(const Mtx *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
void MTX44_MultVecArraySR(const Mtx44 *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
```

{% endcapture %}

{% capture matrix_tabs %}
{% include rr-tab.html title="DS Matrix Types" default=true content=matrix_types_tab %}
{% include rr-tab.html title="DS Matrix Functions" content=matrix_functions_tab %}
{% endcapture %}
{% include rr-tabs.html group="ds-matrix-group" tabs=matrix_tabs %}

Names like `MTX_MultVecSR` are also revealing.
That suffix likely means "scale and rotation only", which is exactly the distinction you want when transforming directions or normals without accidentally applying translation.

You can find out more about the Nintendo DS boot ROM in the Platinum leak:
{% include_cached link-to-other-post.html post="/platinumleak" description="For more information on the Nintendo Platinum leak that exposed these DS headers, check out this post." %}

---
### Sony PSP Matrix Library
The official PlayStation Portable (PSP) SDK exposes matrix types through `psptypes.h` and matrix helpers through the VFPU library header `libvfpu.h` [^7].
Compared with the DS headers, this API feels much closer to a modern graphics math layer built directly around floating-point transforms and rendering workloads.

Several details stand out immediately:
* **Float-first matrix types** - The core storage types are `ScePspFMatrix2`, `ScePspFMatrix3`, and `ScePspFMatrix4`, which matches the PSP VFPU's vector-oriented floating-point design
* **16-byte alignment on 4D data** - `ScePspFMatrix4` and related `Vector4` types are aligned for VFPU-friendly access and bulk operations
* **Matrix storage as vector lanes** - The `x`, `y`, `z`, and `w` fields are themselves vectors, and the unions let the same data be viewed as vectors, raw `float[4][4]` storage, or 128-bit quads
* **Translation as a dedicated lane** - The implementation of `sceVfpuMatrix4SetTransfer` and `sceVfpuMatrix4GetTransfer` shows that the `w` vector is used as the translation lane in the 4D matrix form [^8]
* **A full camera pipeline** - The SDK does not stop at identity, multiplication, and transpose. It also includes `LookAt`, perspective, orthographic, view-screen, drop-shadow, and combined transform-plus-perspective helpers

The PSP matrix API is also more explicit about the jump from algebra to rendering.
Functions such as `sceVfpuLookAtMatrix`, `sceVfpuPerspectiveMatrix`, `sceVfpuViewScreenMatrix`, and `sceVfpuRotTransPers` show that the SDK was designed to help developers move directly from world-space transforms to projected screen-space results [^8].
As with the PSP vector library, `XYZ` variants usually mean "operate on the spatial part only", so helpers such as `ApplyXYZ` or `NormalizeXYZ` treat `x`, `y`, and `z` as the active transform data while preserving or sidelining the `w` component as needed [^8].

{% capture psp_matrix_types_tab %}
Here are the main storage types exposed by `psptypes.h`.
Like the PSP vector types, these matrices are built from named vector lanes and then wrapped in unions so the same memory can be viewed in several ways:

```c
// 2D matrices
typedef struct ScePspFMatrix2 {
  ScePspFVector2 x, y;
} ScePspFMatrix2;

typedef union ScePspMatrix2 {
  ScePspFMatrix2 fm;
  ScePspFVector2 fv[2];
  float f[2][2];
  SceULong128 qw[2];
} ScePspMatrix2;

// 3D matrices
typedef struct ScePspFMatrix3 {
  ScePspFVector3 x, y, z;
} ScePspFMatrix3;

typedef union ScePspMatrix3 {
  ScePspFMatrix3 fm;
  ScePspFVector3 fv[3];
  float f[3][3];
  SceULong128 qw[3];
} ScePspMatrix3;

// 4D matrices
typedef struct ScePspFMatrix4 {
  ScePspFVector4 x, y, z, w;
} ScePspFMatrix4 __attribute__((aligned(16)));

typedef struct ScePspFMatrix4Unaligned {
  ScePspFVector4Unaligned x, y, z, w;
} ScePspFMatrix4Unaligned;

typedef union ScePspMatrix4 {
  ScePspFMatrix4 fm;
  ScePspFVector4 fv[4];
  float f[4][4];
  SceULong128 qw[4];
} ScePspMatrix4 __attribute__((aligned(16)));
```
{% endcapture %}

{% capture psp_matrix_functions_tab %}
Here are the main matrix helpers exposed by `libvfpu.h`.
As with the PSP vector section, repeated `2`/`3`/`4` families are compacted into one representative declaration with related variants in a trailing comment:

```c
// Identity, zero, and copy
#define sceVfpuMatrix2Identity(_pm)                      sceVfpuMatrix2Unit(_pm) // Variants: sceVfpuMatrix3Identity, sceVfpuMatrix4Identity
ScePspFMatrix2 *sceVfpuMatrix2Unit(ScePspFMatrix2 *pm); // Variants: sceVfpuMatrix3Unit, sceVfpuMatrix4Unit
#define sceVfpuMatrix2Null(_pm)                          sceVfpuMatrix2Zero(_pm) // Variants: sceVfpuMatrix3Null, sceVfpuMatrix4Null
ScePspFMatrix2 *sceVfpuMatrix2Zero(ScePspFMatrix2 *pm); // Variants: sceVfpuMatrix3Zero, sceVfpuMatrix4Zero
ScePspFMatrix2 *sceVfpuMatrix2Copy(ScePspFMatrix2 *pm0, const ScePspFMatrix2 *pm1); // Variants: sceVfpuMatrix3Copy, sceVfpuMatrix4Copy

// Apply matrices to vectors
ScePspFVector2 *sceVfpuMatrix2Apply(ScePspFVector2 *pv0, const ScePspFMatrix2 *pm0, const ScePspFVector2 *pv1); // Variants: sceVfpuMatrix3Apply, sceVfpuMatrix4Apply
ScePspFVector4 *sceVfpuMatrix4ApplyXYZ(ScePspFVector4 *pv0, const ScePspFMatrix4 *pm0, const ScePspFVector4 *pv1);

// Matrix-matrix operations
ScePspFMatrix2 *sceVfpuMatrix2Mul(ScePspFMatrix2 *pm0, const ScePspFMatrix2 *pm1, const ScePspFMatrix2 *pm2); // Variants: sceVfpuMatrix3Mul, sceVfpuMatrix4Mul
ScePspFMatrix2 *sceVfpuMatrix2Scale(ScePspFMatrix2 *pm0, const ScePspFMatrix2 *pm1, float s); // Variants: sceVfpuMatrix3Scale, sceVfpuMatrix4Scale
ScePspFMatrix2 *sceVfpuMatrix2Transpose(ScePspFMatrix2 *pm0, const ScePspFMatrix2 *pm1); // Variants: sceVfpuMatrix3Transpose, sceVfpuMatrix4Transpose

// Normalization and inverse
#define sceVfpuMatrix4Invers(_m0,_m1)                    sceVfpuMatrix4Inverse(_m0,_m1)
ScePspFMatrix4 *sceVfpuMatrix4Inverse(ScePspFMatrix4 *pm0, const ScePspFMatrix4 *pm1);
ScePspFMatrix3 *sceVfpuMatrix3Normalize(ScePspFMatrix3 *pm0, const ScePspFMatrix3 *pm1);
ScePspFMatrix4 *sceVfpuMatrix4NormalizeXYZ(ScePspFMatrix4 *pm0, const ScePspFMatrix4 *pm1);

// Rotation builders
ScePspFMatrix2 *sceVfpuMatrix2RotZ(ScePspFMatrix2 *pm0, const ScePspFMatrix2 *pm1, float rz);
ScePspFMatrix3 *sceVfpuMatrix3RotX(ScePspFMatrix3 *pm0, const ScePspFMatrix3 *pm1, float rx); // Variants: sceVfpuMatrix3RotY, sceVfpuMatrix3RotZ
ScePspFMatrix3 *sceVfpuMatrix3Rot(ScePspFMatrix3 *pm0, const ScePspFMatrix3 *pm1, const ScePspFVector3 *rot);
ScePspFMatrix4 *sceVfpuMatrix4RotX(ScePspFMatrix4 *pm0, const ScePspFMatrix4 *pm1, float rx); // Variants: sceVfpuMatrix4RotY, sceVfpuMatrix4RotZ
ScePspFMatrix4 *sceVfpuMatrix4Rot(ScePspFMatrix4 *pm0, const ScePspFMatrix4 *pm1, const ScePspFVector4 *rot);

// Translation lane helpers
ScePspFMatrix4 *sceVfpuMatrix4Transfer(ScePspFMatrix4 *pm0, const ScePspFMatrix4 *pm1, const ScePspFVector4 *ptv);
ScePspFMatrix4 *sceVfpuMatrix4SetTransfer(ScePspFMatrix4 *pm, const ScePspFVector4 *ptv);
ScePspFVector4 *sceVfpuMatrix4GetTransfer(ScePspFVector4 *pv, const ScePspFMatrix4 *pm);

// Queries and algebra helpers
#define sceVfpuMatrix2IsIdentity(_pm)                    sceVfpuMatrix2IsUnit(_pm) // Variants: sceVfpuMatrix3IsIdentity, sceVfpuMatrix4IsIdentity
SceBool sceVfpuMatrix2IsUnit(const ScePspFMatrix2 *pm); // Variants: sceVfpuMatrix3IsUnit, sceVfpuMatrix4IsUnit
float sceVfpuMatrix2Trace(const ScePspFMatrix2 *pm); // Variants: sceVfpuMatrix3Trace, sceVfpuMatrix4Trace
float sceVfpuMatrix2Determinant(const ScePspFMatrix2 *pm); // Variants: sceVfpuMatrix3Determinant, sceVfpuMatrix4Determinant
ScePspFMatrix2 *sceVfpuMatrix2Adjoint(ScePspFMatrix2 *pm0, const ScePspFMatrix2 *pm1); // Variants: sceVfpuMatrix3Adjoint, sceVfpuMatrix4Adjoint

// Matrix and quaternion bridge
ScePspFMatrix4 *sceVfpuQuaternionToMatrix(ScePspFMatrix4 *pm, const ScePspFQuaternion *pq);
ScePspFQuaternion *sceVfpuQuaternionFromMatrix(ScePspFQuaternion *pq, const ScePspFMatrix4 *pm);

// Camera, projection, and render-pipeline helpers
ScePspFMatrix4 *sceVfpuLookAtMatrix(ScePspFMatrix4 *pm0, const ScePspFVector4 *pvEye, const ScePspFVector4 *pvCenter, const ScePspFVector4 *pvUp);
ScePspFMatrix4 *sceVfpuPerspectiveMatrix(ScePspFMatrix4 *pm0, float fovy, float aspect, float r_near, float r_far);
ScePspFMatrix4 *sceVfpuOrthoMatrix(ScePspFMatrix4 *pm0, float left, float right, float bottom, float top, float r_near, float r_far);
ScePspFMatrix4 *sceVfpuCameraMatrix(ScePspFMatrix4 *pm, const ScePspFVector4 *p, const ScePspFVector4 *zd, const ScePspFVector4 *yd);
ScePspFMatrix4 *sceVfpuViewScreenMatrix(ScePspFMatrix4 *pm, float scrz, float ax, float ay, float cx, float cy, float zmin, float zmax, float nearz, float farz);
ScePspFMatrix4 *sceVfpuDropShadowMatrix(ScePspFMatrix4 *pm, const ScePspFVector4 *lp, float a, float b, float c, int mode);
ScePspFVector4 *sceVfpuRotTransPers(ScePspFVector4 *pv0, const ScePspFMatrix4 *pm0, const ScePspFVector4 *pv1);
int sceVfpuRotTransPersN(short *pXyz, int pitch, const ScePspFMatrix4 *pm0, const ScePspFVector4 *pv1, int n);
```
{% endcapture %}

{% capture psp_matrix_tabs %}
{% include rr-tab.html title="PSP Matrix Types" default=true content=psp_matrix_types_tab %}
{% include rr-tab.html title="PSP Matrix Functions" content=psp_matrix_functions_tab %}
{% endcapture %}
{% include rr-tabs.html group="psp-matrix-group" tabs=psp_matrix_tabs %}

The PSP SDK function names also reveal how the library is meant to be used in practice [^8]:
* `Apply` and `Mul` map directly onto VFPU matrix-transform instructions in the source, which makes the whole API feel like a thin but useful abstraction over the hardware
* `Transfer`, `SetTransfer`, and `GetTransfer` are the PSP SDK's names for translation helpers rather than more modern names like `Translate` or `SetTranslation`
* `LookAtMatrix` builds a camera basis from eye, target, and up vectors using cross products and normalization
* `PerspectiveMatrix`, `OrthoMatrix`, and `ViewScreenMatrix` show the full path from camera space to projected and screen-oriented coordinates
* `RotTransPers` and `RotTransPersN` are especially game-oriented because they combine transform and perspective divide in one step, with the `N` variant handling batches of points

---
# References
[^1]: [Unity Scripting API - Matrix4x4](https://docs.unity3d.com/ScriptReference/Matrix4x4.html)
[^2]: [Unity Scripting API - Matrix4x4.TRS](https://docs.unity3d.com/ScriptReference/Matrix4x4.TRS.html)
[^3]: [Unity Scripting API - Matrix4x4.MultiplyPoint3x4](https://docs.unity3d.com/ScriptReference/Matrix4x4.MultiplyPoint3x4.html)
[^4]: [Unity Scripting API - Matrix4x4.transpose](https://docs.unity3d.com/ScriptReference/Matrix4x4-transpose.html)
[^5]: [Unity Scripting API - Matrix4x4.Perspective](https://docs.unity3d.com/ScriptReference/Matrix4x4.Perspective.html)
[^6]: [RetroReversing - Nintendo Platinum Leak](/platinumleak)
[^7]: Sony PSP SDK headers `psptypes.h` and `libvfpu.h`.
[^8]: Sony PSP SDK implementations `src/vfpu/matrix2.c`, `src/vfpu/matrix3.c`, `src/vfpu/matrix4.c`, and `src/vfpu/perspective.c`.
