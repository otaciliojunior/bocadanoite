// Variáveis globais
var pedidos = [];
var valorTotal = 0;

function adicionarProduto(produto, valor) {
  pedidos.push(produto);
  valorTotal += valor;
  document.getElementById('valorTotal').textContent = 'Valor total: R$ ' + valorTotal;
}

function mostrarOpcoesPagamento() {
  var formaPagamento = document.getElementById('formaPagamento').value;
  var pixContainer = document.getElementById('pixContainer');
  var trocoContainer = document.getElementById('trocoContainer');

  if (formaPagamento === 'pix') {
    pixContainer.style.display = 'block';
    trocoContainer.style.display = 'none';
  } else {
    pixContainer.style.display = 'none';
    trocoContainer.style.display = 'block';
  }
}

function enviarPedido() {
  var endereco = prompt('Digite o endereço:');
  var numero = prompt('Digite o número da casa:');
  var formaPagamento = document.getElementById('formaPagamento').value;
  var mensagem = 'Pedido: ' + pedidos.join(', ') + '\n';
  mensagem += 'Valor total: R$ ' + valorTotal + '\n';
  mensagem += 'Endereço: ' + endereco + ', ' + numero + '\n';

  if (formaPagamento === 'pix') {
    var qrcode = document.getElementById('qrcode');
    qrcode.src = 'caminho-para-o-qrcode';

    var linkPix = document.getElementById('linkPix');
    linkPix.href = 'link-para-chave-pix';

    mensagem += 'Forma de pagamento: PIX\n';
    mensagem += 'QR Code para PIX: caminho-para-o-qrcode\n';
    mensagem += 'Chave PIX: link-para-chave-pix\n';
  } else {
    var troco = document.getElementById('troco').value;
    mensagem += 'Forma de pagamento: Espécie\n';
    mensagem += 'Troco necessário: R$ ' + troco + '\n';
  }

  var url = 'https://wa.me/+5584981655471?text=' + encodeURIComponent(mensagem);

  window.location.href = url;
}
