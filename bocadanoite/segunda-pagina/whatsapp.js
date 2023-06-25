let carrinho = [];
let total = 0;

function adicionarPizza(sabor, valor) {
  carrinho.push({ sabor, valor });
  total += valor;

  const carrinhoElement = document.getElementById('itens-carrinho');
  carrinhoElement.innerHTML = '';
  
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.sabor} - R$ ${item.valor.toFixed(2)}`;
    carrinhoElement.appendChild(li);
  });

  const totalElement = document.getElementById('total');
  totalElement.innerText = total.toFixed(2);
}

function redirecionarWhatsApp() {
  const pedidos = carrinho.map(item => `${item.sabor} - R$ ${item.valor.toFixed(2)}`).join('\n');
  const valorTotal = total.toFixed(2);
  const endereco = prompt('Digite o endereço de entrega:');
  const numero = prompt('Digite o número da casa:');
  
  const mensagem = `Pedido:\n${pedidos}\n\nValor total: R$ ${valorTotal}\n\nEndereço: ${endereco}, ${numero}`;

  const whatsappLink = `https://wa.me/+5584981655471?text=${encodeURIComponent(mensagem)}`;
  window.location.href = whatsappLink;
}


