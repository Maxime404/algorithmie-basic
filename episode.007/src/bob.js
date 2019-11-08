module.exports = function bob(sentence = '') {
    console.log(sentence)
    switch (true) {
        case (!!sentence.match(/\?/g)):
            return 'Sure';
            break;
        case (!!sentence.match(/\!/g)):
            return 'Whoa, chill out!';
            break;
        case (sentence.toLowerCase() === 'bob'):
            return 'Fine. Be that way!';
            break;
        default:
            return 'Whatever';
    }
}