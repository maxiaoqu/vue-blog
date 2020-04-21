function $toolbar_left_undo_click($this) {
    if ($this.d_history_index > 0) {
        $this.d_history_index--
    }
    // $this.$refs.vNoteDivEdit.innerHTML = $this.s_markdown.render($this.d_value)
    $this.$nextTick(() => {
        // 光标操作
        let start = $this.textarea_selectionEnds[$this.d_history_index];
        $this.getTextareaDom().selectionStart = start
        $this.getTextareaDom().selectionEnd = start
    })
    $this.getTextareaDom().focus()
}
// redo
function $toolbar_left_redo_click($this) {
    if ($this.d_history_index < $this.d_history.length - 1) {
        $this.d_history_index++
    }
    $this.$nextTick(() => {
        let start = $this.textarea_selectionEnds[$this.d_history_index];
        $this.getTextareaDom().selectionStart = start
        $this.getTextareaDom().selectionEnd = start
    })
    $this.getTextareaDom().focus()
    // $this.$refs.vNoteDivEdit.innerHTML = $this.s_markdown.render($this.d_value)
}
function $toolbar_left_trash_click($this) {
    $this.d_value = ''
    $this.getTextareaDom().focus()
    // $this.$refs.vNoteDivEdit.innerHTML = $this.s_markdown.render($this.d_value)
}
function $toolbar_left_save_click($this) {
    $this.save($this.d_value, $this.d_render)
}
// ol
function $toolbar_left_ol_click($this) {
    $this.insertOl()
}
// ul
function $toolbar_left_ul_click($this) {
    $this.insertUl()
}
function $toolbar_left_remove_line_click($this) {
    $this.removeLine()
}
// 直接添加链接
export const toolbar_left_addlink = (type, text, link, $this) => {
    let insert_text = {
        prefix: type === 'link' ? `[${text}](` : `![${text}](`,
        subfix: ')',
        str: link
    };
    $this.insertText($this.getTextareaDom(), insert_text);
}
export const toolbar_left_click = (_type, $this) => {
     var _param_of_insert_text = {
         'bold': {
             prefix: '**',
             subfix: '**',
             str: $this.d_words.tl_bold
         },
         'italic': {
             prefix: '*',
             subfix: '*',
             str: $this.d_words.tl_italic
         },
         'header': {
             prefix: '# ',
             subfix: '',
             str: $this.d_words.tl_header
         },
         'header1': {
             prefix: '# ',
             subfix: '',
             str: $this.d_words.tl_header_one
         },
         'header2': {
             prefix: '## ',
             subfix: '',
             str: $this.d_words.tl_header_two
         },
         'header3': {
             prefix: '### ',
             subfix: '',
             str: $this.d_words.tl_header_three
         },
         'header4': {
             prefix: '#### ',
             subfix: '',
             str: $this.d_words.tl_header_four
         },
         'header5': {
             prefix: '##### ',
             subfix: '',
             str: $this.d_words.tl_header_five
         },
         'header6': {
             prefix: '###### ',
             subfix: '',
             str: $this.d_words.tl_header_six
         },
         'underline': {
             prefix: '++',
             subfix: '++',
             str: $this.d_words.tl_underline
         },
         'strikethrough': {
             prefix: '~~',
             subfix: '~~',
             str: $this.d_words.tl_strikethrough
         },
         'mark': {
             prefix: '==',
             subfix: '==',
             str: $this.d_words.tl_mark
         },
         'superscript': {
             prefix: '^',
             subfix: '^',
             str: $this.d_words.tl_superscript
         },
         'subscript': {
             prefix: '~',
             subfix: '~',
             str: $this.d_words.tl_subscript
         },
         'quote': {
             prefix: '> ',
             subfix: '',
             str: $this.d_words.tl_quote
         },
         'link': {
             prefix: '[](',
             subfix: ')',
             str: $this.d_words.tl_link
         },
         'imagelink': {
             prefix: '![](',
             subfix: ')',
             str: $this.d_words.tl_image
         },
         'code': {
             prefix: '```',
             subfix: '\n\n```\n',
             str: 'language'
         },
         'table': {
             prefix: '',
             subfix: '',
             str: '|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|\n'
         },
         'aligncenter': {
           prefix: '::: hljs-center\n\n',
           subfix: '\n\n:::\n',
           str: $this.d_words.tl_aligncenter
         },
         'alignright': {
           prefix: '::: hljs-right\n\n',
           subfix: '\n\n:::\n',
           str: $this.d_words.tl_alignright
         },
         'alignleft': {
           prefix: '::: hljs-left\n\n',
           subfix: '\n\n:::\n',
           str: $this.d_words.tl_alignleft
         }
     };
     if (_param_of_insert_text.hasOwnProperty(_type)) {
         // 插入对应的内容
         $this.insertText($this.getTextareaDom(),
             _param_of_insert_text[_type]);
     }
     var _other_left_click = {
         'undo': $toolbar_left_undo_click,
         'redo': $toolbar_left_redo_click,
         'trash': $toolbar_left_trash_click,
         'save': $toolbar_left_save_click,
         'ol': $toolbar_left_ol_click,
         'ul': $toolbar_left_ul_click,
         'removeLine': $toolbar_left_remove_line_click
     };
     if (_other_left_click.hasOwnProperty(_type)) {
         _other_left_click[_type]($this);
     }
 }
