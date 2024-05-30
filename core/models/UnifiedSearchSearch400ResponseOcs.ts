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
 * @interface UnifiedSearchSearch400ResponseOcs
 */
export interface UnifiedSearchSearch400ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof UnifiedSearchSearch400ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {string}
     * @memberof UnifiedSearchSearch400ResponseOcs
     */
    data: string;
}

/**
 * Check if a given object implements the UnifiedSearchSearch400ResponseOcs interface.
 */
export function instanceOfUnifiedSearchSearch400ResponseOcs(value: object): value is UnifiedSearchSearch400ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UnifiedSearchSearch400ResponseOcsFromJSON(json: any): UnifiedSearchSearch400ResponseOcs {
    return UnifiedSearchSearch400ResponseOcsFromJSONTyped(json, false);
}

export function UnifiedSearchSearch400ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedSearchSearch400ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': json['data'],
    };
}

export function UnifiedSearchSearch400ResponseOcsToJSON(value?: UnifiedSearchSearch400ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': value['data'],
    };
}
