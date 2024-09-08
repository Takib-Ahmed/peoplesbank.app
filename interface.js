

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
    const loginmail = document.getElementById('loginmail')
const loginpassword = document.getElementById('loginpassword')

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
  const userdata = {
    name:"",
    mail:"",
    password:""
}


    Signup.addEventListener('click',function(){
        if(!nameinput.value || !emailinput.value || !passwordinput.value || !minimum.value ){
  
            errorMessage.textContent = 'All fields are required.';
            errorMessage.style.color = 'red'
      }
      else{
        if(minimum.value>0){
            localStorage.setItem('newbalance',parseFloat(minimum.value));
                  
        signin.click();
        Signin.style.display = 'none'
        Signin2.style.display = ' block';
        Name.innerText = `${localStorage.getItem('Username')}`;
           email.innerText = `${localStorage.getItem('UserMail')}`;
           overlaychildid2.style.display = 'block'
           overlaychild.style.opacity = '0';
           overlaychild.classList.add('transparent');
              rememberme.innerHTML = `<p style="color: #6051ff;font-size: smaller;margin-bottom: 5px;cursor: pointer;">Remember me</p>`

           


document.getElementById('Balance').textContent = `${parseInt(localStorage.getItem('newbalance'))}tk`;

document.getElementById('deposit-input').focus();
userdata.name = nameinput.value;
userdata.mail = emailinput.value;
userdata.password = passwordinput.value;
localStorage.setItem('Username',userdata.name);
localStorage.setItem('UserMail',userdata.mail);
localStorage.setItem('Password',userdata.password);
loginmail.focus();

setTimeout(() => {
    location.reload();
    

}, 500);
        }
        else {
            alert("Please enter a valid amount");
        }  
        


        }
 
 
    })
    

    minimum.addEventListener('input',(e)=>{

        e.target.addEventListener("keypress", function (event) {
    
            if (event.key === "Enter") {
              event.preventDefault();
      
        
      
        
            }
          })
        
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
            

       
            if(   loginmail.value == mailmatch ||
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
               document.getElementById('deposit-input').focus();
               loginpassword.value='';
               loginmail.value = '';

               
            }
            else{
                      alert("Sorry we couldn't find your account plz SIGN UP if you don't have an account")
            }
        }




    })
    Signin2.addEventListener('click',function(){

        if(!loginmail.value || !loginpassword.value){
      
            errorMessages.textContent = 'All fields are required.';
            errorMessages.style.color = 'red'  
        }
        else{
         
       
            if(   loginmail.value == mailmatch ||
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
                   overlaychildid2.style.display = 'none';
                   loginpassword.value='';
                   loginmail.value = '';
            }
     
    else{
alert('')
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


const nameinput = document.getElementById('nameinput');
const emailinput = document.getElementById('emailinput');
const passwordinput = document.getElementById('Passwordinput');






nameinput.addEventListener('input',(e)=>{


    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
        emailinput.focus()
        }
      })
})
emailinput.addEventListener('input',(e)=>{
  

    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
      passwordinput.focus()
        }
      })
})
passwordinput.addEventListener('input',(e)=>{


    e.target.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
          event.preventDefault();
      minimum.focus()
        }
      })
    
})



const Name = document.getElementById('name')
const email = document.getElementById('email')



const mailmatch = localStorage.getItem('UserMail');
const passwordmatch = localStorage.getItem('Password') ;
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
      
      
   
        }
      })
    
})



balance = document.getElementById('Balance')



  function initializeBalance() {
    let storedBalance = localStorage.getItem('totalBalance');
    if (!storedBalance) {
        storedBalance = 0;
        localStorage.setItem('totalBalance', storedBalance);
    }
    document.getElementById('Balance').textContent = `$${parseFloat(storedBalance).toLocaleString()}`;
}

// Function to make a deposit and store it in localStorage


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

  var time = nowDate.getHours()+'-'+nowDate.getMinutes(); 
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
// document.getElementById('deposit-input').addEventListener('input',(e)=>{

//     e.target.addEventListener("keypress", function (event) {

//         if (event.key === "Enter") {
//           event.preventDefault();
         
//         document.getElementById('withdraw-input').focus();
//        deposit.click()
       
//         }
//       })
    
// })
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



 withdraw = document.getElementById('withdraw')
const withdrawamoutn = document.getElementById('withdraw-input');
withdraw.addEventListener('click',function withdraw() {
    const windrawamount = parseFloat(document.getElementById('withdraw-input').value);
localStorage.setItem('withdraw',windrawamount)

 if (windrawamount > parseInt(localStorage.getItem('newbalance'))){
    alert("Insufficient Balance");
}

else if (!isNaN(windrawamount) && windrawamount > 0 ) {
        // Retrieve the current total balance from localStorage
        // let updatebalance = parseFloat(localStorage.getItem('withdraws')) || 0;
let currentBalance = parseInt(localStorage.getItem('newbalance'));
        // Add the new deposit to the current balance
        const newlyBalance = currentBalance - windrawamount;

        // Store the updated balance back in localStorage
        localStorage.setItem('newbalance', newlyBalance);

        // Update the displayed total balance
        document.getElementById('Balance').textContent = `${newlyBalance.toLocaleString()}tk`;



   
    const table = document.getElementById('table');
    const tablerow = document.createElement('tr');
    
    var nowDate = new Date(); 
    
    var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
      var datetime = date.toLocaleString();
    
      var time = nowDate.getHours()+'-'+nowDate.getMinutes(); 
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
 
     else {
        alert("Please enter a valid deposit amount");
    }

    // Clear the input field
    document.getElementById('withdraw-input').value = '';


}
    
)
// withdrawamoutn.addEventListener('input',(e)=>{

//     e.target.addEventListener("keypress", function (event) {

//         if (event.key === "Enter") {
//           event.preventDefault();
          
//         withdraw.click()
//         }
//       })
    
// })

document.getElementById('Balance').textContent = `${parseInt(localStorage.getItem('newbalance'))}tk`;
window.onload = initializewithdraw;
var mainbalance = parseFloat(document.getElementById('Balance').textContent)


const table = document.getElementById('table');
const tablerow = document.createElement('tr');
tableinnerhtml = JSON.parse(localStorage.getItem('tableinnerhtml'));
table.innerHTML = tableinnerhtml;
console.log(table)
// window.onload = appendrow();
const overlaychildid = document.getElementById('overlaychildid');
const rememberme = document.getElementById('rememberme');
rememberme.addEventListener('click',function(){
    loginmail.value = localStorage.getItem('UserMail')
    loginpassword.value = localStorage.getItem('Password')
})


loginmail.focus()
const depositAmount = document.getElementById('deposit-input')

// if(Signup.click == true){

//     document.getElementById('overlaychildid').style.display = 'none';
// }
 if(!(mailmatch.value=='')  || !(passwordmatch.value=='')){
    document.getElementById('overlaychildid2').style.display = 'block';
      rememberme.innerHTML = `<p style="color: #6051ff;font-size: smaller;margin-bottom: 5px;cursor: pointer;">Remember me</p>`

// overlaychildid.innerHTML = ` <h2 >Welcome Back</h2>
//                 <p style="line-height: 25px;color: #51ffd9;">Login with your account details to access your account</p>`
              
                
}

}


