require("dotenv").config()
const axios = require("axios")

const {
    APPID,
    Q,
    UNITS,
    IDIOM,
    CNT,
    URL_BASE
} = process.env

const url = `${URL_BASE}?appid=${APPID}&q=${Q}&units=${UNITS}&lang=${IDIOM}&cnt=${CNT}`

//usando async/await, exibir as descricoes de todas as previsoes que tenham temperatura minima no maximo 25
// const exercicioAsyncAwait = async () => {
//     try{
//         const res = await axios.get(url)
//         const res2 = res.data.list
        
//         console.log('Previsoes com temperatura minima maxima de 25°C: ')
//         for(const i of res2){
//             if(i.main.temp_min <= 25)
//                 console.log(i.weather[0].description);
//         }
//     }catch (error){
//         console.error('Erro: ', error);
//     }
// }
// exercicioAsyncAwait();

const exercicioAsyncAwait = async () => {
    const resultado = await axios.get(url)
    const data = resultado.data
    const list = data.list
    // list.forEach(e=> {
    //     console.log(e)
    //     console.log('*************************')
    // })
    list.forEach((e) => {
        console.log(e['main']['temp_min'] <= 27? e['weather'][0]['description'] : '')
    })
}
exercicioAsyncAwait()

// axios.get(url)
//     .then(res => {
//         console.log('data')
//         console.log(res.data)
//         console.log('**************************')
//         return res.data
//     })
//     .then(data => {
//         console.log('list')
//         console.log(data.list)
//         console.log('**************************')
//         return data.list
//     })
//     .then(list => {
//         console.log('temp min do primeiro')
//         console.log(list[0].main['temp_min'])
//         console.log('**************************')
//         return list
//     })
//     .then(list => {
//         console.log('temp max do primeiro')
//         console.log(list[0].main['temp_max'])
//         console.log('**************************')
//         return list
//     })
//     .then(list => {
//         // Iterar sobre a lista, mostrando temperatura máxima, mínima e umidade de cada previsão
//         console.log('maxima, minima e umidade de cada previsao')
//         for (let i of list) {
//             console.log(`${new Date(+i.dt * 1000).toLocaleString()},
//             ${'Min: ' + i.main.temp_min}\u00B0C,
//             ${'Max: ' + i.main.temp_max}\u00B0C,
//             ${'Hum: ' + i.main.humidity}%,
//             ${i.weather[0].description}`);
//         }
//         console.log('**************************')
//         return list
//     })
//     .then(list => {
//         // Iterar sobre a lista, mostrando a descrição de cada previsão
//         console.log('descricao')
//         list.forEach(item => {
//             console.log(item.weather[0].description);
//         });
//         console.log('**************************')
//         return list;
//     })
//     .then(list => {
//         // Responder se tem pelo menos uma previsão cuja sensação térmica seja menor do que 30
//         const filteredList = list.filter(item => item.main.feels_like < 30);
//         console.log(`${filteredList.length} previsões têm percepção humana de temperatura abaixo de 30 graus`);
//         console.log('**************************')
//     })
//     .catch(error => {
//         console.error('Erro:', error);
//     });
