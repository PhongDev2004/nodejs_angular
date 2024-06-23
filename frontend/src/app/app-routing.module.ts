import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MaleComponent } from './pages/male/male.component';
import { FemaleComponent } from './pages/female/female.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutClientComponent } from './components/layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/admin/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-client/product-detail/product-detail.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  // Routing client
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'male', component: MaleComponent },
      { path: 'female', component: FemaleComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  // Routing admin
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListComponent },
    ],
  },
  // Notfound
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
