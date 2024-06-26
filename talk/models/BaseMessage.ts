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
import type { RichObjectParameter } from './RichObjectParameter.ts';
import {
    RichObjectParameterFromJSON,
    RichObjectParameterFromJSONTyped,
    RichObjectParameterToJSON,
} from './RichObjectParameter.ts';

/**
 * 
 * @export
 * @interface BaseMessage
 */
export interface BaseMessage {
    /**
     * 
     * @type {string}
     * @memberof BaseMessage
     */
    actorDisplayName: string;
    /**
     * 
     * @type {string}
     * @memberof BaseMessage
     */
    actorId: string;
    /**
     * 
     * @type {string}
     * @memberof BaseMessage
     */
    actorType: string;
    /**
     * 
     * @type {number}
     * @memberof BaseMessage
     */
    expirationTimestamp: number;
    /**
     * 
     * @type {string}
     * @memberof BaseMessage
     */
    message: string;
    /**
     * 
     * @type {{ [key: string]: RichObjectParameter; }}
     * @memberof BaseMessage
     */
    messageParameters: { [key: string]: RichObjectParameter; };
    /**
     * 
     * @type {string}
     * @memberof BaseMessage
     */
    messageType: string;
    /**
     * 
     * @type {string}
     * @memberof BaseMessage
     */
    systemMessage: string;
}

/**
 * Check if a given object implements the BaseMessage interface.
 */
export function instanceOfBaseMessage(value: object): value is BaseMessage {
    if (!('actorDisplayName' in value) || value['actorDisplayName'] === undefined) return false;
    if (!('actorId' in value) || value['actorId'] === undefined) return false;
    if (!('actorType' in value) || value['actorType'] === undefined) return false;
    if (!('expirationTimestamp' in value) || value['expirationTimestamp'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('messageParameters' in value) || value['messageParameters'] === undefined) return false;
    if (!('messageType' in value) || value['messageType'] === undefined) return false;
    if (!('systemMessage' in value) || value['systemMessage'] === undefined) return false;
    return true;
}

export function BaseMessageFromJSON(json: any): BaseMessage {
    return BaseMessageFromJSONTyped(json, false);
}

export function BaseMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'actorDisplayName': json['actorDisplayName'],
        'actorId': json['actorId'],
        'actorType': json['actorType'],
        'expirationTimestamp': json['expirationTimestamp'],
        'message': json['message'],
        'messageParameters': (mapValues(json['messageParameters'], RichObjectParameterFromJSON)),
        'messageType': json['messageType'],
        'systemMessage': json['systemMessage'],
    };
}

export function BaseMessageToJSON(value?: BaseMessage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actorDisplayName': value['actorDisplayName'],
        'actorId': value['actorId'],
        'actorType': value['actorType'],
        'expirationTimestamp': value['expirationTimestamp'],
        'message': value['message'],
        'messageParameters': (mapValues(value['messageParameters'], RichObjectParameterToJSON)),
        'messageType': value['messageType'],
        'systemMessage': value['systemMessage'],
    };
}

