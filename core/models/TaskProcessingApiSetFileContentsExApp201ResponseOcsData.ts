/* tslint:disable */
/* eslint-disable */
/**
 * core-full
 * Core functionality of Nextcloud
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
 * @interface TaskProcessingApiSetFileContentsExApp201ResponseOcsData
 */
export interface TaskProcessingApiSetFileContentsExApp201ResponseOcsData {
    /**
     * 
     * @type {number}
     * @memberof TaskProcessingApiSetFileContentsExApp201ResponseOcsData
     */
    fileId: number;
}

/**
 * Check if a given object implements the TaskProcessingApiSetFileContentsExApp201ResponseOcsData interface.
 */
export function instanceOfTaskProcessingApiSetFileContentsExApp201ResponseOcsData(value: object): value is TaskProcessingApiSetFileContentsExApp201ResponseOcsData {
    if (!('fileId' in value) || value['fileId'] === undefined) return false;
    return true;
}

export function TaskProcessingApiSetFileContentsExApp201ResponseOcsDataFromJSON(json: any): TaskProcessingApiSetFileContentsExApp201ResponseOcsData {
    return TaskProcessingApiSetFileContentsExApp201ResponseOcsDataFromJSONTyped(json, false);
}

export function TaskProcessingApiSetFileContentsExApp201ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskProcessingApiSetFileContentsExApp201ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'fileId': json['fileId'],
    };
}

export function TaskProcessingApiSetFileContentsExApp201ResponseOcsDataToJSON(value?: TaskProcessingApiSetFileContentsExApp201ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fileId': value['fileId'],
    };
}

