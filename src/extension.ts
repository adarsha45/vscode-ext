// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { stderr, stdout } from 'process';
import * as vscode from 'vscode';
// import { newfun } from './newfun';
import { jwtauth } from './jwtauth';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	
	
		
		
       

	context.subscriptions.push(vscode.commands.registerCommand('first-ext.helloWorld', ()=>{
		const jw = jwtauth();
		setTimeout( () => {
			vscode.commands.executeCommand("tree");
		}, 50);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('first-ext.cmdtest', () =>{
		let frc = "force";
		const {exec} = require("child_process");
		exec(`sfdx auth:web:login -a testorg`, (error, stdout, stderr) => {
			console.log("stdout: " + stdout);
			if(stdout !== null ){
                   vscode.window.showInformationMessage(stdout);
			}
			console.log("stderr: " + stderr);
			if (error !== null){
				console.log("exec error: " + error);
			}
		});
	}));
 //first-ext.helloWorld
}
// this method is called when your extension is deactivated
export function deactivate() {}
