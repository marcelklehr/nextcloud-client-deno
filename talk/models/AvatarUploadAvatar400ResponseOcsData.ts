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
 * @interface AvatarUploadAvatar400ResponseOcsData
 */
export interface AvatarUploadAvatar400ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof AvatarUploadAvatar400ResponseOcsData
     */
    message: string;
}

/**
 * Check if a given object implements the AvatarUploadAvatar400ResponseOcsData interface.
 */
export function instanceOfAvatarUploadAvatar400ResponseOcsData(value: object): value is AvatarUploadAvatar400ResponseOcsData {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function AvatarUploadAvatar400ResponseOcsDataFromJSON(json: any): AvatarUploadAvatar400ResponseOcsData {
    return AvatarUploadAvatar400ResponseOcsDataFromJSONTyped(json, false);
}

export function AvatarUploadAvatar400ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvatarUploadAvatar400ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function AvatarUploadAvatar400ResponseOcsDataToJSON(value?: AvatarUploadAvatar400ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}
