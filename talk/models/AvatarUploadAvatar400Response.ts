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
import type { AvatarUploadAvatar400ResponseOcs } from './AvatarUploadAvatar400ResponseOcs.ts';
import {
    AvatarUploadAvatar400ResponseOcsFromJSON,
    AvatarUploadAvatar400ResponseOcsFromJSONTyped,
    AvatarUploadAvatar400ResponseOcsToJSON,
} from './AvatarUploadAvatar400ResponseOcs.ts';

/**
 * 
 * @export
 * @interface AvatarUploadAvatar400Response
 */
export interface AvatarUploadAvatar400Response {
    /**
     * 
     * @type {AvatarUploadAvatar400ResponseOcs}
     * @memberof AvatarUploadAvatar400Response
     */
    ocs: AvatarUploadAvatar400ResponseOcs;
}

/**
 * Check if a given object implements the AvatarUploadAvatar400Response interface.
 */
export function instanceOfAvatarUploadAvatar400Response(value: object): value is AvatarUploadAvatar400Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function AvatarUploadAvatar400ResponseFromJSON(json: any): AvatarUploadAvatar400Response {
    return AvatarUploadAvatar400ResponseFromJSONTyped(json, false);
}

export function AvatarUploadAvatar400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvatarUploadAvatar400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': AvatarUploadAvatar400ResponseOcsFromJSON(json['ocs']),
    };
}

export function AvatarUploadAvatar400ResponseToJSON(value?: AvatarUploadAvatar400Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': AvatarUploadAvatar400ResponseOcsToJSON(value['ocs']),
    };
}
