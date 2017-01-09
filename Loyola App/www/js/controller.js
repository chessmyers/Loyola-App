app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    var storage = window.localStorage; 

    $scope.tailorPlatform = function () {
        var ios = ionic.Platform.isIOS();
        var android = ionic.Platform.isAndroid();
        if (ios) {
            $scope.topbord = 70;
            $scope.topbord2 = 65;
            $scope.topbord3 = 113;
            $scope.topbord4 = 90;
        }
        else {
            $scope.topbord = 50;
            $scope.topbord2 = 46;
            $scope.topbord3 = 93;
            $scope.topbord4 = 93;
        }
    }
    $scope.tailorPlatform();

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

    $scope.calwidth = window.screen.height;
    $scope.scrwidth = window.screen.width;

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
        var t = 0;
        for (var k = 1; k <= 7; k++) {
            if (grade[k] != 0) {
            finalGrade += grade[k];
            finalGrade += level[k];
            t++;
            }
         }



        finalGrade = finalGrade / t;
        finalGrade = finalGrade.toFixed(2);
        if (isNaN(finalGrade)) {
            finalGrade = "Please Enter a Grade"
        }

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

                $scope.cubcash = function () {
                    var ref = cordova.InAppBrowser.open('https://loyolahs.campuscardcenter.com/ch/login.html', $scope.linkloc, 'location=yes');
                    ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });
                };

                $scope.naviance = function () {
                    var ref = cordova.InAppBrowser.open('https://connection.naviance.com/family-connection/auth/login/?hsid=loyolahs', $scope.linkloc, 'location=yes');
                    ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });
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
                };

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
                    var ref = cordova.InAppBrowser.open('https://loyolahs.instructure.com/courses/354/', $scope.linkloc, 'location=yes');
                    ref.addEventListener('loaderror', function (event) { alert("Cannot load announcements :("); });
                };

                $scope.openHandbook = function () {
                    var ref = cordova.InAppBrowser.open('https://drive.google.com/open?id=0Bw41Zks9I_f_cWFXZ3J3dDczajQ', $scope.linkloc, 'location=yes');
                    ref.addEventListener('loaderror', function (event) { alert("Cannot open handbook. Sorry."); });
                };
    


    

    $scope.data = {
        showDelete: false
    };



    $scope.edit = function (item) {
        var ind = $scope.items.indexOf(item);
        var prom = prompt("Enter New Text for Task", $scope.items[ind]);
        if (prom != null && prom != "") {
            $scope.items[ind] = prom;
        }
        $scope.saveItemData()
    };
    $scope.share = function (item) {
        alert('Share Item: ');
    };

    $scope.moveItem = function (item, fromIndex, toIndex) {
        $scope.items.splice(fromIndex, 1);
        $scope.items.splice(toIndex, 0, item);
        $scope.saveItemData()
    };

 /*   $scope.onItemDelete = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
        $scope.saveItemData();
    };     */

    $scope.deleteAll = function () {
        if (confirm("Clear All Entries?")) {
            for (var i = 0; i < 100; i++) {
                storage.removeItem("item" + i.toString());
            }
            $scope.items = [];

        }
    }

    $scope.isDone = function (item, n) {
        if (n == 1) {
            if (item.charAt(item.length - 1) == "1") {
                return "text-decoration:line-through"
            }
        }
        else {
            if (item.charAt(item.length - 1) == "1") {
                return "Not Done"
            }
            else {
                return "Done";
            }
        }

        //  "text-decoration:line-through"
    }

    $scope.setDone = function (item) {
        if (item.charAt(item.length - 1) == "0") {
            var ind = $scope.items.indexOf(item);
            $scope.items[ind] = item.slice(0, -1) + "1";
        }
        else {
            var ind = $scope.items.indexOf(item);
            $scope.items[ind] = item.slice(0, -1) + "0";
        }
        $scope.saveItemData()
    }

    $scope.addItem = function () {
        var pr = prompt("What Task Would You Like to Add?");
        if (pr != null && pr != "") {
            $scope.items.push(pr + "0");
        }
        $scope.saveItemData()
    };

    $scope.saveItemData = function () {
        var n = 0;
        var i = $scope.items[n];
        while (i != undefined) {
            storage.setItem("item" + n.toString(), $scope.items[n]);
            n += 1;
            i = $scope.items[n];
        }
     //   alert($scope.items + "\n" + storage.getItem("item0") + "\n" + $scope.items[0] + "\n" + $scope.items[1] + "\n" + storage.getItem("item1") + " " + storage.getItem("item2"));
    }

    $scope.loadItemData = function () {
        $scope.items = [];
        if (storage.getItem("item0") == null) {
            $scope.items = ["Sample: Do Homework!0", "Sample: Community Service!0"]
        }
        else {
            var n = 0;
            var i = storage.getItem("item0");
            while (i != null) {
                $scope.items.push(i);
                n += 1;
                i = storage.getItem("item" + n.toString());
            }
        }
    };

    $scope.delItems = function () {
        for (var i = 0; i < 100; i++) {
            storage.removeItem("item" + i.toString());
        }
    }
    

  
   
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

    $scope.quoteplus = 0;

    $scope.dispquote = function () {
        var d = new Date();
        var wday = d.getDay();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        wday = days[wday];

        var month = d.getMonth();
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        month = months[month];
        
        var day = d.getDate();
        var year = d.getFullYear();
        var datestring = wday + ", " + month + " " + day + ", " + year;
        document.getElementById("datet").innerText = datestring;
        var monthdays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        var cdate = monthdays[d.getMonth()] + day;
        cdate += $scope.quoteplus-1;
        if (cdate < 0) {
            cdate += 365;
        }
        if (cdate > 365) {
            cdate -= 365;
        }
        // February, April, June, September, November

        $http.get('templates/quotelist.php')
    .then(function (response) {
        //First function handles success
        var qData = response.data.Quotes;
        document.getElementById("qtext").innerText = qData[cdate].Text;
        document.getElementById("qauthor").innerText = "-" + qData[cdate].Author;
    }, function (response) {
        //Second function handles error
        document.getElementById("qtext").innerText = "Unable to load quotes :(";
        document.getElementById("qauthor").innerText = "";
    });
    }

    $scope.changeQuote = function (n) {
        switch (n) {
            case 0:
                $scope.quoteplus -= 1;
                $scope.dispquote();
                break;
            case 1:
                $scope.quoteplus = 0;
                $scope.dispquote();
                break;
            case 2:
                $scope.quoteplus += 1;
                $scope.dispquote();
                break;
        }
    }


    $scope.loadNews = function () {
        $http.get('http://rilsoftwarewin8.com/newspaper/newslist.php')
    .then(function (response) {
        //Success
        $scope.newsHome = response.data.Home;
        $scope.newsNews = response.data.News;
        $scope.newsAE = response.data.AE;
        $scope.newsOpinion = response.data.Opinion;
        $scope.newsFeature = response.data.Feature;
        $scope.newsSports = response.data.Sports;
    }, function (response) {
        //Failure
        alert("Could not fetch news articles :( \n Please reload app and try again");
    });
       
    }

    $scope.openNews = function (address) {
        var ref = cordova.InAppBrowser.open(address, '_blank', 'location=yes');
        ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });
    }

 /*   $scope.newsTitle = "News";
    $scope.showDot0 = true;
    $scope.showDot1 = false;
    $scope.showDot2 = false;
    $scope.showDot3 = false;
    $scope.showDot4 = false;    */

    $scope.newsbut1 = "button-dark";
    $scope.newsbut2 = "button-stable";
    $scope.newsbut3 = "button-stable";
    $scope.newsbut4 = "button-stable";
    $scope.newsbut5 = "button-stable";

    $scope.switchNews = function (n) {
  /*      switch (n) {
            case "N":
                $scope.showDot0 = true;
                $scope.showDot1 = false;
                $scope.showDot2 = false;
                $scope.showDot3 = false;
                $scope.showDot4 = false;
                $scope.newsTitle = "News";
                $scope.newsSrc = $scope.newsNews;
                break;
            case "A":
                $scope.showDot1 = true;
                $scope.showDot0 = false;
                $scope.showDot2 = false;
                $scope.showDot3 = false;
                $scope.showDot4 = false;
                $scope.newsTitle = "A & E";
                $scope.newsSrc = $scope.newsAE;
                break;
            case "O":
                $scope.showDot2 = true;
                $scope.showDot0 = false;
                $scope.showDot1 = false;
                $scope.showDot3 = false;
                $scope.showDot4 = false;
                $scope.newsTitle = "Opinion";
                $scope.newsSrc = $scope.newsOpinion;
                break;
            case "F":
                $scope.showDot3 = true;
                $scope.showDot2 = false;
                $scope.showDot0 = false;
                $scope.showDot1 = false;
                $scope.showDot4 = false;
                $scope.newsTitle = "Feature";
                $scope.newsSrc = $scope.newsFeature;
                break;
            case "S":
                $scope.showDot4 = true;
                $scope.showDot2 = false;
                $scope.showDot0 = false;
                $scope.showDot1 = false;
                $scope.showDot3 = false;
                $scope.newsTitle = "Sports";
                $scope.newsSrc = $scope.newsSports;
                break;
        }  */
        switch (n) {
            case "N":
                $scope.newsbut1 = "button-dark";
                $scope.newsbut2 = "button-stable";
                $scope.newsbut3 = "button-stable";
                $scope.newsbut4 = "button-stable";
                $scope.newsbut5 = "button-stable";
                $scope.newsSrc = $scope.newsNews;
                break;
            case "A":
                $scope.newsbut1 = "button-stable";
                $scope.newsbut2 = "button-dark";
                $scope.newsbut3 = "button-stable";
                $scope.newsbut4 = "button-stable";
                $scope.newsbut5 = "button-stable";
                $scope.newsSrc = $scope.newsAE;
                break;
            case "O":
                $scope.newsbut1 = "button-stable";
                $scope.newsbut2 = "button-stable";
                $scope.newsbut3 = "button-dark";
                $scope.newsbut4 = "button-stable";
                $scope.newsbut5 = "button-stable";
                $scope.newsSrc = $scope.newsOpinion;
                break;
            case "F":
                $scope.newsbut1 = "button-stable";
                $scope.newsbut2 = "button-stable";
                $scope.newsbut3 = "button-stable";
                $scope.newsbut4 = "button-dark";
                $scope.newsbut5 = "button-stable";
                $scope.newsSrc = $scope.newsFeature;
                break;
            case "S":
                $scope.newsbut1 = "button-stable";
                $scope.newsbut2 = "button-stable";
                $scope.newsbut3 = "button-stable";
                $scope.newsbut4 = "button-stable";
                $scope.newsbut5 = "button-dark";
                $scope.newsSrc = $scope.newsSports;
                break;
        }
    }

    $scope.setNews = function () {
        $scope.newsSrc = $scope.newsNews;
     /*   $scope.newsTitle = "News";
        $scope.showDot0 = true;
        $scope.showDot1 = false;
        $scope.showDot2 = false;
        $scope.showDot3 = false;
        $scope.showDot4 = false;  */
        $scope.newsbut1 = "button-dark";
        $scope.newsbut2 = "button-stable";
        $scope.newsbut3 = "button-stable";
        $scope.newsbut4 = "button-stable";
        $scope.newsbut5 = "button-stable";
    }


    $scope.resetData = function () {
        if (confirm("Are you sure you want to reset everything?")) {
            $scope.linkloc = '_blank';
            $scope.loctext = "In-App Browser"
            storage.setItem("link", "_blank");
            $scope.delItems();
            $scope.tabcol = "tabs-positive";
            storage.setItem("tab", "tabs-positive");
            storage.setItem("fname", null);
            storage.setItem("lname", null);
            storage.setItem("email", null);
            storage.setItem("pass", null);
            storage.setItem("grade", null)
            $scope.fname = "";
            $scope.lname = "";
            $scope.email = "";
            $scope.pass = "";
            $scope.grade = "Not a Student";
            alert("Restart app to see all changes take effect.");
        }
    }   

}]);