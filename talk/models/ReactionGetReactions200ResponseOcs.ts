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
import type { Reaction } from './Reaction.ts';
import {
    ReactionFromJSON,
    ReactionFromJSONTyped,
    ReactionToJSON,
} from './Reaction.ts';

/**
 * 
 * @export
 * @interface ReactionGetReactions200ResponseOcs
 */
export interface ReactionGetReactions200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof ReactionGetReactions200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {{ [key: string]: Array<Reaction>; }}
     * @memberof ReactionGetReactions200ResponseOcs
     */
    data: { [key: string]: Array<Reaction>; };
}

/**
 * Check if a given object implements the ReactionGetReactions200ResponseOcs interface.
 */
export function instanceOfReactionGetReactions200ResponseOcs(value: object): value is ReactionGetReactions200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ReactionGetReactions200ResponseOcsFromJSON(json: any): ReactionGetReactions200ResponseOcs {
    return ReactionGetReactions200ResponseOcsFromJSONTyped(json, false);
}

export function ReactionGetReactions200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReactionGetReactions200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': json['data'],
    };
}

export function ReactionGetReactions200ResponseOcsToJSON(value?: ReactionGetReactions200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': value['data'],
    };
}
