import { NgModule, importProvidersFrom } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { MaleComponent } from './pages/male/male.component';
import { FemaleComponent } from './pages/female/female.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { LayoutClientComponent } from './components/layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { ProductViewComponent } from './components/product-client/product-view/product-view.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { ProductListComponent } from './components/admin/products/product-list/product-list.component';
import { ProductFormComponent } from './components/admin/products/product-form/product-form.component';
import { HeaderAdminComponent } from './components/headers/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { ModelComponent } from './components/admin/ui/model/model.component';
import { ProductDetailComponent } from './components/product-client/product-detail/product-detail.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FooterAdminComponent,
    AboutComponent,
    MaleComponent,
    FemaleComponent,
    NotFoundComponent,
    DashboardComponent,
    SidebarComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    ProductViewComponent,
    ProductListComponent,
    ProductFormComponent,
    HeaderAdminComponent,
    ModelComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
