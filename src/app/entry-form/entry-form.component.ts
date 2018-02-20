import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {


  triggerValues = ['Air Quality', 'Lack of Sleep',
              'Food', 'Light'];

  medications = ['Ibuprofen', 'Tylenol'];

  String[] selectedTriggers = [];

  // TODO: remove this
  model = new Entry();


  submitted = false;

  toggleTrigger(trig) {
    if (this.model.triggers.includes(trig)
      this.model.triggers.splice(this.model.triggers.indexOf(trig), 1);
    else
      this.model.triggers.push(trig);
  }

  onSubmit() {
    this.submitted = true;

    console.log("Will submit. We'll figure out what to do here.");
    console.log(this.model);
  }

  get diagnostic() {return JSON.stringify(this.model);}

  constructor() { }

  ngOnInit() {
  }

}
