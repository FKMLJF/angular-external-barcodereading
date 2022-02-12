

//Call Angular component's function from Android/iOS WebView
function barcodeRead(barcode){
  let inputDomElement = document.getElementById("barcodeInput");
  if(inputDomElement)
  {
    inputDomElement.value = barcode;

    // When change input value, fire this trigger
    inputDomElement.dispatchEvent(new Event('change'));
  }
}
