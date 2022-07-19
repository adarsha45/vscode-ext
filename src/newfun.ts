import { match } from 'assert';
import { type } from 'os';
import { toNamespacedPath } from 'path';
import * as vscode from 'vscode';
import * as jsonss from '../json/ada.json' assert {type:"json"};
import * as credentials from '../json/jwt.json' assert {type:"json"};

let methods = jsonss.athenticatemethod;
let apidatas = credentials.credentials;
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
      let CODE:any;
      if(lmethod.label === 'JWT authenticate'){
        vscode.window.showWarningMessage('JWT Authenticatication Enabled');
        CODE = await vscode.window.showInputBox({
            placeHolder: 'Plese!! Enter Your Email',
                     });
        //   console.log(CODE);
                   
    }
               
 }

 console.log(jsonss.squadName);
