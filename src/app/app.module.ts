import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RxjsComponent } from './RxJs/rxjs/rxjs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './RxJs/user-edit/user-edit.component';
import { ProductDataService } from './service/product.data.service';
import { HomeComponent } from './counter/home/home.component';
import { HeaderComponent } from './counter/shared/components/header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { appReducer } from './app_State/app.state';
import { AuthEffect } from './auth/state/auth.effects';
import { AuthTokenInterceptor } from './service/authToken.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './router/custom-serializer';
import { ProductComponent } from './product/product.component';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfiguration } from './app-entity-metadat';
import { ProductResolver } from './service/product.resolver';
@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    UserEditComponent,

    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthEffect]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),

    EntityDataModule.forRoot(entityConfiguration),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    ProductDataService,
    ProductResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    ProductDataService: ProductDataService
  ) {
    entityDataService.registerService('Product', ProductDataService);
  }
}
