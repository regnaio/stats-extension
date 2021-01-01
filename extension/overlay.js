const fps = new Stats();
const frameRenderDuration = new Stats();
const memory = new Stats();

fps.dom.style.cssText = 'position:absolute;top:0px;left:0px;z-index:4';
fps.dom.id = 'fps';
document.body.appendChild(fps.dom);
frameRenderDuration.dom.style.cssText = 'position:absolute;top:0px;left:80px;z-index:4';
frameRenderDuration.dom.id = 'frameRenderDuration';
document.body.appendChild(frameRenderDuration.dom);
memory.dom.style.cssText = 'position:absolute;top:0px;left:160px;z-index:4';
memory.dom.id = 'memory';
document.body.appendChild(memory.dom);

// const datGUI = new dat.GUI({
//   autoPlace: false,
//   hideable: false,
//   width: 300
// });

// datGUI.domElement.style.cssText = 'position:absolute;top:0px;right:0px;z-index:4';
// document.body.appendChild(datGUI.domElement);

fps.showPanel(0);
frameRenderDuration.showPanel(1);
memory.showPanel(2);

// const folder = datGUI.addFolder('folder');
// folder.open();

function update() {
  fps.update();
  frameRenderDuration.update();
  memory.update();
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
