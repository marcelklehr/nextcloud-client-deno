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
 * @interface ProfileApiSetVisibilityRequest
 */
export interface ProfileApiSetVisibilityRequest {
    /**
     * ID of the parameter
     * @type {string}
     * @memberof ProfileApiSetVisibilityRequest
     */
    paramId: string;
    /**
     * New visibility
     * @type {string}
     * @memberof ProfileApiSetVisibilityRequest
     */
    visibility: string;
}

/**
 * Check if a given object implements the ProfileApiSetVisibilityRequest interface.
 */
export function instanceOfProfileApiSetVisibilityRequest(value: object): value is ProfileApiSetVisibilityRequest {
    if (!('paramId' in value) || value['paramId'] === undefined) return false;
    if (!('visibility' in value) || value['visibility'] === undefined) return false;
    return true;
}

export function ProfileApiSetVisibilityRequestFromJSON(json: any): ProfileApiSetVisibilityRequest {
    return ProfileApiSetVisibilityRequestFromJSONTyped(json, false);
}

export function ProfileApiSetVisibilityRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileApiSetVisibilityRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'paramId': json['paramId'],
        'visibility': json['visibility'],
    };
}

export function ProfileApiSetVisibilityRequestToJSON(value?: ProfileApiSetVisibilityRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'paramId': value['paramId'],
        'visibility': value['visibility'],
    };
}

