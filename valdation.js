var user_name = document.getElementById('UserName')
var email = document.getElementById('Email')
var password = document.getElementById('password')
var fContainer =[]; 

function uservali(){
  var regex =/^[A-Z]\w{3,9}$/
  if(regex.test(user_name.value)==true && user_name.value!='' ){
    document.getElementById("usernamevlidat").innerHTML=''
    return true ;
  }else{
    document.getElementById("usernamevlidat").innerHTML='start with a capital latter'
    return false ;
  }
}
function emailvali(){
  var mail =/^[A-Z][a-z]{3,7}[0-9]{3,5}@(gmail|yahoo|icloud|Hotmail)\.com$/
   if(mail.test(email.value)==true && email.value != ''){
     document.getElementById("emailvlidat").innerHTML=''
     return true;
   }else{
     document.getElementById("emailvlidat").innerHTML='start by a capital latter It must contain @ and.com'
     return false;
   }
}
function passvali(){
  var x =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%/()=¿?*+-])(?=(?:([\w\d])\1?(?!\1\1)))(?!(?=.*(palabra1|palabra2|palabraN))).{8,20}$/
   if(x.test(password.value)==true && password.value !='' ){
     document.getElementById("passvlidat").innerHTML=''
     return true;
   }else{
     document.getElementById("passvlidat").innerHTML='must contain a capital letter and symbols '
     return false;
   }
}
function cleardata(){
  user_name.value ='';
  email.value='';
  password.value='';
}
function sign_up() {
  if(uservali()==true&& emailvali()==true && passvali()== true ){
    var fdata= {
      uname:user_name.value,
      umail:email.value,
      upass:password.value, 
    }
    fContainer.push(fdata)
    localStorage.setItem('data',JSON.stringify(fContainer))
    document.getElementById('signvalidat').innerHTML=''
    cleardata()

  }else {
    document.getElementById('signvalidat').innerHTML='There is something wrong with the data '
  }
}