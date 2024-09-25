function Show() {
    document.querySelector(".canvas").classList.toggle('display')
    document.querySelector("body").classList.toggle('over')
    document.querySelector(".overlay").classList.toggle('overlay_shows')
}

function like(num) {
    document.querySelectorAll(".fa-heart")[num].classList.toggle('liked')
}

function hamburger() {
    document.querySelector(".one_menu").classList.toggle('one_menu_show')
}

function next() {
    document.querySelector('.Next').classList.toggle('Next_show')
    document.querySelector('.Next_show').classList.toggle('Next_back')
}
function back() {
    document.querySelector('.Next').classList.remove('Next_show')
}


function heart(num) {
    document.querySelectorAll('.fa-heart')[num].classList.toggle("fa_heart_red")
}

var val1 = 0;
var val2 = 0;
var val3 = 0;

var span1 = document.querySelector('.Percent1')
var span2 = document.querySelector('.Percent2')
var span3 = document.querySelector('.Percent3')

function counter1() {
    if (val1<64) {
        span1.innerHTML=++val1
    }
}
function counter2() {
    if (val2<38) {
        span2.innerHTML=++val2
    }
}
function counter3() {
    if (val3<59) {
        span3.innerHTML=++val3
    }
}

counter1()
counter2()
counter3()

setInterval(counter1, 10)
setInterval(counter2, 100)
setInterval(counter3, 100)


function Showform() {
 document.querySelector('.From_').classList.toggle('From_show')
    document.querySelector('body').classList.toggle("yes")
}

setTimeout(Showform, 15000);

// form validation//

function Validate_name() {
    let Pattern = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
    let Username = document.querySelector(".Username").value

    if (Pattern.test(Username)===false) {
        document.querySelector(".Username_notCorrect").classList.add("Username_notCorrect_show");
       console.log(userinput);
    } else {
        document.querySelector(".Username_notCorrect").classList.remove("Username_notCorrect_show");
    }
}

function Validate_email() {
    let Pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let Email = document.querySelector(".Email").value

    if (Pattern.test(Email)===false) {
        document.querySelector(".Email_notCorrect").classList.add("Email_notCorrect_show");
       console.log(userinput);
    } else {
        document.querySelector(".Email_notCorrect").classList.remove("Email_notCorrect_show");
    }
}

function Validate_number() {
    let Pattern = /^(?!(\d)\1{9})[7,8,9]\d{9}$/
    let Number = document.querySelector(".Number").value

    if (Pattern.test(Number)===false) {
        document.querySelector(".Number_notCorrect").classList.add("Number_notCorrect_show");
       console.log(userinput);
    } else {
        document.querySelector(".Number_notCorrect").classList.remove("Number_notCorrect_show");
    }
}

function Validate_password() {
    let Pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let input_password = document.querySelector(".input_password").value

    if (Pattern.test(input_password)===false) {
        document.querySelector(".input_password_notCorrect").classList.add("input_password_notCorrect_show");
    } else {
        document.querySelector(".input_password_notCorrect").classList.remove("input_password_notCorrect_show");
    }
}




function show() {
    document.querySelector(".input_password").setAttribute("type", "text")
}
function hide() {
    document.querySelector(".input_password").setAttribute("type", "password")
}
