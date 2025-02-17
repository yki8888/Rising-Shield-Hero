(function (win, $) {
  'use strict';

  var headerHeight = $('.gnb').height(),
      gnb = $('.nav ul'),
      submenu = $('.nav ul .dropdown_cont'),
      btn = '.nav_btn',
      section = $('.section'),
      subSection = $('.subsection')

  // GNB - current
  var gnbActive = function () {
    var section_act = function () {
      section.each(function (index, el) {
        var sct = $(window).scrollTop();
        var offsetTop = $(el).offset().top;

        if (sct + 90 >= offsetTop - headerHeight) {
          var id = $(el).attr('id');
          $(gnb).find(btn).removeClass('current', 'subsection');
          $(gnb).find(btn + '[href="#' + id + '"]').addClass('current');
        }
      });

      subSection.each(function (index, el) {
        var sct = $(window).scrollTop();
        var offsetTop = $(el).offset().top;

        if (sct + 90 >= offsetTop - headerHeight) {
          var id = $(el).attr('id');
         // console.log(id)
          $(submenu).find(btn).removeClass('current');
          $(submenu).find(btn + '[href="#' + id + '"]').addClass('current');
        }
      });
    }

    section_act();

    // subSection.each(function(index, el){
    //     var sct = $(window).scrollTop();
    //     var offsetTop = $(el).offset().top;
    //   }
    // )

    var scrollTimeout;
    $(window).scroll(function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        section_act();
      },100)
    });

    $(window).resize(function () {
      section_act();
      headerBackground();

    })
  }

  // Header elem. color
  var headerBackground = function(){
    var scroll = $(window).scrollTop();
    $('.section').each(function () {
      var $this = $(this);
      if ($this.position().top - headerHeight - 150 <= scroll && $this.position().top + $this.outerHeight() > scroll) {
        $('.gnb').removeClass(function (index, css) {
          return (css.match(/(^|\s)nav_\S+/g) || []).join(' ');
        });

        $('.gnb').addClass('nav_' + $(this).data('color'));
      }
    });
  }

  $(window).scroll(function (e) {
    headerBackground();
  });

  // Section - current
  var sectionActive = function(){
    var scroll = $(window).scrollTop();
    $('.section').each(function () {
      var $this = $(this)
      if ($this.position().top - headerHeight - 250 <= scroll && $this.position().top + $this.outerHeight() + 200 > scroll) {
      // $('.section').removeClass('current');
       $this.addClass('current');
      }
    });
  }

  $(window).scroll(function (e) {
    sectionActive();
  });


// Slide Feature - swiper option
    const featureSlide = new Swiper(".feature_slide", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 800,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: "#feature .swiper-pagination",
            type: "bullets",
            clickable: "true"
        },
        breakpoints: {
            1040: {
                slidesPerView: 1,
            },
        }
    });

  $(win).on('load', function () {
    gnbActive();
    headerBackground();
    sectionActive();
    //section_check()
  });

})(window, window.jQuery);

 // Slide Character - swiper option
