const { app, globalShortcut } = require('electron')
const Screenshots = require('electron-screenshots').default

app.whenReady().then(() => {
  const screenshots = new Screenshots()
  
  globalShortcut.register('ctrl+shift+a', () => {
    screenshots.startCapture()
  })

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
