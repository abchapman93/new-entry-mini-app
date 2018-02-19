import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {


  triggers = ['Air Quality', 'Lack of Sleep',
              'Food'];

  medications = ['Ibuprofen', 'Tylenol'];

  // TODO: remove this
  model = new Entry();

  submitted = false;

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
