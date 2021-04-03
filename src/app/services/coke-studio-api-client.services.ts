import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';

@Injectable({providedIn: 'root'})
export class CokeStudioService {
    endpointUrl:string = "https://605f6d22e96e5c0017408a1c.mockapi.io/song";
    constructor(
        private readonly _httpClient:HttpClient
    ) { 
        
    }
    
    public getAll(): Observable<Song[]>{
       return this._httpClient.get<Song[]>(this.endpointUrl);
    }
}