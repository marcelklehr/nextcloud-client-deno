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
import type { RoomGetParticipants200ResponseOcs } from './RoomGetParticipants200ResponseOcs.ts';
import {
    RoomGetParticipants200ResponseOcsFromJSON,
    RoomGetParticipants200ResponseOcsFromJSONTyped,
    RoomGetParticipants200ResponseOcsToJSON,
} from './RoomGetParticipants200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface RoomGetParticipants200Response
 */
export interface RoomGetParticipants200Response {
    /**
     * 
     * @type {RoomGetParticipants200ResponseOcs}
     * @memberof RoomGetParticipants200Response
     */
    ocs: RoomGetParticipants200ResponseOcs;
}

/**
 * Check if a given object implements the RoomGetParticipants200Response interface.
 */
export function instanceOfRoomGetParticipants200Response(value: object): value is RoomGetParticipants200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function RoomGetParticipants200ResponseFromJSON(json: any): RoomGetParticipants200Response {
    return RoomGetParticipants200ResponseFromJSONTyped(json, false);
}

export function RoomGetParticipants200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomGetParticipants200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': RoomGetParticipants200ResponseOcsFromJSON(json['ocs']),
    };
}

export function RoomGetParticipants200ResponseToJSON(value?: RoomGetParticipants200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': RoomGetParticipants200ResponseOcsToJSON(value['ocs']),
    };
}

