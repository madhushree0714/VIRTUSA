import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  from?:string;
  to?:string;
  result?:number;
  con1(val:string)
  {
    this.from = val;
  }
  con2(val:string){
    this.to=val;
  }
  convert(val:number)
  {
    if(this.from=="US" && this.to=="IN")
    {
      this.result=val*82 ;
    }
    if(this.from=="US" && this.to=="AUS")
    {
      this.result=val*1.6;
    }
    if(this.from=="IN" && this.to=="US")
    {
      this.result=val/82;
    }
    if(this.from=="IN" && this.to=="AUS")
    {
      this.result=val/51.6;
    }
    if(this.from=="AUS" && this.to=="IN")
    {
      this.result=val*51.6;
    }
    if(this.from=="AUS" && this.to=="US")
    {
      this.result=val/1.6;
    }
  }
}   

