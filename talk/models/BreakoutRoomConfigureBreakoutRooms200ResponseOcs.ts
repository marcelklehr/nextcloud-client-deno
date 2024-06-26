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
import type { Room } from './Room.ts';
import {
    RoomFromJSON,
    RoomFromJSONTyped,
    RoomToJSON,
} from './Room.ts';

/**
 * 
 * @export
 * @interface BreakoutRoomConfigureBreakoutRooms200ResponseOcs
 */
export interface BreakoutRoomConfigureBreakoutRooms200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof BreakoutRoomConfigureBreakoutRooms200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Array<Room>}
     * @memberof BreakoutRoomConfigureBreakoutRooms200ResponseOcs
     */
    data: Array<Room>;
}

/**
 * Check if a given object implements the BreakoutRoomConfigureBreakoutRooms200ResponseOcs interface.
 */
export function instanceOfBreakoutRoomConfigureBreakoutRooms200ResponseOcs(value: object): value is BreakoutRoomConfigureBreakoutRooms200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BreakoutRoomConfigureBreakoutRooms200ResponseOcsFromJSON(json: any): BreakoutRoomConfigureBreakoutRooms200ResponseOcs {
    return BreakoutRoomConfigureBreakoutRooms200ResponseOcsFromJSONTyped(json, false);
}

export function BreakoutRoomConfigureBreakoutRooms200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BreakoutRoomConfigureBreakoutRooms200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(RoomFromJSON)),
    };
}

export function BreakoutRoomConfigureBreakoutRooms200ResponseOcsToJSON(value?: BreakoutRoomConfigureBreakoutRooms200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(RoomToJSON)),
    };
}

