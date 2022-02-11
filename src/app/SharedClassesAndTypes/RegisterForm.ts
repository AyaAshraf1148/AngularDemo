export class RegisterForm{
    constructor(
        public username:string,
        public email:string,
        public password:string,
        public ConfirmPassword:string,
        public social :string
    ){

    }
}