 
 
 // SELECT BETWEEN TYPES OF BUILDINGS ////////////////////////

 $("#residential, #commercial, #corporate, #hybrid").hide();

 function show() {

    var value = $("#typeSelect").val();

    if( value == "0"){

        $("#commercial, #corporate, #hybrid").hide();
        $("#residential").show(500);

    } else if (value == "1") {

        $("#residential, #corporate, #hybrid").hide();
        $("#commercial").show(500);

    } else if ( value == "2") {

        $("#residential, #commercial, #hybrid").hide();
        $("#corporate").show(500);

    } else if (value == "3") {

        $("#residential, #commercial, #corporate").hide();
        $("#hybrid").show(500);

    } else {

        $("#residential, #commercial, #corporate, #hybrid").hide();

    }
 }

 $("#typeSelect").change(show);

 // MAKE COST TAB APPEAR //////////////////////////////////

 $("#costres, #costcom, #costcorp, #costhyb").hide();

 $("#selectRes").change( function() {
     $("#costres").show();
 });

 $("#selectcom").change( function() {
    $("#costcom").show();
});

$("#selectcorp").change( function() {
    $("#costcorp").show();
});

$("#selecthyb").change( function() {
    $("#costhyb").show();
});

 //COMMERCIAL CALCULATIONS //////////////////////////////

 $("#buttoncom").click(function(event) {

    event.preventDefault();
    
    var variableCom = {

        choiceCom : $("#selectcom").val(),
        total : $("#deployed").val()
    };
    
    $.ajax({
        type: 'POST',
        data: JSON.stringify(variableCom),
        contentType: 'application/json',
        url: '/comserv',						
        success: function(data) {
            console.log(data); 
    
        total = data.tot;
        select = data.sel;

        $("#deploycom").html(total.toString());

        if (select == "1") {
        
            $("#unitcom").html("7,345.00");
    
            y = 0.1*7565*total;
            y = y.formatMoney(2, '.', ',');
            $("#feescom").html(y);
    
            totalHyb= (1+0.1)*7565*total;
            x = totalHyb.formatMoney(2, '.', ',')
            $("#totalcom").html(x);
    
    
        } else if (select == "2") {
    
            $("#unitcom").html("12,345.00");
    
            y = 0.13*12345*total;
            y = y.formatMoney(2, '.', ',');
            $("#feescom").html(y);
           
    
            totalHyb = (1+0.13)*12345*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalcom").html(x);
    
           
    
        } else if (select == "3") {
    
            $("#unitcom").html("15,400.00");
    
           y = 0.16*15400*total;
            y = y.formatMoney(2, '.', ',');
            $("#feescom").html(y);
    
            totalHyb= (1+0.16)*15400*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalcom").html(x);
        }}
    });
});



//CORPORATE CALCULATIONS ////////////////////////////

$("#buttoncorp").click(function(event) {

    event.preventDefault();
    
    var variableCorp = {

    selectCorp : $("#selectcorp").val(),
    tenantsCorp : $("#tenants").val(),
    basementsCorp : $("#bascorp").val(),
    floorsCorp : $("#floorcorp").val()

    };
    
    $.ajax({
        type: 'POST',
        data: JSON.stringify(variableCorp),
        contentType: 'application/json',
        url: '/corpserv',						
        success: function(data) {
            console.log(data); 
    
        total = data.tot;
        select = data.sel;

        $("#deploycorp").html(total.toString());

        if (select == "1") {
        
            $("#unitcorp").html("7,345.00");
    
            y = 0.1*7565*total;
            y = y.formatMoney(2, '.', ',');
            $("#feescorp").html(y);
    
            totalHyb= (1+0.1)*7565*total;
            x = totalHyb.formatMoney(2, '.', ',')
            $("#totalcorp").html(x);
    
    
        } else if (select == "2") {
    
            $("#unitcorp").html("12,345.00");
    
            y = 0.13*12345*total;
            y = y.formatMoney(2, '.', ',');
            $("#feescorp").html(y);
           
    
            totalHyb = (1+0.13)*12345*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalcorp").html(x);
    
           
    
        } else if (select == "3") {
    
            $("#unitcorp").html("15,400.00");
    
           y = 0.16*15400*total;
            y = y.formatMoney(2, '.', ',');
            $("#feescorp").html(y);
    
            totalHyb= (1+0.16)*15400*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalcorp").html(x);
        }}
    });
});






