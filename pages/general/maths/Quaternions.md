---
layout: post
tags:
- maths
- psp
- ds
title: Quaternions (Maths for Game Developers)
category: maths
permalink: /Quaternions
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: Maths for Game Developers
    url: /maths
  - name: Quaternions
    url: #
recommend:
- maths
- introduction
- sdk
- psp
- ds
editlink: /pages/general/maths/Quaternions.md
updatedAt: '2026-04-26'
videocarousel:
  - title: Part 1 Gimbal Lock
    image: https://i.ytimg.com/vi/zc8b2Jo7mno/sddefault.jpg
    youtube: 'zc8b2Jo7mno'
  - title: Part 2 Apollo 13
    image: https://img.youtube.com/vi/OmCzZ-D8Wdk/maxresdefault.jpg
    youtube: 'OmCzZ-D8Wdk'
---

# Introduction to Quaternions
A quaternion is a four-number rotation representation, usually written as `{ x, y, z, w }` or as a vector part plus a scalar part [^1].
In game code, the main reason to care about quaternions is not that they are more "advanced" than Euler angles, but that they store orientation in a way that composes cleanly and interpolates well [^1][^2].

Quaternions are useful in games for several common jobs:
* **Orientation storage** - Keep a camera, character, or bone rotation in a compact form
* **Rotation composition** - Combine turns without having to manage three separate Euler channels
* **Interpolation** - Blend smoothly between poses with `Slerp` or related helpers [^3]
* **Matrix generation** - Convert a rotation into a matrix when the renderer or transform stack needs one [^1]

The most important limitation is that quaternions are mainly for rotation.
They are not a general replacement for vectors or matrices.
Vectors still represent positions and directions, while matrices still matter for full transform pipelines and projection:
{% include_cached link-to-other-post.html post="/Vectors" description="Vectors describe directions, offsets, and magnitudes that quaternions often rotate." %}
{% include_cached link-to-other-post.html post="/Matrix" description="Matrices package rotation, translation, scale, and projection, and engines often convert quaternions into matrices for rendering." %}

---
## Glossary of Key Terms
If you are new to rotation-heavy game math, these are the main terms worth keeping straight:
* <a id="glossary-euler"></a>**Euler angles** - A rotation described as separate turns around named axes such as `X`, `Y`, and `Z`.
* <a id="glossary-axis-angle"></a>**Axis-angle** - A rotation described as "rotate by this angle around this axis".
* <a id="glossary-unit-quaternion"></a>**Unit quaternion** - A quaternion with magnitude `1`, which is the form used to represent valid rotations.
* <a id="glossary-slerp"></a>**SLERP** - Spherical linear interpolation, used to blend smoothly between two unit quaternions [^3].

---
## Core Quaternion Concepts

### Why games use quaternions
The big practical win is that quaternions treat orientation as one object instead of three loosely related angle channels [^1].
That makes them a better fit for camera systems, skeletal animation, aiming, and smooth turning.

Compared with storing raw <a href="#glossary-euler">Euler angles</a>, quaternions usually give you:
* **Cleaner interpolation** - Rotations can be blended directly with `Slerp` [^3]
* **Stable composition** - Repeated rotation updates do not require constant angle-order bookkeeping
* **A better internal form** - Engines can still expose Euler angles in tools, while storing quaternions under the hood [^1]

That does not mean Euler angles disappear completely.
They are still useful for editor UIs, debug displays, and human-readable inputs.
The common pattern is "Euler for the user, quaternion for the engine".

### Identity and unit quaternions
The identity quaternion is the neutral rotation, usually `{ x: 0, y: 0, z: 0, w: 1 }` [^1].
Valid rotation quaternions are usually normalized, which means they have magnitude `1` [^1][^4].

This is why engines often normalize a quaternion after repeated math operations:

