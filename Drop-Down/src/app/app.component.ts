import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title='Drop-Down';
  result!:string;
  add!:string;

  display(val:string)
  {
    if(val=="a")
    {
      this.result="assets/Rose.jpg";
      this.add="Rose";
    }
    if(val=="b")
    {
      this.result="assets/colors.jpg";
      this.add="Colors";


    }
    if(val=="c")
    {
      this.result="assets/december.jpg";
      this.add="December";

    }
    if(val=="d")
    {
      this.result="assets/white.jpg";
      this.add="White Flowers";

    }
  }
}
