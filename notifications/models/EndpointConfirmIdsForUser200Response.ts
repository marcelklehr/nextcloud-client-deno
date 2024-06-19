/* tslint:disable */
/* eslint-disable */
/**
 * notifications
 * This app provides a backend and frontend for the notification API available in Nextcloud.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.ts';
import type { EndpointConfirmIdsForUser200ResponseOcs } from './EndpointConfirmIdsForUser200ResponseOcs.ts';
import {
    EndpointConfirmIdsForUser200ResponseOcsFromJSON,
    EndpointConfirmIdsForUser200ResponseOcsFromJSONTyped,
    EndpointConfirmIdsForUser200ResponseOcsToJSON,
} from './EndpointConfirmIdsForUser200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface EndpointConfirmIdsForUser200Response
 */
export interface EndpointConfirmIdsForUser200Response {
    /**
     * 
     * @type {EndpointConfirmIdsForUser200ResponseOcs}
     * @memberof EndpointConfirmIdsForUser200Response
     */
    ocs: EndpointConfirmIdsForUser200ResponseOcs;
}

/**
 * Check if a given object implements the EndpointConfirmIdsForUser200Response interface.
 */
export function instanceOfEndpointConfirmIdsForUser200Response(value: object): value is EndpointConfirmIdsForUser200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function EndpointConfirmIdsForUser200ResponseFromJSON(json: any): EndpointConfirmIdsForUser200Response {
    return EndpointConfirmIdsForUser200ResponseFromJSONTyped(json, false);
}

export function EndpointConfirmIdsForUser200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointConfirmIdsForUser200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': EndpointConfirmIdsForUser200ResponseOcsFromJSON(json['ocs']),
    };
}

export function EndpointConfirmIdsForUser200ResponseToJSON(value?: EndpointConfirmIdsForUser200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': EndpointConfirmIdsForUser200ResponseOcsToJSON(value['ocs']),
    };
}
