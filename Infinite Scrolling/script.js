var num = 19;

window.onload = function(){
    for(var i = 0; i < 19; i++)
    {
        lorem_ipsum(i + 1);
    }
    var a = document.scrollTop();
    alert(a);
}

function lorem_ipsum(n)
{
    var Random = Math.random().toString(36).slice(2);
    var long_Random = Math.random().toString(36).slice(2);
    for(var i = 0; i < Math.random() * 10 * 10; i++)
    {
        long_Random += Math.random().toString(36).slice(2);
    }

    additional(Random, long_Random, n);
}

function additional(text, long_text, n)
{
    var number = document.createElement('div');
    number.className = 'number';
    var main = document.createElement('div');
    main.className = 'main';
    var title = document.createElement('h3');
    title.className = 'title';
    var content = document.createElement('p');
    content.className = 'content';

    number.append(n);
    content.append(long_text);
    title.append(text);

    main.appendChild(number);
    main.appendChild(title);
    main.appendChild(content);
    document.getElementById('container').appendChild(main);
}

function filter(){

    var value = document.getElementById("input").value;
    var main = document.getElementsByClassName('main'); 
    for(var i = 0; i < main.length; i++)
    {
        title = main[i].getElementsByClassName("title");
        content = main[i].getElementsByClassName("content");
        
        if (title[0].innerHTML.indexOf(value) == -1 && content[0].innerHTML.indexOf(value) == -1)
        {
            main[i].style.display = "none";
        }
        else
        {
            main[i].style.display = "block";
        }
    }
  }

  window.addEventListener('scroll', () => {
	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	let windowHeight = window.innerHeight; // 스크린 창
    let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

	if(scrollLocation + windowHeight >= fullHeight){
        var loading = document.getElementById('load');
        loading.style.display = "block";
        setTimeout(more, 3000);
	}
})


function more()
{
    var loading = document.getElementById('load');
    loading.style.display = "none";
    for(var i = 0; i < 3; i++)
    {
        lorem_ipsum(num++);
    }
}