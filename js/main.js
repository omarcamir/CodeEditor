let htmlCode = document.querySelector("#htmlCode");
let cssCode = document.querySelector("#cssCode");
let jsCode = document.querySelector("#jsCode");
let output = document.querySelector("#output")



let run = ()=>{
    output.contentDocument.body.innerHTML = htmlCode.value + `<style>${cssCode.value}</style>`;
    output.contentWindow.eval(jsCode.value);
}

htmlCode.addEventListener('keyup',run);
cssCode.addEventListener('keyup',run);
jsCode.addEventListener('keyup',run);