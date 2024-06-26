/* tslint:disable */
/* eslint-disable */
/**
 * tables
 * Manage data the way you need it.
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
import type { Column } from './Column.ts';
import {
    ColumnFromJSON,
    ColumnFromJSONTyped,
    ColumnToJSON,
} from './Column.ts';

/**
 * 
 * @export
 * @interface ApiColumnsList200ResponseOcs
 */
export interface ApiColumnsList200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof ApiColumnsList200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Array<Column>}
     * @memberof ApiColumnsList200ResponseOcs
     */
    data: Array<Column>;
}

/**
 * Check if a given object implements the ApiColumnsList200ResponseOcs interface.
 */
export function instanceOfApiColumnsList200ResponseOcs(value: object): value is ApiColumnsList200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ApiColumnsList200ResponseOcsFromJSON(json: any): ApiColumnsList200ResponseOcs {
    return ApiColumnsList200ResponseOcsFromJSONTyped(json, false);
}

export function ApiColumnsList200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiColumnsList200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(ColumnFromJSON)),
    };
}

export function ApiColumnsList200ResponseOcsToJSON(value?: ApiColumnsList200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(ColumnToJSON)),
    };
}

