import { Component } from '@angular/core';
import {
  faCalendarAlt,
  faHome,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { toggleMobileSidebar } from './sidebar.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private appStore: Store<AppState>) {}

  faHome = faHome;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  className =
    'flex cursor-pointer items-center hover:text-orange-600 border-l-4 border-solid pl-3 mb-2 border-white';
  activeClassName = ['border-orange-600', 'text-orange-600', 'font-bold'];

  onClickSidebarLink() {
    this.appStore.dispatch(toggleMobileSidebar());
  }
}
