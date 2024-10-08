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
import type { ReferenceApiGetProvidersInfo200ResponseOcs } from './ReferenceApiGetProvidersInfo200ResponseOcs.ts';
import {
    ReferenceApiGetProvidersInfo200ResponseOcsFromJSON,
    ReferenceApiGetProvidersInfo200ResponseOcsFromJSONTyped,
    ReferenceApiGetProvidersInfo200ResponseOcsToJSON,
} from './ReferenceApiGetProvidersInfo200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface ReferenceApiGetProvidersInfo200Response
 */
export interface ReferenceApiGetProvidersInfo200Response {
    /**
     * 
     * @type {ReferenceApiGetProvidersInfo200ResponseOcs}
     * @memberof ReferenceApiGetProvidersInfo200Response
     */
    ocs: ReferenceApiGetProvidersInfo200ResponseOcs;
}

/**
 * Check if a given object implements the ReferenceApiGetProvidersInfo200Response interface.
 */
export function instanceOfReferenceApiGetProvidersInfo200Response(value: object): value is ReferenceApiGetProvidersInfo200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function ReferenceApiGetProvidersInfo200ResponseFromJSON(json: any): ReferenceApiGetProvidersInfo200Response {
    return ReferenceApiGetProvidersInfo200ResponseFromJSONTyped(json, false);
}

export function ReferenceApiGetProvidersInfo200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceApiGetProvidersInfo200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': ReferenceApiGetProvidersInfo200ResponseOcsFromJSON(json['ocs']),
    };
}

export function ReferenceApiGetProvidersInfo200ResponseToJSON(value?: ReferenceApiGetProvidersInfo200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': ReferenceApiGetProvidersInfo200ResponseOcsToJSON(value['ocs']),
    };
}

