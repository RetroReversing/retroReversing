.text
.set reorder
.globl probe
probe:
    addiu $2,$4,1
real_label:
    jr $31
    nop
