gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDSkyBackgroundObjects1= [];
gdjs.winCode.GDSkyBackgroundObjects2= [];
gdjs.winCode.GDNewTextObjects1= [];
gdjs.winCode.GDNewTextObjects2= [];
gdjs.winCode.GDBlueButtonWithShadowObjects1= [];
gdjs.winCode.GDBlueButtonWithShadowObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.winCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDBlueButtonWithShadowObjects1[k] = gdjs.winCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDSkyBackgroundObjects1.length = 0;
gdjs.winCode.GDSkyBackgroundObjects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.winCode.GDBlueButtonWithShadowObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDSkyBackgroundObjects1.length = 0;
gdjs.winCode.GDSkyBackgroundObjects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.winCode.GDBlueButtonWithShadowObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
