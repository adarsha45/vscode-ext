import { match } from 'assert';
import { type } from 'os';
import { toNamespacedPath } from 'path';
import * as vscode from 'vscode';
import * as jsonss from "../json/ada.json";
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
    const mode = require('../json/ada.json');
    const datas = mode.members;
    datas.foreach(data=>
        {
        data.email = CODE;
        console.log(data.email);
    });
    
  

    
 }

 console.log(jsonss.squadName);
