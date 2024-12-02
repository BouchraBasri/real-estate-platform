import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RecentPropComponent } from './components/recent-prop/recent-prop.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerReviewComponent } from './components/customer-review/customer-review.component';
import { AgentsComponent } from './components/agents/agents.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about us', component: AboutUsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'recentProp', component: RecentPropComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'customerReview', component: CustomerReviewComponent},
  { path: 'agent', component: AgentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
