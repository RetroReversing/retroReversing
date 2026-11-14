.comm small,32,4
.comm large,1024,4
.text
.set noreorder
.globl probe
probe:
    lui $2,%hi(small)
    addiu $2,$2,%lo(small)
    lui $3,%hi(large)
    addiu $3,$3,%lo(large)
    jr $31
    nop
