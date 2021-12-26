import { createSelector } from '@ngrx/store';
import { State as SidebarState } from './sidebar.reducer';
import { AppState } from '../../app.module';

export const selectSidebar = (state: AppState) => state.sidebar;

export const selectMobileSidebarStatus = createSelector(
  selectSidebar,
  (state: SidebarState) => state.status
);