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
 * @interface ChatMentionSuggestion
 */
export interface ChatMentionSuggestion {
    /**
     * 
     * @type {string}
     * @memberof ChatMentionSuggestion
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ChatMentionSuggestion
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof ChatMentionSuggestion
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof ChatMentionSuggestion
     */
    mentionId: string;
    /**
     * 
     * @type {string}
     * @memberof ChatMentionSuggestion
     */
    status: string | null;
    /**
     * 
     * @type {number}
     * @memberof ChatMentionSuggestion
     */
    statusClearAt: number | null;
    /**
     * 
     * @type {string}
     * @memberof ChatMentionSuggestion
     */
    statusIcon: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChatMentionSuggestion
     */
    statusMessage: string | null;
}

/**
 * Check if a given object implements the ChatMentionSuggestion interface.
 */
export function instanceOfChatMentionSuggestion(value: object): value is ChatMentionSuggestion {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('mentionId' in value) || value['mentionId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('statusClearAt' in value) || value['statusClearAt'] === undefined) return false;
    if (!('statusIcon' in value) || value['statusIcon'] === undefined) return false;
    if (!('statusMessage' in value) || value['statusMessage'] === undefined) return false;
    return true;
}

export function ChatMentionSuggestionFromJSON(json: any): ChatMentionSuggestion {
    return ChatMentionSuggestionFromJSONTyped(json, false);
}

export function ChatMentionSuggestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatMentionSuggestion {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': json['label'],
        'source': json['source'],
        'mentionId': json['mentionId'],
        'status': json['status'],
        'statusClearAt': json['statusClearAt'],
        'statusIcon': json['statusIcon'],
        'statusMessage': json['statusMessage'],
    };
}

export function ChatMentionSuggestionToJSON(value?: ChatMentionSuggestion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'label': value['label'],
        'source': value['source'],
        'mentionId': value['mentionId'],
        'status': value['status'],
        'statusClearAt': value['statusClearAt'],
        'statusIcon': value['statusIcon'],
        'statusMessage': value['statusMessage'],
    };
}
