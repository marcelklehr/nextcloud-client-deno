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
 * @interface CallJoinCall400ResponseOcsData
 */
export interface CallJoinCall400ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof CallJoinCall400ResponseOcsData
     */
    error?: string;
}

/**
 * Check if a given object implements the CallJoinCall400ResponseOcsData interface.
 */
export function instanceOfCallJoinCall400ResponseOcsData(value: object): value is CallJoinCall400ResponseOcsData {
    return true;
}

export function CallJoinCall400ResponseOcsDataFromJSON(json: any): CallJoinCall400ResponseOcsData {
    return CallJoinCall400ResponseOcsDataFromJSONTyped(json, false);
}

export function CallJoinCall400ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallJoinCall400ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function CallJoinCall400ResponseOcsDataToJSON(value?: CallJoinCall400ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
    };
}

