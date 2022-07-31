// ADD STUDENTS
let entry = document.querySelector(".stuSubmit");
let studentDisplay = document.querySelector(".display-student");
let studentNo = document.querySelector('.vert1 h2');
let cartEl = document.querySelector('#cart');
let fuName = document.querySelector('#name');
let subj = document.querySelector('#subject');
let idNo = document.querySelector('#idno');
let gender = document.getElementsByName('radioButton');
// let gender = document.querySelector('#gender option');
let mail = document.querySelector('#email');

let subForm = document.querySelector('.subForm');
let currentIndex = 1;
        


entry.addEventListener('click', function () {
    
    if ( fuName.value !== '' && subj.value !== '' && idNo.value !== '' && gender.value !== '' && email.value !== '') {
        studentNo.innerHTML = currentIndex;
        cartEl.innerHTML += '<li id="' + currentIndex +  '"><h2>'
            + fuName.value + '</h2><button>view</button></li>';

        studentDisplay.innerHTML += '<div id="' + currentIndex +  '" class="student-info"><div><h1></h1><h2>'
            + fuName.value + '</h2><span>'
            + subj.value + '</span></div><hr><span><i class="fa fa-address-card"></i> '
            + idNo.value + '</span><span><i class="fa fa-envelope"></i> '
            // + gender.value + '</span><span>'
            + email.value + '</span></div>';
        currentIndex += 1;
        fuName.value = subj.value = idNo.value = email.value = "";
    }            
});

