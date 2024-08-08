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
import type { TeamsApiListTeams200ResponseOcsData } from './TeamsApiListTeams200ResponseOcsData.ts';
import {
    TeamsApiListTeams200ResponseOcsDataFromJSON,
    TeamsApiListTeams200ResponseOcsDataFromJSONTyped,
    TeamsApiListTeams200ResponseOcsDataToJSON,
} from './TeamsApiListTeams200ResponseOcsData.ts';

/**
 * 
 * @export
 * @interface TeamsApiListTeams200ResponseOcs
 */
export interface TeamsApiListTeams200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof TeamsApiListTeams200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {TeamsApiListTeams200ResponseOcsData}
     * @memberof TeamsApiListTeams200ResponseOcs
     */
    data: TeamsApiListTeams200ResponseOcsData;
}

/**
 * Check if a given object implements the TeamsApiListTeams200ResponseOcs interface.
 */
export function instanceOfTeamsApiListTeams200ResponseOcs(value: object): value is TeamsApiListTeams200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TeamsApiListTeams200ResponseOcsFromJSON(json: any): TeamsApiListTeams200ResponseOcs {
    return TeamsApiListTeams200ResponseOcsFromJSONTyped(json, false);
}

export function TeamsApiListTeams200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamsApiListTeams200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': TeamsApiListTeams200ResponseOcsDataFromJSON(json['data']),
    };
}

export function TeamsApiListTeams200ResponseOcsToJSON(value?: TeamsApiListTeams200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': TeamsApiListTeams200ResponseOcsDataToJSON(value['data']),
    };
}

