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
/**
 * 
 * @export
 * @interface RoomAddParticipantToRoom200ResponseOcsDataOneOf
 */
export interface RoomAddParticipantToRoom200ResponseOcsDataOneOf {
    /**
     * 
     * @type {number}
     * @memberof RoomAddParticipantToRoom200ResponseOcsDataOneOf
     */
    type: number;
}

/**
 * Check if a given object implements the RoomAddParticipantToRoom200ResponseOcsDataOneOf interface.
 */
export function instanceOfRoomAddParticipantToRoom200ResponseOcsDataOneOf(value: object): value is RoomAddParticipantToRoom200ResponseOcsDataOneOf {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function RoomAddParticipantToRoom200ResponseOcsDataOneOfFromJSON(json: any): RoomAddParticipantToRoom200ResponseOcsDataOneOf {
    return RoomAddParticipantToRoom200ResponseOcsDataOneOfFromJSONTyped(json, false);
}

export function RoomAddParticipantToRoom200ResponseOcsDataOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomAddParticipantToRoom200ResponseOcsDataOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function RoomAddParticipantToRoom200ResponseOcsDataOneOfToJSON(value?: RoomAddParticipantToRoom200ResponseOcsDataOneOf | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
    };
}

