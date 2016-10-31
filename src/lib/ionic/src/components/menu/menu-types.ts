import { Animation } from '../../animations/animation';
import { Menu } from './menu';
import { MenuController } from './menu-controller';
import { Platform } from '../../platform/platform';


/**
 * @private
 * Menu Type
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
export class MenuType {
  ani: Animation = new Animation();
  isOpening: boolean;

  setOpen(shouldOpen: boolean, animated: boolean, done: Function) {
    let ani = this.ani
      .onFinish(done, true)
      .reverse(!shouldOpen);
    if (animated) {
      ani.play();
    } else {
      ani.play({ duration: 0 });
    }
  }

  setProgressStart(isOpen: boolean) {
    this.isOpening = !isOpen;

    // the cloned animation should not use an easing curve during seek
    this.ani
        .reverse(isOpen)
        .progressStart();
  }

  setProgessStep(stepValue: number) {
    // adjust progress value depending if it opening or closing
    this.ani.progressStep(stepValue);
  }

  setProgressEnd(shouldComplete: boolean, currentStepValue: number, done: Function) {
    let isOpen = (this.isOpening && shouldComplete);
    if (!this.isOpening && !shouldComplete) {
      isOpen = true;
    }

    this.ani.onFinish(() => {
      this.isOpening = false;
      done(isOpen);
    }, true);

    this.ani.progressEnd(shouldComplete, currentStepValue);
  }

  destroy() {
    this.ani && this.ani.destroy();
  }

}


/**
 * @private
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
class MenuRevealType extends MenuType {
  constructor(menu: Menu, platform: Platform) {
    super();

    let openedX = (menu.width() * (menu.side === 'right' ? -1 : 1)) + 'px';

    this.ani
        .easing('ease')
        .duration(250);

    let contentOpen = new Animation(menu.getContentElement());
    contentOpen.fromTo('translateX', '0px', openedX);
    this.ani.add(contentOpen);
  }
}
MenuController.registerType('reveal', MenuRevealType);


/**
 * @private
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
class MenuPushType extends MenuType {
  constructor(menu: Menu, platform: Platform) {
    super();

    this.ani
        .easing('ease')
        .duration(250);

    let contentOpenedX: string, menuClosedX: string, menuOpenedX: string;

    if (menu.side === 'right') {
      // right side
      contentOpenedX = -menu.width() + 'px';
      menuClosedX = menu.width() + 'px';
      menuOpenedX = '0px';

    } else {
      contentOpenedX = menu.width() + 'px';
      menuOpenedX = '0px';
      menuClosedX = -menu.width() + 'px';
    }

    let menuAni = new Animation(menu.getMenuElement());
    menuAni.fromTo('translateX', menuClosedX, menuOpenedX);
    this.ani.add(menuAni);

    let contentApi = new Animation(menu.getContentElement());
    contentApi.fromTo('translateX', '0px', contentOpenedX);
    this.ani.add(contentApi);
  }
}
MenuController.registerType('push', MenuPushType);


/**
 * @private
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
class MenuOverlayType extends MenuType {
  constructor(menu: Menu, platform: Platform) {
    super();

    this.ani
        .easing('ease')
        .duration(250);

    let closedX: string, openedX: string;
    if (menu.side === 'right') {
      // right side
      closedX = 8 + menu.width() + 'px';
      openedX = '0px';

    } else {
      // left side
      closedX = -(8 + menu.width()) + 'px';
      openedX = '0px';
    }

    let menuAni = new Animation(menu.getMenuElement());
    menuAni.fromTo('translateX', closedX, openedX);
    this.ani.add(menuAni);

    let backdropApi = new Animation(menu.getBackdropElement());
    backdropApi.fromTo('opacity', 0.01, 0.35);
    this.ani.add(backdropApi);
  }
}
MenuController.registerType('overlay', MenuOverlayType);
