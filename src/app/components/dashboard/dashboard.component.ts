import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {


  reminderform = this.fb.group({
    date: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  
  constructor(private fb: FormBuilder,private service: UserService,public router: Router,private datePipe: DatePipe) {
  }




  
  onSubmit() {
    if (this.reminderform.valid) {
      let data = this.reminderform.value;
      let result = this.service.add(data);
      result.subscribe(
        (res: any) => {
          if (result) {
            alert(res.message);
            this.reminderform.reset()
          }
        },
        (err) => {
          console.log(err.error.message);
        }
      );
    }
  }
}
