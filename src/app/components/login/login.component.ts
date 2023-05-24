import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform=this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  constructor(private service:UserService, private router:Router,private fb:FormBuilder){

  }

  onSubmit(){
    let email=this.loginform.value.email
    let password=this.loginform.value.password
    let result=this.service.login(email,password)
    result.subscribe((res:any)=>{
      if(result){
        console.log(res)
        alert(res.message);
        localStorage.setItem("token",JSON.stringify(res.token))
        localStorage.setItem('currentUserEmail',res.currentUserEmail);
        localStorage.setItem('id',res.id)
        this.router.navigateByUrl('/dashboard')
      }
     
    },  (err) => {
      alert(err.error.message);
    })
  }

}
