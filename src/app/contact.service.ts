import { Injectable, OnInit } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements OnInit{

  contacts:Contact[]=[];
  results :Contact[]=[];

  constructor() { }

  ngOnInit(){

  }

  getAllContacts(){
    return this.contacts;
  }

  // search friends number
  getContact(searchName:string): Contact[]{
    this.results = [];

    this.contacts.map(contact => {
      if(contact.name.indexOf(searchName) !== -1) this.results.push(contact);
    })
    return this.results;
    
  }

  saveContact(data:Contact){
    this.contacts.push(data);
  }
}
