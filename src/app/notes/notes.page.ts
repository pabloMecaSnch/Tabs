import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Note } from '../modelo/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  public notes : Note[]=[];
  constructor(public alertCtrl : AlertController) {
  }
  ngOnInit() {
  }
  async addNote(){
    const alert = await this.alertCtrl.create({
      header: 'Add note',
      inputs:[
        {
          name: 'texto',
          type:'text',
          placeholder : 'texto'
        }
      ],
      buttons:[
        {
          text:'cancel',
          role:'cancel',
          handler:()=>{
            console.log('Confirm cancel');
          }
        },{
          text:'Ok',
          handler:(data:Note)=>{
            console.log(data.texto);
            this.notes.push(data);
          }
        }
      ]
    });
    await alert.present();
  }
  async editNote(note:Note) {
    const alert = await this.alertCtrl.create({
      header: 'Add Note',
      inputs: [
        {
          value:note.texto,
          name: 'texto',
          type: 'text',
          placeholder: 'Escriba el texto'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: (data:Note) => {
            let index = this.notes.indexOf(note);  //saca el índice del objeto dentro del array
            if(index > -1){
              this.notes[index] = data;
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
