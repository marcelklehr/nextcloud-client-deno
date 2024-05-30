/* tslint:disable */
/* eslint-disable */
/**
 * core
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
import type { OcmDiscovery200ResponseResourceTypesInnerProtocols } from './OcmDiscovery200ResponseResourceTypesInnerProtocols.ts';
import {
    OcmDiscovery200ResponseResourceTypesInnerProtocolsFromJSON,
    OcmDiscovery200ResponseResourceTypesInnerProtocolsFromJSONTyped,
    OcmDiscovery200ResponseResourceTypesInnerProtocolsToJSON,
} from './OcmDiscovery200ResponseResourceTypesInnerProtocols.ts';

/**
 * 
 * @export
 * @interface OcmDiscovery200ResponseResourceTypesInner
 */
export interface OcmDiscovery200ResponseResourceTypesInner {
    /**
     * 
     * @type {string}
     * @memberof OcmDiscovery200ResponseResourceTypesInner
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OcmDiscovery200ResponseResourceTypesInner
     */
    shareTypes: Array<string>;
    /**
     * 
     * @type {OcmDiscovery200ResponseResourceTypesInnerProtocols}
     * @memberof OcmDiscovery200ResponseResourceTypesInner
     */
    protocols: OcmDiscovery200ResponseResourceTypesInnerProtocols;
}

/**
 * Check if a given object implements the OcmDiscovery200ResponseResourceTypesInner interface.
 */
export function instanceOfOcmDiscovery200ResponseResourceTypesInner(value: object): value is OcmDiscovery200ResponseResourceTypesInner {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('shareTypes' in value) || value['shareTypes'] === undefined) return false;
    if (!('protocols' in value) || value['protocols'] === undefined) return false;
    return true;
}

export function OcmDiscovery200ResponseResourceTypesInnerFromJSON(json: any): OcmDiscovery200ResponseResourceTypesInner {
    return OcmDiscovery200ResponseResourceTypesInnerFromJSONTyped(json, false);
}

export function OcmDiscovery200ResponseResourceTypesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OcmDiscovery200ResponseResourceTypesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'shareTypes': json['shareTypes'],
        'protocols': OcmDiscovery200ResponseResourceTypesInnerProtocolsFromJSON(json['protocols']),
    };
}

export function OcmDiscovery200ResponseResourceTypesInnerToJSON(value?: OcmDiscovery200ResponseResourceTypesInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'shareTypes': value['shareTypes'],
        'protocols': OcmDiscovery200ResponseResourceTypesInnerProtocolsToJSON(value['protocols']),
    };
}
