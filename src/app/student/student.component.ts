import {Component, Input} from "@angular/core";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent {
  @Input()
  classN?: string;

  sobangai = 6;

  them(){
    this.sobangai++;
  }
  giam(){
    if(this.sobangai >0)
      this.sobangai--;
  }
}
