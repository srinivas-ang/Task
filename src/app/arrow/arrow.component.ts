import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  data1: any;

  constructor(private commonService: CommonService) {}
  ngOnInit() {
    debugger
    this.data1 = this.commonService.getData();
    console.log(this.data1);
  }

  isEven(i){
    debugger
    if(i==0)
    return true;
    else if(i==1)
    return false;
    else if(i/2 == 0)
    {
      return true;
    }
    else
    return false;
  }

}
