gdjs.win2Code = {};
gdjs.win2Code.localVariables = [];
gdjs.win2Code.GDNewTiledSpriteObjects1= [];
gdjs.win2Code.GDNewTiledSpriteObjects2= [];
gdjs.win2Code.GDStartButtonObjects1= [];
gdjs.win2Code.GDStartButtonObjects2= [];
gdjs.win2Code.GDBackgroundBlueLandObjects1= [];
gdjs.win2Code.GDBackgroundBlueLandObjects2= [];
gdjs.win2Code.GDkalahObjects1= [];
gdjs.win2Code.GDkalahObjects2= [];
gdjs.win2Code.GDRetryObjects1= [];
gdjs.win2Code.GDRetryObjects2= [];
gdjs.win2Code.GDSkyBackgroundObjects1= [];
gdjs.win2Code.GDSkyBackgroundObjects2= [];
gdjs.win2Code.GDNextObjects1= [];
gdjs.win2Code.GDNextObjects2= [];
gdjs.win2Code.GDMenuObjects1= [];
gdjs.win2Code.GDMenuObjects2= [];


gdjs.win2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.win2Code.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win2Code.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs.win2Code.GDRetryObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.win2Code.GDRetryObjects1[k] = gdjs.win2Code.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.win2Code.GDRetryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.win2Code.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win2Code.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.win2Code.GDNextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.win2Code.GDNextObjects1[k] = gdjs.win2Code.GDNextObjects1[i];
        ++k;
    }
}
gdjs.win2Code.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level3", false);
}}

}


};

gdjs.win2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win2Code.GDStartButtonObjects1.length = 0;
gdjs.win2Code.GDStartButtonObjects2.length = 0;
gdjs.win2Code.GDBackgroundBlueLandObjects1.length = 0;
gdjs.win2Code.GDBackgroundBlueLandObjects2.length = 0;
gdjs.win2Code.GDkalahObjects1.length = 0;
gdjs.win2Code.GDkalahObjects2.length = 0;
gdjs.win2Code.GDRetryObjects1.length = 0;
gdjs.win2Code.GDRetryObjects2.length = 0;
gdjs.win2Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win2Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win2Code.GDNextObjects1.length = 0;
gdjs.win2Code.GDNextObjects2.length = 0;
gdjs.win2Code.GDMenuObjects1.length = 0;
gdjs.win2Code.GDMenuObjects2.length = 0;

gdjs.win2Code.eventsList0(runtimeScene);
gdjs.win2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win2Code.GDStartButtonObjects1.length = 0;
gdjs.win2Code.GDStartButtonObjects2.length = 0;
gdjs.win2Code.GDBackgroundBlueLandObjects1.length = 0;
gdjs.win2Code.GDBackgroundBlueLandObjects2.length = 0;
gdjs.win2Code.GDkalahObjects1.length = 0;
gdjs.win2Code.GDkalahObjects2.length = 0;
gdjs.win2Code.GDRetryObjects1.length = 0;
gdjs.win2Code.GDRetryObjects2.length = 0;
gdjs.win2Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win2Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win2Code.GDNextObjects1.length = 0;
gdjs.win2Code.GDNextObjects2.length = 0;
gdjs.win2Code.GDMenuObjects1.length = 0;
gdjs.win2Code.GDMenuObjects2.length = 0;


return;

}

gdjs['win2Code'] = gdjs.win2Code;
