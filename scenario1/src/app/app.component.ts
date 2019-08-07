import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scenario1';
  public myid='userid';
  public name ="";
  public onClick(){
    console.log(this.name);
    
  }
  
}
