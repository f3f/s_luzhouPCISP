$(function(){
    layui.use('layer', function(){});
    laydate("date1")
    laydate("date2")

    queryList();
    function queryList(pageNum){
        ajaxPost('/creditliquor/dynamiclist',{
            page: pageNum?pageNum:1,
            rows: 10,
            //department: getUserInfo().department,
            columnId: 'A04A01',
            title: $("#title").val(),
            startTime: sendDateFormat($("#date1").val()),
            endTime:  sendDateFormat($("#date2").val())
        },function(res){
            //console.log(res)
            res = { //静态化模拟数据
                "result":"1",
                "msg":"成功",
                "data":[
                    {"id":"8020EC1F7BC042DF935B9D3263598AE3","source":"市发改委","PUBLISH_DATE":"2018-01-01","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"FDE5063574AE4503A9932D199A14ABA4","source":"市发改委","PUBLISH_DATE":"2017-12-27","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"DF500DC1E3114F1BB75D88F01FE9AC56","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"1AC9C8B6DAC447829DF3F14A3C9F090F","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"66285EB98ADF4F9CB4BF67265DCC2F72","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"01BFEE550B294BDC8872B2E530FC7B1E","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"295A2A1E82444447B5B61D4A1A4CA618","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"3F7B396B974A490B828003DFEEAA404A","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"1437370FA9674401BD69F4AB47F7E51E","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"},
                    {"id":"CDAFEA9FA6B5459BB3155D486A675010","source":"市发改委","PUBLISH_DATE":"2017-12-21","title":"泸州市大力推进社会保险公共服务体系建设"}
                ],
                "count":50
            }
            if(res.count != 0){
                var html = template('template_id',res);
                $('#content-ID').html(html);
                if(res.data.length > 0){
                    pagination('.pager',res.count,function (pageNum) {
                        queryList(pageNum);
                    },10);
                }
                //事件绑定-删除
                $(".del").click(function (event) {
                    var id = $(this).attr('sid');
                    layer.confirm('<p class="del-con"><img src="../../img/delete_wraing_03.png">确定删除该行数据？</p>',{
                        btnAlign: 'c',
                        closeBtn: 0,
                        shade: 0.6,
                        shadeClose: true
                    }, function(index){
                        layer.close(index);
                        deleteDynamic(id)
                    });
                })
            }else{
                $('#content-ID').html('<td colspan="4" class="noneData">暂无数据</td>');
            }
        });
    }

    /*
    * 删除信用动态
    * 接口/creditliquor/deletedynamic
    * */
    function deleteDynamic(id){
        ajaxPost('/creditliquor/deletedynamic', {
            id: id,
        },function(result){
            if(result.result == '1'){
                layer.msg(result.msg, {
                    icon: 1,
                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
                }, function(){
                    queryList()
                });
            }
        })
    }

    $(".btn-sapn-query").click(function () {
        $('#content-ID').html("");
        queryList()
    })

})
