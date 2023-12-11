import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pill } from "../model/Pill";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class PillService {

    constructor(private httpClient: HttpClient) {}

    url = "http://localhost:8080/pills";

    getAllPills() {
        return this.httpClient.get<Pill[]>(`${this.url}/findAll`)
    }
}