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
  TaskProcessingApiDeleteTask200Response,
  TaskProcessingApiListTasksByApp200Response,
  TaskProcessingApiSchedule200Response,
  TaskProcessingApiSchedule500Response,
  TaskProcessingApiTaskTypes200Response,
} from '../models/index';
import {
    TaskProcessingApiDeleteTask200ResponseFromJSON,
    TaskProcessingApiDeleteTask200ResponseToJSON,
    TaskProcessingApiListTasksByApp200ResponseFromJSON,
    TaskProcessingApiListTasksByApp200ResponseToJSON,
    TaskProcessingApiSchedule200ResponseFromJSON,
    TaskProcessingApiSchedule200ResponseToJSON,
    TaskProcessingApiSchedule500ResponseFromJSON,
    TaskProcessingApiSchedule500ResponseToJSON,
    TaskProcessingApiTaskTypes200ResponseFromJSON,
    TaskProcessingApiTaskTypes200ResponseToJSON,
} from '../models/index';

export interface TaskProcessingApiCancelTaskRequest {
    taskId: number;
    oCSAPIRequest: boolean;
}

export interface TaskProcessingApiDeleteTaskRequest {
    id: number;
    oCSAPIRequest: boolean;
}

export interface TaskProcessingApiGetFileContentsRequest {
    taskId: number;
    fileId: number;
    oCSAPIRequest: boolean;
}

export interface TaskProcessingApiGetTaskRequest {
    id: number;
    oCSAPIRequest: boolean;
}

export interface TaskProcessingApiListTasksByAppRequest {
    appId: string;
    oCSAPIRequest: boolean;
    customId?: string;
}

export interface TaskProcessingApiListTasksByUserRequest {
    oCSAPIRequest: boolean;
    taskType?: string;
    customId?: string;
}

export interface TaskProcessingApiScheduleRequest {
    input: string;
    type: string;
    appId: string;
    oCSAPIRequest: boolean;
    customId?: string;
}

export interface TaskProcessingApiSetProgressRequest {
    progress: number;
    taskId: number;
    oCSAPIRequest: boolean;
}

export interface TaskProcessingApiSetResultRequest {
    taskId: number;
    oCSAPIRequest: boolean;
    output?: string;
    errorMessage?: string;
}

export interface TaskProcessingApiTaskTypesRequest {
    oCSAPIRequest: boolean;
}

/**
 * 
 */
export class TaskProcessingApiApi extends runtime.BaseAPI {

