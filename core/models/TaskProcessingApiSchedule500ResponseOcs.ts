/* tslint:disable */
/* eslint-disable */
/**
 * core
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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';
import type { TaskProcessingApiSchedule500ResponseOcsData } from './TaskProcessingApiSchedule500ResponseOcsData.ts';
import {
    TaskProcessingApiSchedule500ResponseOcsDataFromJSON,
    TaskProcessingApiSchedule500ResponseOcsDataFromJSONTyped,
    TaskProcessingApiSchedule500ResponseOcsDataToJSON,
} from './TaskProcessingApiSchedule500ResponseOcsData.ts';

/**
 * 
 * @export
 * @interface TaskProcessingApiSchedule500ResponseOcs
 */
export interface TaskProcessingApiSchedule500ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof TaskProcessingApiSchedule500ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {TaskProcessingApiSchedule500ResponseOcsData}
     * @memberof TaskProcessingApiSchedule500ResponseOcs
     */
    data: TaskProcessingApiSchedule500ResponseOcsData;
}

/**
 * Check if a given object implements the TaskProcessingApiSchedule500ResponseOcs interface.
 */
export function instanceOfTaskProcessingApiSchedule500ResponseOcs(value: object): value is TaskProcessingApiSchedule500ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TaskProcessingApiSchedule500ResponseOcsFromJSON(json: any): TaskProcessingApiSchedule500ResponseOcs {
    return TaskProcessingApiSchedule500ResponseOcsFromJSONTyped(json, false);
}

export function TaskProcessingApiSchedule500ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskProcessingApiSchedule500ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': TaskProcessingApiSchedule500ResponseOcsDataFromJSON(json['data']),
    };
}

export function TaskProcessingApiSchedule500ResponseOcsToJSON(value?: TaskProcessingApiSchedule500ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': TaskProcessingApiSchedule500ResponseOcsDataToJSON(value['data']),
    };
}
