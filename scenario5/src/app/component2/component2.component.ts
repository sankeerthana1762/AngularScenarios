import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  public message="";

 @Output() public Event = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
public fireEvent($event:string)
{
this.message=$event;
console.log(this.message);
this.Event.emit(this.message);

}
}
