# CADASTRO DE ENDEREÇO
O objetivo deste trabalho é desenvolver um projeto funcional de Cadastro de Endereço, aplicando os conhecimentos adquiridos nas aulas. O projeto consistirá em um formulário que permite a coleta de dados de endereço, com a implementação de uma consulta à API dos Correios para validação do CEP. O trabalho será realizado em conjunto entre alunos e professor, e servirá como base para um projeto futuro mais complexo.

![gif](cep.gif)
# O QUE FAZ ESSE CÓDIGO?
Este código JavaScript interage com a API do ViaCEP para buscar informações sobre um endereço a partir de um CEP (Código de Endereçamento Postal) digitado pelo usuário. Quando você digita um CEP válido e sai do campo, o código automaticamente busca as informações correspondentes (logradouro, bairro, cidade, estado) e preenche os campos de um formulário.

# COMO FUNCIONA?
* Validação do CEP: Verifica se o CEP digitado possui 8 dígitos numéricos.
* Consulta à API: Faz uma requisição à API do ViaCEP para obter os dados do endereço.

# PREENCHIMENTO DO FORMULARIO
Se os dados forem encontrados, preenche automaticamente os campos do formulário com as informações do endereço.

# TRATAMENTO DE ERROS
Exibe uma mensagem de alerta caso o CEP seja inválido ou não seja encontrado.

# COMO USAR O CÓDIGO:
* Incluir o código: Copie e cole este código JavaScript em um arquivo `.js` (por exemplo, `script.js`).
* Criar um formulário: Crie um formulário HTML com campos para o CEP, logradouro, bairro, cidade e estado.
* Vincular o script: Inclua o arquivo JavaScript no seu HTML usando a tag `<script>`:
   ```html
   <script src="script.js"></script>
   ```
* Associar o evento:
Associe o evento `focusout` ao campo do CEP para que a função de pesquisa seja chamada quando o usuário sair do campo.


const pesquisarCEP = async() => {:

const pesquisarCEP: Declara uma constante chamada pesquisarCEP para armazenar uma função assíncrona.

async: Indica que a função irá realizar operações assíncronas, como a requisição à API. Isso permite que outras partes do código continuem a execução enquanto a requisição é feita.
() => {...}: Define a função de forma concisa, utilizando uma arrow function.
LimparFormulario();:

Chama uma função (não mostrada no código) chamada LimparFormulario(). Essa função provavelmente limpa todos os campos de um formulário HTML antes de preencher com os novos dados, garantindo que não haja informações antigas.
const url =https://viacep.com.br/ws/${cep.value}/json/;:

Cria uma constante url para armazenar a URL completa da requisição à API do ViaCEP.
cep.value: Supõe que cep seja um elemento HTML (provavelmente um input) que contém o CEP digitado pelo usuário. cep.value acessa o valor desse elemento.
A URL é construída dinamicamente, inserindo o CEP informado pelo usuário na parte variável da URL.
if(cepValido(cep.value)){:

Verifica se o CEP informado é válido.
cepValido(cep.value): Chama uma função (não mostrada no código) chamada cepValido() para validar o formato do CEP. Essa função provavelmente verifica se o CEP possui o número correto de dígitos e se contém apenas números.
const dados  = await fetch(url);:

Se o CEP for válido, realiza uma requisição à API do ViaCEP utilizando a função fetch.
await: Pausa a execução da função até que a promessa retornada por fetch seja resolvida, ou seja, até que os dados sejam recebidos da API.
dados: Armazena a resposta da API em uma constante.
const addres = await dados.json();:

Converte a resposta da API (que está em formato JSON) para um objeto JavaScript e armazena em addres.
dados.json(): É um método do objeto Response que retorna uma promessa que será resolvida com o objeto JavaScript correspondente ao JSON.
if(addres.hasOwnProperty('erro')){:

Verifica se a resposta da API contém uma propriedade erro. Se sim, significa que o CEP não foi encontrado.
hasOwnProperty(): É um método de objetos JavaScript que verifica se um objeto possui uma determinada propriedade.
alert('CEP nao encontrado');:

Se o CEP não foi encontrado, exibe uma mensagem de alerta para o usuário.
else{ preencherFormulario(addres); }:

Se o CEP foi encontrado, chama a função preencherFormulario() para preencher os campos do formulário com as informações do endereço contidas em addres.
}else{ alert('CEP Incorreto'); }:

Se o CEP não for válido, exibe uma mensagem de alerta informando que o CEP está incorreto.

# EXEMPLO DE HTML:
```html
<input type="text" id="cep" placeholder="Digite o CEP">
<input type="text" id="logradouro" disabled>
<input type="text" id="bairro" disabled>
<input type="text" id="localidade" disabled>
<input type="text" id="uf" disabled>
```
# OBSERVAÇÕES 
* API ViaCEP:
 Este código utiliza a API gratuita do ViaCEP ([https://viacep.com.br/](https://viacep.com.br/)).
* Personalização:
 Você pode personalizar o código para se adaptar às suas necessidades, como alterar os nomes dos elementos HTML ou adicionar mais funcionalidades.

