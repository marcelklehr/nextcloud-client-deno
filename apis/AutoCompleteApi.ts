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
  AutoCompleteGet200Response,
} from '../models/index.ts';
import {
    AutoCompleteGet200ResponseFromJSON,
    AutoCompleteGet200ResponseToJSON,
} from '../models/index.ts';

export interface AutoCompleteGetRequest {
    search: string;
    oCSAPIRequest: boolean;
    itemType?: string;
    itemId?: string;
    sorter?: string;
    shareTypes?: Array<number>;
    limit?: number;
}

/**
 * 
 */
export class AutoCompleteApi extends runtime.BaseAPI {

    /**
     * Autocomplete a query
     */
    async autoCompleteGetRaw(requestParameters: AutoCompleteGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoCompleteGet200Response>> {
        if (requestParameters['search'] == null) {
            throw new runtime.RequiredError(
                'search',
                'Required parameter "search" was null or undefined when calling autoCompleteGet().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling autoCompleteGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['itemType'] != null) {
            queryParameters['itemType'] = requestParameters['itemType'];
        }

        if (requestParameters['itemId'] != null) {
            queryParameters['itemId'] = requestParameters['itemId'];
        }

        if (requestParameters['sorter'] != null) {
            queryParameters['sorter'] = requestParameters['sorter'];
        }

        if (requestParameters['shareTypes'] != null) {
            queryParameters['shareTypes[]'] = requestParameters['shareTypes'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/ocs/v2.php/core/autocomplete/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoCompleteGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Autocomplete a query
     */
    async autoCompleteGet(requestParameters: AutoCompleteGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoCompleteGet200Response> {
        const response = await this.autoCompleteGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
