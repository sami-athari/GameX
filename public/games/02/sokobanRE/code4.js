gdjs.LoseSceneCode = {};
gdjs.LoseSceneCode.localVariables = [];
gdjs.LoseSceneCode.GDIconBackgroundObjects1= [];
gdjs.LoseSceneCode.GDIconBackgroundObjects2= [];
gdjs.LoseSceneCode.GDNewTextObjects1= [];
gdjs.LoseSceneCode.GDNewTextObjects2= [];
gdjs.LoseSceneCode.GDPlayButtonObjects1= [];
gdjs.LoseSceneCode.GDPlayButtonObjects2= [];
gdjs.LoseSceneCode.GDNewText2Objects1= [];
gdjs.LoseSceneCode.GDNewText2Objects2= [];


gdjs.LoseSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.LoseSceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoseSceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.LoseSceneCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoseSceneCode.GDPlayButtonObjects1[k] = gdjs.LoseSceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.LoseSceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FullSokobanGame", false);
}}

}


};

gdjs.LoseSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseSceneCode.GDIconBackgroundObjects1.length = 0;
gdjs.LoseSceneCode.GDIconBackgroundObjects2.length = 0;
gdjs.LoseSceneCode.GDNewTextObjects1.length = 0;
gdjs.LoseSceneCode.GDNewTextObjects2.length = 0;
gdjs.LoseSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.LoseSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.LoseSceneCode.GDNewText2Objects1.length = 0;
gdjs.LoseSceneCode.GDNewText2Objects2.length = 0;

gdjs.LoseSceneCode.eventsList0(runtimeScene);
gdjs.LoseSceneCode.GDIconBackgroundObjects1.length = 0;
gdjs.LoseSceneCode.GDIconBackgroundObjects2.length = 0;
gdjs.LoseSceneCode.GDNewTextObjects1.length = 0;
gdjs.LoseSceneCode.GDNewTextObjects2.length = 0;
gdjs.LoseSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.LoseSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.LoseSceneCode.GDNewText2Objects1.length = 0;
gdjs.LoseSceneCode.GDNewText2Objects2.length = 0;


return;

}

gdjs['LoseSceneCode'] = gdjs.LoseSceneCode;
