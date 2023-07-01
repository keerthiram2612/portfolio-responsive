const btnE1 = document.querySelector(".btn");
const closeIconE1 = document.querySelector(".close-icon");
const topContainerE1 = document.querySelector(".top-container");

btnE1.addEventListener("click",()=>{
    topContainerE1.classList.remove("active");
});
 closeIconE1.addEventListener("click",()=>{
    topContainerE1.classList.add("active");
 })