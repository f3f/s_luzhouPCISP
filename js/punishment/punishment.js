$(function(){
    layui.use('layer', function(){});
    laydate("date1")
    laydate("date2")

    queryList();
    function queryList(pageNum){
        // ajaxPost('/creditliquor/dynamiclist',{
        //     page: pageNum?pageNum:1,
        //     rows: 10,
        //     department: getUserInfo().department,
        //     columnId: 'A06A01',
        //     title: $("#title").val(),
        //     startTime: sendDateFormat($("#date1").val()),
        //     endTime:  sendDateFormat($("#date2").val())
        // },function(res){
        var res = {
            "result":"1",
            "msg":"成功",
            "data":[
                {"id":"27200E9025454EC7A0D59A668FE5E094","source":"信用中国","PUBLISH_DATE":"2017-12-21","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"3967B42A89034066B5E4910AFEA4F82D","source":"信用中国","PUBLISH_DATE":"2017-12-21","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"15CCA2FD8F03415988CAB792E484E498","source":"信用中国","PUBLISH_DATE":"2017-12-20","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"6D119B5F73434D719A41A6FDD49F13F390","source":"信用中国","PUBLISH_DATE":"2017-12-19","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"6D119B5F73434D719A41A6FDD4sd02F190","source":"信用中国","PUBLISH_DATE":"2017-12-19","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"6E7BC05F583345D2A776B4B3FA63A3A5","source":"信用中国","PUBLISH_DATE":"2017-12-19","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"C26ED05038FE4083B43F9E184E0C46EE","source":"信用中国","PUBLISH_DATE":"2017-12-19","title":"十九大后,习近平对中国经济给出8大论断 中方：停止故意歪曲中方战略意图"},
                {"id":"52AFE89319FB4F889E877538C3E2A897","source":"信用中国","PUBLISH_DATE":"2017-12-19","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"5C40B2816F9A476BA9B10FDB85BBC242","source":"信用中国","PUBLISH_DATE":"2017-12-19","title":"十九大后,习近平对中国经济给出8大论断"},
                {"id":"5B5FF79AC99B45F5BC69CEF8DBB5688A","source":"信用中国","PUBLISH_DATE":"2017-12-19","title":"十九大后,习近平对中国经济给出8大论断"}
            ],
            "count":23
        }
            //console.log(res)
            if(res.count != 0){
                var html = template('template_id',res);
                $('#content-ID').html(html);
                if(res.data.length > 0){
                    pagination('.pager',res.count,function (pageNum) {
                        queryList(pageNum);
                    },10);
                }

                //删除时间绑定
                $(".del").click(function () {
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
        //});
    }

    /**
     * 删除联合奖惩
     * @param id
     */
    function deleteDynamic(id){
        ajaxPost('/creditliquor/deletedynamic', {
            id:id,
        },function(result){
            if(result.result == '1'){
                layer.msg(result.msg, {
                    icon: 1,
                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
                },function(){
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
