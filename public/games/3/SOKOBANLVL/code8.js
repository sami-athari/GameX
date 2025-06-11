gdjs.win3Code = {};
gdjs.win3Code.localVariables = [];
gdjs.win3Code.GDSkyBackgroundObjects1= [];
gdjs.win3Code.GDSkyBackgroundObjects2= [];
gdjs.win3Code.GDNewTextObjects1= [];
gdjs.win3Code.GDNewTextObjects2= [];
gdjs.win3Code.GDBlueButtonWithShadowObjects1= [];
gdjs.win3Code.GDBlueButtonWithShadowObjects2= [];
gdjs.win3Code.GDBlueFeltObjects1= [];
gdjs.win3Code.GDBlueFeltObjects2= [];


gdjs.win3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.win3Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win3Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.win3Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.win3Code.GDBlueButtonWithShadowObjects1[k] = gdjs.win3Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.win3Code.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.win3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win3Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win3Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win3Code.GDNewTextObjects1.length = 0;
gdjs.win3Code.GDNewTextObjects2.length = 0;
gdjs.win3Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.win3Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.win3Code.GDBlueFeltObjects1.length = 0;
gdjs.win3Code.GDBlueFeltObjects2.length = 0;

gdjs.win3Code.eventsList0(runtimeScene);
gdjs.win3Code.GDSkyBackgroundObjects1.length = 0;
gdjs.win3Code.GDSkyBackgroundObjects2.length = 0;
gdjs.win3Code.GDNewTextObjects1.length = 0;
gdjs.win3Code.GDNewTextObjects2.length = 0;
gdjs.win3Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.win3Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.win3Code.GDBlueFeltObjects1.length = 0;
gdjs.win3Code.GDBlueFeltObjects2.length = 0;


return;

}

gdjs['win3Code'] = gdjs.win3Code;
