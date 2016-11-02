# ion-label  
> Labels are placed inside of an __ion-item__ element and can be used to describe an __ion-input__, __ion-toggle__, __ion-checkbox__, and more.
>[demo](http://localhost:8080/label)

## demo
```html
  <ion-label>哈哈哈</ion-label>
  <ion-label color="danger">danger label 哈哈哈</ion-label>
```

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| fixed| A persistent label that sits next the input | - | - | - |
| floating | A label that will float above the input if the input is empty or loses focus. | - | - | - |
| stacked | A stacked label will always appear on top of the input. | - | - | - |


## Input Properties

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color| The predefined color to use | string | 'primary','secondary','danger'| - |