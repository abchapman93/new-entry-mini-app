export class Entry {
  constructor() {
    this.severity = 0;
    let fullDate = new Date();
    // this.date = '' +  fullDate.getDate() + '/' + fullDate.getMonth() + '/' + fullDate.getFullYear();
    this.date = this.setDefaultDate();
    // var exp = $interpolate('{{greeting}} {{name}}!');
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
}
