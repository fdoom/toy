const data = ["(", ")", "C", "%", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", '.', "0", "＝", "+"];

window.onload = function () {
    for (var i = 0; i < data.length; i++)
        create(i);
}


function create(i) {
    let btn = document.createElement("button");
    btn.append(data[i]);

    if (isNaN(data[i]))
        btn.className = "operator";
    else
        btn.className = "operand";

    document.getElementById("container").appendChild(btn);

    btn.addEventListener("click", function () {
        if (i == 2)
            document.getElementById("input").value = "";
        else if (i == 18)
            result();
        else
            document.getElementById("input").value += data[i];
    })
}

function result() {
    var input = document.getElementById("input").value;
    var input = input.replace(/(\s*)/g, "");

    let stack = [];
    let convert = [];
    let temp = "";

    for (var i = 0; i < input.length; i++) {
        var token = input[i];
        if (!isNaN(token) || token == '.') {
            temp += token;
            if ((isNaN(input[i + 1]) || (i + 1 == input.length)) && input[i + 1] != '.') {
                convert.push(temp);
                temp = ""
            }
        }
        else {
            switch (token) {
                case '(':
                    stack.push(token);
                    break;
                case ')':
                    while (1) {
                        var popOP = stack.pop();
                        if (popOP == '(')
                            break;
                        convert.push(popOP);
                    }
                    break;
                case '+':
                case '-':
                case '×':
                case '÷':
                case '%':
                    while (stack.length && WhoPrecOp(stack[stack.length - 1], token) >= 0) {
                        convert.push(stack.pop());
                    }
                    stack.push(token);
                    break;
            }
        }
    }
    while (stack.length != 0) {
        convert.push(stack.pop());
    }

    for (var i = 0; i < convert.length; i++) {
        var token = convert[i];

        if (!isNaN(token)) {
            stack.push(token);
        }
        else {
            var op2 = Number(stack.pop());
            var op1 = Number(stack.pop());

            switch (token) {
                case '+':
                    stack.push(op1 + op2);
                    break;
                case '-':
                    stack.push(op1 - op2);
                    break;
                case '×':
                    stack.push(op1 * op2);
                    break;
                case '÷':
                    stack.push(op1 / op2);
                    break;
                case '%':
                    stack.push(op1 * op2 / 100);
                    break;
            }
        }
    }
    document.getElementById("input").value = stack;
}

function GetOpPrec(op) {
    switch (op) {
        case '×':
        case '÷':
        case '%':
            return 5;
        case '+':
        case '-':
            return 3;
        case '(':
            return 1;
    }
    return -1;
}

function WhoPrecOp(op1, op2) {
    op1Prec = GetOpPrec(op1);
    op2Prec = GetOpPrec(op2);

    if (op1Prec > op2Prec)
        return 1;
    else if (op1Prec < op2Prec)
        return -1;
    else
        return 0;
}

function clearEntry() {
    var input = document.getElementById("input").value;
    input = input.substr(0, input.length - 1)
    document.getElementById("input").value = input;
}

function enter(event) {
    if (event.keyCode == 13) {
        result();
    }
}