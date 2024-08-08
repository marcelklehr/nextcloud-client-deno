/* tslint:disable */
/* eslint-disable */
/**
 * core-full
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
 * @interface UnifiedSearchResultEntry
 */
export interface UnifiedSearchResultEntry {
    /**
     * 
     * @type {string}
     * @memberof UnifiedSearchResultEntry
     */
    thumbnailUrl: string;
    /**
     * 
     * @type {string}
     * @memberof UnifiedSearchResultEntry
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof UnifiedSearchResultEntry
     */
    subline: string;
    /**
     * 
     * @type {string}
     * @memberof UnifiedSearchResultEntry
     */
    resourceUrl: string;
    /**
     * 
     * @type {string}
     * @memberof UnifiedSearchResultEntry
     */
    icon: string;
    /**
     * 
     * @type {boolean}
     * @memberof UnifiedSearchResultEntry
     */
    rounded: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UnifiedSearchResultEntry
     */
    attributes: Array<string>;
}

/**
 * Check if a given object implements the UnifiedSearchResultEntry interface.
 */
export function instanceOfUnifiedSearchResultEntry(value: object): value is UnifiedSearchResultEntry {
    if (!('thumbnailUrl' in value) || value['thumbnailUrl'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('subline' in value) || value['subline'] === undefined) return false;
    if (!('resourceUrl' in value) || value['resourceUrl'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    if (!('rounded' in value) || value['rounded'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function UnifiedSearchResultEntryFromJSON(json: any): UnifiedSearchResultEntry {
    return UnifiedSearchResultEntryFromJSONTyped(json, false);
}

export function UnifiedSearchResultEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedSearchResultEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'thumbnailUrl': json['thumbnailUrl'],
        'title': json['title'],
        'subline': json['subline'],
        'resourceUrl': json['resourceUrl'],
        'icon': json['icon'],
        'rounded': json['rounded'],
        'attributes': json['attributes'],
    };
}

export function UnifiedSearchResultEntryToJSON(value?: UnifiedSearchResultEntry | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'thumbnailUrl': value['thumbnailUrl'],
        'title': value['title'],
        'subline': value['subline'],
        'resourceUrl': value['resourceUrl'],
        'icon': value['icon'],
        'rounded': value['rounded'],
        'attributes': value['attributes'],
    };
}

