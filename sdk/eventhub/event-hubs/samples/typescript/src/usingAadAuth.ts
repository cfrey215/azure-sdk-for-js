// Copyright (c) Microsoft Corporation.
// Licensed under the MIT Licence.

/*
  This sample demonstrates how to instantiate EventHubsClient using AAD token credentials
  obtained from using Service Principal Secrets.

  Setup :
    Please ensure that your Azure Event Hubs resource is in US East, US East 2, or West Europe
    region. AAD Role Based Access Control is not supported in other regions yet.

    Register a new application in AAD and assign the "Azure Event Hubs Data Owner" role to it
     - See https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app
       to register a new application in the Azure Active Directory.
     - Note down the CLIENT_ID and TENANT_ID from the above step.
     - In the "Certificates & Secrets" tab, create a secret and note that down.
     - In the Azure portal, go to your Even Hubs resource and click on the Access control (IAM)
       tab. Here, assign the "Azure Event Hubs Data Owner" role to the registered application.
     - For more information on Event Hubs RBAC setup, learn more at 
      https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-role-based-access-control)

  Note: If you are using version 2.1.0 or lower of @azure/event-hubs library, then please use the samples at
  https://github.com/Azure/azure-sdk-for-js/tree/%40azure/event-hubs_2.1.0/sdk/eventhub/event-hubs/samples instead.
*/
import { EventHubConsumerClient } from "@azure/event-hubs";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// Define Event Hubs Endpoint and related entity name here here
const eventHubsFullyQualifiedName = process.env["EVENTHUB_FQDN"] || ""; // <your-eventhubs-namespace>.servicebus.windows.net
const eventHubName = process.env["EVENTHUB_NAME"] || "";
const consumerGroup = process.env["CONSUMER_GROUP_NAME"] || "";

// Define AZURE_TENANT_ID, AZURE_CLIENT_ID and AZURE_CLIENT_SECRET of your AAD application in your environment

export async function main(): Promise<void> {
  console.log(`Running usingAadAuth sample`);

  const credential = new DefaultAzureCredential();
  const client = new EventHubConsumerClient(
    consumerGroup,
    eventHubsFullyQualifiedName,
    eventHubName,
    credential
  );
  /*
   Refer to other samples, and place your code here
   to send/receive events
  */
  await client.close();

  console.log(`Exiting usingAadAuth sample`);
}

main().catch((error) => {
  console.error("Error running sample:", error);
});
