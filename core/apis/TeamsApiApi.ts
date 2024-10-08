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
  TeamsApiListTeams200Response,
  TeamsApiResolveOne200Response,
} from '../models/index.ts';
import {
    TeamsApiListTeams200ResponseFromJSON,
    TeamsApiListTeams200ResponseToJSON,
    TeamsApiResolveOne200ResponseFromJSON,
    TeamsApiResolveOne200ResponseToJSON,
} from '../models/index.ts';

export interface TeamsApiListTeamsRequest {
    providerId: string;
    resourceId: string;
    oCSAPIRequest: boolean;
}

export interface TeamsApiResolveOneRequest {
    teamId: string;
    oCSAPIRequest: boolean;
}

/**
 * 
 */
export class TeamsApiApi extends runtime.BaseAPI {

    /**
     * Get all teams of a resource
     */
    async teamsApiListTeamsRaw(requestParameters: TeamsApiListTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TeamsApiListTeams200Response>> {
        if (requestParameters['providerId'] == null) {
            throw new runtime.RequiredError(
                'providerId',
                'Required parameter "providerId" was null or undefined when calling teamsApiListTeams().'
            );
        }

        if (requestParameters['resourceId'] == null) {
            throw new runtime.RequiredError(
                'resourceId',
                'Required parameter "resourceId" was null or undefined when calling teamsApiListTeams().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling teamsApiListTeams().'
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
            path: `/ocs/v2.php/teams/resources/{providerId}/{resourceId}`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters['providerId']))).replace(`{${"resourceId"}}`, encodeURIComponent(String(requestParameters['resourceId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamsApiListTeams200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all teams of a resource
     */
    async teamsApiListTeams(requestParameters: TeamsApiListTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TeamsApiListTeams200Response> {
        const response = await this.teamsApiListTeamsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all resources of a team
     */
    async teamsApiResolveOneRaw(requestParameters: TeamsApiResolveOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TeamsApiResolveOne200Response>> {
        if (requestParameters['teamId'] == null) {
            throw new runtime.RequiredError(
                'teamId',
                'Required parameter "teamId" was null or undefined when calling teamsApiResolveOne().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling teamsApiResolveOne().'
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
            path: `/ocs/v2.php/teams/{teamId}/resources`.replace(`{${"teamId"}}`, encodeURIComponent(String(requestParameters['teamId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamsApiResolveOne200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all resources of a team
     */
    async teamsApiResolveOne(requestParameters: TeamsApiResolveOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TeamsApiResolveOne200Response> {
        const response = await this.teamsApiResolveOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
