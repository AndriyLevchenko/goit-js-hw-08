// Встановлення throttle

import throttle from 'lodash.throttle';

// Константа

const STORAGE_KEY = 'feedback-form-state';
const formData ={};
populateTextarea();

// Шлях до форми

const form = document.querySelector(".feedback-form");

// Слухачі подій

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

// Функції для роботи з формою

function onFormSubmit (e) {
    e.preventDefault();
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    const message = JSON.parse(saveMessage);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    try {  
        if(message) {   
            console.log(message);
        }
    } catch (err) {
        
    }
    delete formData.email;
    delete formData.message;
}

function onTextareaInput (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    const form = document.querySelector(".feedback-form");
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    const formData = JSON.parse(saveMessage);
    try {
        if(formData.email) {   
            form.email.value = formData.email;
        }
    } catch (err) {
      
      }
      try {
        if(formData.message) {   
            form.message.value = formData.message;
        }
    } catch (err) {
      
      }
}
