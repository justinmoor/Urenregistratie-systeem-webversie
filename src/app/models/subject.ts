export class Subject{
    constructor( 
        public subjectID?:Number,
        public subjectName?:String,
        public projectID?:Number
        ) {
       
    }

    public getSubjectID() {
        return this.subjectID;
    }

    public getSubjectName() {
        return this.getSubjectName;
    }

}