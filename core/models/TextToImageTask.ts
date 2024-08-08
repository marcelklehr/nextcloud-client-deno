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
 * @interface TextToImageTask
 */
export interface TextToImageTask {
    /**
     * 
     * @type {number}
     * @memberof TextToImageTask
     */
    id: number | null;
    /**
     * 
     * @type {number}
     * @memberof TextToImageTask
     */
    status: TextToImageTaskStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TextToImageTask
     */
    userId: string | null;
    /**
     * 
     * @type {string}
     * @memberof TextToImageTask
     */
    appId: string;
    /**
     * 
     * @type {string}
     * @memberof TextToImageTask
     */
    input: string;
    /**
     * 
     * @type {string}
     * @memberof TextToImageTask
     */
    identifier: string | null;
    /**
     * 
     * @type {number}
     * @memberof TextToImageTask
     */
    numberOfImages: number;
    /**
     * 
     * @type {number}
     * @memberof TextToImageTask
     */
    completionExpectedAt: number | null;
}


/**
 * @export
 */
export const TextToImageTaskStatusEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type TextToImageTaskStatusEnum = typeof TextToImageTaskStatusEnum[keyof typeof TextToImageTaskStatusEnum];


/**
 * Check if a given object implements the TextToImageTask interface.
 */
export function instanceOfTextToImageTask(value: object): value is TextToImageTask {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('appId' in value) || value['appId'] === undefined) return false;
    if (!('input' in value) || value['input'] === undefined) return false;
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    if (!('numberOfImages' in value) || value['numberOfImages'] === undefined) return false;
    if (!('completionExpectedAt' in value) || value['completionExpectedAt'] === undefined) return false;
    return true;
}

export function TextToImageTaskFromJSON(json: any): TextToImageTask {
    return TextToImageTaskFromJSONTyped(json, false);
}

export function TextToImageTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextToImageTask {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'],
        'userId': json['userId'],
        'appId': json['appId'],
        'input': json['input'],
        'identifier': json['identifier'],
        'numberOfImages': json['numberOfImages'],
        'completionExpectedAt': json['completionExpectedAt'],
    };
}

export function TextToImageTaskToJSON(value?: TextToImageTask | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'status': value['status'],
        'userId': value['userId'],
        'appId': value['appId'],
        'input': value['input'],
        'identifier': value['identifier'],
        'numberOfImages': value['numberOfImages'],
        'completionExpectedAt': value['completionExpectedAt'],
    };
}

