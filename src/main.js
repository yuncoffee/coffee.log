import "./css/reset.css"
import "./css/main.css"
import "tailwindcss/tailwind.css"
import * as d3 from "d3"
import { selectBoxEvent } from "./js/element" //element 조작
import { setD3 } from "./js/d3"
CSS.paintWorklet.addModule("https://unpkg.com/smooth-corners")

let sectionTool_wrap = 0
let iconTools = 0
let iconImg = 0
let newDiv = 0
let projectElems = 0

function setDocxElems() {
    sectionTool_wrap = document.querySelector(".section.tool .section-wrap")
    iconTools = document.getElementsByClassName("icon-tool")
    iconImg = document.getElementsByClassName("img-icon")
    projectElems = document.getElementsByClassName("project")
}

// 아이콘 아이템을 만드는 친구
function setIconTool() {
    newDiv = document.createElement("div")
    newDiv.setAttribute("class", "item icon-tool")
    sectionTool_wrap.append(newDiv)
}

function makeIconTool() {
    let listToolsName = [
        "figma",
        "photoshop",
        "illustrator",
        "indesign",
        "html5",
        "css3",
        "scss",
    ]

    // 사용하는 툴 갯수에 따라 증가 => 7
    for (let i = 0; i < 7; i++) {
        setIconTool()
        newDiv.innerHTML = `
        <div class="img-icon" title="${listToolsName[i]}" 
        style="background:url(/src/images/tool/tool-${i}.png) no-repeat center /contain">
        </div>
        `
    }
}

function setProject() {
    let width = projectElems[0].offsetWidth
    console.log(width, projectElems)

    for (let i = 0; i < projectElems.length; i++) {
        const projectElem = projectElems[i]
        projectElem.style.height = `${width / 2}px`
    }
}

window.addEventListener("load", () => {
    setDocxElems()
    makeIconTool()
    setProject()
})

window.addEventListener("resize", () => {
    setProject()
})
