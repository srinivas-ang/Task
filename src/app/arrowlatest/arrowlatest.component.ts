import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-arrowlatest',
  templateUrl: './arrowlatest.component.html',
  styleUrls: ['./arrowlatest.component.css']
})
export class ArrowlatestComponent implements OnInit {

  data1: any;
  bottomContentLength:number=0;
  topContentLength:number=0;
  isBottomContentOdd:boolean=false;
  myStyles:any;

  constructor(private commonService: CommonService) {}
  ngOnInit() {
    debugger
    this.data1 = this.commonService.getData();
    console.log(this.data1);
  }

  check(){
    console.log('bottom lenngth ' + this.bottomContentLength)
    console.log('top lenngth ' + this.topContentLength)
    if(this.bottomContentLength != this.topContentLength){
      this.isBottomContentOdd=true;
      this.myStyles = {
        'margin-left': '704px !important',
        
        }
      }
      else
      this.isBottomContentOdd=false;
     
  }
  isEven(i,value){
   
  
    if(i==0)
    {
      this.topContentLength+=1;
      this.check();
    return true;
    }
    else if(i==1)
    {
      this.bottomContentLength+=1
      this.check();
    return false;
    }
    else if(i%2 == 0)
    {
debugger
      this.topContentLength+=1;
      this.check();
      return true;
    }
    else{
      this.bottomContentLength+=1;
      this.check();
    return false;
    }
   
  }

}
