$(document).ready(function(){
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function(){
			$(this).addClass("ho");			
		} , 
		function(){
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	$("#event> div> div").click(function(){
		const x = $(this).children("img").attr("src");		
		const y = x.substr(-4);// ".jpg" 또는 ".png"	
		const z = x.slice(0,-4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src" , zz);
		const txt = $(this).children("img").attr("alt");				
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
		$("#popup").fadeIn();
		$("body").css("overflow","hidden");		
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//상단 메뉴 부드럽게 이동
	$("#menu a").click(function(){
		//큰화면에서만, 부드럽게 스크롤이동
		if( $(window).width() > 768 ){
			$("html,body").stop().animate({scrollTop : $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		//if( $("#menu a") ){			
			let i = $(this).index();
			active(i);
		//}
	});
	
	//상단 한글자씩 나오는 기능 (타자치는 효과)
	const typing = "새 한마리만 그려 넣으면 \n남은 여백 모두가 하늘이어라.\n화선지 - 이외수"
	console.log(typing);
	//$("h1").html( typing[4]  );  "요"
	let i = 0; 
	let txt = "";
	function type(){
		if( i < typing.length ){			
			txt += typing[i];
			document.getElementById("typing").innerText = txt;
			i++;
			setTimeout( type, 120 );
		}
	}
	type();
	
	//휴대폰에서는 상단 배경색 보임, 스크롤하면 해당메뉴 색 들어옴
	if( $(window).outerWidth() <= 600 ){
		/*console.log($("#about").position().top);
		console.log($("#portfolio").position().top);
		console.log($("#event").position().top);
		console.log($("#contact").position().top);*/
			
		$("nav").addClass("act");
		
		
		function active(i){		
			$("#menu a").eq(i).addClass("active").siblings().removeClass("active");
		}
		
		
		$(window).scroll(function(){			
			
			if( $(window).scrollTop() <= 830 ){
				$("#menu a").removeClass("active");				
			}	
			if( $(window).scrollTop() > 831  &&   $(window).scrollTop() <= 2000){
				active(1);
			}
			if( $(window).scrollTop() > 2001  &&  $(window).scrollTop() <= 5100 ){
				active(2);				
			}
			if( $(window).scrollTop() >= 5101  &&  $(window).scrollTop() <= 10000){
				active(3);
			}
			if( $(window).scrollTop() > 10001 ){
				active(4);
			}
		});	
	} 
	
	//휴대폰 아닐때
	else{	
		//화면 스크롤시 상단 배경색 생김
	 
			if( $(window).scrollTop() > 100 ){
				$("nav").addClass("act");
			} else {
				$("nav").removeClass("act");
			}		
	}
	
	//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
	if( $(window).width()> 600 ){
		$(window).scroll(function(){
			if( $(window).scrollTop()>1600 ){
				$("#portfolio> section").eq(0).addClass("act");
			}
			if( $(window).scrollTop()>2500 ){
				$("#portfolio> section").eq(1).addClass("act");
			}
			if( $(window).scrollTop()>3400 ){
				$("#portfolio> section").eq(2).addClass("act");
			}
		});		
	}
	
	
});//끝









