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
import type { RoomLastMessage } from './RoomLastMessage.ts';
import {
    RoomLastMessageFromJSON,
    RoomLastMessageFromJSONTyped,
    RoomLastMessageToJSON,
} from './RoomLastMessage.ts';

/**
 * 
 * @export
 * @interface Room
 */
export interface Room {
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    actorId: string;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    actorType: string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    attendeeId: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    attendeePermissions: number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    attendeePin: string | null;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    avatarVersion: string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    breakoutRoomMode: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    breakoutRoomStatus: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    callFlag: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    callPermissions: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    callRecording: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    callStartTime: number;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    canDeleteConversation: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    canEnableSIP: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    canLeaveConversation: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    canStartCall: boolean;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    defaultPermissions: number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    displayName: string;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    hasCall: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    hasPassword: boolean;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    isCustomAvatar: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    isFavorite: boolean;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    lastActivity: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    lastCommonReadMessage: number;
    /**
     * 
     * @type {RoomLastMessage}
     * @memberof Room
     */
    lastMessage: RoomLastMessage;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    lastPing: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    lastReadMessage: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    listable: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    lobbyState: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    lobbyTimer: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    messageExpiration: number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    notificationCalls: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    notificationLevel: number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    objectId: string;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    objectType: string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    participantFlags: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    participantType: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    permissions: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    readOnly: number;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    recordingConsent: number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    sessionId: string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    sipEnabled: number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    status?: string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    statusClearAt?: number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    statusIcon?: string;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    statusMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    token: string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    type: number;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    unreadMention: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    unreadMentionDirect: boolean;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    unreadMessages: number;
}

/**
 * Check if a given object implements the Room interface.
 */
