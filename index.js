const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cree la fenetre du navigateur.
  let win = new BrowserWindow({
    width: 1000,
    height: 400,
    icon: __dirname + '/images/logo.png',
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.removeMenu()

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
