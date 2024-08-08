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
 * @interface TaskProcessingApiListTasksRequest
 */
export interface TaskProcessingApiListTasksRequest {
    /**
     * The task type to filter by
     * @type {string}
     * @memberof TaskProcessingApiListTasksRequest
     */
    taskType?: string;
    /**
     * An arbitrary identifier for the task
     * @type {string}
     * @memberof TaskProcessingApiListTasksRequest
     */
    customId?: string;
}

/**
 * Check if a given object implements the TaskProcessingApiListTasksRequest interface.
 */
export function instanceOfTaskProcessingApiListTasksRequest(value: object): value is TaskProcessingApiListTasksRequest {
    return true;
}

export function TaskProcessingApiListTasksRequestFromJSON(json: any): TaskProcessingApiListTasksRequest {
    return TaskProcessingApiListTasksRequestFromJSONTyped(json, false);
}

export function TaskProcessingApiListTasksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskProcessingApiListTasksRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'taskType': json['taskType'] == null ? undefined : json['taskType'],
        'customId': json['customId'] == null ? undefined : json['customId'],
    };
}

export function TaskProcessingApiListTasksRequestToJSON(value?: TaskProcessingApiListTasksRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'taskType': value['taskType'],
        'customId': value['customId'],
    };
}

