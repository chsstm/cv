function basicInfo(){
    $.ajax({url : "data/basic.json", success: function(result){
        var info = JSON.parse(result);
        $("#avatar").attr("src","images/"+info.avatar);
        $("#profile-name").html(info.name);
        $("#basic-info-div").append('<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.work+'</p>');
        $("#basic-info-div").append('<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.address+'</p>');
        $("#basic-info-div").append('<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.email+'</p>');
        for(var i=0; i<info.mobiles.length; i++){
            var value = '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><span class="flag-icon flag-icon-'+info.mobiles[i].country+'"></span> '+info.mobiles[i].number+'</p>';
            $("#basic-info-div").append(value);
        }
    }});
}

function majorSkills(){
    $.ajax({url : "data/majorskill.json", success : function(result){
        var info = JSON.parse(result);
        for(var i=0; i<info.length; i++){
            var value = '<p>'+info[i].title+'</p>'+
                        '<div class="w3-light-grey w3-round-xlarge w3-small">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:'+info[i].percent+'%">'+info[i].percent+'%</div>'+
                        '</div>';
            $("#major-skills-div").append(value);
        }
    }});
}

function languages(){
    $.ajax({url : "data/languages.json", success : function(result){
        var info = JSON.parse(result);
        for(var i=0; i<info.length; i++){
            var value = '<p>'+info[i].language+'</p>'+
                        '<div class="w3-light-grey w3-round-xlarge">'+
                            '<div class="w3-round-xlarge w3-teal" style="height:24px;width:'+info[i].percent+'%"></div>'+
                        '</div>';
            $("#languages-div").append(value);
        }
    }});
}

function workInfo(){
    $.ajax({url : "data/work.json", success : function(result){
        var info = JSON.parse(result);
        for(var i=0; i<info.length; i++){ 
            var duration = "";
            if(i == 0){
                duration = info[i].duration+' - <span class="w3-tag w3-teal w3-round">Current</span>';
            }else{
                duration = info[i].duration;
            }  
            var value = '<div class="w3-container">'+
                            '<h5 class="w3-opacity"><b>'+info[i].role+'</b></h5>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-building fa-fw w3-margin-right"></i>'+info[i].company+'</h6>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+duration+'</h6>'+
                            '<p>'+info[i].description+'</p>'+
                            '<hr>'+
                        '</div>';
            $("#work-div").append(value);
        }
    }});
}

function educationInfo(){
    $.ajax({url : "data/education.json", success : function(result){
        var info = JSON.parse(result);
        for(var i=0; i<info.length; i++){   
            var value = '<div class="w3-container">'+
                            '<h5 class="w3-opacity"><b>'+info[i].level+'</b></h5>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+info[i].duration+'</h6>'+
                            '<p>'+info[i].college+'</p><br>'+
                        '</div>';
            $("#education-div").append(value);
        }
    }});
}

function allSkills(){
    $.ajax({url : "data/allskill.json", success : function(result){
        var info = JSON.parse(result);
        for(var i=0; i<info.length; i++){   
            var value = '<p>'+info[i].skill+'</p>'+
                        '<div class="w3-light-grey w3-round-xlarge w3-small w3-margin">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:'+info[i].percent+'%">'+info[i].percent+'%</div>'+
                        '</div>'; 
            if(i%2 ==0){
                $("#skill-left-div").append(value);
            }else{
                $("#skill-right-div").append(value);
            }
        }
    }});
}

function socialMedias(){
    $.ajax({url : "data/social.json", success : function(result){
        var info = JSON.parse(result);
        for(var i=0; i<info.length; i++){   
            var value = '<a href="'+info[i].link+'" target="_blank"> &nbsp; <i class="fa s-m-i fa-3x fa-'+info[i].icon+' w3-hover-opacity"></i> &nbsp; </a>';
            $("#social-media-div").append(value);
        }
    }});
}

function setInfo(){
    basicInfo();
    majorSkills();
    languages();
    workInfo();
    educationInfo();
    allSkills();
    socialMedias();
}

$(document).ready(function(){
    setInfo();
});