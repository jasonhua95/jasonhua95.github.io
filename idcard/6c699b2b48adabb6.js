var jasonhuaClassCity = function(t, l, i) {
    var p = document.getElementById(t),
    s = document.getElementById(l),
    e = document.getElementById(i),
    n = 0,
    d = [],
    a = [],
    o = [];
    this.init = function() {
        p.length = 0;
        var t = document.createElement("option");
        t.innerHTML = "请选择",
		t.value = "",
        p.appendChild(t);
        for (var l = 0; l < data.length; l++) {
            var t = document.createElement("option");
            t.innerHTML = data[l].name,
			t.value = data[l].code,
            p.appendChild(t)
        }
        p.selectedIndex = 0,
        s.length = 0;
        var t = document.createElement("option");
        t.innerHTML = "请选择",
		t.value = "",
        s.appendChild(t),
        s.selectedIndex = 0,
        p.onchange = function() {
            s.length = 0;
            var t = document.createElement("option");
            t.innerHTML = "请选择",
			t.value = "",
            s.appendChild(t),
            e.length = 0;
            var l = document.createElement("option");
            l.innerHTML = "请选择",
			l.value = "",
            e.appendChild(l),
            n = this.selectedIndex;

			for (var l = 0; l < data.length; l++) {
				if(data[l].code==this.options[this.selectedIndex].value){
					console.log(data[l].children);
					for (var i = data[l].children, p = 0; p < i.length; p++) {
						var t = document.createElement("option");
						t.innerHTML = i[p].name,
						t.value = i[p].code;
						s.appendChild(t)
					}
					break;
				}
            }
            
            s.selectedIndex = 0
        },
        e.length = 0;
        var t = document.createElement("option");
        t.innerHTML = "请选择",
		t.value = "",
        e.appendChild(t),
        e.selectedIndex = 0,
        s.onchange = function() {
            if (e.length = 0, 0 == this.selectedIndex) {
                var t = document.createElement("option");
                t.innerHTML = "请选择",
				t.value = "",
                e.appendChild(t)
            } else for (var l = 0; l < data.length; l++) {
				for (var i = data[l].children, p = 0; p < i.length; p++) {
					if(i[p].code==this.options[this.selectedIndex].value){
						for (var s = i[p].children, j = 0; j < s.length; j++) {
							var t = document.createElement("option");
							t.innerHTML = s[j].name,
							t.value = s[j].code,
							e.appendChild(t)
						}
						break;
					}
				}
			}	
			
            e.selectedIndex = 0
        }
    },
    this.init();
};

var jasonhuaClassAge = function(y,m,d){
    var p = document.getElementById(y),
    s = document.getElementById(m),
    e = document.getElementById(d);
	this.init = function(){
        for (var l = 2022; l > 1919; l--) {
            var t = document.createElement("option");
            t.innerHTML = l,
			t.value = l,
            p.appendChild(t)
        }
		
		for (var l = 1; l < 13; l++) {
            var t = document.createElement("option");
            t.innerHTML = l,
			t.value = l<10?"0"+l:l,
            s.appendChild(t)
        }
		
		for (var l = 1; l < 32; l++) {
            var t = document.createElement("option");
            t.innerHTML = l,
			t.value = l<10?"0"+l:l,
            e.appendChild(t)
        }
	},
	this.init();
};


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

var jasonhuaIdCard = function(){
	var province = document.getElementById("province"),
    city = document.getElementById("city"),
	area = document.getElementById("area"),
	year = document.getElementById("year"),
	month = document.getElementById("month"),
	day = document.getElementById("day"),
	sex = document.getElementById("sex");
	if(province.value == ""){
		alert("地址不能为空");
		return;
	}
	var idcarlist = document.getElementById("idcarlist");
	idcarlist.innerHTML=null;
		
	var areaid=area.value;
	if(areaid == ""){
		areaid = province.value;
	}
	areaid=areaid+""+year.value+""+month.value+""+day.value;
    var index=0;
	for(var i=0;i<99;i++)
	{
		var tempi=i<10?("0"+i):i;
		for(var j=parseInt(sex.value);j<10;j=j+2)
		{
			for(var k=0;k<10;k++){
				var temp=areaid+tempi+j+k;
				if(verifyId18(temp))
				{
					index++;
					var t = document.createElement("span");
					t.style="font-size:22px;color:red;margin-right:10px;"
					t.innerHTML=temp;
					idcarlist.appendChild(t);
					if(index%3==0){
						idcarlist.appendChild(document.createElement("br"));
					}
				}
			}
		}
	}
};