const kjInput = document.getElementById('kjInput');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');

convertButton.addEventListener('click', () => {
  const kjValue = parseFloat(kjInput.value);
  const calories = kjValue / 4.184;
  result.textContent = `${kjValue} kJ is approximately ${calories.toFixed(2)} calories.`;
});