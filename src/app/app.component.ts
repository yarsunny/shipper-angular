import { Component } from '@angular/core';
import { AppState } from './app.module';
import { select, Store } from '@ngrx/store';
import { selectMobileSidebarStatus } from './common/sidebar/sidebar.seletor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appStore: Store<AppState>) {}

  mobileSidebarStatus$ = this.appStore.pipe(select(selectMobileSidebarStatus));
}
