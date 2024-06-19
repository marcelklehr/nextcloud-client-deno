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
 * @interface CapabilitiesConfigConversations
 */
export interface CapabilitiesConfigConversations {
    /**
     * 
     * @type {boolean}
     * @memberof CapabilitiesConfigConversations
     */
    canCreate: boolean;
}

/**
 * Check if a given object implements the CapabilitiesConfigConversations interface.
 */
export function instanceOfCapabilitiesConfigConversations(value: object): value is CapabilitiesConfigConversations {
    if (!('canCreate' in value) || value['canCreate'] === undefined) return false;
    return true;
}

export function CapabilitiesConfigConversationsFromJSON(json: any): CapabilitiesConfigConversations {
    return CapabilitiesConfigConversationsFromJSONTyped(json, false);
}

export function CapabilitiesConfigConversationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilitiesConfigConversations {
    if (json == null) {
        return json;
    }
    return {
        
        'canCreate': json['can-create'],
    };
}

export function CapabilitiesConfigConversationsToJSON(value?: CapabilitiesConfigConversations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'can-create': value['canCreate'],
    };
}

