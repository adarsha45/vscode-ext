import * as vscode from { vscode };


const fs = require('fs')

let parsedJsonData

export async function jwtauth() {


	try {
        const data = fs.readFileSync('d:/vscode-ext/json/ada.json', 'utf8')
        const jsonData = JSON.parse(data)
        parsedJsonData = jsonData
    
        // Check the keys that jsonData has
        console.log(Object.keys(jsonData))
        
        jsonData.members.forEach(member => {
            console.log(`Framework: ${member}`)
        })
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }

parsedJsonData.members.forEach( member => {
    parsedJsonData.members.push(member)
})




try {
	const frameworksData = JSON.stringify(parsedJsonData)
	fs.writeFileSync('d:/vscode-ext/json/ada.json', frameworksData, 'utf-8')
} catch (error) {
	console.log(`WRITE ERROR: ${error}`)
}
 
}