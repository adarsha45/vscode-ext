import * as vscode from { vscode };


const fs = require('fs')

let parsedJsonData

export async function jwtauth() {


	try {
        const data = fs.readFileSync('d:/vscode-ext/json/ada.json', 'utf8')
        const jsonData = JSON.parse(data)
        parsedJsonData = jsonData
        if (JSON.stringify(parsedJsonData) === '{}'){
            console.log("Empty json");
        }
    
        // Check the keys that jsonData has
        console.log(Object.keys(jsonData))
        console.log(parsedJsonData.squadName);
        
        jsonData.members.forEach(member => {
            console.log(`Framework: ${member}`)
        })
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }

}