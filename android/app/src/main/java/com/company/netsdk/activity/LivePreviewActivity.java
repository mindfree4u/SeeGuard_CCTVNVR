package com.company.netsdk.activity;

import android.os.Bundle;
import android.view.SurfaceView;
import android.widget.FrameLayout;
import androidx.appcompat.app.AppCompatActivity;
import com.company.netsdk.module.LivePreviewModule;
import android.widget.TextView;
import android.graphics.Color;


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

        // Create a TextView to display some text
        TextView textView = new TextView(this);
        textView.setTextColor(Color.WHITE);
        textView.setText("Channel 0");
        frameLayout.addView(textView);

        // Set the content view to the FrameLayout
        setContentView(frameLayout);

        // Start playing the video
        livePreviewModule = new LivePreviewModule(this);
        livePreviewModule.initSurfaceView(surfaceView);
        livePreviewModule.startPlay(0, 0, surfaceView);


    }
}
