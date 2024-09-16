import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ViacepResult } from '../models/ViacepResult';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl;

  constructor(private http : HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.http.get<ViacepResult>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map((response) => {
        return response;
      })
    )
  }
}
