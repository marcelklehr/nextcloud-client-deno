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
import type { CallPeer } from './CallPeer.ts';
import {
    CallPeerFromJSON,
    CallPeerFromJSONTyped,
    CallPeerToJSON,
} from './CallPeer.ts';

/**
 * 
 * @export
 * @interface CallGetPeersForCall200ResponseOcs
 */
export interface CallGetPeersForCall200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof CallGetPeersForCall200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Array<CallPeer>}
     * @memberof CallGetPeersForCall200ResponseOcs
     */
    data: Array<CallPeer>;
}

/**
 * Check if a given object implements the CallGetPeersForCall200ResponseOcs interface.
 */
export function instanceOfCallGetPeersForCall200ResponseOcs(value: object): value is CallGetPeersForCall200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CallGetPeersForCall200ResponseOcsFromJSON(json: any): CallGetPeersForCall200ResponseOcs {
    return CallGetPeersForCall200ResponseOcsFromJSONTyped(json, false);
}

export function CallGetPeersForCall200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallGetPeersForCall200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(CallPeerFromJSON)),
    };
}

export function CallGetPeersForCall200ResponseOcsToJSON(value?: CallGetPeersForCall200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(CallPeerToJSON)),
    };
}