```ts
type Quat = { x: number; y: number; z: number; w: number };

function quaternionMagnitude(q: Quat): number {
  return Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);
}

function normalizeQuaternion(q: Quat): Quat {
  const len = quaternionMagnitude(q);
  if (len === 0) {
    return { x: 0, y: 0, z: 0, w: 1 };
  }

  return {
    x: q.x / len,
    y: q.y / len,
    z: q.z / len,
    w: q.w / len,
  };
}

const driftedTurn = { x: 0, y: 0.8, z: 0, w: 0.8 };
const repairedTurn = normalizeQuaternion(driftedTurn);
```

In this example `repairedTurn` becomes approximately `{ x: 0, y: 0.7071, z: 0, w: 0.7071 }`.
That matters because a quaternion that drifts away from unit length stops behaving like a clean pure rotation.
Returning identity in the zero-length case is just a defensive code choice for the example.

### Axis-angle conversion
One of the easiest ways to think about a quaternion is through <a href="#glossary-axis-angle">axis-angle</a> input.
Many SDKs build a quaternion from "rotate by this amount around this axis", because that is much easier to reason about than editing raw `x`, `y`, `z`, and `w` by hand [^2].

This small helper converts an axis-angle turn into a quaternion:

```ts
type Vec3 = { x: number; y: number; z: number };
type Quat = { x: number; y: number; z: number; w: number };

function fromAxisAngle(axis: Vec3, radians: number): Quat {
  const axisLen = Math.sqrt(axis.x * axis.x + axis.y * axis.y + axis.z * axis.z);
  const unitAxis = {
    x: axis.x / axisLen,
    y: axis.y / axisLen,
    z: axis.z / axisLen,
  };

  const half = radians * 0.5;
  const sinHalf = Math.sin(half);

  return {
    x: unitAxis.x * sinHalf,
    y: unitAxis.y * sinHalf,
    z: unitAxis.z * sinHalf,
    w: Math.cos(half),
  };
}

const quarterTurnRight = fromAxisAngle({ x: 0, y: 1, z: 0 }, Math.PI / 2);
```

In this example `quarterTurnRight` becomes approximately `{ x: 0, y: 0.7071, z: 0, w: 0.7071 }`.
That is the same idea exposed later by the DS `VEC_Conv2Quat*` helpers and the PSP `sceVfpuQuaternionFromRotate` function.

### Quaternion multiplication and order
Quaternion multiplication combines rotations [^1].
This is one of the most useful operations on the page, but it also carries one of the most important warnings: rotation order matters.
Quaternion multiplication is not commutative, so `a * b` and `b * a` usually mean different things [^1].

This example uses one yaw turn and one pitch turn:

```ts
type Quat = { x: number; y: number; z: number; w: number };

function multiply(a: Quat, b: Quat): Quat {
  return {
    x: a.w * b.x + b.w * a.x + a.y * b.z - a.z * b.y,
    y: a.w * b.y + b.w * a.y + a.z * b.x - a.x * b.z,
    z: a.w * b.z + b.w * a.z + a.x * b.y - a.y * b.x,
    w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
  };
}

const yaw90 = { x: 0, y: 0.7071, z: 0, w: 0.7071 };
const pitch45 = { x: 0.3827, y: 0, z: 0, w: 0.9239 };

const yawThenPitch = multiply(pitch45, yaw90);
const pitchThenYaw = multiply(yaw90, pitch45);
```

Here `yawThenPitch` becomes approximately `{ x: 0.2706, y: 0.6533, z: 0.2706, w: 0.6533 }`, while `pitchThenYaw` becomes approximately `{ x: 0.2706, y: 0.6533, z: -0.2706, w: 0.6533 }`.
That sign flip in `z` is a reminder that changing order changes the resulting orientation.
Exact interpretation depends on the engine's multiplication convention, but the non-commutative nature is universal.

### SLERP
<a href="#glossary-slerp">SLERP</a> is the standard high-quality way to interpolate between two unit quaternions [^3].
It is especially useful for camera turns, animation blending, and "turn smoothly toward target" behaviours because it follows the surface of the unit sphere instead of blending components in a straight line [^3].

This is the kind of gameplay-facing usage most engines expose:

