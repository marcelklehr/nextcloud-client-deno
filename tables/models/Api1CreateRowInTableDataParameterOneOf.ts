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
/**
 * 
 * @export
 * @interface Api1CreateRowInTableDataParameterOneOf
 */
export interface Api1CreateRowInTableDataParameterOneOf {
    /**
     * 
     * @type {number}
     * @memberof Api1CreateRowInTableDataParameterOneOf
     */
    columnId: number;
    /**
     * 
     * @type {object}
     * @memberof Api1CreateRowInTableDataParameterOneOf
     */
    value: object;
}

/**
 * Check if a given object implements the Api1CreateRowInTableDataParameterOneOf interface.
 */
export function instanceOfApi1CreateRowInTableDataParameterOneOf(value: object): value is Api1CreateRowInTableDataParameterOneOf {
    if (!('columnId' in value) || value['columnId'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function Api1CreateRowInTableDataParameterOneOfFromJSON(json: any): Api1CreateRowInTableDataParameterOneOf {
    return Api1CreateRowInTableDataParameterOneOfFromJSONTyped(json, false);
}

export function Api1CreateRowInTableDataParameterOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): Api1CreateRowInTableDataParameterOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'columnId': json['columnId'],
        'value': json['value'],
    };
}

export function Api1CreateRowInTableDataParameterOneOfToJSON(value?: Api1CreateRowInTableDataParameterOneOf | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'columnId': value['columnId'],
        'value': value['value'],
    };
}

