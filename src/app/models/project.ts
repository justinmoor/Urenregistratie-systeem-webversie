export class Project{
    constructor(
        public projectID?:number,
        public projectName?:string,
        public customerID?:number
    ){

    }

    public getProjectID() {
        return this.projectID;
    }

    public getProjectName() {
        return this.projectName;
    }
}