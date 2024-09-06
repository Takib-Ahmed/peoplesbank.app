

window.onload = function () {
    main();
}

function main() {
    const signup = document.getElementById('signupbutton');
    const signup2 = document.getElementById('signupbutton2');  
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const overlaychild = document.getElementById('overlaychildid');
    const rightfirst = document.getElementById('rightfirst');

    signup.addEventListener('click', function () {
        left.classList.toggle('leftanimation');
       right.classList.toggle('rightanimation');
overlaychild.classList.toggle('overlaychild1');
  rightfirst.classList.toggle('overlaychild2');
      signup.classList.toggle('button');
    transactionform.style.display = 'none';
    createaccountform.style.display = 'block';
    errorMessages.textContent = '';
    errorMessages.style.color = '';
    nameinput.focus()

        
    });
    signup2.addEventListener('click', function () {
        left.classList.remove('leftreversed');
        right.classList.remove('rightreversed');
 overlaychild.classList.remove('overlaychild1reversed');
   rightfirst.classList.remove('overlaychild2reversed');
       signup.classList.remove('buttonreversed');
        left.classList.toggle('leftanimation');
       right.classList.toggle('rightanimation');
overlaychild.classList.toggle('overlaychild1');
  rightfirst.classList.toggle('overlaychild2');
      signup.classList.toggle('button');
    transactionform.style.display = 'none';
    createaccountform.style.display = 'block';
    errorMessages.textContent = '';
    errorMessages.style.color = '';
    nameinput.focus()

        
    }); 
    const signin = document.getElementById('signin');

    signin.addEventListener('click',function(){
signup.click();

signup.style.display = 'none'
signup2.style.display = 'block'
        left.classList.toggle('leftreversed');
        right.classList.toggle('rightreversed');
        overlaychild.classList.toggle('overlaychild1reversed');
        rightfirst.classList.toggle('overlaychild2reversed');
        signup.classList.toggle('buttonreversed');
        
     
        
    })
    const Signup = document.getElementById('Signup');
    const Signin2 =  document.getElementById('Signin2');
    const errorMessage = document.getElementById('error-message')
  const overlaychildid2 = document.getElementById('overlaychildid2')
  const minimum = document.getElementById('minimumbalance');
    Signup.addEventListener('click',function(){
        if(!nameinput.value || !emailinput.value || !passwordinput.value || !minimum.value){
  
            errorMessage.textContent = 'All fields are required.';
            errorMessage.style.color = 'red'
      }
      else{  
        
    
        signin.click();
        Signin.style.display = 'none'
        Signin2.style.display = ' block';
        Name.innerText = `${localStorage.getItem('Username')}`;
           email.innerText = `${localStorage.getItem('UserMail')}`;
           overlaychildid2.style.display = 'block'
           overlaychild.style.opacity = '0';
           overlaychild.classList.add('transparent');
              rememberme.innerHTML = `<p style="color: #6051ff;font-size: smaller;margin-bottom: 5px;cursor: pointer;">Remember me</p>`
           

localStorage.setItem('newbalance',parseFloat(minimum.value));
document.getElementById('Balance').textContent = `${parseInt(localStorage.getItem('newbalance'))}tk`;
document.getElementById('deposit-input').focus();

        }
 
 
    })

  

    const Signin = document.getElementById('Signin');
    const createaccount = document.getElementById('Createaccount')
    const profile = document.getElementById('profile');
    const createaccountform = document.getElementById('createaccountform');
    const transactionform = document.getElementById('transactionform');
    const errorMessages = document.getElementById('error-messages')
    Signin.addEventListener('click',function(){

        if(
            !loginmail.value || !loginpassword.value
           
        ){
            errorMessages.textContent = 'All fields are required.';
            errorMessages.style.color = 'red';
        }
        else{
            

       
            if(   loginmail.value == mailmatch ,
                loginpassword.value == passwordmatch){
                    depositAmount.focus()
                transactionform.style.display = 'block';
            createaccount.style.display = 'none';
            profile.style.display = 'block';
            left.classList.add('leftanimation');
           right.classList.add('rightanimation');
    overlaychild.classList.add('overlaychild1');
      rightfirst.classList.add('overlaychild2');
          signup.classList.add('button');
          left.classList.remove('leftreversed');
          right.classList.remove('rightreversed');
    overlaychild.classList.remove('overlaychild1reversed');
     rightfirst.classList.remove('overlaychild2reversed');
         signup.classList.remove('buttonreversed');
            createaccountform.style.display = 'none';
                  Name.innerText = `${localStorage.getItem('Username')}`;
           email.innerText = `${localStorage.getItem('UserMail')}`;
               overlaychildid2.style.display = 'none';
               document.getElementById('deposit-input').focus()
               
            }
            else{
                      alert('Wrong info')
            }
        }




    })
    Signin2.addEventListener('click',function(){

        if(!loginmail.value || !loginpassword.value){
      
            errorMessages.textContent = 'All fields are required.';
            errorMessages.style.color = 'red'  
        }
        else{
         
       
            if(   loginmail.value == mailmatch ,
                loginpassword.value == passwordmatch){
                    depositAmount.focus()
                signin.click();
                transactionform.style.display = 'block';
                createaccount.style.display = 'none';
                profile.style.display = 'block';
                left.classList.add('leftanimation');
               right.classList.add('rightanimation');
        overlaychild.classList.add('overlaychild1');
          rightfirst.classList.add('overlaychild2');
              signup.classList.add('button');
              left.classList.remove('leftreversed');
              right.classList.remove('rightreversed');
        overlaychild.classList.remove('overlaychild1reversed');
         rightfirst.classList.remove('overlaychild2reversed');
             signup.classList.remove('buttonreversed');
                createaccountform.style.display = 'none';
                      Name.innerText = `${localStorage.getItem('Username')}`;
               email.innerText = `${localStorage.getItem('UserMail')}`;
                   overlaychildid2.style.display = 'none'
            }
     
    else{
        alert('Please Refresh the page once') 
    }
        }

    })
    const Transactions = document.getElementById('Transactions');
    const profileonly = document.getElementById('profileonly');
    const profilecontainer = document.getElementById('profilecontainer')
   Transactions.addEventListener('click',function(){
    var transactions = document.getElementById("transactions");
        if (transactions.style.display === "none" || transactions.style.display === "") {
            transactions.style.display = "block";
            profileonly.style.display = ' none';
            profilecontainer.classList.add('profile-containeroverflow');
        } else {
            transactions.style.display = "none";
              profileonly.style.display = ' block';
              profilecontainer.classList.remove('profile-containeroverflow');
        }
   })


const nameinput = document.getElementById('nameinput')
const emailinput = document.getElementById('emailinput')
const passwordinput = document.getElementById('Passwordinput')

// const Storage = [nameinput , emailinput , passwordinput]
// const Storage2 = ["Username" , "UserMail" , "UserPassword"]
// for(i=0;i<Storage.length;i++){
// ;
// Storage[i].addEventListener('input', (e)=>{
        
// localStorage.setItem(Storage2[i],e.target.value)
//     })
// }

// }


const userdata = {
    name:"",
    mail:"",
    password:""
}
nameinput.addEventListener('input',(e)=>{
    userdata.name = e.target.value
    localStorage.setItem('Username',userdata.name);
    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
        emailinput.focus()
        }
      })
})
emailinput.addEventListener('input',(e)=>{
    userdata.mail = e.target.value
    localStorage.setItem('UserMail',userdata.mail)
    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
      passwordinput.focus()
        }
      })
})
passwordinput.addEventListener('input',(e)=>{
    userdata.password = e.target.value
    localStorage.setItem('Password',userdata.password)
    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
      minimum.focus()
        }
      })
    
})
minimum.addEventListener('input',(e)=>{

    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
          Signup.click()
        }
      })
    
})


