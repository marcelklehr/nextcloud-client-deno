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

/**
 * @type Api1UpdateViewDataParameterOneOf3ValueValue
 * 
 * @export
 */
export type Api1UpdateViewDataParameterOneOf3ValueValue = number | string;

export function Api1UpdateViewDataParameterOneOf3ValueValueFromJSON(json: any): Api1UpdateViewDataParameterOneOf3ValueValue {
    return Api1UpdateViewDataParameterOneOf3ValueValueFromJSONTyped(json, false);
}

export function Api1UpdateViewDataParameterOneOf3ValueValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Api1UpdateViewDataParameterOneOf3ValueValue {
    if (json == null) {
        return json;
    }
    if (instanceOfnumber(json)) {
        return numberFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }
}

export function Api1UpdateViewDataParameterOneOf3ValueValueToJSON(value?: Api1UpdateViewDataParameterOneOf3ValueValue | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}

