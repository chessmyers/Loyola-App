app.controller('MainController', ['$scope', function ($scope) {

    $scope.title = 'This is a test string!';
    $scope.likes = 0;

    $scope.plus = function () {
        $scope.likes += 1;
    };

    $scope.item1 = "Mario";
    $scope.item2 = "Luigi";
    $scope.item3 = "Peach";
    $scope.show = true;

    $scope.val1 = 0;
    $scope.val2 = 0;
    $scope.val3 = 0;
    $scope.val4 = 0;
    $scope.val5 = 0;


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
        var ref = cordova.InAppBrowser.open('http://www.loyolahs.edu/', '_blank', 'location=yes');
        ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });
    };

    $scope.opencanvas = function () {
        var ref = cordova.InAppBrowser.open('https://loyolahs.instructure.com/login/ldap', '_blank', 'location=yes');
        ref.addEventListener('loaderror', function (event) { alert("URL not found. Sorry."); });

    };

    $scope.openq = function () {
        var ref = cordova.InAppBrowser.open('http://sc.loyolahs.edu/', '_blank', 'location=yes');
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




    $scope.ale = function() {
    alert("Hey!");
};


 


}]);


