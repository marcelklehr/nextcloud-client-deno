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
import type { RoomGetSingleRoom401ResponseOcs } from './RoomGetSingleRoom401ResponseOcs.ts';
import {
    RoomGetSingleRoom401ResponseOcsFromJSON,
    RoomGetSingleRoom401ResponseOcsFromJSONTyped,
    RoomGetSingleRoom401ResponseOcsToJSON,
} from './RoomGetSingleRoom401ResponseOcs.ts';

/**
 * 
 * @export
 * @interface RoomGetSingleRoom401Response
 */
export interface RoomGetSingleRoom401Response {
    /**
     * 
     * @type {RoomGetSingleRoom401ResponseOcs}
     * @memberof RoomGetSingleRoom401Response
     */
    ocs: RoomGetSingleRoom401ResponseOcs;
}

/**
 * Check if a given object implements the RoomGetSingleRoom401Response interface.
 */
export function instanceOfRoomGetSingleRoom401Response(value: object): value is RoomGetSingleRoom401Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function RoomGetSingleRoom401ResponseFromJSON(json: any): RoomGetSingleRoom401Response {
    return RoomGetSingleRoom401ResponseFromJSONTyped(json, false);
}

export function RoomGetSingleRoom401ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomGetSingleRoom401Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': RoomGetSingleRoom401ResponseOcsFromJSON(json['ocs']),
    };
}

export function RoomGetSingleRoom401ResponseToJSON(value?: RoomGetSingleRoom401Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': RoomGetSingleRoom401ResponseOcsToJSON(value['ocs']),
    };
}

