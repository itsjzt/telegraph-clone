// resize textarea according to text in it.
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize

function resizetextarea() {
  let tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
    );
    tx[i].addEventListener("input", OnInput, false);
  }
  function OnInput() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }
}

document.onload(resizetextarea());
