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
import type { SignalingSettings } from './SignalingSettings.ts';
import {
    SignalingSettingsFromJSON,
    SignalingSettingsFromJSONTyped,
    SignalingSettingsToJSON,
} from './SignalingSettings.ts';

/**
 * 
 * @export
 * @interface SignalingGetSettings200ResponseOcs
 */
export interface SignalingGetSettings200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof SignalingGetSettings200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {SignalingSettings}
     * @memberof SignalingGetSettings200ResponseOcs
     */
    data: SignalingSettings;
}

/**
 * Check if a given object implements the SignalingGetSettings200ResponseOcs interface.
 */
export function instanceOfSignalingGetSettings200ResponseOcs(value: object): value is SignalingGetSettings200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SignalingGetSettings200ResponseOcsFromJSON(json: any): SignalingGetSettings200ResponseOcs {
    return SignalingGetSettings200ResponseOcsFromJSONTyped(json, false);
}

export function SignalingGetSettings200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignalingGetSettings200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': SignalingSettingsFromJSON(json['data']),
    };
}

export function SignalingGetSettings200ResponseOcsToJSON(value?: SignalingGetSettings200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': SignalingSettingsToJSON(value['data']),
    };
}
