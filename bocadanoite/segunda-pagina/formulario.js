// Evento de envio do formulário
var orderForm = document.getElementById("order-form");
orderForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores inseridos nos campos do formulário
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var notes = document.getElementById("notes").value;

  // Cria um objeto com os detalhes do pedido
  var orderDetails = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    notes: notes,
    items: cart.items,
    total: cart.total
  };

  // Envia os detalhes do pedido para o servidor ou a manipulação necessária
  console.log("Detalhes do Pedido:", orderDetails);

  // Limpar o carrinho e atualizar a exibição
  cart.items = [];
  cart.total = 0;
  cart.displayCart();

  // Redireciona para uma página de confirmação ou exiba uma mensagem de sucesso
  // window.location.href = "pagina-de-confirmacao.html";
});
