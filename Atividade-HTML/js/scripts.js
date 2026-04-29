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