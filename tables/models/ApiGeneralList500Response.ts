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
import type { ApiGeneralList500ResponseOcs } from './ApiGeneralList500ResponseOcs.ts';
import {
    ApiGeneralList500ResponseOcsFromJSON,
    ApiGeneralList500ResponseOcsFromJSONTyped,
    ApiGeneralList500ResponseOcsToJSON,
} from './ApiGeneralList500ResponseOcs.ts';

/**
 * 
 * @export
 * @interface ApiGeneralList500Response
 */
export interface ApiGeneralList500Response {
    /**
     * 
     * @type {ApiGeneralList500ResponseOcs}
     * @memberof ApiGeneralList500Response
     */
    ocs: ApiGeneralList500ResponseOcs;
}

/**
 * Check if a given object implements the ApiGeneralList500Response interface.
 */
export function instanceOfApiGeneralList500Response(value: object): value is ApiGeneralList500Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function ApiGeneralList500ResponseFromJSON(json: any): ApiGeneralList500Response {
    return ApiGeneralList500ResponseFromJSONTyped(json, false);
}

export function ApiGeneralList500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiGeneralList500Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': ApiGeneralList500ResponseOcsFromJSON(json['ocs']),
    };
}

export function ApiGeneralList500ResponseToJSON(value?: ApiGeneralList500Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': ApiGeneralList500ResponseOcsToJSON(value['ocs']),
    };
}

