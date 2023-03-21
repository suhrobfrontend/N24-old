const elHeaderTogglerBtn = document.querySelector(".site-header__toggler");
const elSitenav = document.querySelector(".sitenav");

elHeaderTogglerBtn.addEventListener("click", (evt) => {
  elSitenav.classList.toggle("sitenav--open");
});
