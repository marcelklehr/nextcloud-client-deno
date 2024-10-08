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
 * @interface LoginFlowV2Credentials
 */
export interface LoginFlowV2Credentials {
    /**
     * 
     * @type {string}
     * @memberof LoginFlowV2Credentials
     */
    server: string;
    /**
     * 
     * @type {string}
     * @memberof LoginFlowV2Credentials
     */
    loginName: string;
    /**
     * 
     * @type {string}
     * @memberof LoginFlowV2Credentials
     */
    appPassword: string;
}

/**
 * Check if a given object implements the LoginFlowV2Credentials interface.
 */
export function instanceOfLoginFlowV2Credentials(value: object): value is LoginFlowV2Credentials {
    if (!('server' in value) || value['server'] === undefined) return false;
    if (!('loginName' in value) || value['loginName'] === undefined) return false;
    if (!('appPassword' in value) || value['appPassword'] === undefined) return false;
    return true;
}

export function LoginFlowV2CredentialsFromJSON(json: any): LoginFlowV2Credentials {
    return LoginFlowV2CredentialsFromJSONTyped(json, false);
}

export function LoginFlowV2CredentialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginFlowV2Credentials {
    if (json == null) {
        return json;
    }
    return {
        
        'server': json['server'],
        'loginName': json['loginName'],
        'appPassword': json['appPassword'],
    };
}

export function LoginFlowV2CredentialsToJSON(value?: LoginFlowV2Credentials | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'server': value['server'],
        'loginName': value['loginName'],
        'appPassword': value['appPassword'],
    };
}

