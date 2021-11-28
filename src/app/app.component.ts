 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  width :String = '0px';
  height:String = '0px';
  backgroundcolor:String = 'red';



  setStyle():Object{
    return {
      'width':this.width,
      'height':this.height,
      'backgroundColor': this.backgroundcolor
    }
  }


  setWidth(value:String) {
    this.width = value+'px';
  }

  setHeight(value: string) {
    this.height = value+'px'
  }

  setColor(value: string) {
    this.backgroundcolor = value;
  }
log():void{
    this.width = '0px';
    this.height = '0px';
    this.backgroundcolor = 'white';

    alert("cleard");
}
name:String = '';

}
