import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { GAME_ROUTES } from './modules/game/game.routes';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [...GAME_ROUTES],
  },
];
