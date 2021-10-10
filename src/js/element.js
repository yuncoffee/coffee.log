export function selectBoxEvent() {
    const elemSelectBoxList = document.querySelectorAll(".container-selectBox")
    const elemOptionBoxList = document.querySelectorAll(".optionBox")
    const eleminputSelectBoxList = document.querySelectorAll(".input-selectBox")
    let elemSelectBoxOffsetTop = 0
    let elemSelectBoxOffsetWidth = 0
    let elemSelectBoxOffsetHeight = 0
    let elemSelectBoxOffsetLeft = 0
    let elemOptionItem = 0
    let elemInputSelectBox = 0

    let arr = []

    function setSelect() {
        for (let i = 0; i < elemSelectBoxList.length; i++) {
            let elemSelectBox = elemSelectBoxList[i]
            let elemOptionBox = elemOptionBoxList[i]
            elemSelectBox.classList.add(`selectBox-${i}`)
            elemOptionBox.classList.add(`optionBox-${i}`)
            elemOptionItem = document.querySelectorAll(`.optionBox-${i} li`)
            elemInputSelectBox = eleminputSelectBoxList[i]
            elemInputSelectBox.innerHTML = elemOptionItem[0].innerHTML
            console.log(elemInputSelectBox)
        }
    }

    function clickSelect() {
        for (let i = 0; i < elemSelectBoxList.length; i++) {
            let elemSelectBox = elemSelectBoxList[i]
            let elemOptionBox = elemOptionBoxList[i]
            let elemInputSelectBox = eleminputSelectBoxList[i]
            let elemOptionItem = document.querySelectorAll(`.optionBox-${i} li`)
            elemOptionItem.forEach((o) => {
                o.addEventListener("click", () => {
                    elemInputSelectBox.innerHTML = o.innerHTML
                })
            })
            elemSelectBox.addEventListener("click", () => {
                console.log(elemSelectBox.getBoundingClientRect())
                elemSelectBoxOffsetTop = elemSelectBox.offsetTop
                elemSelectBoxOffsetWidth = elemSelectBox.offsetWidth
                elemSelectBoxOffsetHeight = elemSelectBox.offsetHeight
                elemSelectBoxOffsetLeft = elemSelectBox.offsetLeft
                console.log(elemSelectBoxOffsetWidth)
                console.log(elemSelectBoxOffsetHeight)
                elemOptionBox.style.top = `${
                    elemSelectBoxOffsetTop + elemSelectBoxOffsetHeight + 2
                }px`
                elemOptionBox.style.width = `${elemSelectBoxOffsetWidth}px`

                elemOptionBox.classList.toggle("active")
            })
        }
    }

    setSelect()
    clickSelect()
}
