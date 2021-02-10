import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuCardDialogComponent } from './core/components/dialogs/menu-card-dialog/menu-card-dialog.component';
import { MatDialogModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MenuCardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [
    MenuCardDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
