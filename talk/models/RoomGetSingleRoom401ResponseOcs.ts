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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';

/**
 * 
 * @export
 * @interface RoomGetSingleRoom401ResponseOcs
 */
export interface RoomGetSingleRoom401ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof RoomGetSingleRoom401ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {any}
     * @memberof RoomGetSingleRoom401ResponseOcs
     */
    data: any | null;
}

/**
 * Check if a given object implements the RoomGetSingleRoom401ResponseOcs interface.
 */
export function instanceOfRoomGetSingleRoom401ResponseOcs(value: object): value is RoomGetSingleRoom401ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function RoomGetSingleRoom401ResponseOcsFromJSON(json: any): RoomGetSingleRoom401ResponseOcs {
    return RoomGetSingleRoom401ResponseOcsFromJSONTyped(json, false);
}

export function RoomGetSingleRoom401ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomGetSingleRoom401ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': json['data'],
    };
}

export function RoomGetSingleRoom401ResponseOcsToJSON(value?: RoomGetSingleRoom401ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': value['data'],
    };
}

