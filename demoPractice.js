function convert() {
  let Celsius = Number(document.getElementById("input").value);
  let inchval = (Celsius * 9) / 5 + 32;
  let convert = document.getElementById("result");
  convert.innerHTML = inchval.toFixed(2) + " Fahrenheit";
}
