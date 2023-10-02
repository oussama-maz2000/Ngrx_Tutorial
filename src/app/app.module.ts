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
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { counterReducer } from '../app/counter/shared/state/counter.reducer';
import { HomeComponent } from './counter/home/home.component';
import { HeaderComponent } from './counter/shared/components/header/header.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostComponent } from './post/post/post.component';
import { appReducer } from './app_State/app.state';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    UserEditComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    HomeComponent,
    HeaderComponent,
    CounterComponent,
    PostComponent,
    PostAddComponent,
    PostEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
