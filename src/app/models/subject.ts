export class Subject{
    constructor( 
        public subjectID?:number,
        public subjectName?:String,
        public projectID?:number
        ) {
       
    }

    public getSubjectID() {
        return this.subjectID;
    }

    public getSubjectName() {
        return this.getSubjectName;
    }

}