img = ["1one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];

window.onload = () => slide();
x = 0;

function slide() {
    slider.style.backgroundImage = "url('image/" + img[x] + "')";
}

box2.onclick = () => {

    if (x < 4) {
        x++;
    }

    else {
        x = 0
    }

    slide();
}

box3.onclick = () => {
    if (x > 0) {
        x--;
    }

    else {
        x = 4;
    }
    slide();
}




setInterval(() => {
    date = new Date();

    hours = date.getHours() - 12;
    minutes = date.getMinutes();
    second = date.getSeconds()


    h.innerHTML = hours;
    min.innerHTML = minutes;
    s.innerHTML = second;
})


window.onload = () => {

    setInterval(() => {
        date = new Date();
        ss = date.getSeconds();
        mm = date.getMinutes();
        hh = date.getHours();
        h = (hh * 30) + (mm / 2);
        second2.style.transform = "rotate(" + ss * 6 + "deg)";
        minute2.style.transform = "rotate(" + mm * 6 + "deg)";
        hour2.style.transform = "rotate(" + h + "deg)";
    }, 1000)

};