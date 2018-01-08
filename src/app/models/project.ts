export class Project{
    constructor(
        public projectID?:Number,
        public projectName?:String,
        public customerID?:Number
    ){

    }

    public getProjectID() {
        return this.projectID;
    }

    public getProjectName() {
        return this.projectName;
    }
}