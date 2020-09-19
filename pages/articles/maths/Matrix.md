---
layout: post
tags: 
- maths
title: Matrices/Matrix (Maths for Game Developers)
thumbnail: /public/consoles/Computer Old Design.png
image: /public/consoles/Computer Old Design.png
permalink: /Matrix
breadcrumbs:
  - name: Home
    url: /
  - name: Maths for Game Developers
    url: /maths
  - name: Matrices/Matrix
    url: #
recommend: maths
editlink: /articles/maths/Matrix.md
videocarousel:
  - title: Part 1 Intro
    image: https://i.ytimg.com/vi/xyAuNHPsq-g/sddefault.jpg
    youtube: 'xyAuNHPsq-g'
---

# Introduction to matrices
A Matrix is just a table of numbers, thats all it is, really! By puttting numbers in a table like this we can do some very cool stuff which really shines when doing 3D game programming or even AI. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/xyAuNHPsq-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Things you can do or represent with Matrices:
* Add/subtract/multiply 2 together
* Transpose/Scale/Rotate Matrices
* LookAt Matrix
* Perspective Matrix
* Identity Matrix
* Frustum

A Vector is basically a Matrix with just 1 row, you can find out more about Vectors in our post on them.

## Perspective Matrix
<iframe width="560" height="315" src="https://www.youtube.com/embed/jeO_ytN_0kk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Nintendo DS
The Nintendo DS Operating System has a basic Matrix library defined by the header file **IrisMTX.h**. This file was leaked as part of the September 2020 "Platinum leak" as it is part of the Nintendo DS Boot ROM.

<div class="rr-tabs" title="group1">
  <div class="rr-tab" title="Types" default>

<div  markdown="1" >
Here are the types it provides to the developer:

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

typedef s32 Mtx_t[4][3];
typedef union {
    Mtx_t m;
} Mtx;
typedef  vl Mtx   vMtx;

typedef s32 Mtx33_t[3][3];
typedef union {
    Mtx33_t m;
} Mtx33;
typedef  vl Mtx33   vMtx33;

