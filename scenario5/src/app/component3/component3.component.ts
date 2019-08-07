import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  @Output() public childEvent= new EventEmitter;
  public name ="";
  constructor() { }

  ngOnInit() {
  }
  public fireEvent(){
    this.childEvent.emit(this.name);
  }


}
