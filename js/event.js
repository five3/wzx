$(document).ready(function(){ 
	isHeighChanged = false;
	$('#navigate1 span').click(get_second_navi_bar);
});
function get_second_navi_bar(){
	var v = $(this).attr('value');
	$('#navigate1 .notads').attr({style:""}); //clear all non-ads bg color	
	$('#navigate1 .ads').attr({style:"background:#fef5e6; color:#000; border-radius: 2px;"});
	$('#navigate1 span[value='+v+']').attr({style:"background:#fe9900; color:#fff; border-radius: 2px;"});
	//TODO:call api service
}
function get_third_navi_bar(label){
	if ($('#'+label+'_nav3').length>0){ //如果已经下载过
		$('.search_yq').hide();
		$('#'+label+'_nav3').show();
	}else{
		//TODO:call api service 
		$('.search_yq').hide();
		alert('second navigate not complete');
	}
}
function navigate_url(url){
	var sub = document.getElementById("mainframe");
	iFrameHeight();
	sub.src = url;
	$('#top_head').hide('slow');
	$('#navi2').hide();
	$('#normal_right_top').hide();
	$('#spliter_line').hide();
	$('#mini_right_top').show();
	
}
function iFrameHeight() {
	if (isHeighChanged){ return; }
	var ifm= document.getElementById("mainframe");
	var subWeb = document.frames ? document.frames["mainframe"].document : ifm.contentDocument;
	if(ifm != null && subWeb != null) {
		var heigh =$(window).height()-50;
		ifm.height = heigh;
		isHeighChanged = true;
		$('#navi1').hover(function(){
			$('#navi2').show();
			$('#normal_right_top').show();
			$('#spliter_line').show();
			$('#mini_right_top').hide();
		});
		$('#daohang').mouseleave(function(){
			$('#navi2').hide();
			$('#normal_right_top').hide();
			$('#spliter_line').hide();
			$('#mini_right_top').show();
		});
	}
}
