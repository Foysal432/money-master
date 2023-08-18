function calculateButton(){
    const incomeValue = getInputField('income')
    // Expenses start
    const food = getInputField('food');
    
    const rent = getInputField('rent');
    
    const clothes =getInputField('clothes');
    // Total Expenses calculate
    const totalExpenses =  (food + rent + clothes);
//    set total Expenses
     const setTotalExpenses = setMoney('total-expense',totalExpenses)
    //  current valance 
    const currentBalance = incomeValue - totalExpenses; 
   setMoney('current-balance', currentBalance);
}
// save money
function saveButton(){
    const saveElement = document.getElementById('current-balance').innerText;
  const saveMoney = parseFloat(saveElement);
        // calculate save money
        const totalSave = (saveMoney * 0.2);     
        setMoney('save-Amount',totalSave);
     // remaining balance
          const remaining = saveMoney - totalSave;
          setMoney('reamaing', remaining);
        // const totalSave = saveMoney -(saveMoney * 0.2);
       
    }

// get value code reduce function
function getInputField(inputField){
  const inputElement = document.getElementById(inputField);
  const inputValueText = inputElement.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}
// set money amount 

function setMoney(setAreaId,Money){
    const setFieldValue = document.getElementById(setAreaId);
    setFieldValue.innerText = Money;
}