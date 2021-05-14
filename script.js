const tombol = document.querySelector(".btn");

tombol.addEventListener("click", function () {
  typingText();
});

function typingText() {
  for (i = 0; i <= 100; i++) {
    document.querySelector(".container").append("a");
  }
}
