import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Dataservice connected.");
   }

   getPosts(id:number, user_id:number){
    
    //test/demo_form.php?name1=value1&name2=value2
    user_id = user_id
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=user_id')
    
    .map(res => res.json());
   }
    
}
