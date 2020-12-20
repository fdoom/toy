var i = 0;

function click_event()
{
    var add = document.getElementById("input").value;

    if(!add)
    {
        alert('Please input your list')
    }
    else
    {
        /* 글 추가 기능 */
        additional(add, i, 'node', 'list');
        /* 완료 버튼 */
        doneBotton(i); 
        /* 제거 버튼 생성 */
        removeButton(i);
        /*개행 처리 태그*/
        Next(i, 'br', 'list');
        i++;
    }
}

/* 글 추가 기능 및 수정 */
function additional(a, n, b, c)
{
    /* 입력한 값 SPAN 태그로 추가하기*/
    var node = document.createElement("SPAN");
    var textnode = document.createTextNode(a);
    node.id = b + n;
    node.appendChild(textnode);
    document.getElementById(c).appendChild(node);

    node.onclick = function(){
        modify(node.id);
    }
    document.getElementById("input").value = "";
}

/* 완료 버튼 생성 */
function doneBotton(n)
{
    var done_btn = document.createElement("BUTTON");
    done_btn.id = 'done' + n;
    done_btn.className="fas fa-check";
    document.getElementById("list").appendChild(done_btn);

    done_btn.onclick = function(){
        done(n);
    };
}

/* To do list의 목록들 완료 처리 */
function done(r)
{
    var value = document.getElementById('node' + r).innerHTML;
    
    additional(value, r, 'node_d', 'done');
        
    /* Done list 삭제 버튼 */
    var remove_btn = document.createElement("BUTTON");
    remove_btn.id = 'bnt' + r;
    remove_btn.className="fas fa-minus";
    document.getElementById("done").appendChild(remove_btn);

    remove_btn.onclick = function(){
        remove_d(r, remove_btn.id, br.id);
    };

    var br = document.createElement("BR");
    br.id = 'br_d' + r;
    document.getElementById("done").appendChild(br);
    remove(r);
}

/* To do list 목록의 삭제 버튼 */
function removeButton(a)
{
    var remove_btn = document.createElement("BUTTON");
    remove_btn.id = a;
    remove_btn.className="fas fa-minus";
    remove_btn.onclick = function(){
        remove(remove_btn.id);
    };
    document.getElementById("list").appendChild(remove_btn);
}

/* To do list에 있는 글과 버튼 삭제 */
function remove(a)
{
    var arr = ['node', 'br', 'done', ''];

    for(var i = 0; i < 4; i++)
    {
        var b = document.getElementById(arr[i] + a);
        b.style.display = "none";
    }
}

/* 글 수정 */
function modify(a)
{
    var value = prompt("Modify", "What is your list?");
    
    /* 수정하는 글에 어떠한 내용도 넣지않는다면 기존의 글 유지 */
    if(value)
    {
        document.getElementById(a).innerHTML = value;
    }
}

/* Done list 목록에 있는 글과 버튼 삭제 */
function remove_d(n, bnt_i, br)
{
    var arr = ['node_d' + n, bnt_i,br]

    for(var i = 0; i < 3; i++)
    {
        var a = document.getElementById(arr[i]);
        a.style.display = "none";
    }
}

/* br 태그 생성 */
function Next(n, a, b)
{
    var br = document.createElement("BR");
    br.id= a + n;
    document.getElementById(b).appendChild(br);
}

window.addEventListener("keydown", function(event) {
    if(event.key == 'Enter'){
        click_event();
    }
  }, true);