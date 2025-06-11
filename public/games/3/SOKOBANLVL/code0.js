gdjs.level1Code = {};
gdjs.level1Code.localVariables = [];
gdjs.level1Code.GDDownKeyObjects1_1final = [];

gdjs.level1Code.GDDownKeyObjects2_1final = [];

gdjs.level1Code.GDGoalObjects2_1final = [];

gdjs.level1Code.GDGoal_9595abuObjects2_1final = [];

gdjs.level1Code.GDGoal_9595biruObjects2_1final = [];

gdjs.level1Code.GDGoal_9595ijoObjects2_1final = [];

gdjs.level1Code.GDGoal_9595merahObjects2_1final = [];

gdjs.level1Code.GDLeftKeyObjects1_1final = [];

gdjs.level1Code.GDLeftKeyObjects2_1final = [];

gdjs.level1Code.GDMarkerObjects2_1final = [];

gdjs.level1Code.GDRightKeyObjects1_1final = [];

gdjs.level1Code.GDTilemap_9595ObstaclesObjects2_1final = [];

gdjs.level1Code.GDUpKeyObjects1_1final = [];

gdjs.level1Code.GDUpKeyObjects2_1final = [];

gdjs.level1Code.GDPlayerObjects1= [];
gdjs.level1Code.GDPlayerObjects2= [];
gdjs.level1Code.GDPlayerObjects3= [];
gdjs.level1Code.GDBoxObjects1= [];
gdjs.level1Code.GDBoxObjects2= [];
gdjs.level1Code.GDBoxObjects3= [];
gdjs.level1Code.GDMarkerObjects1= [];
gdjs.level1Code.GDMarkerObjects2= [];
gdjs.level1Code.GDMarkerObjects3= [];
gdjs.level1Code.GDFloorObjects1= [];
gdjs.level1Code.GDFloorObjects2= [];
gdjs.level1Code.GDFloorObjects3= [];
gdjs.level1Code.GDGoalObjects1= [];
gdjs.level1Code.GDGoalObjects2= [];
gdjs.level1Code.GDGoalObjects3= [];
gdjs.level1Code.GDResetGameButtonObjects1= [];
gdjs.level1Code.GDResetGameButtonObjects2= [];
gdjs.level1Code.GDResetGameButtonObjects3= [];
gdjs.level1Code.GDlevelObjects1= [];
gdjs.level1Code.GDlevelObjects2= [];
gdjs.level1Code.GDlevelObjects3= [];
gdjs.level1Code.GDUpKeyObjects1= [];
gdjs.level1Code.GDUpKeyObjects2= [];
gdjs.level1Code.GDUpKeyObjects3= [];
gdjs.level1Code.GDRightKeyObjects1= [];
gdjs.level1Code.GDRightKeyObjects2= [];
gdjs.level1Code.GDRightKeyObjects3= [];
gdjs.level1Code.GDLeftKeyObjects1= [];
gdjs.level1Code.GDLeftKeyObjects2= [];
gdjs.level1Code.GDLeftKeyObjects3= [];
gdjs.level1Code.GDDownKeyObjects1= [];
gdjs.level1Code.GDDownKeyObjects2= [];
gdjs.level1Code.GDDownKeyObjects3= [];
gdjs.level1Code.GDTilemap_9595ObstaclesObjects1= [];
gdjs.level1Code.GDTilemap_9595ObstaclesObjects2= [];
gdjs.level1Code.GDTilemap_9595ObstaclesObjects3= [];
gdjs.level1Code.GDWoodHudObjects1= [];
gdjs.level1Code.GDWoodHudObjects2= [];
gdjs.level1Code.GDWoodHudObjects3= [];
gdjs.level1Code.GDpetunjukObjects1= [];
gdjs.level1Code.GDpetunjukObjects2= [];
gdjs.level1Code.GDpetunjukObjects3= [];
gdjs.level1Code.GDTIMER2Objects1= [];
gdjs.level1Code.GDTIMER2Objects2= [];
gdjs.level1Code.GDTIMER2Objects3= [];
gdjs.level1Code.GDBox_9595merahObjects1= [];
gdjs.level1Code.GDBox_9595merahObjects2= [];
gdjs.level1Code.GDBox_9595merahObjects3= [];
gdjs.level1Code.GDGoal_9595merahObjects1= [];
gdjs.level1Code.GDGoal_9595merahObjects2= [];
gdjs.level1Code.GDGoal_9595merahObjects3= [];
gdjs.level1Code.GDGoal_9595biruObjects1= [];
gdjs.level1Code.GDGoal_9595biruObjects2= [];
gdjs.level1Code.GDGoal_9595biruObjects3= [];
gdjs.level1Code.GDBox_9595biruObjects1= [];
gdjs.level1Code.GDBox_9595biruObjects2= [];
gdjs.level1Code.GDBox_9595biruObjects3= [];
gdjs.level1Code.GDBox_9595ijoObjects1= [];
gdjs.level1Code.GDBox_9595ijoObjects2= [];
gdjs.level1Code.GDBox_9595ijoObjects3= [];
gdjs.level1Code.GDGoal_9595ijoObjects1= [];
gdjs.level1Code.GDGoal_9595ijoObjects2= [];
gdjs.level1Code.GDGoal_9595ijoObjects3= [];
gdjs.level1Code.GDGoal_9595abuObjects1= [];
gdjs.level1Code.GDGoal_9595abuObjects2= [];
gdjs.level1Code.GDGoal_9595abuObjects3= [];
gdjs.level1Code.GDBox_9595abuObjects1= [];
gdjs.level1Code.GDBox_9595abuObjects2= [];
gdjs.level1Code.GDBox_9595abuObjects3= [];


