import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor() {

  }
  
  test() {
      console.log('test button clicked');
      
      throw new Error('oops');
  }
}
