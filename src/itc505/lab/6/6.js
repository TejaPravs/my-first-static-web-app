document.addEventListener('DOMContentLoaded', function () {
  const headerColorButton = document.getElementById('header-color-button');
  const headerTitle = document.querySelector('.title');
  const recordForm = document.getElementById('record-form');
  const recordContent = document.getElementById('record-content');
  const recordsList = document.getElementById('record-list');

  headerColorButton.addEventListener('click', function () {
    const color = recordContent.value.trim();
    if (isValidColor(color)) {
      headerTitle.style.color = color;
      recordContent.value = '';
    } else {
      alert('Please enter a valid color.');
    }
  });

  function isValidColor(value) {
    const s = new Option().style;
    s.color = value;
    return s.color !== '';
  }
});
