import { Animation } from '../../animations/animation';
import { PageTransition } from '../../transitions/page-transition';
import { windowDimensions } from '../../util/dom';


/**
 * Animations for modals
 */
export class ModalSlideIn extends PageTransition {
  init() {
    super.init();
    const ele: HTMLElement = this.enteringView.pageRef().nativeElement;
    const backdropEle = ele.querySelector('ion-backdrop');
    const backdrop = new Animation(backdropEle);
    const wrapper = new Animation(ele.querySelector('.modal-wrapper'));

    backdrop.fromTo('opacity', 0.01, 0.4);
    wrapper.fromTo('translateY', '100%', '0%');

    this
      .element(this.enteringView.pageRef())
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .duration(400)
      .add(backdrop)
      .add(wrapper);
  }
}


export class ModalSlideOut extends PageTransition {
  init() {
    super.init();
    const ele: HTMLElement = this.leavingView.pageRef().nativeElement;
    let backdrop = new Animation(ele.querySelector('ion-backdrop'));
    let wrapperEle = <HTMLElement>ele.querySelector('.modal-wrapper');
    let wrapperEleRect = wrapperEle.getBoundingClientRect();
    let wrapper = new Animation(wrapperEle);

    // height of the screen - top of the container tells us how much to scoot it down
    // so it's off-screen
    let screenDimensions = windowDimensions();
    wrapper.fromTo('translateY', '0px', `${screenDimensions.height - wrapperEleRect.top}px`);
    backdrop.fromTo('opacity', 0.4, 0.0);

    this
      .element(this.leavingView.pageRef())
      .easing('ease-out')
      .duration(250)
      .add(backdrop)
      .add(wrapper);
  }
}


export class ModalMDSlideIn extends PageTransition {
  init() {
    super.init();
    const ele: HTMLElement = this.enteringView.pageRef().nativeElement;
    const backdrop = new Animation(ele.querySelector('ion-backdrop'));
    const wrapper = new Animation(ele.querySelector('.modal-wrapper'));

    backdrop.fromTo('opacity', 0.01, 0.4);
    wrapper.fromTo('translateY', '40px', '0px');
    wrapper.fromTo('opacity', 0.01, 1);

    const DURATION = 280;
    const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
    this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
      .add(backdrop)
      .add(wrapper);
  }
}


export class ModalMDSlideOut extends PageTransition {
  init() {
    super.init();
    const ele: HTMLElement = this.leavingView.pageRef().nativeElement;
    const backdrop = new Animation(ele.querySelector('ion-backdrop'));
    const wrapper = new Animation(ele.querySelector('.modal-wrapper'));

    backdrop.fromTo('opacity', 0.4, 0.0);
    wrapper.fromTo('translateY', '0px', '40px');
    wrapper.fromTo('opacity', 0.99, 0);

    this
      .element(this.leavingView.pageRef())
      .duration(200)
      .easing('cubic-bezier(0.47,0,0.745,0.715)')
      .add(wrapper)
      .add(backdrop);
  }
}
