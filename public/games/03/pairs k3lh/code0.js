gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDJudulObjects1= [];
gdjs.MenuCode.GDJudulObjects2= [];
gdjs.MenuCode.GDSkyBackgroundObjects1= [];
gdjs.MenuCode.GDSkyBackgroundObjects2= [];
gdjs.MenuCode.GDJudul2Objects1= [];
gdjs.MenuCode.GDJudul2Objects2= [];
gdjs.MenuCode.GDTallBuildingOrangeObjects1= [];
gdjs.MenuCode.GDTallBuildingOrangeObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Petunjuk", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDJudulObjects1.length = 0;
gdjs.MenuCode.GDJudulObjects2.length = 0;
gdjs.MenuCode.GDSkyBackgroundObjects1.length = 0;
gdjs.MenuCode.GDSkyBackgroundObjects2.length = 0;
gdjs.MenuCode.GDJudul2Objects1.length = 0;
gdjs.MenuCode.GDJudul2Objects2.length = 0;
gdjs.MenuCode.GDTallBuildingOrangeObjects1.length = 0;
gdjs.MenuCode.GDTallBuildingOrangeObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDJudulObjects1.length = 0;
gdjs.MenuCode.GDJudulObjects2.length = 0;
gdjs.MenuCode.GDSkyBackgroundObjects1.length = 0;
gdjs.MenuCode.GDSkyBackgroundObjects2.length = 0;
gdjs.MenuCode.GDJudul2Objects1.length = 0;
gdjs.MenuCode.GDJudul2Objects2.length = 0;
gdjs.MenuCode.GDTallBuildingOrangeObjects1.length = 0;
gdjs.MenuCode.GDTallBuildingOrangeObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
