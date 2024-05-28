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
  LoginFlowV2,
  LoginFlowV2Credentials,
} from '../models/index';
import {
    LoginFlowV2FromJSON,
    LoginFlowV2ToJSON,
    LoginFlowV2CredentialsFromJSON,
    LoginFlowV2CredentialsToJSON,
} from '../models/index';

export interface ClientFlowLoginV2PollRequest {
    token: string;
}

/**
 * 
 */
export class ClientFlowLoginV2Api extends runtime.BaseAPI {

    /**
     * Init a login flow
     */
    async clientFlowLoginV2InitRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginFlowV2>> {
        const queryParameters: any = {};

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
            path: `/index.php/login/v2`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginFlowV2FromJSON(jsonValue));
    }

    /**
     * Init a login flow
     */
    async clientFlowLoginV2Init(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginFlowV2> {
        const response = await this.clientFlowLoginV2InitRaw(initOverrides);
        return await response.value();
    }

    /**
     * Poll the login flow credentials
     */
    async clientFlowLoginV2PollRaw(requestParameters: ClientFlowLoginV2PollRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginFlowV2Credentials>> {
        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling clientFlowLoginV2Poll().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['token'] != null) {
            queryParameters['token'] = requestParameters['token'];
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
            path: `/index.php/login/v2/poll`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginFlowV2CredentialsFromJSON(jsonValue));
    }

    /**
     * Poll the login flow credentials
     */
    async clientFlowLoginV2Poll(requestParameters: ClientFlowLoginV2PollRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginFlowV2Credentials> {
        const response = await this.clientFlowLoginV2PollRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
