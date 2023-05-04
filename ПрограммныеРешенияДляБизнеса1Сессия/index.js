'use strict';

fetch('https://localhost:7116/api/Employers')
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error(error));
