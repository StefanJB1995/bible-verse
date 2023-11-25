import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Verse } from "../model/Verse";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class VerseService {
    constructor(private httpClient: HttpClient) {}

    url = "http://localhost:8080/verse/find";

    getVerseById(id: number): Observable<Verse> {
        return this.httpClient.get<Verse>(`${this.url}/${id}`)
    }
}