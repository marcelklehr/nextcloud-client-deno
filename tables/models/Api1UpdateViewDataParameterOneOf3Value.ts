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
import type { Api1UpdateViewDataParameterOneOf3ValueValue } from './Api1UpdateViewDataParameterOneOf3ValueValue.ts';
import {
    Api1UpdateViewDataParameterOneOf3ValueValueFromJSON,
    Api1UpdateViewDataParameterOneOf3ValueValueFromJSONTyped,
    Api1UpdateViewDataParameterOneOf3ValueValueToJSON,
} from './Api1UpdateViewDataParameterOneOf3ValueValue.ts';

/**
 * 
 * @export
 * @interface Api1UpdateViewDataParameterOneOf3Value
 */
export interface Api1UpdateViewDataParameterOneOf3Value {
    /**
     * 
     * @type {number}
     * @memberof Api1UpdateViewDataParameterOneOf3Value
     */
    columnId: number;
    /**
     * 
     * @type {string}
     * @memberof Api1UpdateViewDataParameterOneOf3Value
     */
    operator: Api1UpdateViewDataParameterOneOf3ValueOperatorEnum;
    /**
     * 
     * @type {Api1UpdateViewDataParameterOneOf3ValueValue}
     * @memberof Api1UpdateViewDataParameterOneOf3Value
     */
    value: Api1UpdateViewDataParameterOneOf3ValueValue;
}


/**
 * @export
 */
export const Api1UpdateViewDataParameterOneOf3ValueOperatorEnum = {
    BeginsWith: 'begins-with',
    EndsWith: 'ends-with',
    Contains: 'contains',
    IsEqual: 'is-equal',
    IsGreaterThan: 'is-greater-than',
    IsGreaterThanOrEqual: 'is-greater-than-or-equal',
    IsLowerThan: 'is-lower-than',
    IsLowerThanOrEqual: 'is-lower-than-or-equal',
    IsEmpty: 'is-empty'
} as const;
export type Api1UpdateViewDataParameterOneOf3ValueOperatorEnum = typeof Api1UpdateViewDataParameterOneOf3ValueOperatorEnum[keyof typeof Api1UpdateViewDataParameterOneOf3ValueOperatorEnum];


/**
 * Check if a given object implements the Api1UpdateViewDataParameterOneOf3Value interface.
 */
export function instanceOfApi1UpdateViewDataParameterOneOf3Value(value: object): value is Api1UpdateViewDataParameterOneOf3Value {
    if (!('columnId' in value) || value['columnId'] === undefined) return false;
    if (!('operator' in value) || value['operator'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function Api1UpdateViewDataParameterOneOf3ValueFromJSON(json: any): Api1UpdateViewDataParameterOneOf3Value {
    return Api1UpdateViewDataParameterOneOf3ValueFromJSONTyped(json, false);
}

export function Api1UpdateViewDataParameterOneOf3ValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Api1UpdateViewDataParameterOneOf3Value {
    if (json == null) {
        return json;
    }
    return {
        
        'columnId': json['columnId'],
        'operator': json['operator'],
        'value': Api1UpdateViewDataParameterOneOf3ValueValueFromJSON(json['value']),
    };
}

export function Api1UpdateViewDataParameterOneOf3ValueToJSON(value?: Api1UpdateViewDataParameterOneOf3Value | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'columnId': value['columnId'],
        'operator': value['operator'],
        'value': Api1UpdateViewDataParameterOneOf3ValueValueToJSON(value['value']),
    };
}

