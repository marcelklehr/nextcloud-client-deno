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
import type { OcmDiscovery200ResponseResourceTypesInner } from './OcmDiscovery200ResponseResourceTypesInner.ts';
import {
    OcmDiscovery200ResponseResourceTypesInnerFromJSON,
    OcmDiscovery200ResponseResourceTypesInnerFromJSONTyped,
    OcmDiscovery200ResponseResourceTypesInnerToJSON,
} from './OcmDiscovery200ResponseResourceTypesInner.ts';

/**
 * 
 * @export
 * @interface OcmDiscovery200Response
 */
export interface OcmDiscovery200Response {
    /**
     * 
     * @type {boolean}
     * @memberof OcmDiscovery200Response
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof OcmDiscovery200Response
     */
    apiVersion: string;
    /**
     * 
     * @type {string}
     * @memberof OcmDiscovery200Response
     */
    endPoint: string;
    /**
     * 
     * @type {Array<OcmDiscovery200ResponseResourceTypesInner>}
     * @memberof OcmDiscovery200Response
     */
    resourceTypes: Array<OcmDiscovery200ResponseResourceTypesInner>;
}

/**
 * Check if a given object implements the OcmDiscovery200Response interface.
 */
export function instanceOfOcmDiscovery200Response(value: object): value is OcmDiscovery200Response {
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (!('endPoint' in value) || value['endPoint'] === undefined) return false;
    if (!('resourceTypes' in value) || value['resourceTypes'] === undefined) return false;
    return true;
}

export function OcmDiscovery200ResponseFromJSON(json: any): OcmDiscovery200Response {
    return OcmDiscovery200ResponseFromJSONTyped(json, false);
}

export function OcmDiscovery200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OcmDiscovery200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'enabled': json['enabled'],
        'apiVersion': json['apiVersion'],
        'endPoint': json['endPoint'],
        'resourceTypes': ((json['resourceTypes'] as Array<any>).map(OcmDiscovery200ResponseResourceTypesInnerFromJSON)),
    };
}

export function OcmDiscovery200ResponseToJSON(value?: OcmDiscovery200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'enabled': value['enabled'],
        'apiVersion': value['apiVersion'],
        'endPoint': value['endPoint'],
        'resourceTypes': ((value['resourceTypes'] as Array<any>).map(OcmDiscovery200ResponseResourceTypesInnerToJSON)),
    };
}

