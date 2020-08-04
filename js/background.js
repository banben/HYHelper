chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  chrome.debugger.attach({ tabId: sender.tab.id }, "1.0");
  chrome.debugger.sendCommand({ tabId: sender.tab.id }, 'Input.dispatchKeyEvent', { type: 'keyUp', windowsVirtualKeyCode:13, nativeVirtualKeyCode : 13, macCharCode: 13  });
  chrome.debugger.sendCommand({ tabId: sender.tab.id }, 'Input.dispatchKeyEvent', { type: 'keyDown', windowsVirtualKeyCode:13, nativeVirtualKeyCode : 13, macCharCode: 13  });
  chrome.debugger.detach({ tabId: sender.tab.id }, () => {});
  sendResponse(sender.tab.id);
  // inspired from https://stackoverflow.com/questions/42638172/how-can-i-simulate-keys-entered-in-an-input-web-element-in-chrome-56-with-pure-j/42751823
})