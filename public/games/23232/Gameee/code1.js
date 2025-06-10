gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Cat Cafe.mp3", 1, true, 100, 1);
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{/* Unknown object - skipped. */}{gdjs.evtTools.camera.hideLayer(runtimeScene, "About ");
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


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", 0, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "UI", "easeOutSine", 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", 0, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "UI", "easeOutSine", 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "About ");
}}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.Main_32MenuCode.eventsList3(runtimeScene);


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
