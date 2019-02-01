import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Nebular
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// Nebular
		NbThemeModule.forRoot(),
		NbLayoutModule,
		NbSidebarModule,
	],
	providers: [NbSidebarService],
	bootstrap: [AppComponent]
})
export class AppModule { }
