const elHeaderTogglerBtn = document.querySelector(".site-header__toggler")
const elSitenavList = document.querySelector(".sitenav__list")


elHeaderTogglerBtn.addEventListener("click", () => {
  elSitenavList.classList.toggle("sitenav__list--open")
})