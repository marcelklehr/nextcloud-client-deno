/* tslint:disable */
/* eslint-disable */
/**
 * notifications-administration
 * This app provides a backend and frontend for the notification API available in Nextcloud.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime.ts';
import type {
  ApiGenerateNotification200Response,
} from '../models/index.ts';
import {
    ApiGenerateNotification200ResponseFromJSON,
    ApiGenerateNotification200ResponseToJSON,
} from '../models/index.ts';

export interface SettingsAdminRequest {
    batchSetting: number;
    soundNotification: string;
    soundTalk: string;
    apiVersion: SettingsAdminApiVersionEnum;
    oCSAPIRequest: boolean;
}

/**
 * 
 */
export class SettingsApi extends runtime.BaseAPI {

    /**
     * This endpoint requires admin access
     * Update default notification settings for new users
     */
    async settingsAdminRaw(requestParameters: SettingsAdminRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiGenerateNotification200Response>> {
        if (requestParameters['batchSetting'] == null) {
            throw new runtime.RequiredError(
                'batchSetting',
                'Required parameter "batchSetting" was null or undefined when calling settingsAdmin().'
            );
        }

        if (requestParameters['soundNotification'] == null) {
            throw new runtime.RequiredError(
                'soundNotification',
                'Required parameter "soundNotification" was null or undefined when calling settingsAdmin().'
            );
        }

        if (requestParameters['soundTalk'] == null) {
            throw new runtime.RequiredError(
                'soundTalk',
                'Required parameter "soundTalk" was null or undefined when calling settingsAdmin().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling settingsAdmin().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling settingsAdmin().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['batchSetting'] != null) {
            queryParameters['batchSetting'] = requestParameters['batchSetting'];
        }

        if (requestParameters['soundNotification'] != null) {
            queryParameters['soundNotification'] = requestParameters['soundNotification'];
        }

        if (requestParameters['soundTalk'] != null) {
            queryParameters['soundTalk'] = requestParameters['soundTalk'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['oCSAPIRequest'] != null) {
            headerParameters['OCS-APIRequest'] = String(requestParameters['oCSAPIRequest']);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/ocs/v2.php/apps/notifications/api/{apiVersion}/settings/admin`.replace(`{${"apiVersion"}}`, encodeURIComponent(String(requestParameters['apiVersion']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiGenerateNotification200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint requires admin access
     * Update default notification settings for new users
     */
    async settingsAdmin(requestParameters: SettingsAdminRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiGenerateNotification200Response> {
        const response = await this.settingsAdminRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SettingsAdminApiVersionEnum = {
    V2: 'v2'
} as const;
export type SettingsAdminApiVersionEnum = typeof SettingsAdminApiVersionEnum[keyof typeof SettingsAdminApiVersionEnum];