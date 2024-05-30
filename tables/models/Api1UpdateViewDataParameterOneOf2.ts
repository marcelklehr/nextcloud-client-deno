/* tslint:disable */
/* eslint-disable */
/**
 * tables
 * Manage data the way you need it.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.ts';
import type { Api1UpdateViewDataParameterOneOf2Value } from './Api1UpdateViewDataParameterOneOf2Value.ts';
import {
    Api1UpdateViewDataParameterOneOf2ValueFromJSON,
    Api1UpdateViewDataParameterOneOf2ValueFromJSONTyped,
    Api1UpdateViewDataParameterOneOf2ValueToJSON,
} from './Api1UpdateViewDataParameterOneOf2Value.ts';

/**
 * 
 * @export
 * @interface Api1UpdateViewDataParameterOneOf2
 */
export interface Api1UpdateViewDataParameterOneOf2 {
    /**
     * 
     * @type {string}
     * @memberof Api1UpdateViewDataParameterOneOf2
     */
    key: Api1UpdateViewDataParameterOneOf2KeyEnum;
    /**
     * 
     * @type {Api1UpdateViewDataParameterOneOf2Value}
     * @memberof Api1UpdateViewDataParameterOneOf2
     */
    value: Api1UpdateViewDataParameterOneOf2Value;
}


/**
 * @export
 */
export const Api1UpdateViewDataParameterOneOf2KeyEnum = {
    Sort: 'sort'
} as const;
export type Api1UpdateViewDataParameterOneOf2KeyEnum = typeof Api1UpdateViewDataParameterOneOf2KeyEnum[keyof typeof Api1UpdateViewDataParameterOneOf2KeyEnum];


/**
 * Check if a given object implements the Api1UpdateViewDataParameterOneOf2 interface.
 */
export function instanceOfApi1UpdateViewDataParameterOneOf2(value: object): value is Api1UpdateViewDataParameterOneOf2 {
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function Api1UpdateViewDataParameterOneOf2FromJSON(json: any): Api1UpdateViewDataParameterOneOf2 {
    return Api1UpdateViewDataParameterOneOf2FromJSONTyped(json, false);
}

export function Api1UpdateViewDataParameterOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): Api1UpdateViewDataParameterOneOf2 {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': Api1UpdateViewDataParameterOneOf2ValueFromJSON(json['value']),
    };
}

export function Api1UpdateViewDataParameterOneOf2ToJSON(value?: Api1UpdateViewDataParameterOneOf2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'key': value['key'],
        'value': Api1UpdateViewDataParameterOneOf2ValueToJSON(value['value']),
    };
}

