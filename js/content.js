window.addEventListener("load", myMain, false);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

async function myMain(evt) {
  // DO YOUR STUFF HERE.
  console.log("HY helper running!");

  let count = 0;
  while (true) {
    count++;
    await sleep(5000);
    let input = $('#pub_msg_input');
    let lastMsg = $('#chat-room__list li').last();
    let lastMsgName = lastMsg.find('.name.J_userMenu');
    let lastMsgSendGift = lastMsg.find('.send-gift');
    let lastMsgSendGiftType = lastMsgSendGift.find('img');
    let send = $('#msg_send_bt');
    let nobleEnter = lastMsg.find('.msg-nobleEnter');
    if (count % 60 == 1 && input.length && send.length) {
      let rnd = getRndInteger(0, 6);
      switch(rnd) {
        case 0:
          input.val('666');
          break;
        case 1:
          input.val('这也太厉害了吧');
          break;
        case 2:
          input.val('新来的小伙伴点点关注');   
          break;
        case 3:
          input.val('虎粮刷起来');
          break;
        case 4:
          input.val('新来的小伙伴动动小手，关注主播不迷路！');
          break;
        case 5:
          input.val('新进来的朋友走个订阅，卡个牌牌~');
      }
      input.focus();
      chrome.runtime.sendMessage({
        send: true
      }, res => {
        console.log(`发送弹幕 from tab: ${res}`);
      })
      continue;
    }

    if (lastMsg.length && input.length && send.length) {
      if (lastMsgSendGift.length && lastMsgName.length && lastMsgSendGiftType.length) {
        input.val(`感谢${lastMsgName.text()}赠送的${lastMsgSendGiftType.attr('alt')}`);
        input.focus();
        chrome.runtime.sendMessage({
          send: true
        }, res => {
          console.log(`发送弹幕 from tab: ${res}`);
        })
      } else if (nobleEnter.length && input.length && send.length) {
        // let rnd = getRndInteger(0, 2);
        // switch(rnd) {
        //   case 0:
        //     input.val(`欢迎${lastMsgName.text()}驾临直播间`);
        //     break;
        //   case 1:
        //     input.val(`老板${lastMsgName.text()}好久不见`);
        // }
        // input.focus();
        // chrome.runtime.sendMessage({
        //   send: true
        // }, res => {
        //   console.log(`发送弹幕 from tab: ${res}`);
        // })
      }
    }
  }
}
