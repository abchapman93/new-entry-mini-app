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

  setDefaultDateTime() {
    // "2018-02-21T01:00"
    let fullDate = new Date();

  }

}

/**
Class that represents an entire entry.
*/
export class Entry extends BaseEntryField {
  entryFields: object;
  newTrigger: TriggerEntry;
  newHeadache: HeadacheEntry;

  constructor() {
    super();

    this.newHeadache = new HeadacheEntry();
    this.newTrigger = new TriggerEntry("Air Quality");
    // TODO: these should be default be empty fields.
    // Figure out how to do that without throwing errors
    this.entryFields = {
                      // TODO: author should be set some other way
                      'author': "Mrs. Julia's Mom",
                      'headache': '',
                      'medications': {},
                      'triggers': [],
                      'comments': ''
                        } // This will contain strings mapping to EntryFields
                          // ie., "headache": HeadacheEntry, etc...




  }
  /**
  Initializes a new HeadacheEntry with default values.
  */
  addHeadache() {
    this.entryFields.headache = new HeadacheEntry();

  }

  removeHeadache() {
    this.entryFields.headache = '';
  }
  /**
  Removes an entry from the given field.
  @param field: the name of the field, should be either 'triggers' or 'medications'
  @param name: the value of the 'name' field in the object. Should be the string name of a trigger or med
  */
  removeEntry(field, name) {
    // console.log(arr);
    delete this.entryFields[field][name];

  }

  addEntry(field, name) {
    console.log("Here in addEntry" );
    console.log(name);
    if (field === 'medication')
      this.entryFields.medications[name] = new MedicationEntry(name);

    if (field === 'triggers'){
      console.log("here!!!")
      // Changing this to be a list
      this.entryFields.triggers.push( new TriggerEntry(name));
      // this.entryFields.triggers.push(new TriggerEntry(name));
    }
  }


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
