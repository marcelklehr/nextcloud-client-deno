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
import type { ApiColumnsList200ResponseOcs } from './ApiColumnsList200ResponseOcs.ts';
import {
    ApiColumnsList200ResponseOcsFromJSON,
    ApiColumnsList200ResponseOcsFromJSONTyped,
    ApiColumnsList200ResponseOcsToJSON,
} from './ApiColumnsList200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface ApiColumnsList200Response
 */
export interface ApiColumnsList200Response {
    /**
     * 
     * @type {ApiColumnsList200ResponseOcs}
     * @memberof ApiColumnsList200Response
     */
    ocs: ApiColumnsList200ResponseOcs;
}

/**
 * Check if a given object implements the ApiColumnsList200Response interface.
 */
export function instanceOfApiColumnsList200Response(value: object): value is ApiColumnsList200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function ApiColumnsList200ResponseFromJSON(json: any): ApiColumnsList200Response {
    return ApiColumnsList200ResponseFromJSONTyped(json, false);
}

export function ApiColumnsList200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiColumnsList200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': ApiColumnsList200ResponseOcsFromJSON(json['ocs']),
    };
}

export function ApiColumnsList200ResponseToJSON(value?: ApiColumnsList200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': ApiColumnsList200ResponseOcsToJSON(value['ocs']),
    };
}

