package com.seeguard;

import android.app.Activity;
import android.os.Bundle;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import com.company.netsdk.module.LivePreviewModule;
import com.seeguard.R;

public class LivePreviewActivity extends Activity implements SurfaceHolder.Callback {
    private SurfaceView mRealView;
    private LivePreviewModule mLiveModule;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_live_preview);

        mRealView = findViewById(R.id.real_view);
        mRealView.getHolder().addCallback(this);

        mLiveModule = new LivePreviewModule(this);
    }

    @Override
    public void surfaceCreated(SurfaceHolder holder) {

        mLiveModule.initSurfaceView(mRealView);
        mLiveModule.startPlay(0,0,mRealView);
    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {

    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {

    }

}
