const fs = require("fs");
const path = require("path");

const return_acids = () => {
    const filePath = path.join(process.cwd(), "./consts.json");
    const data = fs.readFileSync(filePath, "utf-8"); 
    return JSON.parse(data).amino_acids; 
};

const return_bonds = () => {
    const filePath = path.join(process.cwd(), "./consts.json");
    const data = fs.readFileSync(filePath, "utf-8"); 
    return JSON.parse(data).bonds; 
};

const return_backbone = () => {
    const filePath = path.join(process.cwd(), "./consts.json");
    const data = fs.readFileSync(filePath, "utf-8"); 
    return JSON.parse(data).backbone; 
};

module.exports = {
    return_acids,
    return_bonds,
    return_backbone
}