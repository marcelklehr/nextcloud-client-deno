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
 * @interface RoomJoinRoom409ResponseOcsData
 */
export interface RoomJoinRoom409ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof RoomJoinRoom409ResponseOcsData
     */
    sessionId: string;
    /**
     * 
     * @type {number}
     * @memberof RoomJoinRoom409ResponseOcsData
     */
    inCall: number;
    /**
     * 
     * @type {number}
     * @memberof RoomJoinRoom409ResponseOcsData
     */
    lastPing: number;
}

/**
 * Check if a given object implements the RoomJoinRoom409ResponseOcsData interface.
 */
export function instanceOfRoomJoinRoom409ResponseOcsData(value: object): value is RoomJoinRoom409ResponseOcsData {
    if (!('sessionId' in value) || value['sessionId'] === undefined) return false;
    if (!('inCall' in value) || value['inCall'] === undefined) return false;
    if (!('lastPing' in value) || value['lastPing'] === undefined) return false;
    return true;
}

export function RoomJoinRoom409ResponseOcsDataFromJSON(json: any): RoomJoinRoom409ResponseOcsData {
    return RoomJoinRoom409ResponseOcsDataFromJSONTyped(json, false);
}

export function RoomJoinRoom409ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomJoinRoom409ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionId': json['sessionId'],
        'inCall': json['inCall'],
        'lastPing': json['lastPing'],
    };
}

export function RoomJoinRoom409ResponseOcsDataToJSON(value?: RoomJoinRoom409ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sessionId': value['sessionId'],
        'inCall': value['inCall'],
        'lastPing': value['lastPing'],
    };
}
