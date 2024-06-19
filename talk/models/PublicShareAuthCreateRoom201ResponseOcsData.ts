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
 * @interface PublicShareAuthCreateRoom201ResponseOcsData
 */
export interface PublicShareAuthCreateRoom201ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof PublicShareAuthCreateRoom201ResponseOcsData
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof PublicShareAuthCreateRoom201ResponseOcsData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PublicShareAuthCreateRoom201ResponseOcsData
     */
    displayName: string;
}

/**
 * Check if a given object implements the PublicShareAuthCreateRoom201ResponseOcsData interface.
 */
export function instanceOfPublicShareAuthCreateRoom201ResponseOcsData(value: object): value is PublicShareAuthCreateRoom201ResponseOcsData {
    if (!('token' in value) || value['token'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    return true;
}

export function PublicShareAuthCreateRoom201ResponseOcsDataFromJSON(json: any): PublicShareAuthCreateRoom201ResponseOcsData {
    return PublicShareAuthCreateRoom201ResponseOcsDataFromJSONTyped(json, false);
}

export function PublicShareAuthCreateRoom201ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicShareAuthCreateRoom201ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
        'name': json['name'],
        'displayName': json['displayName'],
    };
}

export function PublicShareAuthCreateRoom201ResponseOcsDataToJSON(value?: PublicShareAuthCreateRoom201ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
        'name': value['name'],
        'displayName': value['displayName'],
    };
}

