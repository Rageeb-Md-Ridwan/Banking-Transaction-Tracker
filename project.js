function handleDeposit() {
  var converted_input = convert("depo-amount", "value");
  var converted_d_amnt = convert("d-amnt", "innerText");
  var sum = converted_input + converted_d_amnt;
  setInnerText("d-amnt", sum);
  var converted_total = convert("t-amnt", "innerText");
  var adding_with_total = converted_input + converted_total;
  setInnerText("t-amnt", adding_with_total);
  document.getElementById("depo-amount").value = "";
}
function handleWithdraw() {
  var converted_input = convert("with-amount", "value");
  var converted_w_amnt = convert("w-amnt", "innerText");
  var summation = converted_input + converted_w_amnt;
  setInnerText("w-amnt", summation);
  var converted_total = convert("t-amnt", "innerText");
  var subbing_from_total = converted_total - converted_input;
  setInnerText("t-amnt", subbing_from_total);
  document.getElementById("with-amount").value = "";
}
function convert(id, element) {
  if (element == "innerText") {
    var value = document.getElementById(id).innerText;
    return parseFloat(value);
  } else {
    var value = document.getElementById(id).value;
    return parseFloat(value);
  }
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
