# 按钮 [ ion-button ]
> Buttons are an essential way to interact with and navigate through an app, and should clearly communicate what action will occur after the user taps them. Buttons can consist of text and/or an icon, and can be enhanced with a wide variety of attributes    
> [demo 中预览地址 请npm run dev 后点击访问](http://localhost:8080/button)
### 基础用法 
>The __color__ property sets the color of the button. Ionic includes a number of default colors which can be easily overridden 

```html
<ion-button> default</ion-button>
<ion-button color="secondary">secondary</ion-button>
<ion-button color="danger">danger</ion-button>
```

### type Buttons
> 主题 默认是default 具有:Outline Style Clear Style    
```html
<ion-button color="light" type="outline"> default</ion-button><br/>
<ion-button type="outline"> default</ion-button><br/>
<ion-button type="clear"> default</ion-button><br/>
```

### Round Buttons
>To create a button with rounded corners, just add the round property  
```html
<ion-button round> round default</ion-button>
```

### Icon Buttons
>To add icons to a button, add an icon component inside of it and a position attribute:  
```html
 <ion-button color="dark" icon-left>
     <ion-icon name="home"></ion-icon>
      button
  </ion-button>
```

### IonButton 指令 Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| block| Adding block to a button will make the button take 100% of its parent’s width. It will also add display: block to the button | Boolean | true | false |
| full | Adding full to a button will also make the button take 100% of its parent’s width. However, it will also remove the button’s left and right borders. This style is useful when the button should stretch across the entire width of the display. | Boolean | true | false |
| size | 按钮大小. | string | default,small,large | default |
| icon-left | Float the icon left | - | - | - |
| icon-right | Float the icon right | - | - | - |
| icon-only | Only icon (no text) | - | - | - |


