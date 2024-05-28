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


import * as runtime from '../runtime.ts';
import type {
  AppPasswordGetAppPassword403Response,
  HoverCardGetUser200Response,
} from '../models/index';
import {
    AppPasswordGetAppPassword403ResponseFromJSON,
    AppPasswordGetAppPassword403ResponseToJSON,
    HoverCardGetUser200ResponseFromJSON,
    HoverCardGetUser200ResponseToJSON,
} from '../models/index';

export interface HoverCardGetUserRequest {
    userId: string;
    oCSAPIRequest: boolean;
}

/**
 * 
 */
export class HoverCardApi extends runtime.BaseAPI {

    /**
     * Get the account details for a hovercard
     */
    async hoverCardGetUserRaw(requestParameters: HoverCardGetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HoverCardGetUser200Response>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling hoverCardGetUser().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling hoverCardGetUser().'
            );
        }

        const queryParameters: any = {};

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
            path: `/ocs/v2.php/hovercard/v1/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HoverCardGetUser200ResponseFromJSON(jsonValue));
    }

    /**
     * Get the account details for a hovercard
     */
    async hoverCardGetUser(requestParameters: HoverCardGetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HoverCardGetUser200Response> {
        const response = await this.hoverCardGetUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
