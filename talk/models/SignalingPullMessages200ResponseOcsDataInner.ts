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
import type { SignalingPullMessages200ResponseOcsDataInnerData } from './SignalingPullMessages200ResponseOcsDataInnerData.ts';
import {
    SignalingPullMessages200ResponseOcsDataInnerDataFromJSON,
    SignalingPullMessages200ResponseOcsDataInnerDataFromJSONTyped,
    SignalingPullMessages200ResponseOcsDataInnerDataToJSON,
} from './SignalingPullMessages200ResponseOcsDataInnerData.ts';

/**
 * 
 * @export
 * @interface SignalingPullMessages200ResponseOcsDataInner
 */
export interface SignalingPullMessages200ResponseOcsDataInner {
    /**
     * 
     * @type {string}
     * @memberof SignalingPullMessages200ResponseOcsDataInner
     */
    type: string;
    /**
     * 
     * @type {SignalingPullMessages200ResponseOcsDataInnerData}
     * @memberof SignalingPullMessages200ResponseOcsDataInner
     */
    data: SignalingPullMessages200ResponseOcsDataInnerData;
}

/**
 * Check if a given object implements the SignalingPullMessages200ResponseOcsDataInner interface.
 */
export function instanceOfSignalingPullMessages200ResponseOcsDataInner(value: object): value is SignalingPullMessages200ResponseOcsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SignalingPullMessages200ResponseOcsDataInnerFromJSON(json: any): SignalingPullMessages200ResponseOcsDataInner {
    return SignalingPullMessages200ResponseOcsDataInnerFromJSONTyped(json, false);
}

export function SignalingPullMessages200ResponseOcsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignalingPullMessages200ResponseOcsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'data': SignalingPullMessages200ResponseOcsDataInnerDataFromJSON(json['data']),
    };
}

export function SignalingPullMessages200ResponseOcsDataInnerToJSON(value?: SignalingPullMessages200ResponseOcsDataInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'data': SignalingPullMessages200ResponseOcsDataInnerDataToJSON(value['data']),
    };
}

