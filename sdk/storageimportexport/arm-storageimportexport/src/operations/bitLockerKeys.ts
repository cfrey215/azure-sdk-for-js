/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/bitLockerKeysMappers";
import * as Parameters from "../models/parameters";
import { StorageImportExportManagementClientContext } from "../storageImportExportManagementClientContext";

/** Class representing a BitLockerKeys. */
export class BitLockerKeys {
  private readonly client: StorageImportExportManagementClientContext;

  /**
   * Create a BitLockerKeys.
   * @param {StorageImportExportManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageImportExportManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the BitLocker Keys for all drives in the specified job.
   * @param jobName The name of the import/export job.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within
   * the user subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.BitLockerKeysListResponse>
   */
  list(jobName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BitLockerKeysListResponse>;
  /**
   * @param jobName The name of the import/export job.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within
   * the user subscription.
   * @param callback The callback
   */
  list(jobName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.GetBitLockerKeysResponse>): void;
  /**
   * @param jobName The name of the import/export job.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within
   * the user subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(jobName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetBitLockerKeysResponse>): void;
  list(jobName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetBitLockerKeysResponse>, callback?: msRest.ServiceCallback<Models.GetBitLockerKeysResponse>): Promise<Models.BitLockerKeysListResponse> {
    return this.client.sendOperationRequest(
      {
        jobName,
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BitLockerKeysListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}/listBitLockerKeys",
  urlParameters: [
    Parameters.jobName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GetBitLockerKeysResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};