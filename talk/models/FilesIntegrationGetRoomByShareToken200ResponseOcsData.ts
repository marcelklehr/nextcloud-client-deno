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
 * @interface FilesIntegrationGetRoomByShareToken200ResponseOcsData
 */
export interface FilesIntegrationGetRoomByShareToken200ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof FilesIntegrationGetRoomByShareToken200ResponseOcsData
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof FilesIntegrationGetRoomByShareToken200ResponseOcsData
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof FilesIntegrationGetRoomByShareToken200ResponseOcsData
     */
    userDisplayName: string;
}

/**
 * Check if a given object implements the FilesIntegrationGetRoomByShareToken200ResponseOcsData interface.
 */
export function instanceOfFilesIntegrationGetRoomByShareToken200ResponseOcsData(value: object): value is FilesIntegrationGetRoomByShareToken200ResponseOcsData {
    if (!('token' in value) || value['token'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('userDisplayName' in value) || value['userDisplayName'] === undefined) return false;
    return true;
}

export function FilesIntegrationGetRoomByShareToken200ResponseOcsDataFromJSON(json: any): FilesIntegrationGetRoomByShareToken200ResponseOcsData {
    return FilesIntegrationGetRoomByShareToken200ResponseOcsDataFromJSONTyped(json, false);
}

export function FilesIntegrationGetRoomByShareToken200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilesIntegrationGetRoomByShareToken200ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
        'userId': json['userId'],
        'userDisplayName': json['userDisplayName'],
    };
}

export function FilesIntegrationGetRoomByShareToken200ResponseOcsDataToJSON(value?: FilesIntegrationGetRoomByShareToken200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
        'userId': value['userId'],
        'userDisplayName': value['userDisplayName'],
    };
}

