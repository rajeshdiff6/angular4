import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

import { Share } from './share';
import { ShareService } from './share.service';

@Component({
  selector: 'my-shares',
  templateUrl: './shares.component.html',
  styleUrls: [ './shares.component.css' ],
  providers: [ShareService]
})
export class SharesComponent implements OnInit {
  shares: Share[];
  color: string = 'Red';

  constructor(private shareService: ShareService,private router: Router) { }

  getShares(): void {
	  this.shareService.getShares().then(shares => this.shares = shares);
	}

  ngOnInit(): void {
	  this.getShares();
	}
}


