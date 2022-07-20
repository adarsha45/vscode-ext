import * as vscode from 'vscode';
import { newfun } from './newfun';
import { sfdxorgcreator } from './Sfdxorgcreator';
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('cqorg.createorg', () =>{
		const ada = sfdxorgcreator();
	}));
}
export function deactivate() {}
