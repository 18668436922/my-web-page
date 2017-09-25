function adis(){
	var ona=document.getElementsByClassName('rec1');
	var abox=document.getElementsByClassName('box1')[0];
	var bbox=document.getElementsByClassName('box2')[0];
	var timer=0;
		ona[0].onmouseover=function(){
		abox.style.display='block';
	};
	ona[0].onmouseout=function(){
		timer=setTimeout(function(){
			abox.style.display='none';
		},200);
	};
	abox.onmouseover=function(){
		clearTimeout(timer);
		abox.style.display='block';
	};
	abox.onmouseout=function(){
		abox.style.display='none';
	};
		ona[1].onmouseover=function(){
		bbox.style.display='block';
	};
	ona[1].onmouseout=function(){
		timer=setTimeout(function(){
			bbox.style.display='none';
		},200);
	};
	bbox.onmouseover=function(){
		clearTimeout(timer);
		bbox.style.display='block';
	};
	bbox.onmouseout=function(){
		bbox.style.display='none';
	};
}
