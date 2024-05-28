/* tslint:disable */
/* eslint-disable */
/**
 * core
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
 * @interface PublicCapabilitiesBruteforce
 */
export interface PublicCapabilitiesBruteforce {
    /**
     * 
     * @type {number}
     * @memberof PublicCapabilitiesBruteforce
     */
    delay: number;
    /**
     * 
     * @type {boolean}
     * @memberof PublicCapabilitiesBruteforce
     */
    allowListed: boolean;
}

/**
 * Check if a given object implements the PublicCapabilitiesBruteforce interface.
 */
export function instanceOfPublicCapabilitiesBruteforce(value: object): value is PublicCapabilitiesBruteforce {
    if (!('delay' in value) || value['delay'] === undefined) return false;
    if (!('allowListed' in value) || value['allowListed'] === undefined) return false;
    return true;
}

export function PublicCapabilitiesBruteforceFromJSON(json: any): PublicCapabilitiesBruteforce {
    return PublicCapabilitiesBruteforceFromJSONTyped(json, false);
}

export function PublicCapabilitiesBruteforceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicCapabilitiesBruteforce {
    if (json == null) {
        return json;
    }
    return {
        
        'delay': json['delay'],
        'allowListed': json['allow-listed'],
    };
}

export function PublicCapabilitiesBruteforceToJSON(value?: PublicCapabilitiesBruteforce | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'delay': value['delay'],
        'allow-listed': value['allowListed'],
    };
}
