gdjs.win2Code = {};
gdjs.win2Code.localVariables = [];
gdjs.win2Code.GDSkyBackgroundObjects1= [];
gdjs.win2Code.GDSkyBackgroundObjects2= [];
gdjs.win2Code.GDNewTextObjects1= [];
gdjs.win2Code.GDNewTextObjects2= [];
gdjs.win2Code.GDBlueButtonWithShadowObjects1= [];
gdjs.win2Code.GDBlueButtonWithShadowObjects2= [];


gdjs.win2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.win2Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win2Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.win2Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.win2Code.GDBlueButtonWithShadowObjects1[k] = gdjs.win2Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.win2Code.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


};

gdjs.win2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win2Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win2Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win2Code.GDNewTextObjects1.length = 0;
gdjs.win2Code.GDNewTextObjects2.length = 0;
gdjs.win2Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.win2Code.GDBlueButtonWithShadowObjects2.length = 0;

gdjs.win2Code.eventsList0(runtimeScene);
gdjs.win2Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win2Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win2Code.GDNewTextObjects1.length = 0;
gdjs.win2Code.GDNewTextObjects2.length = 0;
gdjs.win2Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.win2Code.GDBlueButtonWithShadowObjects2.length = 0;


return;

}

gdjs['win2Code'] = gdjs.win2Code;
