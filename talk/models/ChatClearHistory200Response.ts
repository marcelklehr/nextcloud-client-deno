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
import type { ChatClearHistory200ResponseOcs } from './ChatClearHistory200ResponseOcs.ts';
import {
    ChatClearHistory200ResponseOcsFromJSON,
    ChatClearHistory200ResponseOcsFromJSONTyped,
    ChatClearHistory200ResponseOcsToJSON,
} from './ChatClearHistory200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface ChatClearHistory200Response
 */
export interface ChatClearHistory200Response {
    /**
     * 
     * @type {ChatClearHistory200ResponseOcs}
     * @memberof ChatClearHistory200Response
     */
    ocs: ChatClearHistory200ResponseOcs;
}

/**
 * Check if a given object implements the ChatClearHistory200Response interface.
 */
export function instanceOfChatClearHistory200Response(value: object): value is ChatClearHistory200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function ChatClearHistory200ResponseFromJSON(json: any): ChatClearHistory200Response {
    return ChatClearHistory200ResponseFromJSONTyped(json, false);
}

export function ChatClearHistory200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatClearHistory200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': ChatClearHistory200ResponseOcsFromJSON(json['ocs']),
    };
}

export function ChatClearHistory200ResponseToJSON(value?: ChatClearHistory200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': ChatClearHistory200ResponseOcsToJSON(value['ocs']),
    };
}
