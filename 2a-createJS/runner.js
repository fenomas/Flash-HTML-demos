(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.runner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Player();
	this.instance.setTransform(188.2,160.3,0.947,0.947,0,0,0,-2.7,-121.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128.2,34.3,119.9,252);


// symbols:
(lib._Player_Thigh_Right = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#030118","#0D023E"],[0,1],0,16.1,5.9,3).s().p("ADLCXIgfgXIBSgKIhTgLIgbAFQgaAGgagBQhcAAhQgcQhQgdgsAAQhVAAAAgJQAAgGgJgDIgYgJQgKgFgGgHQgHgUgFgaQgDgUAEgMIARgmQANgeApgMIAygQQgIAjAAASQAAA/AqAVQAZAMBbAFQBmAIBEAUQBwAiBkBNQgrAWgkAAQgHAAgPgLgAEyBkQgBgGgJgWQAOABAKgJQAJgKAAgMQANABACAEIABAGIgBABIgPgMQAGAFAJASQAJAUAAAHQgCAZgRAJIgcgagAjXiZIBggHIgOAGIgDAAIAFAAIgBACIgBABQgTgBgOAUQgNATAAAbQgIgJgcg6g");
	this.shape.setTransform(20.7,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1291C7").s().p("AAsAlQhDgUhogJQhagHgZgKQgrgVAAg/QAAgSAJgjIAMAAQAdA6AHAJIAFAIQAlAPAiAKQBAAVBqALQArAEBVAsQBSAtAUABQAIAVABAGIAdAaIgeAOQhkhNhwghg");
	this.shape_1.setTransform(25.6,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B0233").s().p("ACkCfQgMgWgdgCQguAGgqAAQhNABg1gfQg+gkhEgGQhEgHgSgKQgRgJgLgJQgMgIgCgIQAGAHAJAFIAYAJQAJADAAAGQAAAJBVAAQAtAABPAdQBQAcBdAAQAZABAbgGIAagFIBTALIhSAKIAgAXQAPALAHAAQAkAAArgWIAegOQARgJABgZQAAgHgJgUQgJgSgFgFIAPAMIAAgBIAAgGQgCgEgNgBQgRgPhEgkQhBglgIgKQgagfg5giQhJgqhAAAQhBAAgTALIACgCIgGAAIADAAIAOgGQARgGA6gJQAjAAAZAHQAeAJA2AbQAcAOA3AzQAyAvAfALQA7ARAZAcQAWAZAAAlQAAAcglAZQgtAfhNAAQgTAAgMgUg");
	this.shape_2.setTransform(22.3,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180479").s().p("AB4BJQhVgugpgFQhsgKhAgTQgigLglgPIgFgHQAAgbAOgTQANgUAUAAIAAAAQATgLBBAAQBBAABIAqQA5AhAaAgQAIAKBBAiQBEAnARAPQAAAMgKAJQgKAJgNAAQgUAAhSgtg");
	this.shape_3.setTransform(28.2,-0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-13.2,72.3,35.9);


(lib._Player_Thigh_Left = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D023E").s().p("ACICCIA7AQIgEgDQgXgSgRgGQgHgCgYgDQhfgNh7g+QiThFg0hJIACgBIgDgBIgEgNQAFgXAkgSQAkgTBLgQIgZAjQAEACBAAEQgQAEgSANQgPAMAAAFQAAA9BuAsQAfANBaAWQAUAFCYBDQAMAHANALIAIAOQAKAPANAGQgNAQgHAUQgEANgGAAQg3AAhShBg");
	this.shape.setTransform(21.1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180479").s().p("ADFCBIgHgOQgNgKgNgIQiYhDgSgFQhcgXgfgLQhtgtAAg9QAAgFAPgLQARgOAQgDQBSgHB6BZQAmAbBWBLQAXAUAyAeQAcARAAASIgFAKQgGAKgIAJQgNgGgKgPg");
	this.shape_1.setTransform(29.3,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B0233").s().p("ADMDAQgJgDgbgRQhEgqh6gkQh4gkhrhbQhJhBAGgKQAzBJCTBFQB8A+BfAOQAXACAHACQARAGAXATIAEACIg6gPQBRBAA3AAQAHAAAEgNQAGgUANgQQAIgJAGgKIAFgKQAAgSgcgRQgygegXgUQhWhLgmgbQh6hahSAIQg/gEgFgDIAagjQB3AaBSAyQBUAxAjAkQAjAlAFABQAjAXA2AiQAmAbAAAWQAAAHgeArQgdAsgFAAQgfAAgTgIg");
	this.shape_2.setTransform(23,12.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.7,64.1,40);


(lib._Player_Shoulder_Right = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF764B").s().p("AgSAqQALgVAJggQALgfACgPIAAgDQAEAGAAAIQgBAJgNAmQgHAZgEAYIgCgDIgCgDQgEgDAAAHIABACIgCAEIAAAFIAAACg");
	this.shape.setTransform(-18.9,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF774C").s().p("AAGAPIgDgCIAAAAIgBgBQgCgBgBgFQgDgGgBgJIABgFIADARIAAgCIAAgDIABgEIAAgCQAAgHACADIACADIACADIAAACIAAATg");
	this.shape_1.setTransform(-20.3,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA643E").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-19.6,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(-34.4,34.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#552D17").s().p("AAICBQAHAAAJgCQAygMASgTQASgTApg+QAHAIAHAKQg1BAgVAKIhAAfIgTgJgAigCIIgCAAQgBgIAAgKQgBgMAVgcQAWggAGgYQAMg2AJgZQAUg6AcgXQARAEAIAFQgZAUgwBnIhACJIgCAFg");
	this.shape_4.setTransform(-18.2,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA643F").s().p("AhHCLQgEgKAEgMIAAABIAAgBIACgFIBAiJQAuhnAZgUIAIAEQg/BFgBASQAAATACAQQABARgPAoQgRArgiBHIgCAAQgLAAgFgKg");
	this.shape_5.setTransform(-27.1,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA9B71").s().p("AhVAzQgTgLACgLQADgLAXgpQAXgrAOgOQgCAPgLAfQgLAigLATIgBAFQABALADAGQACAFADABIABABIAAABIAAgBIADACIAAAAIAAAAIAAAAIAUAHQAtgKAqgmQAqglABgrIAPAUQgqA8gSATQgSATgwAMQgIACgHAAIASAJIgMALIg1gegAg+AwIABgBIgBABIAAAAg");
	this.shape_6.setTransform(-13.3,27.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F19761","#B9623E"],[0,1],3.4,-6.9,3.4,18.5).s().p("AhKCbQgWgCgrgNQAihIARgqQARgpgBgQQgCgRABgSQAAgTA/hFQAoAXBuBkQgBApgqAnQgqAmgvAKIgSgHIAAgBIAAAAIAAgUIAAgCQAEgYAHgZQANgmABgJQAAgIgEgGIAAADQgMAOgYApQgXArgCALQgCALATALIAzAeQgOASgbAJQgYAHgUAAIgHAAgAgKBXIAAABIAAABIABABIgBgCIABgBIgBAAgAgNBYIAAAAIAAABg");
	this.shape_7.setTransform(-18.5,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1291C7").s().p("AgOATQgCgDgMgIQAPgJACgEQACgDAHgXIABgCIAOAVIAQAMIgBACQgKAMgXAUIgJgPg");
	this.shape_8.setTransform(-8.2,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D023E").s().p("AAZBjQgigdgNgIIADADQgPgIgRgFIAPgOQAYgUAKgMQAfAYBRARQASAAASgDQgKAdgdAXQgbAWgTAAQgNAAgXgTgAiRAOQANgKAVgzQAUgwAqgWQgKAmAaA0QgIAXgBADQgDACgPALIgSAHQgMAFgOALQgZgOgQgHg");
	this.shape_9.setTransform(-5.1,5.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#15ABEA").s().p("AhnBFQAOgLAMgFIASgHQAMAIADADIAJAPIgPAOIgLAMQgSgOgYgPgAgPAYIgRgVQAvhXAYgNIAgAKIAgAMQgQALgoAsQgkAmgLAUIgPgOg");
	this.shape_10.setTransform(-5.2,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0B0233").s().p("AAXCaIgOgUQhshkgqgWIgJgEQgHgFgSgDQAhgQANgSQAIgMAOgnQAPgsAdgUQAggVA2gBQA6AAAsAlQAzAqAABFQAAA9gjAsQgmAsg6gCIgCAPQgCATgFAOQgGgKgHgIgAAAiTQgeADgQANQgqAWgUAwQgVA1gNAIQAQAHAZAOQAXAPATANQA4AuAdA0QADgKAAgKQAAgMgKgUQgNgZgWgUIgDgCQANAHAiAeQAWATAOAAQATAAAbgWQAdgYAKgcQAIgxgHghQgIgqglgdIghgMIgfgKQgMgDgOAAIgPABg");
	this.shape_11.setTransform(-5.3,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#180479").s().p("AhqAyIALgMQARAGAPAHQAZAUANAZQAJATAAAMQAAAKgDALQgfg0g4gugAgugFIACgDQAMgTAjgpQAngsARgKQAkAdAJAqQAHAggJAyQgRACgTAAQhPgQghgWgAhdiCQARgNAfgDQAYgCASAEQgZANgwBYIgBACQgZg0AJglg");
	this.shape_12.setTransform(-0.7,6.6);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.7,-10.4,47,49.5);


(lib._Player_Shoulder_Left = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F19761","#B9623E"],[0,1],-69.4,56.4,-82.9,65).s().p("Ag0B3QgTgNAAgSQABgCAGgeQACAMAGAJQAGAIAEAAQAPAAANgoQALgjAAgaIgGg7QgDgYAPgdQAcgFANACQAHAAAQAHQAEAJACAOQADANAAAIQAAASgjBXQgaBAgSArQgaAAgTgNg");
	this.shape.setTransform(0,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA643F").s().p("AgGAWQAhhXAAgTQAAgHgDgOQgCgOgEgIQAPgBAKASQAKASAAAaIgdBBQgVAvgBAGIgSAqQgTAfgRAEQAUgsAag/g");
	this.shape_1.setTransform(4.4,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#552D17").s().p("AhXAIIgJhBQADgMADgDIAHgJIAPB8IAAAIQgGAegCABQgEgUgHg2gABBgCIAchCIAEAcQgIASgVAiQgUAggFAHQABgGAVgvg");
	this.shape_2.setTransform(0.4,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA9B71").s().p("AgOBjQgHgJgBgMIAAgIIgPh8QALgSAKgJQAWgVAggEQgOAdACAYIAHA5QAAAcgMAkQgNAngNAAQgDAAgGgIg");
	this.shape_3.setTransform(-4.1,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D023E").s().p("ABHCMQgLgZgagOQgUgLgOAAQgKAAgRADIAGgKQADgFAAgGQAAgIgGgHQgHgIgMAAQgUAAgEADQgDACgLALQADgGgLAIIgNALIgFgQQAIhRBBgxIAoggQATgQAAgRIgZgMIAWgCIgQgCQAugBASALQAmAZAABUQAAAKgJAdQgJAhgJAQQgHgKgJgIIAAACIAIASQAIAWAAAfQAAAOgIAXg");
	this.shape_4.setTransform(3,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180479").s().p("Ag+B+IALgbIALgbQALgLAEgBQADgEAUAAQAKAAAIAJQAFAGAAAJQAAAGgDAFIgGAJQgdAHgTAKQgPAHgOAOgAgihMQAgg9AqAAIAaAMQABARgUAQIgqAfQg+AygJBRQAAhUAgg+g");
	this.shape_5.setTransform(-1,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B0233").s().p("ABYCRQAAgZgKgSQgKgSgOAAQgQgHgHAAQgNgCgdAFQggAEgXAVQgLAJgLASIgGAJQgDAEgEALQgCgNAAgKQAAgJAIgcIAIgcIgOgeQgMgdAAgfQAAg7AdgnQAlgyBLgCIAQABIgXADQgqAAggA9QggA9AABVIAEAQIAOgLQALgIgDAFIgMAbIgLAbIgCAMQANgOAPgHQATgKAggHQAOgCALAAQAPAAAVAKQAaAPALAYIACALQAHgYABgNQAAgggJgWIgIgSIABgCQAJAJAHAKQADAGAEASQAFAUgBAMQABAkgXAug");
	this.shape_6.setTransform(0.9,8.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-9.2,24.5,51.7);


(lib._Player_Shin_Right = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F19761","#B9623E"],[0,1],8,-11.2,-15.1,-14.9).s().p("AgqDyIgCgLIADgPIAJhkQAJhrgahFQgIgSgMgbQgKgWAAgRQAAgLAIgMQASgaAXgyIAPAIIgCAAQgXAUgLAaQgIASAAALQAAAtARAcQAPAcAAAJQAOgMAOglQAVgxAAg2IgEgJQgEgJgFgGQAKAFAWAEQAWAEARABIgnAAIgCgBIgCA4QAICjAEAvIAKgFIgIAqIgLAqQghA1gDAqQgBAMgDACQgCADgTAAQgKAAgLgCg");
	this.shape.setTransform(-5.8,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#112635").s().p("AgEAiQghgIgLgHQAFgKAagMQAcgPAZAAQAFAAATAFQATAEAFAAQAlAAASgRIARgRQAOAAASALQASAKAAAJQAAASgjASQgqAVhEAAQgeAAgjgKgAjMgBQADgLALgKQAKgKAHAAQASAAAkAVQAXALAVAOIACACQgIADggAEQgfAEgKAAQg7AAAJgcg");
	this.shape_1.setTransform(0.1,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#840084").s().p("AgJA7Qg0gkAAgQQAAgCAFgDIALgFQATACAQAEQAYAhAgAWQAZAQAQADIABACIgQAKIgPAKQgTgGgvgigAhLghIgMgTIAbgtIARAoQAEAMAPAdIgBABQgeABgLADQgBgHgIgPg");
	this.shape_2.setTransform(5.6,49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("Ag7BCQgtgcgsADIATgtQAWgtAfgQQgCAXAAAKQAAAOAoAAQAUAAAGgOQAFgLAKgzIAMAUQAIAPABAGQgLAIgJAPQgEALAAAEQAAANAPAUQATAYAeATQgegJgeAVQgWAWgDAAQgPgPgXgOgAAoAdQgWgVgKgXQAAgHAKgLQAMgOARAAQAIAAAJAEIAQAHQgQgHgTgCIgLAIQgEACAAACQAAAQA0AjQAwAiATAFQgQADgOAAQgtAAgigfg");
	this.shape_3.setTransform(-3.5,53.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B002B").s().p("AgnCBIgfgRIgcAIQgdAIgcAAQggAAgOgGQgQgGAAgQQAOgoAUgoQAnhQAdgLQAFAAADAFQAEAFAAAIIgCAPIABALQALACAKAAQATAAAEgDQADgCABgMQADgqAig1QAHgFAKgDQAOAKAUAwQAVAzAiAcQAVAQBAAQQAuALAAAfQAAAmguAWQgqAUhBAAQhHAAghgRgAgTBUQgaAOgFAKQALAHAhAIQAjAKAeAAQBEAAAqgVQAjgSAAgUQAAgJgSgKQgSgLgOAAIgRARQgSARglAAQgFAAgTgEQgTgFgFAAQgZAAgcAPgAjABBQgLAKgDALQgJAeA7AAQAKAAAfgEQAggEAIgDIgCgCQgVgPgXgMQgkgVgSAAQgHAAgKAKgAhiBHQAXAOAPAPQADAAAYgXQAegUAcAIQgcgSgTgZQgRgVAAgLQAAgFAGgLQAJgPALgHQALgDAdgCIABAAQgPgegFgLIgOgpIgcAtQgMAzgFALQgGAOgUAAQgoAAAAgOQAAgKACgXQgfAQgWAtIgTAtIAJAAQAnAAApAagAgTgcQgKALAAAHQAKAXAUAVQAtAoBAgNIAQgJIAPgKIgBgCQgPgDgZgQQghgVgaggIgQgHQgJgDgIAAQgPAAgMAOg");
	this.shape_4.setTransform(0.3,53.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA9B71").s().p("AAOhBIADg4IACAAIAnABIAYAAQgJBDgKA2IgaCLIgKAFQgEgwgJiigAhBADQgQgaAAgtQAAgMAHgRQAMgaAXgVIANAFIAPAFQAFAGAEAJIACAJQAAA2gTAxQgQAjgOALQAAgJgQgbg");
	this.shape_5.setTransform(-3.6,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#552D17").s().p("Ag6D/QgDgFgFAAQAIhZAAgWQAAhTghg4IgXgkQgLgRAAgOQAAgkAagxQAYguAjgiIARgNQgtBHgSAlQgUAnAAAXQAAALAfA/QAfA9AAA/IgBAsIgJBlQAAgIgEgFgAAmCOIBWmLIgCAGQABgEABgQQADAFgCAXQAEgHgnDDQglCxgMAyIAEAAQgKADgHAFg");
	this.shape_6.setTransform(-4.5,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF6842").s().p("Ag1C9QAAg/geg/Qgfg/gBgJQABgXATgnQASglAuhHIgRANIABgBQASgcAhgTQAdgQAUgCQAUgBAUAKQAVAKABAMQgBAQgBAEIACgGIhVGLIAIgqIAZiLQAKg2AKhDIgYAAQgRgBgWgEQgVgFgKgEIgOgFIgNgFIABAAIgOgIQgXAzgSAaQgIAMgBAKQAAARAKAVQANAbAHASQAaBGgJBrg");
	this.shape_7.setTransform(-3.7,14.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-8.7,43.7,76.9);


(lib._Player_Shin_Left = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#840084").s().p("ABDAnQgbgagHgFIABgBIgCgBQASgBAZgHIAUAPIAUASQgFAggFAMQgKgLgcgZgAAWgEIgKgDQgHgFgtgRQgwgQgJgBIgPADIgCAAIAKgPIALgPQAegGA5AWQA2AVAOAWQgOALgPAAIgLgBg");
	this.shape.setTransform(-30.6,-42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AAaBFIgVgRIANgNIAEgGQAAgUgRgNQgVgShDgZQAtgMAUgSQAQgNACAAQAhAPAkAOQBLAcAUgDIgBABQgBANgKAdQgOAngMAIIgNgfQgBgEgDAAQgFABgTgEQgRgEgFAAQgKAAgHAEQgJAFAAAIQAAAGAEAXIAFAZIgUgSgAgiAzQAPABAOgMQgPgWg4gTQg5gWgeAHQAMgHAlgKQAhAAAuAVQArASAAAOQAAAKgIAKQgJAMgSAAIgHgBg");
	this.shape_1.setTransform(-23.6,-48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B002B").s().p("AA4BwIgtgnQhGg6hJAAIgdAIQgcAJgEAAQgbAAAAgiQAAgyAugkQAygnBXAAQAZAAAZAKQAbAKADAAIBCgNQA9AAAZAPQAZANAAAhQAAAFgEAEQgFAEAAAFQAKAnAAAPQAAAegwAQQgLgGgJgNIgOgUIgWgBQgPABgMAGQAAAQAFAWQAGAWAAAEQgBATgEAIQgFAJgDACIgBAAQgLAAgUgQgAAWhRQgUARgrAMQBAAaAYATQARAMAAATIgFAHIgMAMQgYAKgSAAIACACIgBABQAGAEAcAaQAcAaAKALQAEgNAFggIgEgZQgEgXAAgFQAAgJAJgFQAHgEAJAAQAFAAASAEQASAEAFAAQAEAAABADIAMAgQANgJANgnQALgdABgMIAAgCQgTADhLgcQglgOgigPQgCAAgQAOgAhEARQAwARAGAFIALACIAIACIAIAAQASAAAKgMQAJgKAAgKQAAgLgtgVQgtgVghAAQgkAKgMAHIgLAPIgKAMIACABIAPgDQAJAAAwARgAiWhXQg8AdAAA2QAAAQAUAAQAZAAAYggQAXgiAsAAQAvAAAVgOIAbgeQgGgEgRgEQgUgFgJAAQhGAAgxAYgAAzhkIAKAFIBXAhQAiAMAKAAQAEAAAEgEQAEgGAAgLQAAgZgXgGQgOgDgbAAQgiAAg3AFg");
	this.shape_2.setTransform(-27.8,-47.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112635").s().p("AjOAsQgBg0A8gdQAxgYBGAAQAJAAATAFQASAEAGAEIgbAeQgVAOgvAAQgsAAgXAgQgYAigZAAQgTAAAAgSgACXgMIhXghIgJgEQBigLAfAJQAYAFAAAZQgBAMgEAFQgDAEgFAAQgKAAgigMg");
	this.shape_3.setTransform(-28.1,-52.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF6842").s().p("AgqBGIhMj0QAEgIABgTQAQAnAUBLIAjB9QApCUAmAAQAJAAAegKQAfgLAMgIQgXAthIAAQgZAAgpiEg");
	this.shape_4.setTransform(-6.2,-18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA9B71").s().p("AgWAkQgshCgEg4IAEgTQBeBDAKALQAgAiABBJIgCAVIAAADQgBACgGAAQgnAAgthGg");
	this.shape_5.setTransform(0,-20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#552D17").s().p("Ag9CDQgKgjgXhVQgXhSgXg/QACgCAFgJIBMD0QApCEAZgBQBIAAAXgsQAJgOAOhLQAAhCgRgeQgLgTgigYQgsgfgXgdQgugzgphZIANAUQAKAOAKAFQAUA4AkAkQAOANAyAhQAnAZAQAbQAXAkgBBEQAAA2gNAgQgdBBhQAAQgwAAgghvg");
	this.shape_6.setTransform(-4.7,-21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F19761","#B9623E"],[0,1],-4.3,7.7,17.5,-0.7).s().p("AgyBSIgjh+QgUhLgQgmQAAgEgGgWQgFgWAAgQQAMgGAPgBIAWABQAqBYAsA0QAZAcAsAfQAiAZALASQAQAfAABCQgNBLgJAOQgMAIgfAKQgeAKgJAAQgmAAgpiTgAgQg+QAEA4AqBCQAuBGAoAAQAGAAAAgCIABgDIABgVQAAhJgggiQgKgLhehDg");
	this.shape_7.setTransform(-5.4,-22.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-60.4,59.4,63.6);


(lib._Player_Head_2 = function() {
	this.initialize();

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C003C").s().p("AhBBWIgngmQgNgNgEgNQgCgNAAggQAAgvATgrQALgWASgeIgSBZQAAAnALAOQANAJAIAHQAFgTAhguQAfguANgIQgOAdgSA4QgSAzAAAIQAAANAGALQAIANAOAAQACAAAegkIBehuQgoA5hNDBIgDAHQgjgugjgig");
	this.shape.setTransform(-16.9,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B002B").s().p("AjeCHQgtg1AAgxQAAiXBrhIQBQg1B2AAQA1AABGAcQA/AYAsAhIgLACIgWAEIgdAFIgZAFQgFAAgeAJIgUAHIgmAWIgLAIIgHAGIgOAMQgYAcgIAMQgOAUgYAsIgHAMIgIAQIgMAVIgFAMIgaA5QgEALgDAbQgGAegcAgIhthtgAhjjLQg4AagtBFQgRAegLAXQgUAqAAAuQAAAiADAMQAEANANAOIAnAmQAiAiAmAuIADgIQBMjDAmg3QAcgpBagwQBdgxAmAKQhwhChbAAQhcAAg1AZg");
	this.shape_1.setTransform(-4.4,-8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3C003C","#970198"],[0,1],-33.1,12.6,1.2,-21.7).s().p("AiiCeQgHgLAAgNQAAgIATg1QATg4APgbQgOAIghAsQghAugFATQgHgHgOgJQgKgOAAgnIARhXQAthFA3gbQA2gZBcAAQBbAABvBDQgmgLhdAyQhZAwgaAnIhdBwQgfAkgEAAQgOAAgHgNg");
	this.shape_2.setTransform(-2.9,-14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDF62").s().p("AAZgKQgfgbg8gnIgCgBQAMABAdAGIAxAdQAUAMAYAUIAYAWIABAAQASAmAAAxQgZhAg7gugAgyAJQgugugjgbIAwAIQA2AHAdAxQAIAoAEA3QgGgZg4g9gAA6gnIhag4IAVgEQA3AqAgAaQAKAGAuALIgEAAQgZAAgtgZg");
	this.shape_3.setTransform(22.4,-13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(-0.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53D5FF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(-1.5,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiABQgNgUgFgCIABAAQAJAHAdAHQAiAIAggBQgCAGgFAEIgGAFIgBABQgLAGgPAAQgdAAgSgVg");
	this.shape_6.setTransform(8.9,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#070609").s().p("AgmAPIgSgfQAUAPAkAEIAxAGQAZADAGAJQgJACgNAJQAFgFABgGQgfACgigLQgdgHgKgFIAAAAQAFAAANAWQASAWAcAAQAPAAALgHIACgBIgDADQgSANgIAAQgkAAgZglgAhPgyIABgBIAAABIgBAAg");
	this.shape_7.setTransform(7.8,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4AD82").s().p("AhgBcIgNgMIgBgCIgBgHQAAgGABAAQABABAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIAeAQQAEADABAKIgHABQgHAAgKgDgAgBhSIAQgLIACgBQAEADAtAVQApASAFAJIgUACQg1AAgogpg");
	this.shape_8.setTransform(15.3,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0098CA").s().p("AhBAmIgVgHIA2gxQAWAAANAKQAPAJAAAPQgdAQgLAFQgKAEgMAAQgHAAgOgDgABaATQgIgBgNgGIgNgHQAJgHAigHIANAWQgHAGgLAAIgEAAgAB5gMIAEACQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgGAKgAh2ghQAGgHAJAAQAGAAAFACIAIAEIgmAlQgHgYALgMg");
	this.shape_9.setTransform(12.2,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33CCFF").s().p("AAGANQgNgKgVAAQACgBADgFQAEgHAFAAQAeAAAXAJQAMACAGAEQAKAAAcgFIAIAMQgiAHgJAJIgEgEIgDABIggAOQABgPgQgLgAh3AaQgKgPgEgOIABgBQABgQAJgKQAHgIAJAAIARAEIAXAHIgOAQIgIgEQgGgCgGAAQgIAAgGAHQgLAKAGAagACBALIgEgCIAAgNIAKgBQAAAGgFAOQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_10.setTransform(11.9,-2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F93").s().p("AhyAlQgfgeAAgkQAAgSAHgJQAHgKARAAQAkAABKAYQAhALAeAMIAcgBIAGAIQgYADhBgWQhDgYgyAAQgKAAgGACQgEATAAAHQAAAKACAHIAAABQAEAOAKAPIAAAAQALAQAZAMIAWAHQAOADAHAAQALAAAKgEQAMgFAcgQIAggOIgEAIIgSALQgIAFgdAMQgfAMgGAAQgrAAgegegABgAkQANABAJgHIAEAJIgDADgAB9AVIAHgMQAFgMAAgIQAAgCgEgCIgGgBIgBgLQANAFADADQAEACAAAGQAAAdgXAUg");
	this.shape_11.setTransform(11.7,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AEEBFF").s().p("Ah2AYIAAAAIAngmIAOgPIgYgHIgQgEQgJAAgIAIQgIAJgCARIgBAAQgBgHAAgKQAAgHADgUQAHgBAKAAQAyAABDAYQBBAVAYgCIAEAGQgcAEgKAAQgGgCgMgEQgXgIgeAAQgGAAgEAGQgDAGgBAAIg3A0QgZgMgLgQgAB9gNIAHACQADABAAADIgKAAg");
	this.shape_12.setTransform(11.8,-2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F19761").s().p("AgqDOQg3gNgZghQgcgrgSg0QgQgtAAgXQAAgFANgmQAOAPAEATQAEAOgEAPIACABQALgNAIgSQAHgUAAgRQgHgqgHgQQAagtAOgUQAIgMAYgcQAaACApAIIAEACQghAKgOAIQgIAEgMALIABgBIAEgCIgIAIIgCACIAGABQBSgaAPACQAeAQAeAhQAUAXAJAQIgcABQgegMgkgLQhHgYglAAQgQAAgIAKQgGAJAAASQAAAmAeAeQAfAeArAAQAEAAAfgMQAfgMAIgFQAxAuBBgJQABAKgKAOQgaASgmAFQghAEgSgHQAEANAWARQAVAPAKAAIgfBWQgTAmgmAAQglAAgigIgAgeCUQAOAKAVAAQANAAAHgDQAGgDAHgJQgJADgXgDQgVgCgIgDQAQAFAHgDQAAgKgFgDIgdgQQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAGIABAHIgJgKQAAAWAQAMgAgoBfQAZAkAkAAQAIAAASgNIADgDIAGgEQANgJAJgCQgGgIgZgEIgxgGQgkgGgUgPIASAigAhRAbIABABIAAgCg");
	this.shape_13.setTransform(8,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#552D17").s().p("AguDTIAHgKQg6gQgthDQgjg1gEgmIgBAEIgVBIIgCAIIgQgKIAEgLQAcghAGgeQADgbAEgJQACAWANAmQAWA9AmAdQAZAhA3ANQAgAIAnAAQAmAAATgmIAfhWIAKgYQgYAAgMgDIgJgDIgJgHQARAGAPgBQALAAAVgHQAZgLANgPQAKgNgBgJQgFgJgpgSQgsgVgEgEIgCACIAEgIIADgBIAEAEIAMAHQAOAGAIAAIAWAHQAVAHANAKQAMAIAAAHQAAASgeAZQgkAegNArQgWBLgMAPQgVAbg9ABQgvgBgLAHgAgWjLQAOgHAhgKIAeAQQgQgEgKABQgdAAgQAFIgVAMIgEACIgBABQAMgLAIgFg");
	this.shape_14.setTransform(5.9,7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CD784B").s().p("AjICAIACgIIAVhIIABgDQAEAlAjA1QAtBDA6ARIgHAKgAicBEQgNgmgCgYIAag2IAAAAQgNAmAAAFQAAAXAQAtQASA0AcArQgmgdgWg9gAgECSQgQgMAAgWIAJAKIABACIALAMQAIADAXACQAXADAJgDQgHAJgGADQgHADgNAAQgXAAgMgKgABwBJQgWgRgEgNQASAHAhgEQAmgFAagSQgNAPgZALQgVAIgLAAQgPAAgRgGIAJAHIAJAEQAMADAYAAIgKAXQgKAAgVgPgAgqijIACgCIAIgIIAVgLQAOgGAfAAQAKAAAQADIABABQgPgChSAaIgGgBgAgpjXIAOgNIA0AYQgogJgagCg");
	this.shape_15.setTransform(5.4,5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DDB000").s().p("AjICLQACgNgGgQQgGgSgKgJIALgVQAAADAIAaQAHAWgEAbgACmAhIgIgEIgdgLIgHgGQgZgVAAggIAqAiQAkAaAIAPIgRgBgAABglQg0gngygMIAMgJQA/AaAcAYQAWASAlArQgWgYgmgbgAC0giIgYgYIAhAMQARgCAPgIQgGAGgNAHQgPAIgGABgAgphyIgKgEIATgHIAlAUgAAUh+IACABIgVgJIAagFIAiAUQgdgGgMgBg");
	this.shape_16.setTransform(13.4,-8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("AjNCPQAFgbgHgXQgIgZAAgEIAJgQIAHAaIAFAUQAAAIgEAQQgCARgEAIgABPA1IgZgkQgkgsgUgRQgegYhAgaIAngVIAKAEQAiAcAtAwQA6A6AGAZIACAdIgBAQIgSgogACxAlQgIgPgkgaIgrgjIgNgVIAEAOQgcgyg1gHIgmgUQAegIAFgBIATAKQA8AnAhAaQA6AxAaA+IgQgRgACWg4QgZgUgTgLIgzgdIgjgUIAdgFIBdA3QAxAcAZgCIgBAHQgQAIgQACg");
	this.shape_17.setTransform(14.1,-9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#796100").s().p("AjUCbQAEgPgEgPQgEgUgOgPIAAAAIAGgMQAKAJAGASQAGAQgCANIABABIABAAQAEgIACgRQAEgPAAgIIgFgUIgHgaIAGgMQAIAQAGApQABARgIAVQgIATgLANgABgBdIgNgYIgIgOIgEgHIgGgIQgIgQgVgXQgegegcgQIgBgBIgegQIgFgCIg2gYIAHgFQAyAMA2AnQAjAcAWAXIAZAkIASApIABgQIgCgdQgFg1gKgpIgEgPIANAWQAAAgAaAVIAHAGQgRgIgIgFIAEAiIABAKIAAAGIAAAQIgCASIgCAQIgBACgADHBIQgHgbgegRIARABIAQARQAAgvgSgmQAGAAAPgIQAMgIAHgGIABgHQgugLgKgGQgggag5gqIALgCQAaARAyAqQArAgAcgKQgNAoglADQAIAJAIASQAKATAAALIgCAYQgCAQgEAGg");
	this.shape_18.setTransform(13.9,-8.5);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.3,-32.7,68.4,62.1);


(lib._Player_Head = function() {
	this.initialize();

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF764B").s().p("Ag8AAIAEgJIAAAAIAIgVQAIgHAGgMIALgXQAKA3AkAvQAOASAYAYQgwghhJgng");
	this.shape.setTransform(-9.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C003C").s().p("AhBBWIgngmQgNgNgEgNQgCgNAAggQAAgvATgrQALgWASgeIgSBZQAAAnALAOQANAJAIAHQAFgTAhguQAfguANgIQgOAdgSA4QgSAzAAAIQAAANAGALQAIANAOAAQACAAAegkIBehuQgoA5hNDBIgDAHQgjgugjgig");
	this.shape_1.setTransform(-16.9,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B002B").s().p("AjcCDQgvgzAAgvQAAiYBrhHQBPg2B2AAQBBAABCAVQBMAZAYAnIAAABIgyAJIgkAGIgDABIgZAGIgSAGIgVAJIgYAOIgKAHIgLAJIgOANQgVAYgLAPQgOATgYAtIgHAMIgIAQIgMAWIgFAMIgaA4QgHARgXBAIgIAUIAAABQgqgxhEhBgAhjjMQg4AbgtBFQgRAegLAWQgUArAAAtQAAAiADANQADANANANIAoAmQAiAiAmAuIACgHQBNjDAmg3QAegsBRguQBZgyAxAMQhwhDhbAAQhcAAg1AZg");
	this.shape_2.setTransform(-4.4,-8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C003C","#970198"],[0,1],-33.1,12.6,1.2,-21.7).s().p("AiiCeQgHgLAAgNQAAgIATg1QATg4APgbQgOAIghAsQghAugFATQgHgHgOgJQgKgOAAgnIARhXQAthFA3gbQA2gZBcAAQBbAABvBDQgwgMhZAyQhRAugcAqIhdBwQgfAkgEAAQgOAAgHgNg");
	this.shape_3.setTransform(-2.9,-14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDF62").s().p("AA1CBQgeg1g1geQhDgdgjgSIgFgEQAcAFATADIATAGIgkgZIADAAQAKAABiAQQAIABAKAAQBFAAAmgjIAJgHIgKAgQgXAZgTAKQgUALgZAAQgfAAgWgEIASAKIAYATQgIgCgBACIAWAmQATAjABAGgAgygRIglgJIAkgGIAJACIAQACQAgAAAXgRIAIgHQgLANgKAIQgTAQgfAAQgIAAgIgCgABDgzQAEgMAAgHQAAgYgDgDIgPAXQAKgTACgdIACgSQAKAgAAAOQAAAJgCARQgFAZgHAQg");
	this.shape_4.setTransform(22.6,-19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(-0.1,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#53D5FF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(-1.5,-3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiABQgNgUgFgCIABAAQAJAHAdAHQAiAIAggBQgCAGgFAEIgGAFIgBABQgLAGgPAAQgdAAgSgVg");
	this.shape_7.setTransform(8.9,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#070609").s().p("AgmAPIgSgfQAUAPAkAEIAxAGQAZADAGAJQgJACgNAJQAFgFABgGQgfACgigLQgdgHgKgFIAAAAQAFAAANAWQASAWAcAAQAPAAALgHIACgBIgDADQgSANgIAAQgkAAgZglgAhPgyIABgBIAAABIgBAAg");
	this.shape_8.setTransform(7.8,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4AD82").s().p("AhgBcIgNgMIgBgCIgBgHQAAgGABAAQABABAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIAeAQQAEADABAKIgHABQgHAAgKgDgAgBhSIAQgLIACgBQAEADAtAVQApASAFAJIgUACQg1AAgogpg");
	this.shape_9.setTransform(15.3,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0098CA").s().p("AhXAfIA3gxQAVAAANAKQAPAJAAAPQgcAQgMAFQgKAEgLAAQgOAAgdgKgABaATQgIgBgOgGIgMgHQAKgFAzgLQAGAAACABIABACIAAACQAAAJgLAIQgKAIgOAAIgBAAgAh3ghQAHgHAIAAQAGAAAFACIAJAEIgnAlQgHgYALgMg");
	this.shape_10.setTransform(12.3,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33CCFF").s().p("AAGANQgNgKgVAAQACgBADgFQAEgHAFAAQAeAAAXAJQAMACAGAEIBOgKQAAAGgFAMIgBgCQgCgBgGAAQgyALgLAHIgEgEIgDABIggAOQABgPgQgLgAh3AaQgKgPgEgOIABgBQABgQAJgKQAHgIAJAAIARAEIAXAHIgOAQIgIgEQgGgCgGAAQgIAAgGAHQgLAKAGAag");
	this.shape_11.setTransform(11.9,-2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F93").s().p("AhzAlQgegeAAgkQAAgSAGgJQAIgKAQAAQAlAABJAYQAiALAeAMQAUAAAegEIAAgCIAKgBQAOAAAJABIADALQADAKgMATQgLAUgJAHIACAAIgXgGQAQAAAKgIQALgIAAgLIAAgCQAEgKAAgIQgMgGgMADQgWAGgbAAQgPAAhCgXQhDgYgcAAQgKAAgHACQgDATAAAHQAAAKABAHIAAABQAFAOAKAPIAAAAQALAQAZAMQAdAKAOAAQALAAAKgEQAMgFAcgQIAggOIgEAIIgSALQgIAFgdAMQggAMgFAAQgrAAgfgeg");
	this.shape_12.setTransform(11.7,-2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AEEBFF").s().p("Ah2AYIAAAAIAngmIAOgPIgYgHIgQgEQgJAAgIAIQgIAJgCARIgBAAQgBgHAAgKQAAgHADgUQAHgBAKAAQAcAABDAYQBCAWAPAAQAbABAWgGQAMgEAMAHIhNAJQgGgCgMgEQgXgIgeAAQgGAAgEAGQgDAGgBAAIg3A0QgZgMgLgQg");
	this.shape_13.setTransform(11.8,-2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F19761").s().p("Ag8DEQglgPgZgVQgcgrgSg0QgQgtAAgXQAAgFANgmQAOATAEAMQACAHAAALQAAAJgCAFIACABQALgNAIgSQAHgUAAgRQgHgqgHgQQAbgvANgTQALgPAVgYQAnAFAiAHQgNACgbAOQgYAMgFAFIAFgDIgIAIIgCACIAGABIAsgNQArgMAOACIARAKIABAAQgCgFgFgIIBXAyQAHAVACANIAAADQgeAEgUAAQgegMgkgLQhHgYglAAQgQAAgIAKQgGAJAAASQAAAmAeAeQAfAeArAAQAEAAAfgMQAfgMAIgFQAxAuBBgJQABAKgKAOQgLAHgeAJQgeAJgHAAIgPgCIgWgDQAEANAWARQAVAPAKAAIgfBWQgTAmgmAAQgqAAgvgSgAgeCUQAOAKAVAAQANAAAHgDQAGgDAHgJQgJADgXgDQgVgCgIgDQAQAFAHgDQAAgKgFgDIgdgQQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAGIABAHIgJgKQAAAWAQAMgAgoBfQAZAkAkAAQAIAAASgNIADgDIAGgEQANgJAJgCQgGgIgZgEIgxgGQgkgGgUgPIASAigAhRAbIABABIAAgCg");
	this.shape_14.setTransform(8,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#552D17").s().p("AAyDYIhLgBIgXgGIABgCQgjgLgUgRQgZgZgOgSQglgxgLg2IgKAWQgHAMgHAHQAWg/AHgPQACAWANAmQAWA9AmAdQAZAVAlAPQAvASAqAAQAmAAATgmIAfhWIAKgXQgYAAgMgDIgJgEIgJgHQARAGAPAAQALAAAVgIQAZgLANgPQAKgMgBgKQgFgJgpgSQgsgVgEgDIgCABIAEgIIADgBIAEAEIAMAHQAOAGAIAAIAWAHQAVAIANAJQAMAJAAAGQAAAXgJAMQgEAGgSANQgnAbgSBDQgLAsgFALQgHASgNAGQgJADgVAAIgKAAgACWiWIgIgSQgMACgBgDQADgGAFgDIgEgFIAZARIALAyIgKAAQgCgNgHgVgAgVjHQAZgOAPgCQAigDAKASQAFAIACAFIgBAAIgRgKQgVgFgKAAQgdAAgQAGIgVALIgFADQAFgFAYgMg");
	this.shape_15.setTransform(6.7,6.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CD784B").s().p("AirBoQgNgmgCgYIAag3IAAABQgNAjABAGQAAAZAPAsQASA0AdAsQgngegWg8gAgSC1QgQgLgBgWIAJAJIABACIANAMQAJAEAUACQAXACAJgDQgHAJgGADQgHADgNAAQgUAAgOgKgABhBsQgWgQgEgOIAWAEIAPABQAHAAAegJQAegJAMgGQgNAPgaAKQgUAIgMAAQgPAAgQgFIAJAGIAJAEQALADAZAAIgLAYQgJAAgWgQgAA9iYQgKgTgiAEQgigIgngFIAOgNQAPAABBAVQBBAUAMAHIARAKIADAFQgFADgDAFQABAEANgDIAIATIhYgygAg4h/IABgCIAJgIIAUgMQARgGAcAAQAKAAAVAGQgOgCgrAMIgsAMIgFAAg");
	this.shape_16.setTransform(6.9,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DDB000").s().p("Ai9CVQABgNgFgQQgGgSgKgJIALgWQAAAFAHAZQAHAWgEAbgAAWg1QhAgbgrgCIAJgHQAhgBA2AWQA8AYAeAfQgbgTg0gVgACMgYQgFgJgCgBIgZgUIAbAIQANADAGAAQALABAtgXQgGAMgOAPQgVAVgUAAQgFAAgEgHgAAKhdQgQgFgdgFIAGADIgWgDIAUgJQASAGAVAJIAVAKIgTgGgAgBhzIgLgDIAWgGQBAAWAQAAQALgBAYgKQAfgQAOgUIgFAXQAFAMgDAEQgEAGg5AFIABABQhlgQgHgBg");
	this.shape_17.setTransform(12.4,-10);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("AjMCtQAFgbgHgWQgIgZAAgEIAJgQIAHAaIAFAUQAAAIgEAQQgCAQgEAIgABVAIQgegdg6gYQg4gWggACIAYgPIAWAEQAjAUBAAdQA3AcAfA1Ig3gugAB3gXIgbgHIgUgKQAYAEAgAAQAZAAATgLQAUgKAXgbQgMAfgIAMQguAWgLAAQgGAAgNgEgAgGhJQgWgKgTgGIATgGIALAEIgDAAIAiAbIgUgJgAgEhkIAEgBIAjAJQAHACAJAAQAfAAAVgQQAKgIALgNQAJgJAHgNIAOgXQADADABAYQAAAHgEAMQgNAVggAPQgYALgLAAQgQAAg+gVg");
	this.shape_18.setTransform(14,-12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#796100").s().p("AjbDbQACgFAAgKQAAgMgCgHQgEgNgOgSIAAgBIAFgMQALAKAGARQAFARgBANIABAAIABAAQADgIADgQQAEgQAAgIIgFgUIgIgaIAHgMQAHAQAHApQAAASgHAUQgIAUgLAMgACSBpQgYgbgrgfIgZgQIgQgKQgMgHg/gSQhDgVgPAAIAMgJQArACBAAbQA0AUAbASIA2AuIALAMQgCgGgTgjIgVgmQABgCAIACQACACAFAIQAEAHAFAAQAUAAAVgVQAOgNAGgLQAIgMANgfIAKggIgKAHQgmAlhFAAQgKAAgHgDIgBAAQA5gGAEgGQADgEgFgLQAIgQAEgZQADgRAAgJQAAgOgLggIgBASQgDAdgKATQgGANgJAJIgJAHQgXARghAAIgRgCIgJgCIAygKIAAAAQAQgGAVgdQAcgkAAglQAAgJgDgJIACACQAZAzAAASQAAANgDAYQgEAagEAOQAogSApgcQAMAoguA3QgpAvggAGQAIAOAHASQAKAZAAANIAAAIIgCACg");
	this.shape_19.setTransform(14.6,-14.8);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.3,-36.8,69.9,65.2);


(lib._Player_Forearm_Left = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#980101","#FD1C1C"],[0,1],-5.4,-12.6,17.2,-9.4).s().p("AAABRIgEgFQAAgGACgFIADgJIAPAHIAOAGQgHADgCAEIgGAPQgLgFgEgFgAgoBEQgJgLAGguQgMgIgHAAQgMgCgNAYQAGgUABgVQApAKAFgiQADgWACgFQAGgPARgDQgNAMgDAZQgBAPABAeIgxgCIAGACIAfAHIAPgFQAHAKAKAHQAHAGAAACQAAAEgYAzQgPgEgGgHgAAIA4QgIgEAAgFQABgFAKgDQAKgFAPgBQAPgBADABQgIAPgEAPQgagCgIgFgAASARIAGgNQAHgNAGgTIAiACQgGANgCANIgCARIABAIQgogCgEgGgAgOgeQAAgKACgNQAEgZAIgMIANABQAFADAAAMQAAAWgKANQgJAMAAAIQAAADACAIQAFAIAIAFIgHABQgVAAAAgkgAAogkQAKgkACgPQgBgCAHAAIAGABQgCAIgCASIgDAWQANAFASACg");
	this.shape.setTransform(38.1,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC1717").s().p("AAABoIAGgPQACgDAHgEQAPADAcAAQgKAMgRAGQgJACgJAAQgHAAgGgBgAhWBZQgVgKAAgWIABgFIABgIIACgFIAAgBQANgYANACQAHABALAHQgFAuAJALQAFAHAQAEQgMACgLAAQgRAAgMgFgAAmAuQAFAAAMgEQANgCANAMQgFAKgTAHQgQAGgOABQAEgPAHgPgAAvAmIgBgIIACgRQABgNAGgMQAbABANAJQANAHgEALQgEALgSAGQgOAFgPAAIgGAAgAgMADQgEgFAAgDQAAgJAKgMQAJgNAAgWQAAgMgDgCIgOgBIAAgBIgHAFQgSADgGAPQgCAFgDAWQgEAggpgIQADgcAcgiQAggnAhAAQAaAOAAATQAAAUgMAiQgLAdgEAHQgHgGgFgKgAAqgbIACgVQACgTACgIQAmAJAIAEIABAAQAFADADAEQAFAGAAAJQAAANgHADIgcAEQgTgCgMgFg");
	this.shape_1.setTransform(39.6,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D080A").s().p("AhEBdQhFgTgBgIIACgKQADgiAFgTIAAANQAAAYAHARQAHARAKAAQAKAAAIgRIACgFIgBAFQAAAWAVAJQATAJAhgFQAXgzAAgEQAAgCgIgGQgJgHgHgMIgOAHIgggJIgGgDIAxADQAAgcABgPQACgZANgNIAGgFIAAABQgIAMgEAZQgCAMAAALQAAAqAcgHQAGgHALgcQAMgjAAgTQAAgTgagPQghAAggAoQgcAigDAcQgBAVgHAUIAAAAQACgKAAgMQAAgWgHgSQgIgRgKAAQgHAAgGAJIACgJIACgKIAlAJQACgOAfgaQAigfAbAAQBFAdAeAWIgBAAQgIgEgmgJIgGgBQgGAAAAACQgBAPgLAkIAxADIAcgEQAHgDAAgNQAAgJgFgHQAOANAAAKIgGAmQAAAZghAqQghAqgSAAQgtAAhIgVgAADBNQgDAFAAAHIAFAFQAGAFALAEQAOAEARgFQARgFAKgMQgcAAgPgDIgOgGIgPgIIgFAJgAAqAuQgPABgKAEQgKAEgBAFQAAAFAIAEQAJAEAaADQAOgBAQgGQATgIAFgKQgNgMgNACQgMAFgFAAIgFgBIgNABgAAeARIgGANQAEAGApACQASABARgGQASgHAEgKQAEgLgNgHQgNgJgbgCIgigCQgFARgIAPg");
	this.shape_2.setTransform(37.4,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F19761","#B9623E"],[0,1],9.2,-7.2,-8.6,2.2).s().p("AhnAzQgpgfAAhBQAAgOADgIQAXgKAbgCQgYAOgNAQIAkgQQAfgOASgBQAlABAoAgQAyAoA8ANQgGANgBgCQgDAOgNApIhlAIQhTAAgogdg");
	this.shape_3.setTransform(8.7,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA643F").s().p("Ah7A0QgkgbgHhAIANgoIALgGQgDAJAAAOQAABBApAeQAoAeBTAAIBlgIQANgqADgNQABACAGgLIAYAGIABAAIgLAgQgFATgDAiIh1AEQhuAAgtgig");
	this.shape_4.setTransform(8.8,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#112635").s().p("AgQApQgHgSAAgXIAAgLIALgjIAAgCQAGgJAGAAQAKAAAHARQAHASAAAWQAAAMgCAKIgCAFIgBAIIgCAGQgHARgKAAQgJAAgHgRg");
	this.shape_5.setTransform(26.9,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#552D17").s().p("AhdBcQhRgaAAhMQAAgLAHgSQAIgVAMgMIgOAoQAIBAAkAbQAtAiBuAAIB1gEIgDAKQhIAHg3AAQhKAAgsgOgACsACIgXgEQg8gPgzgoQgnghglAAQgSAAggAOIgkARQAOgQAXgOQAJgGAIgDQAOgHAWAAQAQAABQAtQBYAvAZAFIgBAIIgBACIgBAAg");
	this.shape_6.setTransform(8.2,5.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-5.3,60.8,25.4);


(lib._Player_Forearm = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#980101","#FD1C1C"],[0,1],10.1,10.2,0.1,-5).s().p("AhQA9IgVgmQAAgQAPgdQATgoAcgTIBWgQQACAAAMAJQANAKAIALIAAADQAGADgKAAQgDAAgQgIQgRgIgFgCIgQgBQAGANAsAhQAiAbgDAdQgJANgFADIgGADIgjAgQgPAGgSALQgMAIgHAAQgsAAgfglg");
	this.shape.setTransform(41.7,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F19761","#B9623E"],[0,1],11.4,-4,1.3,10).s().p("Ag8AgQg5ghgngSQgFgFgMgpQACgCAYgRQAYgPAcgEIgGACIAIgCQAagEASAAQBAAAAlAdIB6B0QgFAGgQAeQgQAdgCAFQiBgohCgkgAh1ghQAGAJA/AYQA4AUA0AOQgjgUgigRQhHgjgegCIgHAHg");
	this.shape_1.setTransform(10.8,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C0202").s().p("AhVA5QgqglAAgJQAAgaAggqQAcgmANgCQgcATgTAoQgPAfAAAOIAVAmQAfAlAsAAQAJAAALgHQARgMAPgGQgTAPgMAHIABADQAVgDAegZQAQgNANgNIAIgEQgEAPgfAbQgmAggfAAQgZAAgugpgABgAVQALgSAAgFQAAgGgBgCIgEgGQgFgGgCgGQABAIgCALQgDAJgEAGQADgcgigbQgsgigGgNIAQACQAFABARAJQAQAHADABQAKAAgGgEIAAgDIAVAgIg1ghIgEgCQAUAfApAYQAkAUAAAFQAAAfgdAAg");
	this.shape_2.setTransform(43.2,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA643F").s().p("AgaAWQhZgmgegoQAnARA5AjQBCAiCBAoIgCAIQhXgRhTgngAglgmQg/gYgGgJIAHgGQAeABBFAkQAkASAjAUQg0gOg4gWg");
	this.shape_3.setTransform(9.7,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#112635").s().p("AgoBBIgJgCQgCgBAAgHIAAgDQAAgnAZgoQAYgnAQABIAKAFQANAIAPAMQguA5gIAUQgGANAAARQgWgBgKgBg");
	this.shape_4.setTransform(30.2,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#070609").s().p("AhLBEQgtgegXgTQALACAVAAQAAgRAGgLQAKgUAvg7QgQgMgNgIIgJgFQgTAAgYAnQgZAqAAAlIAAACQgIgIgCgDIACgWIACgIQACgFAQgdQARgeAEgGIAOgOQATgBAdAOIAbAOQAFAAArgKQAtgJAEAAQBkBfAAAWQAAALgHALQgIANgNAAQgLAAgLAMIgVAZQghAkgyAAQgLAAhLgxgAgahTQgNACgdAmQgfApAAAbQAAAIAqAmQAtApAYAAQAgAAAmggQAggbAEgPIgJADQgNAOgPANQgfAZgUACIgBgCQALgHAUgPIAiggIAGgDQAGgDAJgNQAEgGACgLQACgJgBgIQADAGAFAGIAEAEQABACAAAGQAAAHgMASIAEAEQAcgBAAghQAAgEgjgSQgqgYgUggIAEADIA2AhIgVggQgIgLgOgKQgLgJgCAAg");
	this.shape_5.setTransform(40.5,21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#552D17").s().p("AhaA3QhUg3gHgoIADgfQAMApAFAFQAdAmBaApQBTAnBWARIgCAVQh2gKhhhCgAAvhVQglgchAAAQgSAAgaAEIgIACIAGgCQAbgIASgIQAJgFAUAAQBAAAA5A3QAhAfA2A+IgNAOIh6h1g");
	this.shape_6.setTransform(11.4,8);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-5.1,64,38.5);


(lib._Player_Chest_3 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1291C7").s().p("AhLCyQhbAAgZgMIAEgQQDjAKAqADIArADIAAAOQg4gDiQABgABVCVIAehiQAchbACgKIAKgfIAKgDQAMgDAMgCQg+DhgCAVgACeizIAiAAQgEAMAAAIIglAGg");
	this.shape.setTransform(1.8,-45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#15ABEA").s().p("AgUF+QiFgDgrgJIAKghQAaAMBbAAQCQgBA3ADQAAAHADAZIiZgBgACcAQIAlgHQADAOABAWQAAAWgDANQgMACgLADIgKADQAEgogJgggACWh6QgGgTgRgmQgZg6gegiIAbgRIAAAAQBDBiAYAwQAWArAAAjQgEAqgKANIgjABQgGhXgHgbgAjKldIgJghQB1ADA1AHQBdAJBGAbIgPAWQi7gnh6AEg");
	this.shape_1.setTransform(1.3,-62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#030118","#0D023E"],[0,1],-58.3,97.9,-75.7,67.8).s().p("AiBHAQgrgeAAhDQAAgXAKgkQAFgUALggQArAKCCACICbABIAGBXQAABfg/AeQgeAPhFAAQhsAAgvgggAgKC6QhWgBgggCQgFgIgHghIAAgLQAAg9gOgtQgFgPgJgTQgShRgahhQARAMADAAQAgAAAEgiIAGhJQAYhrDZgBQgOgJg1gTQg/gXghAAQhBAAgoAtIAjgvIgLgkQB6gDC8AnIgMAWIACADIABABIgbAQQAfAiAZA6QgFgDg4gOQg2gOgIAAQgQAAgKAOQgLAOAAAaQAAA8AzArQA4AwBZgDIgHAaQhagFgZALQgSAHAAAeQAAATASAQQAUAQAbAAQAIAAAbgIQAbgIAKgGIgKAfQgjAKgdA8QgcA6gFBEIhxgBg");
	this.shape_2.setTransform(-3.6,-49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180479").s().p("ABrE5QAFhDAcg7QAdg8AjgMQgCAKgcBdIgeBigABfBaQgSgQAAgTQAAgeASgHQAZgLBaAFQAIAggEAoQgKAGgbAIQgbAJgIAAQgbAAgUgRgABIg4QgzgsAAg8QAAgZALgPQAKgOAQAAQAIAAA2AOQA4AOAFADQARAmAFAUQAHAbAHBXIgLAAQhRAAg1gtgAjQg9QgDgLgCgXIgDgdQAAgaAQgyQAMgmALgXIAEgJQAogtBBAAQAhAAA/AXQA1AUAOAJQjZAAgYBrIgGBKQgEAhggAAQgDAAgRgMg");
	this.shape_3.setTransform(-4,-62);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B0233").s().p("AiQHjQhCg+AAhVQAAgXAZhOQAWhEACgnQAHAgAGAJQAgABBVABIByACIAlACIAoAIQABgUA+jhQADgNAAgWQgBgWgDgOQAAgHAFgNQAKgOAEgqQAAgigWgrQgYgxhEhhIAAgBIgDgDIAMgWIAPgWQhHgbhcgKQg1gGh1gDIAJAhIALAkIgkAuQAagzAAgDQAAgUgIgOQgKgVgDgNIBDgCQA6AAA/AIQBqAMA/AfQgfAwAAABQAeAnAfAuQA8BcAAAnQAAAzgKAYIgLAPQAAAFAEALQAEALAAAFQAAAfghBeQgiBfAAA3IAICcQAABVgfA0QggAzhjAMQgRACgNAAQhPAAg3g1gAidDBIgKAhQgKAggFAUQgKAkAAAXQAABDArAdQAuAgBsAAQBFAAAfgPQA/geAAhfIgHhWQgCgZAAgHIABgOIgsgEQgqgDjigKgAjOg5QgvhWAAhoQAAg1AphRIAKgVQgLAYgLAlQgQAzAAAZIACAeQADAWADAMQAaBhARBRIgRgig");
	this.shape_4.setTransform(-1.5,-47.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-101.6,50.9,107.3);


(lib._Player_Chest_2 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1291C7").s().p("AhaCUQALgTA6hNQA+haAyhuQAAANgOAxQgRA5gQAdQgDAHgbAmQgaApgfA+g");
	this.shape.setTransform(14.8,-44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#15ABEA").s().p("AiEF9QgOgEgMgGQABgIAIgOQAIgMABABICUADQCQAEANgCIgBAnQh5AFgSAAQiCABgbgHgACok+QgmgOhNgLQhkgPh6AAQAAgGgEgVIBLgCQA+AEA5AFIARABQBKAIAhAIQAdAHAAAJQAAAHgGAUg");
	this.shape_1.setTransform(-2.2,-61.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#030118","#0D023E"],[0,1],-58.1,95.1,-75.5,64.9).s().p("AhjHpQhdhVABhUQAAgLAchPQAchOAAgVQABg3gZg1QgMgZgqhAQgmg7gQgoQgYg+AAhHQAAg7AZg0QAmhJBHACQgEgLgGgXIgEgWQAAgOAaAAQBtALBKAIQg5gFg+gDIhLACQAEAUAAAHQB6AABkAOQBNALAmAOIAAAAQAGgUAAgHQAAgIgdgHQAfAFAMAFQgJAtgFAMIgCAGQAaApAaAuQA0BcAAAgQgBASgJAUQgLAVAAAMQAAAGAEAOIADAPQgyBthABaQg6BNgLAUIAuAAQAgg/AcgoQAbgmADgIQgaBcgPBqQgKBogHAmQgKA9gPAqQgPAqhHAgQgUAKgVAAQg2AAhDg+gAiEDFQgIANgBAIQAMAHAOADQAbAHCCAAQASAAB5gGIABgmQgNABiQgEIiUgDQgBAAgIAMgAA1iLQg8A8gJA0QAnAGBYg3QBcg6AAguQAAgJgQgPQgOgPgOgGQhbBIgPAOgAhKmVQg6A5gBBlQABB7AuAAQBTAABRhjQBJhYABg6QgBhWhqAAQhEAAgzAygAkEi4QA3AoAFgBIAEgCQABgLgGhjQAAhvAehJIgKgOQg1AcgYAuQgVApAAA8QAAA2ASAnQASArgSgqg");
	this.shape_2.setTransform(-3.9,-46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180479").s().p("AAVDVQAJg0A+g7QAPgOBahJQAPAHAOAOQAPAPAAAKQABAthdA6QhOAygpAAIgJgBgAhegEQAAhlA6g6QAxgxBHAAQBqAAAABWQAAA5hKBXQhTBihQAAQgvAAAAh4gAjdA4IgCgCQATArgTgrQgRgngBg0QABg8AVgpQAXguA1gdIAKAPQgdBJgBBvQAHBhgBAKIgFACIAAAAQgGAAg1gng");
	this.shape_3.setTransform(-7.7,-70.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,-101.7,58.6,110.2);


(lib._Player_Chest = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1291C7").s().p("AhDDIIhpgHIADgIIE3AAIAEAPIg2AEIgvABQgUAAhcgFgABcCuIALAAQgDgRgDgcIgCgjQAAgmAQiAIAIgcIAzgGIgRBqQgQBhAAAlIADAnIgwACQgJAAAJgBgAB6i7IAGgRIAoADQADAIACAIg");
	this.shape.setTransform(-0.3,-46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#15ABEA").s().p("AixGCQAIgIAJgZIBoAHQBcAFAVAAIAvgBIA1gEIAHANIAGAPQgCAAgEgDQAAgBgBAAQAAAAAAABQgBAAAAABQAAABAAABQAAAHg9ACIhFABQhSAAh/gMgACHgJIgCgPIABgDIAyACQAEApgGAkIgzAGQAIgrgEgYgACMgsQgBgmhBg/IhRhOIgGgUIgFgQQAAgJAogHIAFAJQA2A0AiArQBCBPgBAzgACEkAQgfgvgJgHIgHgZQgFgWgBgOQgCgZgCAAIAcgBQAJAAAXAEQAaAFAQAFIgdA6QgJARAAACQAAANAfBbQgGgGgggwgAg6lVIgvgDIhFACIgKgeQA2gFAiAAQBHAAAYAQQAMAKgCAQQgYgDgrgDg");
	this.shape_1.setTransform(-1.5,-62.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#552D17").s().p("ABpgTIABAGQABANAFAUIAIAaIgKAKIgFhLgAh3geIAQgWIACgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIACABQAEADgEAHQgEAJABAEIgSABQgBAAAAAAg");
	this.shape_2.setTransform(-4.2,-98.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAUAVQhCg8gbgiQAIgBATgJQAUgJAEgGQAuAzASAkQAVAmALBJQgKgngsgog");
	this.shape_3.setTransform(10.1,-82.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA643F").s().p("AAuA9IgEg9QgTAAg9gHQg4gHgKACIAAAAQgBgEAEgJQAEgIgEgDQgBgDAEgGIAHgHIAggYQAfgUAVAAQAvABAWAKIAYATIAJAWIAAAIQADAbADAJIAFBLQgLAKgMAHQgIAFgDAAQgUAAgGgkg");
	this.shape_4.setTransform(-3.8,-100.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#030118","#0D023E"],[0,1],-57.5,98.3,-74.9,68.1).s().p("AiAG5QglgbAAhEQABgwAUgOQARgKAxAEQBkAIAJABQBTACBQgQQAGArAAAdQAABQgvAdQghAWhEAAQiEgBgwgigAh8DNQACgIACgeIADglQAAgugMgYQgRgfgBgDIALAEQhOhfgbgyQgfg9gBhEQABhVA4g3QAcgcAdgLQAegWA1AFQgkgEgaACQABgDgCgKQgCgLgDgHIBFgBIAvACQApADAaAEQAAAFAGAYIAHAeQgqAHAAAJIAEAQIAHAUQgSgEgYgDQgSgCgMAAQggAAgVAUQgVATAAAXQALA9APATQAUAzBAANQA4ANB7gOIgQgBQgNgCAAgGQAAgGgFgBIAngBIgFARIgBADIACAPQhWAMhgADQgWAAgFADQgGADABAKQAAAZAZAhQAYAhAYAAQAUAAA0gXIBAgeIgIAdQg6APgtAgQgmAeAAASQAJBGAAALIgHBGIhjACIgmgBgADfgxQAHgWAAgHQAfAEANAGIgMAbgADjiqQAJg0AAgcQAAgogahIIgbhGIAIgPIACABIAHAEIAFAEQAMAHALAYIgBAHQADApACALQAEALAHAAQACABAGAUQAGAcAAAmIgMBFQAAAHACAEIADACg");
	this.shape_5.setTransform(-4.5,-49.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D023E").s().p("AgSBwQgCgPgGgVIAYACQAWAAAFgBIgBAPQAAAGABAFIACAOgAAChwIgCgEIAAABIACADgAAFhyIACABIgBAAIgBgBg");
	this.shape_6.setTransform(20.9,-74.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#180479").s().p("AhADrQAAgKgJhGQAAgTAmgdQArgiA6gQQgPCCAAAmIACAjQADAcADARIiCABgAB0C6QANhiAIglIAnAIQgaAvgWBGQgQA4gKA7IAOhpgAhuAwQgZggAAgXQgBgKAGgDQAFgDAWAAQBigEBUgLQAEAagJApIhAAdQgyAYgUAAQgZAAgZgigACQAWQAFgdgBgZIAvAEQAAAigHAaQgNgGgfgEgACihFQgDgDAAgHIAMhGQAAglgGgcQgGgVgCAAQgHAAgEgLQgCgLgDgpIABgHIANAXIgEgIIALARIAHALIgBgBIACAEIABAAIAMAXQAdA2AAArQgBAQgGAYQgGATgGAMQgFACgYAAgAhahUQhKgMgVgYQgPgSgLg9QAAgXAVgTQAVgUAgAAQAMAAASACQAaACASAFIBQBOQBCA/AAAmIgnABQgFgCgJACQhQgFgogHg");
	this.shape_7.setTransform(4.1,-59.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B0233").s().p("AiAH0QhEhIAAhVQAAhVAcgmQAbglAAhDQAAgfgZgxQgKgUguhKQhRiGAAhPQAAhcApgoQASgRBRglIgRhEIA1gGIATgBIAAAAQAKgCA4AHQA9AHATAAIAEA/QAGAkAUAAQADAAAIgFQAMgHALgKIAKgKQAJAHAeAuQAhAwAGAHQgfhcAAgMQAAgDAIgQIAeg7QgQgFgagEQgXgEgJAAIgdAAQACAAADAaIgCgGQgDgJgDgbIABADQA7gFAmAJQAdAHAAAHIgQAZQgPAXAAAQQAAAIADAJIgHgFIgCgBIgIAPIAbBHQAaBHAAAoQAAAcgJA0QAFAVACAPQABAZgFAfQAAAIgHAWQgIAlgNBfIgOBqQAKg8AQg3QAWhFAaguIAMgcQAHgaAAgjIgBgOQgCgFAAgHIABgOQAGgNAGgTQAGgXABgQQAAgsgdg1IgMgXIgCgEIgHgLIAIAJIADAEIABABQA2A+AAA4QAAAOgMAfQgMAfAAAPQAAAyguCSIgvCVIANBDQgBALAEAgQAEAgAAAKQgBBbgmA3QgnA3hfAUQgUAEgSAAQhGAAg2g5gAiaEQQgUANgBAwQAABEAlAbQAwAjCEAAQBEAAAhgVQAvgeAAhPQAAgegGgrQhQAQhTgCQgJAAhkgJIgYgCQgdAAgNAJgAiMDRQgKAZgHAIQB/AMBSAAIBFgBQA9gCAAgGQAAgCAAgBQAAgBAAAAQABgBAAABQABAAAAAAQAEAEACAAIgHgPIgGgNIgDgQIk4AAgAiLAwQAMAXAAAvIgDAkQgCAegCAIQAdADBsgEICEgBIgMABQgJAAAJABIAxgCIgEgoQAAglAQhjIAShoQAGgjgEgrQgBgJgDgIQABgyhChQQgigqg2g0IgFgKIgHgdQgGgYAAgGQABgRgOgJQgVgQhHAAQgiAAg3AEIALAeQADAIACAKQACAKgBAEQAagDAkAEQg1gEgeAVQgdAMgcAbQg4A3gBBVQABBEAfA9QAbAzBOBfIgLgFQABAEARAfgABYmoQgSAJgJABQAbAiBFA+QAsAoAKAmQgLhIgVgoQgSgkgxg0QgDAHgVAJgAgZipQhAgOgUgzQAVAYBKAMQAmAGBSAFQAJgBAFABQAFABAAAGQAAAGANACIAQABQhBAHgvAAQgqAAgZgFg");
	this.shape_8.setTransform(-3.5,-48.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.9,-110.2,60.9,117.5);


(lib.Player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:0});

	// timeline functions:
	this.frame_12 = function() {
		console.log("hoge");
	}
	this.frame_29 = function() {
		//gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(17).call(this.frame_29));

	// _Player_Forearm0
	this.instance = new lib._Player_Forearm();
	this.instance.setTransform(-18,-142.2,0.999,0.999,36.8);
	this.instance.cache(-8,-6,68,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:42.5,x:-42.4,y:-154},3).to({rotation:80,x:-51.3,y:-212.1},3).to({rotation:87.5,x:-47.5,y:-170.8},3).to({regX:0,rotation:77.9,x:-36,y:-131.2},3).to({regX:0,rotation:21.8,x:-0.6,y:-135.1},3).to({rotation:-35.8,x:23.6,y:-139},3).to({rotation:-93.3,x:57.4,y:-164.9},3).to({rotation:-62.3,x:37.3,y:-127.8},3).to({regX:0,rotation:-1.2,x:5.5,y:-114.5},3).to({scaleX:1,scaleY:1,rotation:24,x:-10.1,y:-133},2).wait(1));

	// _Player_Shoulder0
	this.instance_1 = new lib._Player_Shoulder_Right();
	this.instance_1.setTransform(2.4,-181.6,1,1,-9.9,0,0,0,0.1);
	this.instance_1.cache(-36,-12,51,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5,x:-11.4,y:-187.2},3).to({regY:0,rotation:57.5,x:-6.7,y:-205.9},3).to({regY:0.1,rotation:35,x:-6.2,y:-182},3).to({regY:0.2,rotation:2.9,x:-6.8,y:-162.5},3).to({regY:0.1,rotation:-24.8,x:7.8,y:-177.5},3).to({regX:0.1,rotation:-50.3,x:13.8,y:-183.4},3).to({regX:0,regY:0,rotation:-100.8,x:18.4,y:-187},3).to({regY:0.1,rotation:-54.8,x:26.1,y:-169},3).to({regY:0.2,rotation:-20.4,x:19.7,y:-154.7},3).to({scaleX:1,scaleY:1,rotation:-13.3,x:8.2,y:-172.6},2).wait(1));

	// _Player_Head
	this.instance_2 = new lib._Player_Head();
	this.instance_2.setTransform(18.4,-238.2,1,1,-2.4);
	this.instance_2._off = true;
	this.instance_2.cache(-32,-38,74,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:25.5,y:-216.8},3).to({x:22.9,y:-199.2},3).to({x:22.5,y:-212.7},2).to({_off:true},1).wait(6).to({x:18.4,y:-237.9,_off:false},0).to({x:25.5,y:-216.8},3).to({x:22.9,y:-199.2},3).to({x:22.5,y:-212.9},2).wait(1));

	// _Player_Head
	this.instance_3 = new lib._Player_Head_2();
	this.instance_3.setTransform(22.3,-220,1,1,-2.4);
	this.instance_3.cache(-32,-34,72,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:17.7,y:-225.6},3).to({x:18.1,y:-234},2).to({_off:true},1).wait(9).to({x:22.3,y:-219.5,_off:false},0).to({x:17.7,y:-225.6},3).to({x:18.1,y:-233.9},2).to({_off:true},1).wait(9));

	// _Player_Thigh0
	this.instance_4 = new lib._Player_Thigh_Right("synched",0);
	this.instance_4.setTransform(-5.5,-107.5,1.092,1.083,0,18.4,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:-11.4,skewY:0,x:-9.4,y:-112.9,mode:"independent"},3).to({skewX:9.5,skewY:20.8,x:-18.6,y:-125.5},3).to({skewX:15,skewY:26.4,x:-13.2,y:-107.1},3).to({skewX:11.8,skewY:23.2,x:-18.4,y:-95.4},3).to({skewX:42.5,skewY:53.8,x:-21,y:-108.1},3).to({skewX:87.7,skewY:99,x:-31.5,y:-111.6},3).to({skewX:129.5,skewY:140.8,x:-34.8,y:-131.9},3).to({skewX:100.4,skewY:111.8,x:-28.2,y:-112.1},3).to({skewX:65,skewY:76.4,x:-18.4,y:-95.4},3).to({scaleX:1.09,scaleY:1.08,skewX:33.9,skewY:45.4,x:-10.2,y:-103.4},2).wait(1));

	// _Player_Shin0
	this.instance_5 = new lib._Player_Shin_Right();
	this.instance_5.setTransform(35.6,-63.1,1.058,1.047,0,75,84.2);
	this.instance_5.cache(-23,-10,48,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({skewX:30,skewY:39.2,x:47.7,y:-92.3},3).to({scaleX:1.05,skewX:-38.7,skewY:-40.8,x:27.5,y:-85.9},3).to({scaleX:1.06,skewX:-11,skewY:-1.8,y:-64},3).to({scaleX:1.13,scaleY:0.97,skewX:24.3,skewY:1.5,x:24.6,y:-54.6},3).to({scaleX:1.05,scaleY:1.05,skewX:48.1,skewY:49.8,x:-0.9,y:-50.6},3).to({scaleX:1.05,skewX:39.3,skewY:34.3,x:-58.2,y:-57},3).to({scaleX:1.06,skewX:146.1,skewY:135.5,x:-90.9,y:-111.7},3).to({scaleX:1.05,skewX:134.3,skewY:136.7,x:-67.4,y:-67.9},3).to({scaleX:1.09,scaleY:0.93,skewX:114,skewY:131.3,x:-23.7,y:-38.4},3).to({scaleX:1.07,scaleY:1.01,skewX:88.2,skewY:99.8,x:15.8,y:-54.8},2).wait(1));

	// _Player_Chest
	this.instance_6 = new lib._Player_Chest_2();
	this.instance_6.setTransform(-18,-106.6,1,1,21.2);
	this.instance_6._off = true;
	this.instance_6.cache(-34,-103,63,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({rotation:23.3,x:-24,y:-121.8},3).to({rotation:27.5,x:-22.6,y:-103.7},3).to({scaleX:1,scaleY:1,rotation:24.6,x:-20.1,y:-90},2).to({_off:true},1).wait(3));

	// _Player_Chest
	this.instance_7 = new lib._Player_Chest();
	this.instance_7.setTransform(-24.1,-121.9,1,1,23.3);
	this.instance_7._off = true;
	this.instance_7.cache(-35,-111,65,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({rotation:27.5,x:-22.6,y:-103.7},3).to({scaleX:1,scaleY:1,rotation:24.6,x:-20.1,y:-90},2).to({_off:true},1).wait(18));

	// _Player_Chest
	this.instance_8 = new lib._Player_Chest_3();
	this.instance_8.setTransform(-18.3,-102.3,1,1,22.7);
	this.instance_8.cache(-28,-103,55,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:21.2,x:-17.9,y:-106.5},3).to({scaleX:1,scaleY:1,rotation:22.5,x:-21.9,y:-116.6},2).to({_off:true},1).wait(6).to({scaleX:1,scaleY:1,rotation:23.2,x:-18.8,y:-83.2,_off:false},0).to({rotation:22.7,x:-18.2,y:-102.2},3).to({scaleX:1,scaleY:1,rotation:21.6,x:-18,y:-105},2).to({_off:true},1).wait(9).to({scaleX:1,scaleY:1,rotation:23.2,x:-18.8,y:-83.2,_off:false},0).to({scaleX:1,scaleY:1,rotation:22.8,x:-18.4,y:-95.8},2).wait(1));

	// _Player_Thigh
	this.instance_9 = new lib._Player_Thigh_Left();
	this.instance_9.setTransform(-19.1,-109.1,1.13,1.208,0,42.9,38.8);
	this.instance_9.cache(-10,-9,68,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({skewX:89.5,skewY:85.4,x:-26.2,y:-112.4},3).to({skewX:136.2,skewY:132.1,x:-22.8,y:-135},3).to({skewX:106.2,skewY:102.1,x:-19.5,y:-114.2},3).to({skewX:61.2,skewY:57.1,x:-22.1,y:-97.9},3).to({skewX:16.6,skewY:12.5,x:-5.3,y:-106.4},3).to({skewX:-15.3,skewY:-19.4,x:-10.6,y:-113},3).to({skewX:16.2,skewY:12.1,x:-15.7,y:-127.1},3).to({skewX:12.9,skewY:8.8,x:-14.5,y:-104.2},3).to({skewX:14.5,skewY:10.4,x:-12.9,y:-95.1},3).to({scaleX:1.13,scaleY:1.21,skewX:33.4,skewY:29.3,x:-17,y:-104.3},2).wait(1));

	// _Player_Shin
	this.instance_10 = new lib._Player_Shin_Left();
	this.instance_10.setTransform(0.7,-57.1,1.031,1.112,0,-115.9,-130);
	this.instance_10.cache(-51,-61,63,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,rotation:-108.7,skewX:0,skewY:0,x:-49.8,y:-58.3},3).to({scaleX:1.06,scaleY:1.21,rotation:0,skewX:-10.5,skewY:-29.3,x:-76.9,y:-113.5},3).to({scaleX:1,scaleY:1,rotation:-25.5,skewX:0,skewY:0,x:-56.3,y:-68.4},3).to({scaleX:1,scaleY:1,rotation:-40.5,x:-17.1,y:-38.2},3).to({scaleX:1,scaleY:1.01,rotation:0,skewX:-82.1,skewY:-80.2,x:36,y:-64},3).to({scaleY:1,skewX:-138.7,skewY:-136.7,x:47.6,y:-98.4},3).to({scaleX:1.06,scaleY:1.21,skewX:-194.6,skewY:-213.4,x:29.2,y:-85.8},3).to({scaleX:1.01,scaleY:1.14,skewX:-158.5,skewY:-168.4,x:31.1,y:-67},3).to({scaleX:0.97,scaleY:1.05,skewX:-127.2,skewY:-139.8,x:33.8,y:-57.8},3).to({scaleX:1.01,scaleY:1.09,skewX:-119.6,skewY:-133.2,x:11.6,y:-57.3},2).wait(1));

	// _Player_Forearm
	this.instance_11 = new lib._Player_Forearm_Left();
	this.instance_11.setTransform(12,-136.7,0.996,0.996,42.4);
	this.instance_11.cache(-10,-6,65,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-32.2,x:26.6,y:-139.6},3).to({regY:0.1,rotation:-83.2,x:51.4,y:-163.4},3).to({rotation:-57.4,x:40.9,y:-136.7},3).to({rotation:-12.4,x:6.5,y:-117.2},3).to({regY:0,rotation:57.4,x:-3.1,y:-148.4},3).to({rotation:42.9,x:-41.7,y:-162.8},3).to({regY:0.1,rotation:103.1,x:-50,y:-208.3},3).to({rotation:107.4,x:-46.5,y:-166.2},3).to({regX:0,rotation:68,x:-29.5,y:-134.1},3).to({regY:0,scaleX:1,scaleY:1,rotation:50.9,x:-1.6,y:-135.8},2).wait(1));

	// _Player_Shoulder
	this.instance_12 = new lib._Player_Shoulder_Left();
	this.instance_12.setTransform(10.9,-171.4,1.116,1.029,-2.4);
	this.instance_12.cache(-12,-10,29,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:-18.5,x:16.8,y:-172.9},3).to({rotation:-54.6,x:26.1,y:-183.2},3).to({rotation:-28.7,x:25.3,y:-167.8},3).to({rotation:16.1,x:17.5,y:-150.2},3).to({rotation:5.1,x:1.2,y:-183.1},3).to({rotation:41.5,x:-17.6,y:-187.8},3).to({rotation:86.7,x:-17.7,y:-208.5},3).to({rotation:61.1,x:-15.2,y:-182.8},3).to({rotation:36.6,x:-8.4,y:-163.2},3).to({scaleX:1.12,rotation:10.5,x:4.4,y:-168.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-652996.1,-32.9,1357479.7,32.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;