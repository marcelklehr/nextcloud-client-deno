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
 * @interface TaskProcessingApiListTasksByAppRequest
 */
export interface TaskProcessingApiListTasksByAppRequest {
    /**
     * An arbitrary identifier for the task
     * @type {string}
     * @memberof TaskProcessingApiListTasksByAppRequest
     */
    customId?: string;
}

/**
 * Check if a given object implements the TaskProcessingApiListTasksByAppRequest interface.
 */
export function instanceOfTaskProcessingApiListTasksByAppRequest(value: object): value is TaskProcessingApiListTasksByAppRequest {
    return true;
}

export function TaskProcessingApiListTasksByAppRequestFromJSON(json: any): TaskProcessingApiListTasksByAppRequest {
    return TaskProcessingApiListTasksByAppRequestFromJSONTyped(json, false);
}

export function TaskProcessingApiListTasksByAppRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskProcessingApiListTasksByAppRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'customId': json['customId'] == null ? undefined : json['customId'],
    };
}

export function TaskProcessingApiListTasksByAppRequestToJSON(value?: TaskProcessingApiListTasksByAppRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'customId': value['customId'],
    };
}
