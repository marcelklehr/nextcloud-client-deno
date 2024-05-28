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
  AppPasswordConfirmUserPassword200ResponseOcsData,
} from '../models/index';
import {
    AppPasswordConfirmUserPassword200ResponseOcsDataFromJSON,
    AppPasswordConfirmUserPassword200ResponseOcsDataToJSON,
} from '../models/index';

export interface LoginConfirmPasswordRequest {
    password: string;
}

/**
 * 
 */
export class LoginApi extends runtime.BaseAPI {

    /**
     * Confirm the user password
     */
    async loginConfirmPasswordRaw(requestParameters: LoginConfirmPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPasswordConfirmUserPassword200ResponseOcsData>> {
        if (requestParameters['password'] == null) {
            throw new runtime.RequiredError(
                'password',
                'Required parameter "password" was null or undefined when calling loginConfirmPassword().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['password'] != null) {
            queryParameters['password'] = requestParameters['password'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

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
            path: `/index.php/login/confirm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppPasswordConfirmUserPassword200ResponseOcsDataFromJSON(jsonValue));
    }

    /**
     * Confirm the user password
     */
    async loginConfirmPassword(requestParameters: LoginConfirmPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPasswordConfirmUserPassword200ResponseOcsData> {
        const response = await this.loginConfirmPasswordRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
