import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TikcetService {
  constructor(private _httpClient: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this._httpClient.get<Ticket[]>("https://api.myjson.com/bins/7ng57");
  }

  getTicket(tickedID: number): Observable<Ticket> {
    return this.getTickets().pipe(
      map(ticketList =>
        ticketList.find(ticket => {
          return ticket.id === tickedID;
        })
      )
    );
  }
}

export interface Ticket {
  id: number;
  ticket_title: string;
  ticket_image: string;
}
