var i = 0;

function addtional()
{
    var add = document.getElementById("input").value;

    if(add == '')
    {
        alert('Please input your list')
    }
    else
    {
        alert('Add your list');
        /* 입력한 값 SPAN 태그로 추가하기*/
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode(add);
        node.id = 'node' + i;
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);

        /* 글 수정 이벤트 */
        node.onclick = function(){
            modify(node.id);
        }

        document.getElementById("input").value = "";

        /* 완료 버튼 */
        var done_btn = document.createElement("BUTTON");
        done_btn.id = 'done' + i;
        done_btn.className="fas fa-check";
        document.getElementById("list").appendChild(done_btn);
        
        /* 제거 버튼 생성 */
        var remove_btn = document.createElement("BUTTON");
        remove_btn.id = i;
        remove_btn.className="fas fa-minus";
        remove_btn.onclick = function(){
            remove(remove_btn.id);
        };
        document.getElementById("list").appendChild(remove_btn);
        
        /*개행 처리 태그*/
        var br = document.createElement("BR");
        br.id= 'br' + i;
        document.getElementById("list").appendChild(br);
        i+=1;

        done_btn.onclick = function(){
            done(add, remove_btn.id);
        };
    }
}

function remove(a)
{
    alert('Remove your list');
    var n = document.getElementById('node' + a);
    var bnt = document.getElementById(a);
    var b = document.getElementById('br' + a);
    var d = document.getElementById('done' + a);
    n.style.display="none";
    bnt.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
}

function modify(a)
{
    var value = prompt("Modify", "What is your list?");
    document.getElementById(a).innerHTML = value;
}

function done(a, r)
{
    alert("Done!");
    var node = document.createElement("SPAN");
    var textnode = document.createTextNode(a);
    node.id = 'node_d' + r;
    node.appendChild(textnode);
    document.getElementById("done").appendChild(node);
        
    /* 제거 버튼 생성 */
    var remove_btn = document.createElement("BUTTON");
    remove_btn.id = 'bnt' + r;
    remove_btn.className="fas fa-minus";
    remove_btn.onclick = function(){
        remove_d(node.id, remove_btn.id, br.id);
    };

    document.getElementById("done").appendChild(remove_btn);

    var br = document.createElement("BR");
    br.id = 'br_d' + r;
    document.getElementById("done").appendChild(br);

    node.onclick = function(){
        modify(node.id);
    }

    remove(r);
}

function remove_d(n_i, bnt_i, b_i)
{
    alert('Remove your list');
    var n = document.getElementById(n_i);
    var bnt = document.getElementById(bnt_i);
    var b = document.getElementById(b_i);
    n.style.display="none";
    bnt.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
}