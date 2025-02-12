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
  //simulateTouch : false,
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
  // 클릭된 요소가 "Share" 링크나 "cont_share_2"이 아닌 경우 "cont_share_2"를 숨깁니다.
  if (event.target !== shareLink && !contShare2.contains(event.target)) {
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
