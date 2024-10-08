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
 * @interface ReferenceApiResolveOnePublicRequest
 */
export interface ReferenceApiResolveOnePublicRequest {
    /**
     * Reference to resolve
     * @type {string}
     * @memberof ReferenceApiResolveOnePublicRequest
     */
    reference: string;
    /**
     * Token of the public share
     * @type {string}
     * @memberof ReferenceApiResolveOnePublicRequest
     */
    sharingToken: string;
}

/**
 * Check if a given object implements the ReferenceApiResolveOnePublicRequest interface.
 */
export function instanceOfReferenceApiResolveOnePublicRequest(value: object): value is ReferenceApiResolveOnePublicRequest {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    if (!('sharingToken' in value) || value['sharingToken'] === undefined) return false;
    return true;
}

export function ReferenceApiResolveOnePublicRequestFromJSON(json: any): ReferenceApiResolveOnePublicRequest {
    return ReferenceApiResolveOnePublicRequestFromJSONTyped(json, false);
}

export function ReferenceApiResolveOnePublicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceApiResolveOnePublicRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'],
        'sharingToken': json['sharingToken'],
    };
}

export function ReferenceApiResolveOnePublicRequestToJSON(value?: ReferenceApiResolveOnePublicRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reference': value['reference'],
        'sharingToken': value['sharingToken'],
    };
}

