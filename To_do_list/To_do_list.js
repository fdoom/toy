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

        document.getElementById("input").value = "";
        
        /* 추가한 글 바로 옆에 제거 버튼 생성 */
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
    }
}

function remove(a)
{
    alert('Remove your list');
    var n = document.getElementById('node' + a);
    var bnt = document.getElementById(a);
    var b = document.getElementById('br' + a);
    n.style.display="none";
    bnt.style.display = "none";
    b.style.display = "none";
}