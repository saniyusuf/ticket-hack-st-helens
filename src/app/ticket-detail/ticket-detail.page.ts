import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {map, switchMap, tap} from 'rxjs/operators';
import {Ticket, TikcetService} from '../tikcet.service';
import {Observable} from 'rxjs';

@Component({
  selector: "app-ticket-detail",
  templateUrl: "./ticket-detail.page.html",
  styleUrls: ["./ticket-detail.page.scss"]
})
export class TicketDetailPage implements OnInit {
  ticketDetail: Observable<Ticket>;

  constructor(private _activatedRoute: ActivatedRoute, private _ticketService: TikcetService) {
    this.ticketDetail = _activatedRoute.params.pipe(
        map(parameters => parseInt(parameters["ticketID"])),
        switchMap(tickedID =>{
          return this._ticketService.getTicket(tickedID)
        })
    );
  }


  ngOnInit() {}
}
