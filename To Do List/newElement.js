function newElement() {

    let li = document.createElement("li");
    let inputText = document.getElementById("myInput").value;
    let t = document.createTextNode(inputText);
    li.appendChild(t);
    if (inputText === "") {
        alert("Enter text!");
    } else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";


    let myNodeList = document.getElementsByTagName("LI");
    for (let i = 0; i < myNodeList.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        myNodeList[i].appendChild(span);
    }

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    }, false);
}