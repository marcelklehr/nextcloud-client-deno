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
} from './OCSMeta';
import type { WhatsNewGet200ResponseOcsData } from './WhatsNewGet200ResponseOcsData.ts';
import {
    WhatsNewGet200ResponseOcsDataFromJSON,
    WhatsNewGet200ResponseOcsDataFromJSONTyped,
    WhatsNewGet200ResponseOcsDataToJSON,
} from './WhatsNewGet200ResponseOcsData';

/**
 * 
 * @export
 * @interface WhatsNewGet200ResponseOcs
 */
export interface WhatsNewGet200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof WhatsNewGet200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {WhatsNewGet200ResponseOcsData}
     * @memberof WhatsNewGet200ResponseOcs
     */
    data: WhatsNewGet200ResponseOcsData;
}

/**
 * Check if a given object implements the WhatsNewGet200ResponseOcs interface.
 */
export function instanceOfWhatsNewGet200ResponseOcs(value: object): value is WhatsNewGet200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function WhatsNewGet200ResponseOcsFromJSON(json: any): WhatsNewGet200ResponseOcs {
    return WhatsNewGet200ResponseOcsFromJSONTyped(json, false);
}

export function WhatsNewGet200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WhatsNewGet200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': WhatsNewGet200ResponseOcsDataFromJSON(json['data']),
    };
}

export function WhatsNewGet200ResponseOcsToJSON(value?: WhatsNewGet200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': WhatsNewGet200ResponseOcsDataToJSON(value['data']),
    };
}