const classSlide = new Swiper(".character_slide", {
  speed: 600,
  spaceBetween: 0,
  initialSlide: 0,
  autoHeight: false,
  direction: "horizontal",
  loop: true,
  autoplayStopOnLast: false,
  observer: true,
  observeParents: true,
  pagination: {
    el: "#character .swiper-pagination",
    type: "bullets",
    clickable: "true"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 0,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: true,
  slidesOffsetBefore: 0,
  breakpoints: {
    1040: {
      slidesPerView: 1,
    },
  }
}) 

 // Slide Character - swiper option
 const introSlide = new Swiper(".intro_slide", {
  speed: 600,
  spaceBetween: 0,
  initialSlide: 0,
  autoHeight: false,
  direction: "horizontal",
  loop: true,
  autoplayStopOnLast: false,
  observer: true,
  observeParents: true,
  pagination: {
    el: "#intro .swiper-pagination",
    type: "bullets",
    clickable: "true"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 0,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: true,
  slidesOffsetBefore: 0,
  breakpoints: {
    1040: {
      slidesPerView: 1,
    },
  }
}) 

 // Slide Character - swiper option
 const gameSlide = new Swiper(".game_slide", {
  speed: 600,
  spaceBetween: 0,
  initialSlide: 0,
  autoHeight: false,
  direction: "horizontal",
  loop: true,
  autoplayStopOnLast: false,
  observer: false,
  observeParents: true,
  pagination: {
    el: "#game .swiper-pagination",
    type: "bullets",
    clickable: "true"
  },
  navigation: {
    nextEl: '#game .swiper-button-next',
    prevEl: '#game .swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 0,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: true,
  slidesOffsetBefore: 0,
  breakpoints: {
    1040: {
      slidesPerView: 1,
    },
  }
}) 

var swiper = new Swiper(".mySwiper", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 6,
  initialSlide: 3,
	freeMode: true,
	watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
	loop: true,
	spaceBetween: 10,
  initialSlide: 3,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
  });

/***************
FLOATING BANNER
****************/
// banner hide-show
/**
const banner = document.querySelector('.floating_banner');
const btnBanner = document.querySelector('.btn_hide');

btnBanner.addEventListener("click",function(){
  if(banner.classList.contains('show')){
    banner.classList.remove('show');
    banner.classList.add('hide');
    btnBanner.innerText = `◀`;
  }else{
    banner.classList.remove('hide');
    banner.classList.add('show');
    btnBanner.innerText = `▶`;
  }
})
**/

/***************
EVENT POPUP
****************/
const popupMask = document.querySelector('#pop_bg');
const popup = document.querySelector('#pop_wrap');
const prePopup = document.querySelector('#Obtainable');
const essenPopup = document.querySelector('#wrap_pop_essential');
const colecPopup = document.querySelector('#wrap_pop_collection');
const votenoticePopup = document.querySelector('#wrap_pop_vote_notice');

const allClose = ( ) => {
  popupMask.classList.remove('show');
  popup.classList.remove('show');
  prePopup.classList.remove('show');
  essenPopup.classList.remove('show');
  colecPopup.classList.remove('show');
  votenoticePopup.classList.remove('show');
}

/***************
AIR DROP CHECK
****************/
const btnJoin = document.querySelector('.airdrop_on > a');
const btnNo = document.querySelector('.airdrop_no > a');
const btnpreJoin = document.querySelector('.pre_on > a');
const btnpreNo = document.querySelector('.pre_no > a');
const checkPopup = document.querySelector('#checked_wrap');
const checkTxt = document.querySelector('.check_txt');
const popupMes = {
  notChecked : "필수 동의 체크해주시길 바랍니다",
  checked : "사전예약이 완료 되었습니다",
  dwnMobile : "You can download 'Astel of Atra’ on your PC.",
}
const body = document.getElementsByTagName('body')[0];

if(btnJoin){
    btnJoin.addEventListener('click', function(){
      const checkAgree = document.querySelector('input[name=check_agree]').checked ; //true

      if(!checkAgree){
          checkTxt.innerText = popupMes.notChecked;
          console.log(checkTxt.innerText)
      }else{
        checkTxt.innerText = popupMes.checked;
        window.open('https://gleam.io/uIeUF/astel-of-atra-global-air-drop');
      }
    })
}

// if(btnNo){
//     btnNo.addEventListener('click', function(){
//       alert("coming soon!");
//     })
// }

// if(btnpreJoin){
//   btnpreJoin.addEventListener('click', function(){
//     const checkpreAgree = document.querySelector('input[name=pre_check_agree]').checked ; //true

//     if(!checkpreAgree){
// 		body.classList.add('scrollLock');
//         checkTxt.innerText = popupMes.notChecked;
//         console.log(checkTxt.innerText)
//     }else{
//   $.ajax({
//     url: "./pre_check.php",
//     data: { tracking: "OK"},
//     method: "POST",
//     dataType : "json"
//   }).always(function(xhr, status) {
//     console.log("pre OK!");
//   });
// 	  body.classList.remove('scrollLock');
//       checkPopup.style.display = 'none';
//       window.open('https://discord.com/invite/dEvQru2rtD');
//     }
//   }
// )}

function closePopup() {
  const notCheckclose = document.getElementById('checked_wrap');
  const obCheckclose = document.getElementById('Obtainable');
  const Downclose = document.getElementById('down_wrap');
  const body = document.getElementsByTagName('body')[0];

  if(notCheckclose.style.display !== 'none') {
    notCheckclose.style.display = 'none';
	body.classList.remove('scrollLock');
  }

  if(obCheckclose.style.display !== 'none') {
    obCheckclose.style.display = 'none';
	body.classList.remove('scrollLock');
  }

  if(Downclose.style.display !== 'none') {
    Downclose.style.display = 'none';
	body.classList.remove('scrollLock');
  }
}

function openPopup(){
  const checkPopup = document.getElementById("checked_wrap");

  if(checkPopup.style.display=='block'){
    checkPopup.style.display = 'none';
  }else{
    checkPopup.style.display = 'block';
  }
}

function obopenPopup(){
const obPopup = document.getElementById("Obtainable");

  if(obPopup.style.display=='block'){
    obPopup.style.display = 'none';
  }else{
    obPopup.style.display = 'block';
  }
}

function downPopup(){
	location.href='./game_download.php';
}
/*
$('.btn_apply').click(function() {
  var essentialCheckboxes = $('.checklist');
  var descPlease = $('#desc_please');
  var wrapPopCheckPlease = $('#wrap_pop_check_please');

  // 모든 필수 항목이 체크되었는지 확인
  var allChecked = essentialCheckboxes.filter(':checked').length === essentialCheckboxes.length;

  if (allChecked) {
    // 모든 필수 항목이 체크된 경우
    descPlease.text('사전예약이 완료 되었습니다');
    wrapPopCheckPlease.show();
  } else {
    // 필수 항목 중 하나 이상이 체크되지 않은 경우
    descPlease.text('모든 필수 동의 체크를 해주시길 바랍니다');
  }
});
*/
function reserveOnSubmit(f) {

    var essentialCheckboxes = $('.checklist');
    var descPlease = $('#desc_please');
    var wrapPopCheckPlease = $('#wrap_pop_check_please');

    // 모든 필수 항목이 체크되었는지 확인
    var allChecked = essentialCheckboxes.filter(':checked').length === essentialCheckboxes.length;
    var phone = $('#completed1').val();

    if (!allChecked) {
        // 필수 항목 중 하나 이상이 체크되지 않은 경우
        descPlease.text('모든 필수 동의 체크를 해주시길 바랍니다');
        wrapPopCheckPlease.show();
        return false;
    } else if (phone == null || phone == '') {
        // 미인증
        descPlease.text('본인인증을 해주시기 바랍니다');
        wrapPopCheckPlease.show();
        return false;
    } else {
        // 모든 필수 항목이 체크된 경우
        //descPlease.text('사전예약이 완료 되었습니다');
        //wrapPopCheckPlease.show();
        return true;
    }
}



// 팝업을 열고 내용을 설정하는 함수
/**
function openPopup(content, imageUrl, holdingVotes, votesNum) {
  const popup = document.getElementById('vote_popup');
  const contentElement = document.querySelector('.font-m');
  const imageElement = document.querySelector('.pop_pmj');
  const holdingVotesElement = document.getElementById('holding_v_num');
  const votesNumElement = document.getElementById('votes_num');

  contentElement.textContent = content;
  imageElement.src = imageUrl;
  holdingVotesElement.textContent = holdingVotes;
  votesNumElement.textContent = votesNum;
  document.getElementById('input_num').value = votesNum;

  popup.style.display = 'block';
}
**/
// 각 버튼에 클릭 이벤트를 연결
/**
document.getElementById('button1').addEventListener('click', function() {
  openPopup('버튼 1을 클릭하셨습니다.', './images/pop_pmj.png', 100, 1);
});

document.getElementById('button2').addEventListener('click', function() {
  openPopup('버튼 2를 클릭하셨습니다.', './images/pop_pmj.png', 75, 1);
});

document.getElementById('button3').addEventListener('click', function() {
  openPopup('버튼 3를 클릭하셨습니다.', './images/pop_pmj.png', 123, 1);
});

document.getElementById('button4').addEventListener('click', function() {
  openPopup('버튼 4를 클릭하셨습니다.', './images/pop_pmj.png', 789, 1);
});

document.getElementById('button5').addEventListener('click', function() {
  openPopup('버튼 5를 클릭하셨습니다.', './images/pop_pmj.png', 55, 1);
});

document.getElementById('button6').addEventListener('click', function() {
  openPopup('버튼 6를 클릭하셨습니다.', './images/pop_pmj.png', 66, 1);
});

document.getElementById('button7').addEventListener('click', function() {
  openPopup('버튼 7를 클릭하셨습니다.', './images/pop_pmj.png', 77, 1);
});

document.getElementById('button8').addEventListener('click', function() {
  openPopup('버튼 8를 클릭하셨습니다.', './images/pop_pmj.png', 88, 1);
});

document.querySelector('.btn_up').addEventListener('click', function() {
  const inputNumElement = document.getElementById('input_num');
  let votesNum = parseInt(inputNumElement.value, 10) || 0;
  const holdingVotes = parseInt(document.getElementById('holding_v_num').textContent, 10) || 0;

  if (votesNum < holdingVotes) {
      votesNum++;
      inputNumElement.value = votesNum;
      document.getElementById('votes_num').textContent = votesNum;
  }
});

document.querySelector('.btn_down').addEventListener('click', function() {
  const inputNumElement = document.getElementById('input_num');
  let votesNum = parseInt(inputNumElement.value, 10) || 0;

  if (votesNum > 0) {
      votesNum--;
      inputNumElement.value = votesNum;
      document.getElementById('votes_num').textContent = votesNum;
  }
});

document.getElementById('useall').addEventListener('change', function() {
  const votesNumElement = document.getElementById('votes_num');
  const holdingVotesElement = document.getElementById('holding_v_num');
  const inputNumElement = document.getElementById('input_num');

  if (this.checked) {
      votesNumElement.textContent = holdingVotesElement.textContent;
      inputNumElement.value = holdingVotesElement.textContent;
  } else {
      votesNumElement.textContent = '1';
      inputNumElement.value = '1';
  }
});


function closevotePopup() {
  const vpopup = document.getElementById('vote_popup');
  vpopup.style.display = 'none';

  document.getElementById('useall').checked = false;
}

document.querySelector('.check_close a').addEventListener('click', closevotePopup);


document.getElementById('useall').addEventListener('change', function() {
  console.log('체크박스 변경: ' + this.checked);
  const votesNumElement = document.getElementById('votes_num');
  const holdingVotesElement = document.getElementById('holding_v_num');

  if (this.checked) {
    const holdingVotes = parseInt(holdingVotesElement.textContent, 10) || 0;
    votesNumElement.textContent = holdingVotes;
    document.getElementById('input_num').value = holdingVotes;
  } else {

  }
});


document.querySelector('.btn_pop_ok').addEventListener('click', function() {
  $('#wrap_pop_vote_clear').show();
  closevotePopup();
}); **/

function downpopup(link, target) {
  const mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson', 'Mobile');
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); // iphone 지원 이슈
  const DownPopup = document.getElementById("down_wrap");
  const body = document.getElementsByTagName('body')[0];
  console.log(navigator.userAgent)
  for (let info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null
      || isIOS ) {
        console.log('모바일')
        DownPopup.style.display = 'block';
    body.classList.add('scrollLock');
        return;
      }else{
        console.log('PC')
        if(target === 1){
           location.href=link;
        }else{
          window.open(link)
        }
        return;
      }
  }
} 

