package com.company.netsdk.module;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;
import com.facebook.react.bridge.Promise;

public class IPLoginModuleBridge extends ReactContextBaseJavaModule {

    public IPLoginModuleBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IPLoginModule";
    }

    @ReactMethod
    public void login(String address, String port, String username, String password, Promise promise) {
        //IPLoginModule ipLoginModule = new IPLoginModule();
        IPLoginModule ipLoginModule = IPLoginModule.getInstance();
        boolean loginResult = ipLoginModule.login(address, port, username, password);

        if (loginResult) {
            Log.d("IP login", "IPlogin 성공");
            promise.resolve(true);
        } else {
            Log.d("IP login", "IPlogin 실패");
            promise.reject("LOGIN_FAILED", "로그인에 실패했습니다.");
        }
    }


    @ReactMethod
    public void logout() {
       // IPLoginModule ipLoginModule = new IPLoginModule();
        IPLoginModule ipLoginModule = IPLoginModule.getInstance();
        ipLoginModule.logout();
    }

    // Add more methods if required to interact with other functions in IPLoginModule
}