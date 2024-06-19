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
/**
 * 
 * @export
 * @interface Bot
 */
export interface Bot {
    /**
     * 
     * @type {string}
     * @memberof Bot
     */
    description: string | null;
    /**
     * 
     * @type {number}
     * @memberof Bot
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Bot
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Bot
     */
    state: number;
}

/**
 * Check if a given object implements the Bot interface.
 */
export function instanceOfBot(value: object): value is Bot {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function BotFromJSON(json: any): Bot {
    return BotFromJSONTyped(json, false);
}

export function BotFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bot {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'id': json['id'],
        'name': json['name'],
        'state': json['state'],
    };
}

export function BotToJSON(value?: Bot | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'id': value['id'],
        'name': value['name'],
        'state': value['state'],
    };
}
