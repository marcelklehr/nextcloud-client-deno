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
import type { RoomJoinRoom409ResponseOcs } from './RoomJoinRoom409ResponseOcs.ts';
import {
    RoomJoinRoom409ResponseOcsFromJSON,
    RoomJoinRoom409ResponseOcsFromJSONTyped,
    RoomJoinRoom409ResponseOcsToJSON,
} from './RoomJoinRoom409ResponseOcs.ts';

/**
 * 
 * @export
 * @interface RoomJoinRoom409Response
 */
export interface RoomJoinRoom409Response {
    /**
     * 
     * @type {RoomJoinRoom409ResponseOcs}
     * @memberof RoomJoinRoom409Response
     */
    ocs: RoomJoinRoom409ResponseOcs;
}

/**
 * Check if a given object implements the RoomJoinRoom409Response interface.
 */
export function instanceOfRoomJoinRoom409Response(value: object): value is RoomJoinRoom409Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function RoomJoinRoom409ResponseFromJSON(json: any): RoomJoinRoom409Response {
    return RoomJoinRoom409ResponseFromJSONTyped(json, false);
}

export function RoomJoinRoom409ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomJoinRoom409Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': RoomJoinRoom409ResponseOcsFromJSON(json['ocs']),
    };
}

export function RoomJoinRoom409ResponseToJSON(value?: RoomJoinRoom409Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': RoomJoinRoom409ResponseOcsToJSON(value['ocs']),
    };
}

