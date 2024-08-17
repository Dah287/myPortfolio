/*toggle*/
 
const styleSwitcherToggle=document.querySelector(".style-switcher-toggler")
styleSwitcherToggle.addEventListener("click",()=>

{
document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style
window.addEventListener("scroll",()=>
{
    if(document.querySelector(".style-switcher").classList.contains("open"))
{
    document.querySelector(".style-switcher").classList.remove("open");

}
})
/*theme color*/
const alt =document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alt.forEach((style)=>{
if(color===style.getAttribute("title"))
{
    style.removeAttribute("disabled");  
}
else
{
    style.setAttribute("disabled","true");   
}
    })

}
/*light mode */
const day =document.querySelector(".day-night");
day.addEventListener("click",()=>
{
    day.querySelector("i").classList.toggle("fa-sun");
    day.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");


})
window.addEventListener("load",()=>
{
    if(document.body.classList.contains("dark"))
    {
        day.querySelector("i").classList.add("fa-sun");
    }else
    {
        day.querySelector("i").classList.add("fa-moon");

    }
})