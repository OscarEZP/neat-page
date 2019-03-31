import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  email: string;
  ngForm: FormGroup;
  userTypes;
  showAlertSuccess = false;
  userSubscribed;
  Custombox;
  @Input() widthPage = 0;

  @Input() userType;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toaster: Toaster
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getUserTypes();
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  buildForm() {
    this.ngForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      type: [null, Validators.required]
    });
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

}
