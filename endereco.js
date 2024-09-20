"user strict"; //ativa o modo restrito
//codigo para cunsumo de API da ViaCEP
//https://viacep.com.br/


// Limpar consulta de form ja realizada 
const LimparFormulario = () =>{
    document.getElementById("Rua").value = "";
    document.getElementById("bairro").value = '';
    document.getElementById('cidade').valeu = '';
    document.getElementById.apply('estado').veleu = '';
}

//verificar se o Cep e valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
//verificar o tamanho do cep
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//funcao para preencher campos realacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco. logradouro; 
    //coloca o valor de logradouro da API dentro do campo logradouro do fomulario
    document.getElementById('Bairro').value = endereco.Bairro; 
    document.getElementById('localidade').value = endereco.localidade; 
    document.getElementById('uf').value = endereco. uf; 
}