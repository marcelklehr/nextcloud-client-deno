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
 * @interface ReferenceApiResolveOneRequest
 */
export interface ReferenceApiResolveOneRequest {
    /**
     * Reference to resolve
     * @type {string}
     * @memberof ReferenceApiResolveOneRequest
     */
    reference: string;
}

/**
 * Check if a given object implements the ReferenceApiResolveOneRequest interface.
 */
export function instanceOfReferenceApiResolveOneRequest(value: object): value is ReferenceApiResolveOneRequest {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    return true;
}

export function ReferenceApiResolveOneRequestFromJSON(json: any): ReferenceApiResolveOneRequest {
    return ReferenceApiResolveOneRequestFromJSONTyped(json, false);
}

export function ReferenceApiResolveOneRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceApiResolveOneRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'],
    };
}

export function ReferenceApiResolveOneRequestToJSON(value?: ReferenceApiResolveOneRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reference': value['reference'],
    };
}

