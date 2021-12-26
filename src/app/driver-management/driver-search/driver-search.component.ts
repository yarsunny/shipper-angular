import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-driver-search',
  templateUrl: './driver-search.component.html',
})
export class DriverSearchComponent implements OnInit {
  private unsubscribe$ = new Subject();
  faSearch = faSearch;
  @Output()
  queryChanged = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  searchForm = this.fb.group({
    search: new FormControl(['']),
  });

  ngOnInit(): void {
    this.searchForm.controls['search'].valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.queryChanged.emit(value);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }
}
