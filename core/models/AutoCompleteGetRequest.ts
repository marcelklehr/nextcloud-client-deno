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
 * @interface AutoCompleteGetRequest
 */
export interface AutoCompleteGetRequest {
    /**
     * Text to search for
     * @type {string}
     * @memberof AutoCompleteGetRequest
     */
    search: string;
    /**
     * Type of the items to search for
     * @type {string}
     * @memberof AutoCompleteGetRequest
     */
    itemType?: string;
    /**
     * ID of the items to search for
     * @type {string}
     * @memberof AutoCompleteGetRequest
     */
    itemId?: string;
    /**
     * can be piped, top prio first, e.g.: "commenters|share-recipients"
     * @type {string}
     * @memberof AutoCompleteGetRequest
     */
    sorter?: string;
    /**
     * Types of shares to search for
     * @type {Array<number>}
     * @memberof AutoCompleteGetRequest
     */
    shareTypes?: Array<number>;
    /**
     * Maximum number of results to return
     * @type {number}
     * @memberof AutoCompleteGetRequest
     */
    limit?: number;
}

/**
 * Check if a given object implements the AutoCompleteGetRequest interface.
 */
export function instanceOfAutoCompleteGetRequest(value: object): value is AutoCompleteGetRequest {
    if (!('search' in value) || value['search'] === undefined) return false;
    return true;
}

export function AutoCompleteGetRequestFromJSON(json: any): AutoCompleteGetRequest {
    return AutoCompleteGetRequestFromJSONTyped(json, false);
}

export function AutoCompleteGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoCompleteGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'search': json['search'],
        'itemType': json['itemType'] == null ? undefined : json['itemType'],
        'itemId': json['itemId'] == null ? undefined : json['itemId'],
        'sorter': json['sorter'] == null ? undefined : json['sorter'],
        'shareTypes': json['shareTypes'] == null ? undefined : json['shareTypes'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function AutoCompleteGetRequestToJSON(value?: AutoCompleteGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'search': value['search'],
        'itemType': value['itemType'],
        'itemId': value['itemId'],
        'sorter': value['sorter'],
        'shareTypes': value['shareTypes'],
        'limit': value['limit'],
    };
}

