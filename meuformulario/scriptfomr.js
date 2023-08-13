const user=[
    {
        id:"1",
        email:"Murilo",
        senha:"12Danilo12"
    },
    {
        id:"2",
        email:"danilo",
        senha:"12danilo12"
    }
];

const nomeInput= document.getElementById("name");
const senhaInput= document.getElementById("password");
const loginInput= document.getElementById("login");

// nomeInput.addEventListener("blur",()=>{
//     const enteredName= nomeInput.value;
//     const matchingUser = user.find(user=> user.email === enteredName);

//     if(matchingUser){
//         alert("nome encontrado na lista")
//     } else{
//         alert("Nome nao encontrado por favor fazer login")
//     }
// })

loginInput.addEventListener("click", function(){
    const enteredName = nomeInput.value;   
    const enteredSenha = senhaInput.value;
    
    const matchingUser = user.find(user=>user.email===enteredName && user.senha===enteredSenha);
    if(matchingUser){
        alert("login realizado com sucesso")
    }else{
        alert("faca login")
    }
})