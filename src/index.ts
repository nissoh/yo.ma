import * as most from 'most'

let moveForce = 30 // max popup movement in pixels
let rotateForce = 20 // max popup rotation in deg

let mousemoves = most.fromEvent('mousemove', document)
let $qs = document.querySelector.bind(document)

let popupElement = $qs('.MA')

let docX = document.body.clientWidth
let docY = document.body.clientHeight

let px = 0
let py = 0

let then, now

let rafDraw

then = now = Date.now()

let mouse = {
  x: 0,
  y: 0
}


mousemoves
// .takeWhile(() => rafDraw)
  .observe(rafUpdateMouse)


function rafUpdateMouse(e) {
  requestAnimationFrame(() => updateMouse(e))
}


function updateMouse(e) {
  mouse.x = e.pageX
  mouse.y = e.pageY
}


function draw() {
  px -= (px - mouse.x) / 15
  py -= (py - mouse.y) / 15

  let moveX = (px - docX / 2) / (docX / 2) * -moveForce
  let moveY = (py - docY / 2) / (docY / 2) * -moveForce

  let rotateY = (px / docX * rotateForce * 2) - rotateForce
  let rotateX = -((py / docY * rotateForce * 2) - rotateForce)

  popupElement.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(' + moveX + 'px, ' + moveY + 'px)'
  rafDraw = window.requestAnimationFrame(draw)
}
draw()
