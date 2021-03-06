/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    window.plugins.OneSignal.setAppId("77e32082-ea27-42e3-a898-c72e141824ef");
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });
}

document.getElementById("isLocationShared").addEventListener("click", isLocationShared);
function isLocationShared() {
    console.log('💛💛💛 isLocationShared');
    window.plugins.OneSignal.isLocationShared(function(shared) {
        console.log('💛💛💛 OneSignal isLocationShared: ' + JSON.stringify(shared));
    });
}

document.getElementById("getDeviceState").addEventListener("click", getDeviceState);
function getDeviceState() {
    console.log('💛💛💛 getDeviceState');
    window.plugins.OneSignal.getDeviceState(function(stateChanges) {
        console.log('💛💛💛 OneSignal getDeviceState: ' + JSON.stringify(stateChanges));
    });
}

document.getElementById("getTriggerValueForKey").addEventListener("click", getTriggerValueForKey);
function getTriggerValueForKey() {
    console.log('💛💛💛 getTriggerValueForKey');
    window.plugins.OneSignal.getTriggerValueForKey("name", function(value) {
        console.log('💛💛💛 OneSignal getTriggerValueForKey: ' + JSON.stringify(value));
    });
}

document.getElementById("userProvidedPrivacyConsent").addEventListener("click", userProvidedPrivacyConsent);
function userProvidedPrivacyConsent() {
    console.log('💛💛💛 userProvidedPrivacyConsent');
    window.plugins.OneSignal.userProvidedPrivacyConsent((providedConsent) => {
        //if providedConsent == true, it means the SDK has been initialized and can be used
        console.log('💛💛💛 OneSignal userProvidedPrivacyConsent: ' + JSON.stringify(providedConsent));
    });
}

document.getElementById("requiresUserPrivacyConsent").addEventListener("click", requiresUserPrivacyConsent);
function requiresUserPrivacyConsent() {
    console.log('💛💛💛 requiresUserPrivacyConsent');
    window.plugins.OneSignal.requiresUserPrivacyConsent(function(req) {
        console.log('💛💛💛 OneSignal requiresUserPrivacyConsent: ' + JSON.stringify(req));
    });
}
