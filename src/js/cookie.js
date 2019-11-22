(function() {
    const cookie = {
        creat: function(key, value, t, x) { //key value 键值对  //x时间单位 t时间长度
            if (t) {
                switch (x) {
                    case 's':
                        let s = new Date();
                        s.setSeconds(s.getSeconds() + t);
                        console.log(s);
                        document.cookie = `${key}=${value}; path=/; expires=${s}`;
                        break;
                    case 'h':
                        let h = new Date();
                        h.setHours(h.getHours() + t);
                        document.cookie = `${key}=${value}; path=/; expires=${h}`;
                        break;
                    case 'd':
                        let d = new Date();
                        d.setDate(d.getDate() + t);
                        document.cookie = `${key}=${value}; path=/; expires=${d}`;
                        break;
                    case 'm':
                        let m = new Date();
                        m.setMonth(m.getMonth() + t);
                        document.cookie = `${key}=${value}; path=/; expires=${m}`;
                        break;
                    default:
                        document.cookie = `${key}=${value}; path=/; expires=${t}`;
                }
            } else {
                document.cookie = `${key}=${value}; path=/`;
            }
        },
        get: function(key) {
            if (document.cookie) {
                let arr = document.cookie.split('; ');
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].split("=");
                    if (arr[i][0] == key) {
                        let result = arr[i][1];
                        return result;
                    }
                }
            }
            return '';
        },
        remove: function(key) {
            this.creat(key, '', -1);
        }
    }
    window.cookie = cookie;
})();