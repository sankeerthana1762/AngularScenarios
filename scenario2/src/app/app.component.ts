import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scenario2';
  public name ="";
  public onClick(){
    console.log(this.name);
 
}
}
