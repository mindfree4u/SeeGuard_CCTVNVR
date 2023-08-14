package com.company.netsdk.common;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NetSDKLibModule extends ReactContextBaseJavaModule {
    public NetSDKLibModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NetSDKLib";
    }

    @ReactMethod
    public void init() {
        // NetSDKLib의 init() 메소드 호출
        NetSDKLib.getInstance().init();
    }

    @ReactMethod
    public void cleanup() {
        NetSDKLib.getInstance().cleanup();
    }
}
