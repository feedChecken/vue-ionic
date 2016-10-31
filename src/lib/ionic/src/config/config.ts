/**
* @ngdoc service
* @name Config
* @module ionic
* @description
* Config allows you to set the modes of your components
*/
import { OpaqueToken } from '@angular/core';
import { Platform } from '../platform/platform';
import { QueryParams } from '../platform/query-params';
import { isObject, isDefined, isFunction, isArray } from '../util/util';

/**
 * @name Config
 * @demo /docs/v2/demos/src/config/
 * @description
 * The Config lets you configure your entire app or specific platforms.
 * You can set the tab placement, icon mode, animations, and more here.
 *
 * ```ts
 * import { IonicApp, IonicModule } from 'ionic-angular';
 *
 * @NgModule({
 *   declarations: [ MyApp ],
 *   imports: [
 *     IonicModule.forRoot(MyApp, {
 *       backButtonText: 'Go Back',
 *       iconMode: 'ios',
 *       modalEnter: 'modal-slide-in',
 *       modalLeave: 'modal-slide-out',
 *       tabsPlacement: 'bottom',
 *       pageTransition: 'ios'
 *     }, {}
 *   )],
 *   bootstrap: [IonicApp],
 *   entryComponents: [ MyApp ],
 *   providers: []
 * })
 * ```
 *
 *
 * Config can be overwritten at multiple levels allowing for more granular configuration.
 * Below is an example where an app can override any setting we want based on a platform.
 *
 * ```ts
 * import { IonicModule } from 'ionic-angular';
 *
 * @NgModule({
 *   ...
 *   imports: [
 *     IonicModule.forRoot(MyApp, {
 *       tabsPlacement: 'bottom',
 *       platforms: {
 *         ios: {
 *           tabsPlacement: 'top',
 *         }
 *       }
 *     }, {}
 *   )],
 *   ...
 * })
 * ```
 *
 * We could also configure these values at a component level. Take `tabsPlacement`,
 * we can configure this as a property on our `ion-tabs`.
 *
 * ```html
 * <ion-tabs tabsPlacement="top">
 *   <ion-tab tabTitle="Dash" tabIcon="pulse" [root]="tabRoot"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * The last way we could configure is through URL query strings. This is useful for testing
 * while in the browser. Simply add `?ionic<PROPERTYNAME>=<value>` to the url.
 *
 * ```bash
 * http://localhost:8100/?ionicTabsPlacement=bottom
 * ```
 *
 * Any value can be added to config, and looked up at a later in any component.
 *
 * ```js
 * config.set('ios', 'favoriteColor', 'green');
 *
 * // from any page in your app:
 * config.get('favoriteColor'); // 'green' when iOS
 * ```
 *
 *
 * A config value can come from anywhere and be anything, but there are default
 * values for each mode. The [theming](../../../theming/platform-specific-styles/)
 * documentation has a chart of the default mode configuration. The following
 * chart displays each property with a description of what it controls.
 *
 *
 * | Config Property          | Type                | Details                                                                                                                                          |
 * |--------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
 * | `activator`              | `string`            | Used for buttons, changes the effect of pressing on a button. Available options: `"ripple"`, `"highlight"`.                                      |
 * | `actionSheetEnter`       | `string`            | The name of the transition to use while an action sheet is presented.                                                                            |
 * | `actionSheetLeave`       | `string`            | The name of the transition to use while an action sheet is dismissed.                                                                            |
 * | `alertEnter`             | `string`            | The name of the transition to use while an alert is presented.                                                                                   |
 * | `alertLeave`             | `string`            | The name of the transition to use while an alert is dismissed.                                                                                   |
 * | `backButtonText`         | `string`            | The text to display by the back button icon in the navbar.                                                                                       |
 * | `backButtonIcon`         | `string`            | The icon to use as the back button icon.                                                                                                         |
 * | `iconMode`               | `string`            | The mode to use for all icons throughout the application. Available options: `"ios"`, `"md"`                                                     |
 * | `loadingEnter`           | `string`            | The name of the transition to use while a loading indicator is presented.                                                                        |
 * | `loadingLeave`           | `string`            | The name of the transition to use while a loading indicator is dismissed.                                                                        |
 * | `menuType`               | `string`            | Type of menu to display. Available options: `"overlay"`, `"reveal"`, `"push"`.                                                                   |
 * | `modalEnter`             | `string`            | The name of the transition to use while a modal is presented.                                                                                    |
 * | `modalLeave`             | `string`            | The name of the transition to use while a modal is dismiss.                                                                                      |
 * | `mode`                   | `string`            | The mode to use throughout the application.                                                                                     |
 * | `pageTransition`         | `string`            | The name of the transition to use while changing pages.                                                                                          |
 * | `pageTransitionDelay`    | `number`            | The delay in milliseconds before the transition starts while changing pages.                                                                     |
 * | `pickerEnter`            | `string`            | The name of the transition to use while a picker is presented.                                                                                   |
 * | `pickerLeave`            | `string`            | The name of the transition to use while a picker is dismissed.                                                                                   |
 * | `popoverEnter`           | `string`            | The name of the transition to use while a popover is presented.                                                                                  |
 * | `popoverLeave`           | `string`            | The name of the transition to use while a popover is dismissed.                                                                                  |
 * | `spinner`                | `string`            | The default spinner to use when a name is not defined.                                                                                           |
 * | `swipeBackEnabled`       | `boolean`           | Whether native iOS swipe to go back functionality is enabled.
 * | `tabsHighlight`          | `boolean`           | Whether to show a highlight line under the tab when it is selected.                                                                              |
 * | `tabsLayout`             | `string`            | The layout to use for all tabs. Available options: `"icon-top"`, `"icon-left"`, `"icon-right"`, `"icon-bottom"`, `"icon-hide"`, `"title-hide"`.  |
 * | `tabsPlacement`          | `string`            | The position of the tabs relative to the content. Available options: `"top"`, `"bottom"`                                                         |
 * | `tabsHideOnSubPages`     | `boolean`           | Whether to hide the tabs on child pages or not. If `true` it will not show the tabs on child pages.                                              |
 * | `toastEnter`             | `string`            | The name of the transition to use while a toast is presented.                                                                                    |
 * | `toastLeave`             | `string`            | The name of the transition to use while a toast is dismissed.                                                                                    |
 *
**/
export class Config {
  private _c: any = {};
  private _s: any = {};
  private _qp: QueryParams;
  private _modes: any = {};
  private _trns: any = {};

