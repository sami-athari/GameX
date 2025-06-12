gdjs.loseCode = {};
gdjs.loseCode.localVariables = [];
gdjs.loseCode.GDNewTiledSpriteObjects1= [];
gdjs.loseCode.GDNewTiledSpriteObjects2= [];
gdjs.loseCode.GDStartButtonObjects1= [];
gdjs.loseCode.GDStartButtonObjects2= [];
gdjs.loseCode.GDBackgroundBlueLandObjects1= [];
gdjs.loseCode.GDBackgroundBlueLandObjects2= [];
gdjs.loseCode.GDkalahObjects1= [];
gdjs.loseCode.GDkalahObjects2= [];
gdjs.loseCode.GDRetryObjects1= [];
gdjs.loseCode.GDRetryObjects2= [];
gdjs.loseCode.GDSkyBackgroundObjects1= [];
gdjs.loseCode.GDSkyBackgroundObjects2= [];


gdjs.loseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.loseCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loseCode.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs.loseCode.GDRetryObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.loseCode.GDRetryObjects1[k] = gdjs.loseCode.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.loseCode.GDRetryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.loseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loseCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.loseCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.loseCode.GDStartButtonObjects1.length = 0;
gdjs.loseCode.GDStartButtonObjects2.length = 0;
gdjs.loseCode.GDBackgroundBlueLandObjects1.length = 0;
gdjs.loseCode.GDBackgroundBlueLandObjects2.length = 0;
gdjs.loseCode.GDkalahObjects1.length = 0;
gdjs.loseCode.GDkalahObjects2.length = 0;
gdjs.loseCode.GDRetryObjects1.length = 0;
gdjs.loseCode.GDRetryObjects2.length = 0;
gdjs.loseCode.GDSkyBackgroundObjects1.length = 0;
gdjs.loseCode.GDSkyBackgroundObjects2.length = 0;

gdjs.loseCode.eventsList0(runtimeScene);
gdjs.loseCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.loseCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.loseCode.GDStartButtonObjects1.length = 0;
gdjs.loseCode.GDStartButtonObjects2.length = 0;
gdjs.loseCode.GDBackgroundBlueLandObjects1.length = 0;
gdjs.loseCode.GDBackgroundBlueLandObjects2.length = 0;
gdjs.loseCode.GDkalahObjects1.length = 0;
gdjs.loseCode.GDkalahObjects2.length = 0;
gdjs.loseCode.GDRetryObjects1.length = 0;
gdjs.loseCode.GDRetryObjects2.length = 0;
gdjs.loseCode.GDSkyBackgroundObjects1.length = 0;
gdjs.loseCode.GDSkyBackgroundObjects2.length = 0;


return;

}

gdjs['loseCode'] = gdjs.loseCode;
