import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  ngForm: FormGroup;
  userTypes;
  showAlertSuccess = false;
  userSubscribed;
  Custombox;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getUserTypes();
  }

  buildForm() {
    this.ngForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      type: [null, Validators.required]
    });
  }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title,
    {timeOut: 2000});
  }

  getUserTypes() {
    this.userService.getUserTypes()
      .subscribe(res => {
        this.userTypes = res;
      }, error => {
        console.log(error);
      });
  }

  userSubscription() {
    this.userService.userSubscription(this.ngForm.value)
      .subscribe((response) => {
        console.log(response, 'respuesta');
        this.userSubscribed = response;
        this.showAlertSuccess = true;
        this.ngForm.reset();
        // this.showSuccess('Gracias por suscribirte', 'Suscrito con exito!');
      }, error => {
        console.log(error, 'error');
      });
  }

}
