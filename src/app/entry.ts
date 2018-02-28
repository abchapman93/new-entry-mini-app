export class BaseEntryField {

  constructor() {
    let fullDate = new Date();
    this.date = this.setDefaultDate();
    this.time = this.setDefaultTime();
  }

  setDefaultDate() {
    let fullDate = new Date();
    let d = fullDate.getDate();
    if (d < 10) {
      d = '0' + d;
    }
    let m = fullDate.getMonth();
    if (m < 10) {
      m = '0' + m;
    }

    let y = fullDate.getFullYear();
    return '' + y + '-' + m + '-' + d;
  }

  /**
  Returns a string format of the current time
  %H-%M
  */
  setDefaultTime() {
    let fullDate = new Date();
    let h = fullDate.getHours();
    if (h < 10)
      h = '0' + h;
    let m = fullDate.getMinutes();
    if (m < 10)
      m = '0' + m;

    return h + ':' + m;


  }
}

/**
Class that represents an entire entry.
*/
export class Entry extends BaseEntryField {
  entryFields: object;
  newTrigger: TriggerEntry; // This is the pending trigger that hasn't been added yet
  newHeadache: HeadacheEntry; // This is the pending headache

  constructor() {
    super();
    this.newHeadache = new HeadacheEntry();
    this.newTrigger = new TriggerEntry("Air Quality");

    this.entryFields = {
                      // TODO: author should be set some other way
                      'author': "Mrs. Julia's Mom",
                      'headache': '', // TODO: change this to null
                      'medications': {},
                      'triggers': [],
                      'comments': ''
                        } // This will contain strings mapping to EntryFields
                          // ie., "headache": HeadacheEntry, etc...
  }


export class HeadacheEntry extends BaseEntryField {
  constructor(name) {
    super();
    this.severity = 0;


  }
}

export class MedicationEntry extends BaseEntryField {
  constructor(name) {
    super();
    this.name = name;
  }
}

export class TriggerEntry extends BaseEntryField {
  constructor(name) {
    super();
    this.name = name;
  }
}
