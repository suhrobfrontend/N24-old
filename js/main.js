const elHeaderTogglerBtn = document.querySelector(".site-header__toggler");
const elSitenav = document.querySelector(".sitenav");

elHeaderTogglerBtn.addEventListener("click", (evt) => {
  elSitenav.classList.toggle("sitenav--open");
});

// MODAL
const elNotificationsModal = document.querySelector("[data-modal]");

function modalOpen() {
  document.body.classList.add("hidden");
  elNotificationsModal.classList.add("modal--show");
}

function modalClose() {
  document.body.classList.remove("hidden");
  elNotificationsModal.classList.remove("modal--show");
}

function onModalOpenClick(evt) {
  const el = evt.target.closest("[data-modal-open]");

  if (!el) return;

  modalOpen();
  clearTimeout(modalTimeout);
}

function onModalCloseClick(evt) {
  const el = evt.target.closest("[data-modal-close]");

  if (!el) return;

  modalClose();
}

function onModalOutsideClick(evt) {
  const el = evt.target;

  if (el !== elNotificationsModal) return;

  modalClose();
}

// modal auto-open than 30s
const modalTimeout = setTimeout(modalOpen, 30000);

document.addEventListener("click", (evt) => {
  onModalOpenClick(evt);
  onModalCloseClick(evt);
  onModalOutsideClick(evt);
});
