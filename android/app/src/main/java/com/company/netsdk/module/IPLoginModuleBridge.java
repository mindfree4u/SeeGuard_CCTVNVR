package com.company.netsdk.module;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class IPLoginModuleBridge extends ReactContextBaseJavaModule {

    public IPLoginModuleBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IPLoginModule";
    }

    @ReactMethod
    public void login(String address, String port, String username, String password) {
        IPLoginModule ipLoginModule = new IPLoginModule();
        boolean loginResult = ipLoginModule.login(address, port, username, password);

        // Handle the login result and notify the JavaScript side
        // For example, you can use React Native's native module methods like
        // promise.resolve(loginResult) or promise.reject(error) to communicate
        // the result back to JavaScript.
    }

    @ReactMethod
    public void logout() {
        IPLoginModule ipLoginModule = new IPLoginModule();
        ipLoginModule.logout();
    }

    // Add more methods if required to interact with other functions in IPLoginModule
}
