const btnE1 = document.querySelector(".btn");
const closeIconE1 = document.querySelector(".close-icon");
const topContainerE1 = document.querySelector(".top-container");
const educationE1 =document.querySelector(".education");
const btn1E1 = document.querySelector(".btn1");
const closeIconE2 = document.querySelector(".close-icon1");

btnE1.addEventListener("click",()=>{
    topContainerE1.classList.remove("active");
});
btn1E1.addEventListener("click",()=>{
    educationE1.classList.remove("active1");
})
closeIconE1.addEventListener("click",()=>{
    educationE1.classList.add("active1");
})
