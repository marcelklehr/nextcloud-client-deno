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
import type { RoomJoinRoom403ResponseOcsData } from './RoomJoinRoom403ResponseOcsData.ts';
import {
    RoomJoinRoom403ResponseOcsDataFromJSON,
    RoomJoinRoom403ResponseOcsDataFromJSONTyped,
    RoomJoinRoom403ResponseOcsDataToJSON,
} from './RoomJoinRoom403ResponseOcsData.ts';

/**
 * 
 * @export
 * @interface RoomJoinRoom403ResponseOcs
 */
export interface RoomJoinRoom403ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof RoomJoinRoom403ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {RoomJoinRoom403ResponseOcsData}
     * @memberof RoomJoinRoom403ResponseOcs
     */
    data: RoomJoinRoom403ResponseOcsData;
}

/**
 * Check if a given object implements the RoomJoinRoom403ResponseOcs interface.
 */
export function instanceOfRoomJoinRoom403ResponseOcs(value: object): value is RoomJoinRoom403ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function RoomJoinRoom403ResponseOcsFromJSON(json: any): RoomJoinRoom403ResponseOcs {
    return RoomJoinRoom403ResponseOcsFromJSONTyped(json, false);
}

export function RoomJoinRoom403ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomJoinRoom403ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': RoomJoinRoom403ResponseOcsDataFromJSON(json['data']),
    };
}

export function RoomJoinRoom403ResponseOcsToJSON(value?: RoomJoinRoom403ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': RoomJoinRoom403ResponseOcsDataToJSON(value['data']),
    };
}