// "Share" 링크 요소를 가져옵니다.
const shareLink = document.getElementById('share');

// "cont_share_2" 요소를 가져옵니다.
const contShare2 = document.querySelector('.cont_share_2');

// "Share" 링크를 클릭하면 "cont_share_2"를 표시합니다.
shareLink.addEventListener('click', function(event) {
  // 기본 동작(링크 이동)을 막습니다.
  event.preventDefault();

  // "cont_share_2"를 표시합니다.
  contShare2.style.display = 'flex';
});

// 문서의 다른 영역을 클릭하면 "cont_share_2"를 숨깁니다.
document.addEventListener('click', function(event) {
  // 클릭된 요소가 "Share" 링크, "cont_share_2", 또는 "btn_top"이 아닌 경우 "cont_share_2"를 숨깁니다.
  if (event.target !== shareLink && !contShare2.contains(event.target) && !event.target.classList.contains('btn_top')) {
    contShare2.style.display = 'none';
  }
});

/** document.addEventListener("DOMContentLoaded", function () {
  let select = document.getElementById("sortSelect");
  select.value = "1";
  let event = new Event("change", {
    bubbles: true,
    cancelable: true,
  });
  select.dispatchEvent(event);
});


document.getElementById("sortSelect").addEventListener("change", function () {

});


  document.getElementById('sortSelect').addEventListener('change', function() {
    let select = this;
    let selectedValue = select.value;


    let influencerBoxes = document.querySelectorAll('.influencer_box');
    let influencerArray = Array.from(influencerBoxes);


    if (selectedValue === '1') { 
      influencerArray.sort(function(a, b) {
        let numberA = parseInt(a.querySelector('.inf_number').textContent.replace(',', ''));
        let numberB = parseInt(b.querySelector('.inf_number').textContent.replace(',', ''));
        return numberB - numberA;
      });
    } else if (selectedValue === '2') { // 가나다순
      influencerArray.sort(function(a, b) {
        let nameA = a.querySelector('.inf_name').textContent;
        let nameB = b.querySelector('.inf_name').textContent;
        return nameA.localeCompare(nameB);
      });
    }

    let influencerContainer = document.querySelector('.vote_flex');
    influencerContainer.innerHTML = '';
    influencerArray.forEach(function(influencer) {
      influencerContainer.appendChild(influencer);
    });
  }); **/

