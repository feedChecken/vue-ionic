import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Input, QueryList, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';

import { Button } from '../button/button';
import { Config } from '../../config/config';
import { Form } from '../../util/form';
import { Icon } from '../icon/icon';
import { Ion } from '../ion';
import { Label } from '../label/label';


/**
 * @name Item
 * @description
 * An item can contain text, images, and anything else. Generally it is placed in a list with other
 * items. It can easily be swiped, deleted, reordered, edited, and more. An item is only required to
 * be in a [List](../../list/List) if manipulating the item via gestures is required. It requires an
 * [ItemSliding](../ItemSliding) wrapper element in order to be swiped.
 *
 *
 * ## Common Usage
 * There are a few elements that are considered items, but not all of them are styled to look the same.
 * The basic item can be written as an `<ion-item>` element or it can be added to any element by adding
 * `ion-item` as an attribute. List headers and item dividers, although styled differently, are also items
 * and can be written as `<ion-list-header>` and `<ion-item-divider>`, respectively.
 *
 * ### As an Element
 * A basic item should be written as a `<ion-item>` element when it is not clickable.
 *
 * ```html
 * <ion-item>
 *   Item
 * </ion-item>
 * ```
 *
 * A list header should be written as `<ion-list-header>`.
 *
 * ```html
 * <ion-list-header>
 *   List Header
 * </ion-list-header>
 * ```
 *
 * An item divider should be written as `<ion-item-divider>`.
 *
 * ```html
 * <ion-item-divider>
 *   Item Divider
 * </ion-item-divider>
 * ```
 *
 * ### As an Attribute
 * The attribute `ion-item` should be added to a `<button>` when the item can be clicked or tapped. It
 * should be added to an `<a>` element when the item needs to contain a `href`. It can be added as an
 * attribute to any element to take on the item styling.
 *
 * ```html
 * <button ion-item (click)="buttonClick()">
 *   Button Item
 * </button>
 *
 * <a ion-item href="https://www.ionicframework.com">
 *   Anchor Item
 * </a>
 * ```
 *
 * Note: do not add `ion-item` as an attribute to an `<ion-list-header>` or `<ion-item-divider>` element
 * as they are already items and their styling will be changed to look like a basic item.
 *
 * ## Detail Arrows
 * By default, `<button>` and `<a>` elements with the `ion-item` attribute will display a right arrow icon
 * on `ios` mode. To hide the right arrow icon on either of these elements, add the `detail-none` attribute
 * to the item. To show the right arrow icon on an element that doesn't display it naturally, add the
 * `detail-push` attribute to the item.
 *
 * ```html
 * <ion-item detail-push>
 *   Item with Detail Arrow
 * </ion-item>
 *
 * <button ion-item (click)="buttonClick()">
 *   Button Item with Detail Arrow
 * </button>
 *
 * <a ion-item detail-none href="https://www.ionicframework.com">
 *   Anchor Item with no Detail Arrow
 * </a>
 * ```
 *
 * This feature is not enabled by default for `md` and `wp` modes, but it can be enabled by setting the
 * Sass variables `$item-md-detail-push-show` and `$item-wp-detail-push-show`, respectively, to `true`.
 * It can also be disabled for ios by setting `$item-ios-detail-push-show` to `false`. See the
 * [theming documentation](http://ionicframework.com/docs/v2/theming/overriding-ionic-variables/) for
 * more information on overriding Sass variables.
 *
 *
 * ## Item Placement
 * Items rely heavily on content projection to position content. The item grabs content based on the
 * element or attribute and positions it that way. This logic makes it possible to write a complex
 * item with simple, understandable markup without having to worry about styling and positioning
 * the elements.
 *
 * The below chart details the attributes item looks for and where it will place the element with
 * that attribute inside of the item:
 *
 *  | Attribute      | Description                                                                                          |
 *  |----------------|----------------------------------------------------------------------------------------------------- |
 *  | `item-left`    | Placed to the left of all other elements, outside of the inner item.                                 |
 *  | `item-right`   | Placed to the right of all other elements, inside of the inner item, outside of the input wrapper.   |
 *  | `item-content` | Placed to the right of any `ion-label`, inside of the input wrapper.                                 |
 *
 * ### Checkboxes, Radios and Toggles
 * [Checkboxes](../../checkbox/Checkbox) are positioned in the same place as the `item-left` attribute.
 * [Radios](../../radio/RadioButton) and [Toggles](../../toggle/Toggle) are positioned in the same place
 * as the `item-right` attribute. All of these components can be positioned differently by adding the
 * `item-left` or `item-right` attribute.
 *
 * ### Content and Inputs
 * A [Label](../../label/Label) is placed inside of the item to the left of all content and inputs. The
 * following components are all placed in the same position as the `item-content` attribute: [Select](../../select/Select),
 * [Input](../../input/Input), [TextArea](../../input/TextArea), [DateTime](../../datetime/DateTime), and
 * [Range](../../range/Range).
 *
 * Any element directly placed inside of an `<ion-item>` that does not have one of the previously mentioned
 * attributes and isn't one of the above elements will be placed inside of a [Label](../../label/Label).
 *
 * ### Text Alignment
 * By default, Items will align text to the left and add an ellipsis when the text is wider than the item.
 * See the [Utility Attributes Documentation](../../../../theming/css-utilities/) for attributes that can
 * be added to `ion-item` to transform the text.
 *
 * @usage
 *
 * ```html
 * <ion-list>
 *
 *   <ion-list-header>
 *     Header
 *   </ion-list-header>
 *
 *   <ion-item>
 *     Item
 *   </ion-item>
 *
 *   <ion-item detail-push>
 *     Item with Detail Arrow
 *   </ion-item>
 *
 *   <button ion-item (click)="buttonClick()">
 *     Button Item
 *   </button>
 *
 *   <ion-item-divider>
 *     Item Divider
 *   </ion-item-divider>
 *
 *   <button ion-item detail-none (click)="buttonClick()">
 *     Button Item with no Detail Arrow
 *   </button>
 *
 *   <a ion-item href="https://www.ionicframework.com">
 *     Anchor Item
 *   </a>
 *
 *   <ion-item no-lines>
 *     Item with no border
 *   </ion-item>
 *
 *   <ion-item text-wrap>
 *     Multiline text that should wrap when it is too long
 *     to fit on one line in the item.
 *   </ion-item>
 *
 * </ion-list>
 * ```
 *
 *
 * @advanced
 *
 * ```html
 * <ion-list>
 *
 *   <!-- List header with buttons on each side -->
 *   <ion-list-header>
 *     <button ion-button item-left (click)="buttonClick()">Button</button>
 *     List Header
 *     <button ion-button outline item-right (click)="buttonClick()">Outline</button>
 *   </ion-list-header>
 *
 *   <!-- Loops through and creates multiple items -->
 *   <ion-item *ngFor="let item of items">
 *     Item {% raw %}{{item}}{% endraw %}
 *   </ion-item>
 *
 *   <!-- Button item with an icon on the left -->
 *   <button ion-item>
 *     <ion-icon name="star" item-left></ion-icon>
 *     Button Item
 *   </button>
 *
 *   <!-- Item with a label and content -->
 *   <ion-item>
 *     <ion-label>
 *       Item Label
 *     </ion-label>
 *     <div item-content>
 *       Item Content next to the label
 *     </div>
 *   </ion-item>
 *
 *   <!-- Item with left and right buttons -->
 *   <ion-item>
 *     <button ion-button item-left (click)="buttonClick()">Button</button>
 *     Item
 *     <button ion-button outline item-right (click)="buttonClick()">Outline</button>
 *   </ion-item>
 *
 *   <!-- Item divider with a right button -->
 *   <ion-item-divider>
 *     Item Divider
 *     <button ion-button item-right>Button</button>
 *   </ion-item-divider>
 *
 *   <!-- Disabled button item with left and right buttons -->
 *   <button ion-item disabled>
 *     <button ion-button item-left (click)="buttonClick()">
 *       <ion-icon name="home"></ion-icon>
 *       Left Icon
 *     </button>
 *     Disabled Button Item
 *     <button ion-button outline item-right (click)="buttonClick()">
 *       <ion-icon name="star"></ion-icon>
 *       Left Icon
 *     </button>
 *   </button>
 *
 *   <!-- Item with an avatar on the left and button on the right -->
 *   <ion-item>
 *     <ion-avatar item-left>
 *       <img src="img/my-avatar.png">
 *     </ion-avatar>
 *     Avatar Item
 *     <button ion-button outline item-right>View</button>
 *   </ion-item>
 *
 *   <!-- Item with a thumbnail on the right -->
 *   <ion-item>
 *     <h2>Item</h2>
 *     <p>Item Paragraph</p>
 *     <ion-thumbnail item-right>
 *       <img src="img/my-thumbnail.png">
 *     </ion-thumbnail>
 *   </ion-item>
 *
 *   <!-- Sliding item -->
 *   <ion-item-sliding>
 *     <ion-item>
 *       Item
 *     </ion-item>
 *     <ion-item-options>
 *       <button ion-button color="primary" (click)="archive()">Archive</button>
 *     </ion-item-options>
 *   </ion-item-sliding>
 *
 * </ion-list>
 * ```
 *
 *
 * @demo /docs/v2/demos/src/item/
 * @see {@link /docs/v2/components#lists List Component Docs}
 * @see {@link ../../list/List List API Docs}
 * @see {@link ../ItemSliding ItemSliding API Docs}
 */
