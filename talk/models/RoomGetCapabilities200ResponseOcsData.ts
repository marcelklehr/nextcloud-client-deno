/* tslint:disable */
/* eslint-disable */
/**
 * spreed
 * Chat, video & audio-conferencing using WebRTC
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.ts';
import type { Capabilities } from './Capabilities.ts';
import {
    CapabilitiesFromJSON,
    CapabilitiesFromJSONTyped,
    CapabilitiesToJSON,
} from './Capabilities.ts';
import type { CapabilitiesConfig } from './CapabilitiesConfig.ts';
import {
    CapabilitiesConfigFromJSON,
    CapabilitiesConfigFromJSONTyped,
    CapabilitiesConfigToJSON,
} from './CapabilitiesConfig.ts';

/**
 * 
 * @export
 * @interface RoomGetCapabilities200ResponseOcsData
 */
export interface RoomGetCapabilities200ResponseOcsData {
    /**
     * 
     * @type {Array<string>}
     * @memberof RoomGetCapabilities200ResponseOcsData
     */
    features: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RoomGetCapabilities200ResponseOcsData
     */
    featuresLocal: Array<string>;
    /**
     * 
     * @type {CapabilitiesConfig}
     * @memberof RoomGetCapabilities200ResponseOcsData
     */
    config: CapabilitiesConfig;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof RoomGetCapabilities200ResponseOcsData
     */
    configLocal: { [key: string]: Array<string>; };
    /**
     * 
     * @type {string}
     * @memberof RoomGetCapabilities200ResponseOcsData
     */
    version: string;
}

/**
 * Check if a given object implements the RoomGetCapabilities200ResponseOcsData interface.
 */
export function instanceOfRoomGetCapabilities200ResponseOcsData(value: object): value is RoomGetCapabilities200ResponseOcsData {
    if (!('features' in value) || value['features'] === undefined) return false;
    if (!('featuresLocal' in value) || value['featuresLocal'] === undefined) return false;
    if (!('config' in value) || value['config'] === undefined) return false;
    if (!('configLocal' in value) || value['configLocal'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function RoomGetCapabilities200ResponseOcsDataFromJSON(json: any): RoomGetCapabilities200ResponseOcsData {
    return RoomGetCapabilities200ResponseOcsDataFromJSONTyped(json, false);
}

export function RoomGetCapabilities200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomGetCapabilities200ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'features': json['features'],
        'featuresLocal': json['features-local'],
        'config': CapabilitiesConfigFromJSON(json['config']),
        'configLocal': json['config-local'],
        'version': json['version'],
    };
}

export function RoomGetCapabilities200ResponseOcsDataToJSON(value?: RoomGetCapabilities200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'features': value['features'],
        'features-local': value['featuresLocal'],
        'config': CapabilitiesConfigToJSON(value['config']),
        'config-local': value['configLocal'],
        'version': value['version'],
    };
}

