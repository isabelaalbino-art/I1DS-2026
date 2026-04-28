
const cadastrar = (event) => {
  // Parar a propagação padrão do evento
  event.preventDefault();

  // Capturar os valores do elementos por Id
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let = userCount 

  // Capturando o elemento de lista por Id
  let lista = document.getElementById("lista");

userCount++

  // Criar um novo elemento <li>Nome - Email</li>
  let novoItem = document.createElement("li");
  novoItem.innerText = `${id} - ${nome} - ${email} <p onclick=editar(${id})class='bnt' >Editar</p> <p on Click (${id}) class='bnt'>Excluir<p/>`


  // Adicionar o novo item na lista ja existente
  lista.appendChild(novoItem);

  // Limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";

} 
const excluir = (id) => {

  // buscar conteudo do id na lista
  //remover o item

  const lista = document.getElementById("lista")
  const itens = document.querySelectorAll("li")

  itens.forEach((item) => {
    if(item.innerHTML.includes(id)){
      item.remove();
    }
    
  });
}


