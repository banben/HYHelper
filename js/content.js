window.addEventListener("load", myMain, false);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function myMain(evt) {
  // DO YOUR STUFF HERE.
  console.log("114 helper running!");
  console.log(window.location.href);

  let people;
  while (!people) {
    await sleep(200);
    people = document.querySelector('.v-card.clickable.item');
  }
  people.click();

  let verify;
  while (!verify) {
    await sleep(200);
    verify = document.querySelector('.sendText.v-link.highlight.clickable.selected');
  }
  verify.click();

  let card;
  while (!card) {
    await sleep(200);
    card = $('*[placeholder="请填写12位北京社保卡条码号"]');
  }
  card.val('110842486009');

  let sms;
  while (!sms) {
    await sleep(200);
    sms = $('*[placeholder="请输入短信验证码"]');
  }

  let smsLength = 0;
  while (smsLength !== 6) {
    await sleep(200);
    smsLength = sms.val().length;
  }

  let confirm;
  while (!confirm) {
    await sleep(200);
    confirm = $('div.v-button:contains("确认挂号")');
  }
  confirm.click();
  console.log(confirm);
}
