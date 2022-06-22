const { app, globalShortcut, BrowserWindow, screen } = require('electron')

app.whenReady().then(() => {
  globalShortcut.register('ctrl+shift+a', () => {
    const point = screen.getCursorScreenPoint()
    const { bounds } = screen.getDisplayNearestPoint(point)

    const full = new BrowserWindow({
      title: 'screenshots',
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      useContentSize: true,
      frame: false,
      show: true,
      autoHideMenuBar: true,
      transparent: true,
      resizable: false,
      movable: false,
      closable: false,
      minimizable: false,
      maximizable: false,
      focusable: true,
      fullscreen: process.platform === 'darwin',
      simpleFullscreen: process.platform === 'darwin',
      backgroundColor: '#00000000',
      titleBarStyle: 'hidden',
      alwaysOnTop: true,
      enableLargerThanScreen: true,
      skipTaskbar: true,
      hasShadow: false,
      paintWhenInitiallyHidden: false,
      acceptFirstMouse: true
    })

    full.loadURL('https://www.baidu.com')
  })

  const mainWin = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
    titleBarStyle: 'hidden',
    fullscreen: true,
    trafficLightPosition: { x: 5, y: 24 },
    title: 'Henglink',
    titleBarOverlay: true,
    show: true
  })
  mainWin.removeMenu()
  mainWin.loadURL('https://www.baidu.com')

  // 防止不能关闭截图界面
  globalShortcut.register('ctrl+shift+q', () => {
    app.quit()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
