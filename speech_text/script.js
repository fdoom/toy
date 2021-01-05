var data = [
  ["img/water.jpg", "I'm THIRSTY"], ["img/hungry.jpg", "I'M HUNGRY"], ["img/tired.jpg", "I'M TIRED"],
  ["img/hurt.jpg", "I'M HURT"], ["img/happy.jpg", "I'M HAPPY"], ["img/angry.jpg", "I'M ANGRY"],
  ["img/sad.jpg", "I'M SAD"], ["img/scared.jpg", "I'M SCARED"], ["img/outside.jpg", "I WANT TO GO OUTSIDE"],
  ["img/home.jpg", "I WANT TO GO HOME"], ["img/school.jpg", "I WANT TO GO TO SCHOOL"], ["img/grandma.jpg", "I WANT TO GO TO GRANDMAS"]
];

window.onload = function (){


  for(var i = 0; i < 12; i++)
  {
    create(i);
  }
}

function create(i)
{
  var main = document.createElement("div")
  main.className = "main";
  main.onclick = function(){
    speak(data[i][1], {
      rate: 1,
      pitch: 1.2,
      lang: selectLang.options[selectLang.selectedIndex].value
  })
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

function speak(text, opt_prop) {
    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
        return
    }
    
    window.speechSynthesis.cancel() // 현재 읽고있다면 초기화

    const prop = opt_prop || {}

    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = prop.rate || 1 // 속도: 0.1 ~ 10      
    speechMsg.pitch = prop.pitch || 1 // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR"
    speechMsg.text = text
    
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg)
}


// 이벤트 영역
const selectLang = document.getElementById("select-lang")
const text = document.getElementById("text")
const btnRead = document.getElementById("btn-read")

btnRead.addEventListener("click", e => {
    speak(text.value, {
        rate: 1,
        pitch: 1.2,
        lang: selectLang.options[selectLang.selectedIndex].value
    })
})