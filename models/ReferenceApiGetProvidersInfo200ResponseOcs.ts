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
import type { ReferenceProvider } from './ReferenceProvider.ts';
import {
    ReferenceProviderFromJSON,
    ReferenceProviderFromJSONTyped,
    ReferenceProviderToJSON,
} from './ReferenceProvider';

/**
 * 
 * @export
 * @interface ReferenceApiGetProvidersInfo200ResponseOcs
 */
export interface ReferenceApiGetProvidersInfo200ResponseOcs {
    /**
     * 
     * @type {OCSMeta}
     * @memberof ReferenceApiGetProvidersInfo200ResponseOcs
     */
    meta: OCSMeta;
    /**
     * 
     * @type {Array<ReferenceProvider>}
     * @memberof ReferenceApiGetProvidersInfo200ResponseOcs
     */
    data: Array<ReferenceProvider>;
}

/**
 * Check if a given object implements the ReferenceApiGetProvidersInfo200ResponseOcs interface.
 */
export function instanceOfReferenceApiGetProvidersInfo200ResponseOcs(value: object): value is ReferenceApiGetProvidersInfo200ResponseOcs {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ReferenceApiGetProvidersInfo200ResponseOcsFromJSON(json: any): ReferenceApiGetProvidersInfo200ResponseOcs {
    return ReferenceApiGetProvidersInfo200ResponseOcsFromJSONTyped(json, false);
}

export function ReferenceApiGetProvidersInfo200ResponseOcsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceApiGetProvidersInfo200ResponseOcs {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': OCSMetaFromJSON(json['meta']),
        'data': ((json['data'] as Array<any>).map(ReferenceProviderFromJSON)),
    };
}

export function ReferenceApiGetProvidersInfo200ResponseOcsToJSON(value?: ReferenceApiGetProvidersInfo200ResponseOcs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': OCSMetaToJSON(value['meta']),
        'data': ((value['data'] as Array<any>).map(ReferenceProviderToJSON)),
    };
}

