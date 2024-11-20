const dna = require("dna");
const ribosome = require("dna-to-rna");
const rRNA = require("ts-dna");
const {codonize} = require("./parser");

const parse = (file) => {
    const data = codonize(file);
    const codonsArray = data
        .split('\n')      
        .map(line => line.trim())  
        .filter(line => line.length > 0);  
    return codonsArray;
}

const compile = (file) => {
    const arr = parse(file);

    //... compiles to amino acids, then puts it into a new file by the name of [NAME].acid
}