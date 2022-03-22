function entrar(){
    let cpf = document.querySelector('#CPF')
    let labelCpf = document.querySelector('#labelCPF')


    let senha = document.querySelector('#Senha')
    let labelSenha = document.querySelector('#labelSenha')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome:'',
        cpf: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(cpf.value == item.cpfCad && senha.value == item.senhaCad){
            userValid={
                nome: item.nomeCad,
                cpf: item.cpfCad,
                senha: item.senhaCad
            }
          
        }
    });

    if(cpf.value == userValid.cpf && senha.value == userValid.senha){
        window.location.href = 'http://127.0.0.1:5500/home.html'

    }else{
        labelCpf.setAttribute('style', 'color: red')
        cpf.setAttribute('style', 'border-color:red')
        labelSenha.setAttribute('style', 'color:red')
        senha.setAttribute('style', 'border-color:red')    
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Usuario ou senha incorretos'    
        cpf.focus()
    }

}
