/* 
Cada amigo compra 5 itens
- Exatamente 5, se não, retornar mensagem

Caixa de suprimentos (supplyBox)
- Seções
    - alimentação (food)
    - higiene (hygiene)
    - lazer (leisure)
    - farmácia (pharmacy)

*/


const food = ['Pão', 'Vina', 'Água', 'Café', 'Fruta'];
const hygiene = ['Papel higiênico', 'Sabonete', 'Toalha', 'Escova de dentes', 'Pasta de dentes'];
const leisure = ['Livro', 'Baralho', 'Kindle', 'Bola', 'JBL'];
const pharmacy = ['Repelente', 'Protetor solar', 'Dipirona', 'Bandaid', 'Gaze'];

const supplyBox = [];

supplyBox.push(food);
supplyBox.push(hygiene);
supplyBox.push(leisure);
supplyBox.push(pharmacy);

if (supplyBox.length === 4) {
    let message = '';
  
    // Verificar cada seção na caixaDeSuprimentos
    for (let i = 0; i < supplyBox.length; i++) {
      let section = supplyBox[i];
  
      // Verificar se cada seção possui 5 itens
      if (section.length === 5) {
        message += `A seção ${i + 1} possui os 5 itens.\n`;
      } else if (secao.length > 5) {
        message += `A seção ${i + 1} tem itens demais, não precisamos de tantos.\n`;
      } else {
        message += `A seção ${i + 1} precisa de mais itens.\n`;
      }
    }
  
    console.log(message);
  
    // Verificar o tamanho da caixaDeSuprimentos
    if (supplyBox.length === 4) {
      console.log('Podemos ir acampar.');
    } else if (supplyBox.length < 4) {
      console.log('Algum amigo ainda não retornou com os itens.');
    } else {
      console.log('Acho que temos um intruso.');
    }
  } else {
    console.log('A caixa de suprimentos não possui as 4 seções necessárias.');
  }


