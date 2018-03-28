/*
 *
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const nem2Sdk = require("nem2-sdk");

const AccountHttp = nem2Sdk.AccountHttp,
    MosaicHttp = nem2Sdk.MosaicHttp,
    NamespaceHttp = nem2Sdk.NamespaceHttp,
    MosaicService = nem2Sdk.MosaicService,
    Address = nem2Sdk.Address;

const url = 'http://localhost:3000/';

const accountHttp = new AccountHttp(url);
const mosaicHttp = new MosaicHttp(url);
const namespaceHttp = new NamespaceHttp(url);

const mosaicService = new MosaicService(accountHttp, mosaicHttp, namespaceHttp);

// Replace with address
const address = "SDBDG4IT43MPCW2W4CBBCSJJT42AYALQN7A4VVWL";

mosaicService.mosaicsAmountViewFromAddress(Address.createFromRawAddress(address))
    .flatMap((_) => _)
    .subscribe(function (mosaic) {
        console.log('You have', mosaic.relativeAmount(), mosaic.fullName());
    });