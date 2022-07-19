import { match } from 'assert';
import { toNamespacedPath } from 'path';
import * as vscode from 'vscode';
import * as jsonss from "../json/ada.json";
let methods = jsonss.athenticatemethod;
export async function newfun(){
    // console.log(methods);
    let authenticatemethod = methods.map( json => {
        return {
            label:json.name,
            description:json.label,
        }
    }
        );
        // console.log(authenticatemethod);
    
    
    const lmethod:string | any = await vscode.window.showQuickPick(
        authenticatemethod,{
            matchOnDetail:true
      }
      );

      if(lmethod.label === 'JWT authenticate'){
        vscode.window.showWarningMessage('JWT Authenticatication Enabled');
        const CODE:any = await vscode.window.showInputBox({
            placeHolder: 'Plese!! Enter Your Email',
                     });
        //   console.log(CODE);
                   
    }
               
 }

 console.log(jsonss.squadName);