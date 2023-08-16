package com.company.netsdk.module;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceSearchModuleBridge extends ReactContextBaseJavaModule {
    public DeviceSearchModuleBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "DeviceSearchModule"; // This is how you'll refer to this module in JavaScript
    }

    @ReactMethod
    public void startSearchDevices() {
        // Call your existing Java method here
    }

    @ReactMethod
    public void stopSearchDevices() {
        // Call your existing Java method here
    }
}
