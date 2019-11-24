import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ArrowComponent } from './arrow/arrow.component';
import {AppRoutingModule} from './app-routing.module';
import { ArrowlatestComponent } from './arrowlatest/arrowlatest.component';

@NgModule({
  declarations: [AppComponent, ArrowComponent, ArrowlatestComponent],
  imports: [BrowserModule, HttpClientModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
