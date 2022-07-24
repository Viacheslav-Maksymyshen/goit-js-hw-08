import { throttle } from 'lodash';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const MESSAGE_KEY = 'feedback-form-stater';

updateDataForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(saveDataForm, 500));

// const formData = {};

function onFormSubmit(evtent) {
  evtent.preventDefault();
  if (textarea.value === '' || input.value === '') {
    alert('Some field is empty');
    return;
  }
  evtent.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(MESSAGE_KEY)));
  localStorage.removeItem(MESSAGE_KEY);
  alert('Feedback has been sent');
}

function saveDataForm(evtent) {
  // formData[evtent.target.name] = evtent.target.value;
  // localStorage.setItem(MESSAGE_KEY, JSON.stringify(formData));

  const emailValue = input.value;
  const messageValue = textarea.value;

  localStorage.setItem(
    MESSAGE_KEY,
    JSON.stringify({ email: emailValue, message: messageValue })
  );
}

function updateDataForm() {
  const dataContent = localStorage.getItem(MESSAGE_KEY) || '';
  try {
    const convertingDataContent = JSON.parse(dataContent);
    if (convertingDataContent.message) {
      textarea.value = convertingDataContent.message;
    }
    if (convertingDataContent.email) {
      input.value = convertingDataContent.email;
    }
  } catch (err) {
    console.log('error');
  }
}
