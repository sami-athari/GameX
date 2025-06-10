gdjs.lose3Code = {};
gdjs.lose3Code.localVariables = [];
gdjs.lose3Code.GDWoodBackgroundObjects1= [];
gdjs.lose3Code.GDWoodBackgroundObjects2= [];
gdjs.lose3Code.GDkalahObjects1= [];
gdjs.lose3Code.GDkalahObjects2= [];
gdjs.lose3Code.GDLargeExitButtonObjects1= [];
gdjs.lose3Code.GDLargeExitButtonObjects2= [];
gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects2= [];


gdjs.lose3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level3", false);
}}

}


};

gdjs.lose3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lose3Code.GDWoodBackgroundObjects1.length = 0;
gdjs.lose3Code.GDWoodBackgroundObjects2.length = 0;
gdjs.lose3Code.GDkalahObjects1.length = 0;
gdjs.lose3Code.GDkalahObjects2.length = 0;
gdjs.lose3Code.GDLargeExitButtonObjects1.length = 0;
gdjs.lose3Code.GDLargeExitButtonObjects2.length = 0;
gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;

gdjs.lose3Code.eventsList0(runtimeScene);
gdjs.lose3Code.GDWoodBackgroundObjects1.length = 0;
gdjs.lose3Code.GDWoodBackgroundObjects2.length = 0;
gdjs.lose3Code.GDkalahObjects1.length = 0;
gdjs.lose3Code.GDkalahObjects2.length = 0;
gdjs.lose3Code.GDLargeExitButtonObjects1.length = 0;
gdjs.lose3Code.GDLargeExitButtonObjects2.length = 0;
gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.lose3Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;


return;

}

gdjs['lose3Code'] = gdjs.lose3Code;
