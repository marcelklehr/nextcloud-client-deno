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
import type { OcsGetCapabilities200ResponseOcs } from './OcsGetCapabilities200ResponseOcs.ts';
import {
    OcsGetCapabilities200ResponseOcsFromJSON,
    OcsGetCapabilities200ResponseOcsFromJSONTyped,
    OcsGetCapabilities200ResponseOcsToJSON,
} from './OcsGetCapabilities200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface OcsGetCapabilities200Response
 */
export interface OcsGetCapabilities200Response {
    /**
     * 
     * @type {OcsGetCapabilities200ResponseOcs}
     * @memberof OcsGetCapabilities200Response
     */
    ocs: OcsGetCapabilities200ResponseOcs;
}

/**
 * Check if a given object implements the OcsGetCapabilities200Response interface.
 */
export function instanceOfOcsGetCapabilities200Response(value: object): value is OcsGetCapabilities200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function OcsGetCapabilities200ResponseFromJSON(json: any): OcsGetCapabilities200Response {
    return OcsGetCapabilities200ResponseFromJSONTyped(json, false);
}

export function OcsGetCapabilities200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OcsGetCapabilities200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': OcsGetCapabilities200ResponseOcsFromJSON(json['ocs']),
    };
}

export function OcsGetCapabilities200ResponseToJSON(value?: OcsGetCapabilities200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': OcsGetCapabilities200ResponseOcsToJSON(value['ocs']),
    };
}

