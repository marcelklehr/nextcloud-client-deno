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
import type { Collection } from './Collection.ts';
import {
    CollectionFromJSON,
    CollectionFromJSONTyped,
    CollectionToJSON,
} from './Collection.ts';

/**
 * 
 * @export
 * @interface CollaborationResourcesListCollection200ResponseOcs
 */
export interface CollaborationResourcesListCollection200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof CollaborationResourcesListCollection200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Collection}
     * @memberof CollaborationResourcesListCollection200ResponseOcs
     */
    data: Collection;
}

/**
 * Check if a given object implements the CollaborationResourcesListCollection200ResponseOcs interface.
 */
export function instanceOfCollaborationResourcesListCollection200ResponseOcs(value: object): value is CollaborationResourcesListCollection200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CollaborationResourcesListCollection200ResponseOcsFromJSON(json: any): CollaborationResourcesListCollection200ResponseOcs {
    return CollaborationResourcesListCollection200ResponseOcsFromJSONTyped(json, false);
}

export function CollaborationResourcesListCollection200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollaborationResourcesListCollection200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': CollectionFromJSON(json['data']),
    };
}

export function CollaborationResourcesListCollection200ResponseOcsToJSON(value?: CollaborationResourcesListCollection200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': CollectionToJSON(value['data']),
    };
}

