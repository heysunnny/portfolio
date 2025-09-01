$(document).ready(function () {
  //스크롤
  // var scroll = function () {
  //   var $nav = null,
  //     $cnt = null,
  //     moveCnt = null,
  //     count = 0,
  //     moveCntTop = 0,
  //     winH = 0,
  //     time = false; // 새로 만든 변수

  //   $(document).ready(function () {
  //     init();
  //     initEvent();
  //   });

  //   var init = function () {
  //     $sec = $("#wrap");
  //     $nav = $("header a");
  //   };

  //   var initEvent = function () {
  //     $("html ,body").scrollTop(0);
  //     winResize();
  //     $(window).resize(function () {
  //       winResize();
  //     });
  //     $nav.on("click", function () {
  //       count = $(this).parent("li").index();
  //       moving(count);
  //       return false;
  //     });
  //     $sec.on("mousewheel", function (e) {
  //       if (time === false) {
  //         // time 변수가 펄스일때만 휠 이벤트 실행
  //         wheel(e);
  //       }
  //     });
  //   };

  //   var winResize = function () {
  //     winH = $(window).height();
  //     $("section").height(winH);
  //     $("html ,body").scrollTop(count.scrollTop);
  //     if ($(window).width() <= 480) {
  //       $("section").height("auto");
  //       $("#home").height("500px");
  //       $("#contact").height("500px");
  //     }
  //   };

  //   var wheel = function (e) {
  //     time = true; // 휠 이벤트가 실행 동시에 트루로 변경
  //     if (e.originalEvent.wheelDelta < 0) {
  //       if (count < 8) {
  //         count += 1;
  //         moving(count);
  //       } else {
  //         count = 8;
  //       }
  //     } else {
  //       if (count > 0) {
  //         count -= 1;
  //         moving(count);
  //       } else {
  //         count = 0;
  //       }
  //     }
  //   };

  //   var moving = function (index) {
  //     moveCnt = $("section").eq(index);
  //     moveCntTop = moveCnt.offset().top;
  //     $("html ,body")
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: moveCntTop,
  //         },
  //         1000,
  //         function () {
  //           time = false; // 휠 이벤트가 끝나면 펄스로 변경
  //         }
  //       );
  //     if ($(document).scrollTop() >= $("#bifan").offset().top - 100) {
  //       $nav.removeClass("on");
  //       $("header li").eq(2).find("a").addClass("on");
  //     } else {
  //       $nav.removeClass("on");
  //       $("header li").eq(index).find("a").addClass("on");
  //     }
  //   };
  // };
  // scroll();

  //메뉴
  var ham = ".wrapper-menu";
  $(ham).click(function () {
    $(ham).find("div").toggleClass("open");
    $(ham).toggleClass("open");
    $("header, header ul").slideToggle(1000);
  });

  //HOME
  $(document).ready(function () {
    $(".box").css("transform", "scale(1)");
  });

  //ABOUT ME
  $(window).scroll(function () {
    if ($(document).scrollTop() >= $("#aboutme").offset().top) {
      $(".skills .pho div div").css("width", "95%");
      $(".skills .ill div div").css("width", "90%");
      $(".skills .html div div").css("width", "95%");
      $(".skills .js div div").css("width", "90%");
    }
  });

  //SECTION
  $(window).scroll(function () {
    if ($(window).width() >= 1025) {
      $("section").each(function () {
        var i = $(this).index();
        if ($(window).scrollTop() >= $("section").eq(i).offset().top - 300) {
          $(this).find(".circle").css({ left: "-140px" });
          $(this).find(".title").css({ opacity: 1 });
          $(this).find("h2").css({ opacity: 1 });
        }
      });

      if ($(window).scrollTop() >= $("#bifan").offset().top - 300) {
        $("#bifan img").css({ right: "-5%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#hotel").offset().top - 300) {
        $("#hotel img").css({ right: "3%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#coucou").offset().top - 300) {
        $("#coucou img").css({ right: "-25%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#haneul").offset().top - 300) {
        $("#haneul img").css({ right: "15%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#innisfree").offset().top - 300) {
        $("#innisfree img").css({ right: "-5%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#today").offset().top - 300) {
        $("#today img").css({ right: "-10%", opacity: 1 });
      }
    } else if ($(window).width() >= 769) {
      $("section").each(function () {
        var i = $(this).index();
        if ($(window).scrollTop() >= $("section").eq(i).offset().top - 300) {
          $(this).find(".circle").css({ left: "-100px" });
          $(this).find(".title").css({ opacity: 1 });
          $(this).find("h2").css({ opacity: 1 });
        }
      });

      if ($(window).scrollTop() >= $("#bifan").offset().top) {
        $("#bifan img").css({ right: "-5%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#hotel").offset().top) {
        $("#hotel img").css({ right: "0", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#coucou").offset().top) {
        $("#coucou img").css({ right: "-25%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#haneul").offset().top) {
        $("#haneul img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#innisfree").offset().top) {
        $("#innisfree img").css({ right: "-5%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#today").offset().top) {
        $("#today img").css({ right: "-10%", opacity: 1 });
      }
    } else if ($(window).width() >= 481) {
      $("section").each(function () {
        var i = $(this).index();
        if ($(window).scrollTop() >= $("section").eq(i).offset().top - 300) {
          $(this).find(".circle").css({ left: "-100px" });
          $(this).find(".title").css({ opacity: 1 });
          $(this).find("h2").css({ opacity: 1 });
        }
      });

      if ($(window).scrollTop() >= $("#bifan").offset().top) {
        $("#bifan img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#hotel").offset().top) {
        $("#hotel img").css({ right: "0", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#coucou").offset().top) {
        $("#coucou img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#haneul").offset().top) {
        $("#haneul img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#innisfree").offset().top) {
        $("#innisfree img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#today").offset().top) {
        $("#today img").css({ right: "0%", opacity: 1 });
      }
    } else {
      $("section").each(function () {
        var i = $(this).index();
        if ($(window).scrollTop() >= $("section").eq(i).offset().top - 300) {
          $(this).find(".circle").css({ left: "-75px" });
          $(this).find(".title").css({ opacity: 1 });
          $(this).find("h2").css({ opacity: 1 });
        }
      });

      if ($(window).scrollTop() >= $("#bifan").offset().top) {
        $("#bifan img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#hotel").offset().top) {
        $("#hotel img").css({ right: "0", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#coucou").offset().top) {
        $("#coucou img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#haneul").offset().top) {
        $("#haneul img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#innisfree").offset().top) {
        $("#innisfree img").css({ right: "0%", opacity: 1 });
      }
      if ($(window).scrollTop() >= $("#today").offset().top) {
        $("#today img").css({ right: "0%", opacity: 1 });
      }
    }
  });

  //BIFAN
  if ($(window).width() <= 768) {
    $("#bifan img").eq(1).attr("src", "img/bifan_res.png");
  }

  //popup
  $("#innisfree a").click(function (e) {
    e.preventDefault();
    $("#popup").show().css({ background: "rgba(0,0,0,0.4)" });
    $(".popupcont ul li").eq(1).hide();
  });

  $("#today a").click(function (e) {
    e.preventDefault();
    $("#popup").show().css({ background: "rgba(0,0,0,0.4)" });
    $(".popupcont ul li").eq(0).hide();
  });

  $("#popup a").click(function (e) {
    e.preventDefault();
    $("#popup").hide();
    $(".popupcont ul li").show();
  });
});
