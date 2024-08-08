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
 * @interface WipeCheckWipe200Response
 */
export interface WipeCheckWipe200Response {
    /**
     * 
     * @type {boolean}
     * @memberof WipeCheckWipe200Response
     */
    wipe: boolean;
}

/**
 * Check if a given object implements the WipeCheckWipe200Response interface.
 */
export function instanceOfWipeCheckWipe200Response(value: object): value is WipeCheckWipe200Response {
    if (!('wipe' in value) || value['wipe'] === undefined) return false;
    return true;
}

export function WipeCheckWipe200ResponseFromJSON(json: any): WipeCheckWipe200Response {
    return WipeCheckWipe200ResponseFromJSONTyped(json, false);
}

export function WipeCheckWipe200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WipeCheckWipe200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'wipe': json['wipe'],
    };
}

export function WipeCheckWipe200ResponseToJSON(value?: WipeCheckWipe200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'wipe': value['wipe'],
    };
}

