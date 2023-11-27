function calcularMediaEStatus(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    const aprovado = media >= 6;
    return {
        media,
        aprovado
    };
}
// Exemplo de uso da função:
const resultado = calcularMediaEStatus(5, 5);
console.log("Média:", resultado.media);
console.log("Aprovado:", resultado.aprovado);
