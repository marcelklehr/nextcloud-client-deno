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
import type { CallSipDialOut201ResponseOcsData } from './CallSipDialOut201ResponseOcsData.ts';
import {
    CallSipDialOut201ResponseOcsDataFromJSON,
    CallSipDialOut201ResponseOcsDataFromJSONTyped,
    CallSipDialOut201ResponseOcsDataToJSON,
} from './CallSipDialOut201ResponseOcsData.ts';
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';

/**
 * 
 * @export
 * @interface CallSipDialOut201ResponseOcs
 */
export interface CallSipDialOut201ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof CallSipDialOut201ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {CallSipDialOut201ResponseOcsData}
     * @memberof CallSipDialOut201ResponseOcs
     */
    data: CallSipDialOut201ResponseOcsData;
}

/**
 * Check if a given object implements the CallSipDialOut201ResponseOcs interface.
 */
export function instanceOfCallSipDialOut201ResponseOcs(value: object): value is CallSipDialOut201ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CallSipDialOut201ResponseOcsFromJSON(json: any): CallSipDialOut201ResponseOcs {
    return CallSipDialOut201ResponseOcsFromJSONTyped(json, false);
}

export function CallSipDialOut201ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallSipDialOut201ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': CallSipDialOut201ResponseOcsDataFromJSON(json['data']),
    };
}

export function CallSipDialOut201ResponseOcsToJSON(value?: CallSipDialOut201ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': CallSipDialOut201ResponseOcsDataToJSON(value['data']),
    };
}

