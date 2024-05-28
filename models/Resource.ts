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
import type { OpenGraphObject } from './OpenGraphObject.ts';
import {
    OpenGraphObjectFromJSON,
    OpenGraphObjectFromJSONTyped,
    OpenGraphObjectToJSON,
} from './OpenGraphObject';

/**
 * 
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    richObjectType: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Resource
     */
    richObject: { [key: string]: object; };
    /**
     * 
     * @type {OpenGraphObject}
     * @memberof Resource
     */
    openGraphObject: OpenGraphObject;
    /**
     * 
     * @type {boolean}
     * @memberof Resource
     */
    accessible: boolean;
}

/**
 * Check if a given object implements the Resource interface.
 */
export function instanceOfResource(value: object): value is Resource {
    if (!('richObjectType' in value) || value['richObjectType'] === undefined) return false;
    if (!('richObject' in value) || value['richObject'] === undefined) return false;
    if (!('openGraphObject' in value) || value['openGraphObject'] === undefined) return false;
    if (!('accessible' in value) || value['accessible'] === undefined) return false;
    return true;
}

export function ResourceFromJSON(json: any): Resource {
    return ResourceFromJSONTyped(json, false);
}

export function ResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resource {
    if (json == null) {
        return json;
    }
    return {
        
        'richObjectType': json['richObjectType'],
        'richObject': json['richObject'],
        'openGraphObject': OpenGraphObjectFromJSON(json['openGraphObject']),
        'accessible': json['accessible'],
    };
}

export function ResourceToJSON(value?: Resource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'richObjectType': value['richObjectType'],
        'richObject': value['richObject'],
        'openGraphObject': OpenGraphObjectToJSON(value['openGraphObject']),
        'accessible': value['accessible'],
    };
}

