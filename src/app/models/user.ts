export class User
{
    constructor(
        public personeelID?: number,
        public voornaam?: string,
        public tussenvoegsel?: string,
        public achternaam?: string,
        public email?: string,
        public wachtwoord?: string,
        public rechten?: number,
        public werkzaam?: number,
        public password?: string,
        public name?: string
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
