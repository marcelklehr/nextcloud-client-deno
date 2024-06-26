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
 * @interface CapabilitiesConfigAttachments
 */
export interface CapabilitiesConfigAttachments {
    /**
     * 
     * @type {boolean}
     * @memberof CapabilitiesConfigAttachments
     */
    allowed: boolean;
    /**
     * 
     * @type {string}
     * @memberof CapabilitiesConfigAttachments
     */
    folder?: string;
}

/**
 * Check if a given object implements the CapabilitiesConfigAttachments interface.
 */
export function instanceOfCapabilitiesConfigAttachments(value: object): value is CapabilitiesConfigAttachments {
    if (!('allowed' in value) || value['allowed'] === undefined) return false;
    return true;
}

export function CapabilitiesConfigAttachmentsFromJSON(json: any): CapabilitiesConfigAttachments {
    return CapabilitiesConfigAttachmentsFromJSONTyped(json, false);
}

export function CapabilitiesConfigAttachmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilitiesConfigAttachments {
    if (json == null) {
        return json;
    }
    return {
        
        'allowed': json['allowed'],
        'folder': json['folder'] == null ? undefined : json['folder'],
    };
}

export function CapabilitiesConfigAttachmentsToJSON(value?: CapabilitiesConfigAttachments | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'allowed': value['allowed'],
        'folder': value['folder'],
    };
}

