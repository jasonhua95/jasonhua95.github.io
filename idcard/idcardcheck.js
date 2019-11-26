var verifyId18 = function(idNo) {
	// 17 位加权因子
	var RATIO_ARR = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	// 校验码列表
	var CHECK_CODE_LIST = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
	var ID_LENGTH = 17;
	// 获取最后一位（身份证校验码）
	var verifyCode = idNo[ID_LENGTH];
	// 身份证号第1-17加权和
	var idSum = 0;
	// 余数
	var residue;

	for (var i = 0; i < ID_LENGTH; i++) {
		idSum += idNo[i] * RATIO_ARR[i];
	}
	// 取得余数
	residue = idSum % 11;
	return verifyCode.toLocaleUpperCase() == CHECK_CODE_LIST[residue];
};

var address = function(id){
	var province =  document.getElementById("province");
	var p = id.substring(0,2);
	var city =  document.getElementById("city");
	var c = id.substring(2,4);
	var area =  document.getElementById("area");
	var a = id.substring(4,6);
	
	city.innerHTML = "";
	area.innerHTML = "";
	
	for (var i = 0; i < data.length; i++) {
		if(data[i].code.substring(0,2)==p){
			province.innerHTML = data[i].name; if(a == "") return false;
			
			for (var j = 0,tc = data[i].children; j < tc.length; j++) {
				if(tc[j].code.substring(2,4)==c){
					city.innerHTML = tc[j].name;
					
					for (var k = 0,ta = tc[j].children; k < ta.length; k++) {
						if(ta[k].code.substring(4,6)==a){
							
							area.innerHTML = ta[k].name;
							return false;
						}
					}
				}
			}
		}
	}
};

var sexfun = function(id){
	var t =  id.substring(16,17);
	var sex =  document.getElementById("sex");
	console.log(t);
	sex.innerHTML = (t%2 == 0 ?"女":"男");
};

var agefun = function(id){
	var today = new Date();
	var yage =  document.getElementById("yage");
	yage.innerHTML = id.substring(6,10) + "年" + id.substring(10,12) + "月" + id.substring(12,14) + "日";
	
	var nage =  document.getElementById("nage");
	
	var zage =  document.getElementById("zage");
	var age = parseInt(today.getFullYear() - id.substring(6,10));
	zage.innerHTML = age + "岁";
	
	var xage =  document.getElementById("xage");
	var ist= today.getMonth() >= id.substring(10,12) && today.getDate() >= id.substring(12,14);
	xage.innerHTML = (ist?age+1:age) + "岁";
	
	var shuxiang =  document.getElementById("shuxiang");
	
	var xingzuo =  document.getElementById("xingzuo");
}

var getElementsByClassName = function(clsName, tagName,flag) {
    var selElements = document.getElementsByTagName(tagName);

    for (var i = 0; i < selElements.length; i++) {
        if (selElements[i].className == clsName) {
			if(!flag){
				selElements[i].style.display='none';
			}else{
				selElements[i].style.display = "list-item";
			}
        }
    }
}

var jasonhuaIdCard = function(){
	getElementsByClassName("display","li",false);
	var idcard =  document.getElementById("idcard").value;
	var message =  document.getElementById("message");
	
	if(idcard.length<18){
		message.innerHTML="身份证必须18位";
		return false;
	}
	
	if(!verifyId18(idcard)){
		message.innerHTML="身份证不符合规则";
		return false;
	}
	getElementsByClassName("display","li",true);
	message.innerHTML="身份证号码校验合法";
	address(idcard);
	sexfun(idcard);
	agefun(idcard);
};
getElementsByClassName("display","li",false);