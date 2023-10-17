function convert() {
  let mv = Number(document.getElementById("input").value);
  let hv = Number(document.getElementById("inputs").value);
  let inchval = mv / hv;
  let convert = document.getElementById("result");
  convert.innerHTML = inchval.toFixed(2);
}