$(document).ready(function(){
    // 초기 설정: 모든 항목을 숨김
    $('.mypage, .desc_v_status, .desc_a_status, .desc_ifl_manage').hide();

    // 로그인 버튼 클릭 시 마이페이지 보이기
    $('.btn_login').click(function() {
      $('.mypage').show();
	   $('.btn_v_status').click(); // v_status 클릭 이벤트 트리거
    });

    // 각 버튼 클릭 시 해당하는 상태 보이기 및 색상 변경
    $('.btn_v_status').click(function() {
        $('.desc_v_status').show();
        $('.desc_a_status, .desc_ifl_manage').hide();
        $('#decs_p_ev').css('color', '#0f95e2').css('border-bottom', '5px solid #0f95e2').css('padding-bottom', '15px');  // 버튼 v_status 클릭 시 색상 변경
		$('#decs_c_ev').css('color', '').css('border-bottom', '').css('padding-bottom', '');
		$('#decs_f_ev').css('color', '').css('border-bottom', '').css('padding-bottom', '');
	});

    $('.btn_a_status').click(function() {
        $('.desc_a_status').show();
        $('.desc_v_status, .desc_ifl_manage').hide();
        $('#decs_c_ev').css('color', '#0f95e2').css('border-bottom', '5px solid #0f95e2').css('padding-bottom', '15px');  // 버튼 a_status 클릭 시 색상 초기화
		$('#decs_p_ev').css('color', '').css('border-bottom', '').css('padding-bottom', '');
		 $('#decs_f_ev').css('color', '').css('border-bottom', '').css('padding-bottom', '');
	});

    $('.btn_ifl_manage').click(function() {
        $('.desc_ifl_manage').show();
        $('.desc_v_status, .desc_a_status').hide();
        $('#decs_f_ev').css('color', '#0f95e2').css('border-bottom', '5px solid #0f95e2').css('padding-bottom', '15px');  // 버튼 ifl_manage 클릭 시 색상 초기화
		$('#decs_p_ev').css('color', '').css('border-bottom', '').css('padding-bottom', '');
		$('#decs_c_ev').css('color', '').css('border-bottom', '').css('padding-bottom', '');
	});

    // 코드 저장하기 버튼 클릭 시 코드 저장 로직 추가
    $('.btn_ifl_clear').click(function() {
      // 코드 저장 로직을 여기에 추가
    });
});

$(document).ready(function(){
    // 초기 설정: 모든 항목을 숨김
    $('.mypage_2, .desc_v_status, .desc_a_status, .desc_ifl_manage').hide();

    // 로그인 버튼 클릭 시 마이페이지 보이기
    $('.btn_login_m').click(function() {
      $('.mypage_2').show();
	   $('.btn_v_status').click(); // v_status 클릭 이벤트 트리거
    });

    // 각 버튼 클릭 시 해당하는 상태 보이기 및 색상 변경
    $('.btn_v_status').click(function() {
        $('.desc_v_status').show();
        $('.desc_a_status, .desc_ifl_manage').hide();
        $('#decs_p_ev_2').css('color', '#0f95e2').css('border-bottom', '5px solid #0f95e2').css('padding-bottom', '15px');  // 버튼 v_status 클릭 시 색상 변경
		$('#decs_c_ev_2').css('color', '').css('border-bottom', '').css('padding-bottom', '');
		$('#decs_f_ev_2').css('color', '').css('border-bottom', '').css('padding-bottom', '');
	});

    $('.btn_a_status').click(function() {
        $('.desc_a_status').show();
        $('.desc_v_status, .desc_ifl_manage').hide();
        $('#decs_c_ev_2').css('color', '#0f95e2').css('border-bottom', '5px solid #0f95e2').css('padding-bottom', '15px');  // 버튼 a_status 클릭 시 색상 초기화
		$('#decs_p_ev_2').css('color', '').css('border-bottom', '').css('padding-bottom', '');
		 $('#decs_f_ev_2').css('color', '').css('border-bottom', '').css('padding-bottom', '');
	});

    $('.btn_ifl_manage').click(function() {
        $('.desc_ifl_manage').show();
        $('.desc_v_status, .desc_a_status').hide();
        $('#decs_f_ev_2').css('color', '#0f95e2').css('border-bottom', '5px solid #0f95e2').css('padding-bottom', '15px');  // 버튼 ifl_manage 클릭 시 색상 초기화
		$('#decs_p_ev_2').css('color', '').css('border-bottom', '').css('padding-bottom', '');
		$('#decs_c_ev_2').css('color', '').css('border-bottom', '').css('padding-bottom', '');
	});

    // 코드 저장하기 버튼 클릭 시 코드 저장 로직 추가
    $('.btn_ifl_clear').click(function() {
      // 코드 저장 로직을 여기에 추가
    });
});


  $(document).ready(function(){
    // 클릭 이벤트 처리
    $('.btn_link').click(function() {
      // 복사할 텍스트 가져오기
      var textToCopy = "https://supergirlsbattle.co.kr"; // 여기에 복사하고 싶은 링크를 넣어주세요

      // 텍스트를 클립보드에 복사
      var tempInput = document.createElement("input");
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // 복사가 완료되면 wrap_pop_link_save를 보이도록 설정
      $('#wrap_pop_link_save').show();
    });
  });

/***************
01. INTRO
****************/

// Click - intro
/*
const btnPlay = document.querySelector('.btn_play');
const btnMuted = document.querySelector('.btn_muted');
const video = document.querySelector('.video');
const crcOuter = document.querySelector('.crcl_outer');
const crcInner = document.querySelector('.crcl_inner');

btnPlay.addEventListener('click', function(){
  document.querySelector('.gnb').classList.add('hidden');
  document.querySelector('.mask').classList.add('hidden');
  document.querySelector('.intro_box').classList.add('hidden');
  document.querySelector('.btn_play').classList.add('hidden');
  video.muted = false;
  btnMuted.classList.remove('hidden');

  if (window.innerWidth < 1240) {
    video.style.width="100vw";
    btnPlay.style.cursor = "auto"
    btnPlay.style.crcOuter = "auto"
    btnPlay.style.crcInner = "auto"
  }
  video.setAttribute("controls", "true")
});

btnMuted.addEventListener('click', function(){
  document.querySelector('.gnb').classList.remove('hidden');
  document.querySelector('.mask').classList.remove('hidden');
  document.querySelector('.intro_box').classList.remove('hidden');
  document.querySelector('.btn_play').classList.remove('hidden');
  video.muted = true;
  if (window.innerWidth < 1240) {
    video.style.width="auto";
  }
  btnMuted.classList.add('hidden');
});
*/

const openPopDetail = (route) =>{
    window.open(route, '0', 'left=500,top=200,width=400,height=700');
}

function pageRefresh(){
    window.location.reload();
}

const popupVideoMask = document.querySelector('.popup_video_mask');

const openYoutube = (youtubeID) => {
	popupVideoMask.style.display = 'flex'; 	
	showYouTubeVideo(youtubeID)
}

const closeYoutube = () =>{
  popupVideoMask.style.display = 'none'; 	
  hideYouTubeVideo();
}


