/* tslint:disable */
/* eslint-disable */
/**
 * core-full
 * Core functionality of Nextcloud
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.ts';
import type { TranslationApiTranslate200ResponseOcs } from './TranslationApiTranslate200ResponseOcs.ts';
import {
    TranslationApiTranslate200ResponseOcsFromJSON,
    TranslationApiTranslate200ResponseOcsFromJSONTyped,
    TranslationApiTranslate200ResponseOcsToJSON,
} from './TranslationApiTranslate200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface TranslationApiTranslate200Response
 */
export interface TranslationApiTranslate200Response {
    /**
     * 
     * @type {TranslationApiTranslate200ResponseOcs}
     * @memberof TranslationApiTranslate200Response
     */
    ocs: TranslationApiTranslate200ResponseOcs;
}

/**
 * Check if a given object implements the TranslationApiTranslate200Response interface.
 */
export function instanceOfTranslationApiTranslate200Response(value: object): value is TranslationApiTranslate200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function TranslationApiTranslate200ResponseFromJSON(json: any): TranslationApiTranslate200Response {
    return TranslationApiTranslate200ResponseFromJSONTyped(json, false);
}

export function TranslationApiTranslate200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationApiTranslate200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': TranslationApiTranslate200ResponseOcsFromJSON(json['ocs']),
    };
}

export function TranslationApiTranslate200ResponseToJSON(value?: TranslationApiTranslate200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': TranslationApiTranslate200ResponseOcsToJSON(value['ocs']),
    };
}

