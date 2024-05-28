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
import type { AutocompleteResultStatus } from './AutocompleteResultStatus.ts';
import {
    AutocompleteResultStatusFromJSON,
    AutocompleteResultStatusFromJSONTyped,
    AutocompleteResultStatusToJSON,
} from './AutocompleteResultStatus.ts';

/**
 * 
 * @export
 * @interface AutocompleteResult
 */
export interface AutocompleteResult {
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResult
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResult
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResult
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResult
     */
    source: string;
    /**
     * 
     * @type {AutocompleteResultStatus}
     * @memberof AutocompleteResult
     */
    status: AutocompleteResultStatus;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResult
     */
    subline: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResult
     */
    shareWithDisplayNameUnique: string;
}

/**
 * Check if a given object implements the AutocompleteResult interface.
 */
export function instanceOfAutocompleteResult(value: object): value is AutocompleteResult {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('subline' in value) || value['subline'] === undefined) return false;
    if (!('shareWithDisplayNameUnique' in value) || value['shareWithDisplayNameUnique'] === undefined) return false;
    return true;
}

export function AutocompleteResultFromJSON(json: any): AutocompleteResult {
    return AutocompleteResultFromJSONTyped(json, false);
}

export function AutocompleteResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': json['label'],
        'icon': json['icon'],
        'source': json['source'],
        'status': AutocompleteResultStatusFromJSON(json['status']),
        'subline': json['subline'],
        'shareWithDisplayNameUnique': json['shareWithDisplayNameUnique'],
    };
}

export function AutocompleteResultToJSON(value?: AutocompleteResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'label': value['label'],
        'icon': value['icon'],
        'source': value['source'],
        'status': AutocompleteResultStatusToJSON(value['status']),
        'subline': value['subline'],
        'shareWithDisplayNameUnique': value['shareWithDisplayNameUnique'],
    };
}

