$(function () {
  layui.use('layer', function(){});
  searchType('#search-type');
  searchRadio('#search-radio');

})
function searchType(id) {
  var t = $(id).find('.type');
  t.eq(0).addClass('checked');
  t.on('click',function () {
    $(this).addClass('checked').siblings().removeClass('checked');
    $('#search-type-val').val($(this).attr('type-data'));
  })
}
function searchRadio(id) {
  var r = $(id).find('input[type="radio"]'),
      _this = $(id).find("input[type='radio']:checked");
  change();
  r.on('change',function () {
     _this = $(this);
     change();
  });
  function change() {
    $(id).find('.radio-btn').removeClass('checked');
    _this.siblings('i').addClass('checked');
  }

}

function search(pageNum) {
  var pageSize = 10;
  // ajaxPost('search',{
  //   'page': pageNum ? pageNum : 1,
  //   'rows':pageSize,
  //   'type':$('#search-type-val').val(),
  //   'index':$('input[name="search-radio"]:checked').val(),
  //   'value':$('#search-input').val()
  // },function (res) {
    //console.log(res)
    var res = {"result":"1","msg":"成功","data":[{"CODE":"91510521MA6227G601","PERSON":"","NAME":"四川四获益建设有限公司"},{"CODE":"91510502MA6222D33H","PERSON":"","NAME":"泸州汇渝广告有限公司"},{"CODE":"91510524MA6221XG4H","PERSON":"","NAME":"叙永县锦桃商贸有限公司"},{"CODE":"915105030667500234","PERSON":"","NAME":"泸州老陈曲坊酒类营销有限公司"},{"CODE":"91510503MA62270T7E","PERSON":"","NAME":"泸州市纳溪区鑫耀文化传播有限公司"},{"CODE":"91510503345852460E","PERSON":"","NAME":"泸州呈庄农业有限公司"},{"CODE":"91510522MA62290A7W","PERSON":"","NAME":"合江县凤鸣镇梁都坝村集体资产经营管理有限责任公司"},{"CODE":"915105043093683725","PERSON":"","NAME":"泸州鑫通汽车销售服务有限公司"},{"CODE":"91510522708935602T","PERSON":"","NAME":"中国邮政集团公司四川省合江县分公司"},{"CODE":"91510522MA6220T3XC","PERSON":"","NAME":"合江县神臂城镇供销合作社"}],"count":86765};
    if (res.result=='1'){
      res.pageNum = pageNum ? pageNum : 1;
      res.pageSize = pageSize;
      res.type = $('#search-type-val').val();
      var html= template('template_id',res);
      $('#table-list').html(html);
      pagination('#pager',res.count,function (pageNum) {
        search(pageNum);
      });
    }
  // },function (err) {
  //   console.log(err.msg);
  // });
}
