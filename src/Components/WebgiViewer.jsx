import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useCallback } from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
} from "webgi";
import { scrollAnimation } from '../lib/Scroll-animation';

// import sceneblack from '../../public/scene-black.glb'



gsap.registerPlugin(ScrollTrigger);

function WebgiViewer() {
    const canvasRef = useRef(null);

    const memoizedScrollAmination = useCallback((position, target, onUpdate) => {
        if(position && target && onUpdate){
            scrollAnimation(position,target,onUpdate);
        }
    },[])

    const setupViewer = useCallback(async () =>   {

        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        // add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        // Add plugins individually.
         await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
     await viewer.addPlugin(BloomPlugin)


        //This must be called once after all are added
        viewer.renderer.refreshPipeline()

        // Import and add a GLB file.
        await manager.addFromPath("scene-black.glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});

    window.scrollTo(0,0);

    let needsUpdate = true;

    const onUpdate = () => {
        needsUpdate = true;
        viewer.setDirty();
    }

    viewer.addEventListener("preFrame", () => { 
        if(needsUpdate){
        camera.positionTargetUpdated(true);
        needsUpdate = false
        }
    })

    memoizedScrollAmination(position, target, onUpdate);

    }, []);
   

    useEffect(() => {
        setupViewer();
    },[])

    return (
        <div id='webgi-canvas-container'>
            <canvas id='webgi-canvas' ref={canvasRef} />
        </div>
    )
}

export default WebgiViewer
