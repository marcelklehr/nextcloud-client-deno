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
import type { TextToImageApiIsAvailable200ResponseOcs } from './TextToImageApiIsAvailable200ResponseOcs.ts';
import {
    TextToImageApiIsAvailable200ResponseOcsFromJSON,
    TextToImageApiIsAvailable200ResponseOcsFromJSONTyped,
    TextToImageApiIsAvailable200ResponseOcsToJSON,
} from './TextToImageApiIsAvailable200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface TextToImageApiIsAvailable200Response
 */
export interface TextToImageApiIsAvailable200Response {
    /**
     * 
     * @type {TextToImageApiIsAvailable200ResponseOcs}
     * @memberof TextToImageApiIsAvailable200Response
     */
    ocs: TextToImageApiIsAvailable200ResponseOcs;
}

/**
 * Check if a given object implements the TextToImageApiIsAvailable200Response interface.
 */
export function instanceOfTextToImageApiIsAvailable200Response(value: object): value is TextToImageApiIsAvailable200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function TextToImageApiIsAvailable200ResponseFromJSON(json: any): TextToImageApiIsAvailable200Response {
    return TextToImageApiIsAvailable200ResponseFromJSONTyped(json, false);
}

export function TextToImageApiIsAvailable200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextToImageApiIsAvailable200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': TextToImageApiIsAvailable200ResponseOcsFromJSON(json['ocs']),
    };
}

export function TextToImageApiIsAvailable200ResponseToJSON(value?: TextToImageApiIsAvailable200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': TextToImageApiIsAvailable200ResponseOcsToJSON(value['ocs']),
    };
}

