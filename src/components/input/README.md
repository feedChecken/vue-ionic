# input [ ion-input ]
> 简单版本的输入框..别的之后在扩展    
> [demo 中预览地址 请npm run dev 后点击访问](http://localhost:8080/input)
### 基础用法 
```html
  <ion-list>
    <ion-list-header>
         Login
    </ion-list-header>
    <ion-item>
         <ion-input slot="item-content"  v-model="uname" placeholder="User Name" ></ion-input>
    </ion-item>
    <ion-item>
         <ion-input slot="item-content" :disableClear="true" v-model="pwd" type="password" placeholder="Password" ></ion-input>
    </ion-item>
 </ion-list>
 <p style="padding:0 10px;">
     <ion-button  color="danger" block> Login </ion-button>
  </p>
```

### IonButton 指令 Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type| 输入框类型 | String | text, number, email, url, tel, date, datetime, password, textarea | text |
| placeholder | 占位内容 | String | - | - |
| disableClear | 禁用 clear 按钮| Booean | -| true |
| readonly | readonly | Booean| - | - |
| disabled |disabled | Booean | - | - |
| attr | 设置原生属性，例如 :attr="{ maxlength: 10 }" | Object | - | - |