  /**
   * @private
   */
  platform: Platform;

  /**
   * @private
   */
  init(config: any, queryParams: QueryParams, platform: Platform) {
    this._s = config && isObject(config) && !isArray(config) ? config : {};
    this._qp = queryParams;
    this.platform = platform;
  }


  /**
   * @name get
   * @description
   * Returns a single config value, given a key.
   *
   * @param {string} [key] - the key for the config value
   * @param {any} [fallbackValue] - a fallback value to use when the config
   * value was not found, or is config value is `null`. Fallback value
   *  defaults to `null`.
   */
  get(key: string, fallbackValue: any = null): any {

    if (!isDefined(this._c[key])) {
      if (!isDefined(key)) {
        throw 'config key is not defined';
      }

      // if the value was already set this will all be skipped
      // if there was no user config then it'll check each of
      // the user config's platforms, which already contains
      // settings from default platform configs

      let userPlatformValue: any = undefined;
      let userDefaultValue: any = this._s[key];
      let userPlatformModeValue: any = undefined;
      let userDefaultModeValue: any = undefined;
      let platformValue: any = undefined;
      let platformModeValue: any = undefined;
      let configObj: any = null;

      if (this.platform) {
        const queryStringValue = this._qp.get('ionic' + key);
        if (isDefined(queryStringValue)) {
          return this._c[key] = (queryStringValue === 'true' ? true : queryStringValue === 'false' ? false : queryStringValue);
        }

        // check the platform settings object for this value
        // loop though each of the active platforms

        // array of active platforms, which also knows the hierarchy,
        // with the last one the most important
        const activePlatformKeys = this.platform.platforms();

        // loop through all of the active platforms we're on
        for (var i = 0, ilen = activePlatformKeys.length; i < ilen; i++) {

          // get user defined platform values
          if (this._s.platforms) {
            configObj = this._s.platforms[activePlatformKeys[i]];
            if (configObj) {
              if (isDefined(configObj[key])) {
                userPlatformValue = configObj[key];
              }
              configObj = this.getModeConfig(configObj.mode);
              if (configObj && isDefined(configObj[key])) {
                userPlatformModeValue = configObj[key];
              }
            }
          }

          // get default platform's setting
          configObj = this.platform.getPlatformConfig(activePlatformKeys[i]);
          if (configObj && configObj.settings) {

            if (isDefined(configObj.settings[key])) {
              // found a setting for this platform
              platformValue = configObj.settings[key];
            }

            configObj = this.getModeConfig(configObj.settings.mode);
            if (configObj && isDefined(configObj[key])) {
              // found setting for this platform's mode
              platformModeValue = configObj[key];
            }

          }

        }

      }

      configObj = this.getModeConfig(this._s.mode);
      if (configObj && isDefined(configObj[key])) {
        userDefaultModeValue = configObj[key];
      }

      // cache the value
      this._c[key] = isDefined(userPlatformValue) ? userPlatformValue :
                     isDefined(userDefaultValue) ? userDefaultValue :
                     isDefined(userPlatformModeValue) ? userPlatformModeValue :
                     isDefined(userDefaultModeValue) ? userDefaultModeValue :
                     isDefined(platformValue) ? platformValue :
                     isDefined(platformModeValue) ? platformModeValue :
                     null;
    }

    // return key's value
    // either it came directly from the user config
    // or it was from the users platform configs
    // or it was from the default platform configs
    // in that order
    let rtnVal: any = this._c[key];
    if (isFunction(rtnVal)) {
      rtnVal = rtnVal(this.platform);
    }

    return (rtnVal !== null ? rtnVal : fallbackValue);
  }


