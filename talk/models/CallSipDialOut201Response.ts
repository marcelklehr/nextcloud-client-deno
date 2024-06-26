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
import type { CallSipDialOut201ResponseOcs } from './CallSipDialOut201ResponseOcs.ts';
import {
    CallSipDialOut201ResponseOcsFromJSON,
    CallSipDialOut201ResponseOcsFromJSONTyped,
    CallSipDialOut201ResponseOcsToJSON,
} from './CallSipDialOut201ResponseOcs.ts';

/**
 * 
 * @export
 * @interface CallSipDialOut201Response
 */
export interface CallSipDialOut201Response {
    /**
     * 
     * @type {CallSipDialOut201ResponseOcs}
     * @memberof CallSipDialOut201Response
     */
    ocs: CallSipDialOut201ResponseOcs;
}

/**
 * Check if a given object implements the CallSipDialOut201Response interface.
 */
export function instanceOfCallSipDialOut201Response(value: object): value is CallSipDialOut201Response {
    if (!('ocs' in value) || value['ocs'] === undefined) return false;
    return true;
}

export function CallSipDialOut201ResponseFromJSON(json: any): CallSipDialOut201Response {
    return CallSipDialOut201ResponseFromJSONTyped(json, false);
}

export function CallSipDialOut201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallSipDialOut201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ocs': CallSipDialOut201ResponseOcsFromJSON(json['ocs']),
    };
}

export function CallSipDialOut201ResponseToJSON(value?: CallSipDialOut201Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ocs': CallSipDialOut201ResponseOcsToJSON(value['ocs']),
    };
}

