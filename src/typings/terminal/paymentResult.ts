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


import { AmountsResp } from "./amountsResp";
import { CapturedSignature } from "./capturedSignature";
import { ContentInformation } from "./contentInformation";
import { CurrencyConversion } from "./currencyConversion";
import { Instalment } from "./instalment";
import { PaymentAcquirerData } from "./paymentAcquirerData";
import { PaymentInstrumentData } from "./paymentInstrumentData";

export class PaymentResult {
    "amountsResp"?: AmountsResp;
    "authenticationMethod"?: PaymentResult.AuthenticationMethodEnum[];
    "capturedSignature"?: CapturedSignature;
    "currencyConversion"?: CurrencyConversion[];
    "customerLanguage"?: string;
    "instalmentType"?: Instalment;
    "merchantOverrideFlag"?: boolean;
    "onlineFlag"?: boolean;
    "paymentAcquirerData"?: PaymentAcquirerData;
    "paymentInstrumentData"?: PaymentInstrumentData;
    "paymentType"?: PaymentResult.PaymentTypeEnum;
    "protectedSignature"?: ContentInformation;
    "validityDate"?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "amountsResp",
            "baseName": "AmountsResp",
            "type": "AmountsResp"
        },
        {
            "name": "authenticationMethod",
            "baseName": "AuthenticationMethod",
            "type": "Array<PaymentResult.AuthenticationMethodEnum>"
        },
        {
            "name": "capturedSignature",
            "baseName": "CapturedSignature",
            "type": "CapturedSignature"
        },
        {
            "name": "currencyConversion",
            "baseName": "CurrencyConversion",
            "type": "Array<CurrencyConversion>"
        },
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "instalmentType",
            "baseName": "InstalmentType",
            "type": "Instalment"
        },
        {
            "name": "merchantOverrideFlag",
            "baseName": "MerchantOverrideFlag",
            "type": "boolean"
        },
        {
            "name": "onlineFlag",
            "baseName": "OnlineFlag",
            "type": "boolean"
        },
        {
            "name": "paymentAcquirerData",
            "baseName": "PaymentAcquirerData",
            "type": "PaymentAcquirerData"
        },
        {
            "name": "paymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        },
        {
            "name": "paymentType",
            "baseName": "PaymentType",
            "type": "PaymentResult.PaymentTypeEnum"
        },
        {
            "name": "protectedSignature",
            "baseName": "ProtectedSignature",
            "type": "ContentInformation"
        },
        {
            "name": "validityDate",
            "baseName": "ValidityDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentResult.attributeTypeMap;
    }
}

export namespace PaymentResult {
    export enum AuthenticationMethodEnum {
        Bypass = "Bypass" as any,
        ManualVerification = "ManualVerification" as any,
        MerchantAuthentication = "MerchantAuthentication" as any,
        OfflinePIN = "OfflinePIN" as any,
        OnlinePIN = "OnlinePIN" as any,
        PaperSignature = "PaperSignature" as any,
        SecureCertificate = "SecureCertificate" as any,
        SecureNoCertificate = "SecureNoCertificate" as any,
        SecuredChannel = "SecuredChannel" as any,
        SignatureCapture = "SignatureCapture" as any,
        UnknownMethod = "UnknownMethod" as any
    }
    export enum PaymentTypeEnum {
        CashAdvance = "CashAdvance" as any,
        CashDeposit = "CashDeposit" as any,
        Completion = "Completion" as any,
        FirstReservation = "FirstReservation" as any,
        Instalment = "Instalment" as any,
        IssuerInstalment = "IssuerInstalment" as any,
        Normal = "Normal" as any,
        OneTimeReservation = "OneTimeReservation" as any,
        PaidOut = "PaidOut" as any,
        Recurring = "Recurring" as any,
        Refund = "Refund" as any,
        UpdateReservation = "UpdateReservation" as any
    }
}
