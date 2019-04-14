import { AuthenticationService } from './login/authentication.service';
import { AboutUsComponent } from './aboutus/aboutus.component';


import { AdminComponent } from './admin/admin.component';
import { WhenWhereComponent } from './secondpage/secondpage.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { TripWithUsComponent } from './tripwithus/tripwithus.component';
import { App, NavController } from 'ionic-angular';



const appRoutes: Routes = [
  {
    path: 'events',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: 'our-story', component: MainPageComponent },
      { path: 'when-where', component: WhenWhereComponent },
  { path: '',
  component: TripWithUsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    SignupComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    FrontPageComponent,
    MainPageComponent,
    WhenWhereComponent,
    AdminComponent,
    TripWithUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
