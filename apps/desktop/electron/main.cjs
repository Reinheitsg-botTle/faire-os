const { app, BrowswerWindow } = require("electron");

import { app, BrowserWindow } from "electron";


let win;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      import { app, BrowserWindow } from "electron";

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,

    frame: false,
    transparent: true,
    fullscreen: true,

    alwaysOnTop: true,
    skipTaskbar: true,
    focusable: false,
    resizable: false,

    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // IMPORTANT: wait for Vite
  win.loadURL("http://localhost:5173");

  win.setIgnoreMouseEvents(true); // makes it "screensaver-like"
}

app.whenReady().then(createWindow);contextIsolation: false
    }
  });

  win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);
