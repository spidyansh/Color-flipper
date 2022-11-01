
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let A = getRandomNumberA()
    let B = getRandomNumberB()
    let C = getRandomNumberC()
    let D = getRandomNumberD()
    m = "rgba(" + A + "," + B + "," + C + "," + D + ")"
    document.body.style.backgroundColor = m
})

function getRandomNumberA() {
    return Math.floor(Math.random() * 255)

}
function getRandomNumberB() {
    return Math.floor(Math.random() * 255)

}
function getRandomNumberC() {
    return Math.floor(Math.random() * 255)
}
function getRandomNumberD() {
    return (Math.random()* 1)
}
console.log(getRandomNumberD())

