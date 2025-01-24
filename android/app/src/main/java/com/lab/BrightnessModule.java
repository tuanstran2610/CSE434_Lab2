package com.lab;

import android.view.Window;
import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BrightnessModule extends ReactContextBaseJavaModule {

    BrightnessModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "BrightnessModule";
    }

    @ReactMethod
    public void setBrightness(float brightness) {
        Window window = getCurrentActivity().getWindow();
        WindowManager.LayoutParams layoutParams = window.getAttributes();
        layoutParams.screenBrightness = brightness;
        window.setAttributes(layoutParams);
    }
}
