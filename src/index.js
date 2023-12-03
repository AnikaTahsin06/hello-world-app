import moment from "moment";
export class Index {
    constructor(){
        this.message = `Hello world!! This is ${moment().format('YYYY')}`;
      }
    
}