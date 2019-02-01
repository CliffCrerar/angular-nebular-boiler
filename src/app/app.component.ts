import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	//templateUrl: './app.component.html',
	template: `
      <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>Page Content</nb-layout-column>
	</nb-layout>
	`,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angularNebularBoiler';
}
