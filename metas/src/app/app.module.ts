import { MetaPage } from './../pages/meta/meta';
import { MetasService } from './../services/metas.service';
import { MetasPage } from './../pages/metas/metas';
import { TabsPage } from './../pages/tabs/tabs';
import { CompromissoPage } from './../pages/compromisso/compromisso';
import { CategoriasPage } from './../pages/categorias/categorias';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriasPage,
    CompromissoPage,
    TabsPage,
    MetasPage,
    MetaPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriasPage,
    CompromissoPage,
    TabsPage,
    MetasPage,
    MetaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MetasService
  ]
})
export class AppModule {}
