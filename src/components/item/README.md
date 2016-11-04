# ion-item
> 时间关系.. 我后边在慢慢补充文档吧...

## demo 
```html
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>list</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="outer-content">
            <ion-list>
                <ion-list-header>
                    Settings
                    <ion-button icon-only item-right slot="item-right" type="clear">
                        <ion-icon name="cog"></ion-icon>
                    </ion-button>
                </ion-list-header>
                <ion-item-group>
                    <ion-item>
                        <ion-icon slot="item-left" name="plane" item-left color="danger"></ion-icon>
                        <ion-label>Airplane Mode</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="wifi" item-left color="primary"></ion-icon>
                        <ion-label>哈哈哈</ion-label>
                        <ion-note slot="item-right">note</ion-note>
                    </ion-item>
                    <ion-item type="link">
                        <ion-icon slot="item-left" name="bluetooth" item-left color="primary"></ion-icon>
                        <ion-label>Bluetooth</ion-label>
                        <ion-note slot="item-right">off</ion-note>
                    </ion-item>
                </ion-item-group>
                <ion-item type="divider">
                    Other Settings
                </ion-item>
                <ion-item-group>
                    <ion-item>
                        <ion-icon slot="item-left" name="plane" item-left color="danger"></ion-icon>
                        <ion-label>Airplane Mode</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="wifi" item-left color="primary"></ion-icon>
                        <ion-label>哈哈哈</ion-label>
                        <ion-note slot="item-right">note</ion-note>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="bluetooth" item-left color="primary"></ion-icon>
                        <ion-label>Bluetooth</ion-label>
                        <ion-note slot="item-right">off</ion-note>
                    </ion-item>
                </ion-item-group>
            </ion-list>
            <ion-list>
                <ion-list-header>
                    Apps Installed
                </ion-list-header>
                <ion-item>
                    <ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
                    <ion-label>Ionic View</ion-label>
                    <ion-button type="outline" slot="item-right" item-right>
                        Uninstall
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-icon name="brush" slot="item-left" item-left color="primary"></ion-icon>
                    <ion-label>Ionic brush</ion-label>
                    <ion-button type="outline" slot="item-right" item-right>
                        Uninstall
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-icon name="logo-octocat" slot="item-left" item-left color="dark"></ion-icon>
                    <ion-label>Hubstruck</ion-label>
                    <ion-button type="outline" slot="item-right" item-right>
                        Uninstall
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-icon name="paw" slot="item-left" item-left color="danger"></ion-icon>
                    <ion-label>Barkpark</ion-label>
                    <ion-button type="outline" slot="item-right" item-right>
                        Uninstall
                    </ion-button>
                </ion-item>
            </ion-list>
        </ion-content>
```
