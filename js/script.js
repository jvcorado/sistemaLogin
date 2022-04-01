let emailC = document.querySelector('input#emailCadastro');
let senhaC = document.querySelector('input#senhaCadastro');
let emailLg = document.querySelector('input#emailLogin');
let senhaLg = document.querySelector('input#senhaLogin');
let banco = [];


function dados(n,x){
    if(n == n && x ==x){
        return true
    }
    else{
        return false
    }
}

function inLista(n,x,lista){
    if(lista.indeOf(n) != -1 && lista.indeOf(x) != -1){
        return true
    }
    else{
        return false
    }
}

function cadastro(){

    banco.push(emailC.value);
    banco.push(senhaC.value);
    window.alert('Cadastro efetuado');
    emailC.value = '';
    senhaC.value = '';
    
    

    /*
    if(dados(emailC.value, senhaC.value) && !inLista(emailC.value, senhaC.value,banco)){
        window.alert('Cadastro efetuado');
        banco.push(emailC.value);
        banco.push(senhaC.value);
    }
    else{
        window.alert('Email e senha já cadastrado')
    }
    emailC.value = '';
    senhaC.value = '';
    banco.push(emailC.value);
    banco.push(senhaC.value);
    window.alert('Cadastro efetuado');
    emailC.value = '';
    senhaC.value = '';
    emailC.focus();
    senhaC.focus();
    */
}

function acesso(){

    if(emailLg.value == 'admin' && senhaLg.value == 'admin' ||
    emailLg.value == 'jvc' && senhaLg.value == 'jvc' || emailLg.value == 'erika' && senhaLg.value == 'erika' || 
    emailLg.value == 'laura' && senhaLg.value == 'laura'){
        return window.location.href='https://analisadornumber.netlify.app'
   
    }
    else{
       
        window.alert('Acesso negado')
    }
    emaiLg.value = ''
    senhaLg.value = ''
}