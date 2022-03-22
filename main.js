let nome = document.querySelector('#Nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false


let cpf = document.querySelector('#CPF')
let labelCpf = document.querySelector('#labelCPF')
let validCpf = false

let senha = document.querySelector('#Senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confSenha = document.querySelector('#confSenha')
let labelconfSenha = document.querySelector('#labelconfSenha')
let validconfSenha = false


let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')



nome.addEventListener('keyup', ()=>{
if(nome.value.length <=2){
    labelNome.setAttribute('style', 'color:red')
    labelNome.innerHTML ='Nome completo'
    nome.setAttribute('style', 'border-color: red')
    validNome = false

}else{
    labelNome.setAttribute('style', 'color:green')
    labelNome.innerHTML ='Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
}
})

cpf.addEventListener('keyup', ()=>{
    if(cpf.value.length <=10){
        labelCpf.setAttribute('style', 'color:red')
        labelCpf.innerHTML ='Cpf completo'
        cpf.setAttribute('style', 'border-color: red')
        validCpf = false
    
    }else{
        labelCpf.setAttribute('style', 'color:green')
        labelCpf.innerHTML ='Cpf'
        cpf.setAttribute('style', 'border-color: green')
        validCpf = true

    }
    })

    senha.addEventListener('keyup', ()=>{
        if(senha.value.length <=4){
            labelSenha.setAttribute('style', 'color:red')
            labelSenha.innerHTML ='5 digitos ou mais'
            senha.setAttribute('style', 'border-color: red')
            validSenha = false
        }else{
            labelSenha.setAttribute('style', 'color:green')
            labelSenha.innerHTML ='Senha'
            senha.setAttribute('style', 'border-color: green')
            validSenha = true
        }
        })

        confSenha.addEventListener('keyup', ()=>{
            if(senha.value != confSenha.value){
                labelconfSenha.setAttribute('style', 'color:red')
                labelconfSenha.innerHTML ='Senhas não conferem'
                confSenha.setAttribute('style', 'border-color: red')
                validconfSenha = false 
            }else{
                labelconfSenha.setAttribute('style', 'color:green')
                labelconfSenha.innerHTML ='Confirme Senha'
                confSenha.setAttribute('style', 'border-color: green')
                validconfSenha = true
            }
            })



function cadastrar(){
    if(validNome && validCpf && validSenha && validconfSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                cpfCad: cpf.value,
                senhaCad: senha.value
            }
        )
            localStorage.setItem('listaUser', JSON.stringify(listaUser))



        msgSuccess.setAttribute('style', "display: block")
        msgSuccess.innerHTML= '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', "display: none")
        msgError.innerHTML= ''

        setTimeout(()=>{
            window.location.href ='http://127.0.0.1:5500/login.html'
        },1500)
        
    } else{
        msgError.setAttribute('style', "display: block")
        msgError.innerHTML= '<strong>Preencha todos os campos</strong>'
        msgSuccess.setAttribute('style', "display: none")
        msgSuccess.innerHTML= ''
    }
}