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
import type { AvatarUploadAvatar200ResponseOcs } from './AvatarUploadAvatar200ResponseOcs.ts';
import {
    AvatarUploadAvatar200ResponseOcsFromJSON,
    AvatarUploadAvatar200ResponseOcsFromJSONTyped,
    AvatarUploadAvatar200ResponseOcsToJSON,
} from './AvatarUploadAvatar200ResponseOcs.ts';

/**
 * 
 * @export
 * @interface AvatarUploadAvatar200Response
 */
export interface AvatarUploadAvatar200Response {
    /**
     * 
     * @type {AvatarUploadAvatar200ResponseOcs}
     * @memberof AvatarUploadAvatar200Response
     */
    ocs: AvatarUploadAvatar200ResponseOcs;
}

/**
 * Check if a given object implements the AvatarUploadAvatar200Response interface.
 */
export function instanceOfAvatarUploadAvatar200Response(value: object): value is AvatarUploadAvatar200Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function AvatarUploadAvatar200ResponseFromJSON(json: any): AvatarUploadAvatar200Response {
    return AvatarUploadAvatar200ResponseFromJSONTyped(json, false);
}

export function AvatarUploadAvatar200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvatarUploadAvatar200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': AvatarUploadAvatar200ResponseOcsFromJSON(json['ocs']),
    };
}

export function AvatarUploadAvatar200ResponseToJSON(value?: AvatarUploadAvatar200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': AvatarUploadAvatar200ResponseOcsToJSON(value['ocs']),
    };
}

