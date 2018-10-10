	window.onload=function(){
		var aFoud=document.getElementById('found')
		var bRott=document.getElementById('bigjs')
		
		var aFod=document.getElementById('gong')
		var bVbo=document.getElementById('compay')
		
		var coco=document.getElementById('act')
		var mxbc=document.getElementById('two')
		
		var arad=document.getElementById('forex')
		var bcps=document.getElementById('three')
		
		var aqwe=document.getElementById('goole')
		var cear=document.getElementById('four')
		

		function foundx(a,b){
			a.onmousemove=function(){
				b.style.display='block';
			}
			a.onmouseout=function(){
				b.style.display='none';
			}
		}
		foundx(aFoud,bRott);
		foundx(aFod,bVbo);
		foundx(coco,mxbc);
		foundx(arad,bcps);
		foundx(aqwe,cear);
		
		
	}
