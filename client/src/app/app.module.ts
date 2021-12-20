import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './pages/category/category.component';
import { AddCategoryComponent } from './pages/category/components/add-category/add-category.component';
import { DisplayCategoryComponent } from './pages/category/components/display-category/display-category.component';
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
    DeviceComponent,
    AddCategoryComponent,
    DisplayCategoryComponent
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