//RESIDENTIAL CALCULATIONS //////////////////////////////////////////////


$("#buttonres").click(function(event) {
    event.preventDefault();
    
    var variables = {
        choiceRes : $("#selectRes").val(),
        apptsRes : $("#apptsres").val(),
        basesRes : $("#basementsres").val(), 
        floorsRes : $("#floorsres").val()
    };
    
    $.ajax({
        type: 'POST',
        data: JSON.stringify(variables),
        contentType: 'application/json',
        url: '/resserv',						
        success: function(data) {
            console.log(data); 
    
        total = data.tot;
        select = data.sel;

        $("#deployres").html(total);

        if (select == "1") {
        
            $("#unitres").html("7,345.00");
    
            y = 0.1*7565*total;
            y = y.formatMoney(2, '.', ',');
            $("#feesres").html(y);
    
            totalHyb= (1+0.1)*7565*total;
            x = totalHyb.formatMoney(2, '.', ',')
            $("#totalres").html(x);
    
    
        } else if (select == "2") {
    
            $("#unitres").html("12,345.00");
    
            y = 0.13*12345*total;
            y = y.formatMoney(2, '.', ',');
            $("#feesres").html(y);
           
    
            totalHyb = (1+0.13)*12345*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalres").html(x);
    
           
    
        } else if (select == "3") {
    
            $("#unitres").html("15,400.00");
    
           y = 0.16*15400*total;
            y = y.formatMoney(2, '.', ',');
            $("#feesres").html(y);
    
            totalHyb= (1+0.16)*15400*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalres").html(x);
        }}
    });
});



     
     
     
    
   

//HYBRID CALCULATIONS ////////////////////////////////////

$("#buttonhyb").click(function(event) {

    event.preventDefault();
    
    var variableHyb = {

    selectHyb : $("#selecthyb").val(),
    tenantsHyb : $("#tenantshyb").val(),
    basementsHyb : $("#bashyb").val(),
    floorsHyb : $("#floorhyb").val()

    };
    
    $.ajax({
        type: 'POST',
        data: JSON.stringify(variableHyb),
        contentType: 'application/json',
        url: '/hybserv',						
        success: function(data) {
            console.log(data); 
    
        total = data.tot;
        select = data.sel;

        $("#deployhyb").html(total.toString());

        if (select == "1") {
        
            $("#unithyb").html("7,345.00");
    
            y = 0.1*7565*total;
            y = y.formatMoney(2, '.', ',');
            $("#feeshyb").html(y);
    
            totalHyb= (1+0.1)*7565*total;
            x = totalHyb.formatMoney(2, '.', ',')
            $("#totalhyb").html(x);
    
    
        } else if (select == "2") {
    
            $("#unithyb").html("12,345.00");
    
            y = 0.13*12345*total;
            y = y.formatMoney(2, '.', ',');
            $("#feeshyb").html(y);
           
    
            totalHyb = (1+0.13)*12345*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalhyb").html(x);
    
           
    
        } else if (select == "3") {
    
            $("#unithyb").html("15,400.00");
    
           y = 0.16*15400*total;
            y = y.formatMoney(2, '.', ',');
            $("#feeshyb").html(y);
    
            totalHyb= (1+0.16)*15400*total;
            x = totalHyb.formatMoney(2, '.', ',');
            $("#totalhyb").html(x);
        }}
    });
});







 
 















