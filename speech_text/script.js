const data = [
  ["img/water.jpg", "목말라", "我渴了", "喉が渇いた", "I'm THIRSTY"], ["img/hungry.jpg", "배가 고파", "我饿了", "お腹が空きました", "I'M HUNGRY"],
  ["img/tired.jpg", "피곤해", "我累了", "つかれた", "I'M TIRED"], ["img/hurt.jpg", "상처받았어", "我受伤了", "傷ついた", "I'M HURT"],
  ["img/happy.jpg", "행복해", "我很快乐", "満足しています", "I'M HAPPY"], ["img/angry.jpg", "화났어", "我生气了", "怒っている", "I'M ANGRY"],
  ["img/sad.jpg", "슬퍼", "我很难过", "悲しいです", "I'M SAD"], ["img/scared.jpg", "무서워", "我好害怕", "怖いです", "I'M SCARED"],
  ["img/outside.jpg", "밖에 나가고 싶어", "我想出去", "外に出たい", "I WANT TO GO OUTSIDE"], ["img/home.jpg", "집에 가고 싶어", "我想回家", "家に帰りたい", "I WANT TO GO HOME"],
  ["img/school.jpg", "학교에 가고 싶어", "我想上学", "学校に行きたい", "I WANT TO GO TO SCHOOL"], ["img/grandma.jpg", "할머니를 만나고 싶어", "我想见见奶奶。", "おばあちゃんに会いたい。", "I WANT TO GO TO GRANDMAS"]
];

window.onload = function () {
  for (let i = 0; i < 12; i++) {
    create(i);
  }
}

function create(i) {
  let main = document.createElement("div")
  main.className = "main";
  main.onclick = function () {
    speak(data[i][select.selectedIndex + 1], select.options[select.selectedIndex].value
    )
  }

  let image = new Image();
  image.src = data[i][0];

  let comment = document.createElement("p");
  comment.className = "comment";
  comment.append(data[i][4]);

  main.appendChild(image);
  main.appendChild(comment);

  document.getElementById("container").appendChild(main);
}

function speak(text, language) {
  if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
    alert("This browser does not support speech synthesis.")
    return
  }
  window.speechSynthesis.cancel() // 초기화

  if(!text)
  {
    text = "Please fill in the blank";
  }

  const speechMsg = new SpeechSynthesisUtterance()
  speechMsg.lang = language;
  speechMsg.text = text

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg)
}


// 이벤트 영역
const select = document.getElementById("lang")
const text = document.getElementById("text")
const btn = document.getElementById("btn")

btn.addEventListener("click", e => {
  speak(text.value, select.options[select.selectedIndex].value)
  alert(select.selectedIndex);
})

function enter() {
  if (event.keyCode == 13) {
    speak(text.value, select.options[select.selectedIndex].value)
  }
}