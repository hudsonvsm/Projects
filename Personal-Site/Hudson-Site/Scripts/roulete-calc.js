$(function() {
    $(".show-task-container").hide();
    $(".show-result-container").hide();
    
    $("#roulete-calc").on('click', '#recalculate-roulete-calc', function() {
        
        var straitUps = 1 + Math.floor(Math.random() * 25);
        var splits = 1 + Math.floor(Math.random() * 25);
        var streets = 1 + Math.floor(Math.random() * 25);
        var corners = 1 + Math.floor(Math.random() * 25);
        var sixLines = 1 + Math.floor(Math.random() * 25);
        
        var resultStr =  straitUps + ' Straight ups + ' + splits + ' Splits + ' + streets + ' Streets + ' + corners + ' Corners + ' + sixLines + ' Six lines';
        
        $(".show-task-roulete-calc").text(resultStr);
        $("#roulete-calc").find(".show-task-container").show();
        
        var mathResult = straitUps*35 + splits*17 + streets*11 + corners*8 + sixLines*5;
        
        $(".show-result-roulete-calc").text(mathResult);
        $("#roulete-calc").find(".show-result-container").hide();
        $("#result-roulete-calc").val('');
    })
    .on('click', '#calculate-roulete-calc', function() {
        var result = $(".show-result-roulete-calc").text();
        
        var calculated = $("#result-roulete-calc").val();   
        
        var textAlert = (result == calculated) ? "Correct" : "Incorrect";
        
        alert(textAlert);
    })
    .on('click', '#show-result-roulete-calc', function() {
        $("#roulete-calc").find(".show-result-container").show();
    });

    $("#roulete-sections").on('click', '#recalculate-roulete-sections', function() {
        var voasin = (1 + Math.floor(Math.random() * 20)) * 5;
        var tier = (1 + Math.floor(Math.random() * 20)) * 5;
        var orphans = (1 + Math.floor(Math.random() * 20)) * 5;
        var zeroSpiel = (1 + Math.floor(Math.random() * 20)) * 5;
        
        var resultStr =  voasin + ' Voasins + ' + tier + ' Tiers + ' + orphans + ' Orphans + ' + zeroSpiel + ' 0 - Spiel.';
        
        $(".show-task-roulete-sections").text(resultStr);
        $("#roulete-sections").find(".show-task-container").show();
        
        var mathResult = voasin*9 + tier*6 + orphans*5 + zeroSpiel*4;
        
        $(".show-result-roulete-sections").text(mathResult);
        $("#roulete-sections").find(".show-result-container").hide();
        $("#result-roulete-sections").val('');
    })
    .on('click', '#calculate-roulete-sections', function() {
        var result = $(".show-result-roulete-sections").text();
        
        var calculated = $("#result-roulete-sections").val();
        
        var textAlert = (result == calculated) ? "Correct" : "Incorrect";
        
        alert(textAlert);
    })
    .on('click', '#show-result-roulete-sections', function() {
        $("#roulete-sections").find(".show-result-container").show();
    });

    $("#roulete-cash").on('click', '#recalculate-roulete-cash', function() {
        var cash = (9 + Math.floor(Math.random() * 1000)) * 5;
        var section = Math.floor(Math.random() * 4);
        var sections = [ 'Voasins', 'Tiers', 'Orphans', '0 - Spiel' ];
        var multipliers = [ 9, 6, 5, 4 ];
        
        var resultStr =  cash + '$ on ' + sections[section];
        
        $(".show-task-roulete-cash").text(resultStr);
        $("#roulete-cash").find(".show-task-container").show();
        
        var change = cash % (multipliers[section] * 5);
        
        var bet = (cash - change) / multipliers[section];
        
        $(".show-result-roulete-cash").text('bet ' + bet + ', change ' + change);
        $("#roulete-cash").find(".show-result-container").hide();
        $("#result-roulete-cash-bet").val('');
        $("#result-roulete-cash-change").val('');
    })
    .on('click', '#calculate-roulete-cash', function() {
        var result = $(".show-result-roulete-cash").text();
        
        var calculatedBet = $("#result-roulete-cash-bet").val();
        
        var calculatedChange = $("#result-roulete-cash-change").val();
        
        var calculated = 'bet ' + calculatedBet + ', change ' + calculatedChange;
        
        var textAlert = (result.localeCompare(calculated) === 0) ? "Correct" : "Incorrect";
        
        alert(textAlert);
    })
    .on('click', '#show-result-roulete-cash', function() {
        $("#roulete-cash").find(".show-result-container").show();
    });
});