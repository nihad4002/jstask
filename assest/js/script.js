/*task1*/
let name1 = document.querySelector("#name1")
let surname = document.querySelector("#surname")
let email = document.querySelector("#email")
let sifre = document.querySelector("#sifre")
let confirmsifre = document.querySelector("#confirmsifre")
let btn=document.querySelector(".btn")
let errormsg1 = document.querySelector(".error1")
let errormsg2 = document.querySelector(".error2")
let errormsg3 = document.querySelector(".error3")
let errormsg4 = document.querySelector(".error4")
let errorlng = document.querySelector(".errorlng")
let errormsg5 = document.querySelector(".error5")
let errorconfirm = document.querySelector(".errorconfirm")

btn.onclick = function(){
    /*if(name1.value.trim() && surname.value.trim() && email.value.trim() && sifre.value.trim() && sifre.value.trim().length>=8 && confirmsifre.value.trim()===sifre.value.trim()){
        window.location.reload()
    }*/
    if(name1.value.trim()){
        errormsg1.classList.add("d-none")
    }
    else{
        errormsg1.classList.remove("d-none")
    }
    if(surname.value.trim()){
        errormsg2.classList.add("d-none")
    }
    else{
        errormsg2.classList.remove("d-none")
    }
    if(email.value.trim()){
        errormsg3.classList.add("d-none")
    }
    else{
        errormsg3.classList.remove("d-none")
    }
    if(sifre.value.trim() && sifre.value.trim().length>=8){
        errorlng.classList.add("d-none")
        errormsg4.classList.add("d-none")
    }
    else if(sifre.value.trim()== ""){
        errorlng.classList.add("d-none")
        errormsg4.classList.remove("d-none")
    }
    else{
        errorlng.classList.remove("d-none")
        errormsg4.classList.add("d-none")
    }
    if(confirmsifre.value.trim() && confirmsifre.value.trim()==sifre.value.trim()){
        errorconfirm.classList.add("d-none")
        errormsg5.classList.add("d-none")
    }
    else if(confirmsifre.value.trim()== ""){
        errorconfirm.classList.add("d-none")
        errormsg5.classList.remove("d-none")
    }
    else{
        errorconfirm.classList.remove("d-none")
        errormsg5.classList.add("d-none")
    }
}


/*task2*/


let atropatenabtn = document.querySelector(".atropatenabtn")
let albaniabtn = document.querySelector(".albaniabtn")
let safavibtn = document.querySelector(".safavibtn")
let aggoyunlubtn = document.querySelector(".aggoyunlubtn")

let atropatenadiv = document.querySelector(".atropatena")
let albaniadiv = document.querySelector(".albania")
let safavidiv = document.querySelector(".safavi")
let aggoyunludiv = document.querySelector(".aggoyunlu")



atropatenabtn.onclick=function(){
    atropatenadiv.classList.remove("d-none")
    albaniadiv.classList.add("d-none")
    safavidiv.classList.add("d-none")
    aggoyunludiv.classList.add("d-none")
}
albaniabtn.onclick=function(){
    atropatenadiv.classList.add("d-none")
    albaniadiv.classList.remove("d-none")
    safavidiv.classList.add("d-none")
    aggoyunludiv.classList.add("d-none")
}
safavibtn.onclick=function(){
    atropatenadiv.classList.add("d-none")
    albaniadiv.classList.add("d-none")
    safavidiv.classList.remove("d-none")
    aggoyunludiv.classList.add("d-none")
}
aggoyunlubtn.onclick=function(){
    atropatenadiv.classList.add("d-none")
    albaniadiv.classList.add("d-none")
    safavidiv.classList.add("d-none")
    aggoyunludiv.classList.remove("d-none")
}



