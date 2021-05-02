import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // This title is being used with 2 way data binding with ngModel in the HTML template
  title = 'Data Binding!';

  // This jsonValue is being printed to the screen from the HTML template with the json pipe.
  jsonValue = {
    a: 'hello', 
    b: 'world'
  }

  // This newDate will be formated with the date pipe in the HTML template
  newDate = new Date();

  // This text will be truncated - ex: Hello World how are you? > Hello World... - with the custom truncate pipe we created in the HTML template.
  text = "Hello World how are you?"

  // We are creating a variable called httpService that is coming from the HttpService file.
  constructor(private httpService: HttpService) {}


  // This data is being defined as any for now. This vairable will hold the response from the httpService method
  data:any;

  showUser: boolean = false;

  // This is a method that will be called on a button click
  handleEvent() {
    // The this keyword is referencing the title that is within this class. 
    console.log('button clicked', this.title)

    // This getRequest method from the httpService needs to be subscribed to in order to get a response back.
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      // We are setting this.data to the response. This data will be printed out as json from the html template as json
      this.data = response;

      // Console.log the data
      console.log(this.data);
    })
  }


  // This user object will be inputed into the user component
  userObject = {
    name: 'john',
    age: '32',
    id: 0
  }

  // This takes in the event and logs it
  handleNewEvent(event:any) {
    console.log(event)
  }

  // When the show user button is clicked, change showUser to the opposite value
  showUserData() {
    this.showUser = !this.showUser
  }

  
}
