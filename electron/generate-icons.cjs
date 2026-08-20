const { app, nativeImage, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 512,
    height: 512,
    show: false,
    webPreferences: { offscreen: true },
    transparent: true
  });

  const svgPath = path.join(__dirname, 'icon.svg');
  const svgData = fs.readFileSync(svgPath, 'utf8');
  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:transparent;overflow:hidden;">${svgData}</body></html>`;
  
  await win.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
  
  const image = await win.webContents.capturePage({ x: 0, y: 0, width: 512, height: 512 });
  const pngBuffer = image.toPNG();
  
  const out1 = path.join(__dirname, 'icon.png');
  const out2 = path.join(__dirname, '../public/icon.png');
  const outFavicon = path.join(__dirname, '../public/favicon.ico');
  
  fs.writeFileSync(out1, pngBuffer);
  fs.writeFileSync(out2, pngBuffer);
  fs.writeFileSync(outFavicon, pngBuffer);

  console.log('✅ Generated 512x512 macOS and web icon PNGs successfully:', pngBuffer.length, 'bytes');
  app.exit(0);
});
