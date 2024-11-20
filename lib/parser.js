const fs = require("fs");

function read(file){
    return fs.readFile(file, "utf-8");
}

function write(file, txt){
    fs.writeFile(file, txt);
}

function codonize(file) {
    const txt = read(file);

    let result = "";
    for (let i = 0; i < txt.length; i += 3) {
        result += txt.slice(i, i + 3) + "\n";
    }
    return result.trim();
}

module.exports = {
    codonize,
    write
}