webpackJsonp([1],{452:function(e,t,n){function i(e){n(476)}var o=n(16)(n(463),n(488),i,"data-v-78a173d1",null);e.exports=o.exports},458:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},props:["comment"],methods:{renderMarkdown:function(){this.renderedMarkdown="",this.comment.body&&(this.renderedMarkdown=this.$marked(this.comment.body))},openGitHub:function(){window.open(this.comment.user.html_url)}},mounted:function(){var e=this;this.$nextTick(function(){e.renderMarkdown()})}}},463:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(28),o=n.n(i),A=n(17),a=n(481),r=n.n(a);t.default={data:function(){return{issue:null,number:null,comments:[]}},components:{Comment:r.a},methods:o()({},n.i(A.a)(["updateActiveLabel"]),{setActiveLabel:function(e){this.updateActiveLabel(e),this.$router.push("/")},getComments:function(){var e=this;this.issue&&this.issue.comments>0&&this.$gitHubApi.getComments(this,this.issue.comments_url).then(function(t){e.comments=t.data})},getIssue:function(){var e=this;this.$gitHubApi.getIssue(this,this.number).then(function(t){e.issue=t.data,e.getComments()})},back:function(){this.$router.go(-1)},remark:function(){window.open(this.issue.html_url)}}),created:function(){this.$route.params.issue?this.issue=this.$route.params.issue:this.$route.params.number?this.number=this.$route.params.number:this.$router.replace("/")},mounted:function(){var e=this;this.$nextTick(function(){e.issue?e.getComments():e.getIssue()})}}},465:function(e,t,n){t=e.exports=n(448)(!0),t.push([e.i,".comment[data-v-0cd0f8e3]{margin-top:30px;border-radius:4px;border:1px solid #eee}.comment-title[data-v-0cd0f8e3]{height:48px;line-height:48px;background-color:#f9fafc;border-bottom:1px solid #eee;padding:0 30px}.comment-title div[data-v-0cd0f8e3]{cursor:pointer;float:left}.comment-title div img[data-v-0cd0f8e3]{float:left;width:30px;height:30px;margin-top:9px;border-radius:15px;margin-right:12px}.comment-title div span[data-v-0cd0f8e3]{font-size:14px;color:#4b595f}.comment-title .time[data-v-0cd0f8e3]{float:right;margin-right:20px;font-size:12px;color:#849aa4}.markdown-body[data-v-0cd0f8e3]{padding:15px}","",{version:3,sources:["/Users/Aurore/git/SourceTree/BGAIssueBlog/src/components/Comment.vue"],names:[],mappings:"AACA,0BACE,gBAAiB,AACjB,kBAAmB,AACnB,qBAA0B,CAC3B,AACD,gCACE,YAAa,AACb,iBAAkB,AAClB,yBAA0B,AAC1B,6BAAiC,AACjC,cAAkB,CACnB,AACD,oCACI,eAAgB,AAChB,UAAY,CACf,AACD,wCACM,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,mBAAoB,AACpB,iBAAmB,CACxB,AACD,yCACM,eAAgB,AAChB,aAAe,CACpB,AACD,sCACI,YAAa,AACb,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAClB,AACD,gCACE,YAAc,CACf",file:"Comment.vue",sourcesContent:["\n.comment[data-v-0cd0f8e3] {\n  margin-top: 30px;\n  border-radius: 4px;\n  border: solid 1px #eeeeee;\n}\n.comment-title[data-v-0cd0f8e3] {\n  height: 48px;\n  line-height: 48px;\n  background-color: #f9fafc;\n  border-bottom: solid 1px #eeeeee;\n  padding: 0px 30px;\n}\n.comment-title div[data-v-0cd0f8e3] {\n    cursor: pointer;\n    float: left;\n}\n.comment-title div img[data-v-0cd0f8e3] {\n      float: left;\n      width: 30px;\n      height: 30px;\n      margin-top: 9px;\n      border-radius: 15px;\n      margin-right: 12px;\n}\n.comment-title div span[data-v-0cd0f8e3] {\n      font-size: 14px;\n      color: #4b595f;\n}\n.comment-title .time[data-v-0cd0f8e3] {\n    float: right;\n    margin-right: 20px;\n    font-size: 12px;\n    color: #849aa4;\n}\n.markdown-body[data-v-0cd0f8e3] {\n  padding: 15px;\n}\n"],sourceRoot:""}])},469:function(e,t,n){t=e.exports=n(448)(!0),t.push([e.i,".blog-detail-container[data-v-78a173d1]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;overflow:scroll;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.title-container[data-v-78a173d1]{-webkit-box-flex:0;-ms-flex:0 0 48px;flex:0 0 48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f9fafc;padding:0 50px;border-top:1px solid #eee;border-bottom:1px solid #eee}.title-container .title[data-v-78a173d1]{font-size:22px;color:#4b595f;margin-right:30px}.title-container ul[data-v-78a173d1]{list-style:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.title-container .back[data-v-78a173d1]{font-size:14px;color:#4b595f;margin-right:30px;cursor:pointer}.title-container .back img[data-v-78a173d1]{display:inline-block;margin-right:10px;width:18px;height:12px;-o-object-fit:contain;object-fit:contain}.comment-container[data-v-78a173d1]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:scroll;padding:0 50px}.remark[data-v-78a173d1]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:30px 0;height:50px;line-height:50px;text-align:center;border-radius:4px;font-size:16px;background-color:#eff7ff;color:#3593f2}.remark[data-v-78a173d1]:hover{background-color:#3593f2;color:#fff}","",{version:3,sources:["/Users/Aurore/git/SourceTree/BGAIssueBlog/src/views/BlogDetail.vue"],names:[],mappings:"AACA,wCACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,kCACE,mBAAoB,AAChB,kBAAmB,AACf,cAAe,AACvB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AAC1B,eAAkB,AAClB,0BAA8B,AAC9B,4BAAiC,CAClC,AACD,yCACI,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACtB,AACD,qCACI,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CACxB,AACD,wCACI,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,cAAgB,CACnB,AACD,4CACM,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACpB,kBAAoB,CAC5B,AACD,oCACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,gBAAiB,AACjB,cAAkB,CACnB,AACD,yBACE,eAAgB,AAChB,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,iBAAkB,AAC1B,cAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,yBAA0B,AAC1B,aAAe,CAChB,AACD,+BACI,yBAA0B,AAC1B,UAAe,CAClB",file:"BlogDetail.vue",sourcesContent:["\n.blog-detail-container[data-v-78a173d1] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: scroll;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.title-container[data-v-78a173d1] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 48px;\n          flex: 0 0 48px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #f9fafc;\n  padding: 0px 50px;\n  border-top: 1px solid #eeeeee;\n  border-bottom: 1px solid #eeeeee;\n}\n.title-container .title[data-v-78a173d1] {\n    font-size: 22px;\n    color: #4b595f;\n    margin-right: 30px;\n}\n.title-container ul[data-v-78a173d1] {\n    list-style: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.title-container .back[data-v-78a173d1] {\n    font-size: 14px;\n    color: #4b595f;\n    margin-right: 30px;\n    cursor: pointer;\n}\n.title-container .back img[data-v-78a173d1] {\n      display: inline-block;\n      margin-right: 10px;\n      width: 18px;\n      height: 12px;\n      -o-object-fit: contain;\n         object-fit: contain;\n}\n.comment-container[data-v-78a173d1] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  overflow: scroll;\n  padding: 0px 50px;\n}\n.remark[data-v-78a173d1] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 30px 0px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 16px;\n  background-color: #eff7ff;\n  color: #3593f2;\n}\n.remark[data-v-78a173d1]:hover {\n    background-color: #3593f2;\n    color: #ffffff;\n}\n"],sourceRoot:""}])},472:function(e,t,n){var i=n(465);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(449)("35631b27",i,!0)},476:function(e,t,n){var i=n(469);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(449)("55e80560",i,!0)},479:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE4IDEyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTZoMjR2MjRILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzRCNTk1RiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTggNUgzLjgzbDMuNTgtMy41OUw2IDAgMCA2bDYgNiAxLjQxLTEuNDFMMy44MyA3SDE4eiIvPgogICAgPC9nPgo8L3N2Zz4K"},481:function(e,t,n){function i(e){n(472)}var o=n(16)(n(458),n(484),i,"data-v-0cd0f8e3",null);e.exports=o.exports},484:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment"},[n("div",{staticClass:"comment-title"},[n("div",{on:{click:function(t){e.openGitHub()}}},[n("img",{attrs:{src:e.comment.user.avatar_url}}),e._v(" "),n("span",[e._v(e._s(e.comment.user.login))])]),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(e.$moment(e.comment.created_at).format("YYYY-MM-DD HH:mm")))])]),e._v(" "),n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}},488:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.issue?i("div",{staticClass:"blog-detail-container"},[i("div",{staticClass:"title-container"},[i("span",{staticClass:"title"},[e._v(e._s(e.issue.title.trim()))]),e._v(" "),i("ul",e._l(e.issue.labels,function(t){return i("li",{key:t.id,staticClass:"tag tag-small",style:{backgroundColor:"#"+t.color},on:{click:function(n){e.setActiveLabel(t)}}},[e._v(e._s(t.name)+"\n      ")])})),e._v(" "),i("span",{staticClass:"back",on:{click:e.back}},[i("img",{staticClass:"back-icon",attrs:{src:n(479)}}),e._v("返回\n    ")])]),e._v(" "),i("div",{staticClass:"comment-container bga-back-top"},[i("comment",{attrs:{comment:e.issue}}),e._v(" "),e._l(e.comments,function(e){return i("comment",{key:e.id,attrs:{comment:e}})}),e._v(" "),i("div",{staticClass:"remark",on:{click:e.remark}},[e._v("评论")])],2)]):e._e()},staticRenderFns:[]}}});
//# sourceMappingURL=1.05d89a7facad91adc4db.js.map