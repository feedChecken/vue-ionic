import { Injectable, Pipe, PipeTransform } from '@angular/core';

import { Translate } from './translate';

/**
 * @private
 * The Translate pipe makes it easy to translate strings.
 *
 * @usage
 * Translate using the current language or language set through Translate.setLanguage
 * {{ 'Please enter your location' | translate }}
 *
 * Translate using a specific language
 * {{ 'Please enter your location' | translate:"de" }}
 */
@Pipe({name: 'translate'})
@Injectable()
export class TranslatePipe implements PipeTransform {
  private translate: any = {};

  constructor(translate: Translate) {
    this.translate = translate;
  }
  transform(value: any, args: any) {
    let lang: any;
    if (args.length > 0) {
      lang = args[0];
    }
    return this.translate.translate(value, lang);
  }

  supports(obj: any) { return true; }
}
