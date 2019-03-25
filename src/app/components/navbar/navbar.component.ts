import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() scrollX = 0;

  ngForm: FormGroup;
  userTypes;
  showAlertSuccess = false;
  userSubscribed;
  Custombox;
  constructor(
    private userService: UserService,
    private fb: FormBuilder) { }

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
