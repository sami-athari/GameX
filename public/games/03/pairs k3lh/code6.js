gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDNewTiledSpriteObjects1= [];
gdjs.winCode.GDNewTiledSpriteObjects2= [];
gdjs.winCode.GDStartButtonObjects1= [];
gdjs.winCode.GDStartButtonObjects2= [];
gdjs.winCode.GDBackgroundBlueLandObjects1= [];
gdjs.winCode.GDBackgroundBlueLandObjects2= [];
gdjs.winCode.GDkalahObjects1= [];
gdjs.winCode.GDkalahObjects2= [];
gdjs.winCode.GDRetryObjects1= [];
gdjs.winCode.GDRetryObjects2= [];
gdjs.winCode.GDSkyBackgroundObjects1= [];
gdjs.winCode.GDSkyBackgroundObjects2= [];
gdjs.winCode.GDNextObjects1= [];
gdjs.winCode.GDNextObjects2= [];
gdjs.winCode.GDMenuObjects1= [];
gdjs.winCode.GDMenuObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.winCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDRetryObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDRetryObjects1[k] = gdjs.winCode.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDRetryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.winCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDNextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDNextObjects1[k] = gdjs.winCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.winCode.GDStartButtonObjects1.length = 0;
gdjs.winCode.GDStartButtonObjects2.length = 0;
gdjs.winCode.GDBackgroundBlueLandObjects1.length = 0;
gdjs.winCode.GDBackgroundBlueLandObjects2.length = 0;
gdjs.winCode.GDkalahObjects1.length = 0;
gdjs.winCode.GDkalahObjects2.length = 0;
gdjs.winCode.GDRetryObjects1.length = 0;
gdjs.winCode.GDRetryObjects2.length = 0;
gdjs.winCode.GDSkyBackgroundObjects1.length = 0;
gdjs.winCode.GDSkyBackgroundObjects2.length = 0;
gdjs.winCode.GDNextObjects1.length = 0;
gdjs.winCode.GDNextObjects2.length = 0;
gdjs.winCode.GDMenuObjects1.length = 0;
gdjs.winCode.GDMenuObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.winCode.GDStartButtonObjects1.length = 0;
gdjs.winCode.GDStartButtonObjects2.length = 0;
gdjs.winCode.GDBackgroundBlueLandObjects1.length = 0;
gdjs.winCode.GDBackgroundBlueLandObjects2.length = 0;
gdjs.winCode.GDkalahObjects1.length = 0;
gdjs.winCode.GDkalahObjects2.length = 0;
gdjs.winCode.GDRetryObjects1.length = 0;
gdjs.winCode.GDRetryObjects2.length = 0;
gdjs.winCode.GDSkyBackgroundObjects1.length = 0;
gdjs.winCode.GDSkyBackgroundObjects2.length = 0;
gdjs.winCode.GDNextObjects1.length = 0;
gdjs.winCode.GDNextObjects2.length = 0;
gdjs.winCode.GDMenuObjects1.length = 0;
gdjs.winCode.GDMenuObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
