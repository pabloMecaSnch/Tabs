import { Component, DebugElement, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Console } from 'console';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts:string[];
  groupedContacts =[];

  constructor(public navCtrl:NavController) { 
    this.contacts=[
      'Kate Beckett',
      'Richard Castle',
      'Alexis Castle',
      'Lanie Parish',
      'Javier Esposito',
      'Kevin Ryan',
      'Martha Rodgers',
      'Roy Montgomery',
      'Jim Beckett',
      'Stana Katic',
      'Nathan Fillion',
      'Molly Quinn',
      'Tamala Jones',
      'Jon Huertas',
      'Seamus Dever',
      'Susan Sullivan'
    ];
    this.groupContacts(this.contacts);
  }

  groupContacts(contacts){
    let sortedContacts = contacts.sort();
    console.log(sortedContacts);
    let currentLetter = false;
    let currentContacts = [];

    sortedContacts.forEach((value,index) => {
      if(value.charAt(0)!=currentLetter){
        
        currentLetter = value.charAt(0);
       
        let newGroup = {
          letter:currentLetter,
          contacts:[]
        };
        currentContacts = newGroup.contacts;
        console.log('grupo nuevo:');
        console.log(newGroup);
        this.groupedContacts.push(newGroup);
      }
      console.log('valor');
      console.log(value);
      currentContacts.push(value);
      
    });
    

    }
    ngOnInit() {
    }
  }
 


