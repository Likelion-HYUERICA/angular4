import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LectureComponent } from './lecture/lecture.component';
import { MypageComponent } from './mypage/mypage.component';
import { NoticeComponent } from './notice/notice.component';

import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notice', component: NoticeComponent},
	{ path: 'lecture', component: LectureComponent},
	{ path: 'mypage', component: MypageComponent},
	{ path: 'content', component: ContentComponent},
	{ path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
		NoticeComponent,
		MypageComponent,
		LectureComponent,
		SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
