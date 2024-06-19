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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';
import type { MatterbridgeWithProcessState } from './MatterbridgeWithProcessState.ts';
import {
    MatterbridgeWithProcessStateFromJSON,
    MatterbridgeWithProcessStateFromJSONTyped,
    MatterbridgeWithProcessStateToJSON,
} from './MatterbridgeWithProcessState.ts';

/**
 * 
 * @export
 * @interface MatterbridgeGetBridgeOfRoom200ResponseOcs
 */
export interface MatterbridgeGetBridgeOfRoom200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof MatterbridgeGetBridgeOfRoom200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {MatterbridgeWithProcessState}
     * @memberof MatterbridgeGetBridgeOfRoom200ResponseOcs
     */
    data: MatterbridgeWithProcessState;
}

/**
 * Check if a given object implements the MatterbridgeGetBridgeOfRoom200ResponseOcs interface.
 */
export function instanceOfMatterbridgeGetBridgeOfRoom200ResponseOcs(value: object): value is MatterbridgeGetBridgeOfRoom200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function MatterbridgeGetBridgeOfRoom200ResponseOcsFromJSON(json: any): MatterbridgeGetBridgeOfRoom200ResponseOcs {
    return MatterbridgeGetBridgeOfRoom200ResponseOcsFromJSONTyped(json, false);
}

export function MatterbridgeGetBridgeOfRoom200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatterbridgeGetBridgeOfRoom200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': MatterbridgeWithProcessStateFromJSON(json['data']),
    };
}

export function MatterbridgeGetBridgeOfRoom200ResponseOcsToJSON(value?: MatterbridgeGetBridgeOfRoom200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': MatterbridgeWithProcessStateToJSON(value['data']),
    };
}
