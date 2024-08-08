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
import type { TaskProcessingApiSetFileContentsExApp201ResponseOcs } from './TaskProcessingApiSetFileContentsExApp201ResponseOcs.ts';
import {
    TaskProcessingApiSetFileContentsExApp201ResponseOcsFromJSON,
    TaskProcessingApiSetFileContentsExApp201ResponseOcsFromJSONTyped,
    TaskProcessingApiSetFileContentsExApp201ResponseOcsToJSON,
} from './TaskProcessingApiSetFileContentsExApp201ResponseOcs.ts';

/**
 * 
 * @export
 * @interface TaskProcessingApiSetFileContentsExApp201Response
 */
export interface TaskProcessingApiSetFileContentsExApp201Response {
    /**
     * 
     * @type {TaskProcessingApiSetFileContentsExApp201ResponseOcs}
     * @memberof TaskProcessingApiSetFileContentsExApp201Response
     */
    ocs: TaskProcessingApiSetFileContentsExApp201ResponseOcs;
}

/**
 * Check if a given object implements the TaskProcessingApiSetFileContentsExApp201Response interface.
 */
export function instanceOfTaskProcessingApiSetFileContentsExApp201Response(value: object): value is TaskProcessingApiSetFileContentsExApp201Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function TaskProcessingApiSetFileContentsExApp201ResponseFromJSON(json: any): TaskProcessingApiSetFileContentsExApp201Response {
    return TaskProcessingApiSetFileContentsExApp201ResponseFromJSONTyped(json, false);
}

export function TaskProcessingApiSetFileContentsExApp201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskProcessingApiSetFileContentsExApp201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': TaskProcessingApiSetFileContentsExApp201ResponseOcsFromJSON(json['ocs']),
    };
}

export function TaskProcessingApiSetFileContentsExApp201ResponseToJSON(value?: TaskProcessingApiSetFileContentsExApp201Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': TaskProcessingApiSetFileContentsExApp201ResponseOcsToJSON(value['ocs']),
    };
}