export function instanceOfRoom(value: object): value is Room {
    if (!('actorId' in value) || value['actorId'] === undefined) return false;
    if (!('actorType' in value) || value['actorType'] === undefined) return false;
    if (!('attendeeId' in value) || value['attendeeId'] === undefined) return false;
    if (!('attendeePermissions' in value) || value['attendeePermissions'] === undefined) return false;
    if (!('attendeePin' in value) || value['attendeePin'] === undefined) return false;
    if (!('avatarVersion' in value) || value['avatarVersion'] === undefined) return false;
    if (!('breakoutRoomMode' in value) || value['breakoutRoomMode'] === undefined) return false;
    if (!('breakoutRoomStatus' in value) || value['breakoutRoomStatus'] === undefined) return false;
    if (!('callFlag' in value) || value['callFlag'] === undefined) return false;
    if (!('callPermissions' in value) || value['callPermissions'] === undefined) return false;
    if (!('callRecording' in value) || value['callRecording'] === undefined) return false;
    if (!('callStartTime' in value) || value['callStartTime'] === undefined) return false;
    if (!('canDeleteConversation' in value) || value['canDeleteConversation'] === undefined) return false;
    if (!('canEnableSIP' in value) || value['canEnableSIP'] === undefined) return false;
    if (!('canLeaveConversation' in value) || value['canLeaveConversation'] === undefined) return false;
    if (!('canStartCall' in value) || value['canStartCall'] === undefined) return false;
    if (!('defaultPermissions' in value) || value['defaultPermissions'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('hasCall' in value) || value['hasCall'] === undefined) return false;
    if (!('hasPassword' in value) || value['hasPassword'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('isCustomAvatar' in value) || value['isCustomAvatar'] === undefined) return false;
    if (!('isFavorite' in value) || value['isFavorite'] === undefined) return false;
    if (!('lastActivity' in value) || value['lastActivity'] === undefined) return false;
    if (!('lastCommonReadMessage' in value) || value['lastCommonReadMessage'] === undefined) return false;
    if (!('lastMessage' in value) || value['lastMessage'] === undefined) return false;
    if (!('lastPing' in value) || value['lastPing'] === undefined) return false;
    if (!('lastReadMessage' in value) || value['lastReadMessage'] === undefined) return false;
    if (!('listable' in value) || value['listable'] === undefined) return false;
    if (!('lobbyState' in value) || value['lobbyState'] === undefined) return false;
    if (!('lobbyTimer' in value) || value['lobbyTimer'] === undefined) return false;
    if (!('messageExpiration' in value) || value['messageExpiration'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('notificationCalls' in value) || value['notificationCalls'] === undefined) return false;
    if (!('notificationLevel' in value) || value['notificationLevel'] === undefined) return false;
    if (!('objectId' in value) || value['objectId'] === undefined) return false;
    if (!('objectType' in value) || value['objectType'] === undefined) return false;
    if (!('participantFlags' in value) || value['participantFlags'] === undefined) return false;
    if (!('participantType' in value) || value['participantType'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    if (!('readOnly' in value) || value['readOnly'] === undefined) return false;
    if (!('recordingConsent' in value) || value['recordingConsent'] === undefined) return false;
    if (!('sessionId' in value) || value['sessionId'] === undefined) return false;
    if (!('sipEnabled' in value) || value['sipEnabled'] === undefined) return false;
    if (!('token' in value) || value['token'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('unreadMention' in value) || value['unreadMention'] === undefined) return false;
    if (!('unreadMentionDirect' in value) || value['unreadMentionDirect'] === undefined) return false;
    if (!('unreadMessages' in value) || value['unreadMessages'] === undefined) return false;
    return true;
}

export function RoomFromJSON(json: any): Room {
    return RoomFromJSONTyped(json, false);
}

export function RoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): Room {
    if (json == null) {
        return json;
    }
    return {
        
        'actorId': json['actorId'],
        'actorType': json['actorType'],
        'attendeeId': json['attendeeId'],
        'attendeePermissions': json['attendeePermissions'],
        'attendeePin': json['attendeePin'],
        'avatarVersion': json['avatarVersion'],
        'breakoutRoomMode': json['breakoutRoomMode'],
        'breakoutRoomStatus': json['breakoutRoomStatus'],
        'callFlag': json['callFlag'],
        'callPermissions': json['callPermissions'],
        'callRecording': json['callRecording'],
        'callStartTime': json['callStartTime'],
        'canDeleteConversation': json['canDeleteConversation'],
        'canEnableSIP': json['canEnableSIP'],
        'canLeaveConversation': json['canLeaveConversation'],
        'canStartCall': json['canStartCall'],
        'defaultPermissions': json['defaultPermissions'],
        'description': json['description'],
        'displayName': json['displayName'],
        'hasCall': json['hasCall'],
        'hasPassword': json['hasPassword'],
        'id': json['id'],
        'isCustomAvatar': json['isCustomAvatar'],
        'isFavorite': json['isFavorite'],
        'lastActivity': json['lastActivity'],
        'lastCommonReadMessage': json['lastCommonReadMessage'],
        'lastMessage': RoomLastMessageFromJSON(json['lastMessage']),
        'lastPing': json['lastPing'],
        'lastReadMessage': json['lastReadMessage'],
        'listable': json['listable'],
        'lobbyState': json['lobbyState'],
        'lobbyTimer': json['lobbyTimer'],
        'messageExpiration': json['messageExpiration'],
        'name': json['name'],
        'notificationCalls': json['notificationCalls'],
        'notificationLevel': json['notificationLevel'],
        'objectId': json['objectId'],
        'objectType': json['objectType'],
        'participantFlags': json['participantFlags'],
        'participantType': json['participantType'],
        'permissions': json['permissions'],
        'readOnly': json['readOnly'],
        'recordingConsent': json['recordingConsent'],
        'sessionId': json['sessionId'],
        'sipEnabled': json['sipEnabled'],
        'status': json['status'] == null ? undefined : json['status'],
        'statusClearAt': json['statusClearAt'] == null ? undefined : json['statusClearAt'],
        'statusIcon': json['statusIcon'] == null ? undefined : json['statusIcon'],
        'statusMessage': json['statusMessage'] == null ? undefined : json['statusMessage'],
        'token': json['token'],
        'type': json['type'],
        'unreadMention': json['unreadMention'],
        'unreadMentionDirect': json['unreadMentionDirect'],
        'unreadMessages': json['unreadMessages'],
    };
}

export function RoomToJSON(value?: Room | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actorId': value['actorId'],
        'actorType': value['actorType'],
        'attendeeId': value['attendeeId'],
        'attendeePermissions': value['attendeePermissions'],
        'attendeePin': value['attendeePin'],
        'avatarVersion': value['avatarVersion'],
        'breakoutRoomMode': value['breakoutRoomMode'],
        'breakoutRoomStatus': value['breakoutRoomStatus'],
        'callFlag': value['callFlag'],
        'callPermissions': value['callPermissions'],
        'callRecording': value['callRecording'],
        'callStartTime': value['callStartTime'],
        'canDeleteConversation': value['canDeleteConversation'],
        'canEnableSIP': value['canEnableSIP'],
        'canLeaveConversation': value['canLeaveConversation'],
        'canStartCall': value['canStartCall'],
        'defaultPermissions': value['defaultPermissions'],
        'description': value['description'],
        'displayName': value['displayName'],
        'hasCall': value['hasCall'],
        'hasPassword': value['hasPassword'],
        'id': value['id'],
        'isCustomAvatar': value['isCustomAvatar'],
        'isFavorite': value['isFavorite'],
        'lastActivity': value['lastActivity'],
        'lastCommonReadMessage': value['lastCommonReadMessage'],
        'lastMessage': RoomLastMessageToJSON(value['lastMessage']),
        'lastPing': value['lastPing'],
        'lastReadMessage': value['lastReadMessage'],
        'listable': value['listable'],
        'lobbyState': value['lobbyState'],
        'lobbyTimer': value['lobbyTimer'],
        'messageExpiration': value['messageExpiration'],
        'name': value['name'],
        'notificationCalls': value['notificationCalls'],
        'notificationLevel': value['notificationLevel'],
        'objectId': value['objectId'],
        'objectType': value['objectType'],
        'participantFlags': value['participantFlags'],
        'participantType': value['participantType'],
        'permissions': value['permissions'],
        'readOnly': value['readOnly'],
        'recordingConsent': value['recordingConsent'],
        'sessionId': value['sessionId'],
        'sipEnabled': value['sipEnabled'],
        'status': value['status'],
        'statusClearAt': value['statusClearAt'],
        'statusIcon': value['statusIcon'],
        'statusMessage': value['statusMessage'],
        'token': value['token'],
        'type': value['type'],
        'unreadMention': value['unreadMention'],
        'unreadMentionDirect': value['unreadMentionDirect'],
        'unreadMessages': value['unreadMessages'],
    };
}
