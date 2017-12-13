export class Uren{
    
    constructor(
        public uurId?:number,
        public begindatum?:string,
        public begintijd?:string,
        public einddatum?:string,
        public eindtijd?:string,
        public commentaar?:string,
        public goedgekeurd?:boolean,
        public persoonId?:number,
        public klantId?:number,
        public projectId?:number,
        public onderwerpId?:number
    ){

    }
}