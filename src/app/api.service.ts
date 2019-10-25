import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private $httpClient: HttpClient) { }
  getInfos(i: any) {

    // PUT YOUR API KEY HERE
    const $API_KEY = `xxx`;

    return this.$httpClient.get(`https://newsapi.org/v2/everything?q=${i}&sortBy=relevance&apiKey=` + $API_KEY );
  }
}
