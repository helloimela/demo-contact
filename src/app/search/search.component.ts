import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResults:Contact[]=[];
  searchInput='';

  constructor(private service:ContactService) { }

  ngOnInit(): void {
    this.searchResults = this.service.getAllContacts();
  }

  searchContact(){
    this.searchResults=[];
    this.searchResults = this.service.getContact(this.searchInput);
  }

}
