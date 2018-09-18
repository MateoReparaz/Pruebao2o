import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(public http: HttpClient) {}

  errorHandler(e) {
    console.log("ApiServiceError");
    console.log(e.message);
    console.log(e);
    return e;
  }
  
  get() {
    return this.http
      .get("")
      .pipe(map(res => console.log(res)));
  }
}
