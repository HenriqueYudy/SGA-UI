import { Modelo } from './../models/Modelo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '../global-variable';

@Injectable()
export class ModeloService {

    constructor(private global : Globals, private http: HttpClient) { }

    URI: string = this.global.BASE_URL + 'modelo';


    index():Observable<Modelo[]>{
        return this.http.get<Modelo[]>(this.URI);
    }

    indexByMarca(id: number): Observable<Modelo[]>{
        return this.http.get<Modelo[]>(this.URI + `/findByMarca/${id}`);
    }

    show(modelo: Modelo):Observable<Modelo>{
        return this.http.get<Modelo>(this.URI + `/${modelo.id}`);
    }


    store(modelo: Modelo){
        return this.http.post(this.URI, modelo);
    }

    update(modelo: Modelo){
        return this.http.put(this.URI + `/${modelo.id}` , modelo);
    }

    destroy(modelo : Modelo){
        return this.http.delete(this.URI + `/${modelo.id}`);
    }
}