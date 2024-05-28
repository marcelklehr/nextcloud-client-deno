/* tslint:disable */
/* eslint-disable */
/**
 * core
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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta';
import type { TextProcessingApiTaskTypes200ResponseOcsData } from './TextProcessingApiTaskTypes200ResponseOcsData.ts';
import {
    TextProcessingApiTaskTypes200ResponseOcsDataFromJSON,
    TextProcessingApiTaskTypes200ResponseOcsDataFromJSONTyped,
    TextProcessingApiTaskTypes200ResponseOcsDataToJSON,
} from './TextProcessingApiTaskTypes200ResponseOcsData';

/**
 * 
 * @export
 * @interface TextProcessingApiTaskTypes200ResponseOcs
 */
export interface TextProcessingApiTaskTypes200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof TextProcessingApiTaskTypes200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {TextProcessingApiTaskTypes200ResponseOcsData}
     * @memberof TextProcessingApiTaskTypes200ResponseOcs
     */
    data: TextProcessingApiTaskTypes200ResponseOcsData;
}

/**
 * Check if a given object implements the TextProcessingApiTaskTypes200ResponseOcs interface.
 */
export function instanceOfTextProcessingApiTaskTypes200ResponseOcs(value: object): value is TextProcessingApiTaskTypes200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TextProcessingApiTaskTypes200ResponseOcsFromJSON(json: any): TextProcessingApiTaskTypes200ResponseOcs {
    return TextProcessingApiTaskTypes200ResponseOcsFromJSONTyped(json, false);
}

export function TextProcessingApiTaskTypes200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextProcessingApiTaskTypes200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': TextProcessingApiTaskTypes200ResponseOcsDataFromJSON(json['data']),
    };
}

export function TextProcessingApiTaskTypes200ResponseOcsToJSON(value?: TextProcessingApiTaskTypes200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': TextProcessingApiTaskTypes200ResponseOcsDataToJSON(value['data']),
    };
}
