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

import type { Api1UpdateViewDataParameterOneOf } from './Api1UpdateViewDataParameterOneOf.ts';
import {
    instanceOfApi1UpdateViewDataParameterOneOf,
    Api1UpdateViewDataParameterOneOfFromJSON,
    Api1UpdateViewDataParameterOneOfFromJSONTyped,
    Api1UpdateViewDataParameterOneOfToJSON,
} from './Api1UpdateViewDataParameterOneOf.ts';
import type { Api1UpdateViewDataParameterOneOf1 } from './Api1UpdateViewDataParameterOneOf1.ts';
import {
    instanceOfApi1UpdateViewDataParameterOneOf1,
    Api1UpdateViewDataParameterOneOf1FromJSON,
    Api1UpdateViewDataParameterOneOf1FromJSONTyped,
    Api1UpdateViewDataParameterOneOf1ToJSON,
} from './Api1UpdateViewDataParameterOneOf1.ts';
import type { Api1UpdateViewDataParameterOneOf2 } from './Api1UpdateViewDataParameterOneOf2.ts';
import {
    instanceOfApi1UpdateViewDataParameterOneOf2,
    Api1UpdateViewDataParameterOneOf2FromJSON,
    Api1UpdateViewDataParameterOneOf2FromJSONTyped,
    Api1UpdateViewDataParameterOneOf2ToJSON,
} from './Api1UpdateViewDataParameterOneOf2.ts';
import type { Api1UpdateViewDataParameterOneOf3 } from './Api1UpdateViewDataParameterOneOf3.ts';
import {
    instanceOfApi1UpdateViewDataParameterOneOf3,
    Api1UpdateViewDataParameterOneOf3FromJSON,
    Api1UpdateViewDataParameterOneOf3FromJSONTyped,
    Api1UpdateViewDataParameterOneOf3ToJSON,
} from './Api1UpdateViewDataParameterOneOf3.ts';

/**
 * @type Api1UpdateViewDataParameter
 * 
 * @export
 */
export type Api1UpdateViewDataParameter = Api1UpdateViewDataParameterOneOf | Api1UpdateViewDataParameterOneOf1 | Api1UpdateViewDataParameterOneOf2 | Api1UpdateViewDataParameterOneOf3;

export function Api1UpdateViewDataParameterFromJSON(json: any): Api1UpdateViewDataParameter {
    return Api1UpdateViewDataParameterFromJSONTyped(json, false);
}

export function Api1UpdateViewDataParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Api1UpdateViewDataParameter {
    if (json == null) {
        return json;
    }
    if (instanceOfApi1UpdateViewDataParameterOneOf(json)) {
        return Api1UpdateViewDataParameterOneOfFromJSONTyped(json, true);
    }
    if (instanceOfApi1UpdateViewDataParameterOneOf1(json)) {
        return Api1UpdateViewDataParameterOneOf1FromJSONTyped(json, true);
    }
    if (instanceOfApi1UpdateViewDataParameterOneOf2(json)) {
        return Api1UpdateViewDataParameterOneOf2FromJSONTyped(json, true);
    }
    if (instanceOfApi1UpdateViewDataParameterOneOf3(json)) {
        return Api1UpdateViewDataParameterOneOf3FromJSONTyped(json, true);
    }
}

export function Api1UpdateViewDataParameterToJSON(value?: Api1UpdateViewDataParameter | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfApi1UpdateViewDataParameterOneOf(value)) {
        return Api1UpdateViewDataParameterOneOfToJSON(value as Api1UpdateViewDataParameterOneOf);
    }
    if (instanceOfApi1UpdateViewDataParameterOneOf1(value)) {
        return Api1UpdateViewDataParameterOneOf1ToJSON(value as Api1UpdateViewDataParameterOneOf1);
    }
    if (instanceOfApi1UpdateViewDataParameterOneOf2(value)) {
        return Api1UpdateViewDataParameterOneOf2ToJSON(value as Api1UpdateViewDataParameterOneOf2);
    }
    if (instanceOfApi1UpdateViewDataParameterOneOf3(value)) {
        return Api1UpdateViewDataParameterOneOf3ToJSON(value as Api1UpdateViewDataParameterOneOf3);
    }

    return {};
}

