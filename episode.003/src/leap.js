module.exports = function leap(year) {
    return isInt(year / 4) ? isInt(year / 100) && isInt(year / 400) ? true : isInt(year / 100) ? false : true : false;
}

function isInt(number) {
    return Number(number) === number && number % 1 === 0;
}