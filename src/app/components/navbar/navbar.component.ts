import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() scrollX = 0;
  @Output() showUserType = new EventEmitter();
  @Input() widthPage = 0;

  ngForm: FormGroup;
  userTypes;
  showAlertSuccess = false;
  userSubscribed;
  Custombox;
  showOwner = true;
  showLessee = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toaster: Toaster) { }

  ngOnInit() {
    console.log(this.widthPage, this.scrollX, 'ancho de pantalla');
    this.buildForm();
    this.getUserTypes();
    this.showUserType.emit({
      lessee: false,
      owner: true
    });
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

  fnShowOwner() {
    this.showOwner = true;
    this.showLessee = false;
    this.showUserType.emit({
      lessee: this.showLessee,
      owner: this.showOwner
    });
  }

  fnShowLessee() {
    this.showOwner = false;
    this.showLessee = true;
    this.showUserType.emit({
      lessee: this.showLessee,
      owner: this.showOwner
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
