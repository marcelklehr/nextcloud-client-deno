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

import type { AutocompleteResultStatusOneOf } from './AutocompleteResultStatusOneOf.ts';
import {
    instanceOfAutocompleteResultStatusOneOf,
    AutocompleteResultStatusOneOfFromJSON,
    AutocompleteResultStatusOneOfFromJSONTyped,
    AutocompleteResultStatusOneOfToJSON,
} from './AutocompleteResultStatusOneOf.ts';
/*import type { string } from './string.ts';
import {
    instanceOfstring,
    stringFromJSON,
    stringFromJSONTyped,
    stringToJSON,
} from './string.ts';*/

/**
 * @type AutocompleteResultStatus
 * 
 * @export
 */
export type AutocompleteResultStatus = AutocompleteResultStatusOneOf | string;

export function AutocompleteResultStatusFromJSON(json: any): AutocompleteResultStatus {
    return AutocompleteResultStatusFromJSONTyped(json, false);
}

export function AutocompleteResultStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteResultStatus {
    if (json == null) {
        return json;
    }
    if (instanceOfAutocompleteResultStatusOneOf(json)) {
        return AutocompleteResultStatusOneOfFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }
}

export function AutocompleteResultStatusToJSON(value?: AutocompleteResultStatus | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAutocompleteResultStatusOneOf(value)) {
        return AutocompleteResultStatusOneOfToJSON(value as AutocompleteResultStatusOneOf);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}

