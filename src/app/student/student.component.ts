import {Component, Input} from "@angular/core";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['../../assets/css/student.css']
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
