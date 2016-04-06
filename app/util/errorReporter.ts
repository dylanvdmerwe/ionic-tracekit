import {Injectable} from 'angular2/core';

@Injectable()
export class ErrorReporter {
    init(){
       // TraceKit.report.subscribe(this.reportError);
       console.log("ErrorReporter is initialized");
    }
    
    reportError(error){
        // do something with the error
    }
}