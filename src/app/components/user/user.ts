export class User
{
    constructor(
        public personeelID?:string,
        public achternaam?:string,
        public tussenvoegsel?:string,
        public voornaam?:string,
        public email?:string,
        public wachtwoord?:string,
        public rechten?:string,
        public werkzaam?:string
    ){
        
    }
    public setRechten(rechten){
        this.rechten = rechten;
    }

    public setWerkzaam(werkzaam){
        this.werkzaam = werkzaam;
    }

    public setWachtwoord(wachtwoord){
        this.wachtwoord = wachtwoord;
    }

}