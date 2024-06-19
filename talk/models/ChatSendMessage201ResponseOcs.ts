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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';
import type { ChatMessageWithParent } from './ChatMessageWithParent.ts';
import {
    ChatMessageWithParentFromJSON,
    ChatMessageWithParentFromJSONTyped,
    ChatMessageWithParentToJSON,
} from './ChatMessageWithParent.ts';

/**
 * 
 * @export
 * @interface ChatSendMessage201ResponseOcs
 */
export interface ChatSendMessage201ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof ChatSendMessage201ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {ChatMessageWithParent}
     * @memberof ChatSendMessage201ResponseOcs
     */
    data: ChatMessageWithParent;
}

/**
 * Check if a given object implements the ChatSendMessage201ResponseOcs interface.
 */
export function instanceOfChatSendMessage201ResponseOcs(value: object): value is ChatSendMessage201ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ChatSendMessage201ResponseOcsFromJSON(json: any): ChatSendMessage201ResponseOcs {
    return ChatSendMessage201ResponseOcsFromJSONTyped(json, false);
}

export function ChatSendMessage201ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatSendMessage201ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ChatMessageWithParentFromJSON(json['data']),
    };
}

export function ChatSendMessage201ResponseOcsToJSON(value?: ChatSendMessage201ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ChatMessageWithParentToJSON(value['data']),
    };
}

