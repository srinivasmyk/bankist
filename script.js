'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

function validateUser(form){
  //let form= document.querySelector(".modal__form").value;
  let user= document.querySelector(".userEmail").value;
  let password= document.querySelector(".userPassword").value;
  //console.log(user);

  if(user==="test"){
    aptrinsic("identify",
  {

    "id": "unique-user-id1", // Required for logged in app users
    "email": "userEmail@address.com",
    "firstName": "John",
    "lastName": "Smith",
  },
  {
  //Account Fields
    "id":"IBM", //Required
    "name":"International Business Machine",
    "Program": "Platinum" // flat custom attributes
  });
form.action="index.html";
   // window.location="index.html"
  }
return user;
}
