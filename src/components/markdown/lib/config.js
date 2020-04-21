/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-06T21:40:39+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: config.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-05-06T22:12:49+08:00
 * @License: MIT
 * @Copyright: 2017
 * @desc 初始化配置项
 */

import help_zh_CN from './lang/zh-CN/help_zh-CN.md'
import help_zh_TW from './lang/zh-TW/help_zh-TW.md'
import help_en from './lang/en/help_en.md'

import words_zh_CN from './lang/zh-CN/words_zh-CN.json'
import words_zh_TW from './lang/zh-TW/words_zh-TW.json'
import words_en from './lang/en/words_en.json'
export const CONFIG = {
    'help_zh-CN': help_zh_CN,
    'help_zh-TW': help_zh_TW,
    'help_en': help_en,
    'words_zh-CN': words_zh_CN,
    'words_zh-TW': words_zh_TW,
    'words_en': words_en,
    'langList': ['en', 'zh-CN', 'zh-TW'],
    'toolbars': {
        'bold': true,
        'italic': true,
        'header': true,
        'underline': true,
        'strikethrough': true,
        'mark': true,
        'superscript': true,
        'subscript': true,
        'quote': true,
        'ol': true,
        'ul': true,
        'link': true,
        'imagelink': true,
        'code': true,
        'table': true,
        'undo': true,
        'redo': true,
        'trash': true,
        'save': true,
        'alignleft': true,
        'aligncenter': true,
        'alignright': true,
        'navigation': true,
        'subfield': true,
        'fullscreen': true,
        'readmodel': true,
        'htmlcode': true,
        'help': true,
        'preview': true
    }
};
