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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';

/**
 * 
 * @export
 * @interface AppPasswordGetAppPassword403ResponseOcs
 */
export interface AppPasswordGetAppPassword403ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof AppPasswordGetAppPassword403ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {any}
     * @memberof AppPasswordGetAppPassword403ResponseOcs
     */
    data: any | null;
}

/**
 * Check if a given object implements the AppPasswordGetAppPassword403ResponseOcs interface.
 */
export function instanceOfAppPasswordGetAppPassword403ResponseOcs(value: object): value is AppPasswordGetAppPassword403ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppPasswordGetAppPassword403ResponseOcsFromJSON(json: any): AppPasswordGetAppPassword403ResponseOcs {
    return AppPasswordGetAppPassword403ResponseOcsFromJSONTyped(json, false);
}

export function AppPasswordGetAppPassword403ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPasswordGetAppPassword403ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': json['data'],
    };
}

export function AppPasswordGetAppPassword403ResponseOcsToJSON(value?: AppPasswordGetAppPassword403ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': value['data'],
    };
}

