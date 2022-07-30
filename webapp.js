// ADD STUDENTS
let entry = document.querySelector(".stuSubmit");
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
        
        

// subForm.onsubmit = function (){
//   event.preventDefault();
//   var selection = subForm["gender"].value;
//   cartEl.innerHTML += '<li><h1>' + selection + '</h1></li>';

//   // show the value
//   console.log(selection);
// }

        entry.addEventListener('click', function () {
            
            if ( fuName.value !== '' && subj.value !== '' && idNo.value !== '' && gender.value !== '' && email.value !== '') {
                studentNo.innerHTML = currentIndex;
                cartEl.innerHTML += '<li id="' + currentIndex +  ')"><h2>'
                    + fuName.value + '</h2><button>view</button><span>'
                    + subj.value + '</span><span>'
                    + idNo.value + '</span><span>'
                    // + gender.value + '</span><span>'
                    + email.value + '</span></li>';
                currentIndex += 1;
                // fuName.value = subj.value = idNo.value = email.value = "";
                // subj.value = "";
            }
            
        });

        function removeFromCart(index) {
            currentIndex -= 1;
        // console.log(index);
        // let liEl = document.getElementById(index.toString()).remove();
            studentNo.innerHTML = currentIndex;        
        };

//         let cartEl = document.querySelector('#cart');
// let gender = document.getElementsByName('myRadioButton');


// function getRadioButtonValue() {
//   for(var i=0; i<gender.length; i++){
//      if(gender[i].checked){
//        cartEl.innerHTML = '<li><h1>' + gender[i].value + '</h1></li>' ;
//        break;
//      }
//   }
// }


// NEw
// let cartEl = document.querySelector('#cart');
// let subForm = document.querySelector('.subForm');

// subForm.onsubmit = function (){
//   event.preventDefault();
//   var selection = subForm["gender"].value;
//   cartEl.innerHTML += '<li><h1>' + selection + '</h1></li>';

//   // show the value
//   console.log(selection);
// }