gdjs.level1Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9405852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownKey"), gdjs.level1Code.GDDownKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftKey"), gdjs.level1Code.GDLeftKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightKey"), gdjs.level1Code.GDRightKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpKey"), gdjs.level1Code.GDUpKeyObjects1);
{for(var i = 0, len = gdjs.level1Code.GDUpKeyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDUpKeyObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.level1Code.GDRightKeyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDRightKeyObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.level1Code.GDLeftKeyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDLeftKeyObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.level1Code.GDDownKeyObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDDownKeyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.level1Code.asyncCallback9088428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level1Code.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "petunjuk");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TIMER");
}gdjs.level1Code.localVariables.length = 0;
}
gdjs.level1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.level1Code.asyncCallback9088428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TIMER2"), gdjs.level1Code.GDTIMER2Objects2);
{for(var i = 0, len = gdjs.level1Code.GDTIMER2Objects2.length ;i < len;++i) {
    gdjs.level1Code.GDTIMER2Objects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "TIMER") - 60))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TIMER") > 60;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.level1Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level1Code.GDLeftKeyObjects1, gdjs.level1Code.GDLeftKeyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.level1Code.GDLeftKeyObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.level1Code.GDLeftKeyObjects1, gdjs.level1Code.GDLeftKeyObjects3);

for (var i = 0, k = 0, l = gdjs.level1Code.GDLeftKeyObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDLeftKeyObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDLeftKeyObjects3[k] = gdjs.level1Code.GDLeftKeyObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDLeftKeyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level1Code.GDLeftKeyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDLeftKeyObjects2_1final.indexOf(gdjs.level1Code.GDLeftKeyObjects3[j]) === -1 )
            gdjs.level1Code.GDLeftKeyObjects2_1final.push(gdjs.level1Code.GDLeftKeyObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.level1Code.GDLeftKeyObjects2_1final, gdjs.level1Code.GDLeftKeyObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(64));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

gdjs.copyArray(gdjs.level1Code.GDDownKeyObjects1, gdjs.level1Code.GDDownKeyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.level1Code.GDDownKeyObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.level1Code.GDDownKeyObjects1, gdjs.level1Code.GDDownKeyObjects3);

