let booking = document.querySelector(".booking");
let bookingButton = booking.querySelector(".button--form");
let bookingForm = booking.querySelector(".form");
let bookingName = booking.querySelector("[name=name]");
let bookingEmail = booking.querySelector("[name=email]");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("bookingEmail");
} catch (err) {
  isStorageSupport = false;
}

bookingEmail.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке email");
  if (storage) {
    bookingEmail.value = storage;
    bookingName.focus();
  } else {
    bookingEmail.focus();
  }
});
bookingName.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке name");
  bookingButton.classList.remove("button--show");
});
bookingForm.addEventListener("submit", function (evt) {
  if (!bookingName.value || !bookingEmail.value) {
    evt.preventDefault();
    bookingButton.classList.add("button--show");
    console.log("Нужно ввести логин и пароль");
    bookingName.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("bookingEmail", bookingEmail.value);
      bookingButton.classList.remove("button--show");
    }
  }
});
