import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swedbank-demo';

  username='';
  number='';

  constructor(private service: ContactService){}

  saveContact(username:string, number:string){
    // console.log(username, number);
    const num = parseInt(number);
    const data = {name: username, number: num};
    this.service.saveContact(<Contact>(data))
  }
}
