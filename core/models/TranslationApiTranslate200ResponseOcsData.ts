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
/**
 * 
 * @export
 * @interface TranslationApiTranslate200ResponseOcsData
 */
export interface TranslationApiTranslate200ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof TranslationApiTranslate200ResponseOcsData
     */
    text: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationApiTranslate200ResponseOcsData
     */
    from: string | null;
}

/**
 * Check if a given object implements the TranslationApiTranslate200ResponseOcsData interface.
 */
export function instanceOfTranslationApiTranslate200ResponseOcsData(value: object): value is TranslationApiTranslate200ResponseOcsData {
    if (!('text' in value) || value['text'] === undefined) return false;
    if (!('from' in value) || value['from'] === undefined) return false;
    return true;
}

export function TranslationApiTranslate200ResponseOcsDataFromJSON(json: any): TranslationApiTranslate200ResponseOcsData {
    return TranslationApiTranslate200ResponseOcsDataFromJSONTyped(json, false);
}

export function TranslationApiTranslate200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationApiTranslate200ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'text': json['text'],
        'from': json['from'],
    };
}

export function TranslationApiTranslate200ResponseOcsDataToJSON(value?: TranslationApiTranslate200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'text': value['text'],
        'from': value['from'],
    };
}

