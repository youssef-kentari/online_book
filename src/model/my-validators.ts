import {AbstractControl, ValidationErrors} from '@angular/forms';

export class MyValidators {
  static passwordMatchValidator(contol:AbstractControl): ValidationErrors | null{
    const password=contol.get('password')?.value;
    const ConfirmPassword=contol.get('confirmPassword')?.value;
    if(password!==ConfirmPassword){ return {passwordMismatch:true};}
    return null;
  }
}
