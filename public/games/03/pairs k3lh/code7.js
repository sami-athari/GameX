gdjs.win3Code = {};
gdjs.win3Code.localVariables = [];
gdjs.win3Code.GDNewTiledSpriteObjects1= [];
gdjs.win3Code.GDNewTiledSpriteObjects2= [];
gdjs.win3Code.GDStartButtonObjects1= [];
gdjs.win3Code.GDStartButtonObjects2= [];
gdjs.win3Code.GDBackgroundBlueLandObjects1= [];
gdjs.win3Code.GDBackgroundBlueLandObjects2= [];
gdjs.win3Code.GDkalahObjects1= [];
gdjs.win3Code.GDkalahObjects2= [];
gdjs.win3Code.GDRetryObjects1= [];
gdjs.win3Code.GDRetryObjects2= [];
gdjs.win3Code.GDSkyBackgroundObjects1= [];
gdjs.win3Code.GDSkyBackgroundObjects2= [];
gdjs.win3Code.GDNextObjects1= [];
gdjs.win3Code.GDNextObjects2= [];
gdjs.win3Code.GDMenuObjects1= [];
gdjs.win3Code.GDMenuObjects2= [];


gdjs.win3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.win3Code.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win3Code.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs.win3Code.GDRetryObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.win3Code.GDRetryObjects1[k] = gdjs.win3Code.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.win3Code.GDRetryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.win3Code.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win3Code.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.win3Code.GDNextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.win3Code.GDNextObjects1[k] = gdjs.win3Code.GDNextObjects1[i];
        ++k;
    }
}
gdjs.win3Code.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.win3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win3Code.GDStartButtonObjects1.length = 0;
gdjs.win3Code.GDStartButtonObjects2.length = 0;
gdjs.win3Code.GDBackgroundBlueLandObjects1.length = 0;
gdjs.win3Code.GDBackgroundBlueLandObjects2.length = 0;
gdjs.win3Code.GDkalahObjects1.length = 0;
gdjs.win3Code.GDkalahObjects2.length = 0;
gdjs.win3Code.GDRetryObjects1.length = 0;
gdjs.win3Code.GDRetryObjects2.length = 0;
gdjs.win3Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win3Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win3Code.GDNextObjects1.length = 0;
gdjs.win3Code.GDNextObjects2.length = 0;
gdjs.win3Code.GDMenuObjects1.length = 0;
gdjs.win3Code.GDMenuObjects2.length = 0;

gdjs.win3Code.eventsList0(runtimeScene);
gdjs.win3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.win3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.win3Code.GDStartButtonObjects1.length = 0;
gdjs.win3Code.GDStartButtonObjects2.length = 0;
gdjs.win3Code.GDBackgroundBlueLandObjects1.length = 0;
gdjs.win3Code.GDBackgroundBlueLandObjects2.length = 0;
gdjs.win3Code.GDkalahObjects1.length = 0;
gdjs.win3Code.GDkalahObjects2.length = 0;
gdjs.win3Code.GDRetryObjects1.length = 0;
gdjs.win3Code.GDRetryObjects2.length = 0;
gdjs.win3Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win3Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win3Code.GDNextObjects1.length = 0;
gdjs.win3Code.GDNextObjects2.length = 0;
gdjs.win3Code.GDMenuObjects1.length = 0;
gdjs.win3Code.GDMenuObjects2.length = 0;


return;

}

gdjs['win3Code'] = gdjs.win3Code;
