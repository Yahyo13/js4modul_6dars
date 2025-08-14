document.addEventListener(`DOMContentLoaded`, ()=>{
    let inp1 = document.querySelector(`.url`)
let inp2 = document.querySelector(`.color`)
let btn = document.querySelector(`button`)
let div = document.querySelector(`.b`)

btn.addEventListener(`click`, ()=>{
    div.innerHTML = ``
    new QRCode(div, {
        text: inp1.value,
        colorDark: inp2.value,
        width: 200,
        height: 200
    })

})
})