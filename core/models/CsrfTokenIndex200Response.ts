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
 * @interface CsrfTokenIndex200Response
 */
export interface CsrfTokenIndex200Response {
    /**
     * 
     * @type {string}
     * @memberof CsrfTokenIndex200Response
     */
    token: string;
}

/**
 * Check if a given object implements the CsrfTokenIndex200Response interface.
 */
export function instanceOfCsrfTokenIndex200Response(value: object): value is CsrfTokenIndex200Response {
    if (!('token' in value) || value['token'] === undefined) return false;
    return true;
}

export function CsrfTokenIndex200ResponseFromJSON(json: any): CsrfTokenIndex200Response {
    return CsrfTokenIndex200ResponseFromJSONTyped(json, false);
}

export function CsrfTokenIndex200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CsrfTokenIndex200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function CsrfTokenIndex200ResponseToJSON(value?: CsrfTokenIndex200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}

