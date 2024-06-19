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
 * @interface SignalingSession
 */
export interface SignalingSession {
    /**
     * 
     * @type {number}
     * @memberof SignalingSession
     */
    inCall: number;
    /**
     * 
     * @type {number}
     * @memberof SignalingSession
     */
    lastPing: number;
    /**
     * 
     * @type {number}
     * @memberof SignalingSession
     */
    participantPermissions: number;
    /**
     * 
     * @type {number}
     * @memberof SignalingSession
     */
    roomId: number;
    /**
     * 
     * @type {string}
     * @memberof SignalingSession
     */
    sessionId: string;
    /**
     * 
     * @type {string}
     * @memberof SignalingSession
     */
    userId: string;
}

/**
 * Check if a given object implements the SignalingSession interface.
 */
export function instanceOfSignalingSession(value: object): value is SignalingSession {
    if (!('inCall' in value) || value['inCall'] === undefined) return false;
    if (!('lastPing' in value) || value['lastPing'] === undefined) return false;
    if (!('participantPermissions' in value) || value['participantPermissions'] === undefined) return false;
    if (!('roomId' in value) || value['roomId'] === undefined) return false;
    if (!('sessionId' in value) || value['sessionId'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    return true;
}

export function SignalingSessionFromJSON(json: any): SignalingSession {
    return SignalingSessionFromJSONTyped(json, false);
}

export function SignalingSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignalingSession {
    if (json == null) {
        return json;
    }
    return {
        
        'inCall': json['inCall'],
        'lastPing': json['lastPing'],
        'participantPermissions': json['participantPermissions'],
        'roomId': json['roomId'],
        'sessionId': json['sessionId'],
        'userId': json['userId'],
    };
}

export function SignalingSessionToJSON(value?: SignalingSession | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'inCall': value['inCall'],
        'lastPing': value['lastPing'],
        'participantPermissions': value['participantPermissions'],
        'roomId': value['roomId'],
        'sessionId': value['sessionId'],
        'userId': value['userId'],
    };
}