    /**
     * This endpoint cancels a task
     */
    async taskProcessingApiCancelTaskRaw(requestParameters: TaskProcessingApiCancelTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiSchedule200Response>> {
        if (requestParameters['taskId'] == null) {
            throw new runtime.RequiredError(
                'taskId',
                'Required parameter "taskId" was null or undefined when calling taskProcessingApiCancelTask().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiCancelTask().'
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
            path: `/ocs/v2.php/taskprocessing/tasks/{taskId}/cancel`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters['taskId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint cancels a task
     */
    async taskProcessingApiCancelTask(requestParameters: TaskProcessingApiCancelTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiSchedule200Response> {
        const response = await this.taskProcessingApiCancelTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows to delete a scheduled task for a user
     */
    async taskProcessingApiDeleteTaskRaw(requestParameters: TaskProcessingApiDeleteTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiDeleteTask200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling taskProcessingApiDeleteTask().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiDeleteTask().'
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
            path: `/ocs/v2.php/taskprocessing/task/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiDeleteTask200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows to delete a scheduled task for a user
     */
    async taskProcessingApiDeleteTask(requestParameters: TaskProcessingApiDeleteTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiDeleteTask200Response> {
        const response = await this.taskProcessingApiDeleteTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns the contents of a file referenced in a task
     */
    async taskProcessingApiGetFileContentsRaw(requestParameters: TaskProcessingApiGetFileContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['taskId'] == null) {
            throw new runtime.RequiredError(
                'taskId',
                'Required parameter "taskId" was null or undefined when calling taskProcessingApiGetFileContents().'
            );
        }

        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling taskProcessingApiGetFileContents().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiGetFileContents().'
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
            path: `/ocs/v2.php/taskprocessing/tasks/{taskId}/file/{fileId}`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters['taskId']))).replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint returns the contents of a file referenced in a task
     */
    async taskProcessingApiGetFileContents(requestParameters: TaskProcessingApiGetFileContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.taskProcessingApiGetFileContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update
     */
    async taskProcessingApiGetTaskRaw(requestParameters: TaskProcessingApiGetTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiSchedule200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling taskProcessingApiGetTask().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiGetTask().'
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
            path: `/ocs/v2.php/taskprocessing/task/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update
     */
    async taskProcessingApiGetTask(requestParameters: TaskProcessingApiGetTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiSchedule200Response> {
        const response = await this.taskProcessingApiGetTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier
     */
    async taskProcessingApiListTasksByAppRaw(requestParameters: TaskProcessingApiListTasksByAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiListTasksByApp200Response>> {
        if (requestParameters['appId'] == null) {
            throw new runtime.RequiredError(
                'appId',
                'Required parameter "appId" was null or undefined when calling taskProcessingApiListTasksByApp().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiListTasksByApp().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['customId'] != null) {
            queryParameters['customId'] = requestParameters['customId'];
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
            path: `/ocs/v2.php/taskprocessing/tasks/app/{appId}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters['appId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiListTasksByApp200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier
     */
    async taskProcessingApiListTasksByApp(requestParameters: TaskProcessingApiListTasksByAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiListTasksByApp200Response> {
        const response = await this.taskProcessingApiListTasksByAppRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier
     */
    async taskProcessingApiListTasksByUserRaw(requestParameters: TaskProcessingApiListTasksByUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiListTasksByApp200Response>> {
        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiListTasksByUser().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['taskType'] != null) {
            queryParameters['taskType'] = requestParameters['taskType'];
        }

        if (requestParameters['customId'] != null) {
            queryParameters['customId'] = requestParameters['customId'];
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
            path: `/ocs/v2.php/taskprocessing/tasks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiListTasksByApp200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier
     */
    async taskProcessingApiListTasksByUser(requestParameters: TaskProcessingApiListTasksByUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiListTasksByApp200Response> {
        const response = await this.taskProcessingApiListTasksByUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows scheduling a task
     */
    async taskProcessingApiScheduleRaw(requestParameters: TaskProcessingApiScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiSchedule200Response>> {
        if (requestParameters['input'] == null) {
            throw new runtime.RequiredError(
                'input',
                'Required parameter "input" was null or undefined when calling taskProcessingApiSchedule().'
            );
        }

        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling taskProcessingApiSchedule().'
            );
        }

        if (requestParameters['appId'] == null) {
            throw new runtime.RequiredError(
                'appId',
                'Required parameter "appId" was null or undefined when calling taskProcessingApiSchedule().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiSchedule().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['input'] != null) {
            queryParameters['input'] = requestParameters['input'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['appId'] != null) {
            queryParameters['appId'] = requestParameters['appId'];
        }

        if (requestParameters['customId'] != null) {
            queryParameters['customId'] = requestParameters['customId'];
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
            path: `/ocs/v2.php/taskprocessing/schedule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows scheduling a task
     */
    async taskProcessingApiSchedule(requestParameters: TaskProcessingApiScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiSchedule200Response> {
        const response = await this.taskProcessingApiScheduleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint sets the task progress
     */
    async taskProcessingApiSetProgressRaw(requestParameters: TaskProcessingApiSetProgressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiSchedule200Response>> {
        if (requestParameters['progress'] == null) {
            throw new runtime.RequiredError(
                'progress',
                'Required parameter "progress" was null or undefined when calling taskProcessingApiSetProgress().'
            );
        }

        if (requestParameters['taskId'] == null) {
            throw new runtime.RequiredError(
                'taskId',
                'Required parameter "taskId" was null or undefined when calling taskProcessingApiSetProgress().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiSetProgress().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['progress'] != null) {
            queryParameters['progress'] = requestParameters['progress'];
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
            path: `/ocs/v2.php/taskprocessing/tasks/{taskId}/progress`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters['taskId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint sets the task progress
     */
    async taskProcessingApiSetProgress(requestParameters: TaskProcessingApiSetProgressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiSchedule200Response> {
        const response = await this.taskProcessingApiSetProgressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint sets the task progress
     */
    async taskProcessingApiSetResultRaw(requestParameters: TaskProcessingApiSetResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiSchedule200Response>> {
        if (requestParameters['taskId'] == null) {
            throw new runtime.RequiredError(
                'taskId',
                'Required parameter "taskId" was null or undefined when calling taskProcessingApiSetResult().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiSetResult().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['output'] != null) {
            queryParameters['output'] = requestParameters['output'];
        }

        if (requestParameters['errorMessage'] != null) {
            queryParameters['errorMessage'] = requestParameters['errorMessage'];
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
            path: `/ocs/v2.php/taskprocessing/tasks/{taskId}/result`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters['taskId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiSchedule200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint sets the task progress
     */
    async taskProcessingApiSetResult(requestParameters: TaskProcessingApiSetResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiSchedule200Response> {
        const response = await this.taskProcessingApiSetResultRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns all available TaskProcessing task types
     */
    async taskProcessingApiTaskTypesRaw(requestParameters: TaskProcessingApiTaskTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaskProcessingApiTaskTypes200Response>> {
        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling taskProcessingApiTaskTypes().'
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
            path: `/ocs/v2.php/taskprocessing/tasktypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskProcessingApiTaskTypes200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns all available TaskProcessing task types
     */
    async taskProcessingApiTaskTypes(requestParameters: TaskProcessingApiTaskTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaskProcessingApiTaskTypes200Response> {
        const response = await this.taskProcessingApiTaskTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
