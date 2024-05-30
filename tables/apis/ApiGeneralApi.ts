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


import * as runtime from '../runtime.ts';
import type {
  ApiGeneralList200Response,
  ApiGeneralList500Response,
} from '../models/index.ts';
import {
    ApiGeneralList200ResponseFromJSON,
    ApiGeneralList200ResponseToJSON,
    ApiGeneralList500ResponseFromJSON,
    ApiGeneralList500ResponseToJSON,
} from '../models/index.ts';

export interface ApiGeneralListRequest {
    oCSAPIRequest: boolean;
}

/**
 * 
 */
export class ApiGeneralApi extends runtime.BaseAPI {

    /**
     * Tables and views incl. shares
     * [api v2] Returns all main resources
     */
    async apiGeneralListRaw(requestParameters: ApiGeneralListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiGeneralList200Response>> {
        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling apiGeneralList().'
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
            path: `/ocs/v2.php/apps/tables/api/2/init`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiGeneralList200ResponseFromJSON(jsonValue));
    }

    /**
     * Tables and views incl. shares
     * [api v2] Returns all main resources
     */
    async apiGeneralList(requestParameters: ApiGeneralListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiGeneralList200Response> {
        const response = await this.apiGeneralListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}