import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Optional, Inject, Renderer, ViewEncapsulation } from '@angular/core';

import { Config } from '../../config/config';
import { Ion } from '../ion';
import { Navbar } from '../navbar/navbar';
import { Toolbar } from './toolbar';


/**
 * @name Title
 * @description
 * `ion-title` is a component that sets the title of the `Toolbar` or `Navbar`
 *
 * @usage
 *
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <ion-title>Settings</ion-title>
 *   </ion-navbar>
 *
 * </ion-header>
 * ```
 *
 * Or to create a navbar with a toolbar as a subheader:
 *
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <ion-title>Main Heder</ion-title>
 *   </ion-navbar>
 *
 *   <ion-toolbar>
 *     <ion-title>Subheader</ion-title>
 *   </ion-toolbar>
 *
 * </ion-header>
 * ```
 *
 * @demo /docs/v2/demos/src/title/
 */
@Component({
  selector: 'ion-title',
  template:
    '<div class="toolbar-title" [ngClass]="\'toolbar-title-\' + _mode">' +
      '<ng-content></ng-content>' +
    '</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarTitle extends Ion {
  constructor(
    config: Config,
    elementRef: ElementRef,
    renderer: Renderer,
    @Optional() toolbar: Toolbar,
    @Optional() @Inject(forwardRef(() => Navbar)) navbar: Navbar
  ) {
    super(config, elementRef, renderer);
    this._setMode('title', this._mode = config.get('mode'));

    toolbar && toolbar._setTitle(this);
    navbar && navbar._setTitle(this);
  }

  /**
   * @private
   */
  getTitleText() {
    return this._elementRef.nativeElement.textContent;
  }
}
