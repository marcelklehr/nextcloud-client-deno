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
import type { MatterbridgeProcessState } from './MatterbridgeProcessState.ts';
import {
    MatterbridgeProcessStateFromJSON,
    MatterbridgeProcessStateFromJSONTyped,
    MatterbridgeProcessStateToJSON,
} from './MatterbridgeProcessState.ts';

/**
 * 
 * @export
 * @interface MatterbridgeEditBridgeOfRoom200ResponseOcs
 */
export interface MatterbridgeEditBridgeOfRoom200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof MatterbridgeEditBridgeOfRoom200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {MatterbridgeProcessState}
     * @memberof MatterbridgeEditBridgeOfRoom200ResponseOcs
     */
    data: MatterbridgeProcessState;
}

/**
 * Check if a given object implements the MatterbridgeEditBridgeOfRoom200ResponseOcs interface.
 */
export function instanceOfMatterbridgeEditBridgeOfRoom200ResponseOcs(value: object): value is MatterbridgeEditBridgeOfRoom200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function MatterbridgeEditBridgeOfRoom200ResponseOcsFromJSON(json: any): MatterbridgeEditBridgeOfRoom200ResponseOcs {
    return MatterbridgeEditBridgeOfRoom200ResponseOcsFromJSONTyped(json, false);
}

export function MatterbridgeEditBridgeOfRoom200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatterbridgeEditBridgeOfRoom200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': MatterbridgeProcessStateFromJSON(json['data']),
    };
}

export function MatterbridgeEditBridgeOfRoom200ResponseOcsToJSON(value?: MatterbridgeEditBridgeOfRoom200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': MatterbridgeProcessStateToJSON(value['data']),
    };
}
