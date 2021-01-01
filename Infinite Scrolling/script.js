let num = 21;

/* 페이지 실행 시 글 목록 20개 생성 */
window.onload = function () {
    for (let i = 0; i < 20; i++) {
        lorem_ipsum(i + 1);
    }
}

/* 무작위 글 생성 */
function lorem_ipsum(n) {
    let Random = Math.random().toString(36).slice(2);
    let long_Random = Math.random().toString(36).slice(2);

    /* 글 길이도 랜덤으로 글 내용 저장 */
    for (let i = 0; i < Math.random() * 100; i++) {
        if(Math.floor(Math.random() * 10) % 2 == 0)
        {
            long_Random += ' ';
        }
        long_Random += Math.random().toString(36).slice(2);
    }

    additional(Random, long_Random, n);
}

/* 해당하는 위치에 저장된 글들을 출력 */
function additional(text, long_text, n) {
    let number = document.createElement('div');
    number.className = 'number';

    let main = document.createElement('div');
    main.className = 'main';

    let title = document.createElement('h3');
    title.className = 'title';

    let content = document.createElement('p');
    content.className = 'content';

    number.append(n);
    content.append(long_text);
    title.append(text);

    main.appendChild(number);
    main.appendChild(title);
    main.appendChild(content);
    document.getElementById('container').appendChild(main);
}

/* 입력한 값에 대한 글 제목 및 글 내용이 있는지 확인 */
function filter() {

    let value = document.getElementById("input").value;
    let main = document.getElementsByClassName('main');
    for (let i = 0; i < main.length; i++) {
        title = main[i].getElementsByClassName("title");
        content = main[i].getElementsByClassName("content");

        if (title[0].innerHTML.indexOf(value) == -1 && content[0].innerHTML.indexOf(value) == -1) {
            main[i].style.display = "none";
        }
        else {
            main[i].style.display = "block";
        }
    }
}

/* 스크롤바 위치 확인 및 로딩 실행 */
window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.scrollHeight;

    /* 50은 웹페이지 margin 값 */
    if (scrollLocation + windowHeight >= fullHeight + 50) {
        let loading = document.getElementById('load');
        loading.style.display = "block";
        setTimeout(more, 3000);
    }

    scrollFunction();
})

/* 로딩 종료 및 글 목록 추가 */
function more() {
    let loading = document.getElementById('load');
    loading.style.display = "none";

    /* 무작위 갯수의 글 추가 */
    for (let i = 0; i < Math.random() * 70; i++) {
        lorem_ipsum(num++);
    }
}
function scrollFunction() {
    var btn = document.getElementById('btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function GoTop() {
    window.scrollTo(0, 0);
}