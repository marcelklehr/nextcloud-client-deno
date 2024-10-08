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
import type { TaskProcessingTaskType } from './TaskProcessingTaskType.ts';
import {
    TaskProcessingTaskTypeFromJSON,
    TaskProcessingTaskTypeFromJSONTyped,
    TaskProcessingTaskTypeToJSON,
} from './TaskProcessingTaskType.ts';

/**
 * 
 * @export
 * @interface TaskProcessingApiTaskTypes200ResponseOcsData
 */
export interface TaskProcessingApiTaskTypes200ResponseOcsData {
    /**
     * 
     * @type {{ [key: string]: TaskProcessingTaskType; }}
     * @memberof TaskProcessingApiTaskTypes200ResponseOcsData
     */
    types: { [key: string]: TaskProcessingTaskType; };
}

/**
 * Check if a given object implements the TaskProcessingApiTaskTypes200ResponseOcsData interface.
 */
export function instanceOfTaskProcessingApiTaskTypes200ResponseOcsData(value: object): value is TaskProcessingApiTaskTypes200ResponseOcsData {
    if (!('types' in value) || value['types'] === undefined) return false;
    return true;
}

export function TaskProcessingApiTaskTypes200ResponseOcsDataFromJSON(json: any): TaskProcessingApiTaskTypes200ResponseOcsData {
    return TaskProcessingApiTaskTypes200ResponseOcsDataFromJSONTyped(json, false);
}

export function TaskProcessingApiTaskTypes200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskProcessingApiTaskTypes200ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'types': (mapValues(json['types'], TaskProcessingTaskTypeFromJSON)),
    };
}

export function TaskProcessingApiTaskTypes200ResponseOcsDataToJSON(value?: TaskProcessingApiTaskTypes200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'types': (mapValues(value['types'], TaskProcessingTaskTypeToJSON)),
    };
}

