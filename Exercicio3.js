let produtos = [
    {item: " caderno ", preco: 25.00},
    {item: " lapis ", preco: 1.30},
    {item: " caneta ", preco: 3.10},
    {item: " borracha ", preco: 2.25}
]

let mais_caro = produtos[0]

for(i=0; i < produtos.length; i++) {
    if (produtos[i].preco > mais_caro.preco) {
    mais_caro = produtos[i]
    }
}
console.log("O produto de maior preco é o" + mais_caro.item +", no valor de R$" + mais_caro.preco.toFixed(2))
