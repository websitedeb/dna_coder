const fs = require("fs");

function read(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) {
                reject(err);  
            } else {
                resolve(data);  
            }
        });
    });
}

function codonize(file) {
    return read(file)
        .then(txt => {
            let result = "";
            
            for (let i = 0; i < txt.length; i += 3) {
                result += txt.slice(i, i + 3) + "\n";  
            }
            return result.trim();  
        })
        .catch(err => {
            console.error("Error reading file:", err);
            return "";  
        });
}

module.exports = {
    codonize
};
