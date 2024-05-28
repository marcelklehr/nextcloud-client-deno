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
import type { OcsGetCapabilities200ResponseOcsDataVersion } from './OcsGetCapabilities200ResponseOcsDataVersion.ts';
import {
    OcsGetCapabilities200ResponseOcsDataVersionFromJSON,
    OcsGetCapabilities200ResponseOcsDataVersionFromJSONTyped,
    OcsGetCapabilities200ResponseOcsDataVersionToJSON,
} from './OcsGetCapabilities200ResponseOcsDataVersion.ts';

/**
 * 
 * @export
 * @interface OcsGetCapabilities200ResponseOcsData
 */
export interface OcsGetCapabilities200ResponseOcsData {
    /**
     * 
     * @type {OcsGetCapabilities200ResponseOcsDataVersion}
     * @memberof OcsGetCapabilities200ResponseOcsData
     */
    version: OcsGetCapabilities200ResponseOcsDataVersion;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof OcsGetCapabilities200ResponseOcsData
     */
    capabilities: { [key: string]: object; };
}

/**
 * Check if a given object implements the OcsGetCapabilities200ResponseOcsData interface.
 */
export function instanceOfOcsGetCapabilities200ResponseOcsData(value: object): value is OcsGetCapabilities200ResponseOcsData {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('capabilities' in value) || value['capabilities'] === undefined) return false;
    return true;
}

export function OcsGetCapabilities200ResponseOcsDataFromJSON(json: any): OcsGetCapabilities200ResponseOcsData {
    return OcsGetCapabilities200ResponseOcsDataFromJSONTyped(json, false);
}

export function OcsGetCapabilities200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): OcsGetCapabilities200ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'version': OcsGetCapabilities200ResponseOcsDataVersionFromJSON(json['version']),
        'capabilities': json['capabilities'],
    };
}

export function OcsGetCapabilities200ResponseOcsDataToJSON(value?: OcsGetCapabilities200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'version': OcsGetCapabilities200ResponseOcsDataVersionToJSON(value['version']),
        'capabilities': value['capabilities'],
    };
}

