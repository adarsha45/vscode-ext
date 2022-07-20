import { match } from 'assert';
import { type } from 'os';
import * as vscode from 'vscode';
import { toNamespacedPath } from 'path';
// import * as credentials from '../json/jwt.json' assert {type:"json"};
const fs = require('fs');
var axios = require('axios');


let parsedJsonData;
// http://localhost:8080/job/fff/buildWithParameters?token=bwp123
export async function sfdxorgcreator() {
  
    const jenkinsurl = `http://localhost:8080/job/fff/buildWithParameters?token=bwp123&IMAGE_NAME=pyapp&IMAGE_TAG=2.22&ENVIRONMENT=uat&isWorking=true`;
    const username = "niteshrijal";
    const password = "11f7e7700f495fc5066d6b0c1f28f150c0";
    
    var config = {
        method: 'POST',
        url: jenkinsurl,
        headers: {
            Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
    
        },
        data: {
            "IMAGE_NAME": "python-app-build",
            "IMAGE_TAG": "6.66",
            "ENVIROMENT": "prod",
            "isWorking": false
        }
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        vscode.window.showInformationMessage("Building jenkins");
    })
    .catch(function (error)
    {
        console.log(error);
    });
         
}