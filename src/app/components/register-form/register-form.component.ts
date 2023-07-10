import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createState, PropsFactory, StateOf } from '@ngneat/elf';
// interface Artist {
//   firstName: string;
//   lastName: string;
//   // Add other fields as needed
// }

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registrationForm!: FormGroup;
  // artistState: StateOf<Artist[]> = createState<Artist[]>([]);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      profilePicture: ['', Validators.required],
      stageName: [''],
      backstory: [''],
      startingDate: [''],
      albums: ['']
    });
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.log(this.registrationForm.status) // INVALID
    }
  }
}
