function insert(n) {
    if (n == 'c') {
        defaultSet();
        document.getElementById('input').innerHTML = "->";
        document.getElementById('result').innerHTML = 0;
    }
    else if (n == 'd') {
        defaultSet();
        var str = document.getElementById('input').innerHTML.slice(0, length - 1);
        document.getElementById('input').innerHTML = str;
    }
    else if (n == '=') {
        var len = document.getElementById('input').textContent.length - 2;
        var str = document.getElementById('input').innerHTML.substr(5, len + 2);
        var res = 0;

        for (let i = 0; i < len - 1; i++) {
            if (str[i] == '×')
                str = str.substring(0, i) + '*' + str.substring(i + 1);
            if ((str[i] == '-' || str[i] == '+' || str[i] == '*' || str[i] == '/') && (str[i + 1] == '-' || str[i + 1] == '+' || str[i + 1] == '/' || str[i + 1] == '*')) {
                er();
                break;
            }
        }

        res = eval(str);
        if(res == Infinity || res == -Infinity){
            res = er();
        }
        document.getElementById('result').innerHTML = res;
    }
    else {
        if (document.getElementById('result').innerHTML != "Math Error... Press clear all") {
            document.getElementById('input').innerHTML += n;
        }

    }
}

function er() {
    document.getElementById('result').style.fontSize = '35px';
    document.getElementById('result').style.color = "red";
    return "Math Error... Press clear all";
}

function defaultSet(){
    document.getElementById('result').style.fontSize = '50px';
    document.getElementById('result').style.color = "black";
}