const Name = document.getElementById('name')
const email = document.getElementById('email')


const loginmail = document.getElementById('loginmail')
const loginpassword = document.getElementById('loginpassword')
const mailmatch = localStorage.getItem('UserMail')
const passwordmatch = localStorage.getItem('Password') 
loginmail.addEventListener('input',(e)=>{

    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
         loginpassword.focus()
        }
      })
    
})
loginpassword.addEventListener('input',(e)=>{

    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
       
         Signin2.click()
         Signin.click()
        }
      })
    
})



balance = document.getElementById('Balance')

// let Stbalance = 0;

// const depositinput = document.getElementById('deposit-input');
// depositinput.addEventListener('input',(e)=>{
//   depositvalue = e.target.value;
// localStorage.setItem('total',parseInt(depositvalue));
// ;})




//   const deposit = document.getElementById('deposit');
//   deposit.addEventListener('click',function(){
 

// getresult  =parseInt(localStorage.getItem('total')) ;
//  intiger = getresult;
//  const plus = Stbalance +=  intiger ;
 

//  localStorage.setItem('totalbalance',Stbalance);
//  const totalbalance = parseInt(localStorage.getItem('totalbalance'));
//  const final = totalbalance ;
//  balance.innerText = `${Stbalance}tk`;

//   })

  function initializeBalance() {
    let storedBalance = localStorage.getItem('totalBalance');
    if (!storedBalance) {
        storedBalance = 0;
        localStorage.setItem('totalBalance', storedBalance);
    }
    document.getElementById('Balance').textContent = `$${parseFloat(storedBalance).toLocaleString()}`;
}

// Function to make a deposit and store it in localStorage
document.getElementById('deposit-input').addEventListener('input',(e)=>{

    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
         
        document.getElementById('withdraw-input').focus()
        }
      })
    
})

