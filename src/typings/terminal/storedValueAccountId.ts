/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { IdentificationType } from "./identificationType";
import { StoredValueAccountType } from "./storedValueAccountType";

export class StoredValueAccountId {
    "entryMode": StoredValueAccountId.EntryModeEnum[];
    "expiryDate"?: string;
    "identificationType": IdentificationType;
    "ownerName"?: string;
    "storedValueAccountType": StoredValueAccountType;
    "storedValueProvider"?: string;
    "value"?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "entryMode",
            "baseName": "EntryMode",
            "type": "Array<StoredValueAccountId.EntryModeEnum>"
        },
        {
            "name": "expiryDate",
            "baseName": "ExpiryDate",
            "type": "string"
        },
        {
            "name": "identificationType",
            "baseName": "IdentificationType",
            "type": "IdentificationType"
        },
        {
            "name": "ownerName",
            "baseName": "OwnerName",
            "type": "string"
        },
        {
            "name": "storedValueAccountType",
            "baseName": "StoredValueAccountType",
            "type": "StoredValueAccountType"
        },
        {
            "name": "storedValueProvider",
            "baseName": "StoredValueProvider",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueAccountId.attributeTypeMap;
    }
}

export namespace StoredValueAccountId {
    export enum EntryModeEnum {
        Contactless = "Contactless" as any,
        File = "File" as any,
        ICC = "ICC" as any,
        Keyed = "Keyed" as any,
        MagStripe = "MagStripe" as any,
        Manual = "Manual" as any,
        Mobile = "Mobile" as any,
        RFID = "RFID" as any,
        Scanned = "Scanned" as any,
        SynchronousICC = "SynchronousICC" as any,
        Tapped = "Tapped" as any
    }
}
