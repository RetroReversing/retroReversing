---
layout: post
tags: 
- maths
title: Quaternions (Maths for Game Developers)
thumbnail: /public/consoles/Computer Old Design.png
image: /public/consoles/Computer Old Design.png
permalink: /Quaternions
breadcrumbs:
  - name: Home
    url: /
  - name: Maths for Game Developers
    url: /maths
  - name: Quaternions
    url: #
recommend: maths
editlink: /articles/maths/Quaternions.md
videocarousel:
  - title: Part 1 Gimbal Lock
    image: https://i.ytimg.com/vi/zc8b2Jo7mno/sddefault.jpg
    youtube: 'zc8b2Jo7mno'
  - title: Part 2 Apollo 13
    image: https://img.youtube.com/vi/OmCzZ-D8Wdk/maxresdefault.jpg
    youtube: 'OmCzZ-D8Wdk'
---

# Why Quaternions?
If you have used any 3D editor before then you are probably used to seeing 3D rotation in terms of X,Y,Z degrees of rotation, e.g 45 degrees in X, 90 in Y and 25 in Z. These are called Euler angles and they are fairly easy for the user to understand. 

So you would think that when programming games you would just use these Euler angles to rotate your 3d models. But sadly these Euler angles have a big flaw called **Gimbal Lock**, the solution is to instead use Quaternions to store the rotation information of your 3D model.

## Gimbal Lock
Gimbal lock happens when 2 of the plains align on the same axis and results in weird animation in 3D space.
<iframe width="560" height="315" src="https://www.youtube.com/embed/zc8b2Jo7mno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Gimbal Lock and Apollo 13
If you think Gimbal lock only affects game developers then try being an aerospace engineer!
<iframe width="560" height="315" src="https://www.youtube.com/embed/OmCzZ-D8Wdk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Writing your own Quaternion Library
This is an excellent video which covers how to write your own Quaternion library, it uses Java but the concepts can apply to any programming language.
<iframe width="560" height="315" src="https://www.youtube.com/embed/GnKGZYcsJ3E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Unity
<iframe width="560" height="315" src="https://www.youtube.com/embed/hd1QzLf4ZH8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Nintendo DS
The Nintendo DS Operating System has a small Quaternion helper library defined in the header file **IrisQUAT.h**. This file was leaked as part of the September 2020 "Platinum leak" as it is part of the Nintendo DS Boot ROM.

<div class="rr-tabs" title="group1">
  <div class="rr-tab" title="Types" default>
    <div markdown="1" >
Here are the types it provides to the developer:
      
```c
// 16-bit
typedef struct {
    s16 x;
    s16 y;
    s16 z;
    s16 w;
} Quat16, Quat;
typedef  vl Quat16    vQuat16;
typedef  vl Quat      vQuat;

// 32-bit
typedef struct {
    s32 x;
    s32 y;
    s32 z;
    s32 w;
} Quat32;
typedef  vl Quat32    vQuat32;
```

</div>
  </div>

  <div class="rr-tab" title="Functions">
<div  markdown="1" >
Here are all of the functions it provides:
  
```c
#define VEC_Conv2Quat(axisp, theta, dstp)     VEC_Conv2QuatPriv(SIN_NDIV_DEFAULT, axisp, theta, dstp)

void VEC_Conv2Quat256(const Vec *axisp, u32 theta, Quat *dstp);
void VEC_Conv2Quat1024(const Vec *axisp, u32 theta, Quat *dstp);
void VEC_Conv2Quat4096(const Vec *axisp, u32 theta, Quat *dstp);

#define VEC_Conv2QuatPriv(ndiv, axisp, theta, dstp)   VEC_Conv2QuatNDiv(ndiv, axisp, theta, dstp)
#define VEC_Conv2QuatNDiv(ndiv, axisp, theta, dstp)   VEC_Conv2Quat##ndiv(    axisp, theta, dstp)


s32  QUAT_DotProduct(const Quat *a, const Quat *b);

void QUAT_Normalize(Quat *srcp, Quat *dstp);

void QUAT_Inverse(Quat *srcp, Quat *dstp);

void QUAT_Multiply(Quat *a, Quat *b, Quat *axb);

void QUAT_Add(Quat *a, Quat *b, Quat *a_b);

void QUAT_Sub(Quat *a, Quat *b, Quat *a_b);

void QUAT_Scale(Quat *srcp, Quat *dstp, s32 scale);

void QUAT_Lerp( Quat *p, Quat *q, Quat *d, s32 t);


void QUAT_Slerp(Quat *p, Quat *q, Quat *d, s32 t);
```

</div>
  </div>
</div>

