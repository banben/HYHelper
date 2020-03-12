window.addEventListener("load", myMain, false);

var interval;

function check() {
  var shengyu = document.querySelector('.v-button');
  console.log('check');
  if (shengyu.className === 'v-button' && shengyu.innerText.indexOf('确认挂号') === -1) {
    clearInterval(interval);
    execute();
  }
}

function checkConfirmPage() {
  if (document.URL.indexOf('submission') >= 0) {
    clearInterval(interval)
    document.querySelector('.v-card.clickable.item').click();
    document.querySelectorAll('input')[2].value = '110842486009';
    setTimeout(function (){

      // Something you want delayed.      
      document.querySelector('.sendText.v-link.highlight.clickable.selected').click()
      document.querySelectorAll('input')[1].focus();
      waitVerifyCode();
    
    }, 1000);
    
  }
}

function checkVerifyCode() {
  if (document.querySelectorAll('input')[1].value.length === 6) {
    clearInterval(interval);
    document.querySelector('.v-button').click();
  }
}

function waitVerifyCode() {
  interval = setInterval(checkVerifyCode, 1000);
}

function waitConfirmPage() {
  interval = setInterval(checkConfirmPage, 1000);
}

function execute() {
  var shengyu = document.querySelector('.v-button');
  shengyu.click();
  waitConfirmPage();
}

function myMain(evt) {

  // DO YOUR STUFF HERE.
  console.log("114 helper running!");
  console.log(window.location.href);
  console.log(document.URL);

  if (document.URL == "http://www.114yygh.com/hospital/142/0/200039568/source") {
    interval = setInterval(check, 1000);
  }

}