@Component({
  selector: 'ion-list-header,ion-item,[ion-item],ion-item-divider',
  template:
    '<ng-content select="[item-left],ion-checkbox:not([item-right])"></ng-content>' +
    '<div class="item-inner">' +
      '<div class="input-wrapper">' +
        '<ng-content select="ion-label"></ng-content>' +
        '<ion-label *ngIf="_viewLabel">' +
          '<ng-content></ng-content>' +
        '</ion-label>' +
        '<ng-content select="ion-select,ion-input,ion-textarea,ion-datetime,ion-range,[item-content]"></ng-content>' +
      '</div>' +
      '<ng-content select="[item-right],ion-radio,ion-toggle"></ng-content>' +
      '<ion-reorder></ion-reorder>' +
    '</div>' +
    '<div class="button-effect"></div>',
  host: {
    'class': 'item'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class Item extends Ion {
  _ids: number = -1;
  _inputs: Array<string> = [];
  _label: Label;
  _viewLabel: boolean = true;

  /**
   * @private
   */
  id: string;

  /**
   * @private
   */
  labelId: string = null;

  /**
   * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
   */
  @Input()
  set color(val: string) {
    this._updateColor(val);
  }

  /**
   * @input {string} The mode to apply to this component.
   */
  @Input()
  set mode(val: string) {
    this._setMode('item', val);
  }

  constructor(form: Form, config: Config, elementRef: ElementRef, renderer: Renderer) {
    super(config, elementRef, renderer);

    this.mode = config.get('mode');
    this.id = form.nextId().toString();
  }

  /**
   * @private
   */
  registerInput(type: string) {
    this._inputs.push(type);
    return this.id + '-' + (++this._ids);
  }

  /**
   * @private
   */
  ngAfterContentInit() {
    if (this._viewLabel && this._inputs.length) {
      let labelText = this.getLabelText().trim();
      this._viewLabel = (labelText.length > 0);
    }

    if (this._inputs.length > 1) {
      this.setElementClass('item-multiple-inputs', true);
    }
  }

  _updateColor(newColor: string, colorClass?: string) {
    colorClass = colorClass || 'item'; // item-radio
    this._setColor(colorClass, newColor);
  }

  /**
   * @private
   */
  getLabelText(): string {
    return this._label ? this._label.text : '';
  }

  /**
   * @private
   */
  @ContentChild(Label)
  set contentLabel(label: Label) {
    if (label) {
      this._label = label;
      this.labelId = label.id = ('lbl-' + this.id);
      if (label.type) {
        this.setElementClass('item-label-' + label.type, true);
      }
      this._viewLabel = false;
    }
  }

  /**
   * @private
   */
  @ViewChild(Label)
  set viewLabel(label: Label) {
    if (!this._label) {
      this._label = label;
    }
  }

  /**
   * @private
   */
  @ContentChildren(Button)
  set _buttons(buttons: QueryList<Button>) {
    buttons.forEach(button => {
      if (!button._size) {
        button.setElementClass('item-button', true);
      }
    });
  }

  /**
   * @private
   */
  @ContentChildren(Icon)
  set _icons(icons: QueryList<Icon>) {
    icons.forEach(icon => {
      icon.setElementClass('item-icon', true);
    });
  }

}

/**
 * @private
 */
@Directive({
  selector: 'ion-item,[ion-item]',
  host: {
    'class': 'item-block'
  }
})
export class ItemContent {}


/**
  * @private
  */
@Directive({
  selector: 'ion-item-group'
})
export class ItemGroup {}
