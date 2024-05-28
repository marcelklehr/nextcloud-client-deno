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
 * @interface AutocompleteResultStatusOneOf
 */
export interface AutocompleteResultStatusOneOf {
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResultStatusOneOf
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResultStatusOneOf
     */
    message: string | null;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResultStatusOneOf
     */
    icon: string | null;
    /**
     * 
     * @type {number}
     * @memberof AutocompleteResultStatusOneOf
     */
    clearAt: number | null;
}

/**
 * Check if a given object implements the AutocompleteResultStatusOneOf interface.
 */
export function instanceOfAutocompleteResultStatusOneOf(value: object): value is AutocompleteResultStatusOneOf {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    if (!('clearAt' in value) || value['clearAt'] === undefined) return false;
    return true;
}

export function AutocompleteResultStatusOneOfFromJSON(json: any): AutocompleteResultStatusOneOf {
    return AutocompleteResultStatusOneOfFromJSONTyped(json, false);
}

export function AutocompleteResultStatusOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteResultStatusOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'icon': json['icon'],
        'clearAt': json['clearAt'],
    };
}

export function AutocompleteResultStatusOneOfToJSON(value?: AutocompleteResultStatusOneOf | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'message': value['message'],
        'icon': value['icon'],
        'clearAt': value['clearAt'],
    };
}
