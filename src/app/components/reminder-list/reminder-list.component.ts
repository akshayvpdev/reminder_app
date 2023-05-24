import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent {
  reminders: any = ''
  displayedColumns: string[] = ['position', 'description', 'date', 'delete'];
  public dataSource = this.reminders;
  length = ''
  constructor (private service: UserService) {
    this.viewreminders()

  }
  viewreminders(){
    this.service.view().subscribe((res: any) => {
      console.log(res.data)
      this.reminders = res.data
      length = this.reminders.length
    })
  }



  deletereminder(event: any) {
    console.log(event)
    let result = this.service.delete(event)
    
    result.subscribe(res => {
      if (result) {
        console.log(res)
        this.viewreminders()
      }
    })
  }
}



