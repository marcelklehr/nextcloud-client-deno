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
import type { NavigationEntryOrder } from './NavigationEntryOrder.ts';
import {
    NavigationEntryOrderFromJSON,
    NavigationEntryOrderFromJSONTyped,
    NavigationEntryOrderToJSON,
} from './NavigationEntryOrder.ts';

/**
 * 
 * @export
 * @interface NavigationEntry
 */
export interface NavigationEntry {
    /**
     * 
     * @type {string}
     * @memberof NavigationEntry
     */
    id: string;
    /**
     * 
     * @type {NavigationEntryOrder}
     * @memberof NavigationEntry
     */
    order: NavigationEntryOrder;
    /**
     * 
     * @type {string}
     * @memberof NavigationEntry
     */
    href: string;
    /**
     * 
     * @type {string}
     * @memberof NavigationEntry
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof NavigationEntry
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof NavigationEntry
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof NavigationEntry
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof NavigationEntry
     */
    classes: string;
    /**
     * 
     * @type {number}
     * @memberof NavigationEntry
     */
    unread: number;
}

/**
 * Check if a given object implements the NavigationEntry interface.
 */
export function instanceOfNavigationEntry(value: object): value is NavigationEntry {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('order' in value) || value['order'] === undefined) return false;
    if (!('href' in value) || value['href'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('active' in value) || value['active'] === undefined) return false;
    if (!('classes' in value) || value['classes'] === undefined) return false;
    if (!('unread' in value) || value['unread'] === undefined) return false;
    return true;
}

export function NavigationEntryFromJSON(json: any): NavigationEntry {
    return NavigationEntryFromJSONTyped(json, false);
}

export function NavigationEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): NavigationEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'order': NavigationEntryOrderFromJSON(json['order']),
        'href': json['href'],
        'icon': json['icon'],
        'type': json['type'],
        'name': json['name'],
        'active': json['active'],
        'classes': json['classes'],
        'unread': json['unread'],
    };
}

export function NavigationEntryToJSON(value?: NavigationEntry | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'order': NavigationEntryOrderToJSON(value['order']),
        'href': value['href'],
        'icon': value['icon'],
        'type': value['type'],
        'name': value['name'],
        'active': value['active'],
        'classes': value['classes'],
        'unread': value['unread'],
    };
}

