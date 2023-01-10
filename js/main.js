const elHeaderTogglerBtn = document.querySelector(".site-header__toggler")
const elSitenav = document.querySelector(".sitenav")


elHeaderTogglerBtn.addEventListener("click", () => {
  elSitenav.classList.toggle("sitenav--open")
})