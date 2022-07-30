let drop = document.querySelector(".drag-area");
let upload = document.querySelector("#file");
let dropField = document.querySelector(".upload-file");
let nameBox = document.querySelector(".drag-area span");



let entry = document.querySelector(".addStudent");
let studentNo = document.querySelector('#learner');
let cartEl = document.querySelector('#cart');
let fuName = document.querySelector('#name');
let subj = document.querySelector('#subject');
let idNo = document.querySelector('#idno');
// let gender = document.querySelector('#gender option');
let mail = document.querySelector('#email');
let totalEl = document.querySelector('#total-price');
let currentIndex = 1;

// upload.onmouseover = upload.onmouseleave = function () {
//     drop.classList.toggle("active");
// }

upload.ondragover = function () {
    drop.classList.add("active");
}
upload.ondragleave = function () {
    drop.classList.remove("active");
}
upload.addEventListener('change', function(){
	drop.classList.remove('active');	
	//Take the file name and show it
	let fileName = upload.value;
	let index = fileName.lastIndexOf('\\');
	fileName = fileName.substring(fileName.length, index + 1);
	nameBox.innerHTML = fileName.toUpperCase();
	nameBox.style.opacity = '1';
});


// let list = document.querySelector('#display');
// let entry = document.querySelector("#addLearner");


// enterData.onsubmit = function(e) {
//     e.preventDefault();
//     let fullName = document.querySelector('fullName').value;
//     let enterData = document.createElement('li');
//     enterData.appendChild(document.createTextNode(fullName));
//     list.appendChild(enterData);
// }


entry.addEventListener('click', function () {
    if ( fuName.value !== '' && subj.value !== '' && idNo.value !== '' && email.value !== '') {
        studentNo.innerHTML = currentIndex;
        // cartEl.innerHTML += '<li id="' + currentIndex + '" class="cart-list"><button class="removeBtn" onclick="removeFromCart(' 
        //     + currentIndex + ')">x</button><h3>' + fuName.value + '</h3> <span>'
        //     + subj.value + '</span><span>'
        //     + idNo.value + '</span><span>'
            // + gender.value + '</span><span>'
            // + email.value + '</span></li>';
        currentIndex += 1;
        // fuName.value = subj.value = idNo.value = email.value = "";
        // subj.value = "";
    }
});