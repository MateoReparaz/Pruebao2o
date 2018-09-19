import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  
  url: string = environment.BASEURL;
  options: object = { withCredentials: true };

  constructor(public http: Http) {}

  errorHandler(e) {
    console.log("ApiServiceError");
    console.log(e);
    return e;
  }
  
  getRecipes() {
    return this.http.get(`${this.url}/list`, this.options).pipe(
      map(res => res.json()),
      catchError(e => of(this.errorHandler(e)))
    );
  }
}
