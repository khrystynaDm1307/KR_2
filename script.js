let qSel = x => document.querySelector(x);
let gTag = x => document.getElementsByTagName(x);
let gClass = x => document.getElementsByClassName(x)

let none = x => x.style.display = "none";
let block = x => x.style.display = "block";
let flex = x => x.style.display = "flex";

let p = gTag("p");
let form = document.forms["form"];
let ul = document.forms["ul"];
let ol = document.forms["ol"];
let signForm = document.forms["sign"];

//html tags
qSel(".code").onclick = () => {
    none(qSel(".mainBtns"));
    flex(qSel(".forHtml"));
    qSel("textarea").value = qSel("main").innerHTML;
    none(qSel("main"));
    flex(qSel("textarea"));
}


//save
qSel(".save").onclick = () => {
    flex(qSel(".mainBtns"));
    none(qSel(".forHtml"));
    block(qSel("main"));
    none(qSel("textarea"));
    qSel("main").innerHTML = qSel("textarea").value;
}

//table
qSel(".table").onclick = () => {
    block(qSel(".modalTable"));
}

//reset
form.resetTable.onclick = () => {
    form.reset();
}


//create table
form.createTable.onclick = () => {

    let t = document.createElement("table");

    for (let i = 0; i < form.countTr.value; i++) {
        let tr = document.createElement("tr"); //create rows
        for (let j = 0; j < form.countTd.value; j++) {
            let td = document.createElement("td"); //create colls
            let tdText = document.createTextNode("TD"); //create text for colls

            //style td
            td.style.width = form.widthTd.value + "px";
            td.style.height = form.heightTd.value + "px";
            td.style.borderColor = form.colorBorder.value;
            td.style.borderWidth = form.widthBorder.value + "px";
            td.style.borderStyle = form.typeBorder.value;
            //

            td.appendChild(tdText); //в колонки даємо текст
            tr.appendChild(td); //  колонки даємо в рядки
        }
        t.appendChild(tr); //рядки в таблицю
    }
    qSel("textarea").appendChild(t);
    qSel("textarea").value += qSel("textarea").innerHTML;
}

// ul
qSel(".ul").onclick = () => {
    block(qSel(".modalUl"));
}

// ol
qSel(".ol").onclick = () => {
    block(qSel(".modalOl"));
}

// create ul/ol

ul.createList.onclick = () => {

    let list = document.createElement("ul");
    for (let i = 0; i < ul.countLi.value; i++) {
        let li = document.createElement("li"); //create li
        li.style.listStyleType = ul.markType.value;
        let liText = document.createTextNode("li"); //style li
        li.appendChild(liText);
        list.appendChild(li); //li в ul
    }
    qSel("textarea").appendChild(list);
    qSel("textarea").value += qSel("textarea").innerHTML;
}

ol.createList.onclick = () => {

    let list = document.createElement("ol");
    for (let i = 0; i < ol.countLi.value; i++) {
        let li = document.createElement("li"); //create li
        li.style.listStyleType = ol.markType.value;
        let liText = document.createTextNode("li"); //style li
        li.appendChild(liText);
        list.appendChild(li); //li в ul
    }
    qSel("textarea").appendChild(list);
    qSel("textarea").value += qSel("textarea").innerHTML;
}

//reset for ul/ol
ul.resetList.onclick = () => {
    ul.reset()
}
ol.resetList.onclick = () => {
    ol.reset()
}

//click on window
window.onclick = function (event) {
    if (event.target == qSel(".modalTable")) {
        none(qSel(".modalTable"))
    }
    if (event.target == qSel(".modalColors")) {
        none(qSel(".modalColors"))
    }
    if (event.target == qSel(".modalBg")) {
        none(qSel(".modalBg"))
    }
    if (event.target == qSel(".modalUl")) {
        none(qSel(".modalUl"))
    }
    if (event.target == qSel(".modalOl")) {
        none(qSel(".modalOl"))
    }
}

//жирність
qSel(".bold").onclick = () => {
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle('boldText')
    }
}

//курсивність
qSel(".italic").onclick = () => {
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle('italicText')
    }
}

//підкресленість
qSel(".underline").onclick = () => {
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle('underlineText')
    }
}

//закресленість
qSel(".str").onclick = () => {
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle('strText')
    }
}


//text-align
qSel(".left").onclick = () => {
    qSel("main").style.textAlign = "left"
}

qSel(".center").onclick = () => {
    qSel("main").style.textAlign = "center"
}

qSel(".right").onclick = () => {
    qSel("main").style.textAlign = "right"
}

//fonts
qSel(".font").onclick = () => {
    flex(qSel(".listFont"));
}

