/* tslint:disable */
/* eslint-disable */
/**
 * core
 * Core functionality of Nextcloud
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
 * @interface ContactsAction
 */
export interface ContactsAction {
    /**
     * 
     * @type {string}
     * @memberof ContactsAction
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ContactsAction
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof ContactsAction
     */
    hyperlink: string;
    /**
     * 
     * @type {string}
     * @memberof ContactsAction
     */
    appId: string;
}

/**
 * Check if a given object implements the ContactsAction interface.
 */
export function instanceOfContactsAction(value: object): value is ContactsAction {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    if (!('hyperlink' in value) || value['hyperlink'] === undefined) return false;
    if (!('appId' in value) || value['appId'] === undefined) return false;
    return true;
}

export function ContactsActionFromJSON(json: any): ContactsAction {
    return ContactsActionFromJSONTyped(json, false);
}

export function ContactsActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactsAction {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'icon': json['icon'],
        'hyperlink': json['hyperlink'],
        'appId': json['appId'],
    };
}

export function ContactsActionToJSON(value?: ContactsAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'icon': value['icon'],
        'hyperlink': value['hyperlink'],
        'appId': value['appId'],
    };
}
