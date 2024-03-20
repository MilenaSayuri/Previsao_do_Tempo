const fatorial = (n) => {
    if (n < 0) return Promise.reject('Valor nao pode ser negativo')
    let res = 1 //p * 1 = p
    for (let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}
//then/catch
function fatorialComThenCatch() {
    fatorial(5)
        .then(res => console.log(res))
        .catch(erro => console.log(erro))
}
//fatorialComThenCatch()

//async/await
async function fatorialcomAsyncAwait() {
    const res1 = await fatorial(5)
    console.log(res1)
    try {
        const res2 = await fatorial(-1)
        console.log(res2)
    }
    catch (e) {
        console.log(e)
    }
}
fatorialcomAsyncAwait()

// function hello(nome){
//     return Promise.resolve(`Ola, ${nome}`);
// }
// //escrever a funcao hello de modo que ela devolva uma promisse ja resolvida que da um acesso ao texto que a atual produz
// hello('Ana')
// .then(result => {
//     console.log(result);
//     console.log('Terminar...')
// })
// .catch(error => {
//     console.log('Erro:', error);
// });