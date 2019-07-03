import { Component } from '@angular/core';
import {TikcetService} from '../tikcet.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ticketList;

  constructor(private _ticketService: TikcetService) {
    this.ticketList = _ticketService.getTickets();
  }

}
