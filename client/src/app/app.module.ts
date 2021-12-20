import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './pages/category/category.component';
import { DeviceComponent } from './pages/device/device.component';

const appRoutes: Routes = [
  { path: '', component: DeviceComponent },
  { path: 'category', component: CategoryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
