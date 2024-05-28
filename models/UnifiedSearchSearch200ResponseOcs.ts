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
} from './OCSMeta';
import type { UnifiedSearchResult } from './UnifiedSearchResult.ts';
import {
    UnifiedSearchResultFromJSON,
    UnifiedSearchResultFromJSONTyped,
    UnifiedSearchResultToJSON,
} from './UnifiedSearchResult';

/**
 * 
 * @export
 * @interface UnifiedSearchSearch200ResponseOcs
 */
export interface UnifiedSearchSearch200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof UnifiedSearchSearch200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {UnifiedSearchResult}
     * @memberof UnifiedSearchSearch200ResponseOcs
     */
    data: UnifiedSearchResult;
}

/**
 * Check if a given object implements the UnifiedSearchSearch200ResponseOcs interface.
 */
export function instanceOfUnifiedSearchSearch200ResponseOcs(value: object): value is UnifiedSearchSearch200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UnifiedSearchSearch200ResponseOcsFromJSON(json: any): UnifiedSearchSearch200ResponseOcs {
    return UnifiedSearchSearch200ResponseOcsFromJSONTyped(json, false);
}

export function UnifiedSearchSearch200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedSearchSearch200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': UnifiedSearchResultFromJSON(json['data']),
    };
}

export function UnifiedSearchSearch200ResponseOcsToJSON(value?: UnifiedSearchSearch200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': UnifiedSearchResultToJSON(value['data']),
    };
}

