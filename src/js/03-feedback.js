import { throttle } from 'lodash';
const form = document.querySelector('feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const EMAIL_KEY = 'hw8-email-user';
const MESSAGE_KEY = 'hw8-message-user';

updateTextarea();

form.addEventListener('submit', saveMessage);

function saveMessage(evt) {
  evt.preventDefault();

  //   updateOutput();
  form.reset();
}

function updateTextarea() {
  input.textContent = localStorage.getItem(EMAIL_KEY) || '';
  textarea.textContent = localStorage.getItem(MESSAGE_KEY) || '';
  if (input.textContent || textarea.textContent) {
    refs.textarea.value = savedMessage;
  }
}
