const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('iu', {
    mkdir: (data) => ipcRenderer.send('iu-mkdir', data)
})