let fonts = qSel(".listFont");
fonts = fonts.children;
for (let i = 0; i < fonts.length; i++) {
    fonts[i].style.fontFamily = fonts[i].innerText;
    fonts[i].onclick = () => {
        qSel("main").style.fontFamily = fonts[i].innerText;
        none(qSel(".listFont"));
    }
    fonts[i].onmouseover = () => {
        fonts[i].style.backgroundColor = "rgba(231, 229, 229, 0.3";
    }
    fonts[i].onmouseout = () => {
        fonts[i].style.backgroundColor = "";
    }
}



//size
qSel(".tSize").onclick = () => {
    flex(qSel(".listSize"));
}

let sizes = qSel(".listSize");
sizes = sizes.children;
for (let i = 0; i < sizes.length; i++) {

    sizes[i].onclick = () => {
        qSel("main").style.fontSize = sizes[i].innerText;
        none(qSel(".listSize"));
    }
    sizes[i].onmouseover = () => {
        sizes[i].style.backgroundColor = "rgba(231, 229, 229, 0.3";
    }
    sizes[i].onmouseout = () => {
        sizes[i].style.backgroundColor = "";
    }
}

//color for text
qSel(".color").onclick = () => {
    block(qSel(".modalColors"));
}

for (let i = 0; i < 15; i++) {
    qSel(`.cl${i}`).onclick = () => {
        let color = getComputedStyle(qSel(`.cl${i}`));
        qSel("main").style.color = color.backgroundColor;
    }
    //для краси
    qSel(`.cl${i}`).onmouseover = () => {
        qSel(`.cl${i}`).style.border = "1px solid black";
    }
    qSel(`.cl${i}`).onmouseout = () => {
        qSel(`.cl${i}`).style.border = "";
    }
}

//background
qSel(".image").onclick = () => {
    block(qSel(".modalBg"));
}

let a = gClass("nav-link");
let k;
for (let i = 0; i < a.length; i++) {
    a[i].onclick = () => {
        a[i].classList.add("active");
        k = i;
        for (let i = 0; i < a.length; i++) {
            if (i != k) {
                a[i].className = "nav-link"
            }
        }
    }
}

let nav = gClass("nav-item");
nav[0].onclick = () => {
    flex(qSel(".container"));
    none(qSel(".containerImg"));
    none(qSel(".file"));
}
nav[1].onclick = () => {
    none(qSel(".container"));
    flex(qSel(".containerImg"));
    none(qSel(".file"));
}
nav[2].onclick = () => {
    none(qSel(".container"));
    none(qSel(".containerImg"));
    flex(qSel(".file"));
}
//bg colors
for (let i = 0; i < 15; i++) {
    qSel(`.bg${i}`).onclick = () => {
        let bgcolor = getComputedStyle(qSel(`.cl${i}`));
        qSel("main").style.backgroundColor = bgcolor.backgroundColor;
        qSel("main").style.backgroundImage = "";
    }
    //для краси
    qSel(`.bg${i}`).onmouseover = () => {
        qSel(`.bg${i}`).style.border = "1px solid black";
    }
    qSel(`.bg${i}`).onmouseout = () => {
        qSel(`.bg${i}`).style.border = "";
    }
}

//bg image
for (let i = 0; i < 9; i++) {
    qSel(`.bgImage${i}`).onclick = () => {
        let bgImage = getComputedStyle(qSel(`.bgImage${i}`));
        qSel("main").style.backgroundImage = bgImage.backgroundImage;
        qSel("main").style.backgroundColor = "";
    }
    //для краси
    qSel(`.bg${i}`).onmouseover = () => {
        qSel(`.bg${i}`).style.border = "1px solid black";
    }
    qSel(`.bg${i}`).onmouseout = () => {
        qSel(`.bg${i}`).style.border = "";
    }
}

//bg file
qSel(".custom-file-input").onchange = e => {
    none(qSel(".modalBg"));
    let image = e.target.files[0];
    let u = URL.createObjectURL(image)
    qSel("main").style.backgroundImage = `url(${u})`
}

//sign in
qSel(".sign").onclick = () => {
    block(qSel(".signModal"));
}
qSel(".btn-secondary").onclick = () => {
    if (sign.login.value == "admin" && sign.password.value == "admin") {
        none(qSel(".signModal"));
        sign.login.value == "";
        sign.password.value == "";
    }
    else {
        block(qSel(".forPass"));
        sign.login.style.border = "2px solid rgb(231, 65, 65)";
        sign.password.style.border = "2px solid rgb(231, 65, 65)";
    }
}
sign.login.onclick = () => {
    none(qSel(".forPass"));
    sign.login.style.border = "";
    sign.password.style.border = "";
}
