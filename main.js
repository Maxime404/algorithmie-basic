const leap = require('./episode.003/src/leap');
const transcription = require('./episode.004/src/transcription');
const matrix = require('./episode.008/src/matrix');

function indexedLog(index, func) {
    console.log(index + ' => ' + func);
}

indexedLog(3, leap(1996));
// => true
indexedLog(3, leap(1900));
// => false
indexedLog(3, leap(2000));
// => true

indexedLog(4, transcription('AAGGCCTT'));
// => UUCCGGAA
//indexedLog(4, transcription('AAGGZCTT'));
// => Nucleotide Z does not exist
indexedLog(4, transcription('ACTCGTACGTA'));
// => UGAGCAUGCAU

indexedLog(8, matrix('1 2 6\n3 4 8\n5 6 0').rows[2][1]);
// => ??


