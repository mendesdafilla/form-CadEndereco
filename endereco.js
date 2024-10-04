//'use strict'; 
// Ativa o modo restrito
//codigo para cunsumo de API da ViaCEP
//https://viacep.com.br/


// Limpar consulta de form ja realizada 
const LimparFormulario = () =>{
    document.getElementById("logradouro").value = '';
    document.getElementById("bairro").value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
}

//verificar se o Cep e valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);//expresao regular
//verificar o tamanho do cep
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//funcao para preencher campos realacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro; 
    //coloca o valor de logradouro da API dentro do campo logradouro do fomulario
    document.getElementById('bairro').value = endereco.bairro; 
    document.getElementById('localidade').value = endereco.localidade; 
    document.getElementById('uf').value = endereco.uf; 
}

  // função para consumo de API ViaCEP
const pesquisarCEP = async() => {
    LimparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados  = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
             alert('CEP nao encontrado');
   c     }else{
            preencherFormulario(addres);
        }  
    }else{
      alert('CEP Incorreto');
    }
}

//Executa a ação de preenchimento do formulario ao deixar o campo de CEP
 document.getElementById('cep').addEventListener('focusout', pesquisarCEP); 