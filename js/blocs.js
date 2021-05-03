function setUpSpecialNavs(){$(".navbar-toggle").click(function(t){var e=$(this).closest("nav"),a=e.find("ul.site-navigation"),i=a.clone();if(a.parent().hasClass("nav-special"))if(t.stopPropagation(),$(this).hasClass("selected-nav"))$(".blocsapp-special-menu blocsnav").removeClass("open"),$(".selected-nav").removeClass("selected-nav"),setTimeout(function(){$(".blocsapp-special-menu").remove(),$("body").removeClass("lock-scroll"),$(".selected-nav").removeClass("selected-nav")},300);else{$(this).addClass("selected-nav");var o=e.attr("class").replace("navbar","").replace("row",""),l=a.parent().attr("class").replace("navbar-collapse","").replace("collapse","");($(".content-tint").length=-1)&&$("body").append('<div class="content-tint"></div>'),i.insertBefore(".page-container").wrap('<div class="blocsapp-special-menu '+o+'"><blocsnav class="'+l+'">'),$("blocsnav").prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>'),function(){var t="fadeInRight",e=0,a=60;$(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav")?(t="fadeIn",a=100):$(".blocsapp-special-menu").hasClass("nav-invert")&&(t="fadeInLeft"),$(".blocsapp-special-menu blocsnav li").each(function(){$(this).parent().hasClass("dropdown-menu")?$(this).addClass("animated fadeIn"):(e+=a,$(this).attr("style","animation-delay:"+e+"ms").addClass("animated "+t))})}(),setTimeout(function(){$(".blocsapp-special-menu blocsnav").addClass("open"),$(".content-tint").addClass("on"),$("body").addClass("lock-scroll")},10)}}),$("body").on("mousedown touchstart",".content-tint, .close-special-menu",function(t){$(".content-tint").removeClass("on"),$(".selected-nav").click(),setTimeout(function(){$(".content-tint").remove()},10)}).on("click",".blocsapp-special-menu a",function(t){$(t.target).closest(".dropdown-toggle").length||$(".close-special-menu").mousedown()})}function extraNavFuncs(){$(".site-navigation a").click(function(t){$(t.target).closest(".dropdown-toggle").length||$(".navbar-collapse").collapse("hide")}),$("a.dropdown-toggle").click(function(t){$(this).parent().addClass("target-open-menu"),$(this).closest(".dropdown-menu").find(".dropdown.open").each(function(t){$(this).hasClass("target-open-menu")||$(this).removeClass("open")}),$(".target-open-menu").removeClass("target-open-menu")})}function setFillScreenBlocHeight(){$(".bloc-fill-screen").each(function(t){var e=$(this);window.fillBodyHeight=0,$(this).find(".container").each(function(t){fillPadding=2*parseInt($(this).css("padding-top")),e.hasClass("bloc-group")?fillBodyHeight=fillPadding+$(this).outerHeight()+50:fillBodyHeight=fillBodyHeight+fillPadding+$(this).outerHeight()+50}),$(this).css("height",getFillHeight()+"px")})}function getFillHeight(){var t=$(window).height();return t<fillBodyHeight&&(t=fillBodyHeight+100),t}function scrollToTarget(t){1==t?t=0:2==t?t=$(document).height():(t=$(t).offset().top,$(".sticky-nav").length&&(t-=$(".sticky-nav .navbar-header").height())),$("html,body").animate({scrollTop:t},"slow"),$(".navbar-collapse").collapse("hide")}function animateWhenVisible(){hideAll(),inViewCheck(),$(window).scroll(function(){inViewCheck(),scrollToTopView(),stickyNavToggle()})}function setUpDropdownSubs(){$("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(t){t.preventDefault(),t.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open");var e=$(this).parent().children(".dropdown-menu");e.offset().left+e.width()>$(window).width()&&e.addClass("dropmenu-flow-right")})}function stickyNavToggle(){var t=0,e="sticky";if($(".sticky-nav").hasClass("fill-bloc-top-edge")){var a=$(".fill-bloc-top-edge.sticky-nav").parent().css("background-color");"rgba(0, 0, 0, 0)"==a&&(a="#FFFFFF"),$(".sticky-nav").css("background",a),t=$(".sticky-nav").height(),e="sticky animated fadeInDown"}$(window).scrollTop()>t?($(".sticky-nav").addClass(e),"sticky"==e&&$(".page-container").css("padding-top",$(".sticky-nav").height())):($(".sticky-nav").removeClass(e).removeAttr("style"),$(".page-container").removeAttr("style"))}function hideAll(){$(".animated").each(function(t){$(this).closest(".hero").length||$(this).removeClass("animated").addClass("hideMe")})}function inViewCheck(){$($(".hideMe").get().reverse()).each(function(t){var e=jQuery(this),a=e.offset().top+e.height(),i=$(window).scrollTop()+$(window).height();if(e.height()>$(window).height()&&(a=e.offset().top),a<i){var o=e.attr("class").replace("hideMe","animated");e.css("visibility","hidden").removeAttr("class"),setTimeout(function(){e.attr("class",o).css("visibility","visible")},.01)}})}function scrollToTopView(){$(window).scrollTop()>$(window).height()/3?$(".scrollToTop").hasClass("showScrollTop")||$(".scrollToTop").addClass("showScrollTop"):$(".scrollToTop").removeClass("showScrollTop")}function setUpVisibilityToggle(){$(document).on("click","[data-toggle-visibility]",function(t){t.preventDefault();var e=$(this).attr("data-toggle-visibility");if(-1!=e.indexOf(",")){var a=e.split(",");$.each(a,function(t){i($("#"+a[t]))})}else i($("#"+e));function i(t){t.is("img")?t.toggle():t.slideToggle()}})}function setUpLightBox(){window.targetLightbox,$(document).on("click","[data-lightbox]",function(t){t.preventDefault(),targetLightbox=$(this);var e=targetLightbox.attr("data-lightbox"),a=targetLightbox.attr("data-autoplay"),i='<p class="lightbox-caption">'+targetLightbox.attr("data-caption")+"</p>",o="no-gallery-set",l=targetLightbox.attr("data-frame");targetLightbox.attr("data-gallery-id")&&(o=targetLightbox.attr("data-gallery-id")),targetLightbox.attr("data-caption")||(i="");var n="";1==a&&(n="autoplay");var s=$('<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content '+l+' blocs-lb-container"><button id="blocs-lightbox-close-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><a href="#" class="prev-lightbox" aria-label="prev"><span class="fa fa-chevron-left"></span></a><a href="#" class="next-lightbox" aria-label="next"><span class="fa fa-chevron-right"></span></a><img id="lightbox-image" class="img-responsive" src="'+e+'"><div id="lightbox-video-container" class="embed-responsive embed-responsive-16by9"><video controls '+n+' class="embed-responsive-item"><source id="lightbox-video" src="'+e+'" type="video/mp4"></video></div>'+i+"</div></div></div></div>");$("body").append(s),"fullscreen-lb"==l&&($("#lightbox-modal").addClass("fullscreen-modal").append('<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s;" onclick="$(\'#lightbox-modal\').modal(\'hide\');"><div class="close-icon"></div></a>'),$("#blocs-lightbox-close-btn").remove()),".mp4"==e.substring(e.length-4)?($("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show()):($("#lightbox-image,.lightbox-caption").show(),$("#lightbox-video-container").hide()),$("#lightbox-modal").modal("show"),"no-gallery-set"==o?(0==$("a[data-lightbox]").index(targetLightbox)&&$(".prev-lightbox").hide(),$("a[data-lightbox]").index(targetLightbox)==$("a[data-lightbox]").length-1&&$(".next-lightbox").hide()):(0==$('a[data-gallery-id="'+o+'"]').index(targetLightbox)&&$(".prev-lightbox").hide(),$('a[data-gallery-id="'+o+'"]').index(targetLightbox)==$('a[data-gallery-id="'+o+'"]').length-1&&$(".next-lightbox").hide()),addLightBoxSwipeSupport()}).on("hidden.bs.modal","#lightbox-modal",function(){$("#lightbox-modal").remove()}),$(document).on("click",".next-lightbox, .prev-lightbox",function(t){t.preventDefault();var e="no-gallery-set",a=$("a[data-lightbox]").index(targetLightbox),i=$("a[data-lightbox]").eq(a+1);targetLightbox.attr("data-gallery-id")&&(e=targetLightbox.attr("data-gallery-id"),a=$('a[data-gallery-id="'+e+'"]').index(targetLightbox),i=$('a[data-gallery-id="'+e+'"]').eq(a+1)),$(this).hasClass("prev-lightbox")&&(i=$('a[data-gallery-id="'+e+'"]').eq(a-1),"no-gallery-set"==e&&(i=$("a[data-lightbox]").eq(a-1)));var o=i.attr("data-lightbox");if(".mp4"==o.substring(o.length-4)){var l="";1==i.attr("data-autoplay")&&(l="autoplay"),$("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show().html("<video controls "+l+' class="embed-responsive-item"><source id="lightbox-video" src="'+o+'" type="video/mp4"></video>')}else $("#lightbox-image").attr("src",o).show(),$(".lightbox-caption").html(i.attr("data-caption")).show(),$("#lightbox-video-container").hide();targetLightbox=i,$(".next-lightbox, .prev-lightbox").hide(),"no-gallery-set"==e?($("a[data-lightbox]").index(i)!=$("a[data-lightbox]").length-1&&$(".next-lightbox").show(),$("a[data-lightbox]").index(i)>0&&$(".prev-lightbox").show()):($('a[data-gallery-id="'+e+'"]').index(i)!=$('a[data-gallery-id="'+e+'"]').length-1&&$(".next-lightbox").show(),$('a[data-gallery-id="'+e+'"]').index(i)>0&&$(".prev-lightbox").show())})}function addSwipeSupport(){$(".carousel-inner").length&&$(".carousel-inner").swipe({swipeLeft:function(t,e,a,i,o){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:0})}function addKeyBoardSupport(){$(window).keydown(function(t){37==t.which?$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click():39==t.which&&$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()})}function addLightBoxSwipeSupport(){$("#lightbox-image").length&&$("#lightbox-image").swipe({swipeLeft:function(t,e,a,i,o){$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()},swipeRight:function(){$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click()},threshold:0})}$(document).ready(function(){$("#scroll-hero").click(function(t){t.preventDefault(),$("html,body").animate({scrollTop:$("#scroll-hero").closest(".bloc").height()},"slow")}),extraNavFuncs(),setUpSpecialNavs(),setUpDropdownSubs(),setUpLightBox(),setUpVisibilityToggle(),addSwipeSupport(),addKeyBoardSupport(),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("#page-loading-blocs-notifaction").remove()}),$(window).load(function(){setFillScreenBlocHeight(),animateWhenVisible(),$("#page-loading-blocs-notifaction").remove()}).resize(function(){setFillScreenBlocHeight()}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),jQuery(function(t){var e=window.location.href;t("nav a").each(function(){this.href===e&&t(this).addClass("active")});var a=window.pageYOffset;if(window.onscroll=function(){var t=window.pageYOffset;document.getElementById("sticky-nav").style.top=a>t?"0":"-8em",a=t},"http://127.0.0.1:5500/contact.html"==window.location.href){document.getElementById("form_1").addEventListener("submit",function(){event.preventDefault(),document.getElementById("popupForm").style.display="flex",document.getElementById("popupForm").style.top="0",t("#name").val(""),t("#email").val(""),t("#howweknow").val(""),t("#message").val(""),setTimeout(function(){document.getElementById("popupForm").style.display="none"},5e3)})}});