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

/**
 * @type UnifiedSearchSearchCursorParameter
 * 
 * @export
 */
export type UnifiedSearchSearchCursorParameter = number | string;

export function UnifiedSearchSearchCursorParameterFromJSON(json: any): UnifiedSearchSearchCursorParameter {
    return UnifiedSearchSearchCursorParameterFromJSONTyped(json, false);
}

export function UnifiedSearchSearchCursorParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedSearchSearchCursorParameter {
    if (json == null) {
        return json;
    }
    if (instanceOfnumber(json)) {
        return numberFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }
}

export function UnifiedSearchSearchCursorParameterToJSON(value?: UnifiedSearchSearchCursorParameter | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}