  /**
   * @name getBoolean
   * @description
   * Same as `get()`, however always returns a boolean value. If the
   * value from `get()` is `null`, then it'll return the `fallbackValue`
   * which defaults to `false`. Otherwise, `getBoolean()` will return
   * if the config value is truthy or not. It also returns `true` if
   * the config value was the string value `"true"`.
   * @param {string} [key] - the key for the config value
   * @param {boolean} [fallbackValue] - a fallback value to use when the config
   * value was `null`. Fallback value defaults to `false`.
   */
  getBoolean(key: string, fallbackValue: boolean = false): boolean {
    const val = this.get(key);
    if (val === null) {
      return fallbackValue;
    }
    if (typeof val === 'string') {
      return val === 'true';
    }
    return !!val;
  }


  /**
   * @name getNumber
   * @description
   * Same as `get()`, however always returns a number value. Uses `parseFloat()`
   * on the value received from `get()`. If the result from the parse is `NaN`,
   * then it will return the value passed to `fallbackValue`. If no fallback
   * value was provided then it'll default to returning `NaN` when the result
   * is not a valid number.
   * @param {string} [key] - the key for the config value
   * @param {number} [fallbackValue] - a fallback value to use when the config
   * value turned out to be `NaN`. Fallback value defaults to `NaN`.
   */
  getNumber(key: string, fallbackValue: number = NaN): number {
    const val = parseFloat( this.get(key) );
    return isNaN(val) ? fallbackValue : val;
  }


  /**
   * @name set
   * @description
   * Sets a single config value.
   *
   * @param {string} [platform] - The platform (either 'ios' or 'android') that the config value should apply to. Leaving this blank will apply the config value to all platforms.
   * @param {string} [key] - The key used to look up the value at a later point in time.
   * @param {string} [value] - The config value being stored.
   */
  set(...args: any[]) {
    const arg0 = args[0];
    const arg1 = args[1];

    switch (args.length) {
      case 2:
        // set('key', 'value') = set key/value pair
        // arg1 = value
        this._s[arg0] = arg1;
        delete this._c[arg0]; // clear cache
        break;

      case 3:
        // setting('ios', 'key', 'value') = set key/value pair for platform
        // arg0 = platform
        // arg1 = key
        // arg2 = value
        this._s.platforms = this._s.platforms || {};
        this._s.platforms[arg0] = this._s.platforms[arg0] || {};
        this._s.platforms[arg0][arg1] = args[2];
        delete this._c[arg1]; // clear cache
        break;

    }

    return this;
  }

  /**
   * @private
   * @name settings()
   * @description
   */
  settings(arg0?: any, arg1?: any) {
    switch (arguments.length) {

      case 0:
        return this._s;

      case 1:
        // settings({...})
        this._s = arg0;
        this._c = {}; // clear cache
        break;

      case 2:
        // settings('ios', {...})
        this._s.platforms = this._s.platforms || {};
        this._s.platforms[arg0] = arg1;
        this._c = {}; // clear cache
        break;
    }

    return this;
  }

  /**
   * @private
   */
  setModeConfig(modeName: string, modeConfig: any) {
    this._modes[modeName] = modeConfig;
  }

  /**
   * @private
   */
  getModeConfig(modeName: string): any {
    return this._modes[modeName] || null;
  }

  /**
   * @private
   */
  setTransition(trnsName: string, trnsClass: any) {
    this._trns[trnsName] = trnsClass;
  }

  /**
   * @private
   */
  getTransition(trnsName: string): any {
    return this._trns[trnsName] || null;
  }

}

/**
 * @private
 */
export const ConfigToken = new OpaqueToken('USERCONFIG');

/**
 * @private
 */
export function setupConfig(userConfig: any, queryParams: QueryParams, platform: Platform): Config {
  const config = new Config();
  config.init(userConfig, queryParams, platform);
  return config;
}
