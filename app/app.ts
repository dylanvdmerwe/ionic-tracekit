import {ExceptionHandler, provide} from 'angular2/core';
import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {CustomExceptionHandler} from './util/customExceptionHandler';
import {ErrorReporter} from './util/errorReporter';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [ErrorReporter, [provide(ExceptionHandler, {useClass:CustomExceptionHandler})]],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, private er : ErrorReporter) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      
      er.init();
    });
  }
}
