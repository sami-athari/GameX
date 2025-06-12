gdjs.WinSceneCode = {};
gdjs.WinSceneCode.localVariables = [];
gdjs.WinSceneCode.GDNewSpriteObjects1= [];
gdjs.WinSceneCode.GDNewSpriteObjects2= [];
gdjs.WinSceneCode.GDIconBackgroundObjects1= [];
gdjs.WinSceneCode.GDIconBackgroundObjects2= [];
gdjs.WinSceneCode.GDNewTextObjects1= [];
gdjs.WinSceneCode.GDNewTextObjects2= [];
gdjs.WinSceneCode.GDPlayButtonObjects1= [];
gdjs.WinSceneCode.GDPlayButtonObjects2= [];
gdjs.WinSceneCode.GDNewText2Objects1= [];
gdjs.WinSceneCode.GDNewText2Objects2= [];


gdjs.WinSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.WinSceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinSceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.WinSceneCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinSceneCode.GDPlayButtonObjects1[k] = gdjs.WinSceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.WinSceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FullSokobanGame", false);
}}

}


};

gdjs.WinSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.WinSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.WinSceneCode.GDIconBackgroundObjects1.length = 0;
gdjs.WinSceneCode.GDIconBackgroundObjects2.length = 0;
gdjs.WinSceneCode.GDNewTextObjects1.length = 0;
gdjs.WinSceneCode.GDNewTextObjects2.length = 0;
gdjs.WinSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.WinSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.WinSceneCode.GDNewText2Objects1.length = 0;
gdjs.WinSceneCode.GDNewText2Objects2.length = 0;

gdjs.WinSceneCode.eventsList0(runtimeScene);
gdjs.WinSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.WinSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.WinSceneCode.GDIconBackgroundObjects1.length = 0;
gdjs.WinSceneCode.GDIconBackgroundObjects2.length = 0;
gdjs.WinSceneCode.GDNewTextObjects1.length = 0;
gdjs.WinSceneCode.GDNewTextObjects2.length = 0;
gdjs.WinSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.WinSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.WinSceneCode.GDNewText2Objects1.length = 0;
gdjs.WinSceneCode.GDNewText2Objects2.length = 0;


return;

}

gdjs['WinSceneCode'] = gdjs.WinSceneCode;
