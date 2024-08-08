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

import { mapValues } from '../runtime.ts';
/**
 * 
 * @export
 * @interface WhatsNewGet200ResponseOcsDataWhatsNew
 */
export interface WhatsNewGet200ResponseOcsDataWhatsNew {
    /**
     * 
     * @type {Array<string>}
     * @memberof WhatsNewGet200ResponseOcsDataWhatsNew
     */
    regular: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WhatsNewGet200ResponseOcsDataWhatsNew
     */
    admin: Array<string>;
}

/**
 * Check if a given object implements the WhatsNewGet200ResponseOcsDataWhatsNew interface.
 */
export function instanceOfWhatsNewGet200ResponseOcsDataWhatsNew(value: object): value is WhatsNewGet200ResponseOcsDataWhatsNew {
    if (!('regular' in value) || value['regular'] === undefined) return false;
    if (!('admin' in value) || value['admin'] === undefined) return false;
    return true;
}

export function WhatsNewGet200ResponseOcsDataWhatsNewFromJSON(json: any): WhatsNewGet200ResponseOcsDataWhatsNew {
    return WhatsNewGet200ResponseOcsDataWhatsNewFromJSONTyped(json, false);
}

export function WhatsNewGet200ResponseOcsDataWhatsNewFromJSONTyped(json: any, ignoreDiscriminator: boolean): WhatsNewGet200ResponseOcsDataWhatsNew {
    if (json == null) {
        return json;
    }
    return {
        
        'regular': json['regular'],
        'admin': json['admin'],
    };
}

export function WhatsNewGet200ResponseOcsDataWhatsNewToJSON(value?: WhatsNewGet200ResponseOcsDataWhatsNew | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'regular': value['regular'],
        'admin': value['admin'],
    };
}

