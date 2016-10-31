import { Attribute, Directive, ElementRef, Renderer } from '@angular/core';

import { Config } from '../../config/config';
import { Ion } from '../ion';

/**
 * @private
 */
@Directive({
  selector: 'ion-list-header'
})
export class ListHeader extends Ion {
  constructor(config: Config, renderer: Renderer, elementRef: ElementRef, @Attribute('id') private _id: string) {
    super(config, elementRef, renderer);
    this._setMode('list-header', config.get('mode'));
  }

  get id(): string {
    return this._id;
  }

  set id(val: string) {
    this._id = val;
    this.setElementAttribute('id', val);
  }
}
