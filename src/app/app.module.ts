import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {FIREBASE_CREDENTIALS} from "./firebase.credentials";
import {ShoppingListService} from "../services/shopping-list/shopping-list.service";
import {ToastService} from "../services/toast/toast.service";
import {UserService} from "../services/user/user.service";
import {AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Inirtialise AngularFire with credientials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the AngulareFireDatabaseModule to use database intercations
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    ToastService,
    UserService
  ]
})
export class AppModule {}
