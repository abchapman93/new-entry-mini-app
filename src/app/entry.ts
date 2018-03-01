export class BaseEntryField {

  fullDate: Date;
  date: String;
  time: String;

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
class Entry extends BaseEntryField {


  entryFields: {};

  constructor() {
    super();

    // TODO: Is there a better way to do this? Maybe it should have its own class or interface
    this.entryFields = {
                      // TODO: author should be set some other way
                      'author': "Mrs. Julia's Mom",
                      'headache': '', // TODO: change this to null
                      'medications': [],
                      'triggers': [],
                      'comments': ''
    }


  }
}


class HeadacheEntry extends BaseEntryField {

  constructor() {
    super();
    this.severity = 0;


  }
}

class MedicationEntry extends BaseEntryField {

  name: String;

  constructor(name: String) {
    super();
    this.name = name;
  }
}

class TriggerEntry extends BaseEntryField {

  name: String;
  constructor(name: String) {
    super();
    this.name = name;
  }
}


export { Entry, TriggerEntry, MedicationEntry, HeadacheEntry }
