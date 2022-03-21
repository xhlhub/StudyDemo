var axios;
(function(){
    var axiosInstance = (config) => new Promise((resolve, reject) => {
        const {
            url,
            method,
            header = {},
            query,
            data,
            timeout,
        } = config
        
        let timer;
        
        var xhr = new XMLHttpRequest()

        xhr.open(method, url)
        
        Object.keys(header).forEach((key) => {
            setRequestHeader(key, header[key])
        })

        if (method.toLowerCase() === 'post' && data) {
            xhr.send(data)
        } else {
            xhr.send()
        }
        // 超时
        if (timeout) {
            timer = setTimeout(function(){
                reject({ msg:'超时' })
                clearTimeout(timer)
            }, timeout)
        }

        xhr.onreadystatechange = function () {
            clearTimeout(timer)
            const { readyState, status, responseText } = xhr
            if (readyState == 4) {
                switch (status) {
                    case 200:
                        resolve(JSON.parse(responseText))
                        break;
                    default:
                        reject({
                            code: 9999,
                            success: false,
                            msg: '请求错误'
                        })
                        break;
                }
            }
        }

    })

    const methods = {
        get:function(url, config = {}){
            return axiosInstance(Object.assign(config, { url, method:'get' }))
        },
        post: function(url, data, config){
            return axiosInstance(Object.assign(config, data, { url }))
        },
        all: function(){
            
        },
    }
    const attribute = {
        defaults: {

        },
        interceptors : {
            request: {
                use: null,
                reject: null,
            },
            response: {
                use: null,
                reject: null,
            }
        },
    }

    axios = function  (defaultConfig) {
        const config = Object.assign({},axios.defaults,defaultConfig)
        return axiosInstance(config)
    }
    
    Object.entries(Object.assign({},methods,attribute)).forEach(([key, value]) => {
        axios[key] = value
    })
})()