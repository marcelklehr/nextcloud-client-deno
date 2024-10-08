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
 * @interface ReferenceApiExtractPublicRequest
 */
export interface ReferenceApiExtractPublicRequest {
    /**
     * Text to extract from
     * @type {string}
     * @memberof ReferenceApiExtractPublicRequest
     */
    text: string;
    /**
     * Token of the public share
     * @type {string}
     * @memberof ReferenceApiExtractPublicRequest
     */
    sharingToken: string;
    /**
     * Resolve the references
     * @type {boolean}
     * @memberof ReferenceApiExtractPublicRequest
     */
    resolve?: boolean;
    /**
     * Maximum amount of references to extract, limited to 15
     * @type {number}
     * @memberof ReferenceApiExtractPublicRequest
     */
    limit?: number;
}

/**
 * Check if a given object implements the ReferenceApiExtractPublicRequest interface.
 */
export function instanceOfReferenceApiExtractPublicRequest(value: object): value is ReferenceApiExtractPublicRequest {
    if (!('text' in value) || value['text'] === undefined) return false;
    if (!('sharingToken' in value) || value['sharingToken'] === undefined) return false;
    return true;
}

export function ReferenceApiExtractPublicRequestFromJSON(json: any): ReferenceApiExtractPublicRequest {
    return ReferenceApiExtractPublicRequestFromJSONTyped(json, false);
}

export function ReferenceApiExtractPublicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceApiExtractPublicRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'text': json['text'],
        'sharingToken': json['sharingToken'],
        'resolve': json['resolve'] == null ? undefined : json['resolve'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ReferenceApiExtractPublicRequestToJSON(value?: ReferenceApiExtractPublicRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'text': value['text'],
        'sharingToken': value['sharingToken'],
        'resolve': value['resolve'],
        'limit': value['limit'],
    };
}

