.text
.set noreorder
.globl probe
.type probe,@function
probe:
    jr $31
    addiu $2,$4,1
.size probe,.-probe
