export class User
{
    constructor(
        public personeelID?: number,
        public voornaam?: string,
        public tussenvoegsel?: string,
        public achternaam?: string,
        public email?: string,
        public wachtwoord?: string,
        public rechten?: string,
        public werkzaam?: number,
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