// used for projection matrix
typedef s32 Mtx44_t[4][4];
typedef union {
    Mtx44_t m;
} Mtx44;
typedef  vl Mtx44   vMtx44;
```

</div>
  </div>

  <div class="rr-tab" title="Functions">
<div  markdown="1" >
Here are a all of the functions it provides:
  
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

void MTX_Transpose( Mtx *srcp,  Mtx *dstp);
void MTX33_Transpose( Mtx33 *srcp,  Mtx33 *dstp);
void MTX44_Transpose( Mtx44 *srcp,  Mtx44 *dstp);

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

#define MTX_RotateX(dstp, theta)        MTXxx_RotatePriv(_,   X, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX_RotateY(dstp, theta)        MTXxx_RotatePriv(_,   Y, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX_RotateZ(dstp, theta)        MTXxx_RotatePriv(_,   Z, SIN_NDIV_DEFAULT, dstp, theta)

#define MTX33_RotateX(dstp, theta)        MTXxx_RotatePriv(33_, X, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX33_RotateY(dstp, theta)        MTXxx_RotatePriv(33_, Y, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX33_RotateZ(dstp, theta)        MTXxx_RotatePriv(33_, Z, SIN_NDIV_DEFAULT, dstp, theta)

#define MTX44_RotateX(dstp, theta)        MTXxx_RotatePriv(44_, X, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX44_RotateY(dstp, theta)        MTXxx_RotatePriv(44_, Y, SIN_NDIV_DEFAULT, dstp, theta)
#define MTX44_RotateZ(dstp, theta)        MTXxx_RotatePriv(44_, Z, SIN_NDIV_DEFAULT, dstp, theta)

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

#define MTXxx_RotatePriv(xx_, axis, ndiv, dstp, theta)  MTXxx_RotateNDiv(xx_, axis, ndiv, dstp, theta)
#define MTXxx_RotateNDiv(xx_, axis, ndiv, dstp, theta)  MTX##xx_##Rotate##axis##ndiv(     dstp, theta)

void MTX_RotateXSinCos(Mtx *dstp, s32 sinA, s32 cosA);
void MTX_RotateYSinCos(Mtx *dstp, s32 sinA, s32 cosA);
void MTX_RotateZSinCos(Mtx *dstp, s32 sinA, s32 cosA);

void MTX33_RotateXSinCos(Mtx33 *dstp, s32 sinA, s32 cosA);
void MTX33_RotateYSinCos(Mtx33 *dstp, s32 sinA, s32 cosA);
void MTX33_RotateZSinCos(Mtx33 *dstp, s32 sinA, s32 cosA);

void MTX44_RotateXSinCos(Mtx44 *dstp, s32 sinA, s32 cosA);
void MTX44_RotateYSinCos(Mtx44 *dstp, s32 sinA, s32 cosA);
void MTX44_RotateZSinCos(Mtx44 *dstp, s32 sinA, s32 cosA);

#define MTX_RotateAxis(    dstp, axisp, heta)   MTXxx_RotateAxisPriv(    _,   SIN_NDIV_DEFAULT, dstp, axisp, theta)
#define MTX_RotateAxisFast(dstp, axisp, theta)    MTXxx_RotateAxisPrivFast(_,   SIN_NDIV_DEFAULT, dstp, axisp, theta)

#define MTX33_RotateAxis(    dstp, axisp, heta)   MTXxx_RotateAxisPriv(    33_, SIN_NDIV_DEFAULT, dstp, axisp, theta)
#define MTX33_RotateAxisFast(dstp, axisp, theta)  MTXxx_RotateAxisPrivFast(33_, SIN_NDIV_DEFAULT, dstp, axisp, theta)

#define MTX44_RotateAxis(    dstp, axisp, heta)   MTXxx_RotateAxisPriv(    44_, SIN_NDIV_DEFAULT, dstp, axisp, theta)
#define MTX44_RotateAxisFast(dstp, axisp, theta)  MTXxx_RotateAxisPrivFast(44_, SIN_NDIV_DEFAULT, dstp, axisp, theta)

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

#define MTXxx_RotateAxisPriv(    xx_, ndiv, dstp, axisp, theta) MTXxx_RotateAxisNDiv(    xx_, ndiv, dstp, axisp, theta)
#define MTXxx_RotateAxisPrivFast(xx_, ndiv, dstp, axisp, theta) MTXxx_RotateAxisNDivFast(xx_, ndiv, dstp, axisp, theta)
#define MTXxx_RotateAxisNDiv(    xx_, ndiv, dstp, axisp, theta) MTX##xx_##RotateAxis##ndiv(         dstp, axisp, theta)
#define MTXxx_RotateAxisNDivFast(xx_, ndiv, dstp, axisp, theta) MTX##xx_##RotateAxis##ndiv##Fast(   dstp, axisp, theta)


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

void MTX_LookAt(    Mtx *dstp, const Pos *eye, const Pos *at, const Vec *vUp, Vec *vDst);
void MTX_LookAtFast(Mtx *dstp, const Pos *eye, const Pos *at, const Vec *vUp, Vec *vDst);

#define MTX44_Perspective(dstp, fovy, aspect, near, far, scaleW)    MTX44_PerspectivePriv(SIN_NDIV_DEFAULT, dstp, fovy, aspect, near, far, scaleW)

void MTX44_Perspective256(Mtx44 *dstp, u32 fovy, s32 aspect, s32 near, s32 far, s32 scaleW);
void MTX44_Perspective1024(Mtx44 *dstp, u32 fovy, s32 aspect, s32 near, s32 far, s32 scaleW);
void MTX44_Perspective4096(Mtx44 *dstp, u32 fovy, s32 aspect, s32 near, s32 far, s32 scaleW);

#define MTX44_PerspectivePriv(ndiv, dstp, fovy, aspect, near, far, scaleW)  MTX44_PerspectiveNDiv(ndiv, dstp, fovy, aspect, near, far, scaleW)
#define MTX44_PerspectiveNDiv(ndiv, dstp, fovy, aspect, near, far, scaleW)  MTX44_Perspective##ndiv(    dstp, fovy, aspect, near, far, scaleW)

void MTX44_PerspectiveSinCos(Mtx44 *dstp, s32 sinA, s32 aspect, s32 near, s32 far, s32 scaleW, s32 cosA);

void MTX44_Frustum(Mtx44 *dstp, s32 t, s32 b, s32 l, s32 r, s32 n, s32 f, s32 scaleW);

void MTX44_Ortho(  Mtx44 *dstp, s32 t, s32 b, s32 l, s32 r, s32 n, s32 f, s32 scaleW);

void MTX_MultVec(  const Mtx   *mult, Vec *srcp, Vec *dstp);
void MTX33_MultVec(const Mtx33 *mult, Vec *srcp, Vec *dstp);
void MTX44_MultVec(const Mtx44 *mult, Vec *srcp, Vec *dstp);

void MTX_MultVecArray(  const Mtx   *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
void MTX33_MultVecArray(const Mtx33 *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
void MTX44_MultVecArray(const Mtx44 *mult, Vec *srcBasep, Vec *dstBasep, u32 count);

void MTX_MultVecSR(  const Mtx   *mult, Vec *srcp, Vec *dstp);
void MTX44_MultVecSR(const Mtx44 *mult, Vec *srcp, Vec *dstp);

void MTX_MultVecArraySR(  const Mtx   *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
void MTX44_MultVecArraySR(const Mtx44 *mult, Vec *srcBasep, Vec *dstBasep, u32 count);
```

</div>
  </div>
</div>

