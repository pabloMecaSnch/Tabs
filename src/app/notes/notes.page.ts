import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes : any;
  constructor() { 
    this.notes = [
      {'title':'nota1'},
      {'title':'nota2'},
      {'title':'nota3'}
    ];
  }
  ngOnInit() {
  }

}
