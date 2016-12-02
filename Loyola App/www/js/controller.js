﻿app.controller('MainController', ['$scope', function ($scope) {

    var storage = window.localStorage;

    var lin = storage.getItem("link");
    if (lin != null) {
        if (lin == "_blank") {
            $scope.linkloc = '_blank';
            $scope.loctext = "In-App Browser";
        }
        else {
            $scope.linkloc = '_system';
            $scope.loctext = "System Browser"
        }
    }
    else {
        $scope.linkloc = '_blank';
        $scope.loctext = "In-App Browser"
    }

    $scope.ale = function () {
        alert("HEEY")
    }

    $scope.resizeFrame = function ($scope) {
        var h = window.screen.height;
        document.getElementById('newsFrame').style.height = (h-100) + "px";
    }

    $scope.calculateGPA = function ($scope) {
        // Grade calculation function, first stores all grade values and course modifiers in disposable variables, 
        // Element id's correspond to function (gs1 = grade select #1)
        // Now just to figure out the grade calculation formula loyola uses      
        var i;
        var grade = new Array();
        var level = new Array();

        for (var p = 1; p <= 7; p++) {
            p = p.toString();
            i = document.getElementById("gs" + p).valueOf();
            grade[p] = i.options[i.selectedIndex].value;
            i = document.getElementById("ls" + p).checked;
            level[p] = i;
        }

        for (var j = 1; j <= 7; j++) {
            grade[j] = parseFloat(grade[j]);
        }

        finalGrade = 0;

        for (var k = 1; k <= 7; k++) {
            finalGrade += grade[k];
            finalGrade += level[k];
        }

        finalGrade = finalGrade / 7;
        finalGrade = finalGrade.toFixed(2);

        document.getElementById("disp").innerText = finalGrade;
        //(grade[1] + grade[2] + grade[3] + grade[4] + grade[5] + grade[6] + grade[7]) / 7;

    };

    $scope.vis1 = true;
    $scope.vis2 = false;
    $scope.vis3 = false;
    $scope.vis4 = false;
    $scope.vis5 = false;
    $scope.vis6 = false;
    $scope.vis7 = false;

    $scope.changeschedule = function (n) {
        switch (n) {
            case 1:
                $scope.vis1 = true; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
                break;
            case 2:
                $scope.vis1 = false; $scope.vis2 = true; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
                break;
            case 3:
                $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = true; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
                break;
            case 4:
                $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = true; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;
                break;
            case 5:
                $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = true; $scope.vis6 = false; $scope.vis7 = false;
                break;
            case 6:
                $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = true; $scope.vis7 = false;
                break;
            case 7:
                $scope.vis1 = false; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = true;
                break;
            default:
                $scope.vis1 = true; $scope.vis2 = false; $scope.vis3 = false; $scope.vis4 = false; $scope.vis5 = false; $scope.vis6 = false; $scope.vis7 = false;

        };

    };

    $scope.twitter = function () {
        var ref = cordova.InAppBrowser.open('https://twitter.com/LoyolaHS', '_system', 'location=yes');
    };

    $scope.instagram = function () {
        var ref = cordova.InAppBrowser.open('https://www.instagram.com/loyolahigh/', '_blank', 'location=yes');
        ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });
    };

    $scope.flickr = function () {
        window.open("https://www.google.com");
    };

    $scope.youtube = function () {
        var ref = cordova.InAppBrowser.open('https://www.youtube.com/channel/UCXwvxAsy5e_Jxi5SGzJ7lpA/undefined', '_system', 'location=yes');
    };

    $scope.facebook = function () {
        var ref = cordova.InAppBrowser.open('https://www.facebook.com/pages/Loyola-High-School-Los-Angeles/19920204203', '_system', 'location=yes');
    };

    $scope.website = function () {
        var ref = cordova.InAppBrowser.open('http://www.loyolahs.edu/', $scope.linkloc, 'location=yes');
        ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });
    };

    $scope.opencanvas = function () {
        var ref = cordova.InAppBrowser.open('https://loyolahs.instructure.com/login/ldap', $scope.linkloc, 'location=yes');
        ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });

    };

    $scope.openq = function () {
        var ref = cordova.InAppBrowser.open('http://sc.loyolahs.edu/', $scope.linkloc, 'location=yes');
        ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });
    }

    $scope.dialcall = function () {
        window.open('tel:2133815121', '_system');
    };

    $scope.sendmail = function () {
        var ref = cordova.InAppBrowser.open('mailto:info@loyolahs.edu', '_system', 'location=yes');
    };

    $scope.openmap = function () {
        var ref = cordova.InAppBrowser.open('http://maps.google.com/maps?daddr=Loyola+High+School', '_system', 'location=yes');
    };

    $scope.openann = function () {
        var ref = cordova.InAppBrowser.open('http://rlmf.org/Documents/Fingering%20Charts/tubachart.PDF', '_blank', 'location=yes');
    }


    $scope.changeLink = function (n) {
        if (n == 1) {
            $scope.linkloc = "_system";
            $scope.loctext = "System Browser";
            storage.setItem("link", '_system');
        }
        else {
            $scope.linkloc = "_blank";
            $scope.loctext = "In-App Browser";
            storage.setItem("link", '_blank');
        }
    }



    $scope.data = {
        showDelete: false
    };

    $scope.edit = function (item) {
        var ind = $scope.items.indexOf(item);
        var prom = prompt("Enter New Text for Task", $scope.items[ind]);
        if (prom != null && prom != "") {
            $scope.items[ind] = prom;
        }
    };
    $scope.share = function (item) {
        alert('Share Item: ');
    };

    $scope.moveItem = function (item, fromIndex, toIndex) {
        $scope.items.splice(fromIndex, 1);
        $scope.items.splice(toIndex, 0, item);
    };

    $scope.onItemDelete = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
    };

    $scope.addItem = function () {
        var pr = prompt("What Task Would You Like to Add?");
        if (pr != null && pr != "") {
            $scope.items.push(pr);
        }
    };

    $scope.items = ["Sample: Do Homework!", "Sample: Community Service!"]

    //var storage = window.localStorage;
    //var value = storage.getItem(key);  Pass a key name to get its value.
    //storage.setItem(key, value)  Pass a key name and its value to add or update that key.
    //storage.removeItem(key)  Pass a key name to remove that key from storage.



    if (storage.getItem("tab") != null) {
        $scope.tabcol = storage.getItem("tab");
    }
    else
    {
        $scope.tabcol = "tabs-positive";
    }
    $scope.changeBar = function (bar) {
        var storage = window.localStorage;
        switch (bar) {
            case "dark": $scope.tabcol = "tabs-dark";
                storage.setItem("tab", "tabs-dark");
                break;
            case "light": $scope.tabcol = "tabs-stable";
                storage.setItem("tab", "tabs-stable");
                break;
            case "blue": $scope.tabcol = "tabs-positive";
                storage.setItem("tab", "tabs-positive");
                break;
            case "cyan": $scope.tabcol = "tabs-calm";
                storage.setItem("tab", "tabs-calm");
                break;
            case "green": $scope.tabcol = "tabs-balanced";
                storage.setItem("tab", "tabs-balanced");
                break;
            case "purple": $scope.tabcol = "tabs-royal";
                storage.setItem("tab", "tabs-royal");
                break;
            case "yellow": $scope.tabcol = "tabs-energized";
                storage.setItem("tab", "tabs-energized");
                break;
            case "red": $scope.tabcol = "tabs-assertive";
                storage.setItem("tab", "tabs-assertive");
                break;
            default:
                $scope.tabcol = "tabs-positive";
        }
    }

    if (storage.getItem("fname") != null) {
        $scope.fname = storage.getItem("fname");
    }
    else {
        $scope.fname = "";
    }
    if (storage.getItem("lname") != null) {
        $scope.lname = storage.getItem("lname");
    }
    else {
        $scope.lname = "";
    }
    if (storage.getItem("email") != null) {
        $scope.email = storage.getItem("email");
    }
    else {
        $scope.email = "";
    }
    if (storage.getItem("pass") != null) {
        $scope.pass = storage.getItem("pass");
    }
    else {
        $scope.pass = "";
    }
    $scope.pInfoSave = function () {
        var fn = document.getElementById("fname").value;
        var ln = document.getElementById("lname").value;
        var em = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        storage.setItem("fname", fn);
        storage.setItem("lname", ln);
        storage.setItem("email", em);
        storage.setItem("pass", pass);
        storage.setItem("grade", $scope.grade)
        $scope.fname = fn;
        $scope.lname = ln;
        $scope.email = em;
        $scope.pass = pass;
   
    }

    if (storage.getItem("grade") != null) {
        $scope.grade = storage.getItem("grade");
    }
    else {
        $scope.grade = "Not a Student";
    }

    $scope.changeGrade = function (n) {
        switch (n) {
            case 9: $scope.grade = "9th Grader";
                break;
            case 10: $scope.grade = "10th Grader";
                break;
            case 11: $scope.grade = "11th Grader";
                break;
            case 12: $scope.grade = "12th Grader";
                break;
            case 0: $scope.grade = "Not a Student";
                break;
        }
    }



/*

 $scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
  $scope.hbURL = 'scripts/relativity.pdf';
  $scope.scroll = 0;
  $scope.loading = 'loading';

  $scope.getNavStyle = function(scroll) {
    if(scroll > 100) return 'pdf-controls fixed';
    else return 'pdf-controls';
  }

  $scope.onError = function(error) {
    console.log(error);
  }

  $scope.onLoad = function() {
    $scope.loading = '';
  }

  $scope.onProgress = function (progressData) {
    console.log(progressData);
  };


  */
}]);