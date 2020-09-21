import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  apiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = "http://localhost:8080"
  }

  post(url: string, data?: any, params?: object) {
    console.log("---------",data)
    const apiUrl = `${this.apiUrl}/${url}${this.generateQueryString(params)}`;
    return this.http.post(apiUrl, data, {
    });
  }

  get(url: string, params?: object) {
    const apiUrl = `${this.apiUrl}/${url}${this.generateQueryString(params)}`;
    console.log(apiUrl);
    console.log("--------")
    return this.http.get(apiUrl, {
    });
  }

  put(url: string, data?: any, params?: object) {
    console.log("hitt put")
    console.log(data)
    const apiUrl = `${this.apiUrl}/${url}${this.generateQueryString(params)}`;
    return this.http.put(apiUrl, data, {
    });
  }

  delete(url: string) {
    console.log("hitt delete")
    const apiUrl = `${this.apiUrl}/${url}`;
    return this.http.delete(apiUrl, {
    });
  }

  generateQueryString(params?: object): string {
    let queryString = '',
    httpParam = new URLSearchParams();
    Object.keys(params || {}).forEach(key => httpParam.set(key, params[key]));
    queryString = httpParam.toString() ? `?${httpParam.toString()}` : '';
    return queryString;
  }

}
