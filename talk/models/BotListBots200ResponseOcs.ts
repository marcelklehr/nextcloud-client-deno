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
import type { Bot } from './Bot.ts';
import {
    BotFromJSON,
    BotFromJSONTyped,
    BotToJSON,
} from './Bot.ts';

/**
 * 
 * @export
 * @interface BotListBots200ResponseOcs
 */
export interface BotListBots200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof BotListBots200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Array<Bot>}
     * @memberof BotListBots200ResponseOcs
     */
    data: Array<Bot>;
}

/**
 * Check if a given object implements the BotListBots200ResponseOcs interface.
 */
export function instanceOfBotListBots200ResponseOcs(value: object): value is BotListBots200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BotListBots200ResponseOcsFromJSON(json: any): BotListBots200ResponseOcs {
    return BotListBots200ResponseOcsFromJSONTyped(json, false);
}

export function BotListBots200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BotListBots200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(BotFromJSON)),
    };
}

export function BotListBots200ResponseOcsToJSON(value?: BotListBots200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(BotToJSON)),
    };
}

