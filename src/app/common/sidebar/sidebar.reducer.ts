import { createReducer, on } from '@ngrx/store';
import * as SidebarActions from './sidebar.actions';

export interface State {
  status: 'closed' | 'open';
}

export const initialState: State = {
  status: 'closed',
};

export const reducer = createReducer(
  initialState,
  on(SidebarActions.toggleMobileSidebar, (state) => ({
    ...state,
    status: state.status === 'closed' ? 'open' : 'closed',
  }))
);
