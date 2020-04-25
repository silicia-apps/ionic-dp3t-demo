import { IStatus } from '@silicia/capacitor-dp3t';

export class Dp3tStateModel {
  data: IStatus;
  constructor() {
    this.data = {
      advertising: false,
      isActive: false,
      lastSyncUpdate: 0,
      numberOfContacts: 0,
      wasContactExposed: false,
      receiving: false,
      errors : '',
    };
  }
}
