document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');

  // Specific modal queries
  let mrplowBtn = document.querySelector('#mrplow-btn');
  let mrplowModal = document.querySelector('#mrplow-modal');
  mrplowBtn.addEventListener('click', () => { showModal(mrplowModal) });

  let mathquizBtn = document.querySelector('#mathquiz-btn');
  let mathquizModal = document.querySelector('#mathquiz-modal');
  mathquizBtn.addEventListener('click', () => { showModal(mathquizModal) });

  // Main modal controls
  document.querySelectorAll('.x-close-button').forEach((modalX) => {
    let modalBox = modalX.parentElement.parentElement;
    let modalBG = modalX.parentElement.parentElement.parentElement;
    modalBox.addEventListener('click', (e) => { e.stopPropagation(); })
    modalX.addEventListener('click', () => { hideModal(modalBG) });
    modalBG.addEventListener('click', () => { hideModal(modalBG) });
    document.addEventListener('keyup', (e) => { if (e.keyCode === 27) { hideModal(modalBG); }});
  });
  function showModal(id) {
    id.setAttribute('class', 'display-flex modal-bg');
  }
  function hideModal(id) {
    id.setAttribute('class', 'display-none modal-bg');
  }
});