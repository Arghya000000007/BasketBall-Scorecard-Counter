let bx1 = document.getElementById("bx-1")
let bx2 = document.getElementById("bx-2")
let count1=0
let count2=0
function increamentF1(){
    count1++
    bx1.innerHTML=count1
}
function increamentF2(){
    count1 += 2
    bx1.textContent=count1
}
function increamentF3(){
    count1 += 3
    bx1.textContent=count1
}
function increamentS1(){
    count2++
    bx2.textContent=count2
}
function increamentS2(){
    count2 += 2
    bx2.textContent=count2
}
function increamentS3(){
    count2 += 3
    bx2.textContent=count2
}