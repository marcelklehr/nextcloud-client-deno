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
import type { PublicCapabilitiesBruteforce } from './PublicCapabilitiesBruteforce.ts';
import {
    PublicCapabilitiesBruteforceFromJSON,
    PublicCapabilitiesBruteforceFromJSONTyped,
    PublicCapabilitiesBruteforceToJSON,
} from './PublicCapabilitiesBruteforce.ts';

/**
 * 
 * @export
 * @interface PublicCapabilities
 */
export interface PublicCapabilities {
    /**
     * 
     * @type {PublicCapabilitiesBruteforce}
     * @memberof PublicCapabilities
     */
    bruteforce: PublicCapabilitiesBruteforce;
}

/**
 * Check if a given object implements the PublicCapabilities interface.
 */
export function instanceOfPublicCapabilities(value: object): value is PublicCapabilities {
    if (!('bruteforce' in value) || value['bruteforce'] === undefined) return false;
    return true;
}

export function PublicCapabilitiesFromJSON(json: any): PublicCapabilities {
    return PublicCapabilitiesFromJSONTyped(json, false);
}

export function PublicCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicCapabilities {
    if (json == null) {
        return json;
    }
    return {
        
        'bruteforce': PublicCapabilitiesBruteforceFromJSON(json['bruteforce']),
    };
}

export function PublicCapabilitiesToJSON(value?: PublicCapabilities | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bruteforce': PublicCapabilitiesBruteforceToJSON(value['bruteforce']),
    };
}

