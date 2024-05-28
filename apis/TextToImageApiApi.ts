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
  TaskProcessingApiSchedule500Response,
  TextToImageApiIsAvailable200Response,
  TextToImageApiListTasksByApp200Response,
  TextToImageApiSchedule200Response,
} from '../models/index.ts';
import {
    TaskProcessingApiSchedule500ResponseFromJSON,
    TaskProcessingApiSchedule500ResponseToJSON,
    TextToImageApiIsAvailable200ResponseFromJSON,
    TextToImageApiIsAvailable200ResponseToJSON,
    TextToImageApiListTasksByApp200ResponseFromJSON,
    TextToImageApiListTasksByApp200ResponseToJSON,
    TextToImageApiSchedule200ResponseFromJSON,
    TextToImageApiSchedule200ResponseToJSON,
} from '../models/index.ts';

export interface TextToImageApiDeleteTaskRequest {
    id: number;
    oCSAPIRequest: boolean;
}

export interface TextToImageApiGetImageRequest {
    id: number;
    index: number;
    oCSAPIRequest: boolean;
}

export interface TextToImageApiGetTaskRequest {
    id: number;
    oCSAPIRequest: boolean;
}

export interface TextToImageApiIsAvailableRequest {
    oCSAPIRequest: boolean;
}

export interface TextToImageApiListTasksByAppRequest {
    appId: string;
    oCSAPIRequest: boolean;
    identifier?: string;
}

export interface TextToImageApiScheduleRequest {
    input: string;
    appId: string;
    oCSAPIRequest: boolean;
    identifier?: string;
    numberOfImages?: number;
}

/**
 * 
 */
export class TextToImageApiApi extends runtime.BaseAPI {

    /**
     * This endpoint allows to delete a scheduled task for a user
     */
    async textToImageApiDeleteTaskRaw(requestParameters: TextToImageApiDeleteTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TextToImageApiSchedule200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling textToImageApiDeleteTask().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling textToImageApiDeleteTask().'
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
            path: `/ocs/v2.php/text2image/task/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TextToImageApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows to delete a scheduled task for a user
     */
    async textToImageApiDeleteTask(requestParameters: TextToImageApiDeleteTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TextToImageApiSchedule200Response> {
        const response = await this.textToImageApiDeleteTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows downloading the resulting image of a task
     */
    async textToImageApiGetImageRaw(requestParameters: TextToImageApiGetImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling textToImageApiGetImage().'
            );
        }

        if (requestParameters['index'] == null) {
            throw new runtime.RequiredError(
                'index',
                'Required parameter "index" was null or undefined when calling textToImageApiGetImage().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling textToImageApiGetImage().'
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
            path: `/ocs/v2.php/text2image/task/{id}/image/{index}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"index"}}`, encodeURIComponent(String(requestParameters['index']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows downloading the resulting image of a task
     */
    async textToImageApiGetImage(requestParameters: TextToImageApiGetImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.textToImageApiGetImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update.
     */
    async textToImageApiGetTaskRaw(requestParameters: TextToImageApiGetTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TextToImageApiSchedule200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling textToImageApiGetTask().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling textToImageApiGetTask().'
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
            path: `/ocs/v2.php/text2image/task/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TextToImageApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update.
     */
    async textToImageApiGetTask(requestParameters: TextToImageApiGetTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TextToImageApiSchedule200Response> {
        const response = await this.textToImageApiGetTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check whether this feature is available
     */
    async textToImageApiIsAvailableRaw(requestParameters: TextToImageApiIsAvailableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TextToImageApiIsAvailable200Response>> {
        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling textToImageApiIsAvailable().'
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
            path: `/ocs/v2.php/text2image/is_available`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TextToImageApiIsAvailable200ResponseFromJSON(jsonValue));
    }

    /**
     * Check whether this feature is available
     */
    async textToImageApiIsAvailable(requestParameters: TextToImageApiIsAvailableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TextToImageApiIsAvailable200Response> {
        const response = await this.textToImageApiIsAvailableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier
     */
    async textToImageApiListTasksByAppRaw(requestParameters: TextToImageApiListTasksByAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TextToImageApiListTasksByApp200Response>> {
        if (requestParameters['appId'] == null) {
            throw new runtime.RequiredError(
                'appId',
                'Required parameter "appId" was null or undefined when calling textToImageApiListTasksByApp().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling textToImageApiListTasksByApp().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['identifier'] != null) {
            queryParameters['identifier'] = requestParameters['identifier'];
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
            path: `/ocs/v2.php/text2image/tasks/app/{appId}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters['appId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TextToImageApiListTasksByApp200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier
     */
    async textToImageApiListTasksByApp(requestParameters: TextToImageApiListTasksByAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TextToImageApiListTasksByApp200Response> {
        const response = await this.textToImageApiListTasksByAppRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows scheduling a text to image task
     */
    async textToImageApiScheduleRaw(requestParameters: TextToImageApiScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TextToImageApiSchedule200Response>> {
        if (requestParameters['input'] == null) {
            throw new runtime.RequiredError(
                'input',
                'Required parameter "input" was null or undefined when calling textToImageApiSchedule().'
            );
        }

        if (requestParameters['appId'] == null) {
            throw new runtime.RequiredError(
                'appId',
                'Required parameter "appId" was null or undefined when calling textToImageApiSchedule().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling textToImageApiSchedule().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['input'] != null) {
            queryParameters['input'] = requestParameters['input'];
        }

        if (requestParameters['appId'] != null) {
            queryParameters['appId'] = requestParameters['appId'];
        }

        if (requestParameters['identifier'] != null) {
            queryParameters['identifier'] = requestParameters['identifier'];
        }

        if (requestParameters['numberOfImages'] != null) {
            queryParameters['numberOfImages'] = requestParameters['numberOfImages'];
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
            path: `/ocs/v2.php/text2image/schedule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TextToImageApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows scheduling a text to image task
     */
    async textToImageApiSchedule(requestParameters: TextToImageApiScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TextToImageApiSchedule200Response> {
        const response = await this.textToImageApiScheduleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
