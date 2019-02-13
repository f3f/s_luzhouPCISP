$(function(){
    layui.use('layer', function(){});
    laydate("date1");
    laydate("date2");
    queryList();
    function queryList(pageNo){
        // var resultData ={
        //     "result": "1",
        //     "msg": "成功",
        //     "data": [
        //         {
        //             "GOV_CNAMEALL": "市科学技术和知识产权局",
        //             "DISPOSE_STATE": 0,
        //             "REPORT_TITLE": "举报是科学技术和知识产权局",
        //             "ID": "5F98D244908C3E74E053D404A8C0372F",
        //             "REPORT_TIME": 1512480552000
        //         }
        //     ],
        //     "count": 7
        // };
        // var html= template('template_id',resultData);
        // $('#repair-list').html(html);
        // pager(obj, 1, [2,10,20,50,100], queryList, $('.pager'));



        //var department=getUserInfo().department;
        var reportTitle=$(".fl input").val();
        var startTime=$("#date1").val();
        var entTime=$("#date2").val();
        if(startTime){
            startTime=startTime.replace(/\-/g, "/");
            startTime=formatDateTimeFull(new Date(startTime));
        }
        if(entTime){
            entTime=entTime.replace(/\-/g, "/");
            entTime=formatDateTimeFull(new Date(entTime));
        }

        // formatDateTimeFull
        // ajaxPost('/creditliquor/reportlist',{
        //    page: pageNo?pageNo:1,
        //    rows: 10,
        //    department:department,
        //    reportTitle:reportTitle,
        //    startTime:startTime,
        //    entTime:entTime
        // },function(res){
        var res = {"result":"1","msg":"成功","data":[{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"胜多负少的","ID":"615EFADC2F01613DE053D404A8C00115","REPORT_TIME":"2017-12-28"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"奥术大师","ID":"615DE5E9C3136137E053D404A8C058EE","REPORT_TIME":"2017-12-28"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"测试-市民宗局","ID":"60C2B362A6E257C8E053D404A8C0260C","REPORT_TIME":"2017-12-21"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"ymtnregsa","ID":"60D37D5F01D249E0E053D404A8C05A7B","REPORT_TIME":"2017-12-21"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"zesxdrcfgvhb","ID":"60D18377D8AE0649E053D404A8C041C6","REPORT_TIME":"2017-12-21"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"iujyhtgrfedsa","ID":"60D18377D8AF0649E053D404A8C041C6","REPORT_TIME":"2017-12-21"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"政民互动页面新增信用修复","ID":"60C2B362A6E157C8E053D404A8C0260C","REPORT_TIME":"2017-12-21"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":0,"REPORT_TITLE":"修复标题","ID":"60C2B362A6E057C8E053D404A8C0260C","REPORT_TIME":"2017-12-21"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"测试-市民宗局","ID":"60D0FB49FA6E1CA7E053D404A8C0DD04","REPORT_TIME":"2017-12-21"},{"GOV_CNAMEALL":"市发展改革委","DISPOSE_STATE":1,"REPORT_TITLE":"测试政民互动信用修复","ID":"6095F5C0BF9D5794E053D404A8C02040","REPORT_TIME":"2017-12-18"}],"count":25}
            if(res.result!=1)return ;
            var html= template('template_id',res);
            $('#repair-list').html(html);
            pagination('.pager',res.count,function (pageNum) {
                queryList(pageNum);
            });
        //});
    }

    //删除
    $(".btn-sapn-query").click(function () {
        queryList();
    });

});
