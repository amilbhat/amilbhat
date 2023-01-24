import {Projects} from "./../data/projects.js"
import {Skills} from "./../data/skills.js"

const skillList = document.getElementById("skill-list")
const project = document.getElementById("projects")
const navHam = document.getElementById("navbar-ham")
const navList = document.getElementById("nav-list")


navHam.addEventListener("click", function(){
    navList.classList.toggle("hidden")
})

let projectHtml = ""
function projectHandler(){
    for (let project of Projects) {
        projectHtml += `
        <div class="projects">
            <div class="project-img" >
                <img src=${project.image} alt=""/>
            </div>
            <div class="project-detail">
                <h3>${project.name}</h3>
                <a class="project-code" target="_blank" href=${project.code}>View Code <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a class="project-preview" target="_blank" href=${project.previewUrl}><button>Live Preview</button></a>
            </div>
        </div>
        `
    }
    project.innerHTML = projectHtml
}

function skillHandler(){
    let skillHtml = ""
    for(let skill of Skills){
        skillHtml += `
            <div class="skill">
                <i class="fa-${skill.type} fa-${skill.icon}"></i>
                <span>${skill.name}</span>
            </div>
        `
    }
    skillList.innerHTML = skillHtml
}


projectHandler()
skillHandler()