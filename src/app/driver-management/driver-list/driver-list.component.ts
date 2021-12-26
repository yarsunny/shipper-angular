import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
})
export class DriverListComponent implements OnInit {
  constructor() {}
  @Input()
  drivers: any = []

  ngOnInit(): void {}
}
