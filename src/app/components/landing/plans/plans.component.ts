import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  planType = 'monthly';
  ngForm: FormGroup;
  userTypes;
  showAlertSuccess = false;
  userSubscribed;
  Custombox;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toaster: Toaster) { }

  ngOnInit() {
    this.buildForm();
    this.getUserTypes();
  }

  buildForm() {
    this.ngForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      type: [null, Validators.required]
    });
  }

  get email() { return this.ngForm.get('email'); }

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
        this.showToastSuccess();
        this.userSubscribed = response;
        this.showAlertSuccess = true;
        this.ngForm.reset();
        // this.showSuccess('Gracias por suscribirte', 'Suscrito con exito!');
      }, error => {
        console.log(error, 'error');
        this.showToastError();
      });
  }

  showToastError() {
    this.toaster.open({
      text: 'Ya estas suscrito!',
      caption: 'Error al intentar suscribirte',
      type: 'warning',
    });
  }

  showToastSuccess() {
    this.toaster.open({
      text: 'Pronto te estaremos informando de nuestras novedades',
      caption: 'Te has suscrito con éxito',
      type: 'success',
    });
  }

  plan(plan) {
    this.planType = plan;
  }

}
