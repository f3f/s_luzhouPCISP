$(function(){
  layui.use('layer', function(){});
})
function queryList(pageNum) {
  var user = getUserInfo();
  //console.log(user.username);
  // ajaxPost('creditliquor/objectionlist',{
  //   'page': pageNum ? pageNum : 1,
  //   'rows':10,
  //   'department':user.department,
  //   'proposer':$('#proposer').val(),
  //   'objectionObject':$('#objectionObject').val(),
  //   'objectionTitle':$('#objectionTitle').val(),
  //   'startTime':$('#startTime').val(),
  //   'endTime':$('#endTime').val(),
  // },function (res) {
  var res = {
      "result":"1",
      "msg":"成功",
      "data":[
          {"DISPOSE_STATE":1,"ID":"6121ED93A23A2AC3E053D404A8C05768","PROPOSER":"sdfsd ","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系 ","APPLY_TIME":"2017-12-25"},
          {"DISPOSE_STATE":1,"ID":"5FA4426EC8B269FAE053D404A8C07149","PROPOSER":"cehsi-12-6","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-12-06"},
          {"DISPOSE_STATE":1,"ID":"5F576A26F08B1250E053D404A8C0B55E","PROPOSER":"test3","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-12-02"},
          {"DISPOSE_STATE":1,"ID":"5E91953AFB1C3314E053D404A8C04E1A","PROPOSER":"15666666666","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-11-22"},
          {"DISPOSE_STATE":1,"ID":"5E79FA71909F63F6E053D404A8C07279","PROPOSER":"13312345678","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-11-21"},
          {"DISPOSE_STATE":1,"ID":"5E79FA71909E63F6E053D404A8C07279","PROPOSER":"13312345678","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-11-21"},
          {"DISPOSE_STATE":1,"ID":"5E79C1E9E64F5AD7E053D404A8C061DC","PROPOSER":"em","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-11-21"},
          {"DISPOSE_STATE":1,"ID":"5E78DC353CB332EAE053D404A8C0ED6E","PROPOSER":"美少女","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-11-21"},
          {"DISPOSE_STATE":1,"ID":"5E678F77519D596FE053D404A8C004E8","PROPOSER":"rrrrrrrr","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-11-20"},
          {"DISPOSE_STATE":0,"ID":"5E678F77519C596FE053D404A8C004E8","PROPOSER":"rrrrrrrr","OBJECTION_OBJECT":"市发展改革委","OBJECTION_TITLE":"泸州市从六个方面建立完善公务员信用体系","APPLY_TIME":"2017-11-20"}
      ],
      "count":12
  }
    if (res.result=='1'){
        //var dataList = res.data;
        var html= template('template_id',res);
        $('#table-list').html(html);
        pagination('#pager',res.count,function (pageNum) {
          queryList(pageNum);
        });
    }
  // },function (err) {
  //   console.log(err.msg);
  // });
}
function queryDetial() {
  var rlParam = GetUrlParam();
  ajaxPost('creditliquor/objectiondetail',{
    'id': rlParam.ID,
  },function (res) {
    if (res.result=='1'){
      var html = template('template_id',res);
      $('#detial-content').html(html);
    }
  },function (err) {
    console.log(err.msg);
  });
}
function handle(id) {
  var user = getUserInfo();
  ajaxPost('creditliquor/updateobjection',{
    'id': id,
    department:user.department,
    acceptor:user.username,
    disposeResult:$('#disposeResult').val(),
  },function (res) {
    if (res.result == '1'){
      layer.alert('办理成功！',{
        time: 2000 ,
        end: function(){ go(); }
      });
    }
  },function (err) {
    console.log(err.msg);
  });
}
