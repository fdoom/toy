var data = [
  ["img/water.jpg", "I'm THIRSTY"], ["img/hungry.jpg", "I'M HUNGRY"], ["img/tired.jpg", "I'M TIRED"],
  ["img/hurt.jpg", "I'M HURT"], ["img/happy.jpg", "I'M HAPPY"], ["img/angry.jpg", "I'M ANGRY"],
  ["img/sad.jpg", "I'M SAD"], ["img/scared.jpg", "I'M SCARED"], ["img/outside.jpg", "I WANT TO GO OUTSIDE"],
  ["img/home.jpg", "I WANT TO GO HOME"], ["img/school.jpg", "I WANT TO GO TO SCHOOL"], ["img/grandma.jpg", "I WANT TO GO TO GRANDMAS"]
];

window.onload = function () {
  for (var i = 0; i < 12; i++) {
    create(i);
  }
}

function create(i) {
  var main = document.createElement("div")
  main.className = "main";
  main.onclick = function () {
    speak(data[i][1], select.options[select.selectedIndex].value
    )
  }

  var image = new Image();
  image.src = data[i][0];

  var comment = document.createElement("p");
  comment.className = "comment";
  comment.append(data[i][1]);

  main.appendChild(image);
  main.appendChild(comment);

  document.getElementById("container").appendChild(main);
}

function speak(text, language) {
  if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
    alert("This browser does not support speech synthesis.")
    return
  }
  window.speechSynthesis.cancel() // 현재 읽고있다면 초기화

  const speechMsg = new SpeechSynthesisUtterance()
  speechMsg.lang = language;
  speechMsg.text = text

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg)
}


// 이벤트 영역
const select = document.getElementById("select-lang")
const text = document.getElementById("text")
const btn = document.getElementById("btn")

btn.addEventListener("click", e => {
  speak(text.value, select.options[select.selectedIndex].value)
})

function enter() {
  if (event.keyCode == 13) {
    speak(text.value, select.options[select.selectedIndex].value)
  }
}