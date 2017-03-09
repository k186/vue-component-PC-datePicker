### vue deatePicker for pc component

###[result](http://k186studio.com/demos/vue/pcPicker/)

###result
![open](http://omhgkqaq2.bkt.clouddn.com/datepicker2.gif)

###Build Setup
```$xslt
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
### props config
```$xslt
        valueStr: {
            type: String,
            default: ''
        },
        visible: {
            type: Boolean,
            default: false,
            required: true
        },
        inputId: {
            type: String,
            required: true
        },
        options: {
            type: Object,
        }
```

>`valueStr`: the init date value like 2017-3-7 14:50


>`inputId`: the input tag or else id, to set the picker to the right place it will auto calculate position

>`visible`: without use vuex ,so you need control picker visible by yourself

>`selectDay`:callback function

