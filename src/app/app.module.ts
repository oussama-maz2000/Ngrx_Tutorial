import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducer, rootReducer } from './state/01-reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RxjsComponent } from './RxJs/rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './RxJs/user-edit/user-edit.component';
/* import { MDBBootstrapModule } from 'angular-bootstrap-md'; */

@NgModule({
  declarations: [AppComponent, RxjsComponent, UserEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot(
      {
        firstReducer: rootReducer,
      },
      {
        metaReducers: metaReducer,
        runtimeChecks: {
          strictActionTypeUniqueness: true,
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
