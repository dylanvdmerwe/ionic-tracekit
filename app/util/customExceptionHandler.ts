import {Injectable} from 'angular2/core';

@Injectable()
export class CustomExceptionHandler {
  call(error, stackTrace = null, reason = null) {
      console.log('custom exception handler...');
    console.error(error, [stackTrace, reason]);
    
   // TraceKit.report(e); //error with stack trace gets normalized and sent to subscriber
  }
}