document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');

  // Specific mocal queries
  let mrplowBtn = document.querySelector('#mrplow-btn');
  let mrplowModal = document.querySelector('#mrplow-modal');
  mrplowBtn.addEventListener('click', () => { showModal(mrplowModal) });

  let mathquizBtn = document.querySelector('#mathquiz-btn');
  let mathquizModal = document.querySelector('#mathquiz-modal');
  mathquizBtn.addEventListener('click', () => { showModal(mathquizModal) });
  
  // Main modal controls
  let modalBG = document.querySelectorAll('.modal-bg');
  let modalX = document.querySelectorAll('.x-close-button');
  let modalBox = document.querySelectorAll('.modal-box');
  modalBG.forEach((modal) => {
    modal.addEventListener('click', () => { hideModal(modal) });
  });
  modalX.forEach((btn) => {
    let modalBox = btn.parentElement.parentElement.parentElement;
    btn.addEventListener('click', () => { hideModal(modalBox) });
  });
  modalBox.forEach((modal) => {
    modal.addEventListener('click', (e) => { e.stopPropagation(); })
  });
  function showModal(id) {
    id.setAttribute('class', 'display-flex modal-bg');
  }
  function hideModal(id) {
    id.setAttribute('class', 'display-none modal-bg');
  }
})