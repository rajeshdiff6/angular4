import { Injectable } from '@angular/core';

import { Share } from './share';
import { SHARES } from './mock-shares';

@Injectable()
export class ShareService {
  getShares(): Promise<Share[]> {
    return Promise.resolve(SHARES);
  }
}