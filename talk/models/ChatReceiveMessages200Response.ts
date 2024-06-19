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
import type { ChatReceiveMessages200ResponseOcs } from './ChatReceiveMessages200ResponseOcs.ts';
import {
    ChatReceiveMessages200ResponseOcsFromJSON,
    ChatReceiveMessages200ResponseOcsFromJSONTyped,
    ChatReceiveMessages200ResponseOcsToJSON,
} from './ChatReceiveMessages200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface ChatReceiveMessages200Response
 */
export interface ChatReceiveMessages200Response {
    /**
     * 
     * @type {ChatReceiveMessages200ResponseOcs}
     * @memberof ChatReceiveMessages200Response
     */
    ocs: ChatReceiveMessages200ResponseOcs;
}

/**
 * Check if a given object implements the ChatReceiveMessages200Response interface.
 */
export function instanceOfChatReceiveMessages200Response(value: object): value is ChatReceiveMessages200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function ChatReceiveMessages200ResponseFromJSON(json: any): ChatReceiveMessages200Response {
    return ChatReceiveMessages200ResponseFromJSONTyped(json, false);
}

export function ChatReceiveMessages200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatReceiveMessages200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': ChatReceiveMessages200ResponseOcsFromJSON(json['ocs']),
    };
}

export function ChatReceiveMessages200ResponseToJSON(value?: ChatReceiveMessages200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': ChatReceiveMessages200ResponseOcsToJSON(value['ocs']),
    };
}
