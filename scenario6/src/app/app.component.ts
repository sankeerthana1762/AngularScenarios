import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scenario6';
  public name="";
  public sendData($event:string){
    this.name=$event;
  }
}
