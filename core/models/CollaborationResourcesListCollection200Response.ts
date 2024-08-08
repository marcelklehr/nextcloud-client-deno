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
import type { CollaborationResourcesListCollection200ResponseOcs } from './CollaborationResourcesListCollection200ResponseOcs.ts';
import {
    CollaborationResourcesListCollection200ResponseOcsFromJSON,
    CollaborationResourcesListCollection200ResponseOcsFromJSONTyped,
    CollaborationResourcesListCollection200ResponseOcsToJSON,
} from './CollaborationResourcesListCollection200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface CollaborationResourcesListCollection200Response
 */
export interface CollaborationResourcesListCollection200Response {
    /**
     * 
     * @type {CollaborationResourcesListCollection200ResponseOcs}
     * @memberof CollaborationResourcesListCollection200Response
     */
    ocs: CollaborationResourcesListCollection200ResponseOcs;
}

/**
 * Check if a given object implements the CollaborationResourcesListCollection200Response interface.
 */
export function instanceOfCollaborationResourcesListCollection200Response(value: object): value is CollaborationResourcesListCollection200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function CollaborationResourcesListCollection200ResponseFromJSON(json: any): CollaborationResourcesListCollection200Response {
    return CollaborationResourcesListCollection200ResponseFromJSONTyped(json, false);
}

export function CollaborationResourcesListCollection200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollaborationResourcesListCollection200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': CollaborationResourcesListCollection200ResponseOcsFromJSON(json['ocs']),
    };
}

export function CollaborationResourcesListCollection200ResponseToJSON(value?: CollaborationResourcesListCollection200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': CollaborationResourcesListCollection200ResponseOcsToJSON(value['ocs']),
    };
}

