# header 顶部组件
> One of the best uses of the toolbar is as a header.     
> [demo访问](http://localhost:8080/header) 请npm run dev 后点击访问

## 使用
```html
<ion-header>
     <ion-toolbar color="primary">
          <ion-buttons slot="buttons">
              <ion-button color="secondary" size="small" type="clear"  icon-only>
                  <ion-icon name="home"></ion-icon>
               </ion-button>
          </ion-buttons>
          <ion-title>header primary</ion-title>
          <ion-buttons slot="buttons" end>
                <ion-button color="danger" size="small" type="clear"  icon-only>
                   <ion-icon name="heart"></ion-icon>
                </ion-button>
          </ion-buttons>
     </ion-toolbar>
 </ion-header>
```
## toolbar
>You can also change the toolbar __color__ the same way. This will allow you to have a different color toolbar per page in your app

## Buttons
>Buttons can be added to both header and footer toolbars. To add a button to a toolbar, we need to first add an __ion-buttons__ component. This component wraps one or more buttons, and can be given the __start__ or __end__ attributes to control the placement of the buttons it contains

