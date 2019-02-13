$(function(){
    queryList();
    function queryList(pageNum){
        // var user = getUserInfo();
        // ajaxPost('creditliquor/authenticationlist',{
        //    page: pageNum?pageNum:1,
        //    rows: 10,
        //    department:user.department,
        //    companyName:$('#companyName').val().trim(),
        //    legalPerson:$('#companyPerson').val().trim()
        // },function(res) {
        var res = {"result":"1","msg":"成功","data":[{"COMPANY_NAME":"泸州汇渝广告有限公司","LEGAL_PERSON":"","ID":"615E32105F3F7F77E053D404A8C03C10","ESTABLISH_TIME":"2016-01-12"},{"COMPANY_NAME":"泸州汇渝广告有限公司","LEGAL_PERSON":"","ID":"615E097E90DF7F79E053D404A8C09586","ESTABLISH_TIME":"2016-01-12"},{"COMPANY_NAME":"四川四获益建设有限公司","LEGAL_PERSON":"","ID":"60FD1CDE7E7F3184E053D404A8C0FE16","ESTABLISH_TIME":"2016-07-19"},{"COMPANY_NAME":"泸州市纳溪区鑫耀文化传播有限公司","LEGAL_PERSON":"","ID":"60D1CBB0FEAC28BEE053D404A8C0D75D","ESTABLISH_TIME":"2016-06-29"},{"COMPANY_NAME":"泸州市纳溪区鑫耀文化传播有限公司","LEGAL_PERSON":"","ID":"60D1CBB0FEAB28BEE053D404A8C0D75D","ESTABLISH_TIME":"2016-06-29"},{"COMPANY_NAME":"泸州市纳溪区鑫耀文化传播有限公司","LEGAL_PERSON":"","ID":"60D1CBB0FEAA28BEE053D404A8C0D75D","ESTABLISH_TIME":"2016-06-29"},{"COMPANY_NAME":"四川四获益建设有限公司","LEGAL_PERSON":"","ID":"60D1CBB0FEA928BEE053D404A8C0D75D","ESTABLISH_TIME":"2016-07-19"},{"COMPANY_NAME":"四川四获益建设有限公司","LEGAL_PERSON":"","ID":"60D1A53565C528C0E053D404A8C09E32","ESTABLISH_TIME":"2016-07-19"},{"COMPANY_NAME":"泸州呈庄农业有限公司","LEGAL_PERSON":"","ID":"60D1A53565C428C0E053D404A8C09E32","ESTABLISH_TIME":"2015-06-08"},{"COMPANY_NAME":"四川四获益建设有限公司","LEGAL_PERSON":"","ID":"60D1A53565C328C0E053D404A8C09E32","ESTABLISH_TIME":"2016-07-19"}],"count":32}
            var html = template('template_id', res);
            $('#content-ID').html(html);
            pagination('.pager',res.count,function (pageNum) {
                queryList(pageNum);
            });
        //});
    }
    ////查看
    //$(".see1").click(function () {
    //    window.location.href = "../../html/creditCertification/certificstionDetial.html?idxTab=3";
    //})
    //
    ////新增
    //$(".add1").click(function () {
    //    window.location.href = "../../html/creditCertification/certificstionAdd.html?idxTab=3";
    //})
    $(".btn-sapn-query").click(function () {
        $('#content-ID').html("");
        queryList()
    })

})
