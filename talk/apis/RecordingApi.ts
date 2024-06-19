/* tslint:disable */
/* eslint-disable */
/**
 * spreed
 * Chat, video & audio-conferencing using WebRTC
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
  BanBanActor400Response,
  BanUnbanActor200Response,
} from '../models/index.ts';
import {
    BanBanActor400ResponseFromJSON,
    BanBanActor400ResponseToJSON,
    BanUnbanActor200ResponseFromJSON,
    BanUnbanActor200ResponseToJSON,
} from '../models/index.ts';

export interface RecordingNotificationDismissRequest {
    timestamp: number;
    apiVersion: RecordingNotificationDismissApiVersionEnum;
    token: string;
    oCSAPIRequest: boolean;
}

export interface RecordingShareToChatRequest {
    fileId: number;
    timestamp: number;
    apiVersion: RecordingShareToChatApiVersionEnum;
    token: string;
    oCSAPIRequest: boolean;
}

export interface RecordingStartRequest {
    status: number;
    apiVersion: RecordingStartApiVersionEnum;
    token: string;
    oCSAPIRequest: boolean;
}

export interface RecordingStopRequest {
    apiVersion: RecordingStopApiVersionEnum;
    token: string;
    oCSAPIRequest: boolean;
}

/**
 * 
 */
export class RecordingApi extends runtime.BaseAPI {

    /**
     * Dismiss the store call recording notification
     */
    async recordingNotificationDismissRaw(requestParameters: RecordingNotificationDismissRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BanUnbanActor200Response>> {
        if (requestParameters['timestamp'] == null) {
            throw new runtime.RequiredError(
                'timestamp',
                'Required parameter "timestamp" was null or undefined when calling recordingNotificationDismiss().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling recordingNotificationDismiss().'
            );
        }

        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling recordingNotificationDismiss().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling recordingNotificationDismiss().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['timestamp'] != null) {
            queryParameters['timestamp'] = requestParameters['timestamp'];
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
            path: `/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/notification`.replace(`{${"apiVersion"}}`, encodeURIComponent(String(requestParameters['apiVersion']))).replace(`{${"token"}}`, encodeURIComponent(String(requestParameters['token']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BanUnbanActor200ResponseFromJSON(jsonValue));
    }

    /**
     * Dismiss the store call recording notification
     */
    async recordingNotificationDismiss(requestParameters: RecordingNotificationDismissRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BanUnbanActor200Response> {
        const response = await this.recordingNotificationDismissRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Share the recorded file to the chat
     */
    async recordingShareToChatRaw(requestParameters: RecordingShareToChatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BanUnbanActor200Response>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling recordingShareToChat().'
            );
        }

        if (requestParameters['timestamp'] == null) {
            throw new runtime.RequiredError(
                'timestamp',
                'Required parameter "timestamp" was null or undefined when calling recordingShareToChat().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling recordingShareToChat().'
            );
        }

        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling recordingShareToChat().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling recordingShareToChat().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fileId'] != null) {
            queryParameters['fileId'] = requestParameters['fileId'];
        }

        if (requestParameters['timestamp'] != null) {
            queryParameters['timestamp'] = requestParameters['timestamp'];
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
            path: `/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/share-chat`.replace(`{${"apiVersion"}}`, encodeURIComponent(String(requestParameters['apiVersion']))).replace(`{${"token"}}`, encodeURIComponent(String(requestParameters['token']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BanUnbanActor200ResponseFromJSON(jsonValue));
    }

    /**
     * Share the recorded file to the chat
     */
    async recordingShareToChat(requestParameters: RecordingShareToChatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BanUnbanActor200Response> {
        const response = await this.recordingShareToChatRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start the recording
     */
    async recordingStartRaw(requestParameters: RecordingStartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BanUnbanActor200Response>> {
        if (requestParameters['status'] == null) {
            throw new runtime.RequiredError(
                'status',
                'Required parameter "status" was null or undefined when calling recordingStart().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling recordingStart().'
            );
        }

        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling recordingStart().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling recordingStart().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
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
            path: `/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}`.replace(`{${"apiVersion"}}`, encodeURIComponent(String(requestParameters['apiVersion']))).replace(`{${"token"}}`, encodeURIComponent(String(requestParameters['token']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BanUnbanActor200ResponseFromJSON(jsonValue));
    }

    /**
     * Start the recording
     */
    async recordingStart(requestParameters: RecordingStartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BanUnbanActor200Response> {
        const response = await this.recordingStartRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stop the recording
     */
    async recordingStopRaw(requestParameters: RecordingStopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BanUnbanActor200Response>> {
        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling recordingStop().'
            );
        }

        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling recordingStop().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling recordingStop().'
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
            path: `/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}`.replace(`{${"apiVersion"}}`, encodeURIComponent(String(requestParameters['apiVersion']))).replace(`{${"token"}}`, encodeURIComponent(String(requestParameters['token']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BanUnbanActor200ResponseFromJSON(jsonValue));
    }

    /**
     * Stop the recording
     */
    async recordingStop(requestParameters: RecordingStopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BanUnbanActor200Response> {
        const response = await this.recordingStopRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const RecordingNotificationDismissApiVersionEnum = {
    V1: 'v1'
} as const;
export type RecordingNotificationDismissApiVersionEnum = typeof RecordingNotificationDismissApiVersionEnum[keyof typeof RecordingNotificationDismissApiVersionEnum];
/**
 * @export
 */
export const RecordingShareToChatApiVersionEnum = {
    V1: 'v1'
} as const;
export type RecordingShareToChatApiVersionEnum = typeof RecordingShareToChatApiVersionEnum[keyof typeof RecordingShareToChatApiVersionEnum];
/**
 * @export
 */
export const RecordingStartApiVersionEnum = {
    V1: 'v1'
} as const;
export type RecordingStartApiVersionEnum = typeof RecordingStartApiVersionEnum[keyof typeof RecordingStartApiVersionEnum];
/**
 * @export
 */
export const RecordingStopApiVersionEnum = {
    V1: 'v1'
} as const;
export type RecordingStopApiVersionEnum = typeof RecordingStopApiVersionEnum[keyof typeof RecordingStopApiVersionEnum];
