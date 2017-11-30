import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AnthonyApi {
    private baseUrl = 'http://34.229.200.128:8080/anthony_api/rest/serviceRequests';
    currentItem = {};
    
    constructor(private http: Http) { }

    getServiceRequests(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}`)
                .subscribe(res => resolve(res.json()));
        });
    }

    getTournamentData(tourneyId) : Observable<any> {
        return this.http.get(`${this.baseUrl}`)
            .map((response: Response) => {
                this.currentItem = response.json();
                return this.currentItem;
            });
    }

    getCurrentRequest(){
    	return this.currentItem;
    }

    createAuthorizationHeader(headers:Headers) {
	    headers.append('Authorization', 'Basic ' +
	      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20')); 
	  }

    
    

    postServiceRequest(item){
        var headers = new Headers();
	    //this.createAuthorizationHeader(headers);
	    headers.append('Content-Type', 'application/json');

	    //var content = JSON.stringify(item);

        return new Promise(resolve => {
            this.http.post(`${this.baseUrl}`,item, { headers: headers } )
                	.subscribe(res => resolve(res.json()));
        });
    }

    putServiceRequest(item){
        var headers = new Headers();
	    //this.createAuthorizationHeader(headers);
	    headers.append('Content-Type', 'application/json');

	    //var content = JSON.stringify(item);

        return new Promise(resolve => {
            this.http.put(`${this.baseUrl}`,item, { headers: headers } )
                	.subscribe(res => resolve(res.json()));
        });
    }

    
}