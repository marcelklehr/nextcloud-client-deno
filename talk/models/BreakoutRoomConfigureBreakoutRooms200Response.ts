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
import type { BreakoutRoomConfigureBreakoutRooms200ResponseOcs } from './BreakoutRoomConfigureBreakoutRooms200ResponseOcs.ts';
import {
    BreakoutRoomConfigureBreakoutRooms200ResponseOcsFromJSON,
    BreakoutRoomConfigureBreakoutRooms200ResponseOcsFromJSONTyped,
    BreakoutRoomConfigureBreakoutRooms200ResponseOcsToJSON,
} from './BreakoutRoomConfigureBreakoutRooms200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface BreakoutRoomConfigureBreakoutRooms200Response
 */
export interface BreakoutRoomConfigureBreakoutRooms200Response {
    /**
     * 
     * @type {BreakoutRoomConfigureBreakoutRooms200ResponseOcs}
     * @memberof BreakoutRoomConfigureBreakoutRooms200Response
     */
    ocs: BreakoutRoomConfigureBreakoutRooms200ResponseOcs;
}

/**
 * Check if a given object implements the BreakoutRoomConfigureBreakoutRooms200Response interface.
 */
export function instanceOfBreakoutRoomConfigureBreakoutRooms200Response(value: object): value is BreakoutRoomConfigureBreakoutRooms200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function BreakoutRoomConfigureBreakoutRooms200ResponseFromJSON(json: any): BreakoutRoomConfigureBreakoutRooms200Response {
    return BreakoutRoomConfigureBreakoutRooms200ResponseFromJSONTyped(json, false);
}

export function BreakoutRoomConfigureBreakoutRooms200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BreakoutRoomConfigureBreakoutRooms200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': BreakoutRoomConfigureBreakoutRooms200ResponseOcsFromJSON(json['ocs']),
    };
}

export function BreakoutRoomConfigureBreakoutRooms200ResponseToJSON(value?: BreakoutRoomConfigureBreakoutRooms200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': BreakoutRoomConfigureBreakoutRooms200ResponseOcsToJSON(value['ocs']),
    };
}

