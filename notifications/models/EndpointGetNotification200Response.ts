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
import type { EndpointGetNotification200ResponseOcs } from './EndpointGetNotification200ResponseOcs.ts';
import {
    EndpointGetNotification200ResponseOcsFromJSON,
    EndpointGetNotification200ResponseOcsFromJSONTyped,
    EndpointGetNotification200ResponseOcsToJSON,
} from './EndpointGetNotification200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface EndpointGetNotification200Response
 */
export interface EndpointGetNotification200Response {
    /**
     * 
     * @type {EndpointGetNotification200ResponseOcs}
     * @memberof EndpointGetNotification200Response
     */
    ocs: EndpointGetNotification200ResponseOcs;
}

/**
 * Check if a given object implements the EndpointGetNotification200Response interface.
 */
export function instanceOfEndpointGetNotification200Response(value: object): value is EndpointGetNotification200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function EndpointGetNotification200ResponseFromJSON(json: any): EndpointGetNotification200Response {
    return EndpointGetNotification200ResponseFromJSONTyped(json, false);
}

export function EndpointGetNotification200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointGetNotification200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': EndpointGetNotification200ResponseOcsFromJSON(json['ocs']),
    };
}

export function EndpointGetNotification200ResponseToJSON(value?: EndpointGetNotification200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': EndpointGetNotification200ResponseOcsToJSON(value['ocs']),
    };
}

