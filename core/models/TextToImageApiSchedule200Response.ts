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
import type { TextToImageApiSchedule200ResponseOcs } from './TextToImageApiSchedule200ResponseOcs.ts';
import {
    TextToImageApiSchedule200ResponseOcsFromJSON,
    TextToImageApiSchedule200ResponseOcsFromJSONTyped,
    TextToImageApiSchedule200ResponseOcsToJSON,
} from './TextToImageApiSchedule200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface TextToImageApiSchedule200Response
 */
export interface TextToImageApiSchedule200Response {
    /**
     * 
     * @type {TextToImageApiSchedule200ResponseOcs}
     * @memberof TextToImageApiSchedule200Response
     */
    ocs: TextToImageApiSchedule200ResponseOcs;
}

/**
 * Check if a given object implements the TextToImageApiSchedule200Response interface.
 */
export function instanceOfTextToImageApiSchedule200Response(value: object): value is TextToImageApiSchedule200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function TextToImageApiSchedule200ResponseFromJSON(json: any): TextToImageApiSchedule200Response {
    return TextToImageApiSchedule200ResponseFromJSONTyped(json, false);
}

export function TextToImageApiSchedule200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextToImageApiSchedule200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': TextToImageApiSchedule200ResponseOcsFromJSON(json['ocs']),
    };
}

export function TextToImageApiSchedule200ResponseToJSON(value?: TextToImageApiSchedule200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': TextToImageApiSchedule200ResponseOcsToJSON(value['ocs']),
    };
}

