/**
 * ion-note 
 * @author xierenyuan@qq.com
 */

import Note from './src/note.vue';

Note.install = function() {
    Vue.component(Note.name, Note);
};

export default Note;