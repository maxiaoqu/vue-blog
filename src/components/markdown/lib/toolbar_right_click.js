function $toolbar_right_html_click($this) {
    $this.s_html_code = !$this.s_html_code
    if ($this.htmlcode) {
        $this.htmlcode($this.s_html_code, $this.d_value)
    }
}

function $toolbar_right_help_click($this) {
    $this.s_help = !$this.s_help
    if ($this.helptoggle) {
        $this.helptoggle($this.s_help, $this.d_value)
    }
}
// 导航
function $toolbar_right_read_click($this) {
    let element = $this.$refs.vReadModel
    // 单栏编辑
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function $toolbar_right_preview_click($this) {
    $this.s_preview_switch = !$this.s_preview_switch
    // $this.$refs.vNoteDivEdit.innerHTML = $this.s_markdown.render($this.d_value)
    if ($this.previewtoggle) {
        $this.previewtoggle($this.s_preview_switch, $this.d_value)
    }
}

function $toolbar_right_fullscreen_click($this) {
    $this.s_fullScreen = !$this.s_fullScreen
    if ($this.fullscreen) {
        $this.fullscreen($this.s_fullScreen, $this.d_value)
    }
}
function $toolbar_right_subfield_click ($this) {
    $this.s_subfield = !$this.s_subfield
    $this.s_preview_switch = $this.s_subfield;
    // $this.$refs.vNoteDivEdit.innerHTML = $this.s_markdown.render($this.d_value)
    if ($this.previewtoggle) {
        $this.previewtoggle($this.s_preview_switch, $this.d_value)
    }
    // $this.$refs.vNoteDivEdit.innerHTML = $this.s_markdown.render($this.d_value)
    if ($this.subfieldtoggle) {
        $this.subfieldtoggle($this.s_subfield, $this.d_value)
    }
}
function $toolbar_right_navigation_click($this) {
    $this.s_navigation = !$this.s_navigation
    if ($this.s_navigation) {
        $this.s_preview_switch = true;
    }
    if ($this.navigationtoggle) {
        $this.navigationtoggle($this.s_navigation, $this.d_value)
    }
    if ($this.s_navigation) {
        // 绘制标题导航
        $this.getNavigation($this, false)
    }
}
export const toolbar_right_click = (_type, $this) => {
    var _other_right_click = {
        'help': $toolbar_right_help_click,
        'html': $toolbar_right_html_click,
        'read': $toolbar_right_read_click,
        'preview': $toolbar_right_preview_click,
        'fullscreen': $toolbar_right_fullscreen_click,
        'navigation': $toolbar_right_navigation_click,
        'subfield': $toolbar_right_subfield_click
    }
    if (_other_right_click.hasOwnProperty(_type)) {
        _other_right_click[_type]($this);
    }
}
