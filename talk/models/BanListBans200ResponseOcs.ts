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
import type { Ban } from './Ban.ts';
import {
    BanFromJSON,
    BanFromJSONTyped,
    BanToJSON,
} from './Ban.ts';

/**
 * 
 * @export
 * @interface BanListBans200ResponseOcs
 */
export interface BanListBans200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof BanListBans200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Array<Ban>}
     * @memberof BanListBans200ResponseOcs
     */
    data: Array<Ban>;
}

/**
 * Check if a given object implements the BanListBans200ResponseOcs interface.
 */
export function instanceOfBanListBans200ResponseOcs(value: object): value is BanListBans200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BanListBans200ResponseOcsFromJSON(json: any): BanListBans200ResponseOcs {
    return BanListBans200ResponseOcsFromJSONTyped(json, false);
}

export function BanListBans200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BanListBans200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(BanFromJSON)),
    };
}

export function BanListBans200ResponseOcsToJSON(value?: BanListBans200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(BanToJSON)),
    };
}