const showYouTubeVideo = (youtubeID) => {
	const vidioWrap = document.querySelector('#youtubePlayer');
	const youtube = `<iframe src="https://www.youtube.com/embed/${youtubeID}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
	vidioWrap.innerHTML = youtube;

}

const hideYouTubeVideo = () => {
	const vidioWrap = document.querySelector('#youtubePlayer');
	const youtube = "";
	vidioWrap.innerHTML = youtube;
}

document.querySelectorAll('.btn_overflow').forEach(function(btn){
	btn.addEventListener('click', function(){
		$('body').css('overflow', 'hidden');
	})
})

document.querySelectorAll('.btn_overhide').forEach(function(btn){
	btn.addEventListener('click', function(){
		if(window.innerWidth > 1024){
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'auto');
		}
	});
});

/***************
HEADER - mobile
****************/
// Click Mobile Navigation
const openMobileNav = document.querySelector('.btn_nav_open');
const closeMobileNav = document.querySelector('.btn_nav_close');
const mobileNav = document.querySelector('.m_nav');
const myPageButton = document.querySelector('.btn_login_m'); // 마이페이지 버튼 선택
let isMyPageButtonActive = false; // 마이페이지 버튼의 활성화 상태 추적

openMobileNav.addEventListener('click', function(){
  mobileNav.classList.add('active');
});

closeMobileNav.addEventListener('click', function(){
  mobileNav.classList.remove('active');
});

// 마이페이지 버튼 클릭 시
/*
myPageButton.addEventListener('click', function(event){
  event.stopPropagation();
  isMyPageButtonActive = true;
  mobileNav.classList.add('active');
});
*/
/*
closeMobileNav.addEventListener('click', function(){
  if (!isMyPageButtonActive) { // 마이페이지 버튼이 활성화되지 않았다면
    mobileNav.classList.remove('active');
  }
  isMyPageButtonActive = false; // 마이페이지 버튼 상태 초기화
});

mobileMenus.forEach(function(menu){
  menu.addEventListener('click', function(){
    if (!isMyPageButtonActive) { // 마이페이지 버튼이 활성화되지 않았다면
      mobileNav.classList.remove('active');
    }
    isMyPageButtonActive = false; // 마이페이지 버튼 상태 초기화
  });
});
*/

/***************
07. Character
****************/
// 오디오

let track = new Audio();
let plag = 0;

const playVoice = (audioSrc) =>{
	track.src = audioSrc;
	console.log(track.paused)

	if(plag === 0){
		plag = 1;
		playAudio();
	}else{
		plag = 0;
		stopAudio()
	}	
}

const playAudio = () => {
	track.play();
	track.paused = false
	iconAnimation("play");
}

const stopAudio = () => {
	track.pause();
    track.currentTime = 0;
	iconAnimation("stop");
}

track.addEventListener('ended', function() {
  	iconAnimation();
});

const iconVoice = document.querySelectorAll('.icon_voice');

const iconAnimation = (status) =>{

	iconVoice.forEach(function(icon){
		if(status === "play"){
			icon.classList.add('play');
		}else{
			icon.classList.remove('play');	  
		}
	})
}


classSlide.on('slideChange', function () {
	//alert(11)
	plag = 0;
	iconAnimation("stop");
	stopAudio();
});

// 우편번호 찾기 레이어 숨김 함수를 전역 스코프에 정의
function closeDaumPostcode() {
    document.getElementById('postcode-layer').style.display = 'none';
	document.getElementById('postcode-wrap').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // 체크박스와 관련된 로직 - 주소 입력 팝업
    var checkbox = document.getElementById('v_ch');
    var submitButton = document.querySelector('#wrap_pop_event_address .btn_pop_ok_ch');

    checkbox.addEventListener('change', function() {
        submitButton.disabled = !this.checked;
    });

    // 체크박스와 관련된 로직 - 이메일 입력 팝업
	var checkbox2 = document.getElementById('v_ch2');
    var submitButton2 = document.querySelector('#wrap_pop_event_email .btn_pop_ok_ch');

    checkbox2.addEventListener('change', function() {
        submitButton2.disabled = !this.checked;
    });

    // 우편번호 검색 버튼 관련 로직
    document.querySelector('.btn_add').addEventListener('click', function() {
        document.getElementById('postcode-layer').style.display = 'block';
		document.getElementById('postcode-wrap').style.display = 'flex';

        new daum.Postcode({
            oncomplete: function(data) {
                document.getElementById('address').value = data.zonecode;
                document.getElementById('address_2').value = data.roadAddress;
                document.getElementById('address_3').focus();
                closeDaumPostcode();
            },
            onclose: function(state) {
                closeDaumPostcode();
            },
            width: '100%',
            height: '100%',
            maxSuggestItems: 5
        }).embed(document.getElementById('postcode-layer'));
    });

    // '닫기' 버튼에 대한 이벤트 리스너 추가
    var btnCloseLayer = document.getElementById('btnCloseLayer');
    if (btnCloseLayer) {
        btnCloseLayer.addEventListener('click', closeDaumPostcode);
    }

    // 휴대폰 번호 필드에서 숫자만 입력되도록 하는 로직
    var phoneInput = document.getElementById('v_phone');
    phoneInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//사전예약 올 체크 박스
document.addEventListener('DOMContentLoaded', function() {
  const agreeAllCheckbox = document.getElementById('agree_all');
  const agreeCheckboxes = document.querySelectorAll('.check_agree input[type="checkbox"]');
  const btnAdvance = document.getElementById('btn_advance');
  
  agreeCheckboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          const allChecked = Array.from(agreeCheckboxes).every(function(cb) {
              return cb.checked;
          });
          agreeAllCheckbox.checked = allChecked;
      });
  });
  
  // agree_all 체크박스의 변경 이벤트 리스너
  agreeAllCheckbox.addEventListener('change', function() {
      agreeCheckboxes.forEach(function(checkbox) {
          checkbox.checked = agreeAllCheckbox.checked;
      });
  });
});

// 개인정보 수집 이용 동의 팝업 텍스트 변경
function changePopTitle(newTitle) {
  document.querySelector('.pop-ttl').innerText = newTitle;
  document.getElementById('pop_policy').style.display = 'flex';
}

// 개인정보 수집 이용 동의 팝업 텍스트 변경
document.querySelector('.btn_event_essential').addEventListener('click', function() {
  changePopTitle('개인정보 수집·이용 동의');
});

document.querySelector('.btn_event_select').addEventListener('click', function() {
  changePopTitle('이벤트, 프로모션 등 알림 수신 동의');
});

// 이벤트 공통 팝업
document.querySelectorAll('.btn_event_notice').forEach(function(button) {
  button.addEventListener('click', function() {
    document.getElementById('popup_event_common').style.display = 'flex';
  });
});


// 사전예약 완료 팝업
document.querySelector('.btn_apply').addEventListener('click', function() {
  document.getElementById('popup_advance_complete').style.display = 'flex';
});

// 친구초대 링크 만들기 팝업
document.querySelector('.btn-invitation-link2').addEventListener('click', function() {
  document.getElementById('popup_invite_complete').style.display = 'flex';
});

// 초대한 친구 수 팝업
document.querySelector('.btn-invitation-ok2').addEventListener('click', function() {
  document.getElementById('popup_friend').style.display = 'flex';
});

// 공통 팝업 클릭보드 링크 복사
document.querySelectorAll('.btn_link_copy').forEach(function(button) {
  button.addEventListener('click', function() {
    document.getElementById('pop_desc').style.display = 'flex';
    
    const messageElement = document.querySelector('.desc_pop_common');
    messageElement.textContent = '주소가 복사되었습니다. 원하는 곳에 붙여넣기(Ctrl+V) 해주세요.';

    const linkToCopy = 'https://www.shieldhero.itoxi.co.kr/';
    navigator.clipboard.writeText(linkToCopy).then(function() {
        console.log('링크가 클립보드에 복사되었습니다.');
    }).catch(function(err) {
        console.error('클립보드 복사에 실패했습니다: ', err);
    });
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.btn_apply').addEventListener('click', function() {
//     const phoneInput = document.getElementById('num_phone').value;
//     const agreeAge = document.getElementById('agree_age').checked;
//     const popupDesc = document.getElementById('popup_desc');
//     const popupMessage = document.getElementById('popup_message');
//     const popupAdvanceComplete = document.getElementById('popup_advance_complete');
//     const phoneValid = phoneInput.length === 8;

//     if (!phoneInput && !(agreeAge)) {
//       popupMessage.textContent = "휴대폰 번호 입력 및 필수 동의를 확인 해주세요.";
//       popupDesc.style.display = 'flex';
//       document.body.style.overflow = 'hidden';
//     } else if (!phoneValid && (agreeAge)) {
//       popupMessage.textContent = "전화번호 형식이 다릅니다. 다시 입력해 주세요.";
//       popupDesc.style.display = 'flex';
//       document.body.style.overflow = 'hidden';
//     } else if (!(agreeAge)) {
//       popupMessage.textContent = "필수 동의를 확인 해주세요.";
//       popupDesc.style.display = 'flex';
//       document.body.style.overflow = 'hidden';
//     } else if (!phoneInput) {
//       popupMessage.textContent = "휴대번호를 입력해주세요.";
//       popupDesc.style.display = 'flex';
//       document.body.style.overflow = 'hidden';
//     } else {
//       popupAdvanceComplete.style.display = 'flex';
//       document.body.style.overflow = 'hidden';
//     }
//   });
// });

// 각 카드 버튼 클릭 시 pop_char 팝업을 표시하고 정보 업데이트
document.querySelectorAll('.card_num_1, .card_num_2, .card_num_3, .card_num_4, .card_num_5, .card_num_6, .card_num_7, .card_num_8').forEach(function(button) {
  button.addEventListener('click', function() {
    let charImageSrc, charName, charDesc;

    // 버튼 클래스에 따라 정보 설정
    switch (this.classList[1]) {
      case 'card_num_1':
        charImageSrc = './images_char/char_pop_1.png';
        charName = '이와타니 나오후미';
        charDesc = ` ● 저는 원래 평범한 대학생이었어요. 음… 오타쿠라고 해도 부정하지 않을게요.
        마을 도서관에서 《사성무기서》를 읽고 있었는데, 갑자기 이세계로 소환되어
        책 속의 인물이 되어버렸어요… &quot;방패 용사&quot;라니?!
        <br />
        정말로 이세계에 오다니! 이세계라니 뭔가 굉장한 것 같지만, 왜 하필 방패
        용사인 거죠! 손에는 버릴 수도 없는 방패만 있고, 공격력이 0이라니… 내
        미래가 좀 걱정되네요…
        <br />
        ● 따돌림당하고, 누명을 쓰고… 모든 것을 잃은 비참한 상태에서 혼자서 모험을
        떠났어요. 방어력은 강하지만 공격력이 부족하고, 그 때문에 몬스터를
        쓰러뜨리지 못하고, 그래서 경험치를 얻지 못하고, 경험치를 얻지 못해서
        강해지지 못하는, 이 싫은 반복… 파티를 구성하는 수밖에 없나요… 하지만 이
        나라의 사람들은 전혀 믿을 수가 없어요. 그렇다면 언제든지 배신할 수 있는
        이른바 &quot;동료&quot;보다는, 차라리 &quot;배신할 수 없는&quot;…… ● 이럴
        수가! 전 세계 사람들이 터무니없는 죄명으로 저를 비난하고 있어요! 나는 분명
        무고한데, 왜 아무도 나를 믿지 않는 거죠! …… 라프타리아, 방금 뭐라고 했어……
        너는 나를 믿는다고……? 이건 내가 계속 듣고 싶었던 말이에요. 아니,
        라프타리아는 줄곧…… ● 이세계에서 온…… 용사? 그들의 목표가…… 나라고!? 이
        &quot;파도&quot;의 뒤에 있는 진실은 대체 뭐지? …… 안 돼, 여기서 주저할
        수는 없어! 왜냐하면 이 세계에는 라프타리아, 피트리아, 그리고 메르티가
        있으니까, 나는 파도와 싸울 의미를 찾았어! 반드시 방패 용사로서, 파도를
        이겨내고 이 세계를 지켜내겠어!`;
      break;

      case 'card_num_2':
        charImageSrc = './images_char/char_pop_2.png';
        charName = '라프타리아';
        charDesc = `● 아빠, 엄마, 이제 더 이상 울지 않을 거예요…… 이렇게 차갑고 습한 지하 감옥에
        있어도…… 리파나, 괜찮아. 방패 용사님이 분명 우리를 구해줄 거야…… 우리는 분명
        여기서 나갈 수 있을 거야! 리파나? 리파나? 나를 떠나지 말아줘…… ● 너 같은
        비열한 인간, 내가 언제 너한테 구해달라고 했냐? &quot;창의 용사&quot;라는
        이름을 믿고 자만하지 마, 너는 나오후미 님을 이해하고 있기는 해? 나오후미 님은
        내가 원하지 않는 일을 강요하지 않아, 피곤하면 쉬게 해줘…… 너는 병에 걸려 언제
        죽을지 모르는 하인을 돕겠다고 할 수 있겠어? 너는 할 수 있겠어? ● 나는 이
        세상에서 나오후미 님을 가장 잘 아는 사람이야, 나오후미 님의 따뜻함을 알아!
        그래서 세상이 전부 나오후미 님을 비난하더라도, 나는 그게 아니라고 말할 거야……
        계속해서 모두에게 나오후미 님이 좋은 분이라고 말할 거야! 내 목숨을 구해주고,
        나에게 검을 주고, 살아갈 의미를 주신 분은 나오후미 님이야! 나는 나오후미 님의
        검, 어떤 고난이 닥쳐도 나오후미 님을 따를 거야! ● 요즘 필로가 정말로 나오후미
        님에게 너무 들러붙어! 메르티도 그래! 나오후미 님은 정말…… 너무 둔해! 그게 또
        나오후미 님의 매력이기도 하지만…… 아, 나 대체 무슨 생각을 하고 있는 거지!`;
      break;

      case 'card_num_3':
        charImageSrc = './images_char/char_pop_3.png';
        charName = '필로';
        charDesc = `● 필로의 주인은 방패 용사 이와타니 나오후미 님이에요~
        <br />
        필로는 주인님이 알에서 부화시켜줬어요~ 주인님은 필로에게 정말 잘해줘요~
        <br />
        예쁜 옷도 사주고, 맛있는 밥도 만들어줘요~
        <br />
        함께 놀아주기도 해요! 있잖아, 주인님, 필로 귀엽죠?
        <br />
        필로는 계속 주인님과 함께 있을 거예요~ 필로는 주인님을 제일 좋아해요!
        <br />
        <br />
        ● 필로의 마법은 바람 속성이에요♫ 적들을 하늘로 날려버릴 수 있어요!
        <br />
        필로의 일은 마차를 끄는 거예요♬ 주인님이 정해준 곳으로 가는 거예요!
        <br />
        창을 든 사람이 보이면♫ 그냥 꽉 차버릴 거예요!
        <br />
        <br />
        ● 메르티짱은 나쁜 짓을 한 게 아닌데,
        <br />
        주인님은 왜 그녀에게 그렇게 냉정하게 대하는 거예요? 왜 쫓아낸 거죠?
        <br />
        왜, 왜, 왜요?
        <br />
        메르티짱은 필로를 잘 대해줬어요, 필로는 메르티짱이 좋아요!
        <br />
        비록 함께 여행하지 못해도……
        <br />
        메르티짱은 필로의 영원한 최고의 친구예요!
        <br />
        <br />
        ● 나는 반드시 메르티짱을 구해낼 거예요, 그리고 피트리아에게 절대 지지 않을
        거예요!
        <br />
        하지만…… 너무 강해요! 피트리아는 지금의 필로보다 훨씬 강해요……
        <br />
        강력한 필살기가 쉽게 파훼당하고 말았어요…… 이대로 가면 이길 희망이 없어요.
        <br />
        주인님…… 필로는 어떻게 해야 하죠……
        <br />
        안 돼, 포기할 수 없어요, 필로는 아직 지지 않았어요……
        <br />
        주인님, 필로는 더 강해질 거예요……
        <br />
        주인님도…… 메르티짱도…… 라프타리아 언니도…… 필로는 모두를 지킬 수 있을 만큼
        강해질 거예요! 그러니까, 절대 지지 않을 거예요!`;
      break;

      case 'card_num_4':
        charImageSrc = './images_char/char_pop_4.png';
        charName = '메르티';
        charDesc = ` ● 어머니께서 또 화가 나셨어요. 방금 들어온 국내 정보 때문인가요?
        <br />
        아버지는 여전히 어머니의 충고를 듣지 않으시는군요.
        <br />
        방패 용사님에 대해 편견을 가지고 계시다니…… 그렇다면 제가 가서 아버지를
        설득하겠어요!
        <br />
        이것이 왕위를 계승할 사람의 책무니까요!
        <br />
        <br />
        ● 말을 하는 필로리알!
        <br />
        말하는 필로리알은 처음 봐요. 필로리알과 대화하는 게 제 꿈이었어요!
        <br />
        깃털이 폭신폭신…… 정말 귀여워요!
        <br />
        작은 필로, 나는 메르티야. 우리 친구하자!
        <br />
        <br />
        ● 저는 메르로마르크국 왕국의 제2왕녀, 메르티 멜로마르크입니다!
        <br />
        당신들이 더 이상 무례를 저지르는 것을 용납하지 않겠어요! 방패 용사님은 여기에
        계시지 않아요.
        <br />
        저는 그분께 먼저 떠나시도록 부탁드렸어요. 저는 직접 아버지께 말씀드릴 거예요.
        <br />
        그리고 반드시 방패 용사님의 누명을 벗기고 말겠어요! 자, 어서 저를 왕도로
        데려가세요!
        <br />
        <br />
        ● 드디어, 삼용교가 일으킨 위기가 일단락되었어요.
        <br />
        어머니는 여전히 정말 대단하세요! 이제…… 저도 해야 할 일이 있어요.
        <br />
        작은 필로와 함께 여행할 수 없게 된 건 조금 아쉽지만,
        <br />
        우리는 여전히 최고의 친구예요!
        <br />
        다시 만나고 싶다면, 언제 어디서든 다시 만날 수 있어요!`;
        break;

      case 'card_num_5':
        charImageSrc = './images_char/char_pop_5.png';
        charName = '글래스';
        charDesc = `● 이게 이세계의 &quot;사성용사&quot;라니…… 실망스러워!
        <br />
        잡몹 하나 상대하는 데도 고전을 하다니. 이런 자들이 세계의 운명을 짊어진
        용사라니?
        <br />
        정말로 한심하군! 오직 방패를 쓰는 용사만이 다른 것 같아……
        <br />
        살짝 시험해보자. 필요하다면 여기서 끝내버리겠어!
        <br />
        무례를 용서해, 내 이름은 글래스. 너는 나를 용사로서의 네 적으로 여겨라!
        <br />
        <br />
        ● 어느 정도 힘을 억제한 상태에서 라르크를 이 정도로 몰아붙이다니!
        <br />
        정말로 무서운 성장 속도야! 이대로 그가 더 강해지게 둔다면……
        <br />
        우리 세계가 위험해질 거야! 지난번에 그의 꾀에 넘어가 놓쳤으니,
        <br />
        이번에는 절대 놓치지 않겠어! 이세계의 방패 용사여,
        <br />
        내가 사랑하는 세계를 위해…… 내가 직접 너를 끝내야겠어!
        <br />
        <br />
        ● 형편없는 세계…… 형편없는 용사들……
        <br />
        이런 존재들에 비해, 우리 세계야말로 더 살아남을 가치가 있어!
        <br />
        무수한 동료들이 파도에 맞서 싸우다 희생되었어…… 이 비극은 오늘 끝낼 거야!
        <br />
        방패 용사 이와타니 나오후미!
        <br />
        이 싸움은 우리 중 하나가 패배하기 전까지 끝나지 않아!`;
      break;

      case 'card_num_6':
        charImageSrc = './images_char/char_pop_6.png';
        charName = '키타무라 모토야스';
        charDesc = `● 나는 키타무라 모토야스라고 해. 우연히 시공을 초월해서 다른 세 사람과 함께
        이세계로 소환됐어.
        <br />
        창의 용사로서 이 세계를 구할 책임을 맡게 되었지.
        <br />
        그런데 이 이세계, 내가 하던 온라인 게임이랑 굉장히 비슷하네……
        <br />
        역시 전설의 용사 대우는 좋네, 길 안내해주는 여자아이들도 귀엽고!
        <br />
        다음은 동료를 모아야겠어!
        <br />
        미소녀 동료들과 함께하는 가볍고 즐거운 대모험을 떠나보자구~
        <br />
        <br />
        ● 전투는 창의 용사인 내가 할 테니 걱정 마.
        <br />
        귀여운 여성분들은 이런 위험한 전투에 어울리지 않으니까.
        <br />
        옆에서 나에게 응원만 해주면 돼!
        <br />
        어차피 내 동료들은 전부 귀여운 여자들이거든.
        <br />
        그녀들의 응원이 없으면 힘들어질 거야. 전투는 무리해서는 안 되는 법이지!
        <br />
        <br />
        ● 저 아가씨는 천사 같은 존재야! 내 이상형의 소녀잖아……
        <br />
        그녀를 보는 순간, 마치 깨달음을 얻은 것 같았어!
        <br />
        ……
        <br />
        뭐? 그녀가 나오후미의 하인이라고!?
        <br />
        이런! 나오후미 그 녀석이 또 여자를 강제로 부리고 있잖아!
        <br />
        그리고 그가 키우는 저 뚱뚱한 새…… 오늘은 반드시 그에게 따져야겠어!`;
      break;

      case 'card_num_7':
        charImageSrc = './images_char/char_pop_7.png';
        charName = '카와스미 이츠키';
        charDesc = `● 나는 궁의 용사 카와스미 이츠키.
        <br />
        재해의 파도에 맞서기 위해 이세계로 소환된 고등학생이야.
        <br />
        레벨 1이라니, 정말 불안하지만…… 그래도 열심히 싸워야겠어!
        <br />
        어쨌든 나는 정의의 “용사”니까! 세계를 구하는 건 당연한 일이잖아?
        <br />
        <br />
        ● 이곳의 영주는 폭정을 일삼고 있어, 틀림없는 “악”이야!
        <br />
        살짝 그에게 본때를 보여줄 필요가 있겠어.
        <br />
        용사로서 당연히 정의의 이름을 짊어지고, 백성을 위해 싸워야지!
        <br />
        나오후미는 둘째치고, 렌과 모토야스는 너무 용사로서의 자각이 없어.
        <br />
        그저 자기 과시만 신경 쓰고, 용사의 의무를 내팽개치고 있어.
        <br />
        용사는 정의를 위해 싸워야 해!
        <br />
        <br />
        ● 뭐라고? 나오후미가 메르티 왕녀를 유괴했다고!?
        <br />
        이건…… 증거가 확실해. 그가 이런 악행을 저지를 줄이야!
        <br />
        궁의 용사로서의 이름을 걸고, 반드시 왕녀를 구해내겠어!
        <br />
        정의를 지키기 위해서라면, 비록 상대가 같은 용사라 할지라도 나는 전혀 주저하지
        않을 거야!`;
      break;

      case 'card_num_8':
        charImageSrc = './images_char/char_pop_8.png';
        charName = '아마키 렌';
        charDesc = `● 나는 아마키 렌, 올해 16살, 고등학생이야.
        <br />
        “검의 용사”로서 이세계에 소환되었어.
        <br />
        너희는 사람을 강제로 소환하는 데 아무런 죄책감도 없니?
        <br />
        나와 같은 “용사”가…… 세 명 더 있어.
        <br />
        다른 세계에서 온 “일본” 출신들이구나……
        <br />
        나는 잡담을 좋아하지 않지만, 현재 상황에서는 정보 공유가 필요해.
        <br />
        일단 그들의 출신에 대해 들어보자.
        <br />
        <br />
        ● 나를 따르겠다는 이세계인이 5명 있어.
        <br />
        이 세계가 온라인 게임과 이렇게 유사하다면……
        <br />
        그럼 이 사람들의 레벨에 따라 다른 행동 방침을 세우자.
        <br />
        파도가 몰려올 때 다시 모여서 행동하자.
        <br />
        나는 파벌을 짓는 걸 싫어해, 따라오지 못하는 자는 버릴 거야.
        <br />
        <br />
        ● 창의 용사 VS 방패의 용사……
        <br />
        레벨 차이가 이렇게 큰데도, 나오후미가 모토야스를 정면으로 압도하다니.
        <br />
        음? 누군가 결투에 개입했어……
        <br />
        모토야스의 동료인가…… 나오후미에게 바람 마법 공격을 했군.
        <br />
        흥, 결투에서 부정행위를 하는 녀석이라니…… 방금 그 결투, 모토야스, 네가 진
        거야!`;
      break;
    }

    // pop_char 요소 표시
    document.getElementById('pop_char').style.display = 'flex';

    // 정보 업데이트
    document.querySelector('.char_pop').src = charImageSrc;
    document.querySelector('.name_char_pop').textContent = charName;
    document.querySelector('.desc_char_pop').innerHTML = charDesc;
  });
});

