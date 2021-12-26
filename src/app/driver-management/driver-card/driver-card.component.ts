import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
})
export class DriverCardComponent implements OnInit {
  constructor() {}
  faEllipsisH = faEllipsisH;
  @Input()
  driver: any = {};

  ngOnInit(): void {}
}
