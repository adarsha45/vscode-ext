import * as vscode from 'vscode';
import * as cp from "child_process";
import { isAnyArrayBuffer } from 'util/types';
const fs = require('fs');
let parsedJsonData;
var jenkins = require('jenkins')({ baseUrl: 'http://admin:115ee90296f171497b5ee55b81db2ad4a6@localhost:8080', crumbIssuer: true });

export async function newfun(){
//     let username:any;
jenkins.info(function(err:any, data:any) {
  if (err) {throw err;}
 
  console.log('info', data);
});

jenkins.job.build({ name: 'antpractice' , token: "xyz123"}, function(err:any) {
  if (err) {
    vscode.window.showErrorMessage("Oh no");
  }
  vscode.window.showInformationMessage("Build triggerd");
});
//     let consumerKey:any;
//     let serverKeyFile:any;
//     let setalias:any;

//     const beforedata = fs.readFileSync('/home/adarsha/Documents/extension/firstextension/first-ext/json/jwt.json', 'utf8');
//     const jsonData = JSON.parse(beforedata);
//     console.log(jsonData);

//     username = await vscode.window.showInputBox({
//         placeHolder: 'Plese!! Enter Your username',
//                  });
//       console.log(username);
//       consumerKey = await vscode.window.showInputBox({
//         placeHolder: 'Plese!! Enter Your consumer key?',
//                  });
//       console.log(consumerKey);
//       serverKeyFile = await vscode.window.showInputBox({
//         placeHolder: 'Plese!! Enter Your serverkey?',
//                  });
//       console.log(serverKeyFile);
//       setalias= await vscode.window.showInputBox({
//         placeHolder: 'Plese!!setalias',
//                  });
//       console.log(setalias);
//       let items:any = [{
//         label:"loin.salesforce.com",
//         description:"https://login.salesforce.com",
//       },
//       {
//         label:"test.salesforce.com",
//         description:"https://test.salesforce.com",
//       }];

//       const instanceurl:string | any = await vscode.window.showQuickPick(
//         items,{
//             matchOnDetail:true,            
//       }
//       );
//       console.log(instanceurl);
//     const newData = {
//         sfUsername: username,
//         sfConsumer:consumerKey,
//         sfServerkey:serverKeyFile,
//         sfInstanceurl:instanceurl,
//         sfsetalias:setalias
//     } ;
//     const stringify = JSON.stringify(newData);
//     await fs.writeFile('/home/adarsha/Documents/extension/firstextension/first-ext/json/jwt.json', stringify, err => {
//         // error checking
//         if(err) {throw err;};
        
//         console.log("New data added");
//     });
   
//     const {exec} = require("child_process");
//     const execShell = function(cmd: string){
//         exec(cmd, (error:any , stdout:any, stderr:any) => {
//             console.log("stdout: " + stdout);

//             console.log("stderr: " + stderr);

//             if (error !== null){

//                 console.log("exec error: " + error);
//             }

    
// }
//     );};
//     let jsonafterData:any;
//     let usernamefromjson:any;
//     let consumerkeyfromjson:any;
//     let skfromjson:any;
//     let aliasfromjson:any;
//     let url:any;
//     let ada:any;
   
//     setTimeout(function(){
//         const afterdata =  fs.readFileSync('/home/adarsha/Documents/extension/firstextension/first-ext/json/jwt.json', 'utf8');
//          jsonafterData = JSON.parse(afterdata);
//           usernamefromjson = jsonafterData.sfUsername;
//           consumerkeyfromjson = jsonafterData.sfConsumer;
//           skfromjson = jsonData.sfServerkey;
//           aliasfromjson = jsonafterData.sfsetalias;
//           url = jsonafterData.sfInstanceurl.description;
//        let b = execShell(`sfdx force:auth:jwt:grant --instanceurl ${url} --clientid ${consumerkeyfromjson} --username ${usernamefromjson} --jwtkeyfile ${skfromjson} --setdefaultdevhubusername --setalias ${aliasfromjson}`);
//     }, 1000);
//      // let a = await execShell('sfdx auth:web:login ');
}
 