import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RxjsComponent } from './RxJs/rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './RxJs/user-edit/user-edit.component';

import { HomeComponent } from './counter/home/home.component';
import { HeaderComponent } from './counter/shared/components/header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { appReducer } from './app_State/app.state';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    UserEditComponent,

    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
