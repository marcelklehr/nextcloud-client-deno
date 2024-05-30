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
import type { Table } from './Table.ts';
import {
    TableFromJSON,
    TableFromJSONTyped,
    TableToJSON,
} from './Table.ts';
import type { View } from './View.ts';
import {
    ViewFromJSON,
    ViewFromJSONTyped,
    ViewToJSON,
} from './View.ts';

/**
 * 
 * @export
 * @interface ModelIndex
 */
export interface ModelIndex {
    /**
     * 
     * @type {Array<Table>}
     * @memberof ModelIndex
     */
    tables: Array<Table>;
    /**
     * 
     * @type {Array<View>}
     * @memberof ModelIndex
     */
    views: Array<View>;
}

/**
 * Check if a given object implements the ModelIndex interface.
 */
export function instanceOfModelIndex(value: object): value is ModelIndex {
    if (!('tables' in value) || value['tables'] === undefined) return false;
    if (!('views' in value) || value['views'] === undefined) return false;
    return true;
}

export function ModelIndexFromJSON(json: any): ModelIndex {
    return ModelIndexFromJSONTyped(json, false);
}

export function ModelIndexFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelIndex {
    if (json == null) {
        return json;
    }
    return {
        
        'tables': ((json['tables'] as Array<any>).map(TableFromJSON)),
        'views': ((json['views'] as Array<any>).map(ViewFromJSON)),
    };
}

export function ModelIndexToJSON(value?: ModelIndex | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tables': ((value['tables'] as Array<any>).map(TableToJSON)),
        'views': ((value['views'] as Array<any>).map(ViewToJSON)),
    };
}

