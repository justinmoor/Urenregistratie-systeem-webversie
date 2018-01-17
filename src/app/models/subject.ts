export class Subject{
    constructor( 
        public subjectID?:number,
<<<<<<< HEAD
        public subjectName?:String,
=======
        public subjectName?:string,
>>>>>>> 5d38c0c76cc415837e76ff562399906262891556
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