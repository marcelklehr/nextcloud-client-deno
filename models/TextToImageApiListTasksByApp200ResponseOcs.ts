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
import type { TextToImageApiListTasksByApp200ResponseOcsData } from './TextToImageApiListTasksByApp200ResponseOcsData.ts';
import {
    TextToImageApiListTasksByApp200ResponseOcsDataFromJSON,
    TextToImageApiListTasksByApp200ResponseOcsDataFromJSONTyped,
    TextToImageApiListTasksByApp200ResponseOcsDataToJSON,
} from './TextToImageApiListTasksByApp200ResponseOcsData';
import type { OCSMeta } from './OCSMeta.ts';
import {
    OCSMetaFromJSON,
    OCSMetaFromJSONTyped,
    OCSMetaToJSON,
} from './OCSMeta';

/**
 * 
 * @export
 * @interface TextToImageApiListTasksByApp200ResponseOcs
 */
export interface TextToImageApiListTasksByApp200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof TextToImageApiListTasksByApp200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {TextToImageApiListTasksByApp200ResponseOcsData}
     * @memberof TextToImageApiListTasksByApp200ResponseOcs
     */
    data: TextToImageApiListTasksByApp200ResponseOcsData;
}

/**
 * Check if a given object implements the TextToImageApiListTasksByApp200ResponseOcs interface.
 */
export function instanceOfTextToImageApiListTasksByApp200ResponseOcs(value: object): value is TextToImageApiListTasksByApp200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TextToImageApiListTasksByApp200ResponseOcsFromJSON(json: any): TextToImageApiListTasksByApp200ResponseOcs {
    return TextToImageApiListTasksByApp200ResponseOcsFromJSONTyped(json, false);
}

export function TextToImageApiListTasksByApp200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextToImageApiListTasksByApp200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': TextToImageApiListTasksByApp200ResponseOcsDataFromJSON(json['data']),
    };
}

export function TextToImageApiListTasksByApp200ResponseOcsToJSON(value?: TextToImageApiListTasksByApp200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': TextToImageApiListTasksByApp200ResponseOcsDataToJSON(value['data']),
    };
}

