import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  contentHighlighted: boolean = false;

   @Input() menuItemschild: Array<string> =[];//["Login","Registration","list page","gallery"];
   @Output() menuItemsName = new EventEmitter<string>();
  
  constructor() { }
  
 menuclicked(menuname: string){
   console.log("menu clicked is", menuname);
   this.menuItemsName.emit(menuname);
 }
  ngOnChanges(){
    console.log("change have occured", this.menuItemschild);
  }
  ngOnInit(): void {
  }

}

