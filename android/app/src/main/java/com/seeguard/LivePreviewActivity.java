package com.seeguard;

import android.os.Bundle;
import android.view.SurfaceView;
import android.widget.FrameLayout;
import androidx.appcompat.app.AppCompatActivity;
import com.company.netsdk.module.LivePreviewModule;

public class LivePreviewActivity extends AppCompatActivity {
    private FrameLayout frameLayout;
    private SurfaceView surfaceView;
    private LivePreviewModule livePreviewModule;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Create a FrameLayout to hold the SurfaceView
        frameLayout = new FrameLayout(this);
        surfaceView = new SurfaceView(this);
        surfaceView.setLayoutParams(new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        frameLayout.addView(surfaceView);

        // Set the content view to the FrameLayout
        setContentView(frameLayout);

        // Start playing the video
        livePreviewModule = new LivePreviewModule(this);
        livePreviewModule.prePlay(surfaceView);
        livePreviewModule.startPlay(1, 0, surfaceView);
    }
}
