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
import type { RoomAddParticipantToRoom200ResponseOcs } from './RoomAddParticipantToRoom200ResponseOcs.ts';
import {
    RoomAddParticipantToRoom200ResponseOcsFromJSON,
    RoomAddParticipantToRoom200ResponseOcsFromJSONTyped,
    RoomAddParticipantToRoom200ResponseOcsToJSON,
} from './RoomAddParticipantToRoom200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface RoomAddParticipantToRoom200Response
 */
export interface RoomAddParticipantToRoom200Response {
    /**
     * 
     * @type {RoomAddParticipantToRoom200ResponseOcs}
     * @memberof RoomAddParticipantToRoom200Response
     */
    ocs: RoomAddParticipantToRoom200ResponseOcs;
}

/**
 * Check if a given object implements the RoomAddParticipantToRoom200Response interface.
 */
export function instanceOfRoomAddParticipantToRoom200Response(value: object): value is RoomAddParticipantToRoom200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function RoomAddParticipantToRoom200ResponseFromJSON(json: any): RoomAddParticipantToRoom200Response {
    return RoomAddParticipantToRoom200ResponseFromJSONTyped(json, false);
}

export function RoomAddParticipantToRoom200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomAddParticipantToRoom200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': RoomAddParticipantToRoom200ResponseOcsFromJSON(json['ocs']),
    };
}

export function RoomAddParticipantToRoom200ResponseToJSON(value?: RoomAddParticipantToRoom200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': RoomAddParticipantToRoom200ResponseOcsToJSON(value['ocs']),
    };
}

