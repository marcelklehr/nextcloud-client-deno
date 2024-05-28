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
 * @interface AppPasswordGetAppPassword200ResponseOcsData
 */
export interface AppPasswordGetAppPassword200ResponseOcsData {
    /**
     * 
     * @type {string}
     * @memberof AppPasswordGetAppPassword200ResponseOcsData
     */
    apppassword: string;
}

/**
 * Check if a given object implements the AppPasswordGetAppPassword200ResponseOcsData interface.
 */
export function instanceOfAppPasswordGetAppPassword200ResponseOcsData(value: object): value is AppPasswordGetAppPassword200ResponseOcsData {
    if (!('apppassword' in value) || value['apppassword'] === undefined) return false;
    return true;
}

export function AppPasswordGetAppPassword200ResponseOcsDataFromJSON(json: any): AppPasswordGetAppPassword200ResponseOcsData {
    return AppPasswordGetAppPassword200ResponseOcsDataFromJSONTyped(json, false);
}

export function AppPasswordGetAppPassword200ResponseOcsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPasswordGetAppPassword200ResponseOcsData {
    if (json == null) {
        return json;
    }
    return {
        
        'apppassword': json['apppassword'],
    };
}

export function AppPasswordGetAppPassword200ResponseOcsDataToJSON(value?: AppPasswordGetAppPassword200ResponseOcsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apppassword': value['apppassword'],
    };
}

