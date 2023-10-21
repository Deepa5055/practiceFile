function calculator() {
  let v1 = parseFloat(document.getElementById("input1").value);
  let v2 = parseFloat(document.getElementById("input2").value);
  let v3 = parseFloat(document.getElementById("input3").value);
  v2 = v2 / 100;
  var mr = v2 / 12;
  var ta = 0;
  for (var i = 1; i <= v3; i++);
  {
    ta += v1 * mr;
  }

  document.getElementById(
    "result"
  ).innerHTML = `Total Amount after 3 Months: RS${ta.toFixed(2)}`;
}
