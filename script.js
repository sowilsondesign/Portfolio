const buttons=document.querySelectorAll(".filters button");
const cards=document.querySelectorAll(".work-card");
buttons.forEach(btn=>btn.addEventListener("click",()=>{
  buttons.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  const filter=btn.dataset.filter;
  cards.forEach(card=>{
    card.style.display=(filter==="all"||card.dataset.cat===filter)?"block":"none";
  });
}));
const menu=document.querySelector(".menu"), nav=document.querySelector(".site-nav nav");
menu?.addEventListener("click",()=>{
  nav.style.display=nav.style.display==="flex"?"none":"flex";
  nav.style.flexDirection="column";
  nav.style.position="absolute";
  nav.style.top="65px";
  nav.style.right="4vw";
  nav.style.background="#0b0c0d";
  nav.style.padding="18px";
});
