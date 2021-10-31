window.onload = () => {
    selectBoxEvent()
}

console.log("hi")

const slider = document.querySelector(".slider")
let imgLandelems = document.getElementsByClassName("img-land")
let sliderItem = document.querySelectorAll(".slider-item")
let sliderItem2 = document.querySelectorAll(".slider-item2")
let newArray = []

function setSliderItem() {
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "slider-item2")
    newDiv.innerHTML = `
    <h6>번째 아이템</h6>
    <div class="img-land img-land-"></div>
    `

    for (let i = 0; i < 4; i++) {
        newArray.push(i)
    }
    console.log(newArray)
    newArray.forEach((item) => {
        newDiv.innerHTML = `
        <h6>${item}번째 아이템</h6>
        <div class="img-land img-land-${item}"></div>
        `
        slider.append(newDiv)
        slider.innerHTML += slider.append(newDiv)
        imgLandelems[
            item
        ].style.backgroundImage = `url(/src/images/land-${item}.png)`
    })
}

function setImgLandelem() {
    imgLandelems.forEach((item, i) => {
        item.style.backgroundImage = `url(/src/images/land-${i}.png)`
        console.log(item)
    })
}

// carosal
function setSlider() {
    const showing = "showing"
    const firstItem = document.querySelector(".slider-item:first-child")

    const currentItem = document.querySelector(`.${showing}`)

    if (currentItem) {
        currentItem.classList.remove(showing)
        const nextItem = currentItem.nextElementSibling
        if (currentItem) {
            nextItem.classList.add(showing)
        } else {
            firstItem.classList.add(showing)
        }
    } else {
        firstItem.classList.add(showing)
    }
}

// setImgLandelem()
setSliderItem()
window.addEventListener("DOMContentLoaded", () => {
    console.log(imgLandelems)
    console.log(imgLandelems[0])
})

// setInterval(setSlider, 4000)
