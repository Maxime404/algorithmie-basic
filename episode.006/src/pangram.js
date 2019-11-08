module.exports = function pangram(sentence) {
    let isPangram = true;
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (const letter of alphabet) {
        if (!sentence.includes(letter))
        isPangram = false;
    }

    return isPangram;
}