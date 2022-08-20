let str = "каждый охотник желает знать";

function f19() {
    let name = '';
    let x = str.split(' ')
    console.log(x)
    for (let i = 0; i < str.length; i++) {
        str[i] = str[0]
        console.log(x);
    }
}

document.querySelector('.b').onclick = f19;