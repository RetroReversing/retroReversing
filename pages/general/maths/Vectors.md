---
layout: post
tags: 
- maths
title: Vectors (Maths for Game Developers)
thumbnail: /public/consoles/Computer Old Design.png
image: /public/consoles/Computer Old Design.png
permalink: /Vectors
breadcrumbs:
  - name: Home
    url: /
  - name: Maths for Game Developers
    url: /maths
  - name: Vectors
    url: #
recommend: maths
editlink: /articles/maths/Vectors.md
videocarousel:
  - title: Part 1 Intro
    image: https://i.ytimg.com/vi/xyAuNHPsq-g/sddefault.jpg
    youtube: 'xyAuNHPsq-g'
---

# Introduction to Vectors
Vectors in game developer are really just a structure with 2 or more elements in it, with each element representing something like a coordinate.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZoMmiQes_lE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Concepts in games that are commonly represented with Vectors:
* Position
* Gravity
* Velocity
* Normals

Functions that you can apply to vectors
* Dot Product
* Cross Product
* Distance (e.g between 2 positions)
* Add/Subtract/Scale
* Linearly interpolates between two points (Lerp)
* Normalise (set length to 1 but keep direction)



---
# Nintendo DS
The Nintendo DS Operating System has a basic Matrix library defined by the header file **IrisVEC.h**. This file was leaked as part of the September 2020 "Platinum leak" as it is part of the Nintendo DS Boot ROM.

<div class="rr-tabs" title="group1">
  <div class="rr-tab" title="Types" default>
<div markdown="1">
Here are the types it provides to the developer:

```c
#define vl volatile

// 10-bit (slightly unusual to use 10-bits!)
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

</div>
</div>
  
  <div class="rr-tab" title="Functions">
<div markdown="1">
Here are a few of the functions it provides:

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

</div>
  </div>
</div>




