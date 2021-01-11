const data = [
  ["img/water.jpg", "목말라", "我渴了", "喉が渇いた", "I'm THIRSTY"], ["img/hungry.jpg", "배고프다", "我饿了", "お腹が空きました", "I'M HUNGRY"],
  ["img/tired.jpg", "피곤해", "我累了", "つかれた", "I'M TIRED"], ["img/hurt.jpg", "상처받았어", "我受伤了", "傷ついた", "I'M HURT"],
  ["img/happy.jpg", "행복해", "我很快乐", "満足しています", "I'M HAPPY"], ["img/angry.jpg", "화났어", "我生气了", "怒っている", "I'M ANGRY"],
  ["img/sad.jpg", "슬퍼", "我很难过", "悲しいです", "I'M SAD"], ["img/scared.jpg", "무서워", "我好害怕", "怖いです", "I'M SCARED"],
  ["img/outside.jpg", "밖에 나가고 싶어", "我想出去", "外に出たい", "I WANT TO GO OUTSIDE"], ["img/home.jpg", "집에 가고 싶어", "我想回家", "家に帰りたい", "I WANT TO GO HOME"],
  ["img/school.jpg", "학교에 가고 싶어", "我想上学", "学校に行きたい", "I WANT TO GO TO SCHOOL"], ["img/grandma.jpg", "할머니를 만나고 싶어", "我想见见奶奶。", "おばあちゃんに会いたい。", "I WANT TO GO TO GRANDMAS"]
];

/* 사진 및 글 목록 12개 생성 */
window.onload = function () {
  for (let i = 0; i < 12; i++) {
    create(i);
  }
}

/* 사진 및 글 목록 생성 */
function create(i) {

  /* main이 사진과 글을 감싸는 형태 */
  let main = document.createElement("div")
  main.className = "main";
  main.onclick = function () {
    speak(data[i][select.selectedIndex + 1], select.value);     //미리 만들어 둔 data를 이용하여 선택
  }

  let image = new Image();
  image.src = data[i][0];         //미리 만들어 둔 주소를 이용하여 선택

  let comment = document.createElement("p");
  comment.className = "comment";
  comment.append(data[i][4]);

  main.appendChild(image);
  main.appendChild(comment);

  document.getElementById("container").appendChild(main);
}

const select = document.getElementById("lang")    //select 정보
const text = document.getElementById("text")      //input 정보
const btn = document.getElementById("btn")        //button 정보

btn.addEventListener("click", e => {
  speak(text.value, select.value)
})

/* enter키 누를 시 */
function enter(event) {
  if (event.keyCode == 13) {
    speak(text.value, select.value)
  }
}

/* 소리 출력 */
function speak(text, language) {
  window.speechSynthesis.cancel() // 초기화

  /* input이 비어있다면 */
  if(!text)
  {
    text = "Please fill in the blank";
  }

  const speechMsg = new SpeechSynthesisUtterance()
  speechMsg.lang = language;      //언어 설정
  speechMsg.text = text;          //글 설정

  window.speechSynthesis.speak(speechMsg)   //소리 출력
}