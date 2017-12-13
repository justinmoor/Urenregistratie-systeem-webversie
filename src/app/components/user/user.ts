export class User
{
    constructor(
        public personeelID?:string,
        public voornaam?:string,
        public tussenvoegsel?:string,
        public achternaam?:string,
        public email?:string,
        public wachtwoord?:string,
        public rechten?:string,
        public werkzaam?:string
    ){
        
    }
}