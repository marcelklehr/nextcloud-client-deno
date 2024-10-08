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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';
import type { ReferenceApiExtract200ResponseOcsData } from './ReferenceApiExtract200ResponseOcsData.ts';
import {
    ReferenceApiExtract200ResponseOcsDataFromJSON,
    ReferenceApiExtract200ResponseOcsDataFromJSONTyped,
    ReferenceApiExtract200ResponseOcsDataToJSON,
} from './ReferenceApiExtract200ResponseOcsData.ts';

/**
 * 
 * @export
 * @interface ReferenceApiExtract200ResponseOcs
 */
export interface ReferenceApiExtract200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof ReferenceApiExtract200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {ReferenceApiExtract200ResponseOcsData}
     * @memberof ReferenceApiExtract200ResponseOcs
     */
    data: ReferenceApiExtract200ResponseOcsData;
}

/**
 * Check if a given object implements the ReferenceApiExtract200ResponseOcs interface.
 */
export function instanceOfReferenceApiExtract200ResponseOcs(value: object): value is ReferenceApiExtract200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ReferenceApiExtract200ResponseOcsFromJSON(json: any): ReferenceApiExtract200ResponseOcs {
    return ReferenceApiExtract200ResponseOcsFromJSONTyped(json, false);
}

export function ReferenceApiExtract200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceApiExtract200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ReferenceApiExtract200ResponseOcsDataFromJSON(json['data']),
    };
}

export function ReferenceApiExtract200ResponseOcsToJSON(value?: ReferenceApiExtract200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ReferenceApiExtract200ResponseOcsDataToJSON(value['data']),
    };
}

