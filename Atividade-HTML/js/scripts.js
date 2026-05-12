let userCount = 0; // Contador

const cadastrar = (event) => {
  // Parar a propagação padrão do evento
  event.preventDefault();
  // Capturar os valores do elementos por Id
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  // Capturando o elemento de lista por Id
  let lista = document.getElementById("lista");

  userCount++; // Acrescer o contador em
  let id = userCount; // Criar um novo elemento <li>Nome - Email</li>
  let novoItem = document.createElement("li");
   novoItem.innerHTML = `${id} - ${nome} - ${email} - <p onClick=editar(${id}) class='btn'>Editar</p> - <p onClick=excluir(${id}) class='btn'>Excluir</p>`;

  // Adicionar o novo item na lista ja existente
  lista.appendChild(novoItem);

  // Limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
};

const editar = (id) => {
  const lista = document.getElementById("lista");
  const itens = document.querySelectorAll("li");
  itens.forEach((item) => {
    if (item.innerHTML.includes(id)) {
      // recuperar o texto do item
      // cortar a string e variaveis nome e email
      let nome = item.innerHTML.split(" - ")[3];
      let email = item.innerHTML.split(" - ")[2];

      document.getElementById("nome").value = nome;
      document.getElementById("email").value = email;
    }
  });
};

// Função Escluir
const excluir = (id) => {
  const lista = document.getElementById("lista");
  const itens = document.querySelectorAll("li");

  itens.forEach((item) => {
    if (item.innerHTML.includes(id)) {
      item.remove();
    }
  });
};


//  O QUE EU FIZ 👇🏻

/*
let acumuladorTotal = 0 

const adicionarProduto = () =>{
  let nome = document.getElementById('produto').value;
  let qtd = parseInt(document.getElementById('quantidade').value);
  let preco = parseFloat(document.getElementById('valor').value);

let totalItem = qtd * preco;     

  let tabela = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];
  let novaLinha = tabela.insertRow();
 
  novaLinha.insertCell(0).innerText = nome;
  novaLinha.insertCell(1).innerText = qtd;
  novaLinha.insertCell(2).innerText = preco.toFixed(2); 
  novaLinha.insertCell(3).innerText = totalItem.toFixed(2);

  document.getElementById('produto').value = "";
  document.getElementById('quantidade').value = "";
  document.getElementById('valor').value = "";

  acumuladorTotal = acumuladorTotal + totalItem;

 
    document.getElementById('total').innerText = acumuladorTotal.toFixed(2);
    document.getElementById('valorLiquido').innerText = acumuladorTotal.toFixed(2);


}

const finalizarCompra = () => {

  let tabela = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];
  let linhaResultado = tabela.insertRow();

  let celulaRotulo = linhaResultado.insertCell(0);
  celulaRotulo.innerText = "TOTAL DA COMPRA:";
  

  celulaRotulo.colSpan = "3";

  let celulaValor = linhaResultado.insertCell(1);
  celulaValor.innerText = "R$ " + document.getElementById('valorLiquido').innerText;
};
*/

let produtos = [];
let totalGeral = 0;

const adicionarProduto = () => {
  let nome = document.getElementById("produto").value;
  let qtd = parseInt(document.getElementById("quantidade").value);
  let valor = parseFloat(document.getElementById("valor").value);

  if (!nome || !qtd || !valor) {
    alert("Preencha todos os campos");
    return;
  }
  let total = qtd * valor;
  produtos.push({
    nome,
    qtd,
    valor,
    total,
  });
  atualizarTabela();
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";
};

const atualizarTabela = () => {
  let tbody = document.querySelector("#tabelaProdutos tbody");
  tbody.innerHTML = "";
  produtos.forEach((item) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.qtd}</td>
        <td>${item.valor.toFixed(2)}</td>
        <td>${item.total.toFixed(2)}</td>
      </tr>
    `;
  });
};



const finalizarCompra = () => {
  totalGeral = 0;
  produtos.forEach((item) => {
    totalGeral += item.total;
  });
  document.getElementById("total").innerText = totalGeral.toFixed(2);
  document.getElementById("valorLiquido").innerText = totalGeral.toFixed(2);
};


const aplicarDesconto = () => {
  let descontoValor =
    parseFloat(document.getElementById("descontoValor").value) || 0;

    let descontoPercentual =
    parseFloat(document.getElementById("descontoPercentual").value) || 0;
  let valorFinal = totalGeral;
  if (descontoValor > 0) {
    valorFinal -= descontoValor;
  }
  if (descontoPercentual > 0) {
    valorFinal -= totalGeral * (descontoPercentual / 100);
  }
  document.getElementById("valorLiquido").innerText = valorFinal.toFixed(2);
};

