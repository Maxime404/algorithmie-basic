module.exports = function transcription(nucleotides) {
    let nucleotideTranscription = '';
    const nucleotidesConversionReferenceValues = {
        A: 'U',
        C: 'G',
        G: 'C',
        T: 'A'
    }

    for (const nucleotide of nucleotides) {
        if (!(nucleotide in nucleotidesConversionReferenceValues)) {
            throw 'Nucleotide ' + nucleotide + ' does not exist'
        }
        nucleotideTranscription += nucleotidesConversionReferenceValues[nucleotide];
    };

    return nucleotideTranscription;
}