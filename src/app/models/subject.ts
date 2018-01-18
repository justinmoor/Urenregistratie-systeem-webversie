export class Subject{
    constructor( 
        public subjectID?:number,
        public subjectName?:string,
        public projectID?:number
        ) {
       
    }

    public getSubjectID() {
        return this.subjectID;
    }

    public getSubjectName() {
        return this.subjectName;
    }

}