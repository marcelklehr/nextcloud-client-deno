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
import type { TeamsApiResolveOne200ResponseOcsData } from './TeamsApiResolveOne200ResponseOcsData.ts';
import {
    TeamsApiResolveOne200ResponseOcsDataFromJSON,
    TeamsApiResolveOne200ResponseOcsDataFromJSONTyped,
    TeamsApiResolveOne200ResponseOcsDataToJSON,
} from './TeamsApiResolveOne200ResponseOcsData.ts';

/**
 * 
 * @export
 * @interface TeamsApiResolveOne200ResponseOcs
 */
export interface TeamsApiResolveOne200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof TeamsApiResolveOne200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {TeamsApiResolveOne200ResponseOcsData}
     * @memberof TeamsApiResolveOne200ResponseOcs
     */
    data: TeamsApiResolveOne200ResponseOcsData;
}

/**
 * Check if a given object implements the TeamsApiResolveOne200ResponseOcs interface.
 */
export function instanceOfTeamsApiResolveOne200ResponseOcs(value: object): value is TeamsApiResolveOne200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TeamsApiResolveOne200ResponseOcsFromJSON(json: any): TeamsApiResolveOne200ResponseOcs {
    return TeamsApiResolveOne200ResponseOcsFromJSONTyped(json, false);
}

export function TeamsApiResolveOne200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamsApiResolveOne200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': TeamsApiResolveOne200ResponseOcsDataFromJSON(json['data']),
    };
}

export function TeamsApiResolveOne200ResponseOcsToJSON(value?: TeamsApiResolveOne200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': TeamsApiResolveOne200ResponseOcsDataToJSON(value['data']),
    };
}

