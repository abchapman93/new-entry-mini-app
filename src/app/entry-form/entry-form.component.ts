import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})


export class EntryFormComponent implements OnInit {

  // TODO: Read these in from somewhere else
  TRIGGER_VALUES = ['Air Quality', 'Lack of Sleep',
              'Food', 'Light'];

  MEDICATION_VALUES = ['Ibuprofen 200mg', 'Tylenol 100mg'];
  hasHeadache = false;
  hasTrigger = false;
  hasMeds = false;


  // triggerValues = ['Air Quality', 'Lack of Sleep',
  //             'Food', 'Light'];
  //
  // medicationValues = ['Ibuprofen 200mg', 'Tylenol 100mg'];

  // String[] selectedTriggers = [];

  // TODO: remove this
  model = new Entry();


  submitted = false;

  constructor() {
  this.selectedTriggers = [];
  this.selectedMeds = [];
  }

  ngOnInit() {

  }

  hasHeadacheToTrue() {
    this.hasHeadache = true;
    this.model.addHeadache();
  }

  changeHasHeadache() {
    if (this.hasHeadache === false && this.model.entryFields.headache === "")
      this.model.addHeadache();
    else if (this.hasHeadache === true)
      this.model.removeHeadache();
    this.hasHeadache = !this.hasHeadache;
  }

  changeHasTrigger() {
    this.hasTrigger = !this.hasTrigger;
  }

  changeHasMeds() {
    this.hasMeds = !this.hasMeds;
  }

  toggleTrigger(trig) {

    // If this trigger was already selected
    if (this.selectedTriggers.includes(trig)){
      // Remove it from selected triggers
      this.selectedTriggers.splice(this.selectedTriggers.indexOf(trig), 1);
      // Remove it from the Entry's triggers list
      this.model.removeEntry('triggers', trig);
    }
    else {
      console.log("Name of trig" + trig);
      this.selectedTriggers.push(trig);
      // Add it to the Entry's triggers list
      this.model.addEntry('triggers', trig);
    }
  }


  toggleMedication(med) {
    if (this.selectedMeds.includes(med))
      this.selectedMeds.splice(this.selectedMeds.indexOf(med), 1);
    else {
      this.selectedMeds.push(med);
      this.model.addEntry('medications', med);
    }
  }

  setEntryWithDate(field, value, date) {
    this.model.addEntry(field, value);
    this.model.entryFields[field][value].date = date;
    // console.log(trig+ date);
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
