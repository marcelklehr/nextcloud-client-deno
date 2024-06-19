/* tslint:disable */
/* eslint-disable */
/**
 * notifications
 * This app provides a backend and frontend for the notification API available in Nextcloud.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.ts';
import type { NotificationAction } from './NotificationAction.ts';
import {
    NotificationActionFromJSON,
    NotificationActionFromJSONTyped,
    NotificationActionToJSON,
} from './NotificationAction.ts';

/**
 * 
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     * 
     * @type {number}
     * @memberof Notification
     */
    notificationId: number;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    app: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    user: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    datetime: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    objectType: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    objectId: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    subject: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    link: string;
    /**
     * 
     * @type {Array<NotificationAction>}
     * @memberof Notification
     */
    actions: Array<NotificationAction>;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    subjectRich?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Notification
     */
    subjectRichParameters?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    messageRich?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Notification
     */
    messageRichParameters?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    icon?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Notification
     */
    shouldNotify?: boolean;
}

/**
 * Check if a given object implements the Notification interface.
 */
export function instanceOfNotification(value: object): value is Notification {
    if (!('notificationId' in value) || value['notificationId'] === undefined) return false;
    if (!('app' in value) || value['app'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('datetime' in value) || value['datetime'] === undefined) return false;
    if (!('objectType' in value) || value['objectType'] === undefined) return false;
    if (!('objectId' in value) || value['objectId'] === undefined) return false;
    if (!('subject' in value) || value['subject'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('link' in value) || value['link'] === undefined) return false;
    if (!('actions' in value) || value['actions'] === undefined) return false;
    return true;
}

export function NotificationFromJSON(json: any): Notification {
    return NotificationFromJSONTyped(json, false);
}

export function NotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Notification {
    if (json == null) {
        return json;
    }
    return {
        
        'notificationId': json['notification_id'],
        'app': json['app'],
        'user': json['user'],
        'datetime': json['datetime'],
        'objectType': json['object_type'],
        'objectId': json['object_id'],
        'subject': json['subject'],
        'message': json['message'],
        'link': json['link'],
        'actions': ((json['actions'] as Array<any>).map(NotificationActionFromJSON)),
        'subjectRich': json['subjectRich'] == null ? undefined : json['subjectRich'],
        'subjectRichParameters': json['subjectRichParameters'] == null ? undefined : json['subjectRichParameters'],
        'messageRich': json['messageRich'] == null ? undefined : json['messageRich'],
        'messageRichParameters': json['messageRichParameters'] == null ? undefined : json['messageRichParameters'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'shouldNotify': json['shouldNotify'] == null ? undefined : json['shouldNotify'],
    };
}

export function NotificationToJSON(value?: Notification | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'notification_id': value['notificationId'],
        'app': value['app'],
        'user': value['user'],
        'datetime': value['datetime'],
        'object_type': value['objectType'],
        'object_id': value['objectId'],
        'subject': value['subject'],
        'message': value['message'],
        'link': value['link'],
        'actions': ((value['actions'] as Array<any>).map(NotificationActionToJSON)),
        'subjectRich': value['subjectRich'],
        'subjectRichParameters': value['subjectRichParameters'],
        'messageRich': value['messageRich'],
        'messageRichParameters': value['messageRichParameters'],
        'icon': value['icon'],
        'shouldNotify': value['shouldNotify'],
    };
}
