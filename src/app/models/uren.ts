export class Uren{
    
    constructor(
        public uurId?:number,
        public persoonId?:number,
        public begindatum?:string,
        public begintijd?:string,
        public einddatum?:string,
        public eindtijd?:string,
        public klantnaam?:string,
        public projectnaam?:string,
        public onderwerpnaam?:string,
        public klantId?:number,
        public projectId?:number,
        public onderwerpId?:number,
        public commentaar?:string,
        public goedgekeurd?:boolean,
        public personeelsnaam?:string,
        public isChanged?:boolean

    ){

    }
}