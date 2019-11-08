// CREDIT: Josias ASSAMOI 

module.exports = function matrix(numbers) {
    const numbersObj = {};
    let numbersSplited = numbers.split('\n');
    let rowsOfNumbers = [];
    let columnsOfNumers = [];

    for (let i in numbersSplited) {
        columnsOfNumers[i] = new Array(numbersSplited.length);
    }
    for (let i in columnsOfNumers) {
        const rows = numbersSplited[i].split(' ').map(function (number) {
            return parseInt(number);
        })
        for (let j in rows) {
            columnsOfNumers[j][i] = rows[j];
        }
        rowsOfNumbers.push(rows);
    }

    numbersObj.rows = rowsOfNumbers;
    numbersObj.columns = columnsOfNumers;

    return numbersObj;
}