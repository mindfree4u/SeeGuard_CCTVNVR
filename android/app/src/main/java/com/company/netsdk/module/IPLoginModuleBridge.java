package com.company.netsdk.module;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

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

        if (loginResult) {
            Log.d("IP login", "IPlogin 성공");
        } else {
            Log.d("IP login", "IPlogin 실패"); // 실패 시
        }
    }

    @ReactMethod
    public void logout() {
        IPLoginModule ipLoginModule = new IPLoginModule();
        ipLoginModule.logout();
    }

    // Add more methods if required to interact with other functions in IPLoginModule
}