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
/*
import type { Array<string> } from './Array&lt;string&gt;.ts';
import {
    instanceOfArray<string>,
    Array<string>FromJSON,
    Array<string>FromJSONTyped,
    Array<string>ToJSON,
} from './Array&lt;string&gt;.ts'; */
import type { RoomAddParticipantToRoom200ResponseOcsDataOneOf } from './RoomAddParticipantToRoom200ResponseOcsDataOneOf.ts';
import {
    instanceOfRoomAddParticipantToRoom200ResponseOcsDataOneOf,
    RoomAddParticipantToRoom200ResponseOcsDataOneOfFromJSON,
    RoomAddParticipantToRoom200ResponseOcsDataOneOfFromJSONTyped,
    RoomAddParticipantToRoom200ResponseOcsDataOneOfToJSON,
} from './RoomAddParticipantToRoom200ResponseOcsDataOneOf.ts';

/**
 * @type RoomAddParticipantToRoom200ResponseOcsData
 * 
 * @export
 */
export type RoomAddParticipantToRoom200ResponseOcsData = Array<string> | RoomAddParticipantToRoom200ResponseOcsDataOneOf;

export function RoomAddParticipantToRoom200ResponseOcsDataFromJSON(json: any): RoomAddParticipantToRoom200ResponseOcsData {
    return RoomAddParticipantToRoom200ResponseOcsDataFromJSONTyped(json, false);
}

export function RoomAddParticipantToRoom200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomAddParticipantToRoom200ResponseOcsData {
    if (json == null) {
        return json;
    }
    if (instanceOfArray<string>(json)) {
        return Array<string>FromJSONTyped(json, true);
    }
    if (instanceOfRoomAddParticipantToRoom200ResponseOcsDataOneOf(json)) {
        return RoomAddParticipantToRoom200ResponseOcsDataOneOfFromJSONTyped(json, true);
    }
}

export function RoomAddParticipantToRoom200ResponseOcsDataToJSON(value?: RoomAddParticipantToRoom200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfArray<string>(value)) {
        return Array<string>ToJSON(value as Array<string>);
    }
    if (instanceOfRoomAddParticipantToRoom200ResponseOcsDataOneOf(value)) {
        return RoomAddParticipantToRoom200ResponseOcsDataOneOfToJSON(value as RoomAddParticipantToRoom200ResponseOcsDataOneOf);
    }

    return {};
}

