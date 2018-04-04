
import {Response}   from '@angular/http'
import {Observable} from 'rxjs/Observable';

export class ErrorHandler{
    static handleError(error:Response | any){
        let erroMessage:string;
        if(error instanceof Response){
            erroMessage =  `
            \n**********************************************************************
            \n**********************************************************************
            \n**********************************************************************
            \n**********************************************************************
            Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}
            \n**********************************************************************
            \n**********************************************************************
            \n**********************************************************************
            \n**********************************************************************
            \n**********************************************************************`
        }else{
            erroMessage = error.toString()
        }
        console.log(erroMessage);
        return Observable.throw (erroMessage);
        
    }
}