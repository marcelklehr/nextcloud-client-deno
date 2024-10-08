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
 * @interface TaskProcessingApiSetProgressRequest
 */
export interface TaskProcessingApiSetProgressRequest {
    /**
     * The progress
     * @type {number}
     * @memberof TaskProcessingApiSetProgressRequest
     */
    progress: number;
}

/**
 * Check if a given object implements the TaskProcessingApiSetProgressRequest interface.
 */
export function instanceOfTaskProcessingApiSetProgressRequest(value: object): value is TaskProcessingApiSetProgressRequest {
    if (!('progress' in value) || value['progress'] === undefined) return false;
    return true;
}

export function TaskProcessingApiSetProgressRequestFromJSON(json: any): TaskProcessingApiSetProgressRequest {
    return TaskProcessingApiSetProgressRequestFromJSONTyped(json, false);
}

export function TaskProcessingApiSetProgressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskProcessingApiSetProgressRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'progress': json['progress'],
    };
}

export function TaskProcessingApiSetProgressRequestToJSON(value?: TaskProcessingApiSetProgressRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'progress': value['progress'],
    };
}

