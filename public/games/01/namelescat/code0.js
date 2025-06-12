gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDTitleObjects4= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDPlayObjects3= [];
gdjs.MenuCode.GDPlayObjects4= [];
gdjs.MenuCode.GDSettingsObjects1= [];
gdjs.MenuCode.GDSettingsObjects2= [];
gdjs.MenuCode.GDSettingsObjects3= [];
gdjs.MenuCode.GDSettingsObjects4= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDQuitObjects3= [];
gdjs.MenuCode.GDQuitObjects4= [];
gdjs.MenuCode.GDSkinObjects1= [];
gdjs.MenuCode.GDSkinObjects2= [];
gdjs.MenuCode.GDSkinObjects3= [];
gdjs.MenuCode.GDSkinObjects4= [];
gdjs.MenuCode.GDNewVideoObjects1= [];
gdjs.MenuCode.GDNewVideoObjects2= [];
gdjs.MenuCode.GDNewVideoObjects3= [];
gdjs.MenuCode.GDNewVideoObjects4= [];
gdjs.MenuCode.GDBrbObjects1= [];
gdjs.MenuCode.GDBrbObjects2= [];
gdjs.MenuCode.GDBrbObjects3= [];
gdjs.MenuCode.GDBrbObjects4= [];
gdjs.MenuCode.GDBrb2Objects1= [];
gdjs.MenuCode.GDBrb2Objects2= [];
gdjs.MenuCode.GDBrb2Objects3= [];
gdjs.MenuCode.GDBrb2Objects4= [];
gdjs.MenuCode.GDBackObjects1= [];
gdjs.MenuCode.GDBackObjects2= [];
gdjs.MenuCode.GDBackObjects3= [];
gdjs.MenuCode.GDBackObjects4= [];
gdjs.MenuCode.GDHintObjects1= [];
gdjs.MenuCode.GDHintObjects2= [];
gdjs.MenuCode.GDHintObjects3= [];
gdjs.MenuCode.GDHintObjects4= [];
gdjs.MenuCode.GDCat1Objects1= [];
gdjs.MenuCode.GDCat1Objects2= [];
gdjs.MenuCode.GDCat1Objects3= [];
gdjs.MenuCode.GDCat1Objects4= [];
gdjs.MenuCode.GDCat2Objects1= [];
gdjs.MenuCode.GDCat2Objects2= [];
gdjs.MenuCode.GDCat2Objects3= [];
gdjs.MenuCode.GDCat2Objects4= [];
gdjs.MenuCode.GDCat3Objects1= [];
gdjs.MenuCode.GDCat3Objects2= [];
gdjs.MenuCode.GDCat3Objects3= [];
gdjs.MenuCode.GDCat3Objects4= [];
gdjs.MenuCode.GDCat4Objects1= [];
gdjs.MenuCode.GDCat4Objects2= [];
gdjs.MenuCode.GDCat4Objects3= [];
gdjs.MenuCode.GDCat4Objects4= [];
gdjs.MenuCode.GDCat5Objects1= [];
gdjs.MenuCode.GDCat5Objects2= [];
gdjs.MenuCode.GDCat5Objects3= [];
gdjs.MenuCode.GDCat5Objects4= [];
gdjs.MenuCode.GDCat6Objects1= [];
gdjs.MenuCode.GDCat6Objects2= [];
gdjs.MenuCode.GDCat6Objects3= [];
gdjs.MenuCode.GDCat6Objects4= [];
gdjs.MenuCode.GDSelectObjects1= [];
gdjs.MenuCode.GDSelectObjects2= [];
gdjs.MenuCode.GDSelectObjects3= [];
gdjs.MenuCode.GDSelectObjects4= [];
gdjs.MenuCode.GDBorderCatObjects1= [];
gdjs.MenuCode.GDBorderCatObjects2= [];
gdjs.MenuCode.GDBorderCatObjects3= [];
gdjs.MenuCode.GDBorderCatObjects4= [];
gdjs.MenuCode.GDBorderedHudGreyObjects1= [];
gdjs.MenuCode.GDBorderedHudGreyObjects2= [];
gdjs.MenuCode.GDBorderedHudGreyObjects3= [];
gdjs.MenuCode.GDBorderedHudGreyObjects4= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects3= [];
gdjs.MenuCode.GDNewTiledSpriteObjects4= [];
gdjs.MenuCode.GDNewPanelSpriteObjects1= [];
gdjs.MenuCode.GDNewPanelSpriteObjects2= [];
gdjs.MenuCode.GDNewPanelSpriteObjects3= [];
gdjs.MenuCode.GDNewPanelSpriteObjects4= [];
gdjs.MenuCode.GDPlay_9595TextObjects1= [];
gdjs.MenuCode.GDPlay_9595TextObjects2= [];
gdjs.MenuCode.GDPlay_9595TextObjects3= [];
gdjs.MenuCode.GDPlay_9595TextObjects4= [];
gdjs.MenuCode.GDNewLightObjects1= [];
gdjs.MenuCode.GDNewLightObjects2= [];
gdjs.MenuCode.GDNewLightObjects3= [];
gdjs.MenuCode.GDNewLightObjects4= [];
gdjs.MenuCode.GDNewLight2Objects1= [];
gdjs.MenuCode.GDNewLight2Objects2= [];
gdjs.MenuCode.GDNewLight2Objects3= [];
gdjs.MenuCode.GDNewLight2Objects4= [];
gdjs.MenuCode.GDTransitionObjects1= [];
gdjs.MenuCode.GDTransitionObjects2= [];
gdjs.MenuCode.GDTransitionObjects3= [];
gdjs.MenuCode.GDTransitionObjects4= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Brb"), gdjs.MenuCode.GDBrbObjects2);
gdjs.copyArray(runtimeScene.getObjects("Brb2"), gdjs.MenuCode.GDBrb2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.MenuCode.GDNewVideoObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Cat Cafe.mp3", 1, true, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewVideoObjects2[i].play();
}
}{for(var i = 0, len = gdjs.MenuCode.GDBrbObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBrbObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDBrb2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBrb2Objects2[i].hide();
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.MenuCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTiledSpriteObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "About ");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isNativeDesktopApp(runtimeScene));
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1920, 1080, false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects3[k] = gdjs.MenuCode.GDPlayObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.MenuCode.GDTransitionObjects3);
{for(var i = 0, len = gdjs.MenuCode.GDTransitionObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDTransitionObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.MenuCode.GDTransitionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDTransitionObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDTransitionObjects2[k] = gdjs.MenuCode.GDTransitionObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDTransitionObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Skin"), gdjs.MenuCode.GDSkinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSkinObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSkinObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSkinObjects2[k] = gdjs.MenuCode.GDSkinObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDSkinObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Brb2"), gdjs.MenuCode.GDBrb2Objects2);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.MenuCode.GDBrb2Objects2.length === 0 ) ? 0 :gdjs.MenuCode.GDBrb2Objects2[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "UI", "easeOutSine", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDQuitObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDQuitObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDQuitObjects2[k] = gdjs.MenuCode.GDQuitObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDQuitObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skin"), gdjs.MenuCode.GDSkinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSkinObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSkinObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSkinObjects2[k] = gdjs.MenuCode.GDSkinObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDSkinObjects2.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MenuCode.GDBackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBackObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBackObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBackObjects2[k] = gdjs.MenuCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBackObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Brb"), gdjs.MenuCode.GDBrbObjects2);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.MenuCode.GDBrbObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDBrbObjects2[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "UI", "easeOutSine", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsObjects2[k] = gdjs.MenuCode.GDSettingsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.MenuCode.GDHintObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHintObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHintObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHintObjects1[k] = gdjs.MenuCode.GDHintObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHintObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "About ");
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects4.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects3.length = 0;
gdjs.MenuCode.GDPlayObjects4.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects3.length = 0;
gdjs.MenuCode.GDSettingsObjects4.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects3.length = 0;
gdjs.MenuCode.GDQuitObjects4.length = 0;
gdjs.MenuCode.GDSkinObjects1.length = 0;
gdjs.MenuCode.GDSkinObjects2.length = 0;
gdjs.MenuCode.GDSkinObjects3.length = 0;
gdjs.MenuCode.GDSkinObjects4.length = 0;
gdjs.MenuCode.GDNewVideoObjects1.length = 0;
gdjs.MenuCode.GDNewVideoObjects2.length = 0;
gdjs.MenuCode.GDNewVideoObjects3.length = 0;
gdjs.MenuCode.GDNewVideoObjects4.length = 0;
gdjs.MenuCode.GDBrbObjects1.length = 0;
gdjs.MenuCode.GDBrbObjects2.length = 0;
gdjs.MenuCode.GDBrbObjects3.length = 0;
gdjs.MenuCode.GDBrbObjects4.length = 0;
gdjs.MenuCode.GDBrb2Objects1.length = 0;
gdjs.MenuCode.GDBrb2Objects2.length = 0;
gdjs.MenuCode.GDBrb2Objects3.length = 0;
gdjs.MenuCode.GDBrb2Objects4.length = 0;
gdjs.MenuCode.GDBackObjects1.length = 0;
gdjs.MenuCode.GDBackObjects2.length = 0;
gdjs.MenuCode.GDBackObjects3.length = 0;
gdjs.MenuCode.GDBackObjects4.length = 0;
gdjs.MenuCode.GDHintObjects1.length = 0;
gdjs.MenuCode.GDHintObjects2.length = 0;
gdjs.MenuCode.GDHintObjects3.length = 0;
gdjs.MenuCode.GDHintObjects4.length = 0;
gdjs.MenuCode.GDCat1Objects1.length = 0;
gdjs.MenuCode.GDCat1Objects2.length = 0;
gdjs.MenuCode.GDCat1Objects3.length = 0;
gdjs.MenuCode.GDCat1Objects4.length = 0;
gdjs.MenuCode.GDCat2Objects1.length = 0;
gdjs.MenuCode.GDCat2Objects2.length = 0;
gdjs.MenuCode.GDCat2Objects3.length = 0;
gdjs.MenuCode.GDCat2Objects4.length = 0;
gdjs.MenuCode.GDCat3Objects1.length = 0;
gdjs.MenuCode.GDCat3Objects2.length = 0;
gdjs.MenuCode.GDCat3Objects3.length = 0;
gdjs.MenuCode.GDCat3Objects4.length = 0;
gdjs.MenuCode.GDCat4Objects1.length = 0;
gdjs.MenuCode.GDCat4Objects2.length = 0;
gdjs.MenuCode.GDCat4Objects3.length = 0;
gdjs.MenuCode.GDCat4Objects4.length = 0;
gdjs.MenuCode.GDCat5Objects1.length = 0;
gdjs.MenuCode.GDCat5Objects2.length = 0;
gdjs.MenuCode.GDCat5Objects3.length = 0;
gdjs.MenuCode.GDCat5Objects4.length = 0;
gdjs.MenuCode.GDCat6Objects1.length = 0;
gdjs.MenuCode.GDCat6Objects2.length = 0;
gdjs.MenuCode.GDCat6Objects3.length = 0;
gdjs.MenuCode.GDCat6Objects4.length = 0;
gdjs.MenuCode.GDSelectObjects1.length = 0;
gdjs.MenuCode.GDSelectObjects2.length = 0;
gdjs.MenuCode.GDSelectObjects3.length = 0;
gdjs.MenuCode.GDSelectObjects4.length = 0;
gdjs.MenuCode.GDBorderCatObjects1.length = 0;
gdjs.MenuCode.GDBorderCatObjects2.length = 0;
gdjs.MenuCode.GDBorderCatObjects3.length = 0;
gdjs.MenuCode.GDBorderCatObjects4.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects1.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects2.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects3.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects4.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects1.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects2.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects3.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects4.length = 0;
gdjs.MenuCode.GDNewLightObjects1.length = 0;
gdjs.MenuCode.GDNewLightObjects2.length = 0;
gdjs.MenuCode.GDNewLightObjects3.length = 0;
gdjs.MenuCode.GDNewLightObjects4.length = 0;
gdjs.MenuCode.GDNewLight2Objects1.length = 0;
gdjs.MenuCode.GDNewLight2Objects2.length = 0;
gdjs.MenuCode.GDNewLight2Objects3.length = 0;
gdjs.MenuCode.GDNewLight2Objects4.length = 0;
gdjs.MenuCode.GDTransitionObjects1.length = 0;
gdjs.MenuCode.GDTransitionObjects2.length = 0;
gdjs.MenuCode.GDTransitionObjects3.length = 0;
gdjs.MenuCode.GDTransitionObjects4.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects4.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects3.length = 0;
gdjs.MenuCode.GDPlayObjects4.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects3.length = 0;
gdjs.MenuCode.GDSettingsObjects4.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects3.length = 0;
gdjs.MenuCode.GDQuitObjects4.length = 0;
gdjs.MenuCode.GDSkinObjects1.length = 0;
gdjs.MenuCode.GDSkinObjects2.length = 0;
gdjs.MenuCode.GDSkinObjects3.length = 0;
gdjs.MenuCode.GDSkinObjects4.length = 0;
gdjs.MenuCode.GDNewVideoObjects1.length = 0;
gdjs.MenuCode.GDNewVideoObjects2.length = 0;
gdjs.MenuCode.GDNewVideoObjects3.length = 0;
gdjs.MenuCode.GDNewVideoObjects4.length = 0;
gdjs.MenuCode.GDBrbObjects1.length = 0;
gdjs.MenuCode.GDBrbObjects2.length = 0;
gdjs.MenuCode.GDBrbObjects3.length = 0;
gdjs.MenuCode.GDBrbObjects4.length = 0;
gdjs.MenuCode.GDBrb2Objects1.length = 0;
gdjs.MenuCode.GDBrb2Objects2.length = 0;
gdjs.MenuCode.GDBrb2Objects3.length = 0;
gdjs.MenuCode.GDBrb2Objects4.length = 0;
gdjs.MenuCode.GDBackObjects1.length = 0;
gdjs.MenuCode.GDBackObjects2.length = 0;
gdjs.MenuCode.GDBackObjects3.length = 0;
gdjs.MenuCode.GDBackObjects4.length = 0;
gdjs.MenuCode.GDHintObjects1.length = 0;
gdjs.MenuCode.GDHintObjects2.length = 0;
gdjs.MenuCode.GDHintObjects3.length = 0;
gdjs.MenuCode.GDHintObjects4.length = 0;
gdjs.MenuCode.GDCat1Objects1.length = 0;
gdjs.MenuCode.GDCat1Objects2.length = 0;
gdjs.MenuCode.GDCat1Objects3.length = 0;
gdjs.MenuCode.GDCat1Objects4.length = 0;
gdjs.MenuCode.GDCat2Objects1.length = 0;
gdjs.MenuCode.GDCat2Objects2.length = 0;
gdjs.MenuCode.GDCat2Objects3.length = 0;
gdjs.MenuCode.GDCat2Objects4.length = 0;
gdjs.MenuCode.GDCat3Objects1.length = 0;
gdjs.MenuCode.GDCat3Objects2.length = 0;
gdjs.MenuCode.GDCat3Objects3.length = 0;
gdjs.MenuCode.GDCat3Objects4.length = 0;
gdjs.MenuCode.GDCat4Objects1.length = 0;
gdjs.MenuCode.GDCat4Objects2.length = 0;
gdjs.MenuCode.GDCat4Objects3.length = 0;
gdjs.MenuCode.GDCat4Objects4.length = 0;
gdjs.MenuCode.GDCat5Objects1.length = 0;
gdjs.MenuCode.GDCat5Objects2.length = 0;
gdjs.MenuCode.GDCat5Objects3.length = 0;
gdjs.MenuCode.GDCat5Objects4.length = 0;
gdjs.MenuCode.GDCat6Objects1.length = 0;
gdjs.MenuCode.GDCat6Objects2.length = 0;
gdjs.MenuCode.GDCat6Objects3.length = 0;
gdjs.MenuCode.GDCat6Objects4.length = 0;
gdjs.MenuCode.GDSelectObjects1.length = 0;
gdjs.MenuCode.GDSelectObjects2.length = 0;
gdjs.MenuCode.GDSelectObjects3.length = 0;
gdjs.MenuCode.GDSelectObjects4.length = 0;
gdjs.MenuCode.GDBorderCatObjects1.length = 0;
gdjs.MenuCode.GDBorderCatObjects2.length = 0;
gdjs.MenuCode.GDBorderCatObjects3.length = 0;
gdjs.MenuCode.GDBorderCatObjects4.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects1.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects2.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects3.length = 0;
gdjs.MenuCode.GDBorderedHudGreyObjects4.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects1.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects2.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects3.length = 0;
gdjs.MenuCode.GDPlay_9595TextObjects4.length = 0;
gdjs.MenuCode.GDNewLightObjects1.length = 0;
gdjs.MenuCode.GDNewLightObjects2.length = 0;
gdjs.MenuCode.GDNewLightObjects3.length = 0;
gdjs.MenuCode.GDNewLightObjects4.length = 0;
gdjs.MenuCode.GDNewLight2Objects1.length = 0;
gdjs.MenuCode.GDNewLight2Objects2.length = 0;
gdjs.MenuCode.GDNewLight2Objects3.length = 0;
gdjs.MenuCode.GDNewLight2Objects4.length = 0;
gdjs.MenuCode.GDTransitionObjects1.length = 0;
gdjs.MenuCode.GDTransitionObjects2.length = 0;
gdjs.MenuCode.GDTransitionObjects3.length = 0;
gdjs.MenuCode.GDTransitionObjects4.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
