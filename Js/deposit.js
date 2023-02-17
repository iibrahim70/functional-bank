function getInputFieldValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId); 
  const inputFieldValueString = inputField.value; 
  const inputFieldValue = parseFloat(inputFieldValueString); 
  inputField.value = ''; 
  return inputFieldValue; 
}


function getTextElementValueById(elementId){
  const textElement = document.getElementById(elementId); 
  const textElementValueString = textElement.innertext;
  const textElementValue = parseFloat(textElementValueString); 
  return textElementValue; 
}


function setElementValueById(elementId, newValue){
  const textElement = document.getElementById(elementId); 
  textElement.innerText = newValue; 
}


document.getElementById('btn-deposit').addEventListener('click', function(){

  // get the element by id 
  // get the value from the element 
  // convert string value to a number 
  const newDepositAmount = getInputFieldValueById('deposit-field');
  
  // get previous deposit total by id 
  const previousDepositTotal = getTextElementValueById('deposit-total'); 

  // calculate new deposit toal 
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  
  // set deposit total value 
  setElementValueById('deposit-total', newDepositTotal); 

  // get previous balance by using the function 
  const previousBalanceTotal = getTextElementValueById('balance-total'); 
  const newBalanceTotal = previousBalanceTotal + newDepositAmount; 
  setElementValueById('balance-total', newBalanceTotal); 
})
