import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
@Output()  public childevent= new EventEmitter;
public name ="";
  constructor() { }

  ngOnInit() {
  }
  public fireEvent(){
    this.childevent.emit(this.name);
  }
 
 
}
