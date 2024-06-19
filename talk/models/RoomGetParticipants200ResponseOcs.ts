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
import type { Participant } from './Participant.ts';
import {
    ParticipantFromJSON,
    ParticipantFromJSONTyped,
    ParticipantToJSON,
} from './Participant.ts';

/**
 * 
 * @export
 * @interface RoomGetParticipants200ResponseOcs
 */
export interface RoomGetParticipants200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof RoomGetParticipants200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Array<Participant>}
     * @memberof RoomGetParticipants200ResponseOcs
     */
    data: Array<Participant>;
}

/**
 * Check if a given object implements the RoomGetParticipants200ResponseOcs interface.
 */
export function instanceOfRoomGetParticipants200ResponseOcs(value: object): value is RoomGetParticipants200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function RoomGetParticipants200ResponseOcsFromJSON(json: any): RoomGetParticipants200ResponseOcs {
    return RoomGetParticipants200ResponseOcsFromJSONTyped(json, false);
}

export function RoomGetParticipants200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomGetParticipants200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(ParticipantFromJSON)),
    };
}

export function RoomGetParticipants200ResponseOcsToJSON(value?: RoomGetParticipants200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(ParticipantToJSON)),
    };
}
