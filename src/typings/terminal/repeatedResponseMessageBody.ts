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


import { CardAcquisitionResponse } from './cardAcquisitionResponse';
import { CardReaderAPDUResponse } from './cardReaderAPDUResponse';
import { LoyaltyResponse } from './loyaltyResponse';
import { PaymentResponse } from './paymentResponse';
import { ReversalResponse } from './reversalResponse';
import { StoredValueResponse } from './storedValueResponse';

export class RepeatedResponseMessageBody {
    'cardAcquisitionResponse'?: CardAcquisitionResponse;
    'cardReaderAPDUResponse'?: CardReaderAPDUResponse;
    'loyaltyResponse'?: LoyaltyResponse;
    'paymentResponse'?: PaymentResponse;
    'reversalResponse'?: ReversalResponse;
    'storedValueResponse'?: StoredValueResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardAcquisitionResponse",
            "baseName": "CardAcquisitionResponse",
            "type": "CardAcquisitionResponse"
        },
        {
            "name": "cardReaderAPDUResponse",
            "baseName": "CardReaderAPDUResponse",
            "type": "CardReaderAPDUResponse"
        },
        {
            "name": "loyaltyResponse",
            "baseName": "LoyaltyResponse",
            "type": "LoyaltyResponse"
        },
        {
            "name": "paymentResponse",
            "baseName": "PaymentResponse",
            "type": "PaymentResponse"
        },
        {
            "name": "reversalResponse",
            "baseName": "ReversalResponse",
            "type": "ReversalResponse"
        },
        {
            "name": "storedValueResponse",
            "baseName": "StoredValueResponse",
            "type": "StoredValueResponse"
        }    ];

    static getAttributeTypeMap() {
        return RepeatedResponseMessageBody.attributeTypeMap;
    }
}

