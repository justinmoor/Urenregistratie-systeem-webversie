export class HourRegister{
    
        constructor(
            public startingDate?:string,
            public startingTime?:string,
            public endingDate?:string,
            public endingTime?:string,
            public customerName?:string,
            public projectName?:string,
            public subjectName?:string,
            public comment?:string
        ){
        }

        public setEndTime(time){
            this.endingTime = time;
        }
    }