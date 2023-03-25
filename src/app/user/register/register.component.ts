import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  returnUrl: string = "";
  registerFormGroup! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute){

    this.registerFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.name]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get registerForm() { return this.registerFormGroup.controls; }

  realizarRegistro(): void
  {
    this.submitted = true;
    console.log("entrei");
     // stop here if form is invalid
    if (this.registerFormGroup.invalid) {
      return;
    }

    if(this.registerForm['email'].value == "btcschool@btcschool.com")
          this.router.navigate([this.returnUrl]);
    else
        console.log("nope" + this.registerForm['email'].value);

  }


  }

