const saveForm = () =>{

let name = document.getElementById('nameUser').value;
let email=document.getElementById('emailUser').value;

const userData = {userName:name, userEmail:email};

localStorage.setItem('userData', JSON.stringify(userData));

}

document.getElementById('enviar').addEventListener('click',saveForm); 