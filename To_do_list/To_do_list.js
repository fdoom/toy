function addtional()
{
    alert('Your list add');
    var add = document.getElementById("input").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(add);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}