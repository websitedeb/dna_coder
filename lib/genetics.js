const trna = require("ts-dna");
const { codonize } = require("./parser");
const fs = require("fs");

const parse = async (file) => {
    
    const data = await codonize(file);

    const codonsArray = data
        .split('\n')  
        .map(line => line.trim())  
        .filter(line => line.length > 0);
    return codonsArray;
};

const compile = async (file, file2, res) => {
    try {
        
        const arr = await parse(file);        
        const outputStream = fs.createWriteStream(file2, { flags: 'a' });

        arr.forEach(codon => {
            const acid = trna.getAminoAcidByCodon(new trna.RNA(codon));
            if (acid) {
                let abbr = acid.name
                outputStream.write(`${abbr.substring(0, 3)}\n`);
            } else {
                console.log("No acid found for codon:", codon);
            }
        });        
        
        outputStream.end();

        
        outputStream.on('finish', () => {
            res();  
        });

        outputStream.on('error', (err) => {
            res(err);  
        });

    } catch (err) {
        res(err);  
    }
};

module.exports = {
    compile
};
