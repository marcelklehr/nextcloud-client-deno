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
 * @interface FilesIntegrationGetRoomByFileId200ResponseOcsData
 */
export interface FilesIntegrationGetRoomByFileId200ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof FilesIntegrationGetRoomByFileId200ResponseOcsData
     */
    token: string;
}

/**
 * Check if a given object implements the FilesIntegrationGetRoomByFileId200ResponseOcsData interface.
 */
export function instanceOfFilesIntegrationGetRoomByFileId200ResponseOcsData(value: object): value is FilesIntegrationGetRoomByFileId200ResponseOcsData {
    if (!('token' in value) || value['token'] === undefined) return false;
    return true;
}

export function FilesIntegrationGetRoomByFileId200ResponseOcsDataFromJSON(json: any): FilesIntegrationGetRoomByFileId200ResponseOcsData {
    return FilesIntegrationGetRoomByFileId200ResponseOcsDataFromJSONTyped(json, false);
}

export function FilesIntegrationGetRoomByFileId200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilesIntegrationGetRoomByFileId200ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function FilesIntegrationGetRoomByFileId200ResponseOcsDataToJSON(value?: FilesIntegrationGetRoomByFileId200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}

