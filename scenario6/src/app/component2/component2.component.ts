import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  public name="";
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
public fireEvent()
{
this.childEvent.emit(this.name);
}
}
