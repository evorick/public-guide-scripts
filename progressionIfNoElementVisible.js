(function() {
    var activeObj = pendo.guideDev.getActiveGuide();
    var nextStep = activeObj.guide.steps[activeObj.stepIndex + 1];
    
pendo._.defer(function(){setTimeout(function (){
    var results = pendo.Sizzle(nextStep.elementPathRule);
    if (activeObj.step.seenState == 'advanced' || activeObj.step.seenState == 'dismissed') {
      return;
    } else if (results.length == 0 || !pendo._.some(results, pendo.isElementVisible)) {
        pendo.log('advance 2 steps');
        pendo.onGuideAdvanced({steps: 2});
    } else {
      pendo.log('advance 1 step');
      pendo.onGuideAdvanced(activeObj.step);
    }
}, 1000)});
})();