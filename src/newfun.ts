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
<<<<<<< Updated upstream
        // console.log(authenticatemethod);
    
    
=======
        console.log(authenticatemethod);

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        //   console.log(CODE);
                   
    }
               
 }

 console.log(jsonss.squadName);
=======
                    }

                    apidatas.forEach(apid => {apid.SF_CONSUMER_KEY = CODE;console.log(apid.SF_CONSUMER_KEY);});


                  

                }
>>>>>>> Stashed changes
