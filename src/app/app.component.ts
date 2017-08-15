import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Share } from './share';
import { ShareService } from './share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShareService]
})
export class AppComponent {
  title = 'Angular 4 Learning Platform';
}
