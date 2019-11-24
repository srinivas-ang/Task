import { Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data1: any;
  data: any;

  constructor(private commonService: CommonService) {}
  ngOnInit() {
    this.data = this.commonService.getData();
    console.log(this.data);
  }
}
