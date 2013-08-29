library Runner;

import 'dart:html' as html;
import 'package:stagexl/stagexl.dart';
import 'runnerLib.dart' as lib;

class Runner
{
  Stage stage;
  RenderLoop renderLoop;
  lib.Runner exportRoot;

  Runner() {
    stage = new Stage("canvas", html.document.query("#canvas"), 550, 400, 24);

    renderLoop = new RenderLoop();
    renderLoop.addStage(stage);
  
    exportRoot = new lib.Runner();

    stage.addChild(exportRoot);
  }
}
