"object" != typeof Welefen && (Welefen = {
    Class: {}
}),
Welefen.Class.City = function(t, l, i) {
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
        t.innerHTML = t.value = "请选择",
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
        t.innerHTML = t.value = "请选择",
        s.appendChild(t),
        s.selectedIndex = 0,
        p.onchange = function() {
            s.length = 0;
            var t = document.createElement("option");
            t.innerHTML = t.value = "请选择",
            s.appendChild(t),
            e.length = 0;
            var l = document.createElement("option");
            l.innerHTML = l.value = "请选择",
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
        t.innerHTML = t.value = "请选择",
        e.appendChild(t),
        e.selectedIndex = 0,
        s.onchange = function() {
            if (e.length = 0, 0 == this.selectedIndex) {
                var t = document.createElement("option");
                t.innerHTML = t.value = "请选择",
                e.appendChild(t)
            } else for (var l = 0; l < data.length; l++) {
				for (var i = data[l].children, p = 0; p < i.length; p++) {
					if(i[p].code==this.options[this.selectedIndex].value){
						console.log(i[p].children);
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
    this.init()
};