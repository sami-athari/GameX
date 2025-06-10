gdjs.lose2Code = {};
gdjs.lose2Code.localVariables = [];
gdjs.lose2Code.GDWoodBackgroundObjects1= [];
gdjs.lose2Code.GDWoodBackgroundObjects2= [];
gdjs.lose2Code.GDkalahObjects1= [];
gdjs.lose2Code.GDkalahObjects2= [];
gdjs.lose2Code.GDLargeExitButtonObjects1= [];
gdjs.lose2Code.GDLargeExitButtonObjects2= [];
gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects2= [];


gdjs.lose2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


};

gdjs.lose2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lose2Code.GDWoodBackgroundObjects1.length = 0;
gdjs.lose2Code.GDWoodBackgroundObjects2.length = 0;
gdjs.lose2Code.GDkalahObjects1.length = 0;
gdjs.lose2Code.GDkalahObjects2.length = 0;
gdjs.lose2Code.GDLargeExitButtonObjects1.length = 0;
gdjs.lose2Code.GDLargeExitButtonObjects2.length = 0;
gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;

gdjs.lose2Code.eventsList0(runtimeScene);
gdjs.lose2Code.GDWoodBackgroundObjects1.length = 0;
gdjs.lose2Code.GDWoodBackgroundObjects2.length = 0;
gdjs.lose2Code.GDkalahObjects1.length = 0;
gdjs.lose2Code.GDkalahObjects2.length = 0;
gdjs.lose2Code.GDLargeExitButtonObjects1.length = 0;
gdjs.lose2Code.GDLargeExitButtonObjects2.length = 0;
gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.lose2Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;


return;

}

gdjs['lose2Code'] = gdjs.lose2Code;
