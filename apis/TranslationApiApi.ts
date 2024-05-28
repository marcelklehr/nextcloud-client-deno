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
  TranslationApiLanguages200Response,
  TranslationApiTranslate200Response,
  TranslationApiTranslate400Response,
} from '../models/index';
import {
    TranslationApiLanguages200ResponseFromJSON,
    TranslationApiLanguages200ResponseToJSON,
    TranslationApiTranslate200ResponseFromJSON,
    TranslationApiTranslate200ResponseToJSON,
    TranslationApiTranslate400ResponseFromJSON,
    TranslationApiTranslate400ResponseToJSON,
} from '../models/index';

export interface TranslationApiLanguagesRequest {
    oCSAPIRequest: boolean;
}

export interface TranslationApiTranslateRequest {
    text: string;
    toLanguage: string;
    oCSAPIRequest: boolean;
    fromLanguage?: string;
}

/**
 * 
 */
export class TranslationApiApi extends runtime.BaseAPI {

    /**
     * Get the list of supported languages
     */
    async translationApiLanguagesRaw(requestParameters: TranslationApiLanguagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TranslationApiLanguages200Response>> {
        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling translationApiLanguages().'
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
            path: `/ocs/v2.php/translation/languages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationApiLanguages200ResponseFromJSON(jsonValue));
    }

    /**
     * Get the list of supported languages
     */
    async translationApiLanguages(requestParameters: TranslationApiLanguagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TranslationApiLanguages200Response> {
        const response = await this.translationApiLanguagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Translate a text
     */
    async translationApiTranslateRaw(requestParameters: TranslationApiTranslateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TranslationApiTranslate200Response>> {
        if (requestParameters['text'] == null) {
            throw new runtime.RequiredError(
                'text',
                'Required parameter "text" was null or undefined when calling translationApiTranslate().'
            );
        }

        if (requestParameters['toLanguage'] == null) {
            throw new runtime.RequiredError(
                'toLanguage',
                'Required parameter "toLanguage" was null or undefined when calling translationApiTranslate().'
            );
        }

        if (requestParameters['oCSAPIRequest'] == null) {
            throw new runtime.RequiredError(
                'oCSAPIRequest',
                'Required parameter "oCSAPIRequest" was null or undefined when calling translationApiTranslate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['text'] != null) {
            queryParameters['text'] = requestParameters['text'];
        }

        if (requestParameters['fromLanguage'] != null) {
            queryParameters['fromLanguage'] = requestParameters['fromLanguage'];
        }

        if (requestParameters['toLanguage'] != null) {
            queryParameters['toLanguage'] = requestParameters['toLanguage'];
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
            path: `/ocs/v2.php/translation/translate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationApiTranslate200ResponseFromJSON(jsonValue));
    }

    /**
     * Translate a text
     */
    async translationApiTranslate(requestParameters: TranslationApiTranslateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TranslationApiTranslate200Response> {
        const response = await this.translationApiTranslateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}