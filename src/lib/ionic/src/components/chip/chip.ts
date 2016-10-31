import { Directive, ElementRef, Input, Renderer } from '@angular/core';

import { Config } from '../../config/config';
import { Ion } from '../ion';

/**
  * @name Chip
  * @module ionic
  * @description
  * Chips represent complex entities in small blocks, such as a contact.
  *
  *
  * @usage
  *
  * ```html
  * <ion-chip>
  *   <ion-label>Default</ion-label>
  * </ion-chip>
  *
  * <ion-chip>
  *   <ion-label color="secondary">Secondary Label</ion-label>
  * </ion-chip>
  *
  * <ion-chip color="secondary">
  *   <ion-label color="dark">Secondary w/ Dark label</ion-label>
  * </ion-chip>
  *
  * <ion-chip color="danger">
  *   <ion-label>Danger</ion-label>
  * </ion-chip>
  *
  * <ion-chip>
  *   <ion-icon name="pin"></ion-icon>
  *   <ion-label>Default</ion-label>
  * </ion-chip>
  *
  * <ion-chip>
  *   <ion-icon name="heart" color="dark"></ion-icon>
  *   <ion-label>Default</ion-label>
  * </ion-chip>
  *
  * <ion-chip>
  *   <ion-avatar>
  *     <img src="img/my-img.png">
  *   </ion-avatar>
  *   <ion-label>Default</ion-label>
  * </ion-chip>
  * ```
  *
  *
  * @advanced
  *
  * ```html
  * <ion-chip #chip1>
  *   <ion-label>Default</ion-label>
  *   <button ion-button clear color="light" (click)="delete(chip1)">
  *     <ion-icon name="close-circle"></ion-icon>
  *   </button>
  * </ion-chip>
  *
  * <ion-chip #chip2>
  *   <ion-icon name="pin" color="primary"></ion-icon>
  *   <ion-label>With Icon</ion-label>
  *   <button ion-button (click)="delete(chip2)">
  *     <ion-icon name="close"></ion-icon>
  *   </button>
  * </ion-chip>
  *
  * <ion-chip #chip3>
  *   <ion-avatar>
  *     <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
  *   </ion-avatar>
  *   <ion-label>With Avatar</ion-label>
  *   <button ion-button clear color="dark" (click)="delete(chip3)">
  *     <ion-icon name="close-circle"></ion-icon>
  *   </button>
  * </ion-chip>
  * ```
  *
  * ```ts
  * @Component({
  *   templateUrl: 'main.html'
  * })
  * class E2EPage {
  *   delete(chip: Element) {
  *     chip.remove();
  *   }
  * }
  * ```
  *
  * @demo /docs/v2/demos/src/chip/
 **/
@Directive({
  selector: 'ion-chip'
})
export class Chip extends Ion {

  /**
   * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
   */
  @Input()
  set color(val: string) {
    this._setColor('chip', val);
  }

  /**
   * @input {string} The mode to apply to this component.
   */
  @Input()
  set mode(val: string) {
    this._setMode('chip', val);
  }

  constructor(config: Config, elementRef: ElementRef, renderer: Renderer) {
    super(config, elementRef, renderer);

    this.mode = config.get('mode');
  }

}
