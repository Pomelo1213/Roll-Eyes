document.addEventListener('mousemove', function(e){
    var mouseX = e.clientX
    var mouseY = e.clientY

    var leftE = {x: 700, y: 200}
    var rightE = {x: 1200, y: 200}

    var leftRotateY = (mouseX - leftE.x) / 70
    var leftRotateX = (mouseY - leftE.y) / 70
    //console.log(mouseY+" "+leftE.y)
    console.log(leftRotateX)

    leftRotateX = -leftRotateX
    var leftEye = document.getElementById("one")
    leftEye.style.cssText = `transform: rotateX(${leftRotateX}deg) rotateY(${leftRotateY}deg)`

    var rightEye = document.getElementById("two")
    rightEye.style.cssText = `transform: rotateX(${leftRotateX}deg) rotateY(${leftRotateY}deg)`

    var nose = document.getElementById("nose")
    nose.style.cssText = `transform: rotateX(${leftRotateX}deg) rotateY(${leftRotateY}deg)`;
})