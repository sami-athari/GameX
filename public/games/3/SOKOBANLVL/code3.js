gdjs.loseCode = {};
gdjs.loseCode.localVariables = [];
gdjs.loseCode.GDWoodBackgroundObjects1= [];
gdjs.loseCode.GDWoodBackgroundObjects2= [];
gdjs.loseCode.GDkalahObjects1= [];
gdjs.loseCode.GDkalahObjects2= [];
gdjs.loseCode.GDLargeExitButtonObjects1= [];
gdjs.loseCode.GDLargeExitButtonObjects2= [];
gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects2= [];


gdjs.loseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.loseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loseCode.GDWoodBackgroundObjects1.length = 0;
gdjs.loseCode.GDWoodBackgroundObjects2.length = 0;
gdjs.loseCode.GDkalahObjects1.length = 0;
gdjs.loseCode.GDkalahObjects2.length = 0;
gdjs.loseCode.GDLargeExitButtonObjects1.length = 0;
gdjs.loseCode.GDLargeExitButtonObjects2.length = 0;
gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;

gdjs.loseCode.eventsList0(runtimeScene);
gdjs.loseCode.GDWoodBackgroundObjects1.length = 0;
gdjs.loseCode.GDWoodBackgroundObjects2.length = 0;
gdjs.loseCode.GDkalahObjects1.length = 0;
gdjs.loseCode.GDkalahObjects2.length = 0;
gdjs.loseCode.GDLargeExitButtonObjects1.length = 0;
gdjs.loseCode.GDLargeExitButtonObjects2.length = 0;
gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.loseCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;


return;

}

gdjs['loseCode'] = gdjs.loseCode;
