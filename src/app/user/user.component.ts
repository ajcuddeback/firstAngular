import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// This is creating an interface for what the UserInterface is expecting
interface UserInterface {
  name: string,
  age: string, 
  id: number
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // This input decorator lets the user component know that it is expecting user from a different component
  @Input() user: UserInterface;

  // This output will constantly listen for changes in the user value coming from app component, it will also be in cahrge of sending an event.
  @Output() userEvent = new EventEmitter<UserInterface>()

  isColored: boolean;

  // We are setting this.user to be an object as the UserInterface
  constructor() {
    this.user = {} as UserInterface,
    this.isColored = true;
  }

  ngOnInit(): void {
  }

  // This send user event will send json data from the user object to app component using the event handler in app component html
  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }

  changeColor() {
    this.isColored = !this.isColored
  }

  

}
