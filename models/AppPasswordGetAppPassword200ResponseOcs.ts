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
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta.ts';
import type { AppPasswordGetAppPassword200ResponseOcsData } from './AppPasswordGetAppPassword200ResponseOcsData.ts';
import {
    AppPasswordGetAppPassword200ResponseOcsDataFromJSON,
    AppPasswordGetAppPassword200ResponseOcsDataFromJSONTyped,
    AppPasswordGetAppPassword200ResponseOcsDataToJSON,
} from './AppPasswordGetAppPassword200ResponseOcsData.ts';

/**
 * 
 * @export
 * @interface AppPasswordGetAppPassword200ResponseOcs
 */
export interface AppPasswordGetAppPassword200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof AppPasswordGetAppPassword200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {AppPasswordGetAppPassword200ResponseOcsData}
     * @memberof AppPasswordGetAppPassword200ResponseOcs
     */
    data: AppPasswordGetAppPassword200ResponseOcsData;
}

/**
 * Check if a given object implements the AppPasswordGetAppPassword200ResponseOcs interface.
 */
export function instanceOfAppPasswordGetAppPassword200ResponseOcs(value: object): value is AppPasswordGetAppPassword200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppPasswordGetAppPassword200ResponseOcsFromJSON(json: any): AppPasswordGetAppPassword200ResponseOcs {
    return AppPasswordGetAppPassword200ResponseOcsFromJSONTyped(json, false);
}

export function AppPasswordGetAppPassword200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPasswordGetAppPassword200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': AppPasswordGetAppPassword200ResponseOcsDataFromJSON(json['data']),
    };
}

export function AppPasswordGetAppPassword200ResponseOcsToJSON(value?: AppPasswordGetAppPassword200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': AppPasswordGetAppPassword200ResponseOcsDataToJSON(value['data']),
    };
}

