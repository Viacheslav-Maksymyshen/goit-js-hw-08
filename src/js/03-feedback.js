import { throttle } from 'lodash';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const MESSAGE_KEY = 'feedback-form-stater';

updateDataForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(saveDataForm, 500));

const formData = {};

function onFormSubmit(evtent) {
  evtent.preventDefault();
  evtent.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(MESSAGE_KEY)));
  localStorage.removeItem(MESSAGE_KEY);
}

function saveDataForm(evtent) {
  formData[evtent.target.name] = evtent.target.value;
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(formData));
}

function updateDataForm() {
  const dataContent = localStorage.getItem(MESSAGE_KEY) || '';
  if (dataContent) {
    const convertingDataContent = JSON.parse(dataContent);
    textarea.value = convertingDataContent.message;
    input.value = convertingDataContent.email;
  }
}