deposit.addEventListener('click',function makeDeposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-input').value);
localStorage.setItem('Deposit',depositAmount)
    if (!isNaN(depositAmount) && depositAmount > 0) {
        // Retrieve the current total balance from localStorage
        let currentBalance = parseFloat(localStorage.getItem('totalBalance')) || 0;

        // Add the new deposit to the current balance
        const newBalance = parseInt(localStorage.getItem('newbalance')) + depositAmount;

        // Store the updated balance back in localStorage
        localStorage.setItem('totalBalance', newBalance);

                localStorage.setItem('newbalance',newBalance)// Update the displayed total balance
        document.getElementById('Balance').textContent = `${parseInt(localStorage.getItem('newbalance'))}tk`;

    } else {
        alert("Please enter a valid deposit amount");
    }

    // Clear the input field
    document.getElementById('deposit-input').value = '';
    
const table = document.getElementById('table');
const tablerow = document.createElement('tr');

var nowDate = new Date(); 

var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
  var datetime = date.toLocaleString();

  var time = nowDate.getHours()+'-'+(nowDate.getMinutes()+1)+'-'+nowDate.getSeconds(); 
  var nowtime = time.toLocaleString();

    tabledate =datetime ;
  tabletime =nowtime ;
  tableamount =parseFloat(localStorage.getItem('Deposit'));
 tablebalance = localStorage.getItem('newbalance');

 tablerow.innerHTML = 

    ` 
                        <td>${tabledate}</td>
                        <td>${tabletime}</td>
                        <td>  DEPOSIT    ${tableamount}TK  </td>
                        <td>${tablebalance}</td>
                    `

table.appendChild(tablerow);

tableinside = JSON.stringify(table.innerHTML)
localStorage.setItem('tableinnerhtml',tableinside);

}
    
)

document.getElementById('Balance').textContent = `${parseInt(localStorage.getItem('newbalance'))}tk`;
// Initialize balance when the page loads
window.onload = initializeBalance;
function initializewithdraw() {
    let withdraw = localStorage.getItem('withdraw');
    if (!withdraw) {
        withdraws = 0;
        localStorage.setItem('withdraw', withdraws);
    }
    document.getElementById('Balance').textContent = `$${parseFloat(storedBalance).toLocaleString()}`;
}


document.getElementById('withdraw-input').addEventListener('input',(e)=>{

    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
          
        
        }
      })
    
})
withdraw = document.getElementById('withdraw')
let currentBalance = parseInt(localStorage.getItem('newbalance'));
withdraw.addEventListener('click',function withdraw() {
    const windrawamount = parseFloat(document.getElementById('withdraw-input').value);
localStorage.setItem('withdraw',windrawamount)
    if (!isNaN(windrawamount) && windrawamount > 0) {
        // Retrieve the current total balance from localStorage
        // let updatebalance = parseFloat(localStorage.getItem('withdraws')) || 0;
let currentBalance = parseInt(localStorage.getItem('newbalance'));
        // Add the new deposit to the current balance
        const newlyBalance = currentBalance - windrawamount;

        // Store the updated balance back in localStorage
        localStorage.setItem('newbalance', newlyBalance);

        // Update the displayed total balance
        document.getElementById('Balance').textContent = `${newlyBalance.toLocaleString()}tk`;

    }
    else if (windrawamount>currentBalance){
        alert("Insufficient Balance");
    }
     else {
        alert("Please enter a valid deposit amount");
    }

    // Clear the input field
    document.getElementById('withdraw-input').value = '';



   
    const table = document.getElementById('table');
    const tablerow = document.createElement('tr');
    
    var nowDate = new Date(); 
    
    var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
      var datetime = date.toLocaleString();
    
      var time = nowDate.getHours()+'-'+(nowDate.getMinutes()+1)+'-'+nowDate.getSeconds(); 
      var nowtime = time.toLocaleString();
    
        tabledate =datetime ;
      tabletime =nowtime ;
      tableamount =parseFloat(localStorage.getItem('withdraw'));
     tablebalance = localStorage.getItem('newbalance');
    
     tablerow.innerHTML = 
    
        ` 
                            <td>${tabledate}</td>
                            <td>${tabletime}</td>
                            <td>  WITHDRAW   ${tableamount}TK  </td>
                            <td>${tablebalance}</td>
                        `
    tablerow.setAttribute('id',tablerow)


    table.appendChild(tablerow);
tableinside = JSON.stringify(table.innerHTML)
localStorage.setItem('tableinnerhtml',tableinside);

}
    
)


document.getElementById('Balance').textContent = `${parseInt(localStorage.getItem('newbalance'))}tk`;
window.onload = initializewithdraw;

   
const table = document.getElementById('table');
const tablerow = document.createElement('tr');
tableinnerhtml = JSON.parse(localStorage.getItem('tableinnerhtml'));
table.innerHTML = tableinnerhtml;
console.log(table)
// window.onload = appendrow();
const overlaychildid = document.getElementById('overlaychildid');
const rememberme = document.getElementById('rememberme');
rememberme.addEventListener('click',function(){
    loginmail.value = localStorage.getItem('Username')
    loginpassword.value = localStorage.getItem('Password')
})


if(!(mailmatch.value=='')  || !(passwordmatch.value=='')){


overlaychildid.innerHTML = ` <h2 >Welcome Back</h2>
                <p style="line-height: 25px;color: #51ffd9;">Login with your account details to access your account</p>`
                rememberme.innerHTML = `<p style="color: #6051ff;font-size: smaller;margin-bottom: 5px;cursor: pointer;">Remember me</p>`
                
}
loginmail.focus()
const depositAmount = document.getElementById('deposit-input')

}


