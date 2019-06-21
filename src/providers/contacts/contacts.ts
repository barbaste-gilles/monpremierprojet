import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ContactsProvider {

  public contactsfound: any;
  public search: any;
  public contacttobefound: any;

  /*public search: any;*/

  constructor(public http: HttpClient, private mesContacts: Contacts ) {
    console.log('Hello ContactsProvider Provider');
    this.mesContacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
        .then(data => {
          console.log(data);
        });
  }

  /*constructor(public http: HttpClient, private contacts: Contacts) {
    console.log('Hello ContactProvider Provider');
    this.contacttobefound = '';
    this.contactsfound = [];
    this.getContact("");
  }*/

  /*getContact(val) {
    alert('tototo');
    this.contacts.find(['*'], {filter: val, multiple: true}).then((contacts) => {
      console.log(contacts);
      this.contactsfound = contacts;
    });*/

  /*Contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true}).then(data => {
  this.allContacts = data
});*/

}