```ts
const identity = { x: 0, y: 0, z: 0, w: 1 };
const ninetyDegreeYaw = { x: 0, y: 0.7071, z: 0, w: 0.7071 };

// A real engine helper would perform quaternion SLERP here.
// At t = 0.5 the result is half way around the unit sphere.
const halfTurn = { x: 0, y: 0.3827, z: 0, w: 0.9239 };
```

In this example `halfTurn` is the quaternion for a `45` degree yaw, which is why SLERP is so common in smooth-turning systems.
Many SDKs also expose cheaper `Lerp` variants beside `Slerp`, which usually signals a quality-versus-speed tradeoff.

---
## Gimbal Lock
Gimbal lock is one of the main reasons engines avoid storing long-lived 3D orientation purely as <a href="#glossary-euler">Euler angles</a>.
It happens when two rotation axes align, reducing the effective degrees of freedom and making some turns ambiguous or awkward to control.
This is not "a quaternion problem".
It is a problem with representing orientation as stacked axis rotations.

[GuerrillaCG](https://www.youtube.com/watch?v=zc8b2Jo7mno) gives a clear visual explanation of how Euler rotations can lose a degree of freedom when axes line up, and why that becomes a practical issue for animation and camera systems.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zc8b2Jo7mno" title="Euler (gimbal lock) Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Quaternions help because the engine can store and compose orientation without constantly re-entering the Euler-angle representation.
That does not mean every quaternion-based workflow is magically free of bad controls.
If a tool keeps converting back to Euler angles for editing, or if the game logic still thinks in Euler order all the time, some of the same practical confusion can reappear.

### Gimbal Lock and Apollo 13
The engineering consequences are easier to remember when you see a real-world case.
[The Vintage Space](https://www.youtube.com/watch?v=OmCzZ-D8Wdk) explains how gimbal lock affected Apollo-era spacecraft navigation and why alignment problems in rotational systems mattered far beyond games.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OmCzZ-D8Wdk" title="Gimbal Lock and Apollo 13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Writing your own Quaternion Library
If you want to implement the math yourself, the most useful starting point is usually:
* build quaternions from axis-angle input
* normalize after operations that may accumulate drift
* support multiply, inverse, and dot product
* add `Slerp` once the core representation is behaving correctly

[thebennybox](https://www.youtube.com/watch?v=GnKGZYcsJ3E) walks through writing a quaternion library in Java, but the real value is the step-by-step explanation of the math and the operations you would mirror in any language.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GnKGZYcsJ3E" title="#6 3D Game Engine Tutorial: Quaternions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Unity
Unity is a useful modern reference point because it exposes the same operations that show up in older SDKs: identity, angle-axis creation, multiplication, inverse, normalization, and `Slerp` [^1][^2][^3][^4][^5].
It also makes the "tool UI versus engine storage" split very visible, because you often edit rotations in Euler form in the Inspector while `Transform.rotation` is stored as a quaternion internally [^1].

The most common Unity quaternion helpers are:
* `Quaternion.AngleAxis` - Build a rotation from an axis and angle [^2]
* `Quaternion.Slerp` - Blend smoothly between rotations [^3]
* `Quaternion.Inverse` - Compute the opposite rotation [^5]
* `Quaternion.LookRotation` - Build an orientation from `forward` and `up` vectors [^6]
* `Quaternion.ToAngleAxis` - Convert a quaternion back into axis-angle form [^7]

[Unity](https://www.youtube.com/watch?v=hd1QzLf4ZH8) provides an intermediate-level tutorial that focuses on how these quaternion helpers appear in day-to-day engine scripting rather than only in pure math form.

<iframe width="560" height="315" src="https://www.youtube.com/embed/hd1QzLf4ZH8" title="C# Quaternions in Unity! - Intermediate Scripting Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Quaternion Libraries used in Retail Console Game Development
Looking at retail SDK headers is useful because it shows which quaternion operations game programmers were expected to rely on in production code.

### Nintendo DS Official Quaternion Library
The Nintendo DS operating system exposes a compact quaternion helper API in `IrisQUAT.h`, which is catalogued through the Platinum leak material already linked on this site [^8].
Before looking at the declarations, a few design choices stand out:
* **Compact default storage** - `Quat` is just the `Quat16` form, which suggests fixed-point-friendly compactness was the normal path
* **A larger precision option** - `Quat32` exists when more range or precision is needed
* **Axis-angle conversion as a first-class helper** - `VEC_Conv2Quat*` shows that building quaternions from an axis and quantized angle was expected to be common
* **Core algebra only** - `DotProduct`, `Normalize`, `Inverse`, `Multiply`, `Add`, `Sub`, and `Scale` cover the main rotation operations without a lot of extra abstraction
* **Both `Lerp` and `Slerp`** - The SDK exposes both cheap linear blending and higher-quality spherical interpolation, which strongly suggests an explicit speed-versus-quality choice

This DS API also connects nicely with the matrix page.
Once you have a quaternion, the SDK can later convert it into a matrix for transform use through helpers such as `MTX_QuatMtx`:
{% include_cached link-to-other-post.html post="/Matrix" description="The matrix page shows how DS matrices and quaternion-to-matrix conversion fit into the wider transform pipeline." %}

{% capture quaternion_types_tab %}
Here are the quaternion storage types exposed by the DS header:

```c
// 16-bit
typedef struct {
    s16 x;
    s16 y;
    s16 z;
    s16 w;
} Quat16, Quat;
typedef vl Quat16 vQuat16;
typedef vl Quat   vQuat;

// 32-bit
typedef struct {
    s32 x;
    s32 y;
    s32 z;
    s32 w;
} Quat32;
typedef vl Quat32 vQuat32;
```
{% endcapture %}

{% capture quaternion_functions_tab %}
Here are the main quaternion helpers exposed by the DS header:

```c
#define VEC_Conv2Quat(axisp, theta, dstp)     VEC_Conv2QuatPriv(SIN_NDIV_DEFAULT, axisp, theta, dstp)

void VEC_Conv2Quat256(const Vec *axisp, u32 theta, Quat *dstp);
void VEC_Conv2Quat1024(const Vec *axisp, u32 theta, Quat *dstp);
void VEC_Conv2Quat4096(const Vec *axisp, u32 theta, Quat *dstp);

#define VEC_Conv2QuatPriv(ndiv, axisp, theta, dstp)   VEC_Conv2QuatNDiv(ndiv, axisp, theta, dstp)
#define VEC_Conv2QuatNDiv(ndiv, axisp, theta, dstp)   VEC_Conv2Quat##ndiv(axisp, theta, dstp)

s32 QUAT_DotProduct(const Quat *a, const Quat *b);

void QUAT_Normalize(Quat *srcp, Quat *dstp);
void QUAT_Inverse(Quat *srcp, Quat *dstp);
void QUAT_Multiply(Quat *a, Quat *b, Quat *axb);
void QUAT_Add(Quat *a, Quat *b, Quat *a_b);
void QUAT_Sub(Quat *a, Quat *b, Quat *a_b);
void QUAT_Scale(Quat *srcp, Quat *dstp, s32 scale);
void QUAT_Lerp(Quat *p, Quat *q, Quat *d, s32 t);
void QUAT_Slerp(Quat *p, Quat *q, Quat *d, s32 t);
```
{% endcapture %}

{% capture quaternion_tabs %}
{% include rr-tab.html title="DS Quaternion Types" default=true content=quaternion_types_tab %}
{% include rr-tab.html title="DS Quaternion Functions" content=quaternion_functions_tab %}
{% endcapture %}
{% include rr-tabs.html group="ds-quaternion-group" tabs=quaternion_tabs %}

The `256`, `1024`, and `4096` suffixes are especially revealing.
They imply the same kind of quantized angle domains seen elsewhere in the DS math headers, which fits the platform's fixed-point and lookup-table-heavy style.

You can find out more about the Nintendo DS boot ROM in the Platinum leak:
{% include_cached link-to-other-post.html post="/platinumleak" description="For more information on the Nintendo Platinum leak that exposed these DS headers, check out this post." %}

---
### Sony PSP Quaternion Library
The official PlayStation Portable (PSP) SDK exposes quaternion storage through `psptypes.h` and quaternion helpers through the VFPU library header `libvfpu.h` [^9].
Compared with the DS header, the PSP API feels much closer to a modern float-first graphics math layer.

Several details stand out immediately:
* **Aligned float storage** - `ScePspFQuaternion` is a four-float type aligned to `16` bytes, which fits the VFPU's preferred data shape [^9]
* **Identity as a named quaternion** - The SDK treats `(0, 0, 0, 1)` as a first-class helper rather than assuming developers will construct it manually [^10]
* **A direct matrix bridge** - The API explicitly converts quaternions to and from `Matrix4` form, which matches how real render pipelines still consume matrix transforms [^9][^10]
* **Interpolation depth beyond `Slerp`** - The presence of `Squad` suggests the library was meant to support smoother multi-key rotation blending as well as simple endpoint interpolation [^9][^10]
* **Rotation-order-aware conversion helpers** - `FromRotZYX`, `FromRotXYZ`, `FromRotYXZ`, `ToRotZYX`, and `ToRotYXZ` show that Euler order still matters when you cross back into angle-based representations [^9][^10]

The PSP implementation also tells us something useful about how these helpers were meant to behave.
`sceVfpuQuaternionApply` rotates a vector by the quaternion, `sceVfpuQuaternionFromRotate` normalizes the input axis internally before building the result, and the `Slerp` implementation explicitly handles the shortest-path case by flipping sign when needed [^10].

{% capture psp_quaternion_types_tab %}
Here are the quaternion storage types exposed by `psptypes.h`:

```c
typedef struct ScePspFQuaternion {
    float x, y, z, w;
} ScePspFQuaternion __attribute__((aligned(16)));

typedef struct ScePspFQuaternionUnaligned {
    float x, y, z, w;
} ScePspFQuaternionUnaligned;
```
{% endcapture %}

{% capture psp_quaternion_functions_tab %}
Here are the main quaternion helpers exposed by `libvfpu.h`:

```c
// Identity and copy
#define sceVfpuQuaternionIdentity(_pq) sceVfpuQuaternionUnit(_pq)
ScePspFQuaternion *sceVfpuQuaternionUnit(ScePspFQuaternion *pq);
ScePspFQuaternion *sceVfpuQuaternionCopy(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1);

// Matrix and vector bridge
ScePspFMatrix4 *sceVfpuQuaternionToMatrix(ScePspFMatrix4 *pm, const ScePspFQuaternion *pq);
ScePspFVector4 *sceVfpuQuaternionApply(ScePspFVector4 *pv0, const ScePspFQuaternion *pq, const ScePspFVector4 *pv1);
ScePspFQuaternion *sceVfpuQuaternionFromMatrix(ScePspFQuaternion *pq, const ScePspFMatrix4 *pm);

// Core quaternion algebra
ScePspFQuaternion *sceVfpuQuaternionAdd(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1, const ScePspFQuaternion *pq2);
ScePspFQuaternion *sceVfpuQuaternionSub(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1, const ScePspFQuaternion *pq2);
ScePspFQuaternion *sceVfpuQuaternionMul(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1, const ScePspFQuaternion *pq2);
#define sceVfpuQuaternionDot(_v1,_v2) sceVfpuQuaternionInnerProduct(_q1,_q2)
float sceVfpuQuaternionInnerProduct(const ScePspFQuaternion *pq1, const ScePspFQuaternion *pq2);
ScePspFQuaternion *sceVfpuQuaternionNormalize(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1);
ScePspFQuaternion *sceVfpuQuaternionConj(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1);
ScePspFQuaternion *sceVfpuQuaternionInverse(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1);

// Interpolation
ScePspFQuaternion *sceVfpuQuaternionSlerp(ScePspFQuaternion *pq0, const ScePspFQuaternion *pq1, const ScePspFQuaternion *pq2, float rate);
ScePspFQuaternion *sceVfpuQuaternionSquad(ScePspFQuaternion *pq0,
                                          const ScePspFQuaternion *pq1, const ScePspFQuaternion *pq2,
                                          const ScePspFQuaternion *pq3, const ScePspFQuaternion *pq4,
                                          float t);

// Conversion from angle-based forms
ScePspFQuaternion *sceVfpuQuaternionFromRotZYX(ScePspFQuaternion *pq, const ScePspFVector4 *pv);
ScePspFQuaternion *sceVfpuQuaternionFromRotXYZ(ScePspFQuaternion *pq, const ScePspFVector4 *pv);
ScePspFQuaternion *sceVfpuQuaternionFromRotYXZ(ScePspFQuaternion *pq, const ScePspFVector4 *pv);
ScePspFQuaternion *sceVfpuQuaternionFromRotate(ScePspFQuaternion *pq, float angle, const ScePspFVector4 *pvAxis);
ScePspFVector4 *sceVfpuQuaternionToRotZYX(ScePspFVector4 *pv, const ScePspFQuaternion *pq);
ScePspFVector4 *sceVfpuQuaternionToRotYXZ(ScePspFVector4 *pv, const ScePspFQuaternion *pq);
```
{% endcapture %}

{% capture psp_quaternion_tabs %}
{% include rr-tab.html title="PSP Quaternion Types" default=true content=psp_quaternion_types_tab %}
{% include rr-tab.html title="PSP Quaternion Functions" content=psp_quaternion_functions_tab %}
{% endcapture %}
{% include rr-tabs.html group="psp-quaternion-group" tabs=psp_quaternion_tabs %}

The function names also give away several practical use cases [^10]:
* `QuaternionApply` - Rotate vectors directly, which is useful for camera basis vectors, aiming, and transforming local directions into world directions
* `QuaternionInnerProduct` - Another name for quaternion dot product, often used to measure orientation similarity or to support interpolation logic
* **`QuaternionConj` and `QuaternionInverse`** - Expose the common "reverse this rotation" operations explicitly instead of forcing programmers to reconstruct them from scratch
* `QuaternionFromRotate` - Builds a quaternion from axis-angle input and normalizes the axis internally, which matches the mental model most developers start from
* **`QuaternionToRotZYX` and `QuaternionToRotYXZ`** - Convert back to Euler-style forms, and the source includes special handling near singular cases when extracting those angles

The PSP header also makes it obvious that quaternion terminology varies.
Its `InnerProduct` naming is just the formal version of quaternion dot product, the same way the PSP vector library uses "inner product" for vectors too.

---
# References
[^1]: [Unity Scripting API - Quaternion](https://docs.unity3d.com/ScriptReference/Quaternion.html)
[^2]: [Unity Scripting API - Quaternion.AngleAxis](https://docs.unity3d.com/ScriptReference/Quaternion.AngleAxis.html)
[^3]: [Unity Scripting API - Quaternion.Slerp](https://docs.unity3d.com/ScriptReference/Quaternion.Slerp.html)
[^4]: [Unity Scripting API - Quaternion.Normalize](https://docs.unity3d.com/ScriptReference/Quaternion.Normalize.html)
[^5]: [Unity Scripting API - Quaternion.Inverse](https://docs.unity3d.com/ScriptReference/Quaternion.Inverse.html)
[^6]: [Unity Scripting API - Quaternion.LookRotation](https://docs.unity3d.com/ScriptReference/Quaternion.LookRotation.html)
[^7]: [Unity Scripting API - Quaternion.ToAngleAxis](https://docs.unity3d.com/ScriptReference/Quaternion.ToAngleAxis.html)
[^8]: [RetroReversing - Nintendo Platinum Leak](/platinumleak)
[^9]: Sony PSP SDK headers `psptypes.h` and `libvfpu.h`.
[^10]: Sony PSP SDK implementation `src/vfpu/quaternion.c`.
