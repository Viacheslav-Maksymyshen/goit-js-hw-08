import { throttle } from 'lodash';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const MESSAGE_KEY = 'feedback-form-stater';

// updateTextarea();
// updateEmail();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(saveDataForm, 500));
//input.addEventListener('input', throttle(saveEmail, 500));

const formData = {};

function onFormSubmit(evtent) {
  evtent.preventDefault();
  evtent.currentTarget.reset();
  localStorage.removeItem(MESSAGE_KEY);
}

function saveDataForm(evtent) {
  let message = evtent.target.value;
  console.log(
    '🚀 ~ file: 03-feedback.js ~ line 25 ~ saveDataForm ~ message',
    message
  );
  formData.message;
  console.log(
    '🚀 ~ file: 03-feedback.js ~ line 30 ~ saveDataForm ~ formData',
    formData
  );
  //formData[e.target.name] = e.target.value;

  //localStorage.setItem(MESSAGE_KEY, message);
}

// function saveEmail(evtent) {
//   const message = evtent.target.value;
//   localStorage.setItem(EMAIL_KEY, message);
// }

// function updateTextarea() {
//   const emailContent = localStorage.getItem(MESSAGE_KEY) || '';
//   if (emailContent) {
//     textarea.value = emailContent;
//   }
// }
// function updateEmail() {
//   const savedMessage = localStorage.getItem(EMAIL_KEY) || '';
//   if (savedMessage) {
//     input.value = savedMessage;
//   }
// }

// const EMAIL_KEY = 'hw8-email-user';
// const MESSAGE_KEY = 'hw8-message-user';

// updateTextarea();
// updateEmail();

// form.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', throttle(saveTextarea, 500));
// input.addEventListener('input', throttle(saveEmail, 500));

// function onFormSubmit(evtent) {
//   evtent.preventDefault();
//   evtent.currentTarget.reset();
//   localStorage.removeItem(EMAIL_KEY);
//   localStorage.removeItem(MESSAGE_KEY);
// }

// function saveTextarea(evtent) {
//   const message = evtent.target.value;
//   localStorage.setItem(MESSAGE_KEY, message);
// }

// function saveEmail(evtent) {
//   const message = evtent.target.value;
//   localStorage.setItem(EMAIL_KEY, message);
// }

// function updateTextarea() {
//   const emailContent = localStorage.getItem(MESSAGE_KEY) || '';
//   if (emailContent) {
//     textarea.value = emailContent;
//   }
// }
// function updateEmail() {
//   const savedMessage = localStorage.getItem(EMAIL_KEY) || '';
//   if (savedMessage) {
//     input.value = savedMessage;
//   }
// }