for (var i = 0, k = 0, l = gdjs.level1Code.GDDownKeyObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDDownKeyObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDDownKeyObjects3[k] = gdjs.level1Code.GDDownKeyObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDDownKeyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level1Code.GDDownKeyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDDownKeyObjects2_1final.indexOf(gdjs.level1Code.GDDownKeyObjects3[j]) === -1 )
            gdjs.level1Code.GDDownKeyObjects2_1final.push(gdjs.level1Code.GDDownKeyObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.level1Code.GDDownKeyObjects2_1final, gdjs.level1Code.GDDownKeyObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(64);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

gdjs.copyArray(gdjs.level1Code.GDUpKeyObjects1, gdjs.level1Code.GDUpKeyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.level1Code.GDUpKeyObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.level1Code.GDUpKeyObjects1, gdjs.level1Code.GDUpKeyObjects3);

for (var i = 0, k = 0, l = gdjs.level1Code.GDUpKeyObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDUpKeyObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDUpKeyObjects3[k] = gdjs.level1Code.GDUpKeyObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDUpKeyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level1Code.GDUpKeyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDUpKeyObjects2_1final.indexOf(gdjs.level1Code.GDUpKeyObjects3[j]) === -1 )
            gdjs.level1Code.GDUpKeyObjects2_1final.push(gdjs.level1Code.GDUpKeyObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.level1Code.GDUpKeyObjects2_1final, gdjs.level1Code.GDUpKeyObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(-(64));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

/* Reuse gdjs.level1Code.GDRightKeyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.level1Code.GDRightKeyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.level1Code.GDRightKeyObjects1, gdjs.level1Code.GDRightKeyObjects2);

for (var i = 0, k = 0, l = gdjs.level1Code.GDRightKeyObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDRightKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDRightKeyObjects2[k] = gdjs.level1Code.GDRightKeyObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDRightKeyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level1Code.GDRightKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDRightKeyObjects1_1final.indexOf(gdjs.level1Code.GDRightKeyObjects2[j]) === -1 )
            gdjs.level1Code.GDRightKeyObjects1_1final.push(gdjs.level1Code.GDRightKeyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.level1Code.GDRightKeyObjects1_1final, gdjs.level1Code.GDRightKeyObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(64);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


};gdjs.level1Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.level1Code.GDDownKeyObjects1.length = 0;

gdjs.level1Code.GDLeftKeyObjects1.length = 0;

gdjs.level1Code.GDRightKeyObjects1.length = 0;

gdjs.level1Code.GDUpKeyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.level1Code.GDDownKeyObjects1_1final.length = 0;
gdjs.level1Code.GDLeftKeyObjects1_1final.length = 0;
gdjs.level1Code.GDRightKeyObjects1_1final.length = 0;
gdjs.level1Code.GDUpKeyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("DownKey"), gdjs.level1Code.GDDownKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftKey"), gdjs.level1Code.GDLeftKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightKey"), gdjs.level1Code.GDRightKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpKey"), gdjs.level1Code.GDUpKeyObjects2);
for (var i = 0, k = 0, l = gdjs.level1Code.GDUpKeyObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDUpKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDUpKeyObjects2[k] = gdjs.level1Code.GDUpKeyObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDUpKeyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDRightKeyObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDRightKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDRightKeyObjects2[k] = gdjs.level1Code.GDRightKeyObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDRightKeyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDLeftKeyObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDLeftKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDLeftKeyObjects2[k] = gdjs.level1Code.GDLeftKeyObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDLeftKeyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDDownKeyObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDDownKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.level1Code.GDDownKeyObjects2[k] = gdjs.level1Code.GDDownKeyObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDDownKeyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level1Code.GDDownKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDDownKeyObjects1_1final.indexOf(gdjs.level1Code.GDDownKeyObjects2[j]) === -1 )
            gdjs.level1Code.GDDownKeyObjects1_1final.push(gdjs.level1Code.GDDownKeyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDLeftKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDLeftKeyObjects1_1final.indexOf(gdjs.level1Code.GDLeftKeyObjects2[j]) === -1 )
            gdjs.level1Code.GDLeftKeyObjects1_1final.push(gdjs.level1Code.GDLeftKeyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDRightKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDRightKeyObjects1_1final.indexOf(gdjs.level1Code.GDRightKeyObjects2[j]) === -1 )
            gdjs.level1Code.GDRightKeyObjects1_1final.push(gdjs.level1Code.GDRightKeyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDUpKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDUpKeyObjects1_1final.indexOf(gdjs.level1Code.GDUpKeyObjects2[j]) === -1 )
            gdjs.level1Code.GDUpKeyObjects1_1final.push(gdjs.level1Code.GDUpKeyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.level1Code.GDDownKeyObjects1_1final, gdjs.level1Code.GDDownKeyObjects1);
gdjs.copyArray(gdjs.level1Code.GDLeftKeyObjects1_1final, gdjs.level1Code.GDLeftKeyObjects1);
gdjs.copyArray(gdjs.level1Code.GDRightKeyObjects1_1final, gdjs.level1Code.GDRightKeyObjects1);
gdjs.copyArray(gdjs.level1Code.GDUpKeyObjects1_1final, gdjs.level1Code.GDUpKeyObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9390748);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{ //Subevents
gdjs.level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.level1Code.GDMarkerObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects3Objects = Hashtable.newFrom({"Marker": gdjs.level1Code.GDMarkerObjects3});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects3ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects3Objects = Hashtable.newFrom({"Box": gdjs.level1Code.GDBoxObjects3, "Player": gdjs.level1Code.GDPlayerObjects3, "Box_merah": gdjs.level1Code.GDBox_9595merahObjects3, "Box_biru": gdjs.level1Code.GDBox_9595biruObjects3, "Box_ijo": gdjs.level1Code.GDBox_9595ijoObjects3, "Box_abu": gdjs.level1Code.GDBox_9595abuObjects3});
gdjs.level1Code.eventsList5 = function(runtimeScene) {

};gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects3Objects = Hashtable.newFrom({"Marker": gdjs.level1Code.GDMarkerObjects3});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDTilemap_95959595ObstaclesObjects3Objects = Hashtable.newFrom({"Tilemap_Obstacles": gdjs.level1Code.GDTilemap_9595ObstaclesObjects3});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects3Objects = Hashtable.newFrom({"Marker": gdjs.level1Code.GDMarkerObjects3});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595merahObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595biruObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595ijoObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595abuObjects3Objects = Hashtable.newFrom({"Goal": gdjs.level1Code.GDGoalObjects3, "Goal_merah": gdjs.level1Code.GDGoal_9595merahObjects3, "Goal_biru": gdjs.level1Code.GDGoal_9595biruObjects3, "Goal_ijo": gdjs.level1Code.GDGoal_9595ijoObjects3, "Goal_abu": gdjs.level1Code.GDGoal_9595abuObjects3});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects2Objects = Hashtable.newFrom({"Box": gdjs.level1Code.GDBoxObjects2, "Player": gdjs.level1Code.GDPlayerObjects2, "Box_merah": gdjs.level1Code.GDBox_9595merahObjects2, "Box_biru": gdjs.level1Code.GDBox_9595biruObjects2, "Box_ijo": gdjs.level1Code.GDBox_9595ijoObjects2, "Box_abu": gdjs.level1Code.GDBox_9595abuObjects2});
gdjs.level1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.level1Code.GDBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_abu"), gdjs.level1Code.GDBox_9595abuObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_biru"), gdjs.level1Code.GDBox_9595biruObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_ijo"), gdjs.level1Code.GDBox_9595ijoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_merah"), gdjs.level1Code.GDBox_9595merahObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDBoxObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595abuObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595biruObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595ijoObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595merahObjects2 */
/* Reuse gdjs.level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBoxObjects2[i].returnVariable(gdjs.level1Code.GDBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects2[i].returnVariable(gdjs.level1Code.GDPlayerObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595merahObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595merahObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595merahObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595biruObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595biruObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595biruObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595ijoObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595ijoObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595ijoObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595abuObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595abuObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595abuObjects2[i].getVariables().get("Direction")).setString("None");
}
}}

}


};gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.level1Code.GDMarkerObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects2Objects = Hashtable.newFrom({"Box": gdjs.level1Code.GDBoxObjects2, "Player": gdjs.level1Code.GDPlayerObjects2, "Box_merah": gdjs.level1Code.GDBox_9595merahObjects2, "Box_biru": gdjs.level1Code.GDBox_9595biruObjects2, "Box_ijo": gdjs.level1Code.GDBox_9595ijoObjects2, "Box_abu": gdjs.level1Code.GDBox_9595abuObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects2Objects = Hashtable.newFrom({"Box": gdjs.level1Code.GDBoxObjects2, "Player": gdjs.level1Code.GDPlayerObjects2, "Box_merah": gdjs.level1Code.GDBox_9595merahObjects2, "Box_biru": gdjs.level1Code.GDBox_9595biruObjects2, "Box_ijo": gdjs.level1Code.GDBox_9595ijoObjects2, "Box_abu": gdjs.level1Code.GDBox_9595abuObjects2});
gdjs.level1Code.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.level1Code.GDBoxObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595abuObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595biruObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595ijoObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595merahObjects2 */
/* Reuse gdjs.level1Code.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDBoxObjects2[i].getVariableString(gdjs.level1Code.GDBoxObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDBoxObjects2[k] = gdjs.level1Code.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDBoxObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDPlayerObjects2[i].getVariableString(gdjs.level1Code.GDPlayerObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDPlayerObjects2[k] = gdjs.level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDPlayerObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDBox_9595merahObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDBox_9595merahObjects2[i].getVariableString(gdjs.level1Code.GDBox_9595merahObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDBox_9595merahObjects2[k] = gdjs.level1Code.GDBox_9595merahObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDBox_9595merahObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDBox_9595biruObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDBox_9595biruObjects2[i].getVariableString(gdjs.level1Code.GDBox_9595biruObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDBox_9595biruObjects2[k] = gdjs.level1Code.GDBox_9595biruObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDBox_9595biruObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDBox_9595ijoObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDBox_9595ijoObjects2[i].getVariableString(gdjs.level1Code.GDBox_9595ijoObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDBox_9595ijoObjects2[k] = gdjs.level1Code.GDBox_9595ijoObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDBox_9595ijoObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDBox_9595abuObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDBox_9595abuObjects2[i].getVariableString(gdjs.level1Code.GDBox_9595abuObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDBox_9595abuObjects2[k] = gdjs.level1Code.GDBox_9595abuObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDBox_9595abuObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDBoxObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595abuObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595biruObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595ijoObjects2 */
/* Reuse gdjs.level1Code.GDBox_9595merahObjects2 */
/* Reuse gdjs.level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBoxObjects2[i].setPosition((gdjs.level1Code.GDBoxObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.level1Code.GDBoxObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects2[i].setPosition((gdjs.level1Code.GDPlayerObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.level1Code.GDPlayerObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595merahObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595merahObjects2[i].setPosition((gdjs.level1Code.GDBox_9595merahObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.level1Code.GDBox_9595merahObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595biruObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595biruObjects2[i].setPosition((gdjs.level1Code.GDBox_9595biruObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.level1Code.GDBox_9595biruObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595ijoObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595ijoObjects2[i].setPosition((gdjs.level1Code.GDBox_9595ijoObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.level1Code.GDBox_9595ijoObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595abuObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595abuObjects2[i].setPosition((gdjs.level1Code.GDBox_9595abuObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.level1Code.GDBox_9595abuObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.level1Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBoxObjects2[i].returnVariable(gdjs.level1Code.GDBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects2[i].returnVariable(gdjs.level1Code.GDPlayerObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595merahObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595merahObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595merahObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595biruObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595biruObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595biruObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595ijoObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595ijoObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595ijoObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595abuObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595abuObjects2[i].returnVariable(gdjs.level1Code.GDBox_9595abuObjects2[i].getVariables().get("Direction")).setString("None");
}
}}

}


};gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2Objects = Hashtable.newFrom({"Box": gdjs.level1Code.GDBoxObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects2Objects = Hashtable.newFrom({"Goal": gdjs.level1Code.GDGoalObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2Objects = Hashtable.newFrom({"Box_merah": gdjs.level1Code.GDBox_9595merahObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595merahObjects2Objects = Hashtable.newFrom({"Goal_merah": gdjs.level1Code.GDGoal_9595merahObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2Objects = Hashtable.newFrom({"Box_biru": gdjs.level1Code.GDBox_9595biruObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595biruObjects2Objects = Hashtable.newFrom({"Goal_biru": gdjs.level1Code.GDGoal_9595biruObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2Objects = Hashtable.newFrom({"Box_ijo": gdjs.level1Code.GDBox_9595ijoObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595ijoObjects2Objects = Hashtable.newFrom({"Goal_ijo": gdjs.level1Code.GDGoal_9595ijoObjects2});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595abuObjects1Objects = Hashtable.newFrom({"Box_abu": gdjs.level1Code.GDBox_9595abuObjects1});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595abuObjects1Objects = Hashtable.newFrom({"Goal_abu": gdjs.level1Code.GDGoal_9595abuObjects1});
gdjs.level1Code.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects2);
gdjs.level1Code.GDMarkerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects2Objects, (( gdjs.level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.level1Code.GDPlayerObjects2[0].getPointX("")), (( gdjs.level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.level1Code.GDPlayerObjects2[0].getPointY("")), "");
}}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.level1Code.GDBoxObjects3);
gdjs.copyArray(runtimeScene.getObjects("Box_abu"), gdjs.level1Code.GDBox_9595abuObjects3);
gdjs.copyArray(runtimeScene.getObjects("Box_biru"), gdjs.level1Code.GDBox_9595biruObjects3);
gdjs.copyArray(runtimeScene.getObjects("Box_ijo"), gdjs.level1Code.GDBox_9595ijoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Box_merah"), gdjs.level1Code.GDBox_9595merahObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.level1Code.GDMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects3Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects3ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects3ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.level1Code.GDBoxObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDBoxObjects3[i].returnVariable(gdjs.level1Code.GDBoxObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.level1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDPlayerObjects3[i].returnVariable(gdjs.level1Code.GDPlayerObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595merahObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595merahObjects3[i].returnVariable(gdjs.level1Code.GDBox_9595merahObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595biruObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595biruObjects3[i].returnVariable(gdjs.level1Code.GDBox_9595biruObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595ijoObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595ijoObjects3[i].returnVariable(gdjs.level1Code.GDBox_9595ijoObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.level1Code.GDBox_9595abuObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595abuObjects3[i].returnVariable(gdjs.level1Code.GDBox_9595abuObjects3[i].getVariables().get("Direction")).setString("Move");
}
}{for(var i = 0, len = gdjs.level1Code.GDMarkerObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDMarkerObjects3[i].setPosition((( gdjs.level1Code.GDBox_9595abuObjects3.length === 0 ) ? (( gdjs.level1Code.GDBox_9595ijoObjects3.length === 0 ) ? (( gdjs.level1Code.GDBox_9595biruObjects3.length === 0 ) ? (( gdjs.level1Code.GDBox_9595merahObjects3.length === 0 ) ? (( gdjs.level1Code.GDPlayerObjects3.length === 0 ) ? (( gdjs.level1Code.GDBoxObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDBoxObjects3[0].getPointX("")) :gdjs.level1Code.GDPlayerObjects3[0].getPointX("")) :gdjs.level1Code.GDBox_9595merahObjects3[0].getPointX("")) :gdjs.level1Code.GDBox_9595biruObjects3[0].getPointX("")) :gdjs.level1Code.GDBox_9595ijoObjects3[0].getPointX("")) :gdjs.level1Code.GDBox_9595abuObjects3[0].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(( gdjs.level1Code.GDBox_9595abuObjects3.length === 0 ) ? (( gdjs.level1Code.GDBox_9595ijoObjects3.length === 0 ) ? (( gdjs.level1Code.GDBox_9595biruObjects3.length === 0 ) ? (( gdjs.level1Code.GDBox_9595merahObjects3.length === 0 ) ? (( gdjs.level1Code.GDPlayerObjects3.length === 0 ) ? (( gdjs.level1Code.GDBoxObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDBoxObjects3[0].getPointY("")) :gdjs.level1Code.GDPlayerObjects3[0].getPointY("")) :gdjs.level1Code.GDBox_9595merahObjects3[0].getPointY("")) :gdjs.level1Code.GDBox_9595biruObjects3[0].getPointY("")) :gdjs.level1Code.GDBox_9595ijoObjects3[0].getPointY("")) :gdjs.level1Code.GDBox_9595abuObjects3[0].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{ //Subevents: 
gdjs.level1Code.eventsList5(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{

gdjs.level1Code.GDGoalObjects2.length = 0;

gdjs.level1Code.GDGoal_9595abuObjects2.length = 0;

gdjs.level1Code.GDGoal_9595biruObjects2.length = 0;

gdjs.level1Code.GDGoal_9595ijoObjects2.length = 0;

gdjs.level1Code.GDGoal_9595merahObjects2.length = 0;

gdjs.level1Code.GDMarkerObjects2.length = 0;

gdjs.level1Code.GDTilemap_9595ObstaclesObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.level1Code.GDGoalObjects2_1final.length = 0;
gdjs.level1Code.GDGoal_9595abuObjects2_1final.length = 0;
gdjs.level1Code.GDGoal_9595biruObjects2_1final.length = 0;
gdjs.level1Code.GDGoal_9595ijoObjects2_1final.length = 0;
gdjs.level1Code.GDGoal_9595merahObjects2_1final.length = 0;
gdjs.level1Code.GDMarkerObjects2_1final.length = 0;
gdjs.level1Code.GDTilemap_9595ObstaclesObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.level1Code.GDMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Obstacles"), gdjs.level1Code.GDTilemap_9595ObstaclesObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects3Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDTilemap_95959595ObstaclesObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level1Code.GDMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDMarkerObjects2_1final.indexOf(gdjs.level1Code.GDMarkerObjects3[j]) === -1 )
            gdjs.level1Code.GDMarkerObjects2_1final.push(gdjs.level1Code.GDMarkerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDTilemap_9595ObstaclesObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDTilemap_9595ObstaclesObjects2_1final.indexOf(gdjs.level1Code.GDTilemap_9595ObstaclesObjects3[j]) === -1 )
            gdjs.level1Code.GDTilemap_9595ObstaclesObjects2_1final.push(gdjs.level1Code.GDTilemap_9595ObstaclesObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.level1Code.GDGoalObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal_abu"), gdjs.level1Code.GDGoal_9595abuObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal_biru"), gdjs.level1Code.GDGoal_9595biruObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal_ijo"), gdjs.level1Code.GDGoal_9595ijoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal_merah"), gdjs.level1Code.GDGoal_9595merahObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.level1Code.GDMarkerObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects3Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595merahObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595biruObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595ijoObjects3ObjectsGDgdjs_9546level1Code_9546GDGoal_95959595abuObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoalObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoalObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.level1Code.GDGoalObjects3[k] = gdjs.level1Code.GDGoalObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDGoalObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595merahObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595merahObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.level1Code.GDGoal_9595merahObjects3[k] = gdjs.level1Code.GDGoal_9595merahObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595merahObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595biruObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595biruObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.level1Code.GDGoal_9595biruObjects3[k] = gdjs.level1Code.GDGoal_9595biruObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595biruObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595ijoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595ijoObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.level1Code.GDGoal_9595ijoObjects3[k] = gdjs.level1Code.GDGoal_9595ijoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595ijoObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595abuObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595abuObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.level1Code.GDGoal_9595abuObjects3[k] = gdjs.level1Code.GDGoal_9595abuObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595abuObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.level1Code.GDGoalObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDGoalObjects2_1final.indexOf(gdjs.level1Code.GDGoalObjects3[j]) === -1 )
            gdjs.level1Code.GDGoalObjects2_1final.push(gdjs.level1Code.GDGoalObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDGoal_9595abuObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDGoal_9595abuObjects2_1final.indexOf(gdjs.level1Code.GDGoal_9595abuObjects3[j]) === -1 )
            gdjs.level1Code.GDGoal_9595abuObjects2_1final.push(gdjs.level1Code.GDGoal_9595abuObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDGoal_9595biruObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDGoal_9595biruObjects2_1final.indexOf(gdjs.level1Code.GDGoal_9595biruObjects3[j]) === -1 )
            gdjs.level1Code.GDGoal_9595biruObjects2_1final.push(gdjs.level1Code.GDGoal_9595biruObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDGoal_9595ijoObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDGoal_9595ijoObjects2_1final.indexOf(gdjs.level1Code.GDGoal_9595ijoObjects3[j]) === -1 )
            gdjs.level1Code.GDGoal_9595ijoObjects2_1final.push(gdjs.level1Code.GDGoal_9595ijoObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDGoal_9595merahObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDGoal_9595merahObjects2_1final.indexOf(gdjs.level1Code.GDGoal_9595merahObjects3[j]) === -1 )
            gdjs.level1Code.GDGoal_9595merahObjects2_1final.push(gdjs.level1Code.GDGoal_9595merahObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.level1Code.GDMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.level1Code.GDMarkerObjects2_1final.indexOf(gdjs.level1Code.GDMarkerObjects3[j]) === -1 )
            gdjs.level1Code.GDMarkerObjects2_1final.push(gdjs.level1Code.GDMarkerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.level1Code.GDGoalObjects2_1final, gdjs.level1Code.GDGoalObjects2);
gdjs.copyArray(gdjs.level1Code.GDGoal_9595abuObjects2_1final, gdjs.level1Code.GDGoal_9595abuObjects2);
gdjs.copyArray(gdjs.level1Code.GDGoal_9595biruObjects2_1final, gdjs.level1Code.GDGoal_9595biruObjects2);
gdjs.copyArray(gdjs.level1Code.GDGoal_9595ijoObjects2_1final, gdjs.level1Code.GDGoal_9595ijoObjects2);
gdjs.copyArray(gdjs.level1Code.GDGoal_9595merahObjects2_1final, gdjs.level1Code.GDGoal_9595merahObjects2);
gdjs.copyArray(gdjs.level1Code.GDMarkerObjects2_1final, gdjs.level1Code.GDMarkerObjects2);
gdjs.copyArray(gdjs.level1Code.GDTilemap_9595ObstaclesObjects2_1final, gdjs.level1Code.GDTilemap_9595ObstaclesObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.level1Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.level1Code.GDBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_abu"), gdjs.level1Code.GDBox_9595abuObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_biru"), gdjs.level1Code.GDBox_9595biruObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_ijo"), gdjs.level1Code.GDBox_9595ijoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box_merah"), gdjs.level1Code.GDBox_9595merahObjects2);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.level1Code.GDMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDMarkerObjects2Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2ObjectsGDgdjs_9546level1Code_9546GDPlayerObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2ObjectsGDgdjs_9546level1Code_9546GDBox_95959595abuObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.level1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.level1Code.GDBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.level1Code.GDGoalObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBoxObjects2Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoalObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoalObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDGoalObjects2[k] = gdjs.level1Code.GDGoalObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDGoalObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDBoxObjects2 */
/* Reuse gdjs.level1Code.GDGoalObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level1Code.GDGoalObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDGoalObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_merah"), gdjs.level1Code.GDBox_9595merahObjects2);
gdjs.copyArray(runtimeScene.getObjects("Goal_merah"), gdjs.level1Code.GDGoal_9595merahObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595merahObjects2Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595merahObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595merahObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595merahObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDGoal_9595merahObjects2[k] = gdjs.level1Code.GDGoal_9595merahObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595merahObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDBox_9595merahObjects2 */
/* Reuse gdjs.level1Code.GDGoal_9595merahObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDBox_9595merahObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595merahObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level1Code.GDGoal_9595merahObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDGoal_9595merahObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_biru"), gdjs.level1Code.GDBox_9595biruObjects2);
gdjs.copyArray(runtimeScene.getObjects("Goal_biru"), gdjs.level1Code.GDGoal_9595biruObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595biruObjects2Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595biruObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595biruObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595biruObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDGoal_9595biruObjects2[k] = gdjs.level1Code.GDGoal_9595biruObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595biruObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDBox_9595biruObjects2 */
/* Reuse gdjs.level1Code.GDGoal_9595biruObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDBox_9595biruObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595biruObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level1Code.GDGoal_9595biruObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDGoal_9595biruObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_ijo"), gdjs.level1Code.GDBox_9595ijoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Goal_ijo"), gdjs.level1Code.GDGoal_9595ijoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595ijoObjects2Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595ijoObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595ijoObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595ijoObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDGoal_9595ijoObjects2[k] = gdjs.level1Code.GDGoal_9595ijoObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595ijoObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDBox_9595ijoObjects2 */
/* Reuse gdjs.level1Code.GDGoal_9595ijoObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDBox_9595ijoObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595ijoObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level1Code.GDGoal_9595ijoObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDGoal_9595ijoObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_abu"), gdjs.level1Code.GDBox_9595abuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Goal_abu"), gdjs.level1Code.GDGoal_9595abuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDBox_95959595abuObjects1Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoal_95959595abuObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoal_9595abuObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoal_9595abuObjects1[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDGoal_9595abuObjects1[k] = gdjs.level1Code.GDGoal_9595abuObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDGoal_9595abuObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDBox_9595abuObjects1 */
/* Reuse gdjs.level1Code.GDGoal_9595abuObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDBox_9595abuObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDBox_9595abuObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level1Code.GDGoal_9595abuObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDGoal_9595abuObjects1[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


};gdjs.level1Code.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ResetGameButton"), gdjs.level1Code.GDResetGameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDResetGameButtonObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDResetGameButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDResetGameButtonObjects1[k] = gdjs.level1Code.GDResetGameButtonObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDResetGameButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects1ObjectsEmptyGDGoal_9595merahObjectsEmptyGDGoal_9595biruObjectsEmptyGDGoal_9595ijoObjectsEmptyGDGoal_9595abuObjects = Hashtable.newFrom({"Goal": gdjs.level1Code.GDGoalObjects1, "Goal_merah": [], "Goal_biru": [], "Goal_ijo": [], "Goal_abu": []});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects1ObjectsEmptyGDGoal_9595merahObjectsEmptyGDGoal_9595biruObjectsEmptyGDGoal_9595ijoObjectsEmptyGDGoal_9595abuObjects = Hashtable.newFrom({"Goal": gdjs.level1Code.GDGoalObjects1, "Goal_merah": [], "Goal_biru": [], "Goal_ijo": [], "Goal_abu": []});
gdjs.level1Code.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.level1Code.GDGoalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "WinGame"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDGoalObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDGoalObjects1[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDGoalObjects1[k] = gdjs.level1Code.GDGoalObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDGoalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects1ObjectsEmptyGDGoal_9595merahObjectsEmptyGDGoal_9595biruObjectsEmptyGDGoal_9595ijoObjectsEmptyGDGoal_9595abuObjects) == gdjs.evtTools.object.getPickedInstancesCount(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDGoalObjects1ObjectsEmptyGDGoal_9595merahObjectsEmptyGDGoal_9595biruObjectsEmptyGDGoal_9595ijoObjectsEmptyGDGoal_9595abuObjects));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win2", false);
}}

}


};gdjs.level1Code.eventsList11 = function(runtimeScene) {

};gdjs.level1Code.eventsList12 = function(runtimeScene) {

{


gdjs.level1Code.eventsList0(runtimeScene);
}


{


gdjs.level1Code.eventsList2(runtimeScene);
}


{


gdjs.level1Code.eventsList4(runtimeScene);
}


{


gdjs.level1Code.eventsList8(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.level1Code.eventsList9(runtimeScene);
}


{


gdjs.level1Code.eventsList10(runtimeScene);
}


{


gdjs.level1Code.eventsList11(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TIMER") >= 60;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lose2", false);
}}

}


};

gdjs.level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level1Code.GDPlayerObjects1.length = 0;
gdjs.level1Code.GDPlayerObjects2.length = 0;
gdjs.level1Code.GDPlayerObjects3.length = 0;
gdjs.level1Code.GDBoxObjects1.length = 0;
gdjs.level1Code.GDBoxObjects2.length = 0;
gdjs.level1Code.GDBoxObjects3.length = 0;
gdjs.level1Code.GDMarkerObjects1.length = 0;
gdjs.level1Code.GDMarkerObjects2.length = 0;
gdjs.level1Code.GDMarkerObjects3.length = 0;
gdjs.level1Code.GDFloorObjects1.length = 0;
gdjs.level1Code.GDFloorObjects2.length = 0;
gdjs.level1Code.GDFloorObjects3.length = 0;
gdjs.level1Code.GDGoalObjects1.length = 0;
gdjs.level1Code.GDGoalObjects2.length = 0;
gdjs.level1Code.GDGoalObjects3.length = 0;
gdjs.level1Code.GDResetGameButtonObjects1.length = 0;
gdjs.level1Code.GDResetGameButtonObjects2.length = 0;
gdjs.level1Code.GDResetGameButtonObjects3.length = 0;
gdjs.level1Code.GDlevelObjects1.length = 0;
gdjs.level1Code.GDlevelObjects2.length = 0;
gdjs.level1Code.GDlevelObjects3.length = 0;
gdjs.level1Code.GDUpKeyObjects1.length = 0;
gdjs.level1Code.GDUpKeyObjects2.length = 0;
gdjs.level1Code.GDUpKeyObjects3.length = 0;
gdjs.level1Code.GDRightKeyObjects1.length = 0;
gdjs.level1Code.GDRightKeyObjects2.length = 0;
gdjs.level1Code.GDRightKeyObjects3.length = 0;
gdjs.level1Code.GDLeftKeyObjects1.length = 0;
gdjs.level1Code.GDLeftKeyObjects2.length = 0;
gdjs.level1Code.GDLeftKeyObjects3.length = 0;
gdjs.level1Code.GDDownKeyObjects1.length = 0;
gdjs.level1Code.GDDownKeyObjects2.length = 0;
gdjs.level1Code.GDDownKeyObjects3.length = 0;
gdjs.level1Code.GDTilemap_9595ObstaclesObjects1.length = 0;
gdjs.level1Code.GDTilemap_9595ObstaclesObjects2.length = 0;
gdjs.level1Code.GDTilemap_9595ObstaclesObjects3.length = 0;
gdjs.level1Code.GDWoodHudObjects1.length = 0;
gdjs.level1Code.GDWoodHudObjects2.length = 0;
gdjs.level1Code.GDWoodHudObjects3.length = 0;
gdjs.level1Code.GDpetunjukObjects1.length = 0;
gdjs.level1Code.GDpetunjukObjects2.length = 0;
gdjs.level1Code.GDpetunjukObjects3.length = 0;
gdjs.level1Code.GDTIMER2Objects1.length = 0;
gdjs.level1Code.GDTIMER2Objects2.length = 0;
gdjs.level1Code.GDTIMER2Objects3.length = 0;
gdjs.level1Code.GDBox_9595merahObjects1.length = 0;
gdjs.level1Code.GDBox_9595merahObjects2.length = 0;
gdjs.level1Code.GDBox_9595merahObjects3.length = 0;
gdjs.level1Code.GDGoal_9595merahObjects1.length = 0;
gdjs.level1Code.GDGoal_9595merahObjects2.length = 0;
gdjs.level1Code.GDGoal_9595merahObjects3.length = 0;
gdjs.level1Code.GDGoal_9595biruObjects1.length = 0;
gdjs.level1Code.GDGoal_9595biruObjects2.length = 0;
gdjs.level1Code.GDGoal_9595biruObjects3.length = 0;
gdjs.level1Code.GDBox_9595biruObjects1.length = 0;
gdjs.level1Code.GDBox_9595biruObjects2.length = 0;
gdjs.level1Code.GDBox_9595biruObjects3.length = 0;
gdjs.level1Code.GDBox_9595ijoObjects1.length = 0;
gdjs.level1Code.GDBox_9595ijoObjects2.length = 0;
gdjs.level1Code.GDBox_9595ijoObjects3.length = 0;
gdjs.level1Code.GDGoal_9595ijoObjects1.length = 0;
gdjs.level1Code.GDGoal_9595ijoObjects2.length = 0;
gdjs.level1Code.GDGoal_9595ijoObjects3.length = 0;
gdjs.level1Code.GDGoal_9595abuObjects1.length = 0;
gdjs.level1Code.GDGoal_9595abuObjects2.length = 0;
gdjs.level1Code.GDGoal_9595abuObjects3.length = 0;
gdjs.level1Code.GDBox_9595abuObjects1.length = 0;
gdjs.level1Code.GDBox_9595abuObjects2.length = 0;
gdjs.level1Code.GDBox_9595abuObjects3.length = 0;

gdjs.level1Code.eventsList12(runtimeScene);
gdjs.level1Code.GDPlayerObjects1.length = 0;
gdjs.level1Code.GDPlayerObjects2.length = 0;
gdjs.level1Code.GDPlayerObjects3.length = 0;
gdjs.level1Code.GDBoxObjects1.length = 0;
gdjs.level1Code.GDBoxObjects2.length = 0;
gdjs.level1Code.GDBoxObjects3.length = 0;
gdjs.level1Code.GDMarkerObjects1.length = 0;
gdjs.level1Code.GDMarkerObjects2.length = 0;
gdjs.level1Code.GDMarkerObjects3.length = 0;
gdjs.level1Code.GDFloorObjects1.length = 0;
gdjs.level1Code.GDFloorObjects2.length = 0;
gdjs.level1Code.GDFloorObjects3.length = 0;
gdjs.level1Code.GDGoalObjects1.length = 0;
gdjs.level1Code.GDGoalObjects2.length = 0;
gdjs.level1Code.GDGoalObjects3.length = 0;
gdjs.level1Code.GDResetGameButtonObjects1.length = 0;
gdjs.level1Code.GDResetGameButtonObjects2.length = 0;
gdjs.level1Code.GDResetGameButtonObjects3.length = 0;
gdjs.level1Code.GDlevelObjects1.length = 0;
gdjs.level1Code.GDlevelObjects2.length = 0;
gdjs.level1Code.GDlevelObjects3.length = 0;
gdjs.level1Code.GDUpKeyObjects1.length = 0;
gdjs.level1Code.GDUpKeyObjects2.length = 0;
gdjs.level1Code.GDUpKeyObjects3.length = 0;
gdjs.level1Code.GDRightKeyObjects1.length = 0;
gdjs.level1Code.GDRightKeyObjects2.length = 0;
gdjs.level1Code.GDRightKeyObjects3.length = 0;
gdjs.level1Code.GDLeftKeyObjects1.length = 0;
gdjs.level1Code.GDLeftKeyObjects2.length = 0;
gdjs.level1Code.GDLeftKeyObjects3.length = 0;
gdjs.level1Code.GDDownKeyObjects1.length = 0;
gdjs.level1Code.GDDownKeyObjects2.length = 0;
gdjs.level1Code.GDDownKeyObjects3.length = 0;
gdjs.level1Code.GDTilemap_9595ObstaclesObjects1.length = 0;
gdjs.level1Code.GDTilemap_9595ObstaclesObjects2.length = 0;
gdjs.level1Code.GDTilemap_9595ObstaclesObjects3.length = 0;
gdjs.level1Code.GDWoodHudObjects1.length = 0;
gdjs.level1Code.GDWoodHudObjects2.length = 0;
gdjs.level1Code.GDWoodHudObjects3.length = 0;
gdjs.level1Code.GDpetunjukObjects1.length = 0;
gdjs.level1Code.GDpetunjukObjects2.length = 0;
gdjs.level1Code.GDpetunjukObjects3.length = 0;
gdjs.level1Code.GDTIMER2Objects1.length = 0;
gdjs.level1Code.GDTIMER2Objects2.length = 0;
gdjs.level1Code.GDTIMER2Objects3.length = 0;
gdjs.level1Code.GDBox_9595merahObjects1.length = 0;
gdjs.level1Code.GDBox_9595merahObjects2.length = 0;
gdjs.level1Code.GDBox_9595merahObjects3.length = 0;
gdjs.level1Code.GDGoal_9595merahObjects1.length = 0;
gdjs.level1Code.GDGoal_9595merahObjects2.length = 0;
gdjs.level1Code.GDGoal_9595merahObjects3.length = 0;
gdjs.level1Code.GDGoal_9595biruObjects1.length = 0;
gdjs.level1Code.GDGoal_9595biruObjects2.length = 0;
gdjs.level1Code.GDGoal_9595biruObjects3.length = 0;
gdjs.level1Code.GDBox_9595biruObjects1.length = 0;
gdjs.level1Code.GDBox_9595biruObjects2.length = 0;
gdjs.level1Code.GDBox_9595biruObjects3.length = 0;
gdjs.level1Code.GDBox_9595ijoObjects1.length = 0;
gdjs.level1Code.GDBox_9595ijoObjects2.length = 0;
gdjs.level1Code.GDBox_9595ijoObjects3.length = 0;
gdjs.level1Code.GDGoal_9595ijoObjects1.length = 0;
gdjs.level1Code.GDGoal_9595ijoObjects2.length = 0;
gdjs.level1Code.GDGoal_9595ijoObjects3.length = 0;
gdjs.level1Code.GDGoal_9595abuObjects1.length = 0;
gdjs.level1Code.GDGoal_9595abuObjects2.length = 0;
gdjs.level1Code.GDGoal_9595abuObjects3.length = 0;
gdjs.level1Code.GDBox_9595abuObjects1.length = 0;
gdjs.level1Code.GDBox_9595abuObjects2.length = 0;
gdjs.level1Code.GDBox_9595abuObjects3.length = 0;


return;

}

gdjs['level1Code'] = gdjs.level1Code;
