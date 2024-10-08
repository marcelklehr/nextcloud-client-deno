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
 * @interface ReferenceApiTouchProviderRequest
 */
export interface ReferenceApiTouchProviderRequest {
    /**
     * Timestamp of the last usage
     * @type {number}
     * @memberof ReferenceApiTouchProviderRequest
     */
    timestamp?: number;
}

/**
 * Check if a given object implements the ReferenceApiTouchProviderRequest interface.
 */
export function instanceOfReferenceApiTouchProviderRequest(value: object): value is ReferenceApiTouchProviderRequest {
    return true;
}

export function ReferenceApiTouchProviderRequestFromJSON(json: any): ReferenceApiTouchProviderRequest {
    return ReferenceApiTouchProviderRequestFromJSONTyped(json, false);
}

export function ReferenceApiTouchProviderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceApiTouchProviderRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'] == null ? undefined : json['timestamp'],
    };
}

export function ReferenceApiTouchProviderRequestToJSON(value?: ReferenceApiTouchProviderRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'timestamp': value['timestamp'],
    };
}

