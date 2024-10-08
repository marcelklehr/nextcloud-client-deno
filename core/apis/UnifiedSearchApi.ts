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


import * as runtime from '../runtime.ts';
import type {
  UnifiedSearchGetProviders200Response,
  UnifiedSearchGetProvidersRequest,
  UnifiedSearchSearch200Response,
  UnifiedSearchSearch400Response,
  UnifiedSearchSearchRequest,
} from '../models/index.ts';
import {
    UnifiedSearchGetProviders200ResponseFromJSON,
    UnifiedSearchGetProviders200ResponseToJSON,
    UnifiedSearchGetProvidersRequestFromJSON,
    UnifiedSearchGetProvidersRequestToJSON,
    UnifiedSearchSearch200ResponseFromJSON,
    UnifiedSearchSearch200ResponseToJSON,
    UnifiedSearchSearch400ResponseFromJSON,
    UnifiedSearchSearch400ResponseToJSON,
    UnifiedSearchSearchRequestFromJSON,
    UnifiedSearchSearchRequestToJSON,
} from '../models/index.ts';

export interface UnifiedSearchGetProvidersOperationRequest {
    oCSAPIRequest: boolean;
    unifiedSearchGetProvidersRequest?: UnifiedSearchGetProvidersRequest;
}

export interface UnifiedSearchSearchOperationRequest {
    providerId: string;
    oCSAPIRequest: boolean;
    unifiedSearchSearchRequest?: UnifiedSearchSearchRequest;
}

/**
 * 
 */
export class UnifiedSearchApi extends runtime.BaseAPI {

    /**
     * Get the providers for unified search
     */
    async unifiedSearchGetProvidersRaw(requestParameters: UnifiedSearchGetProvidersOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnifiedSearchGetProviders200Response>> {
        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling unifiedSearchGetProviders().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/ocs/v2.php/search/providers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: UnifiedSearchGetProvidersRequestToJSON(requestParameters['unifiedSearchGetProvidersRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnifiedSearchGetProviders200ResponseFromJSON(jsonValue));
    }

    /**
     * Get the providers for unified search
     */
    async unifiedSearchGetProviders(requestParameters: UnifiedSearchGetProvidersOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnifiedSearchGetProviders200Response> {
        const response = await this.unifiedSearchGetProvidersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Additional filters are available for each provider. Send a request to /providers endpoint to list providers with their available filters.
     * Launch a search for a specific search provider.
     */
    async unifiedSearchSearchRaw(requestParameters: UnifiedSearchSearchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnifiedSearchSearch200Response>> {
        if (requestParameters['providerId'] == null) {
            throw new runtime.RequiredError(
                'providerId',
                'Required parameter "providerId" was null or undefined when calling unifiedSearchSearch().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling unifiedSearchSearch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/ocs/v2.php/search/providers/{providerId}/search`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters['providerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: UnifiedSearchSearchRequestToJSON(requestParameters['unifiedSearchSearchRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnifiedSearchSearch200ResponseFromJSON(jsonValue));
    }

    /**
     * Additional filters are available for each provider. Send a request to /providers endpoint to list providers with their available filters.
     * Launch a search for a specific search provider.
     */
    async unifiedSearchSearch(requestParameters: UnifiedSearchSearchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnifiedSearchSearch200Response> {
        const response = await this.unifiedSearchSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
