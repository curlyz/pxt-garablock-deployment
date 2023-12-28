!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],e);else{var i="object"==typeof exports?e(require("blockly/core")):e(t.Blockly);for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(this,(function(t){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(e,i){e.exports=t},function(t,e,i){"use strict";i.r(e),i.d(e,"WorkspaceSearch",(function(){return l}));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const s=["path.blocklyPath.blockly-ws-search-highlight {","fill: black;","}","path.blocklyPath.blockly-ws-search-highlight.blockly-ws-search-current {","fill: grey;","}",".blockly-ws-search-close-btn {","background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=) no-repeat top left;","}",".blockly-ws-search-next-btn {","background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNNy40MSA4LjU5TDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNiAxLjQxLTEuNDF6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PC9zdmc+) no-repeat top left;","}",".blockly-ws-search-previous-btn {","background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==) no-repeat top left;","}",".blockly-ws-search {","background: white;","border: solid lightgrey .5px;","box-shadow: 0px 10px 20px grey;","justify-content: center;","padding: .25em;","position: absolute;","z-index: 70;","}",".blockly-ws-search-input input {","border: none;","}",".blockly-ws-search button {","border: none;","}",".blockly-ws-search-actions {","display: flex;","}",".blockly-ws-search-container {","display: flex;","}",".blockly-ws-search-content {","display: flex;","}"],n=function(){let t=!1;return function(){if(t)return;t=!0;const e=s.join("\n"),i=document.createElement("style");i.id="blockly-ws-search-style";const n=document.createTextNode(e);i.appendChild(n),document.head.insertBefore(i,document.head.firstChild)}}();var o=i(0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class l{constructor(t){this.workspace_=t,this.id="workspaceSearch",this.htmlDiv_=null,this.actionDiv_=null,this.inputElement_=null,this.textInputPlaceholder_="Search",this.blocks_=[],this.currentBlockIndex_=-1,this.searchText_="",this.searchOnInput=!0,this.caseSensitive=!1,this.preserveSelected=!0,this.boundEvents_=[]}init(){this.workspace_.getComponentManager().addComponent({component:this,weight:0,capabilities:[o.ComponentManager.Capability.POSITIONABLE]}),n(),this.createDom_(),this.setVisible_(!1),this.workspace_.resize()}dispose(){for(const t of this.boundEvents_)o.unbindEvent_(t);this.boundEvents_=null,this.htmlDiv_&&(this.htmlDiv_.remove(),this.htmlDiv_=null),this.actionDiv_=null,this.inputElement_=null}createDom_(){const t=this.workspace_.getInjectionDiv();this.addEvent_(t,"keydown",this,t=>this.onWorkspaceKeyDown_(t)),this.htmlDiv_=document.createElement("div"),o.utils.dom.addClass(this.htmlDiv_,"blockly-ws-search");const e=document.createElement("div");o.utils.dom.addClass(e,"blockly-ws-search-container");const i=document.createElement("div");o.utils.dom.addClass(i,"blockly-ws-search-content"),e.appendChild(i);const s=document.createElement("div");o.utils.dom.addClass(s,"blockly-ws-search-input"),this.inputElement_=this.createTextInput_(),this.addEvent_(this.inputElement_,"keydown",this,t=>this.onKeyDown_(t)),this.addEvent_(this.inputElement_,"input",this,()=>this.onInput_()),this.addEvent_(this.inputElement_,"click",this,()=>this.searchAndHighlight(this.searchText_,this.preserveSelected)),s.appendChild(this.inputElement_),i.appendChild(s),this.actionDiv_=document.createElement("div"),o.utils.dom.addClass(this.actionDiv_,"blockly-ws-search-actions"),i.appendChild(this.actionDiv_);const n=this.createNextBtn_();n&&this.addActionBtn(n,()=>this.next());const l=this.createPreviousBtn_();l&&this.addActionBtn(l,()=>this.previous());const c=this.createCloseBtn_();c&&(this.addBtnListener_(c,()=>this.close()),e.appendChild(c)),this.htmlDiv_.appendChild(e),t.insertBefore(this.htmlDiv_,this.workspace_.getParentSvg())}addEvent_(t,e,i,s){const n=o.bindEventWithChecks_(t,e,i,s);this.boundEvents_.push(n)}addActionBtn(t,e){this.addBtnListener_(t,e),this.actionDiv_.appendChild(t)}createTextInput_(){const t=document.createElement("input");return t.type="text",t.setAttribute("placeholder",this.textInputPlaceholder_),t}createNextBtn_(){return this.createBtn_("blockly-ws-search-next-btn","Find next")}createPreviousBtn_(){return this.createBtn_("blockly-ws-search-previous-btn","Find previous")}createCloseBtn_(){return this.createBtn_("blockly-ws-search-close-btn","Close search bar")}createBtn_(t,e){const i=document.createElement("button");return o.utils.dom.addClass(i,t),i.setAttribute("aria-label",e),i}addBtnListener_(t,e){this.addEvent_(t,"click",this,e),this.addEvent_(t,"keydown",this,t=>{t.keyCode===o.utils.KeyCodes.ENTER?(e(t),t.preventDefault()):t.keyCode===o.utils.KeyCodes.ESC&&this.close(),t.stopPropagation()})}getBoundingRectangle(){const t=this.htmlDiv_.style.top,e=this.htmlDiv_.style.left;return new o.utils.Rect(t,t+this.htmlDiv_.style.height,e,e+this.htmlDiv_.style.width)}position(t,e){this.workspace_.RTL?this.htmlDiv_.style.left=t.absoluteMetrics.left+"px":t.toolboxMetrics.position===o.TOOLBOX_AT_RIGHT?this.htmlDiv_.style.right=t.toolboxMetrics.width+"px":this.htmlDiv_.style.right="0",this.htmlDiv_.style.top=t.absoluteMetrics.top+"px"}onInput_(){if(this.searchOnInput){const t=this.inputElement_.value.trim();t!==this.searchText_&&this.searchAndHighlight(t,this.preserveSelected)}}onKeyDown_(t){if(t.keyCode===o.utils.KeyCodes.ESC)this.close();else if(t.keyCode===o.utils.KeyCodes.ENTER)if(this.searchOnInput)this.next();else{const t=this.inputElement_.value.trim();t!==this.searchText_&&this.searchAndHighlight(t,this.preserveSelected)}}onWorkspaceKeyDown_(t){(t.ctrlKey||t.metaKey)&&t.keyCode===o.utils.KeyCodes.F&&(this.open(),t.preventDefault(),t.stopPropagation())}previous(){this.setCurrentBlock_(this.currentBlockIndex_-1)}next(){this.setCurrentBlock_(this.currentBlockIndex_+1)}setSearchPlaceholder(t){this.textInputPlaceholder_=t,this.inputElement_&&this.inputElement_.setAttribute("placeholder",this.textInputPlaceholder_)}setCurrentBlock_(t){if(!this.blocks_.length)return;let e=this.blocks_[this.currentBlockIndex_];e&&this.unhighlightCurrentSelection_(e),this.currentBlockIndex_=(t%this.blocks_.length+this.blocks_.length)%this.blocks_.length,e=this.blocks_[this.currentBlockIndex_],this.highlightCurrentSelection_(e),this.scrollToVisible_(e)}open(){this.setVisible_(!0),this.inputElement_.focus(),this.searchText_&&this.searchAndHighlight(this.searchText_)}close(){this.setVisible_(!1),this.workspace_.markFocused(),this.clearBlocks()}setVisible_(t){this.htmlDiv_.style.display=t?"flex":"none"}searchAndHighlight(t,e){const i=this.blocks_[this.currentBlockIndex_];this.searchText_=t.trim(),this.clearBlocks(),this.blocks_=this.getMatchingBlocks_(this.workspace_,this.searchText_,this.caseSensitive),this.highlightSearchGroup_(this.blocks_);let s=0;e&&(s=this.blocks_.indexOf(i),s=s>-1?s:0),this.setCurrentBlock_(s)}getSearchPool_(t){return t.getAllBlocks(!0).filter(t=>{const e=t.getSurroundParent();return!e||!e.isCollapsed()})}isBlockMatch_(t,e,i){let s="";if(t.isCollapsed())s=t.toString();else{const e=[];t.inputList.forEach(t=>{t.fieldRow.forEach(t=>{e.push(t.getText())})}),s=e.join(" ").trim()}return i||(s=s.toLowerCase()),s.indexOf(e)>-1}getMatchingBlocks_(t,e,i){if(!e)return[];return this.caseSensitive||(e=e.toLowerCase()),this.getSearchPool_(t).filter(t=>this.isBlockMatch_(t,e,i))}clearBlocks(){this.unhighlightSearchGroup_(this.blocks_);const t=this.blocks_[this.currentBlockIndex_];t&&this.unhighlightCurrentSelection_(t),this.currentBlockIndex_=-1,this.blocks_=[]}highlightCurrentSelection_(t){const e=t.pathObject.svgPath;o.utils.dom.addClass(e,"blockly-ws-search-current")}unhighlightCurrentSelection_(t){const e=t.pathObject.svgPath;o.utils.dom.removeClass(e,"blockly-ws-search-current")}highlightSearchGroup_(t){t.forEach(t=>{const e=t.pathObject.svgPath;o.utils.dom.addClass(e,"blockly-ws-search-highlight")})}unhighlightSearchGroup_(t){t.forEach(t=>{const e=t.pathObject.svgPath;o.utils.dom.removeClass(e,"blockly-ws-search-highlight")})}scrollToVisible_(t){if(!this.workspace_.isMovable())return;const e=t.getRelativeToSurfaceXY(),i=this.workspace_.scale,s=t.width*i,n=t.height*i,o=e.y*i,l=(e.y+t.height)*i,c=this.workspace_.RTL?e.x*i-s:e.x*i,h=this.workspace_.RTL?e.x*i:e.x*i+s,r=this.workspace_.getMetrics();let a=r.viewLeft;const d=c<r.viewLeft,u=h>r.viewLeft+r.viewWidth,p=s>r.viewWidth;!p&&d||p&&!this.workspace_.RTL?a=c:(!p&&u||p&&this.workspace_.RTL)&&(a=h-r.viewWidth);let _=r.viewTop;const g=o<r.viewTop,b=l>r.viewTop+r.viewHeight,y=n>r.viewHeight;if(g||y&&b?_=o:b&&(_=l-r.viewHeight),a!==r.viewLeft||_!==r.viewTop){const t=document.activeElement;this.workspace_.scroll(-a,-_),t&&t.focus()}}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */}])}));
//# sourceMappingURL=index.js.map
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],t);else{var o="object"==typeof exports?t(require("blockly/core")):t(e.Blockly);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,(function(e){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=1)}([function(t,o){t.exports=e},function(e,t,o){"use strict";o.r(t),o.d(t,"Constants",(function(){return r})),o.d(t,"FlyoutCursor",(function(){return a})),o.d(t,"FlyoutCursorPluginInfo",(function(){return l})),o.d(t,"LineCursor",(function(){return d})),o.d(t,"LineCursorPluginInfo",(function(){return y})),o.d(t,"Navigation",(function(){return h})),o.d(t,"NavigationController",(function(){return S}));var r={};o.r(r),o.d(r,"STATE",(function(){return s})),o.d(r,"SHORTCUT_NAMES",(function(){return i})),o.d(r,"LOGGING_MSG_TYPE",(function(){return n}));
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const s={WORKSPACE:"workspace",FLYOUT:"flyout",TOOLBOX:"toolbox"},i={PREVIOUS:"previous",NEXT:"next",IN:"in",OUT:"out",INSERT:"insert",MARK:"mark",DISCONNECT:"disconnect",TOOLBOX:"toolbox",EXIT:"exit",TOGGLE_KEYBOARD_NAV:"toggle_keyboard_nav",COPY:"keyboard_nav_copy",CUT:"keyboard_nav_cut",PASTE:"keyboard_nav_paste",DELETE:"keyboard_nav_delete",MOVE_WS_CURSOR_UP:"workspace_up",MOVE_WS_CURSOR_DOWN:"workspace_down",MOVE_WS_CURSOR_LEFT:"workspace_left",MOVE_WS_CURSOR_RIGHT:"workspace_right"},n={ERROR:"error",WARN:"warn",LOG:"log"};var c=o(0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class a extends c.Cursor{constructor(){super()}next(){const e=this.getCurNode();if(!e)return null;const t=e.next();return t&&this.setCurNode(t),t}in(){return null}prev(){const e=this.getCurNode();if(!e)return null;const t=e.prev();return t&&this.setCurNode(t),t}out(){return null}}const u=c.registry.Type.CURSOR;c.registry.register(u,"FlyoutCursor",a);const l={[u]:"FlyoutCursor"};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class d extends c.BasicCursor{constructor(){super()}next(){const e=this.getCurNode();if(!e)return null;let t=this.getNextNode_(e,this.validLineNode);return t&&(t.getType()==c.ASTNode.types.INPUT||t.getType()==c.ASTNode.types.NEXT)&&t.getLocation().targetBlock()&&(t=this.getNextNode_(t,this.validLineNode)),t&&this.setCurNode(t),t}in(){const e=this.getCurNode();if(!e)return null;const t=this.getNextNode_(e,this.validInLineNode);return t&&this.setCurNode(t),t}prev(){const e=this.getCurNode();if(!e)return null;let t=this.getPreviousNode_(e,this.validLineNode);return t&&(t.getType()==c.ASTNode.types.INPUT||t.getType()==c.ASTNode.types.NEXT)&&t.getLocation().targetBlock()&&(t=this.getPreviousNode_(t,this.validLineNode)),t&&this.setCurNode(t),t}out(){const e=this.getCurNode();if(!e)return null;const t=this.getPreviousNode_(e,this.validInLineNode);return t&&this.setCurNode(t),t}validLineNode(e){if(!e)return!1;let t=!1;const o=e.getLocation(),r=e&&e.getType();return r==c.ASTNode.types.BLOCK?null===o.outputConnection&&(t=!0):(r==c.ASTNode.types.INPUT&&o.type==c.NEXT_STATEMENT||r==c.ASTNode.types.NEXT)&&(t=!0),t}validInLineNode(e){if(!e)return!1;let t=!1;const o=e.getLocation(),r=e&&e.getType();return(r==c.ASTNode.types.FIELD||r==c.ASTNode.types.INPUT&&o.type==c.INPUT_VALUE)&&(t=!0),t}}const g=c.registry.Type.CURSOR;c.registry.register(g,"LineCursor",d);const y={[g]:"LineCursor"};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class h{constructor(){this.workspaceStates={},this.loggingCallback=null,this.WS_MOVE_DISTANCE=40,this.MARKER_NAME="local_marker_1",this.DEFAULT_WS_COORDINATE=new c.utils.Coordinate(100,100),this.WS_COORDINATE_ON_DELETE=new c.utils.Coordinate(100,100),this.wsChangeWrapper=this.workspaceChangeListener.bind(this),this.flyoutChangeWrapper=this.flyoutChangeListener.bind(this),this.workspaces=[]}addWorkspace(e){this.workspaces.push(e);const t=e.getFlyout();e.getMarkerManager().registerMarker(this.MARKER_NAME,new c.Marker),e.addChangeListener(this.wsChangeWrapper),t&&this.addFlyout(t)}removeWorkspace(e){const t=this.workspaces.indexOf(e),o=e.getFlyout();e.getCursor()&&this.disableKeyboardAccessibility(e),t>-1&&this.workspaces.splice(t,1),e.getMarkerManager()&&e.getMarkerManager().unregisterMarker(this.MARKER_NAME),e.removeChangeListener(this.wsChangeWrapper),o&&this.removeFlyout(o)}setState(e,t){this.workspaceStates[e.id]=t}getState(e){return this.workspaceStates[e.id]}getMarker(e){return e.getMarker(this.MARKER_NAME)}addFlyout(e){const t=e.getWorkspace();t.addChangeListener(this.flyoutChangeWrapper);const o=c.registry.getClass(u,"FlyoutCursor");t.getMarkerManager().setCursor(new o)}removeFlyout(e){e.getWorkspace().removeChangeListener(this.flyoutChangeWrapper)}workspaceChangeListener(e){const t=c.Workspace.getById(e.workspaceId);if(t&&t.keyboardAccessibilityMode)switch(e.type){case c.Events.DELETE:this.handleBlockDeleteByDrag(t,e);break;case c.Events.BLOCK_CHANGE:"mutation"===e.element&&this.handleBlockMutation(t,e);break;case c.Events.CLICK:this.handleWorkspaceClick(t,e);break;case c.Events.TOOLBOX_ITEM_SELECT:this.handleToolboxCategoryClick(t,e);break;case c.Events.BLOCK_CREATE:this.handleBlockCreate(t,e)}}flyoutChangeListener(e){const t=c.Workspace.getById(e.workspaceId),o=t.targetWorkspace,r=o.getFlyout();if(o&&o.keyboardAccessibilityMode&&!r.autoClose)if(e.type===c.Events.CLICK&&"block"===e.targetType){const r=t.getBlockById(e.blockId);this.handleBlockClickInFlyout(o,r)}else if(e.type===c.Events.SELECTED){const r=t.getBlockById(e.newElementId);this.handleBlockClickInFlyout(o,r)}}handleBlockCreate(e,t){this.getState(e)===s.FLYOUT&&(this.resetFlyout(e,!!e.getToolbox()),this.setState(e,s.WORKSPACE))}handleBlockMutation(e,t){const o=t.blockId,r=e.getCursor();if(r){const e=r.getCurNode(),t=e?e.getSourceBlock():null;t&&t.id===o&&r.setCurNode(c.ASTNode.createBlockNode(t))}}handleWorkspaceClick(e,t){this.getState(e)!==s.WORKSPACE&&(this.resetFlyout(e,!!e.getToolbox()),this.setState(e,s.WORKSPACE))}handleToolboxCategoryClick(e,t){const o=this.getState(e);t.newItem&&o!==s.TOOLBOX?this.focusToolbox(e):t.newItem||(this.resetFlyout(e,!!e.getToolbox()),this.setState(e,s.WORKSPACE))}handleBlockDeleteByDrag(e,t){const o=t.blockId,r=t.ids,s=e.getCursor();if(!s||!s.getCurNode()||!s.getCurNode().getSourceBlock())return;const i=s.getCurNode().getSourceBlock();(i.id===o||r.indexOf(i.id)>-1)&&s.setCurNode(c.ASTNode.createWorkspaceNode(e,this.WS_COORDINATE_ON_DELETE))}handleBlockClickInFlyout(e,t){t&&(t.isShadow()&&(t=t.getParent()),this.getFlyoutCursor(e).setCurNode(c.ASTNode.createStackNode(t)),this.setState(e,s.FLYOUT))}moveCursorOnBlockDelete(e,t){if(!e||!e.getCursor())return;const o=e.getCursor(),r=o.getCurNode(),s=r?r.getSourceBlock():null;if(s===t)if(s.getParent()){const e=s.previousConnection||s.outputConnection;e&&o.setCurNode(c.ASTNode.createConnectionNode(e.targetConnection))}else o.setCurNode(c.ASTNode.createWorkspaceNode(s.workspace,s.getRelativeToSurfaceXY()));else s&&t.getChildren(!1).indexOf(s)>-1&&o.setCurNode(c.ASTNode.createWorkspaceNode(s.workspace,s.getRelativeToSurfaceXY()))}focusToolbox(e){const t=e.getToolbox();if(t&&(this.setState(e,s.TOOLBOX),this.resetFlyout(e,!1),this.getMarker(e).getCurNode()||this.markAtCursor(e),!t.getSelectedItem())){const e=t.getToolboxItems();for(let o,r=0;o=e[r];r++)if(o.isSelectable()){t.selectItemByPosition(r);break}}}focusFlyout(e){const t=e.getFlyout();if(this.setState(e,s.FLYOUT),this.getMarker(e).getCurNode()||this.markAtCursor(e),t&&t.getWorkspace()){const o=t.getWorkspace().getTopBlocks(!0);if(o.length>0){const t=c.ASTNode.createStackNode(o[0]);this.getFlyoutCursor(e).setCurNode(t)}}}focusWorkspace(e){c.hideChaff();const t=!!e.getToolbox();this.resetFlyout(e,t),this.setState(e,s.WORKSPACE),this.setCursorOnWorkspaceFocus(e)}setCursorOnWorkspaceFocus(e){const t=e.getTopBlocks(!0),o=e.getCursor(),r=new c.utils.Coordinate(this.DEFAULT_WS_COORDINATE.x/e.scale,this.DEFAULT_WS_COORDINATE.y/e.scale);if(t.length>0)o.setCurNode(c.ASTNode.createTopNode(t[0]));else{const t=c.ASTNode.createWorkspaceNode(e,r);o.setCurNode(t)}}getFlyoutCursor(e){const t=e.getFlyout();return t?t.getWorkspace().getCursor():null}insertFromFlyout(e){const t=this.createNewBlock(e);if(!t)return;const o=this.getMarker(e).getCurNode();this.tryToConnectMarkerAndCursor(e,o,c.ASTNode.createBlockNode(t))||this.warn("Something went wrong while inserting a block from the flyout."),this.focusWorkspace(e),e.getCursor().setCurNode(c.ASTNode.createTopNode(t)),this.removeMark(e)}createNewBlock(e){const t=e.getFlyout();if(!t||!t.isVisible())return this.warn("Trying to insert from the flyout when the flyout does not  exist or is not visible"),null;const o=this.getFlyoutCursor(e).getCurNode().getLocation();if(!o.isEnabled())return this.warn("Can't insert a disabled block."),null;const r=t.createBlock(o);return r.render(),r.setConnectionTracking(!0),r}resetFlyout(e,t){this.getFlyoutCursor(e)&&(this.getFlyoutCursor(e).hide(),t&&e.getFlyout().hide())}connectMarkerAndCursor(e){const t=this.getMarker(e).getCurNode(),o=e.getCursor().getCurNode();return!(!t||!o)&&this.tryToConnectMarkerAndCursor(e,t,o)}tryToConnectMarkerAndCursor(e,t,o){if(!this.logConnectionWarning(t,o))return!1;const r=t.getType(),s=o.getType(),i=o.getLocation(),n=t.getLocation();if(t.isConnection()&&o.isConnection()){const e=i,t=n;return this.connect(e,t)}if(t.isConnection()&&(s==c.ASTNode.types.BLOCK||s==c.ASTNode.types.STACK)){const e=i,t=n;return this.insertBlock(e,t)}if(r==c.ASTNode.types.WORKSPACE){const e=o?o.getSourceBlock():null;return this.moveBlockToWorkspace(e,t)}return this.warn("Unexpected state in tryToConnectMarkerAndCursor."),!1}logConnectionWarning(e,t){if(!e)return this.warn("Cannot insert with no marked node."),!1;if(!t)return this.warn("Cannot insert with no cursor node."),!1;const o=e.getType(),r=t.getType();return o==c.ASTNode.types.FIELD?(this.warn("Should not have been able to mark a field."),!1):o==c.ASTNode.types.BLOCK?(this.warn("Should not have been able to mark a block."),!1):o==c.ASTNode.types.STACK?(this.warn("Should not have been able to mark a stack."),!1):r==c.ASTNode.types.FIELD?(this.warn("Cannot attach a field to anything else."),!1):r!=c.ASTNode.types.WORKSPACE||(this.warn("Cannot attach a workspace to anything else."),!1)}moveBlockToWorkspace(e,t){return!!e&&(e.isShadow()?(this.warn("Cannot move a shadow block to the workspace."),!1):(e.getParent()&&e.unplug(!1),e.moveTo(t.getWsCoordinate()),!0))}disconnectChild(e,t){const o=e.getSourceBlock(),r=t.getSourceBlock();let s;o.getRootBlock()===r.getRootBlock()&&(o.getDescendants(!1).indexOf(r)>-1?(s=this.getInferiorConnection(t),s&&s.disconnect()):(s=this.getInferiorConnection(e),s&&s.disconnect()))}connect(e,t){if(!e||!t)return!1;const o=this.getInferiorConnection(e),r=this.getSuperiorConnection(t),s=this.getSuperiorConnection(e),i=this.getInferiorConnection(t);if(o&&r&&this.moveAndConnect(o,r))return!0;if(s&&i&&this.moveAndConnect(s,i))return!0;if(this.moveAndConnect(e,t))return!0;{const o=e.getConnectionChecker(),r=o.canConnectWithReason(e,t,!1);return this.warn("Connection failed with error: "+o.getErrorMessage(r,e,t)),!1}}getInferiorConnection(e){const t=e.getSourceBlock();return e.isSuperior()?t.previousConnection?t.previousConnection:t.outputConnection?t.outputConnection:null:e}getSuperiorConnection(e){return e.isSuperior()?e:e.targetConnection?e.targetConnection:null}moveAndConnect(e,t){if(!e||!t)return!1;const o=e.getSourceBlock();if(e.getConnectionChecker().canConnect(e,t,!1)&&!t.getSourceBlock().isShadow()){if(this.disconnectChild(e,t),!t.isSuperior()){o.getRootBlock().positionNearConnection(e,t)}return t.connect(e),!0}return!1}insertBlock(e,t){switch(t.type){case c.PREVIOUS_STATEMENT:if(this.connect(e.nextConnection,t))return!0;break;case c.NEXT_STATEMENT:if(this.connect(e.previousConnection,t))return!0;break;case c.INPUT_VALUE:if(this.connect(e.outputConnection,t))return!0;break;case c.OUTPUT_VALUE:for(let o=0;o<e.inputList.length;o++){const r=e.inputList[o].connection;if(r&&r.type===c.INPUT_VALUE&&this.connect(r,t))return!0}if(e.outputConnection&&this.connect(e.outputConnection,t))return!0}return this.warn("This block can not be inserted at the marked location."),!1}disconnectBlocks(e){const t=e.getCursor().getCurNode();if(!t.isConnection())return void this.log("Cannot disconnect blocks when the cursor is not on a connection");const o=t.getLocation();if(!o.isConnected())return void this.log("Cannot disconnect unconnected connection");const r=o.isSuperior()?o:o.targetConnection,s=o.isSuperior()?o.targetConnection:o;if(s.getSourceBlock().isShadow())return void this.log("Cannot disconnect a shadow block");r.disconnect(),s.bumpAwayFrom(r),r.getSourceBlock().getRootBlock().bringToFront();const i=c.ASTNode.createConnectionNode(r);e.getCursor().setCurNode(i)}markAtCursor(e){this.getMarker(e).setCurNode(e.getCursor().getCurNode())}removeMark(e){const t=this.getMarker(e);t.setCurNode(null),t.hide()}enableKeyboardAccessibility(e){this.workspaces.indexOf(e)>-1&&!e.keyboardAccessibilityMode&&(e.keyboardAccessibilityMode=!0,this.focusWorkspace(e))}disableKeyboardAccessibility(e){this.workspaces.indexOf(e)>-1&&e.keyboardAccessibilityMode&&(e.keyboardAccessibilityMode=!1,e.getCursor().hide(),this.getMarker(e).hide(),this.getFlyoutCursor(e)&&this.getFlyoutCursor(e).hide())}log(e){this.loggingCallback?this.loggingCallback(n.LOG,e):console.log(e)}warn(e){this.loggingCallback?this.loggingCallback(n.WARN,e):console.warn(e)}error(e){this.loggingCallback?this.loggingCallback(n.ERROR,e):console.error(e)}moveWSCursor(e,t,o){const r=e.getCursor(),s=e.getCursor().getCurNode();if(s.getType()!==c.ASTNode.types.WORKSPACE)return!1;const i=s.getWsCoordinate(),n=t*this.WS_MOVE_DISTANCE+i.x,a=o*this.WS_MOVE_DISTANCE+i.y;return r.setCurNode(c.ASTNode.createWorkspaceNode(e,new c.utils.Coordinate(n,a))),!0}handleEnterForWS(e){const t=e.getCursor().getCurNode(),o=t.getType();o==c.ASTNode.types.FIELD?t.getLocation().showEditor():t.isConnection()||o==c.ASTNode.types.WORKSPACE?this.markAtCursor(e):o==c.ASTNode.types.BLOCK?this.warn("Cannot mark a block."):o==c.ASTNode.types.STACK&&this.warn("Cannot mark a stack.")}paste(){if(!c.clipboardXml_)return!1;let e=c.clipboardSource_,t=!1;if(e.isFlyout&&(e=e.targetWorkspace),c.clipboardTypeCounts_&&e.isCapacityAvailable(c.clipboardTypeCounts_)){c.Events.setGroup(!0);const o=c.Xml.domToBlock(c.clipboardXml_,e);o&&(this.insertPastedBlock(e,o),c.Events.isEnabled()&&!o.isShadow()&&c.Events.fire(new c.Events.BlockCreate(o)),t=!0),c.Events.setGroup(!1)}return t}insertPastedBlock(e,t){let o=!1;const r=e.getMarker(this.MARKER_NAME).getCurNode();return r&&(o=this.tryToConnectMarkerAndCursor(e,r,c.ASTNode.createBlockNode(t))),o}dispose(){for(const e of this.workspaces)this.removeWorkspace(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const C=c.Gesture.prototype.doWorkspaceClick_;c.Gesture.prototype.doWorkspaceClick_=function(e){C.call(this,e);const t=this.creatorWorkspace_;if(e.shiftKey&&t.keyboardAccessibilityMode){const o=new c.utils.Coordinate(e.clientX,e.clientY),r=c.utils.screenToWsCoordinates(t,o),s=c.ASTNode.createWorkspaceNode(t,r);t.getCursor().setCurNode(s)}};const p=c.Gesture.prototype.doBlockClick_;c.Gesture.prototype.doBlockClick_=function(e){p.call(this,e),!this.targetBlock_.isInFlyout&&this.mostRecentEvent_.shiftKey&&this.targetBlock_.workspace.keyboardAccessibilityMode&&this.creatorWorkspace_.getCursor().setCurNode(c.ASTNode.createTopNode(this.targetBlock_))};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class S{constructor(e){this.navigation=e||new h}init(){this.addShortcutHandlers(),this.registerDefaults()}addShortcutHandlers(){c.FieldColour&&(c.FieldColour.prototype.onShortcut=this.fieldColourHandler),c.FieldDropdown&&(c.FieldDropdown.prototype.onShortcut=this.fieldDropdownHandler),c.Toolbox&&(c.Toolbox.prototype.onShortcut=this.toolboxHandler)}removeShortcutHandlers(){c.FieldColour&&(c.FieldColour.prototype.onShortcut=null),c.FieldDropdown&&(c.FieldDropdown.prototype.onShortcut=null),c.Toolbox&&(c.Toolbox.prototype.onShortcut=null)}fieldColourHandler(e){if(this.picker_)switch(e.name){case i.PREVIOUS:return this.moveHighlightBy_(0,-1),!0;case i.NEXT:return this.moveHighlightBy_(0,1),!0;case i.OUT:return this.moveHighlightBy_(-1,0),!0;case i.IN:return this.moveHighlightBy_(1,0),!0;default:return!1}return c.FieldColour.superClass_.onShortcut.call(this,e)}fieldDropdownHandler(e){if(this.menu_)switch(e.name){case i.PREVIOUS:return this.menu_.highlightPrevious(),!0;case i.NEXT:return this.menu_.highlightNext(),!0;default:return!1}return c.FieldDropdown.superClass_.onShortcut.call(this,e)}toolboxHandler(e){if(!this.selectedItem_)return!1;switch(e.name){case i.PREVIOUS:return this.selectPrevious_();case i.OUT:return this.selectParent_();case i.NEXT:return this.selectNext_();case i.IN:return this.selectChild_();default:return!1}}addWorkspace(e){this.navigation.addWorkspace(e)}removeWorkspace(e){this.navigation.removeWorkspace(e)}enable(e){this.navigation.enableKeyboardAccessibility(e)}disable(e){this.navigation.disableKeyboardAccessibility(e)}fieldShortcutHandler(e,t){const o=e.getCursor();if(!o||!o.getCurNode())return;const r=o.getCurNode();return r.getType()===c.ASTNode.types.FIELD&&r.getLocation().onShortcut(t)}registerPrevious(){const e={name:i.PREVIOUS,preconditionFn:e=>e.keyboardAccessibilityMode,callback:(e,t,o)=>{const r=e.getFlyout(),i=e.getToolbox();let n=!1;switch(this.navigation.getState(e)){case s.WORKSPACE:return n=this.fieldShortcutHandler(e,o),n||(e.getCursor().prev(),n=!0),n;case s.FLYOUT:return n=this.fieldShortcutHandler(e,o),n||(r.getWorkspace().getCursor().prev(),n=!0),n;case s.TOOLBOX:return!(!i||"function"!=typeof i.onShortcut)&&i.onShortcut(o);default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.W,e.name)}registerToggleKeyboardNav(){const e={name:i.TOGGLE_KEYBOARD_NAV,callback:e=>(e.keyboardAccessibilityMode?this.navigation.disableKeyboardAccessibility(e):this.navigation.enableKeyboardAccessibility(e),!0)};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.K,[c.utils.KeyCodes.CTRL,c.utils.KeyCodes.SHIFT]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name)}registerOut(){const e={name:i.OUT,preconditionFn:e=>e.keyboardAccessibilityMode,callback:(e,t,o)=>{const r=e.getToolbox();let i=!1;switch(this.navigation.getState(e)){case s.WORKSPACE:return i=this.fieldShortcutHandler(e,o),i||(e.getCursor().out(),i=!0),i;case s.FLYOUT:return this.navigation.focusToolbox(e),!0;case s.TOOLBOX:return!(!r||"function"!=typeof r.onShortcut)&&r.onShortcut(o);default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.A,e.name)}registerNext(){const e={name:i.NEXT,preconditionFn:e=>e.keyboardAccessibilityMode,callback:(e,t,o)=>{const r=e.getToolbox(),i=e.getFlyout();let n=!1;switch(this.navigation.getState(e)){case s.WORKSPACE:return n=this.fieldShortcutHandler(e,o),n||(e.getCursor().next(),n=!0),n;case s.FLYOUT:return n=this.fieldShortcutHandler(e,o),n||(i.getWorkspace().getCursor().next(),n=!0),n;case s.TOOLBOX:return!(!r||"function"!=typeof r.onShortcut)&&r.onShortcut(o);default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.S,e.name)}registerIn(){const e={name:i.IN,preconditionFn:e=>e.keyboardAccessibilityMode,callback:(e,t,o)=>{const r=e.getToolbox();let i=!1;switch(this.navigation.getState(e)){case s.WORKSPACE:return i=this.fieldShortcutHandler(e,o),i||(e.getCursor().in(),i=!0),i;case s.TOOLBOX:return i=!(!r||"function"!=typeof r.onShortcut)&&r.onShortcut(o),i||this.navigation.focusFlyout(e),!0;default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.D,e.name)}registerInsert(){const e={name:i.INSERT,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>{switch(this.navigation.getState(e)){case s.WORKSPACE:return this.navigation.connectMarkerAndCursor(e);default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.I,e.name)}registerMark(){const e={name:i.MARK,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>{switch(this.navigation.getState(e)){case s.WORKSPACE:return this.navigation.handleEnterForWS(e),!0;case s.FLYOUT:return this.navigation.insertFromFlyout(e),!0;default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.ENTER,e.name)}registerDisconnect(){const e={name:i.DISCONNECT,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>{switch(this.navigation.getState(e)){case s.WORKSPACE:return this.navigation.disconnectBlocks(e),!0;default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.X,e.name)}registerToolboxFocus(){const e={name:i.TOOLBOX,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>{switch(this.navigation.getState(e)){case s.WORKSPACE:return e.getToolbox()?this.navigation.focusToolbox(e):this.navigation.focusFlyout(e),!0;default:return!1}}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.T,e.name)}registerExit(){const e={name:i.EXIT,preconditionFn:e=>e.keyboardAccessibilityMode,callback:e=>{switch(this.navigation.getState(e)){case s.FLYOUT:case s.TOOLBOX:return this.navigation.focusWorkspace(e),!0;default:return!1}}};c.ShortcutRegistry.registry.register(e,!0),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.ESC,e.name,!0),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.E,e.name,!0)}registerWorkspaceMoveLeft(){const e={name:i.MOVE_WS_CURSOR_LEFT,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>this.navigation.moveWSCursor(e,-1,0)};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.A,[c.utils.KeyCodes.SHIFT]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name)}registerWorkspaceMoveRight(){const e={name:i.MOVE_WS_CURSOR_RIGHT,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>this.navigation.moveWSCursor(e,1,0)};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.D,[c.utils.KeyCodes.SHIFT]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name)}registerWorkspaceMoveUp(){const e={name:i.MOVE_WS_CURSOR_UP,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>this.navigation.moveWSCursor(e,0,-1)};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.W,[c.utils.KeyCodes.SHIFT]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name)}registerWorkspaceMoveDown(){const e={name:i.MOVE_WS_CURSOR_DOWN,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly,callback:e=>this.navigation.moveWSCursor(e,0,1)};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.S,[c.utils.KeyCodes.SHIFT]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name)}registerCopy(){const e={name:i.COPY,preconditionFn:e=>{if(e.keyboardAccessibilityMode&&!e.options.readOnly){const t=e.getCursor().getCurNode();if(t&&t.getSourceBlock()){const e=t.getSourceBlock();return!c.Gesture.inProgress()&&e&&e.isDeletable()&&e.isMovable()}}return!1},callback:e=>{const t=e.getCursor().getCurNode().getSourceBlock();c.hideChaff(),c.copy(t)}};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.C,[c.utils.KeyCodes.CTRL]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name,!0);const o=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.C,[c.utils.KeyCodes.ALT]);c.ShortcutRegistry.registry.addKeyMapping(o,e.name,!0);const r=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.C,[c.utils.KeyCodes.META]);c.ShortcutRegistry.registry.addKeyMapping(r,e.name,!0)}registerPaste(){const e={name:i.PASTE,preconditionFn:e=>e.keyboardAccessibilityMode&&!e.options.readOnly&&!c.Gesture.inProgress(),callback:()=>this.navigation.paste()};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.V,[c.utils.KeyCodes.CTRL]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name,!0);const o=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.V,[c.utils.KeyCodes.ALT]);c.ShortcutRegistry.registry.addKeyMapping(o,e.name,!0);const r=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.V,[c.utils.KeyCodes.META]);c.ShortcutRegistry.registry.addKeyMapping(r,e.name,!0)}registerCut(){const e={name:i.CUT,preconditionFn:e=>{if(e.keyboardAccessibilityMode&&!e.options.readOnly){const t=e.getCursor().getCurNode();if(t&&t.getSourceBlock()){const e=t.getSourceBlock();return!c.Gesture.inProgress()&&e&&e.isDeletable()&&e.isMovable()&&!e.workspace.isFlyout}}return!1},callback:e=>{const t=e.getCursor().getCurNode().getSourceBlock();return c.copy(t),this.navigation.moveCursorOnBlockDelete(e,t),c.deleteBlock(t),!0}};c.ShortcutRegistry.registry.register(e);const t=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.X,[c.utils.KeyCodes.CTRL]);c.ShortcutRegistry.registry.addKeyMapping(t,e.name,!0);const o=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.X,[c.utils.KeyCodes.ALT]);c.ShortcutRegistry.registry.addKeyMapping(o,e.name,!0);const r=c.ShortcutRegistry.registry.createSerializedKey(c.utils.KeyCodes.X,[c.utils.KeyCodes.META]);c.ShortcutRegistry.registry.addKeyMapping(r,e.name,!0)}registerDelete(){const e={name:i.DELETE,preconditionFn:function(e){if(e.keyboardAccessibilityMode&&!e.options.readOnly){const t=e.getCursor().getCurNode();if(t&&t.getSourceBlock()){const e=t.getSourceBlock();return e&&e.isDeletable()}}return!1},callback:(e,t)=>{const o=e.getCursor().getCurNode().getSourceBlock();return t.preventDefault(),!c.Gesture.inProgress()&&(this.navigation.moveCursorOnBlockDelete(e,o),c.deleteBlock(o),!0)}};c.ShortcutRegistry.registry.register(e),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.DELETE,e.name,!0),c.ShortcutRegistry.registry.addKeyMapping(c.utils.KeyCodes.BACKSPACE,e.name,!0)}registerDefaults(){this.registerPrevious(),this.registerNext(),this.registerIn(),this.registerOut(),this.registerDisconnect(),this.registerExit(),this.registerInsert(),this.registerMark(),this.registerToolboxFocus(),this.registerToggleKeyboardNav(),this.registerWorkspaceMoveDown(),this.registerWorkspaceMoveLeft(),this.registerWorkspaceMoveUp(),this.registerWorkspaceMoveRight(),this.registerCopy(),this.registerPaste(),this.registerCut(),this.registerDelete()}dispose(){const e=Object.values(i);for(const t of e)c.ShortcutRegistry.registry.unregister(t);this.removeShortcutHandlers(),this.navigation.dispose()}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */}])}));
//# sourceMappingURL=index.js.map