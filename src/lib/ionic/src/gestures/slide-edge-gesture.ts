import { SlideGesture } from './slide-gesture';
import { defaults } from '../util/util';
import { pointerCoord, windowDimensions } from '../util/dom';

/**
 * @private
 */
export class SlideEdgeGesture extends SlideGesture {
  public edges: Array<string>;
  public maxEdgeStart: any;
  private _d: any;

  constructor(element: HTMLElement, opts: any = {}) {
    defaults(opts, {
      edge: 'left',
      maxEdgeStart: 50
    });
    super(element, opts);
    // Can check corners through use of eg 'left top'
    this.edges = opts.edge.split(' ');
    this.maxEdgeStart = opts.maxEdgeStart;
  }

  canStart(ev: any): boolean {
    let coord = pointerCoord(ev);
    this._d = this.getContainerDimensions();
    return this.edges.every(edge => this._checkEdge(edge, coord));
  }

  getContainerDimensions() {
    return {
      left: 0,
      top: 0,
      width: windowDimensions().width,
      height: windowDimensions().height
    };
  }

  _checkEdge(edge: string, pos: any) {
    switch (edge) {
      case 'left': return pos.x <= this._d.left + this.maxEdgeStart;
      case 'right': return pos.x >= this._d.width - this.maxEdgeStart;
      case 'top': return pos.y <= this._d.top + this.maxEdgeStart;
      case 'bottom': return pos.y >= this._d.height - this.maxEdgeStart;
    }
  }

}
