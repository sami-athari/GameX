gdjs.lose2Code = {};
gdjs.lose2Code.localVariables = [];
gdjs.lose2Code.GDNewTiledSpriteObjects1= [];
gdjs.lose2Code.GDNewTiledSpriteObjects2= [];
gdjs.lose2Code.GDStartButtonObjects1= [];
gdjs.lose2Code.GDStartButtonObjects2= [];


gdjs.lose2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.lose2Code.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lose2Code.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.lose2Code.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lose2Code.GDStartButtonObjects1[k] = gdjs.lose2Code.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.lose2Code.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};

gdjs.lose2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lose2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.lose2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.lose2Code.GDStartButtonObjects1.length = 0;
gdjs.lose2Code.GDStartButtonObjects2.length = 0;

gdjs.lose2Code.eventsList0(runtimeScene);
gdjs.lose2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.lose2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.lose2Code.GDStartButtonObjects1.length = 0;
gdjs.lose2Code.GDStartButtonObjects2.length = 0;


return;

}

gdjs['lose2Code'] = gdjs.lose2Code;
