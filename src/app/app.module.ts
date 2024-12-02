import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './components/services/services.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MatIconModule } from '@angular/material/icon'; 
import { AgentsComponent } from './components/agents/agents.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CustomerReviewComponent } from './components/customer-review/customer-review.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RecentPropComponent } from './components/recent-prop/recent-prop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    CardComponent,
    AgentsComponent,
    AboutUsComponent,
    CustomerReviewComponent,
    FooterComponent,
    LoginComponent,
    RecentPropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  // This ensures that AppComponent is the root component
})
export class AppModule { }
