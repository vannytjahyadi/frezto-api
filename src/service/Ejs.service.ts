import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

export class EjsService {
    constructor () {
    }

    static renderHtml (userType:string, file:string, params:Object){
        let html = '';
        let fileLocation = '../view/email/' + userType +  '/' + file + '.html';
        let filePath = path.join(__dirname, fileLocation);

        let content = fs.readFileSync(filePath, 'utf8');
        console.log(params);
        html = ejs.render(content, params);

        return html;
    }
}