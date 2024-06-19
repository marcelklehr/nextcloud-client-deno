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
import type { RoomAddParticipantToRoom200ResponseOcsData } from './RoomAddParticipantToRoom200ResponseOcsData.ts';
import {
    RoomAddParticipantToRoom200ResponseOcsDataFromJSON,
    RoomAddParticipantToRoom200ResponseOcsDataFromJSONTyped,
    RoomAddParticipantToRoom200ResponseOcsDataToJSON,
} from './RoomAddParticipantToRoom200ResponseOcsData.ts';

/**
 * 
 * @export
 * @interface RoomAddParticipantToRoom200ResponseOcs
 */
export interface RoomAddParticipantToRoom200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof RoomAddParticipantToRoom200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {RoomAddParticipantToRoom200ResponseOcsData}
     * @memberof RoomAddParticipantToRoom200ResponseOcs
     */
    data: RoomAddParticipantToRoom200ResponseOcsData;
}

/**
 * Check if a given object implements the RoomAddParticipantToRoom200ResponseOcs interface.
 */
export function instanceOfRoomAddParticipantToRoom200ResponseOcs(value: object): value is RoomAddParticipantToRoom200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function RoomAddParticipantToRoom200ResponseOcsFromJSON(json: any): RoomAddParticipantToRoom200ResponseOcs {
    return RoomAddParticipantToRoom200ResponseOcsFromJSONTyped(json, false);
}

export function RoomAddParticipantToRoom200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomAddParticipantToRoom200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': RoomAddParticipantToRoom200ResponseOcsDataFromJSON(json['data']),
    };
}

export function RoomAddParticipantToRoom200ResponseOcsToJSON(value?: RoomAddParticipantToRoom200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': RoomAddParticipantToRoom200ResponseOcsDataToJSON(value['data']),
    };
}

