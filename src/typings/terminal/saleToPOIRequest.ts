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


import { AbortRequest } from "./abortRequest";
import { AdminRequest } from "./adminRequest";
import { BalanceInquiryRequest } from "./balanceInquiryRequest";
import { BatchRequest } from "./batchRequest";
import { CardAcquisitionRequest } from "./cardAcquisitionRequest";
import { CardReaderAPDURequest } from "./cardReaderAPDURequest";
import { CardReaderInitRequest } from "./cardReaderInitRequest";
import { CardReaderPowerOffRequest } from "./cardReaderPowerOffRequest";
import { ContentInformation } from "./contentInformation";
import { DiagnosisRequest } from "./diagnosisRequest";
import { DisplayRequest } from "./displayRequest";
import { EnableServiceRequest } from "./enableServiceRequest";
import { EventNotification } from "./eventNotification";
import { GetTotalsRequest } from "./getTotalsRequest";
import { InputRequest } from "./inputRequest";
import { InputUpdate } from "./inputUpdate";
import { LoginRequest } from "./loginRequest";
import { LogoutRequest } from "./logoutRequest";
import { LoyaltyRequest } from "./loyaltyRequest";
import { MessageHeader } from "./messageHeader";
import { PINRequest } from "./pINRequest";
import { PaymentRequest } from "./paymentRequest";
import { PrintRequest } from "./printRequest";
import { ReconciliationRequest } from "./reconciliationRequest";
import { ReversalRequest } from "./reversalRequest";
import { SoundRequest } from "./soundRequest";
import { StoredValueRequest } from "./storedValueRequest";
import { TransactionStatusRequest } from "./transactionStatusRequest";
import { TransmitRequest } from "./transmitRequest";

export class SaleToPOIRequest {
    "abortRequest"?: AbortRequest;
    "adminRequest"?: AdminRequest;
    "balanceInquiryRequest"?: BalanceInquiryRequest;
    "batchRequest"?: BatchRequest;
    "cardAcquisitionRequest"?: CardAcquisitionRequest;
    "cardReaderAPDURequest"?: CardReaderAPDURequest;
    "cardReaderInitRequest"?: CardReaderInitRequest;
    "cardReaderPowerOffRequest"?: CardReaderPowerOffRequest;
    "diagnosisRequest"?: DiagnosisRequest;
    "displayRequest"?: DisplayRequest;
    "enableServiceRequest"?: EnableServiceRequest;
    "eventNotification"?: EventNotification;
    "getTotalsRequest"?: GetTotalsRequest;
    "inputRequest"?: InputRequest;
    "inputUpdate"?: InputUpdate;
    "loginRequest"?: LoginRequest;
    "logoutRequest"?: LogoutRequest;
    "loyaltyRequest"?: LoyaltyRequest;
    "messageHeader": MessageHeader;
    "paymentRequest"?: PaymentRequest;
    "pINRequest"?: PINRequest;
    "printRequest"?: PrintRequest;
    "reconciliationRequest"?: ReconciliationRequest;
    "reversalRequest"?: ReversalRequest;
    "securityTrailer"?: ContentInformation;
    "soundRequest"?: SoundRequest;
    "storedValueRequest"?: StoredValueRequest;
    "transactionStatusRequest"?: TransactionStatusRequest;
    "transmitRequest"?: TransmitRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "abortRequest",
            "baseName": "AbortRequest",
            "type": "AbortRequest"
        },
        {
            "name": "adminRequest",
            "baseName": "AdminRequest",
            "type": "AdminRequest"
        },
        {
            "name": "balanceInquiryRequest",
            "baseName": "BalanceInquiryRequest",
            "type": "BalanceInquiryRequest"
        },
        {
            "name": "batchRequest",
            "baseName": "BatchRequest",
            "type": "BatchRequest"
        },
        {
            "name": "cardAcquisitionRequest",
            "baseName": "CardAcquisitionRequest",
            "type": "CardAcquisitionRequest"
        },
        {
            "name": "cardReaderAPDURequest",
            "baseName": "CardReaderAPDURequest",
            "type": "CardReaderAPDURequest"
        },
        {
            "name": "cardReaderInitRequest",
            "baseName": "CardReaderInitRequest",
            "type": "CardReaderInitRequest"
        },
        {
            "name": "cardReaderPowerOffRequest",
            "baseName": "CardReaderPowerOffRequest",
            "type": "CardReaderPowerOffRequest"
        },
        {
            "name": "diagnosisRequest",
            "baseName": "DiagnosisRequest",
            "type": "DiagnosisRequest"
        },
        {
            "name": "displayRequest",
            "baseName": "DisplayRequest",
            "type": "DisplayRequest"
        },
        {
            "name": "enableServiceRequest",
            "baseName": "EnableServiceRequest",
            "type": "EnableServiceRequest"
        },
        {
            "name": "eventNotification",
            "baseName": "EventNotification",
            "type": "EventNotification"
        },
        {
            "name": "getTotalsRequest",
            "baseName": "GetTotalsRequest",
            "type": "GetTotalsRequest"
        },
        {
            "name": "inputRequest",
            "baseName": "InputRequest",
            "type": "InputRequest"
        },
        {
            "name": "inputUpdate",
            "baseName": "InputUpdate",
            "type": "InputUpdate"
        },
        {
            "name": "loginRequest",
            "baseName": "LoginRequest",
            "type": "LoginRequest"
        },
        {
            "name": "logoutRequest",
            "baseName": "LogoutRequest",
            "type": "LogoutRequest"
        },
        {
            "name": "loyaltyRequest",
            "baseName": "LoyaltyRequest",
            "type": "LoyaltyRequest"
        },
        {
            "name": "messageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "paymentRequest",
            "baseName": "PaymentRequest",
            "type": "PaymentRequest"
        },
        {
            "name": "pINRequest",
            "baseName": "PINRequest",
            "type": "PINRequest"
        },
        {
            "name": "printRequest",
            "baseName": "PrintRequest",
            "type": "PrintRequest"
        },
        {
            "name": "reconciliationRequest",
            "baseName": "ReconciliationRequest",
            "type": "ReconciliationRequest"
        },
        {
            "name": "reversalRequest",
            "baseName": "ReversalRequest",
            "type": "ReversalRequest"
        },
        {
            "name": "securityTrailer",
            "baseName": "SecurityTrailer",
            "type": "ContentInformation"
        },
        {
            "name": "soundRequest",
            "baseName": "SoundRequest",
            "type": "SoundRequest"
        },
        {
            "name": "storedValueRequest",
            "baseName": "StoredValueRequest",
            "type": "StoredValueRequest"
        },
        {
            "name": "transactionStatusRequest",
            "baseName": "TransactionStatusRequest",
            "type": "TransactionStatusRequest"
        },
        {
            "name": "transmitRequest",
            "baseName": "TransmitRequest",
            "type": "TransmitRequest"
        }    ];

    static getAttributeTypeMap() {
        return SaleToPOIRequest.attributeTypeMap;
    }
}

