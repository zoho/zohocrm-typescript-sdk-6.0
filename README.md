# ZOHO CRM TYPESCRIPT SDK 6.0 for API Version 6

The TypeScript SDK for Zoho CRM allows developers to easily create TypeScript applications that can be integrated with Zoho CRM. This SDK serves as a wrapper for the REST APIs, making it easier to access and utilize the services of Zoho CRM. 
Authentication to access the CRM APIs is done through OAuth2.0, and the authentication process is streamlined through the use of the TypeScript SDK. The grant and access/refresh tokens are generated and managed within the SDK code, eliminating the need for manual handling during data synchronization between Zoho CRM and the client application.

This repository includes the TypeScript SDK for API v6 of Zoho CRM. Check [Versions](https://github.com/zoho/zohocrm-typescript-sdk-6.0/releases) for more details on the versions of SDK released for this API version.

License
=======

    Copyright (c) 2021, ZOHO CORPORATION PRIVATE LIMITED 
    All rights reserved. 

    Licensed under the Apache License, Version 2.0 (the "License"); 
    you may not use this file except in compliance with the License. 
    You may obtain a copy of the License at 
    
        http://www.apache.org/licenses/LICENSE-2.0 
    
    Unless required by applicable law or agreed to in writing, software 
    distributed under the License is distributed on an "AS IS" BASIS, 
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
    See the License for the specific language governing permissions and 
    limitations under the License.

## Latest Version

- [1.0.0](/versions/1.0.0/README.md)
    - TypeScript SDK upgraded to support v6 APIs.
    - TypeScript SDK improved to support the following new APIs
        - [Unsubscribe Links](https://www.zoho.com/crm/developer/docs/api/v6/get-unsubscribe-links.html)
        - [Find and Merge API](https://www.zoho.com/crm/developer/docs/api/v6/merge-records.html)
        - [Get Related Records of Deleted Record API](https://www.zoho.com/crm/developer/docs/api/v6/get-related-records-of-deleted-record.html)
        - [Features API](https://www.zoho.com/crm/developer/docs/api/v6/get-features.html)
        - [Global Picklist API](https://www.zoho.com/crm/developer/docs/api/v6/get-global-picklist.html)
        - [Unblock Email API](https://www.zoho.com/crm/developer/docs/api/v6/unblock-emails.html)


For older versions, please [refer](https://github.com/zoho/zohocrm-typescript-sdk-6.0/releases).


## Including the SDK in your project
You can include the SDK to your project using:

For including the latest [version](https://github.com/zoho/zohocrm-typescript-sdk-6.0/releases/tag/1.0.0) using npm

  - Install **Node** from [nodejs.org](https://nodejs.org/en/download/) (if not installed).

  - Install **TypeScript SDK**

    - Navigate to the workspace of your client app.
    
    - Run the command below:

        ```sh
        npm install @zohocrm/typescript-sdk-6.0
        ```
### Dependencies

- Dependencies that should be included in your project

  - install **form-data**
    ```sh
    npm i form-data
    ```
  - install **ts-node**
    ```sh
    npm i ts-node
    ```
  - install **typescript**
    ```sh
    npm i typescript
    ```
  - install **got**
    ```sh
    npm i got
    ```
  - install **moment-timezone**
    ```sh
    npm i moment-timezone
    ```
  - install **mysql**
    ```sh
    npm i mysql
    ```
  - install **tunnel**
    ```sh
    npm i tunnel
    ```
  - install **winston**
    ```sh
    npm i winston
    ```
  - install **@types/mysql**
    ```sh
    npm i @types/mysql
    ```
  - install **@types/tunnel**
    ```sh
    npm i @types/tunnel
    ```
For more details, kindly refer [here](/versions/1.0.0/README.md).
