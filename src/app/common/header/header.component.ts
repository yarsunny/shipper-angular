import { Component } from '@angular/core';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { toggleMobileSidebar } from '../sidebar/sidebar.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private appStore: Store<AppState>) {}

  faBars = faBars;
  faUserCircle = faUserCircle;

  onClickMenu() {
    this.appStore.dispatch(toggleMobileSidebar());
  }
}
