// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

let db = false;
let output;

function setupFunction() {
  let button = document.getElementById("button2");
  button.onclick = postFunction;
}

function postFunction() {
  let messageInput = document.getElementById("input2");
  let text = messageInput.value;

  if (db === false) {
    db = true;

    output = document.createElement("p");
    output.Id = "topic";
    output.textContent = text;
    document.body.append(output);
  }else{
    let res = "+" + text;
    output.innerHTML += res;
  }
}
