gdjs.PetunjukCode = {};
gdjs.PetunjukCode.localVariables = [];
gdjs.PetunjukCode.GDNewTiledSpriteObjects1= [];
gdjs.PetunjukCode.GDNewTiledSpriteObjects2= [];
gdjs.PetunjukCode.GDStartButtonObjects1= [];
gdjs.PetunjukCode.GDStartButtonObjects2= [];
gdjs.PetunjukCode.GDPetunjuk1Objects1= [];
gdjs.PetunjukCode.GDPetunjuk1Objects2= [];
gdjs.PetunjukCode.GDSkyBackgroundObjects1= [];
gdjs.PetunjukCode.GDSkyBackgroundObjects2= [];
gdjs.PetunjukCode.GDJudul2Objects1= [];
gdjs.PetunjukCode.GDJudul2Objects2= [];
gdjs.PetunjukCode.GDTallBuildingOrangeObjects1= [];
gdjs.PetunjukCode.GDTallBuildingOrangeObjects2= [];
gdjs.PetunjukCode.GDOrangeLeavesObjects1= [];
gdjs.PetunjukCode.GDOrangeLeavesObjects2= [];
gdjs.PetunjukCode.GDNextObjects1= [];
gdjs.PetunjukCode.GDNextObjects2= [];
gdjs.PetunjukCode.GDBackObjects1= [];
gdjs.PetunjukCode.GDBackObjects2= [];


gdjs.PetunjukCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.PetunjukCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PetunjukCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.PetunjukCode.GDNextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PetunjukCode.GDNextObjects1[k] = gdjs.PetunjukCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.PetunjukCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.PetunjukCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PetunjukCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.PetunjukCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PetunjukCode.GDBackObjects1[k] = gdjs.PetunjukCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.PetunjukCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.PetunjukCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PetunjukCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.PetunjukCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.PetunjukCode.GDStartButtonObjects1.length = 0;
gdjs.PetunjukCode.GDStartButtonObjects2.length = 0;
gdjs.PetunjukCode.GDPetunjuk1Objects1.length = 0;
gdjs.PetunjukCode.GDPetunjuk1Objects2.length = 0;
gdjs.PetunjukCode.GDSkyBackgroundObjects1.length = 0;
gdjs.PetunjukCode.GDSkyBackgroundObjects2.length = 0;
gdjs.PetunjukCode.GDJudul2Objects1.length = 0;
gdjs.PetunjukCode.GDJudul2Objects2.length = 0;
gdjs.PetunjukCode.GDTallBuildingOrangeObjects1.length = 0;
gdjs.PetunjukCode.GDTallBuildingOrangeObjects2.length = 0;
gdjs.PetunjukCode.GDOrangeLeavesObjects1.length = 0;
gdjs.PetunjukCode.GDOrangeLeavesObjects2.length = 0;
gdjs.PetunjukCode.GDNextObjects1.length = 0;
gdjs.PetunjukCode.GDNextObjects2.length = 0;
gdjs.PetunjukCode.GDBackObjects1.length = 0;
gdjs.PetunjukCode.GDBackObjects2.length = 0;

gdjs.PetunjukCode.eventsList0(runtimeScene);
gdjs.PetunjukCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.PetunjukCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.PetunjukCode.GDStartButtonObjects1.length = 0;
gdjs.PetunjukCode.GDStartButtonObjects2.length = 0;
gdjs.PetunjukCode.GDPetunjuk1Objects1.length = 0;
gdjs.PetunjukCode.GDPetunjuk1Objects2.length = 0;
gdjs.PetunjukCode.GDSkyBackgroundObjects1.length = 0;
gdjs.PetunjukCode.GDSkyBackgroundObjects2.length = 0;
gdjs.PetunjukCode.GDJudul2Objects1.length = 0;
gdjs.PetunjukCode.GDJudul2Objects2.length = 0;
gdjs.PetunjukCode.GDTallBuildingOrangeObjects1.length = 0;
gdjs.PetunjukCode.GDTallBuildingOrangeObjects2.length = 0;
gdjs.PetunjukCode.GDOrangeLeavesObjects1.length = 0;
gdjs.PetunjukCode.GDOrangeLeavesObjects2.length = 0;
gdjs.PetunjukCode.GDNextObjects1.length = 0;
gdjs.PetunjukCode.GDNextObjects2.length = 0;
gdjs.PetunjukCode.GDBackObjects1.length = 0;
gdjs.PetunjukCode.GDBackObjects2.length = 0;


return;

}

gdjs['PetunjukCode'] = gdjs.PetunjukCode;
