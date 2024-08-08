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
import type { CollaborationResourcesSearchCollections200ResponseOcs } from './CollaborationResourcesSearchCollections200ResponseOcs.ts';
import {
    CollaborationResourcesSearchCollections200ResponseOcsFromJSON,
    CollaborationResourcesSearchCollections200ResponseOcsFromJSONTyped,
    CollaborationResourcesSearchCollections200ResponseOcsToJSON,
} from './CollaborationResourcesSearchCollections200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface CollaborationResourcesSearchCollections200Response
 */
export interface CollaborationResourcesSearchCollections200Response {
    /**
     * 
     * @type {CollaborationResourcesSearchCollections200ResponseOcs}
     * @memberof CollaborationResourcesSearchCollections200Response
     */
    ocs: CollaborationResourcesSearchCollections200ResponseOcs;
}

/**
 * Check if a given object implements the CollaborationResourcesSearchCollections200Response interface.
 */
export function instanceOfCollaborationResourcesSearchCollections200Response(value: object): value is CollaborationResourcesSearchCollections200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function CollaborationResourcesSearchCollections200ResponseFromJSON(json: any): CollaborationResourcesSearchCollections200Response {
    return CollaborationResourcesSearchCollections200ResponseFromJSONTyped(json, false);
}

export function CollaborationResourcesSearchCollections200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollaborationResourcesSearchCollections200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': CollaborationResourcesSearchCollections200ResponseOcsFromJSON(json['ocs']),
    };
}

export function CollaborationResourcesSearchCollections200ResponseToJSON(value?: CollaborationResourcesSearchCollections200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': CollaborationResourcesSearchCollections200ResponseOcsToJSON(value['ocs']),
    };
}

