/**
 *
 * @author xierenyuan@qq.com
 * @export
 *
 */
import "./sass/ui.scss";
import "ionicons/dist/css/ionicons.css";
import "./themes/ionic.build.default.scss";
import util from "./utils/util";
import VueTonch from "./utils/vue-touch";
import App from "./components/app";
import Button from "./components/button";
import Icon from "./components/icon";
import { Header, Footer, ToolBar, Title, Buttons } from "./components/header";
import Content from "./components/content";
import Label from "./components/label";
import { List, ListHeader } from "./components/list";
import Item from "./components/item";
import ItemGroup from "./components/item-group";
import Note from "./components/note";
import Thumbnail from "./components/thumbnail";
import Avatar from "./components/avatar";
import ItemSliding from "./components/item-sliding";
import ItemSlidingTest from "./components/item-sliding/index-test";
import ItemOptions from "./components/item-options";
import Input from "./components/input";
import Backgroup from "./components/backdrop";
import ActionSheet from "./components/action-sheet";

const VERSION = '0.0.1';
const DEFAULT_CONFIG = {
    theme: 'ios',
    version: VERSION,
    iconMode: ''
};
const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Vue.use(VueTonch);
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(App.name, App);
    Vue.component(Header.name, Header);
    Vue.component(Footer.name, Footer);
    Vue.component(ToolBar.name, ToolBar);
    Vue.component(Title.name, Title);
    Vue.component(Buttons.name, Buttons);
    Vue.component(Content.name, Content);
    Vue.component(Label.name, Label);
    Vue.component(List.name, List);
    Vue.component(ListHeader.name, ListHeader);
    Vue.component(Item.name, Item);
    Vue.component(ItemGroup.name, ItemGroup);
    Vue.component(Note.name, Note);
    Vue.component(Thumbnail.name, Thumbnail);
    Vue.component(Avatar.name, Avatar);
    Vue.component(ItemSliding.name, ItemSliding);
    Vue.component(ItemSlidingTest.name, ItemSlidingTest);
    Vue.component(ItemOptions.name, ItemOptions);
    Vue.component(Input.name, Input);
    Vue.component(Backgroup.name, Backgroup);
    Vue.prototype.$actionSheet = ActionSheet;
    Vue.prototype.$ionic = util.extend(DEFAULT_CONFIG, opts);

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    version: VERSION,
    install,
    Button,
    Header,
    Footer,
    ToolBar,
    Title,
    Buttons,
    Content,
    Label,
    List,
    ListHeader,
    Item,
    ItemGroup,
    Note,
    Thumbnail,
    Avatar,
    ItemSliding,
    ItemOptions,
    Input,
    Backgroup,
    ActionSheet
};