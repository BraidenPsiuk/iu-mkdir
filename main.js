const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800+600,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  ipcMain.on('iu-mkdir', (event, data) => {
    // const webContents = event.sender
    // const win = BrowserWindow.fromWebContents(webContents)
    // win.setTitle(data)
    
  })

  win.webContents.openDevTools()
  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})