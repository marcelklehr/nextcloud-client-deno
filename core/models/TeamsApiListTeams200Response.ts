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
import type { TeamsApiListTeams200ResponseOcs } from './TeamsApiListTeams200ResponseOcs.ts';
import {
    TeamsApiListTeams200ResponseOcsFromJSON,
    TeamsApiListTeams200ResponseOcsFromJSONTyped,
    TeamsApiListTeams200ResponseOcsToJSON,
} from './TeamsApiListTeams200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface TeamsApiListTeams200Response
 */
export interface TeamsApiListTeams200Response {
    /**
     * 
     * @type {TeamsApiListTeams200ResponseOcs}
     * @memberof TeamsApiListTeams200Response
     */
    ocs: TeamsApiListTeams200ResponseOcs;
}

/**
 * Check if a given object implements the TeamsApiListTeams200Response interface.
 */
export function instanceOfTeamsApiListTeams200Response(value: object): value is TeamsApiListTeams200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function TeamsApiListTeams200ResponseFromJSON(json: any): TeamsApiListTeams200Response {
    return TeamsApiListTeams200ResponseFromJSONTyped(json, false);
}

export function TeamsApiListTeams200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamsApiListTeams200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': TeamsApiListTeams200ResponseOcsFromJSON(json['ocs']),
    };
}

export function TeamsApiListTeams200ResponseToJSON(value?: TeamsApiListTeams200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': TeamsApiListTeams200ResponseOcsToJSON(value['ocs']),
    };
}

