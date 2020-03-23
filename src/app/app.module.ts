import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameItemComponent } from './game-item/game-item.component';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EditGameComponent,
    GameDetailComponent,
    GameItemComponent,
    GameListComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
