const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result show
    result.innerHTML = `<p>${bmi}</p>`;

    if (bmi < 18.6) {
      results.innerHTML = `<p>Under Weight</p>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<p>Normal Range</p>`;
    } else {
      results.innerHTML = `<p>Overweight</p>`;
    }
  }
});
