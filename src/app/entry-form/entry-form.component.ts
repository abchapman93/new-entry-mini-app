import { Component, OnInit } from '@angular/core';

import { Entry, MedicationEntry, TriggerEntry,  HeadacheEntry } from '../entry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})


export class EntryFormComponent implements OnInit {

  // TODO: Read these in from somewhere else
  TRIGGER_VALUES = ['Air Quality', 'Lack of Sleep',
              'Food', 'Light'];
  // TRIGGER_VALUES = [];


  MEDICATION_VALUES = ['Ibuprofen 200mg', 'Tylenol 100mg'];
  hasHeadache = false;
  hasTrigger = false;
  hasMeds = false;


  // triggerValues = ['Air Quality', 'Lack of Sleep',
  //             'Food', 'Light'];
  //
  // medicationValues = ['Ibuprofen 200mg', 'Tylenol 100mg'];

  // String[] selectedTriggers = [];

  model = new Entry();
  selectedTriggers = [];
  selectedMeds = [];

  numTriggers: array;


  submitted = false;

  constructor() {
    this.numTriggers = [];

    console.log(this.TRIGGER_NAMES);
    // for (name of this.TRIGGER_NAMES) {
    //   console.log("Trigger name: " + name)
    //   this.TRIGGER_VALUES.push(new TriggerEntry(name));
    // }
  }

  ngOnInit() {

  }

  getTriggerValues() {
    return this.TRIGGER_VALUES;
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

  addOneTrigger() {
    console.log("In addOneTrigger")
    console.log(this.TRIGGER_VALUES);
    console.log()

    this.model.newTrigger = new TriggerEntry('Air Quality');

    console.log("New Headache")
    console.log(this.newHeadache)
    this.hasTrigger = true;
    console.log(this.model.newTrigger);
    return
  }

  /**
  Adds the `newTrigger` field to the Entry's current triggers
  */
  addNewTrigger() {
    console.log("In addNewTrigger");
    this.model.newTrigger.idx = this.model.entryFields['triggers'].length;
    let newTrigger = Object.assign({}, this.model.newTrigger);
    this.model.entryFields['triggers'].push(newTrigger);
    this.model.newTrigger = new TriggerEntry('Air Quality');
  }
  /**
  Removes the trigger from entryFields.triggers at idx
  */
  removeTrigger(idx) {
    // Populate the newTrigger field with this
    this.model.newTrigger = this.model.entryFields['triggers'].splice(idx, 1)[0];

    // Now change idxs in the remaining trigger entries
    for (let i = idx; i<this.model.entryFields.triggers.length; i++) {
      this.model.entryFields.triggers[i].idx = i;
  }


  }

  addNewHeadache() {
    let newHeadache = Object.assign({},  this.model.newHeadache);
    this.model.headache = newHeadache;
    this.hasHeadache = true;
  }

  removeHeadache() {
    this.model.entryFields.headache = '';
    this.changeHasHeadache();
  }

  changeHasTrigger() {
    this.hasTrigger = !this.hasTrigger;
  }

  changeHasMeds() {
    this.hasMeds = !this.hasMeds;
  }

  toggleTrigger(trig) {
    console.log("Here" + trig);

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



}
