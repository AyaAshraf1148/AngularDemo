import { AbstractControl, ValidatorFn } from "@angular/forms";

export function ForbiddenNameValidator(forbiddenName:RegExp):ValidatorFn
{
    return (control:AbstractControl)=>
    {
        const forbidden=forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName':{value:control.value}}:null;
    }
}

export function ConfirmPasswordValidators (control:AbstractControl){
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword')

    if(password?.pristine || confirmPassword?.pristine){
        return null;
    }
    else{
        return password&&confirmPassword&&password.value!== confirmPassword.value ?{'misMatch':true}:null
    }

}