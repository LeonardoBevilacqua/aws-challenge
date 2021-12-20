import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './pages/category/category.component';
import { DeviceComponent } from './pages/device/device.component';
import { DisplayTableComponent } from './pages/category/components/display-table/display-table.component';
import { AddFormComponent } from './pages/category/components/add-form/add-form.component';

const appRoutes: Routes = [
  { path: '', component: DeviceComponent },
  { path: 'category', component: CategoryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    DeviceComponent,
    DisplayTableComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
