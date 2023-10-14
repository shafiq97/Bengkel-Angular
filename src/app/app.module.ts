import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PrescriptionRefillFormComponent } from './prescription-refill-form/prescription-refill-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeDirectiveExampleComponent } from './pipe-directive-example/pipe-directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    ProductCardComponent,
    PrescriptionRefillFormComponent,
    ReactiveFormComponent,
    PipeDirectiveExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
