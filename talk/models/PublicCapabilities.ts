/* tslint:disable */
/* eslint-disable */
/**
 * spreed
 * Chat, video & audio-conferencing using WebRTC
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Array<string> } from './Array&lt;string&gt;.ts';
import {
    instanceOfArray<string>,
    Array<string>FromJSON,
    Array<string>FromJSONTyped,
    Array<string>ToJSON,
} from './Array&lt;string&gt;.ts';
import type { PublicCapabilitiesOneOf } from './PublicCapabilitiesOneOf.ts';
import {
    instanceOfPublicCapabilitiesOneOf,
    PublicCapabilitiesOneOfFromJSON,
    PublicCapabilitiesOneOfFromJSONTyped,
    PublicCapabilitiesOneOfToJSON,
} from './PublicCapabilitiesOneOf.ts';

/**
 * @type PublicCapabilities
 * 
 * @export
 */
export type PublicCapabilities = Array<string> | PublicCapabilitiesOneOf;

export function PublicCapabilitiesFromJSON(json: any): PublicCapabilities {
    return PublicCapabilitiesFromJSONTyped(json, false);
}

export function PublicCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicCapabilities {
    if (json == null) {
        return json;
    }
    if (instanceOfArray<string>(json)) {
        return Array<string>FromJSONTyped(json, true);
    }
    if (instanceOfPublicCapabilitiesOneOf(json)) {
        return PublicCapabilitiesOneOfFromJSONTyped(json, true);
    }
}

export function PublicCapabilitiesToJSON(value?: PublicCapabilities | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfArray<string>(value)) {
        return Array<string>ToJSON(value as Array<string>);
    }
    if (instanceOfPublicCapabilitiesOneOf(value)) {
        return PublicCapabilitiesOneOfToJSON(value as PublicCapabilitiesOneOf);
    }

    return {};
}
