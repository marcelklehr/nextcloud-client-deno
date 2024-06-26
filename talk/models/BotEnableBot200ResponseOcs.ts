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
 * @interface BotEnableBot200ResponseOcs
 */
export interface BotEnableBot200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof BotEnableBot200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Bot}
     * @memberof BotEnableBot200ResponseOcs
     */
    data: Bot;
}

/**
 * Check if a given object implements the BotEnableBot200ResponseOcs interface.
 */
export function instanceOfBotEnableBot200ResponseOcs(value: object): value is BotEnableBot200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BotEnableBot200ResponseOcsFromJSON(json: any): BotEnableBot200ResponseOcs {
    return BotEnableBot200ResponseOcsFromJSONTyped(json, false);
}

export function BotEnableBot200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BotEnableBot200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': BotFromJSON(json['data']),
    };
}

export function BotEnableBot200ResponseOcsToJSON(value?: BotEnableBot200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': BotToJSON(value['data']),
    };
}

