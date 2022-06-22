const { app, globalShortcut, BrowserWindow } = require("electron");
const Screenshots = require("electron-screenshots").default;

app.whenReady().then(() => {
  const screenshots = new Screenshots();

  globalShortcut.register("ctrl+shift+a", () => {
    screenshots.startCapture();
  });

  const mainWin = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
    titleBarStyle: "hidden",
    trafficLightPosition: { x: 5, y: 24 },
    title: "Henglink",
    titleBarOverlay: true,
    show: true,
  });
  mainWin.removeMenu();
  mainWin.loadURL("https://www.baidu.com");

  // 防止不能关闭截图界面
  globalShortcut.register("ctrl+shift+q", () => {
    app.quit();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
