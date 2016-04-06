import {Injectable} from 'angular2/core';
import * as TraceKit from 'tracekit'

@Injectable()
export class ErrorReporter {
    init() {
        TraceKit.report.subscribe(this.reportError);
        console.log("ErrorReporter is initialized");
    }

    reportError(error) {
        // do something with the error
        console.log("error subscription fired");
        console.log(error);
    }
}