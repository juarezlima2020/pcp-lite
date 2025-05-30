function init_sidebar() {
    var a = function() {
        $RIGHT_COL.css("min-height", $(window).height());
        var a = $BODY.outerHeight(),
            b = $BODY.hasClass("footer_fixed") ? -10 : $FOOTER.height(),
            c = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
            d = a < c ? c : a;
        d -= $NAV_MENU.height() + b, $RIGHT_COL.css("min-height", d)
    };
    $SIDEBAR_MENU.find("a").on("click", function(b) {
        var c = $(this).parent();
        c.is(".active") ? (c.removeClass("active active-sm"), $("ul:first", c).slideUp(function() {
            a()
        })) : (c.parent().is(".child_menu") ? $BODY.is(".nav-sm") && ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()) : ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()), c.addClass("active"), $("ul:first", c).slideDown(function() {
            a()
        }))
    }), $MENU_TOGGLE.on("click", function() {
        $BODY.hasClass("nav-md") ? ($SIDEBAR_MENU.find("li.active ul").hide(), $SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")) : ($SIDEBAR_MENU.find("li.active-sm ul").show(), $SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")), $BODY.toggleClass("nav-md nav-sm"), a()
    }), $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent("li").addClass("current-page"), $SIDEBAR_MENU.find("a").filter(function() {
        return this.href == CURRENT_URL
    }).parent("li").addClass("current-page").parents("ul").slideDown(function() {
        a()
    }).parent().addClass("active"), $(window).smartresize(function() {
        a()
    }), a(), $.fn.mCustomScrollbar && $(".menu_fixed").mCustomScrollbar({
        autoHideScrollbar: !0,
        theme: "minimal",
        mouseWheel: {
            preventDefault: !0
        }
    })
}

function countChecked() {
    "all" === checkState && $(".bulk_action input[name='table_records']").iCheck("check"), "none" === checkState && $(".bulk_action input[name='table_records']").iCheck("uncheck");
    var a = $(".bulk_action input[name='table_records']:checked").length;
    a ? ($(".column-title").hide(), $(".bulk-actions").show(), $(".action-cnt").html(a + " Records Selected")) : ($(".column-title").show(), $(".bulk-actions").hide())
}

function gd(a, b, c) {
    return new Date(a, b - 1, c).getTime()
}

function init_flot_chart() {
    if ("undefined" != typeof $.plot) {
        console.log("init_flot_chart");
        for (var a = [
                [gd(2012, 1, 1), 17],
                [gd(2012, 1, 2), 74],
                [gd(2012, 1, 3), 6],
                [gd(2012, 1, 4), 39],
                [gd(2012, 1, 5), 20],
                [gd(2012, 1, 6), 85],
                [gd(2012, 1, 7), 7]
            ], b = [
                [gd(2012, 1, 1), 82],
                [gd(2012, 1, 2), 23],
                [gd(2012, 1, 3), 66],
                [gd(2012, 1, 4), 9],
                [gd(2012, 1, 5), 119],
                [gd(2012, 1, 6), 6],
                [gd(2012, 1, 7), 9]
            ], d = [], e = [
                [0, 1],
                [1, 9],
                [2, 6],
                [3, 10],
                [4, 5],
                [5, 17],
                [6, 6],
                [7, 10],
                [8, 7],
                [9, 11],
                [10, 35],
                [11, 9],
                [12, 12],
                [13, 5],
                [14, 3],
                [15, 4],
                [16, 9]
            ], f = 0; f < 30; f++) d.push([new Date(Date.today().add(f).days()).getTime(), randNum() + f + f + 10]);
        var g = {
                series: {
                    lines: {
                        show: !1,
                        fill: !0
                    },
                    splines: {
                        show: !0,
                        tension: .4,
                        lineWidth: 1,
                        fill: .4
                    },
                    points: {
                        radius: 0,
                        show: !0
                    },
                    shadowSize: 2
                },
                grid: {
                    verticalLines: !0,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "#d5d5d5",
                    borderWidth: 1,
                    color: "#fff"
                },
                colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
                xaxis: {
                    tickColor: "rgba(51, 51, 51, 0.06)",
                    mode: "time",
                    tickSize: [1, "day"],
                    axisLabel: "Date",
                    axisLabelUseCanvas: !0,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: "Verdana, Arial",
                    axisLabelPadding: 10
                },
                yaxis: {
                    ticks: 8,
                    tickColor: "rgba(51, 51, 51, 0.06)"
                },
                tooltip: !1
            },
            h = {
                grid: {
                    show: !0,
                    aboveData: !0,
                    color: "#3f3f3f",
                    labelMargin: 10,
                    axisMargin: 0,
                    borderWidth: 0,
                    borderColor: null,
                    minBorderMargin: 5,
                    clickable: !0,
                    hoverable: !0,
                    autoHighlight: !0,
                    mouseActiveRadius: 100
                },
                series: {
                    lines: {
                        show: !0,
                        fill: !0,
                        lineWidth: 2,
                        steps: !1
                    },
                    points: {
                        show: !0,
                        radius: 4.5,
                        symbol: "circle",
                        lineWidth: 3
                    }
                },
                legend: {
                    position: "ne",
                    margin: [0, -25],
                    noColumns: 0,
                    labelBoxBorderColor: null,
                    labelFormatter: function(a, b) {
                        return a + "&nbsp;&nbsp;"
                    },
                    width: 40,
                    height: 1
                },
                colors: ["#96CA59", "#3F97EB", "#72c380", "#6f7a8a", "#f7cb38", "#5a8022", "#2c7282"],
                shadowSize: 0,
                tooltip: !0,
                tooltipOpts: {
                    content: "%s: %y.0",
                    xDateFormat: "%d/%m",
                    shifts: {
                        x: -30,
                        y: -50
                    },
                    defaultTheme: !1
                },
                yaxis: {
                    min: 0
                },
                xaxis: {
                    mode: "time",
                    minTickSize: [1, "day"],
                    timeformat: "%d/%m/%y",
                    min: d[0][0],
                    max: d[20][0]
                }
            },
            i = {
                series: {
                    curvedLines: {
                        apply: !0,
                        active: !0,
                        monotonicFit: !0
                    }
                },
                colors: ["#26B99A"],
                grid: {
                    borderWidth: {
                        top: 0,
                        right: 0,
                        bottom: 1,
                        left: 1
                    },
                    borderColor: {
                        bottom: "#7F8790",
                        left: "#7F8790"
                    }
                }
            };
        $("#chart_plot_01").length && (console.log("Plot1"), $.plot($("#chart_plot_01"), [a, b], g)), $("#chart_plot_02").length && (console.log("Plot2"), $.plot($("#chart_plot_02"), [{
            label: "Email Sent",
            data: d,
            lines: {
                fillColor: "rgba(150, 202, 89, 0.12)"
            },
            points: {
                fillColor: "#fff"
            }
        }], h)), $("#chart_plot_03").length && (console.log("Plot3"), $.plot($("#chart_plot_03"), [{
            label: "Registrations",
            data: e,
            lines: {
                fillColor: "rgba(150, 202, 89, 0.12)"
            },
            points: {
                fillColor: "#fff"
            }
        }], i))
    }
}

function init_starrr() {
    "undefined" != typeof starrr && (console.log("init_starrr"), $(".stars").starrr(), $(".stars-existing").starrr({
        rating: 4
    }), $(".stars").on("starrr:change", function(a, b) {
        $(".stars-count").html(b)
    }), $(".stars-existing").on("starrr:change", function(a, b) {
        $(".stars-count-existing").html(b)
    }))
}

function init_JQVmap() {
    "undefined" != typeof jQuery.fn.vectorMap && (console.log("init_JQVmap"), $("#world-map-gdp").length && $("#world-map-gdp").vectorMap({
        map: "world_en",
        backgroundColor: null,
        color: "#ffffff",
        hoverOpacity: .7,
        selectedColor: "#666666",
        enableZoom: !0,
        showTooltip: !0,
        values: sample_data,
        scaleColors: ["#E6F2F0", "#149B7E"],
        normalizeFunction: "polynomial"
    }), $("#usa_map").length && $("#usa_map").vectorMap({
        map: "usa_en",
        backgroundColor: null,
        color: "#ffffff",
        hoverOpacity: .7,
        selectedColor: "#666666",
        enableZoom: !0,
        showTooltip: !0,
        values: sample_data,
        scaleColors: ["#E6F2F0", "#149B7E"],
        normalizeFunction: "polynomial"
    }))
}

function init_skycons() {
    if ("undefined" != typeof Skycons) {
        console.log("init_skycons");
        var c, a = new Skycons({
                color: "#73879C"
            }),
            b = ["clear-day", "clear-night", "partly-cloudy-day", "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind", "fog"];
        for (c = b.length; c--;) a.set(b[c], b[c]);
        a.play()
    }
}

function init_chart_doughnut() {
    if ("undefined" != typeof Chart && (console.log("init_chart_doughnut"), $(".canvasDoughnut").length)) {
        var a = {
            type: "doughnut",
            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
            data: {
                labels: ["Symbian", "Blackberry", "Other", "Android", "IOS"],
                datasets: [{
                    data: [15, 20, 30, 10, 30],
                    backgroundColor: ["#BDC3C7", "#9B59B6", "#E74C3C", "#26B99A", "#3498DB"],
                    hoverBackgroundColor: ["#CFD4D8", "#B370CF", "#E95E4F", "#36CAAB", "#49A9EA"]
                }]
            },
            options: {
                legend: !1,
                responsive: !1
            }
        };
        $(".canvasDoughnut").each(function() {
            var b = $(this);
            new Chart(b, a)
        })
    }
}

function init_gauge() {
    if ("undefined" != typeof Gauge) {
        console.log("init_gauge [" + $(".gauge-chart").length + "]"), console.log("init_gauge");
        var a = {
            lines: 12,
            angle: 0,
            lineWidth: .4,
            pointer: {
                length: .75,
                strokeWidth: .042,
                color: "#1D212A"
            },
            limitMax: "false",
            colorStart: "#1ABC9C",
            colorStop: "#1ABC9C",
            strokeColor: "#F0F3F3",
            generateGradient: !0
        };
        if ($("#chart_gauge_01").length) var b = document.getElementById("chart_gauge_01"),
            c = new Gauge(b).setOptions(a);
        if ($("#chart_gauge_03").length) var b = document.getElementById("chart_gauge_03"),
            c = new Gauge(b).setOptions(a);
        if ($("#chart_gauge_04").length) var b = document.getElementById("chart_gauge_04"),
            c = new Gauge(b).setOptions(a);
        if ($("#gauge-text").length && (c.maxValue = 6e3, c.animationSpeed = 32, c.set(3200), c.setTextField(document.getElementById("gauge-text"))), $("#chart_gauge_02").length) var d = document.getElementById("chart_gauge_02"),
            e = new Gauge(d).setOptions(a);
        $("#gauge-text2").length && (e.maxValue = 9e3, e.animationSpeed = 32, e.set(2400), e.setTextField(document.getElementById("gauge-text2")))
        $("#gauge-text3").length && (e.maxValue = 9e3, e.animationSpeed = 32, e.set(2400), e.setTextField(document.getElementById("gauge-text3")))
        $("#gauge-text4").length && (e.maxValue = 9e3, e.animationSpeed = 32, e.set(2400), e.setTextField(document.getElementById("gauge-text4")))
    }
}

function init_sparklines() {
    "undefined" != typeof jQuery.fn.sparkline && (console.log("init_sparklines"), $(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
        type: "bar",
        height: "125",
        barWidth: 13,
        colorMap: {
            7: "#a1a1a1"
        },
        barSpacing: 2,
        barColor: "#26B99A"
    }), $(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
        type: "bar",
        height: "40",
        barWidth: 9,
        colorMap: {
            7: "#a1a1a1"
        },
        barSpacing: 2,
        barColor: "#26B99A"
    }), $(".sparkline_three").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
        type: "line",
        width: "200",
        height: "40",
        lineColor: "#26B99A",
        fillColor: "rgba(223, 223, 223, 0.57)",
        lineWidth: 2,
        spotColor: "#26B99A",
        minSpotColor: "#26B99A"
    }), $(".sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
        type: "bar",
        height: "40",
        barWidth: 8,
        colorMap: {
            7: "#a1a1a1"
        },
        barSpacing: 2,
        barColor: "#26B99A"
    }), $(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
        type: "line",
        height: "40",
        width: "200",
        lineColor: "#26B99A",
        fillColor: "#ffffff",
        lineWidth: 3,
        spotColor: "#34495E",
        minSpotColor: "#34495E"
    }), $(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
        type: "bar",
        colorMap: {
            7: "#a1a1a1"
        },
        barColor: "#26B99A"
    }), $(".sparkline_area").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        type: "line",
        lineColor: "#26B99A",
        fillColor: "#26B99A",
        spotColor: "#4578a0",
        minSpotColor: "#728fb2",
        maxSpotColor: "#6d93c4",
        highlightSpotColor: "#ef5179",
        highlightLineColor: "#8ba8bf",
        spotRadius: 2.5,
        width: 85
    }), $(".sparkline_line").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
        type: "line",
        lineColor: "#26B99A",
        fillColor: "#ffffff",
        width: 85,
        spotColor: "#34495E",
        minSpotColor: "#34495E"
    }), $(".sparkline_pie").sparkline([1, 1, 2, 1], {
        type: "pie",
        sliceColors: ["#26B99A", "#ccc", "#75BCDD", "#D66DE2"]
    }), $(".sparkline_discreet").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8, 9, 7, 6, 4, 3], {
        type: "discrete",
        barWidth: 3,
        lineColor: "#26B99A",
        width: "85"
    }))
}

function init_autocomplete() {
    if ("undefined" != typeof $.fn.autocomplete) {
        console.log("init_autocomplete");
        var a = {
                AD: "Andorra",
                A2: "Andorra Test",
                AE: "United Arab Emirates",
                AF: "Afghanistan",
                AG: "Antigua and Barbuda",
                AI: "Anguilla",
                AL: "Albania",
                AM: "Armenia",
                AN: "Netherlands Antilles",
                AO: "Angola",
                AQ: "Antarctica",
                AR: "Argentina",
                AS: "American Samoa",
                AT: "Austria",
                AU: "Australia",
                AW: "Aruba",
                AX: "Åland Islands",
                AZ: "Azerbaijan",
                BA: "Bosnia and Herzegovina",
                BB: "Barbados",
                BD: "Bangladesh",
                BE: "Belgium",
                BF: "Burkina Faso",
                BG: "Bulgaria",
                BH: "Bahrain",
                BI: "Burundi",
                BJ: "Benin",
                BL: "Saint Barthélemy",
                BM: "Bermuda",
                BN: "Brunei",
                BO: "Bolivia",
                BQ: "British Antarctic Territory",
                BR: "Brazil",
                BS: "Bahamas",
                BT: "Bhutan",
                BV: "Bouvet Island",
                BW: "Botswana",
                BY: "Belarus",
                BZ: "Belize",
                CA: "Canada",
                CC: "Cocos [Keeling] Islands",
                CD: "Congo - Kinshasa",
                CF: "Central African Republic",
                CG: "Congo - Brazzaville",
                CH: "Switzerland",
                CI: "Côte d’Ivoire",
                CK: "Cook Islands",
                CL: "Chile",
                CM: "Cameroon",
                CN: "China",
                CO: "Colombia",
                CR: "Costa Rica",
                CS: "Serbia and Montenegro",
                CT: "Canton and Enderbury Islands",
                CU: "Cuba",
                CV: "Cape Verde",
                CX: "Christmas Island",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DD: "East Germany",
                DE: "Germany",
                DJ: "Djibouti",
                DK: "Denmark",
                DM: "Dominica",
                DO: "Dominican Republic",
                DZ: "Algeria",
                EC: "Ecuador",
                EE: "Estonia",
                EG: "Egypt",
                EH: "Western Sahara",
                ER: "Eritrea",
                ES: "Spain",
                ET: "Ethiopia",
                FI: "Finland",
                FJ: "Fiji",
                FK: "Falkland Islands",
                FM: "Micronesia",
                FO: "Faroe Islands",
                FQ: "French Southern and Antarctic Territories",
                FR: "France",
                FX: "Metropolitan France",
                GA: "Gabon",
                GB: "United Kingdom",
                GD: "Grenada",
                GE: "Georgia",
                GF: "French Guiana",
                GG: "Guernsey",
                GH: "Ghana",
                GI: "Gibraltar",
                GL: "Greenland",
                GM: "Gambia",
                GN: "Guinea",
                GP: "Guadeloupe",
                GQ: "Equatorial Guinea",
                GR: "Greece",
                GS: "South Georgia and the South Sandwich Islands",
                GT: "Guatemala",
                GU: "Guam",
                GW: "Guinea-Bissau",
                GY: "Guyana",
                HK: "Hong Kong SAR China",
                HM: "Heard Island and McDonald Islands",
                HN: "Honduras",
                HR: "Croatia",
                HT: "Haiti",
                HU: "Hungary",
                ID: "Indonesia",
                IE: "Ireland",
                IL: "Israel",
                IM: "Isle of Man",
                IN: "India",
                IO: "British Indian Ocean Territory",
                IQ: "Iraq",
                IR: "Iran",
                IS: "Iceland",
                IT: "Italy",
                JE: "Jersey",
                JM: "Jamaica",
                JO: "Jordan",
                JP: "Japan",
                JT: "Johnston Island",
                KE: "Kenya",
                KG: "Kyrgyzstan",
                KH: "Cambodia",
                KI: "Kiribati",
                KM: "Comoros",
                KN: "Saint Kitts and Nevis",
                KP: "North Korea",
                KR: "South Korea",
                KW: "Kuwait",
                KY: "Cayman Islands",
                KZ: "Kazakhstan",
                LA: "Laos",
                LB: "Lebanon",
                LC: "Saint Lucia",
                LI: "Liechtenstein",
                LK: "Sri Lanka",
                LR: "Liberia",
                LS: "Lesotho",
                LT: "Lithuania",
                LU: "Luxembourg",
                LV: "Latvia",
                LY: "Libya",
                MA: "Morocco",
                MC: "Monaco",
                MD: "Moldova",
                ME: "Montenegro",
                MF: "Saint Martin",
                MG: "Madagascar",
                MH: "Marshall Islands",
                MI: "Midway Islands",
                MK: "Macedonia",
                ML: "Mali",
                MM: "Myanmar [Burma]",
                MN: "Mongolia",
                MO: "Macau SAR China",
                MP: "Northern Mariana Islands",
                MQ: "Martinique",
                MR: "Mauritania",
                MS: "Montserrat",
                MT: "Malta",
                MU: "Mauritius",
                MV: "Maldives",
                MW: "Malawi",
                MX: "Mexico",
                MY: "Malaysia",
                MZ: "Mozambique",
                NA: "Namibia",
                NC: "New Caledonia",
                NE: "Niger",
                NF: "Norfolk Island",
                NG: "Nigeria",
                NI: "Nicaragua",
                NL: "Netherlands",
                NO: "Norway",
                NP: "Nepal",
                NQ: "Dronning Maud Land",
                NR: "Nauru",
                NT: "Neutral Zone",
                NU: "Niue",
                NZ: "New Zealand",
                OM: "Oman",
                PA: "Panama",
                PC: "Pacific Islands Trust Territory",
                PE: "Peru",
                PF: "French Polynesia",
                PG: "Papua New Guinea",
                PH: "Philippines",
                PK: "Pakistan",
                PL: "Poland",
                PM: "Saint Pierre and Miquelon",
                PN: "Pitcairn Islands",
                PR: "Puerto Rico",
                PS: "Palestinian Territories",
                PT: "Portugal",
                PU: "U.S. Miscellaneous Pacific Islands",
                PW: "Palau",
                PY: "Paraguay",
                PZ: "Panama Canal Zone",
                QA: "Qatar",
                RE: "Réunion",
                RO: "Romania",
                RS: "Serbia",
                RU: "Russia",
                RW: "Rwanda",
                SA: "Saudi Arabia",
                SB: "Solomon Islands",
                SC: "Seychelles",
                SD: "Sudan",
                SE: "Sweden",
                SG: "Singapore",
                SH: "Saint Helena",
                SI: "Slovenia",
                SJ: "Svalbard and Jan Mayen",
                SK: "Slovakia",
                SL: "Sierra Leone",
                SM: "San Marino",
                SN: "Senegal",
                SO: "Somalia",
                SR: "Suriname",
                ST: "São Tomé and Príncipe",
                SU: "Union of Soviet Socialist Republics",
                SV: "El Salvador",
                SY: "Syria",
                SZ: "Swaziland",
                TC: "Turks and Caicos Islands",
                TD: "Chad",
                TF: "French Southern Territories",
                TG: "Togo",
                TH: "Thailand",
                TJ: "Tajikistan",
                TK: "Tokelau",
                TL: "Timor-Leste",
                TM: "Turkmenistan",
                TN: "Tunisia",
                TO: "Tonga",
                TR: "Turkey",
                TT: "Trinidad and Tobago",
                TV: "Tuvalu",
                TW: "Taiwan",
                TZ: "Tanzania",
                UA: "Ukraine",
                UG: "Uganda",
                UM: "U.S. Minor Outlying Islands",
                US: "United States",
                UY: "Uruguay",
                UZ: "Uzbekistan",
                VA: "Vatican City",
                VC: "Saint Vincent and the Grenadines",
                VD: "North Vietnam",
                VE: "Venezuela",
                VG: "British Virgin Islands",
                VI: "U.S. Virgin Islands",
                VN: "Vietnam",
                VU: "Vanuatu",
                WF: "Wallis and Futuna",
                WK: "Wake Island",
                WS: "Samoa",
                YD: "People's Democratic Republic of Yemen",
                YE: "Yemen",
                YT: "Mayotte",
                ZA: "South Africa",
                ZM: "Zambia",
                ZW: "Zimbabwe",
                ZZ: "Unknown or Invalid Region"
            },
            b = $.map(a, function(a, b) {
                return {
                    value: a,
                    data: b
                }
            });
        $("#autocomplete-custom-append").autocomplete({
            lookup: b
        })
    }
}

function init_autosize() {
    "undefined" != typeof $.fn.autosize && autosize($(".resizable_textarea"))
}

function init_parsley() {
    if ("undefined" != typeof parsley) {
        console.log("init_parsley"), $("parsley:field:validate", function() {
            a()
        }), $("#demo-form .btn").on("click", function() {
            $("#demo-form").parsley().validate(), a()
        });
        var a = function() {
            !0 === $("#demo-form").parsley().isValid() ? ($(".bs-callout-info").removeClass("hidden"), $(".bs-callout-warning").addClass("hidden")) : ($(".bs-callout-info").addClass("hidden"), $(".bs-callout-warning").removeClass("hidden"))
        };
        $("parsley:field:validate", function() {
            a()
        }), $("#demo-form2 .btn").on("click", function() {
            $("#demo-form2").parsley().validate(), a()
        });
        var a = function() {
            !0 === $("#demo-form2").parsley().isValid() ? ($(".bs-callout-info").removeClass("hidden"), $(".bs-callout-warning").addClass("hidden")) : ($(".bs-callout-info").addClass("hidden"), $(".bs-callout-warning").removeClass("hidden"))
        };
        try {
            hljs.initHighlightingOnLoad()
        } catch (a) {}
    }
}

function onAddTag(a) {
    alert("Added a tag: " + a)
}

function onRemoveTag(a) {
    alert("Removed a tag: " + a)
}

function onChangeTag(a, b) {
    alert("Changed a tag: " + b)
}

function init_TagsInput() {
    "undefined" != typeof $.fn.tagsInput && $("#tags_1").tagsInput({
        width: "auto"
    })
}

function init_select2() {
    "undefined" != typeof select2 && (console.log("init_toolbox"), $(".select2_single").select2({
        placeholder: "Select a state",
        allowClear: !0
    }), $(".select2_group").select2({}), $(".select2_multiple").select2({
        maximumSelectionLength: 4,
        placeholder: "With Max Selection limit 4",
        allowClear: !0
    }))
}

function init_wysiwyg() {
    function b(a, b) {
        var c = "";
        "unsupported-file-type" === a ? c = "Unsupported format " + b : console.log("error uploading file", a, b), $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button><strong>File upload error</strong> ' + c + " </div>").prependTo("#alerts")
    }
    "undefined" != typeof $.fn.wysiwyg && (console.log("init_wysiwyg"), $(".editor-wrapper").each(function() {
        var a = $(this).attr("id");
        $(this).wysiwyg({
            toolbarSelector: '[data-target="#' + a + '"]',
            fileUploadError: b
        })
    }), window.prettyPrint, prettyPrint())
}

function init_cropper() {
    if ("undefined" != typeof $.fn.cropper) {
        console.log("init_cropper");
        var a = $("#image"),
            b = $("#download"),
            c = $("#dataX"),
            d = $("#dataY"),
            e = $("#dataHeight"),
            f = $("#dataWidth"),
            g = $("#dataRotate"),
            h = $("#dataScaleX"),
            i = $("#dataScaleY"),
            j = {
                aspectRatio: 16 / 9,
                preview: ".img-preview",
                crop: function(a) {
                    c.val(Math.round(a.x)), d.val(Math.round(a.y)), e.val(Math.round(a.height)), f.val(Math.round(a.width)), g.val(a.rotate), h.val(a.scaleX), i.val(a.scaleY)
                }
            };
        $('[data-toggle="tooltip"]').tooltip(), a.on({
            "build.cropper": function(a) {
                console.log(a.type)
            },
            "built.cropper": function(a) {
                console.log(a.type)
            },
            "cropstart.cropper": function(a) {
                console.log(a.type, a.action)
            },
            "cropmove.cropper": function(a) {
                console.log(a.type, a.action)
            },
            "cropend.cropper": function(a) {
                console.log(a.type, a.action)
            },
            "crop.cropper": function(a) {
                console.log(a.type, a.x, a.y, a.width, a.height, a.rotate, a.scaleX, a.scaleY)
            },
            "zoom.cropper": function(a) {
                console.log(a.type, a.ratio)
            }
        }).cropper(j), $.isFunction(document.createElement("canvas").getContext) || $('button[data-method="getCroppedCanvas"]').prop("disabled", !0), "undefined" == typeof document.createElement("cropper").style.transition && ($('button[data-method="rotate"]').prop("disabled", !0), $('button[data-method="scale"]').prop("disabled", !0)), "undefined" == typeof b[0].download && b.addClass("disabled"), $(".docs-toggles").on("change", "input", function() {
            var e, f, b = $(this),
                c = b.attr("name"),
                d = b.prop("type");
            a.data("cropper") && ("checkbox" === d ? (j[c] = b.prop("checked"), e = a.cropper("getCropBoxData"), f = a.cropper("getCanvasData"), j.built = function() {
                a.cropper("setCropBoxData", e), a.cropper("setCanvasData", f)
            }) : "radio" === d && (j[c] = b.val()), a.cropper("destroy").cropper(j))
        }), $(".docs-buttons").on("click", "[data-method]", function() {
            var e, f, c = $(this),
                d = c.data();
            if (!c.prop("disabled") && !c.hasClass("disabled") && a.data("cropper") && d.method) {
                if (d = $.extend({}, d), "undefined" != typeof d.target && (e = $(d.target), "undefined" == typeof d.option)) try {
                    d.option = JSON.parse(e.val())
                } catch (a) {
                    console.log(a.message)
                }
                switch (f = a.cropper(d.method, d.option, d.secondOption), d.method) {
                    case "scaleX":
                    case "scaleY":
                        $(this).data("option", -d.option);
                        break;
                    case "getCroppedCanvas":
                        f && ($("#getCroppedCanvasModal").modal().find(".modal-body").html(f), b.hasClass("disabled") || b.attr("href", f.toDataURL()))
                }
                if ($.isPlainObject(f) && e) try {
                    e.val(JSON.stringify(f))
                } catch (a) {
                    console.log(a.message)
                }
            }
        }), $(document.body).on("keydown", function(b) {
            if (a.data("cropper") && !(this.scrollTop > 300)) switch (b.which) {
                case 37:
                    b.preventDefault(), a.cropper("move", -1, 0);
                    break;
                case 38:
                    b.preventDefault(), a.cropper("move", 0, -1);
                    break;
                case 39:
                    b.preventDefault(), a.cropper("move", 1, 0);
                    break;
                case 40:
                    b.preventDefault(), a.cropper("move", 0, 1)
            }
        });
        var m, k = $("#inputImage"),
            l = window.URL || window.webkitURL;
        l ? k.change(function() {
            var c, b = this.files;
            a.data("cropper") && b && b.length && (c = b[0], /^image\/\w+$/.test(c.type) ? (m = l.createObjectURL(c), a.one("built.cropper", function() {
                l.revokeObjectURL(m)
            }).cropper("reset").cropper("replace", m), k.val("")) : window.alert("Please choose an image file."))
        }) : k.prop("disabled", !0).parent().addClass("disabled")
    }
}

function init_knob() {
    if ("undefined" != typeof $.fn.knob) {
        console.log("init_knob"), $(".knob").knob({
            change: function(a) {},
            release: function(a) {
                console.log("release : " + a)
            },
            cancel: function() {
                console.log("cancel : ", this)
            },
            draw: function() {
                if ("tron" == this.$.data("skin")) {
                    this.cursorExt = .3;
                    var b, a = this.arc(this.cv),
                        c = 1;
                    return this.g.lineWidth = this.lineWidth, this.o.displayPrevious && (b = this.arc(this.v), this.g.beginPath(), this.g.strokeStyle = this.pColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, b.s, b.e, b.d), this.g.stroke()), this.g.beginPath(), this.g.strokeStyle = c ? this.o.fgColor : this.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d), this.g.stroke(), this.g.lineWidth = 2, this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1), this.g.stroke(), !1
                }
            }
        });
        var a, b = 0,
            c = 0,
            d = 0,
            e = $("div.idir"),
            f = $("div.ival"),
            g = function() {
                d++, e.show().html("+").fadeOut(), f.html(d)
            },
            h = function() {
                d--, e.show().html("-").fadeOut(), f.html(d)
            };
        $("input.infinite").knob({
            min: 0,
            max: 20,
            stopper: !1,
            change: function() {
                a > this.cv ? b ? (h(), b = 0) : (b = 1, c = 0) : a < this.cv && (c ? (g(), c = 0) : (c = 1, b = 0)), a = this.cv
            }
        })
    }
}

function init_InputMask() {
    "undefined" != typeof $.fn.inputmask && (console.log("init_InputMask"), $(":input").inputmask())
}

function init_ColorPicker() {
    "undefined" != typeof $.fn.colorpicker && (console.log("init_ColorPicker"), $(".demo1").colorpicker(), $(".demo2").colorpicker(), $("#demo_forceformat").colorpicker({
        format: "rgba",
        horizontal: !0
    }), $("#demo_forceformat3").colorpicker({
        format: "rgba"
    }), $(".demo-auto").colorpicker())
}

function init_IonRangeSlider() {
    "undefined" != typeof $.fn.ionRangeSlider && (console.log("init_IonRangeSlider"), $("#range_27").ionRangeSlider({
        type: "double",
        min: 1e6,
        max: 2e6,
        grid: !0,
        force_edges: !0
    }), $("#range").ionRangeSlider({
        hide_min_max: !0,
        keyboard: !0,
        min: 0,
        max: 5e3,
        from: 1e3,
        to: 4e3,
        type: "double",
        step: 1,
        prefix: "$",
        grid: !0
    }), $("#range_25").ionRangeSlider({
        type: "double",
        min: 1e6,
        max: 2e6,
        grid: !0
    }), $("#range_26").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1e4,
        step: 500,
        grid: !0,
        grid_snap: !0
    }), $("#range_31").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 30,
        to: 70,
        from_fixed: !0
    }), $(".range_min_max").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 30,
        to: 70,
        max_interval: 50
    }), $(".range_time24").ionRangeSlider({
        min: +moment().subtract(12, "hours").format("X"),
        max: +moment().format("X"),
        from: +moment().subtract(6, "hours").format("X"),
        grid: !0,
        force_edges: !0,
        prettify: function(a) {
            var b = moment(a, "X");
            return b.format("Do MMMM, HH:mm")
        }
    }))
}

function init_daterangepicker() {
    if ("undefined" != typeof $.fn.daterangepicker) {
        console.log("init_daterangepicker");
        var a = function(a, b, c) {
                console.log(a.toISOString(), b.toISOString(), c), $("#reportrange span").html(a.format("MMMM D, YYYY") + " - " + b.format("MMMM D, YYYY"))
            },
            b = {
                startDate: moment().subtract(29, "days"),
                endDate: moment(),
                minDate: "01/01/2012",
                maxDate: "12/31/2015",
                dateLimit: {
                    days: 60
                },
                showDropdowns: !0,
                showWeekNumbers: !0,
                timePicker: !1,
                timePickerIncrement: 1,
                timePicker12Hour: !0,
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                },
                opens: "left",
                buttonClasses: ["btn btn-default"],
                applyClass: "btn-small btn-primary",
                cancelClass: "btn-small",
                format: "MM/DD/YYYY",
                separator: " to ",
                locale: {
                    applyLabel: "Submit",
                    cancelLabel: "Clear",
                    fromLabel: "From",
                    toLabel: "To",
                    customRangeLabel: "Custom",
                    daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    firstDay: 1
                }
            };
        $("#reportrange span").html(moment().subtract(29, "days").format("MMMM D, YYYY") + " - " + moment().format("MMMM D, YYYY")), $("#reportrange").daterangepicker(b, a), $("#reportrange").on("show.daterangepicker", function() {
            console.log("show event fired")
        }), $("#reportrange").on("hide.daterangepicker", function() {
            console.log("hide event fired")
        }), $("#reportrange").on("apply.daterangepicker", function(a, b) {
            console.log("apply event fired, start/end dates are " + b.startDate.format("MMMM D, YYYY") + " to " + b.endDate.format("MMMM D, YYYY"))
        }), $("#reportrange").on("cancel.daterangepicker", function(a, b) {
            console.log("cancel event fired")
        }), $("#options1").click(function() {
            $("#reportrange").data("daterangepicker").setOptions(b, a)
        }), $("#options2").click(function() {
            $("#reportrange").data("daterangepicker").setOptions(optionSet2, a)
        }), $("#destroy").click(function() {
            $("#reportrange").data("daterangepicker").remove()
        })
    }
}

function init_daterangepicker_right() {
    if ("undefined" != typeof $.fn.daterangepicker) {
        console.log("init_daterangepicker_right");
        var a = function(a, b, c) {
                console.log(a.toISOString(), b.toISOString(), c), $("#reportrange_right span").html(a.format("MMMM D, YYYY") + " - " + b.format("MMMM D, YYYY"))
            },
            b = {
                startDate: moment().subtract(29, "days"),
                endDate: moment(),
                minDate: "01/01/2012",
                maxDate: "12/31/2020",
                dateLimit: {
                    days: 60
                },
                showDropdowns: !0,
                showWeekNumbers: !0,
                timePicker: !1,
                timePickerIncrement: 1,
                timePicker12Hour: !0,
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                },
                opens: "right",
                buttonClasses: ["btn btn-default"],
                applyClass: "btn-small btn-primary",
                cancelClass: "btn-small",
                format: "MM/DD/YYYY",
                separator: " to ",
                locale: {
                    applyLabel: "Submit",
                    cancelLabel: "Clear",
                    fromLabel: "From",
                    toLabel: "To",
                    customRangeLabel: "Custom",
                    daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    firstDay: 1
                }
            };
        $("#reportrange_right span").html(moment().subtract(29, "days").format("MMMM D, YYYY") + " - " + moment().format("MMMM D, YYYY")), $("#reportrange_right").daterangepicker(b, a), $("#reportrange_right").on("show.daterangepicker", function() {
            console.log("show event fired")
        }), $("#reportrange_right").on("hide.daterangepicker", function() {
            console.log("hide event fired")
        }), $("#reportrange_right").on("apply.daterangepicker", function(a, b) {
            console.log("apply event fired, start/end dates are " + b.startDate.format("MMMM D, YYYY") + " to " + b.endDate.format("MMMM D, YYYY"))
        }), $("#reportrange_right").on("cancel.daterangepicker", function(a, b) {
            console.log("cancel event fired")
        }), $("#options1").click(function() {
            $("#reportrange_right").data("daterangepicker").setOptions(b, a)
        }), $("#options2").click(function() {
            $("#reportrange_right").data("daterangepicker").setOptions(optionSet2, a)
        }), $("#destroy").click(function() {
            $("#reportrange_right").data("daterangepicker").remove()
        })
    }
}

function init_daterangepicker_single_call() {
    "undefined" != typeof $.fn.daterangepicker && (console.log("init_daterangepicker_single_call"), $("#single_cal1").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_1"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }), $("#single_cal2").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_2"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }), $("#single_cal3").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_3"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }), $("#single_cal4").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_4"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }))
}

function init_daterangepicker_reservation() {
    "undefined" != typeof $.fn.daterangepicker && (console.log("init_daterangepicker_reservation"), $("#reservation").daterangepicker(null, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }), $("#reservation-time").daterangepicker({
        timePicker: !0,
        timePickerIncrement: 30,
        locale: {
            format: "MM/DD/YYYY h:mm A"
        }
    }))
}

function init_SmartWizard() {
    "undefined" != typeof $.fn.smartWizard && (console.log("init_SmartWizard"), $("#wizard").smartWizard(), $("#wizard_verticle").smartWizard({
        transitionEffect: "slide"
    }), $(".buttonNext").addClass("btn btn-success"), $(".buttonPrevious").addClass("btn btn-primary"), $(".buttonFinish").addClass("btn btn-default"))
}

function init_validator() {
    "undefined" != typeof validator && (console.log("init_validator"), validator.message.date = "not a real date", $("form").on("blur", "input[required], input.optional, select.required", validator.checkField).on("change", "select.required", validator.checkField).on("keypress", "input[required][pattern]", validator.keypress), $(".multi.required").on("keyup blur", "input", function() {
        validator.checkField.apply($(this).siblings().last()[0])
    }), $("form").submit(function(a) {
        a.preventDefault();
        var b = !0;
        return validator.checkAll($(this)) || (b = !1), b && this.submit(), !1
    }))
}

function init_PNotify() {
    "undefined" != typeof PNotify && (console.log("init_PNotify"), new PNotify({
        title: "PNotify",
        type: "info",
        text: "Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",
        nonblock: {
            nonblock: !0
        },
        addclass: "dark",
        styling: "bootstrap3",
        hide: !1,
        before_close: function(a) {
            return a.update({
                title: a.options.title + " - Enjoy your Stay",
                before_close: null
            }), a.queueRemove(), !1
        }
    }))
}

function init_CustomNotification() {
    if (console.log("run_customtabs"), "undefined" != typeof CustomTabs) {
        console.log("init_CustomTabs");
        var a = 10;
        TabbedNotification = function(b) {
            var c = "<div id='ntf" + a + "' class='text alert-" + b.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + b.title + "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + b.text + "</p></div>";
            document.getElementById("custom_notifications") ? ($("#custom_notifications ul.notifications").append("<li><a id='ntlink" + a + "' class='alert-" + b.type + "' href='#ntf" + a + "'><i class='fa fa-bell animated shake'></i></a></li>"), $("#custom_notifications #notif-group").append(c), a++, CustomTabs(b)) : alert("doesnt exists")
        }, CustomTabs = function(a) {
            $(".tabbed_notifications > div").hide(), $(".tabbed_notifications > div:first-of-type").show(), $("#custom_notifications").removeClass("dsp_none"), $(".notifications a").click(function(a) {
                a.preventDefault();
                var b = $(this),
                    c = "#" + b.parents(".notifications").data("tabbed_notifications"),
                    d = b.closest("li").siblings().children("a"),
                    e = b.attr("href");
                d.removeClass("active"), b.addClass("active"), $(c).children("div").hide(), $(e).show()
            })
        }, CustomTabs();
        var b = idname = "";
        $(document).on("click", ".notification_close", function(a) {
            idname = $(this).parent().parent().attr("id"), b = idname.substr(-2), $("#ntf" + b).remove(), $("#ntlink" + b).parent().remove(), $(".notifications a").first().addClass("active"), $("#notif-group div").first().css("display", "block")
        })
    }
}

function init_EasyPieChart() {
    if ("undefined" != typeof $.fn.easyPieChart) {
        console.log("init_EasyPieChart"), $(".chart").easyPieChart({
            easing: "easeOutElastic",
            delay: 3e3,
            barColor: "#26B99A",
            trackColor: "#fff",
            scaleColor: !1,
            lineWidth: 20,
            trackWidth: 16,
            lineCap: "butt",
            onStep: function(a, b, c) {
                $(this.el).find(".percent").text(Math.round(c))
            }
        });
        var a = window.chart = $(".chart").data("easyPieChart");
        $(".js_update").on("click", function() {
            a.update(200 * Math.random() - 100)
        });
        var b = $.fn.popover.Constructor.prototype.leave;
        $.fn.popover.Constructor.prototype.leave = function(a) {
            var d, e, c = a instanceof this.constructor ? a : $(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            b.call(this, a), a.currentTarget && (d = $(a.currentTarget).siblings(".popover"), e = c.timeout, d.one("mouseenter", function() {
                clearTimeout(e), d.one("mouseleave", function() {
                    $.fn.popover.Constructor.prototype.leave.call(c, c)
                })
            }))
        }, $("body").popover({
            selector: "[data-popover]",
            trigger: "click hover",
            delay: {
                show: 50,
                hide: 400
            }
        })
    }
}

function init_charts() {
    if (console.log("run_charts  typeof [" + typeof Chart + "]"), "undefined" != typeof Chart) {
        if (console.log("init_charts"), Chart.defaults.global.legend = {
                enabled: !1
            }, $("#canvas_line").length) {
            new Chart(document.getElementById("canvas_line"), {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        borderColor: "rgba(38, 185, 154, 0.7)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 1,
                        data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                        label: "My Second dataset",
                        backgroundColor: "rgba(3, 88, 106, 0.3)",
                        borderColor: "rgba(3, 88, 106, 0.70)",
                        pointBorderColor: "rgba(3, 88, 106, 0.70)",
                        pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(151,187,205,1)",
                        pointBorderWidth: 1,
                        data: [82, 23, 66, 9, 99, 4, 2]
                    }]
                }
            })
        }
        if ($("#canvas_line1").length) {
            new Chart(document.getElementById("canvas_line1"), {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        borderColor: "rgba(38, 185, 154, 0.7)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 1,
                        data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                        label: "My Second dataset",
                        backgroundColor: "rgba(3, 88, 106, 0.3)",
                        borderColor: "rgba(3, 88, 106, 0.70)",
                        pointBorderColor: "rgba(3, 88, 106, 0.70)",
                        pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(151,187,205,1)",
                        pointBorderWidth: 1,
                        data: [82, 23, 66, 9, 99, 4, 2]
                    }]
                }
            })
        }
        if ($("#canvas_line2").length) {
            new Chart(document.getElementById("canvas_line2"), {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        borderColor: "rgba(38, 185, 154, 0.7)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 1,
                        data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                        label: "My Second dataset",
                        backgroundColor: "rgba(3, 88, 106, 0.3)",
                        borderColor: "rgba(3, 88, 106, 0.70)",
                        pointBorderColor: "rgba(3, 88, 106, 0.70)",
                        pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(151,187,205,1)",
                        pointBorderWidth: 1,
                        data: [82, 23, 66, 9, 99, 4, 2]
                    }]
                }
            })
        }
        if ($("#canvas_line3").length) {
            new Chart(document.getElementById("canvas_line3"), {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        borderColor: "rgba(38, 185, 154, 0.7)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 1,
                        data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                        label: "My Second dataset",
                        backgroundColor: "rgba(3, 88, 106, 0.3)",
                        borderColor: "rgba(3, 88, 106, 0.70)",
                        pointBorderColor: "rgba(3, 88, 106, 0.70)",
                        pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(151,187,205,1)",
                        pointBorderWidth: 1,
                        data: [82, 23, 66, 9, 99, 4, 2]
                    }]
                }
            })
        }
        if ($("#canvas_line4").length) {
            new Chart(document.getElementById("canvas_line4"), {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        borderColor: "rgba(38, 185, 154, 0.7)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 1,
                        data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                        label: "My Second dataset",
                        backgroundColor: "rgba(3, 88, 106, 0.3)",
                        borderColor: "rgba(3, 88, 106, 0.70)",
                        pointBorderColor: "rgba(3, 88, 106, 0.70)",
                        pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(151,187,205,1)",
                        pointBorderWidth: 1,
                        data: [82, 23, 66, 9, 99, 4, 2]
                    }]
                }
            })
        }
        if ($("#lineChart").length) {
            var f = document.getElementById("lineChart");
            new Chart(f, {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: "rgba(38, 185, 154, 0.31)",
                        borderColor: "rgba(38, 185, 154, 0.7)",
                        pointBorderColor: "rgba(38, 185, 154, 0.7)",
                        pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointBorderWidth: 1,
                        data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                        label: "My Second dataset",
                        backgroundColor: "rgba(3, 88, 106, 0.3)",
                        borderColor: "rgba(3, 88, 106, 0.70)",
                        pointBorderColor: "rgba(3, 88, 106, 0.70)",
                        pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(151,187,205,1)",
                        pointBorderWidth: 1,
                        data: [82, 23, 66, 9, 99, 4, 2]
                    }]
                }
            })
        }
        if ($("#mybarChart").length) {
            var f = document.getElementById("mybarChart");
            new Chart(f, {
                type: "bar",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "# of Votes",
                        backgroundColor: "#26B99A",
                        data: [51, 30, 40, 28, 92, 50, 45]
                    }, {
                        label: "# of Votes",
                        backgroundColor: "#03586A",
                        data: [41, 56, 25, 48, 72, 34, 12]
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            }
                        }]
                    }
                }
            })
        }
        if ($("#canvasDoughnut").length) {
            var f = document.getElementById("canvasDoughnut"),
                i = {
                    labels: ["Dark Grey", "Purple Color", "Gray Color", "Green Color", "Blue Color"],
                    datasets: [{
                        data: [120, 50, 140, 180, 100],
                        backgroundColor: ["#455C73", "#9B59B6", "#BDC3C7", "#26B99A", "#3498DB"],
                        hoverBackgroundColor: ["#34495E", "#B370CF", "#CFD4D8", "#36CAAB", "#49A9EA"]
                    }]
                };
            new Chart(f, {
                type: "doughnut",
                tooltipFillColor: "rgba(51, 51, 51, 0.55)",
                data: i
            })
        }
        if ($("#canvasRadar").length) {
            var f = document.getElementById("canvasRadar"),
                i = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: "rgba(3, 88, 106, 0.2)",
                        borderColor: "rgba(3, 88, 106, 0.80)",
                        pointBorderColor: "rgba(3, 88, 106, 0.80)",
                        pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    }, {
                        label: "My Second dataset",
                        backgroundColor: "rgba(38, 185, 154, 0.2)",
                        borderColor: "rgba(38, 185, 154, 0.85)",
                        pointColor: "rgba(38, 185, 154, 0.85)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }]
                };
            new Chart(f, {
                type: "radar",
                data: i
            })
        }
        if ($("#pieChart").length) {
            var f = document.getElementById("pieChart"),
                i = {
                    datasets: [{
                        data: [120, 50, 140, 180, 100],
                        backgroundColor: ["#455C73", "#9B59B6", "#BDC3C7", "#26B99A", "#3498DB"],
                        label: "My dataset"
                    }],
                    labels: ["Dark Gray", "Purple", "Gray", "Green", "Blue"]
                };
            new Chart(f, {
                data: i,
                type: "pie",
                otpions: {
                    legend: !1
                }
            })
        }
        if ($("#polarArea").length) {
            var f = document.getElementById("polarArea"),
                i = {
                    datasets: [{
                        data: [120, 50, 140, 180, 100],
                        backgroundColor: ["#455C73", "#9B59B6", "#BDC3C7", "#26B99A", "#3498DB"],
                        label: "My dataset"
                    }],
                    labels: ["Dark Gray", "Purple", "Gray", "Green", "Blue"]
                };
            new Chart(f, {
                data: i,
                type: "polarArea",
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: !0
                        }
                    }
                }
            })
        }
    }
}

function init_compose() {
    "undefined" != typeof $.fn.slideToggle && (console.log("init_compose"), $("#compose, .compose-close").click(function() {
        $(".compose").slideToggle()
    }))
}

function init_calendar() {
    if ("undefined" != typeof $.fn.fullCalendar) {
        console.log("init_calendar");
        var e, f, a = new Date,
            b = a.getDate(),
            c = a.getMonth(),
            d = a.getFullYear(),
            g = $("#calendar").fullCalendar({
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "month,agendaWeek,agendaDay,listMonth"
                },
                selectable: !0,
                selectHelper: !0,
                select: function(a, b, c) {
                    $("#fc_create").click(), e = a, ended = b, $(".antosubmit").on("click", function() {
                        var a = $("#title").val();
                        return b && (ended = b), f = $("#event_type").val(), a && g.fullCalendar("renderEvent", {
                            title: a,
                            start: e,
                            end: b,
                            allDay: c
                        }, !0), $("#title").val(""), g.fullCalendar("unselect"), $(".antoclose").click(), !1
                    })
                },
                eventClick: function(a, b, c) {
                    $("#fc_edit").click(), $("#title2").val(a.title), f = $("#event_type").val(), $(".antosubmit2").on("click", function() {
                        a.title = $("#title2").val(), g.fullCalendar("updateEvent", a), $(".antoclose2").click()
                    }), g.fullCalendar("unselect")
                },
                editable: !0,
                events: [{
                    title: "All Day Event",
                    start: new Date(d, c, 1)
                }, {
                    title: "Long Event",
                    start: new Date(d, c, b - 5),
                    end: new Date(d, c, b - 2)
                }, {
                    title: "Meeting",
                    start: new Date(d, c, b, 10, 30),
                    allDay: !1
                }, {
                    title: "Lunch",
                    start: new Date(d, c, b + 14, 12, 0),
                    end: new Date(d, c, b, 14, 0),
                    allDay: !1
                }, {
                    title: "Birthday Party",
                    start: new Date(d, c, b + 1, 19, 0),
                    end: new Date(d, c, b + 1, 22, 30),
                    allDay: !1
                }, {
                    title: "Click for Google",
                    start: new Date(d, c, 28),
                    end: new Date(d, c, 29),
                    url: "http://google.com/"
                }]
            })
    }
}

function init_DataTables() {
    if (console.log("run_datatables"), "undefined" != typeof $.fn.DataTable) {
        console.log("init_DataTables");
        var a = function() {
            $("#datatable-buttons").length && $("#datatable-buttons").DataTable({
                dom: "Blfrtip",
                buttons: [{
                    extend: "copy",
                    className: "btn-sm"
                }, {
                    extend: "csv",
                    className: "btn-sm"
                }, {
                    extend: "excel",
                    className: "btn-sm"
                }, {
                    extend: "pdfHtml5",
                    className: "btn-sm"
                }, {
                    extend: "print",
                    className: "btn-sm"
                }],
                responsive: !0
            })
        };
        TableManageButtons = function() {
            "use strict";
            return {
                init: function() {
                    a()
                }
            }
        }(), $("#datatable").dataTable(), $("#datatable-keytable").DataTable({
            keys: !0
        }), $("#datatable-responsive").DataTable(), $("#datatable-scroller").DataTable({
            ajax: "js/datatables/json/scroller-demo.json",
            deferRender: !0,
            scrollY: 380,
            scrollCollapse: !0,
            scroller: !0
        }), $("#datatable-fixed-header").DataTable({
            fixedHeader: !0
        });
        var b = $("#datatable-checkbox");
        b.dataTable({
            order: [
                [1, "asc"]
            ],
            columnDefs: [{
                orderable: !1,
                targets: [0]
            }]
        }), b.on("draw.dt", function() {
            $("checkbox input").iCheck({
                checkboxClass: "icheckbox_flat-green"
            })
        }), TableManageButtons.init()
    }
}

function init_morris_charts() {
    "undefined" != typeof Morris && (console.log("init_morris_charts"), $("#graph_bar").length && Morris.Bar({
        element: "graph_bar",
        data: [{
            device: "iPhone 4",
            geekbench: 380
        }, {
            device: "iPhone 4S",
            geekbench: 655
        }, {
            device: "iPhone 3GS",
            geekbench: 275
        }, {
            device: "iPhone 5",
            geekbench: 1571
        }, {
            device: "iPhone 5S",
            geekbench: 655
        }, {
            device: "iPhone 6",
            geekbench: 2154
        }, {
            device: "iPhone 6 Plus",
            geekbench: 1144
        }, {
            device: "iPhone 6S",
            geekbench: 2371
        }, {
            device: "iPhone 6S Plus",
            geekbench: 1471
        }, {
            device: "Other",
            geekbench: 1371
        }],
        xkey: "device",
        ykeys: ["geekbench"],
        labels: ["Geekbench"],
        barRatio: .4,
        barColors: ["#26B99A", "#34495E", "#ACADAC", "#3498DB"],
        xLabelAngle: 35,
        hideHover: "auto",
        resize: !0
    }), $("#graph_bar_group").length && Morris.Bar({
        element: "graph_bar_group",
        data: [{
            period: "2016-10-01",
            licensed: 807,
            sorned: 660
        }, {
            period: "2016-09-30",
            licensed: 1251,
            sorned: 729
        }, {
            period: "2016-09-29",
            licensed: 1769,
            sorned: 1018
        }, {
            period: "2016-09-20",
            licensed: 2246,
            sorned: 1461
        }, {
            period: "2016-09-19",
            licensed: 2657,
            sorned: 1967
        }, {
            period: "2016-09-18",
            licensed: 3148,
            sorned: 2627
        }, {
            period: "2016-09-17",
            licensed: 3471,
            sorned: 3740
        }, {
            period: "2016-09-16",
            licensed: 2871,
            sorned: 2216
        }, {
            period: "2016-09-15",
            licensed: 2401,
            sorned: 1656
        }, {
            period: "2016-09-10",
            licensed: 2115,
            sorned: 1022
        }],
        xkey: "period",
        barColors: ["#26B99A", "#34495E", "#ACADAC", "#3498DB"],
        ykeys: ["licensed", "sorned"],
        labels: ["Licensed", "SORN"],
        hideHover: "auto",
        xLabelAngle: 60,
        resize: !0
    }), $("#graphx").length && Morris.Bar({
        element: "graphx",
        data: [{
            x: "2015 Q1",
            y: 2,
            z: 3,
            a: 4
        }, {
            x: "2015 Q2",
            y: 3,
            z: 5,
            a: 6
        }, {
            x: "2015 Q3",
            y: 4,
            z: 3,
            a: 2
        }, {
            x: "2015 Q4",
            y: 2,
            z: 4,
            a: 5
        }],
        xkey: "x",
        ykeys: ["y", "z", "a"],
        barColors: ["#26B99A", "#34495E", "#ACADAC", "#3498DB"],
        hideHover: "auto",
        labels: ["Y", "Z", "A"],
        resize: !0
    }).on("click", function(a, b) {
        console.log(a, b)
    }), $("#graph_area").length && Morris.Area({
        element: "graph_area",
        data: [{
            period: "2014 Q1",
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: "2014 Q2",
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: "2014 Q3",
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: "2014 Q4",
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: "2015 Q1",
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: "2015 Q2",
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: "2015 Q3",
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: "2015 Q4",
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: "2016 Q1",
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: "2016 Q2",
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: "period",
        ykeys: ["iphone", "ipad", "itouch"],
        lineColors: ["#26B99A", "#34495E", "#ACADAC", "#3498DB"],
        labels: ["iPhone", "iPad", "iPod Touch"],
        pointSize: 2,
        hideHover: "auto",
        resize: !0
    }), $("#graph_donut").length && Morris.Donut({
        element: "graph_donut",
        data: [{
            label: "Jam",
            value: 25
        }, {
            label: "Frosted",
            value: 40
        }, {
            label: "Custard",
            value: 25
        }, {
            label: "Sugar",
            value: 10
        }],
        colors: ["#26B99A", "#34495E", "#ACADAC", "#3498DB"],
        formatter: function(a) {
            return a + "%"
        },
        resize: !0
    }), $("#graph_line").length && (Morris.Line({
        element: "graph_line",
        xkey: "year",
        ykeys: ["value"],
        labels: ["Value"],
        hideHover: "auto",
        lineColors: ["#26B99A", "#34495E", "#ACADAC", "#3498DB"],
        data: [{
            year: "2012",
            value: 20
        }, {
            year: "2013",
            value: 10
        }, {
            year: "2014",
            value: 5
        }, {
            year: "2015",
            value: 5
        }, {
            year: "2016",
            value: 20
        }],
        resize: !0
    }), $MENU_TOGGLE.on("click", function() {
        $(window).resize()
    })))
}

function init_echarts() {
    if ("undefined" != typeof echarts) {
        console.log("init_echarts");
        var a = {
            color: ["#26B99A", "#34495E", "#BDC3C7", "#3498DB", "#9B59B6", "#8abb6f", "#759c6a", "#bfd3b7"],
            title: {
                itemGap: 8,
                textStyle: {
                    fontWeight: "normal",
                    color: "#408829"
                }
            },
            dataRange: {
                color: ["#1f610a", "#97b58d"]
            },
            toolbox: {
                color: ["#408829", "#408829", "#408829", "#408829"]
            },
            tooltip: {
                backgroundColor: "rgba(0,0,0,0.5)",
                axisPointer: {
                    type: "line",
                    lineStyle: {
                        color: "#408829",
                        type: "dashed"
                    },
                    crossStyle: {
                        color: "#408829"
                    },
                    shadowStyle: {
                        color: "rgba(200,200,200,0.3)"
                    }
                }
            },
            dataZoom: {
                dataBackgroundColor: "#eee",
                fillerColor: "rgba(64,136,41,0.2)",
                handleColor: "#408829"
            },
            grid: {
                borderWidth: 0
            },
            categoryAxis: {
                axisLine: {
                    lineStyle: {
                        color: "#408829"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ["#eee"]
                    }
                }
            },
            valueAxis: {
                axisLine: {
                    lineStyle: {
                        color: "#408829"
                    }
                },
                splitArea: {
                    show: !0,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.1)", "rgba(200,200,200,0.1)"]
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ["#eee"]
                    }
                }
            },
            timeline: {
                lineStyle: {
                    color: "#408829"
                },
                controlStyle: {
                    normal: {
                        color: "#408829"
                    },
                    emphasis: {
                        color: "#408829"
                    }
                }
            },
            k: {
                itemStyle: {
                    normal: {
                        color: "#68a54a",
                        color0: "#a9cba2",
                        lineStyle: {
                            width: 1,
                            color: "#408829",
                            color0: "#86b379"
                        }
                    }
                }
            },
            map: {
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: "#ddd"
                        },
                        label: {
                            textStyle: {
                                color: "#c12e34"
                            }
                        }
                    },
                    emphasis: {
                        areaStyle: {
                            color: "#99d2dd"
                        },
                        label: {
                            textStyle: {
                                color: "#c12e34"
                            }
                        }
                    }
                }
            },
            force: {
                itemStyle: {
                    normal: {
                        linkStyle: {
                            strokeColor: "#408829"
                        }
                    }
                }
            },
            chord: {
                padding: 4,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 1,
                            color: "rgba(128, 128, 128, 0.5)"
                        },
                        chordStyle: {
                            lineStyle: {
                                width: 1,
                                color: "rgba(128, 128, 128, 0.5)"
                            }
                        }
                    },
                    emphasis: {
                        lineStyle: {
                            width: 1,
                            color: "rgba(128, 128, 128, 0.5)"
                        },
                        chordStyle: {
                            lineStyle: {
                                width: 1,
                                color: "rgba(128, 128, 128, 0.5)"
                            }
                        }
                    }
                }
            },
            gauge: {
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                    show: !0,
                    lineStyle: {
                        color: [
                            [.2, "#86b379"],
                            [.8, "#68a54a"],
                            [1, "#408829"]
                        ],
                        width: 8
                    }
                },
                axisTick: {
                    splitNumber: 10,
                    length: 12,
                    lineStyle: {
                        color: "auto"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "auto"
                    }
                },
                splitLine: {
                    length: 18,
                    lineStyle: {
                        color: "auto"
                    }
                },
                pointer: {
                    length: "90%",
                    color: "auto"
                },
                title: {
                    textStyle: {
                        color: "#333"
                    }
                },
                detail: {
                    textStyle: {
                        color: "auto"
                    }
                }
            },
            textStyle: {
                fontFamily: "Arial, Verdana, sans-serif"
            }
        };
        if ($("#mainb").length) {
            var b = echarts.init(document.getElementById("mainb"), a);
            b.setOption({
                title: {
                    text: "Graph title",
                    subtext: "Graph Sub-text"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: ["sales", "purchases"]
                },
                toolbox: {
                    show: !1
                },
                calculable: !1,
                xAxis: [{
                    type: "category",
                    data: ["1?", "2?", "3?", "4?", "5?", "6?", "7?", "8?", "9?", "10?", "11?", "12?"]
                }],
                yAxis: [{
                    type: "value"
                }],
                series: [{
                    name: "sales",
                    type: "bar",
                    data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3],
                    markPoint: {
                        data: [{
                            type: "max",
                            name: "???"
                        }, {
                            type: "min",
                            name: "???"
                        }]
                    },
                    markLine: {
                        data: [{
                            type: "average",
                            name: "???"
                        }]
                    }
                }, {
                    name: "purchases",
                    type: "bar",
                    data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3],
                    markPoint: {
                        data: [{
                            name: "sales",
                            value: 182.2,
                            xAxis: 7,
                            yAxis: 183
                        }, {
                            name: "purchases",
                            value: 2.3,
                            xAxis: 11,
                            yAxis: 3
                        }]
                    },
                    markLine: {
                        data: [{
                            type: "average",
                            name: "???"
                        }]
                    }
                }]
            })
        }
        if ($("#echart_sonar").length) {
            var c = echarts.init(document.getElementById("echart_sonar"), a);
            c.setOption({
                title: {
                    text: "Budget vs spending",
                    subtext: "Subtitle"
                },
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    orient: "vertical",
                    x: "right",
                    y: "bottom",
                    data: ["Allocated Budget", "Actual Spending"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                polar: [{
                    indicator: [{
                        text: "Sales",
                        max: 6e3
                    }, {
                        text: "Administration",
                        max: 16e3
                    }, {
                        text: "Information Techology",
                        max: 3e4
                    }, {
                        text: "Customer Support",
                        max: 38e3
                    }, {
                        text: "Development",
                        max: 52e3
                    }, {
                        text: "Marketing",
                        max: 25e3
                    }]
                }],
                calculable: !0,
                series: [{
                    name: "Budget vs spending",
                    type: "radar",
                    data: [{
                        value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                        name: "Allocated Budget"
                    }, {
                        value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                        name: "Actual Spending"
                    }]
                }]
            })
        }
        if ($("#echart_pyramid").length) {
            var d = echarts.init(document.getElementById("echart_pyramid"), a);
            d.setOption({
                title: {
                    text: "Echart Pyramid Graph",
                    subtext: "Subtitle"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    show: !0,
                    feature: {
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                legend: {
                    data: ["Something #1", "Something #2", "Something #3", "Something #4", "Something #5"],
                    orient: "vertical",
                    x: "left",
                    y: "bottom"
                },
                calculable: !0,
                series: [{
                    name: "漏斗图",
                    type: "funnel",
                    width: "40%",
                    data: [{
                        value: 60,
                        name: "Something #1"
                    }, {
                        value: 40,
                        name: "Something #2"
                    }, {
                        value: 20,
                        name: "Something #3"
                    }, {
                        value: 80,
                        name: "Something #4"
                    }, {
                        value: 100,
                        name: "Something #5"
                    }]
                }]
            })
        }
        if ($("#echart_gauge").length) {
            var e = echarts.init(document.getElementById("echart_gauge"), a);
            e.setOption({
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    show: !0,
                    feature: {
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                series: [{
                    name: "Performance",
                    type: "gauge",
                    center: ["50%", "50%"],
                    startAngle: 140,
                    endAngle: -140,
                    min: 0,
                    max: 100,
                    precision: 0,
                    splitNumber: 10,
                    axisLine: {
                        show: !0,
                        lineStyle: {
                            color: [
                                [.2, "lightgreen"],
                                [.4, "orange"],
                                [.8, "skyblue"],
                                [1, "#ff4500"]
                            ],
                            width: 30
                        }
                    },
                    axisTick: {
                        show: !0,
                        splitNumber: 5,
                        length: 8,
                        lineStyle: {
                            color: "#eee",
                            width: 1,
                            type: "solid"
                        }
                    },
                    axisLabel: {
                        show: !0,
                        formatter: function(a) {
                            switch (a + "") {
                                case "10":
                                    return "a";
                                case "30":
                                    return "b";
                                case "60":
                                    return "c";
                                case "90":
                                    return "d";
                                default:
                                    return ""
                            }
                        },
                        textStyle: {
                            color: "#333"
                        }
                    },
                    splitLine: {
                        show: !0,
                        length: 30,
                        lineStyle: {
                            color: "#eee",
                            width: 2,
                            type: "solid"
                        }
                    },
                    pointer: {
                        length: "80%",
                        width: 8,
                        color: "auto"
                    },
                    title: {
                        show: !0,
                        offsetCenter: ["-65%", -10],
                        textStyle: {
                            color: "#333",
                            fontSize: 15
                        }
                    },
                    detail: {
                        show: !0,
                        backgroundColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "#ccc",
                        width: 100,
                        height: 40,
                        offsetCenter: ["-60%", 10],
                        formatter: "{value}%",
                        textStyle: {
                            color: "auto",
                            fontSize: 30
                        }
                    },
                    data: [{
                        value: 50,
                        name: "Performance"
                    }]
                }]
            })
        }
        if ($("#echart_line").length) {
            var f = echarts.init(document.getElementById("echart_line"), a);
            f.setOption({
                title: {
                    text: "Line Graph",
                    subtext: "Subtitle"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    x: 220,
                    y: 40,
                    data: ["Intent", "Pre-order", "Deal"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        magicType: {
                            show: !0,
                            title: {
                                line: "Line",
                                bar: "Bar",
                                stack: "Stack",
                                tiled: "Tiled"
                            },
                            type: ["line", "bar", "stack", "tiled"]
                        },
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                calculable: !0,
                xAxis: [{
                    type: "category",
                    boundaryGap: !1,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                }],
                yAxis: [{
                    type: "value"
                }],
                series: [{
                    name: "Deal",
                    type: "line",
                    smooth: !0,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: "default"
                            }
                        }
                    },
                    data: [10, 12, 21, 54, 260, 830, 710]
                }, {
                    name: "Pre-order",
                    type: "line",
                    smooth: !0,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: "default"
                            }
                        }
                    },
                    data: [30, 182, 434, 791, 390, 30, 10]
                }, {
                    name: "Intent",
                    type: "line",
                    smooth: !0,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: "default"
                            }
                        }
                    },
                    data: [1320, 1132, 601, 234, 120, 90, 20]
                }]
            })
        }
        if ($("#echart_scatter").length) {
            var g = echarts.init(document.getElementById("echart_scatter"), a);
            g.setOption({
                title: {
                    text: "Scatter Graph",
                    subtext: "Heinz  2003"
                },
                tooltip: {
                    trigger: "axis",
                    showDelay: 0,
                    axisPointer: {
                        type: "cross",
                        lineStyle: {
                            type: "dashed",
                            width: 1
                        }
                    }
                },
                legend: {
                    data: ["Data2", "Data1"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                xAxis: [{
                    type: "value",
                    scale: !0,
                    axisLabel: {
                        formatter: "{value} cm"
                    }
                }],
                yAxis: [{
                    type: "value",
                    scale: !0,
                    axisLabel: {
                        formatter: "{value} kg"
                    }
                }],
                series: [{
                    name: "Data1",
                    type: "scatter",
                    tooltip: {
                        trigger: "item",
                        formatter: function(a) {
                            return a.value.length > 1 ? a.seriesName + " :<br/>" + a.value[0] + "cm " + a.value[1] + "kg " : a.seriesName + " :<br/>" + a.name + " : " + a.value + "kg "
                        }
                    },
                    data: [
                        [161.2, 51.6],
                        [167.5, 59],
                        [159.5, 49.2],
                        [157, 63],
                        [155.8, 53.6],
                        [170, 59],
                        [159.1, 47.6],
                        [166, 69.8],
                        [176.2, 66.8],
                        [160.2, 75.2],
                        [172.5, 55.2],
                        [170.9, 54.2],
                        [172.9, 62.5],
                        [153.4, 42],
                        [160, 50],
                        [147.2, 49.8],
                        [168.2, 49.2],
                        [175, 73.2],
                        [157, 47.8],
                        [167.6, 68.8],
                        [159.5, 50.6],
                        [175, 82.5],
                        [166.8, 57.2],
                        [176.5, 87.8],
                        [170.2, 72.8],
                        [174, 54.5],
                        [173, 59.8],
                        [179.9, 67.3],
                        [170.5, 67.8],
                        [160, 47],
                        [154.4, 46.2],
                        [162, 55],
                        [176.5, 83],
                        [160, 54.4],
                        [152, 45.8],
                        [162.1, 53.6],
                        [170, 73.2],
                        [160.2, 52.1],
                        [161.3, 67.9],
                        [166.4, 56.6],
                        [168.9, 62.3],
                        [163.8, 58.5],
                        [167.6, 54.5],
                        [160, 50.2],
                        [161.3, 60.3],
                        [167.6, 58.3],
                        [165.1, 56.2],
                        [160, 50.2],
                        [170, 72.9],
                        [157.5, 59.8],
                        [167.6, 61],
                        [160.7, 69.1],
                        [163.2, 55.9],
                        [152.4, 46.5],
                        [157.5, 54.3],
                        [168.3, 54.8],
                        [180.3, 60.7],
                        [165.5, 60],
                        [165, 62],
                        [164.5, 60.3],
                        [156, 52.7],
                        [160, 74.3],
                        [163, 62],
                        [165.7, 73.1],
                        [161, 80],
                        [162, 54.7],
                        [166, 53.2],
                        [174, 75.7],
                        [172.7, 61.1],
                        [167.6, 55.7],
                        [151.1, 48.7],
                        [164.5, 52.3],
                        [163.5, 50],
                        [152, 59.3],
                        [169, 62.5],
                        [164, 55.7],
                        [161.2, 54.8],
                        [155, 45.9],
                        [170, 70.6],
                        [176.2, 67.2],
                        [170, 69.4],
                        [162.5, 58.2],
                        [170.3, 64.8],
                        [164.1, 71.6],
                        [169.5, 52.8],
                        [163.2, 59.8],
                        [154.5, 49],
                        [159.8, 50],
                        [173.2, 69.2],
                        [170, 55.9],
                        [161.4, 63.4],
                        [169, 58.2],
                        [166.2, 58.6],
                        [159.4, 45.7],
                        [162.5, 52.2],
                        [159, 48.6],
                        [162.8, 57.8],
                        [159, 55.6],
                        [179.8, 66.8],
                        [162.9, 59.4],
                        [161, 53.6],
                        [151.1, 73.2],
                        [168.2, 53.4],
                        [168.9, 69],
                        [173.2, 58.4],
                        [171.8, 56.2],
                        [178, 70.6],
                        [164.3, 59.8],
                        [163, 72],
                        [168.5, 65.2],
                        [166.8, 56.6],
                        [172.7, 105.2],
                        [163.5, 51.8],
                        [169.4, 63.4],
                        [167.8, 59],
                        [159.5, 47.6],
                        [167.6, 63],
                        [161.2, 55.2],
                        [160, 45],
                        [163.2, 54],
                        [162.2, 50.2],
                        [161.3, 60.2],
                        [149.5, 44.8],
                        [157.5, 58.8],
                        [163.2, 56.4],
                        [172.7, 62],
                        [155, 49.2],
                        [156.5, 67.2],
                        [164, 53.8],
                        [160.9, 54.4],
                        [162.8, 58],
                        [167, 59.8],
                        [160, 54.8],
                        [160, 43.2],
                        [168.9, 60.5],
                        [158.2, 46.4],
                        [156, 64.4],
                        [160, 48.8],
                        [167.1, 62.2],
                        [158, 55.5],
                        [167.6, 57.8],
                        [156, 54.6],
                        [162.1, 59.2],
                        [173.4, 52.7],
                        [159.8, 53.2],
                        [170.5, 64.5],
                        [159.2, 51.8],
                        [157.5, 56],
                        [161.3, 63.6],
                        [162.6, 63.2],
                        [160, 59.5],
                        [168.9, 56.8],
                        [165.1, 64.1],
                        [162.6, 50],
                        [165.1, 72.3],
                        [166.4, 55],
                        [160, 55.9],
                        [152.4, 60.4],
                        [170.2, 69.1],
                        [162.6, 84.5],
                        [170.2, 55.9],
                        [158.8, 55.5],
                        [172.7, 69.5],
                        [167.6, 76.4],
                        [162.6, 61.4],
                        [167.6, 65.9],
                        [156.2, 58.6],
                        [175.2, 66.8],
                        [172.1, 56.6],
                        [162.6, 58.6],
                        [160, 55.9],
                        [165.1, 59.1],
                        [182.9, 81.8],
                        [166.4, 70.7],
                        [165.1, 56.8],
                        [177.8, 60],
                        [165.1, 58.2],
                        [175.3, 72.7],
                        [154.9, 54.1],
                        [158.8, 49.1],
                        [172.7, 75.9],
                        [168.9, 55],
                        [161.3, 57.3],
                        [167.6, 55],
                        [165.1, 65.5],
                        [175.3, 65.5],
                        [157.5, 48.6],
                        [163.8, 58.6],
                        [167.6, 63.6],
                        [165.1, 55.2],
                        [165.1, 62.7],
                        [168.9, 56.6],
                        [162.6, 53.9],
                        [164.5, 63.2],
                        [176.5, 73.6],
                        [168.9, 62],
                        [175.3, 63.6],
                        [159.4, 53.2],
                        [160, 53.4],
                        [170.2, 55],
                        [162.6, 70.5],
                        [167.6, 54.5],
                        [162.6, 54.5],
                        [160.7, 55.9],
                        [160, 59],
                        [157.5, 63.6],
                        [162.6, 54.5],
                        [152.4, 47.3],
                        [170.2, 67.7],
                        [165.1, 80.9],
                        [172.7, 70.5],
                        [165.1, 60.9],
                        [170.2, 63.6],
                        [170.2, 54.5],
                        [170.2, 59.1],
                        [161.3, 70.5],
                        [167.6, 52.7],
                        [167.6, 62.7],
                        [165.1, 86.3],
                        [162.6, 66.4],
                        [152.4, 67.3],
                        [168.9, 63],
                        [170.2, 73.6],
                        [175.2, 62.3],
                        [175.2, 57.7],
                        [160, 55.4],
                        [165.1, 104.1],
                        [174, 55.5],
                        [170.2, 77.3],
                        [160, 80.5],
                        [167.6, 64.5],
                        [167.6, 72.3],
                        [167.6, 61.4],
                        [154.9, 58.2],
                        [162.6, 81.8],
                        [175.3, 63.6],
                        [171.4, 53.4],
                        [157.5, 54.5],
                        [165.1, 53.6],
                        [160, 60],
                        [174, 73.6],
                        [162.6, 61.4],
                        [174, 55.5],
                        [162.6, 63.6],
                        [161.3, 60.9],
                        [156.2, 60],
                        [149.9, 46.8],
                        [169.5, 57.3],
                        [160, 64.1],
                        [175.3, 63.6],
                        [169.5, 67.3],
                        [160, 75.5],
                        [172.7, 68.2],
                        [162.6, 61.4],
                        [157.5, 76.8],
                        [176.5, 71.8],
                        [164.4, 55.5],
                        [160.7, 48.6],
                        [174, 66.4],
                        [163.8, 67.3]
                    ],
                    markPoint: {
                        data: [{
                            type: "max",
                            name: "Max"
                        }, {
                            type: "min",
                            name: "Min"
                        }]
                    },
                    markLine: {
                        data: [{
                            type: "average",
                            name: "Mean"
                        }]
                    }
                }, {
                    name: "Data2",
                    type: "scatter",
                    tooltip: {
                        trigger: "item",
                        formatter: function(a) {
                            return a.value.length > 1 ? a.seriesName + " :<br/>" + a.value[0] + "cm " + a.value[1] + "kg " : a.seriesName + " :<br/>" + a.name + " : " + a.value + "kg "
                        }
                    },
                    data: [
                        [174, 65.6],
                        [175.3, 71.8],
                        [193.5, 80.7],
                        [186.5, 72.6],
                        [187.2, 78.8],
                        [181.5, 74.8],
                        [184, 86.4],
                        [184.5, 78.4],
                        [175, 62],
                        [184, 81.6],
                        [180, 76.6],
                        [177.8, 83.6],
                        [192, 90],
                        [176, 74.6],
                        [174, 71],
                        [184, 79.6],
                        [192.7, 93.8],
                        [171.5, 70],
                        [173, 72.4],
                        [176, 85.9],
                        [176, 78.8],
                        [180.5, 77.8],
                        [172.7, 66.2],
                        [176, 86.4],
                        [173.5, 81.8],
                        [178, 89.6],
                        [180.3, 82.8],
                        [180.3, 76.4],
                        [164.5, 63.2],
                        [173, 60.9],
                        [183.5, 74.8],
                        [175.5, 70],
                        [188, 72.4],
                        [189.2, 84.1],
                        [172.8, 69.1],
                        [170, 59.5],
                        [182, 67.2],
                        [170, 61.3],
                        [177.8, 68.6],
                        [184.2, 80.1],
                        [186.7, 87.8],
                        [171.4, 84.7],
                        [172.7, 73.4],
                        [175.3, 72.1],
                        [180.3, 82.6],
                        [182.9, 88.7],
                        [188, 84.1],
                        [177.2, 94.1],
                        [172.1, 74.9],
                        [167, 59.1],
                        [169.5, 75.6],
                        [174, 86.2],
                        [172.7, 75.3],
                        [182.2, 87.1],
                        [164.1, 55.2],
                        [163, 57],
                        [171.5, 61.4],
                        [184.2, 76.8],
                        [174, 86.8],
                        [174, 72.2],
                        [177, 71.6],
                        [186, 84.8],
                        [167, 68.2],
                        [171.8, 66.1],
                        [182, 72],
                        [167, 64.6],
                        [177.8, 74.8],
                        [164.5, 70],
                        [192, 101.6],
                        [175.5, 63.2],
                        [171.2, 79.1],
                        [181.6, 78.9],
                        [167.4, 67.7],
                        [181.1, 66],
                        [177, 68.2],
                        [174.5, 63.9],
                        [177.5, 72],
                        [170.5, 56.8],
                        [182.4, 74.5],
                        [197.1, 90.9],
                        [180.1, 93],
                        [175.5, 80.9],
                        [180.6, 72.7],
                        [184.4, 68],
                        [175.5, 70.9],
                        [180.6, 72.5],
                        [177, 72.5],
                        [177.1, 83.4],
                        [181.6, 75.5],
                        [176.5, 73],
                        [175, 70.2],
                        [174, 73.4],
                        [165.1, 70.5],
                        [177, 68.9],
                        [192, 102.3],
                        [176.5, 68.4],
                        [169.4, 65.9],
                        [182.1, 75.7],
                        [179.8, 84.5],
                        [175.3, 87.7],
                        [184.9, 86.4],
                        [177.3, 73.2],
                        [167.4, 53.9],
                        [178.1, 72],
                        [168.9, 55.5],
                        [157.2, 58.4],
                        [180.3, 83.2],
                        [170.2, 72.7],
                        [177.8, 64.1],
                        [172.7, 72.3],
                        [165.1, 65],
                        [186.7, 86.4],
                        [165.1, 65],
                        [174, 88.6],
                        [175.3, 84.1],
                        [185.4, 66.8],
                        [177.8, 75.5],
                        [180.3, 93.2],
                        [180.3, 82.7],
                        [177.8, 58],
                        [177.8, 79.5],
                        [177.8, 78.6],
                        [177.8, 71.8],
                        [177.8, 116.4],
                        [163.8, 72.2],
                        [188, 83.6],
                        [198.1, 85.5],
                        [175.3, 90.9],
                        [166.4, 85.9],
                        [190.5, 89.1],
                        [166.4, 75],
                        [177.8, 77.7],
                        [179.7, 86.4],
                        [172.7, 90.9],
                        [190.5, 73.6],
                        [185.4, 76.4],
                        [168.9, 69.1],
                        [167.6, 84.5],
                        [175.3, 64.5],
                        [170.2, 69.1],
                        [190.5, 108.6],
                        [177.8, 86.4],
                        [190.5, 80.9],
                        [177.8, 87.7],
                        [184.2, 94.5],
                        [176.5, 80.2],
                        [177.8, 72],
                        [180.3, 71.4],
                        [171.4, 72.7],
                        [172.7, 84.1],
                        [172.7, 76.8],
                        [177.8, 63.6],
                        [177.8, 80.9],
                        [182.9, 80.9],
                        [170.2, 85.5],
                        [167.6, 68.6],
                        [175.3, 67.7],
                        [165.1, 66.4],
                        [185.4, 102.3],
                        [181.6, 70.5],
                        [172.7, 95.9],
                        [190.5, 84.1],
                        [179.1, 87.3],
                        [175.3, 71.8],
                        [170.2, 65.9],
                        [193, 95.9],
                        [171.4, 91.4],
                        [177.8, 81.8],
                        [177.8, 96.8],
                        [167.6, 69.1],
                        [167.6, 82.7],
                        [180.3, 75.5],
                        [182.9, 79.5],
                        [176.5, 73.6],
                        [186.7, 91.8],
                        [188, 84.1],
                        [188, 85.9],
                        [177.8, 81.8],
                        [174, 82.5],
                        [177.8, 80.5],
                        [171.4, 70],
                        [185.4, 81.8],
                        [185.4, 84.1],
                        [188, 90.5],
                        [188, 91.4],
                        [182.9, 89.1],
                        [176.5, 85],
                        [175.3, 69.1],
                        [175.3, 73.6],
                        [188, 80.5],
                        [188, 82.7],
                        [175.3, 86.4],
                        [170.5, 67.7],
                        [179.1, 92.7],
                        [177.8, 93.6],
                        [175.3, 70.9],
                        [182.9, 75],
                        [170.8, 93.2],
                        [188, 93.2],
                        [180.3, 77.7],
                        [177.8, 61.4],
                        [185.4, 94.1],
                        [168.9, 75],
                        [185.4, 83.6],
                        [180.3, 85.5],
                        [174, 73.9],
                        [167.6, 66.8],
                        [182.9, 87.3],
                        [160, 72.3],
                        [180.3, 88.6],
                        [167.6, 75.5],
                        [186.7, 101.4],
                        [175.3, 91.1],
                        [175.3, 67.3],
                        [175.9, 77.7],
                        [175.3, 81.8],
                        [179.1, 75.5],
                        [181.6, 84.5],
                        [177.8, 76.6],
                        [182.9, 85],
                        [177.8, 102.5],
                        [184.2, 77.3],
                        [179.1, 71.8],
                        [176.5, 87.9],
                        [188, 94.3],
                        [174, 70.9],
                        [167.6, 64.5],
                        [170.2, 77.3],
                        [167.6, 72.3],
                        [188, 87.3],
                        [174, 80],
                        [176.5, 82.3],
                        [180.3, 73.6],
                        [167.6, 74.1],
                        [188, 85.9],
                        [180.3, 73.2],
                        [167.6, 76.3],
                        [183, 65.9],
                        [183, 90.9],
                        [179.1, 89.1],
                        [170.2, 62.3],
                        [177.8, 82.7],
                        [179.1, 79.1],
                        [190.5, 98.2],
                        [177.8, 84.1],
                        [180.3, 83.2],
                        [180.3, 83.2]
                    ],
                    markPoint: {
                        data: [{
                            type: "max",
                            name: "Max"
                        }, {
                            type: "min",
                            name: "Min"
                        }]
                    },
                    markLine: {
                        data: [{
                            type: "average",
                            name: "Mean"
                        }]
                    }
                }]
            })
        }
        if ($("#echart_bar_horizontal").length) {
            var b = echarts.init(document.getElementById("echart_bar_horizontal"), a);
            b.setOption({
                title: {
                    text: "Bar Graph",
                    subtext: "Graph subtitle"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    x: 100,
                    data: ["2015", "2016"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                calculable: !0,
                xAxis: [{
                    type: "value",
                    boundaryGap: [0, .01]
                }],
                yAxis: [{
                    type: "category",
                    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
                }],
                series: [{
                    name: "2015",
                    type: "bar",
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                }, {
                    name: "2016",
                    type: "bar",
                    data: [19325, 23438, 31e3, 121594, 134141, 681807]
                }]
            })
        }
        if ($("#echart_pie2").length) {
            var h = echarts.init(document.getElementById("echart_pie2"), a);
            h.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x: "center",
                    y: "bottom",
                    data: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        magicType: {
                            show: !0,
                            type: ["pie", "funnel"]
                        },
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                calculable: !0,
                series: [{
                    name: "Area Mode",
                    type: "pie",
                    radius: [25, 90],
                    center: ["50%", 170],
                    roseType: "area",
                    x: "50%",
                    max: 40,
                    sort: "ascending",
                    data: [{
                        value: 10,
                        name: "rose1"
                    }, {
                        value: 5,
                        name: "rose2"
                    }, {
                        value: 15,
                        name: "rose3"
                    }, {
                        value: 25,
                        name: "rose4"
                    }, {
                        value: 20,
                        name: "rose5"
                    }, {
                        value: 35,
                        name: "rose6"
                    }]
                }]
            })
        }
        if ($("#echart_donut").length) {
            var i = echarts.init(document.getElementById("echart_donut"), a);
            i.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                calculable: !0,
                legend: {
                    x: "center",
                    y: "bottom",
                    data: ["Direct Access", "E-mail Marketing", "Union Ad", "Video Ads", "Search Engine"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        magicType: {
                            show: !0,
                            type: ["pie", "funnel"],
                            option: {
                                funnel: {
                                    x: "25%",
                                    width: "50%",
                                    funnelAlign: "center",
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                series: [{
                    name: "Access to the resource",
                    type: "pie",
                    radius: ["35%", "55%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: !0
                            },
                            labelLine: {
                                show: !0
                            }
                        },
                        emphasis: {
                            label: {
                                show: !0,
                                position: "center",
                                textStyle: {
                                    fontSize: "14",
                                    fontWeight: "normal"
                                }
                            }
                        }
                    },
                    data: [{
                        value: 335,
                        name: "Direct Access"
                    }, {
                        value: 310,
                        name: "E-mail Marketing"
                    }, {
                        value: 234,
                        name: "Union Ad"
                    }, {
                        value: 135,
                        name: "Video Ads"
                    }, {
                        value: 1548,
                        name: "Search Engine"
                    }]
                }]
            })
        }
        if ($("#echart_pie").length) {
            var j = echarts.init(document.getElementById("echart_pie"), a);
            j.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x: "center",
                    y: "bottom",
                    data: ["Direct Access", "E-mail Marketing", "Union Ad", "Video Ads", "Search Engine"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        magicType: {
                            show: !0,
                            type: ["pie", "funnel"],
                            option: {
                                funnel: {
                                    x: "25%",
                                    width: "50%",
                                    funnelAlign: "left",
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                calculable: !0,
                series: [{
                    name: "访问来源",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "48%"],
                    data: [{
                        value: 335,
                        name: "Direct Access"
                    }, {
                        value: 310,
                        name: "E-mail Marketing"
                    }, {
                        value: 234,
                        name: "Union Ad"
                    }, {
                        value: 135,
                        name: "Video Ads"
                    }, {
                        value: 1548,
                        name: "Search Engine"
                    }]
                }]
            });
            var k = {
                    normal: {
                        label: {
                            show: !1
                        },
                        labelLine: {
                            show: !1
                        }
                    }
                },
                l = {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        label: {
                            show: !1
                        },
                        labelLine: {
                            show: !1
                        }
                    },
                    emphasis: {
                        color: "rgba(0,0,0,0)"
                    }
                }
        }
        if ($("#echart_mini_pie").length) {
            var m = echarts.init(document.getElementById("echart_mini_pie"), a);
            m.setOption({
                title: {
                    text: "Chart #2",
                    subtext: "From ExcelHome",
                    sublink: "http://e.weibo.com/1341556070/AhQXtjbqh",
                    x: "center",
                    y: "center",
                    itemGap: 20,
                    textStyle: {
                        color: "rgba(30,144,255,0.8)",
                        fontFamily: "微软雅黑",
                        fontSize: 35,
                        fontWeight: "bolder"
                    }
                },
                tooltip: {
                    show: !0,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    x: 170,
                    y: 45,
                    itemGap: 12,
                    data: ["68%Something #1", "29%Something #2", "3%Something #3"]
                },
                toolbox: {
                    show: !0,
                    feature: {
                        mark: {
                            show: !0
                        },
                        dataView: {
                            show: !0,
                            title: "Text View",
                            lang: ["Text View", "Close", "Refresh"],
                            readOnly: !1
                        },
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                series: [{
                    name: "1",
                    type: "pie",
                    clockWise: !1,
                    radius: [105, 130],
                    itemStyle: k,
                    data: [{
                        value: 68,
                        name: "68%Something #1"
                    }, {
                        value: 32,
                        name: "invisible",
                        itemStyle: l
                    }]
                }, {
                    name: "2",
                    type: "pie",
                    clockWise: !1,
                    radius: [80, 105],
                    itemStyle: k,
                    data: [{
                        value: 29,
                        name: "29%Something #2"
                    }, {
                        value: 71,
                        name: "invisible",
                        itemStyle: l
                    }]
                }, {
                    name: "3",
                    type: "pie",
                    clockWise: !1,
                    radius: [25, 80],
                    itemStyle: k,
                    data: [{
                        value: 3,
                        name: "3%Something #3"
                    }, {
                        value: 97,
                        name: "invisible",
                        itemStyle: l
                    }]
                }]
            })
        }
        if ($("#echart_world_map").length) {
            var n = echarts.init(document.getElementById("echart_world_map"), a);
            n.setOption({
                title: {
                    text: "World Population (2010)",
                    subtext: "from United Nations, Total population, both sexes combined, as of 1 July (thousands)",
                    x: "center",
                    y: "top"
                },
                tooltip: {
                    trigger: "item",
                    formatter: function(a) {
                        var b = (a.value + "").split(".");
                        return b = b[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + "." + b[1], a.seriesName + "<br/>" + a.name + " : " + b
                    }
                },
                toolbox: {
                    show: !0,
                    orient: "vertical",
                    x: "right",
                    y: "center",
                    feature: {
                        mark: {
                            show: !0
                        },
                        dataView: {
                            show: !0,
                            title: "Text View",
                            lang: ["Text View", "Close", "Refresh"],
                            readOnly: !1
                        },
                        restore: {
                            show: !0,
                            title: "Restore"
                        },
                        saveAsImage: {
                            show: !0,
                            title: "Save Image"
                        }
                    }
                },
                dataRange: {
                    min: 0,
                    max: 1e6,
                    text: ["High", "Low"],
                    realtime: !1,
                    calculable: !0,
                    color: ["#087E65", "#26B99A", "#CBEAE3"]
                },
                series: [{
                    name: "World Population (2010)",
                    type: "map",
                    mapType: "world",
                    roam: !1,
                    mapLocation: {
                        y: 60
                    },
                    itemStyle: {
                        emphasis: {
                            label: {
                                show: !0
                            }
                        }
                    },
                    data: [{
                        name: "Afghanistan",
                        value: 28397.812
                    }, {
                        name: "Angola",
                        value: 19549.124
                    }, {
                        name: "Albania",
                        value: 3150.143
                    }, {
                        name: "United Arab Emirates",
                        value: 8441.537
                    }, {
                        name: "Argentina",
                        value: 40374.224
                    }, {
                        name: "Armenia",
                        value: 2963.496
                    }, {
                        name: "French Southern and Antarctic Lands",
                        value: 268.065
                    }, {
                        name: "Australia",
                        value: 22404.488
                    }, {
                        name: "Austria",
                        value: 8401.924
                    }, {
                        name: "Azerbaijan",
                        value: 9094.718
                    }, {
                        name: "Burundi",
                        value: 9232.753
                    }, {
                        name: "Belgium",
                        value: 10941.288
                    }, {
                        name: "Benin",
                        value: 9509.798
                    }, {
                        name: "Burkina Faso",
                        value: 15540.284
                    }, {
                        name: "Bangladesh",
                        value: 151125.475
                    }, {
                        name: "Bulgaria",
                        value: 7389.175
                    }, {
                        name: "The Bahamas",
                        value: 66402.316
                    }, {
                        name: "Bosnia and Herzegovina",
                        value: 3845.929
                    }, {
                        name: "Belarus",
                        value: 9491.07
                    }, {
                        name: "Belize",
                        value: 308.595
                    }, {
                        name: "Bermuda",
                        value: 64.951
                    }, {
                        name: "Bolivia",
                        value: 716.939
                    }, {
                        name: "Brazil",
                        value: 195210.154
                    }, {
                        name: "Brunei",
                        value: 27.223
                    }, {
                        name: "Bhutan",
                        value: 716.939
                    }, {
                        name: "Botswana",
                        value: 1969.341
                    }, {
                        name: "Central African Republic",
                        value: 4349.921
                    }, {
                        name: "Canada",
                        value: 34126.24
                    }, {
                        name: "Switzerland",
                        value: 7830.534
                    }, {
                        name: "Chile",
                        value: 17150.76
                    }, {
                        name: "China",
                        value: 1359821.465
                    }, {
                        name: "Ivory Coast",
                        value: 60508.978
                    }, {
                        name: "Cameroon",
                        value: 20624.343
                    }, {
                        name: "Democratic Republic of the Congo",
                        value: 62191.161
                    }, {
                        name: "Republic of the Congo",
                        value: 3573.024
                    }, {
                        name: "Colombia",
                        value: 46444.798
                    }, {
                        name: "Costa Rica",
                        value: 4669.685
                    }, {
                        name: "Cuba",
                        value: 11281.768
                    }, {
                        name: "Northern Cyprus",
                        value: 1.468
                    }, {
                        name: "Cyprus",
                        value: 1103.685
                    }, {
                        name: "Czech Republic",
                        value: 10553.701
                    }, {
                        name: "Germany",
                        value: 83017.404
                    }, {
                        name: "Djibouti",
                        value: 834.036
                    }, {
                        name: "Denmark",
                        value: 5550.959
                    }, {
                        name: "Dominican Republic",
                        value: 10016.797
                    }, {
                        name: "Algeria",
                        value: 37062.82
                    }, {
                        name: "Ecuador",
                        value: 15001.072
                    }, {
                        name: "Egypt",
                        value: 78075.705
                    }, {
                        name: "Eritrea",
                        value: 5741.159
                    }, {
                        name: "Spain",
                        value: 46182.038
                    }, {
                        name: "Estonia",
                        value: 1298.533
                    }, {
                        name: "Ethiopia",
                        value: 87095.281
                    }, {
                        name: "Finland",
                        value: 5367.693
                    }, {
                        name: "Fiji",
                        value: 860.559
                    }, {
                        name: "Falkland Islands",
                        value: 49.581
                    }, {
                        name: "France",
                        value: 63230.866
                    }, {
                        name: "Gabon",
                        value: 1556.222
                    }, {
                        name: "United Kingdom",
                        value: 62066.35
                    }, {
                        name: "Georgia",
                        value: 4388.674
                    }, {
                        name: "Ghana",
                        value: 24262.901
                    }, {
                        name: "Guinea",
                        value: 10876.033
                    }, {
                        name: "Gambia",
                        value: 1680.64
                    }, {
                        name: "Guinea Bissau",
                        value: 10876.033
                    }, {
                        name: "Equatorial Guinea",
                        value: 696.167
                    }, {
                        name: "Greece",
                        value: 11109.999
                    }, {
                        name: "Greenland",
                        value: 56.546
                    }, {
                        name: "Guatemala",
                        value: 14341.576
                    }, {
                        name: "French Guiana",
                        value: 231.169
                    }, {
                        name: "Guyana",
                        value: 786.126
                    }, {
                        name: "Honduras",
                        value: 7621.204
                    }, {
                        name: "Croatia",
                        value: 4338.027
                    }, {
                        name: "Haiti",
                        value: 9896.4
                    }, {
                        name: "Hungary",
                        value: 10014.633
                    }, {
                        name: "Indonesia",
                        value: 240676.485
                    }, {
                        name: "India",
                        value: 1205624.648
                    }, {
                        name: "Ireland",
                        value: 4467.561
                    }, {
                        name: "Iran",
                        value: 240676.485
                    }, {
                        name: "Iraq",
                        value: 30962.38
                    }, {
                        name: "Iceland",
                        value: 318.042
                    }, {
                        name: "Israel",
                        value: 7420.368
                    }, {
                        name: "Italy",
                        value: 60508.978
                    }, {
                        name: "Jamaica",
                        value: 2741.485
                    }, {
                        name: "Jordan",
                        value: 6454.554
                    }, {
                        name: "Japan",
                        value: 127352.833
                    }, {
                        name: "Kazakhstan",
                        value: 15921.127
                    }, {
                        name: "Kenya",
                        value: 40909.194
                    }, {
                        name: "Kyrgyzstan",
                        value: 5334.223
                    }, {
                        name: "Cambodia",
                        value: 14364.931
                    }, {
                        name: "South Korea",
                        value: 51452.352
                    }, {
                        name: "Kosovo",
                        value: 97.743
                    }, {
                        name: "Kuwait",
                        value: 2991.58
                    }, {
                        name: "Laos",
                        value: 6395.713
                    }, {
                        name: "Lebanon",
                        value: 4341.092
                    }, {
                        name: "Liberia",
                        value: 3957.99
                    }, {
                        name: "Libya",
                        value: 6040.612
                    }, {
                        name: "Sri Lanka",
                        value: 20758.779
                    }, {
                        name: "Lesotho",
                        value: 2008.921
                    }, {
                        name: "Lithuania",
                        value: 3068.457
                    }, {
                        name: "Luxembourg",
                        value: 507.885
                    }, {
                        name: "Latvia",
                        value: 2090.519
                    }, {
                        name: "Morocco",
                        value: 31642.36
                    }, {
                        name: "Moldova",
                        value: 103.619
                    }, {
                        name: "Madagascar",
                        value: 21079.532
                    }, {
                        name: "Mexico",
                        value: 117886.404
                    }, {
                        name: "Macedonia",
                        value: 507.885
                    }, {
                        name: "Mali",
                        value: 13985.961
                    }, {
                        name: "Myanmar",
                        value: 51931.231
                    }, {
                        name: "Montenegro",
                        value: 620.078
                    }, {
                        name: "Mongolia",
                        value: 2712.738
                    }, {
                        name: "Mozambique",
                        value: 23967.265
                    }, {
                        name: "Mauritania",
                        value: 3609.42
                    }, {
                        name: "Malawi",
                        value: 15013.694
                    }, {
                        name: "Malaysia",
                        value: 28275.835
                    }, {
                        name: "Namibia",
                        value: 2178.967
                    }, {
                        name: "New Caledonia",
                        value: 246.379
                    }, {
                        name: "Niger",
                        value: 15893.746
                    }, {
                        name: "Nigeria",
                        value: 159707.78
                    }, {
                        name: "Nicaragua",
                        value: 5822.209
                    }, {
                        name: "Netherlands",
                        value: 16615.243
                    }, {
                        name: "Norway",
                        value: 4891.251
                    }, {
                        name: "Nepal",
                        value: 26846.016
                    }, {
                        name: "New Zealand",
                        value: 4368.136
                    }, {
                        name: "Oman",
                        value: 2802.768
                    }, {
                        name: "Pakistan",
                        value: 173149.306
                    }, {
                        name: "Panama",
                        value: 3678.128
                    }, {
                        name: "Peru",
                        value: 29262.83
                    }, {
                        name: "Philippines",
                        value: 93444.322
                    }, {
                        name: "Papua New Guinea",
                        value: 6858.945
                    }, {
                        name: "Poland",
                        value: 38198.754
                    }, {
                        name: "Puerto Rico",
                        value: 3709.671
                    }, {
                        name: "North Korea",
                        value: 1.468
                    }, {
                        name: "Portugal",
                        value: 10589.792
                    }, {
                        name: "Paraguay",
                        value: 6459.721
                    }, {
                        name: "Qatar",
                        value: 1749.713
                    }, {
                        name: "Romania",
                        value: 21861.476
                    }, {
                        name: "Russia",
                        value: 21861.476
                    }, {
                        name: "Rwanda",
                        value: 10836.732
                    }, {
                        name: "Western Sahara",
                        value: 514.648
                    }, {
                        name: "Saudi Arabia",
                        value: 27258.387
                    }, {
                        name: "Sudan",
                        value: 35652.002
                    }, {
                        name: "South Sudan",
                        value: 9940.929
                    }, {
                        name: "Senegal",
                        value: 12950.564
                    }, {
                        name: "Solomon Islands",
                        value: 526.447
                    }, {
                        name: "Sierra Leone",
                        value: 5751.976
                    }, {
                        name: "El Salvador",
                        value: 6218.195
                    }, {
                        name: "Somaliland",
                        value: 9636.173
                    }, {
                        name: "Somalia",
                        value: 9636.173
                    }, {
                        name: "Republic of Serbia",
                        value: 3573.024
                    }, {
                        name: "Suriname",
                        value: 524.96
                    }, {
                        name: "Slovakia",
                        value: 5433.437
                    }, {
                        name: "Slovenia",
                        value: 2054.232
                    }, {
                        name: "Sweden",
                        value: 9382.297
                    }, {
                        name: "Swaziland",
                        value: 1193.148
                    }, {
                        name: "Syria",
                        value: 7830.534
                    }, {
                        name: "Chad",
                        value: 11720.781
                    }, {
                        name: "Togo",
                        value: 6306.014
                    }, {
                        name: "Thailand",
                        value: 66402.316
                    }, {
                        name: "Tajikistan",
                        value: 7627.326
                    }, {
                        name: "Turkmenistan",
                        value: 5041.995
                    }, {
                        name: "East Timor",
                        value: 10016.797
                    }, {
                        name: "Trinidad and Tobago",
                        value: 1328.095
                    }, {
                        name: "Tunisia",
                        value: 10631.83
                    }, {
                        name: "Turkey",
                        value: 72137.546
                    }, {
                        name: "United Republic of Tanzania",
                        value: 44973.33
                    }, {
                        name: "Uganda",
                        value: 33987.213
                    }, {
                        name: "Ukraine",
                        value: 46050.22
                    }, {
                        name: "Uruguay",
                        value: 3371.982
                    }, {
                        name: "United States of America",
                        value: 312247.116
                    }, {
                        name: "Uzbekistan",
                        value: 27769.27
                    }, {
                        name: "Venezuela",
                        value: 236.299
                    }, {
                        name: "Vietnam",
                        value: 89047.397
                    }, {
                        name: "Vanuatu",
                        value: 236.299
                    }, {
                        name: "West Bank",
                        value: 13.565
                    }, {
                        name: "Yemen",
                        value: 22763.008
                    }, {
                        name: "South Africa",
                        value: 51452.352
                    }, {
                        name: "Zambia",
                        value: 13216.985
                    }, {
                        name: "Zimbabwe",
                        value: 13076.978
                    }]
                }]
            })
        }
    }
}! function(a, b) {
    var c = function(a, b, c) {
        var d;
        return function() {
            function h() {
                c || a.apply(f, g), d = null
            }
            var f = this,
                g = arguments;
            d ? clearTimeout(d) : c && a.apply(f, g), d = setTimeout(h, b || 100)
        }
    };
    jQuery.fn[b] = function(a) {
        return a ? this.bind("resize", c(a)) : this.trigger(b)
    }
}(jQuery, "smartresize");
var CURRENT_URL = window.location.href.split("#")[0].split("?")[0],
    $BODY = $("body"),
    $MENU_TOGGLE = $("#menu_toggle"),
    $SIDEBAR_MENU = $("#sidebar-menu"),
    $SIDEBAR_FOOTER = $(".sidebar-footer"),
    $LEFT_COL = $(".left_col"),
    $RIGHT_COL = $(".right_col"),
    $NAV_MENU = $(".nav_menu"),
    $FOOTER = $("footer"),
    randNum = function() {
        return Math.floor(21 * Math.random()) + 20
    };
$(document).ready(function() {
    $(".collapse-link").on("click", function() {
        var a = $(this).closest(".x_panel"),
            b = $(this).find("i"),
            c = a.find(".x_content");
        a.attr("style") ? c.slideToggle(200, function() {
            a.removeAttr("style")
        }) : (c.slideToggle(200), a.css("height", "auto")), b.toggleClass("fa-chevron-up fa-chevron-down")
    }), $(".close-link").click(function() {
        var a = $(this).closest(".x_panel");
        a.remove()
    })
}), $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: "body"
    })
}), $(".progress .progress-bar")[0] && $(".progress .progress-bar").progressbar(), $(document).ready(function() {
    if ($(".js-switch")[0]) {
        var a = Array.prototype.slice.call(document.querySelectorAll(".js-switch"));
        a.forEach(function(a) {
            new Switchery(a, {
                color: "#26B99A"
            })
        })
    }
}), $(document).ready(function() {
    $("input.flat")[0] && $(document).ready(function() {
        $("input.flat").iCheck({
            checkboxClass: "icheckbox_flat-green",
            radioClass: "iradio_flat-green"
        })
    })
}), $("table input").on("ifChecked", function() {
    checkState = "", $(this).parent().parent().parent().addClass("selected"), countChecked()
}), $("table input").on("ifUnchecked", function() {
    checkState = "", $(this).parent().parent().parent().removeClass("selected"), countChecked()
});
var checkState = "";
$(".bulk_action input").on("ifChecked", function() {
    checkState = "", $(this).parent().parent().parent().addClass("selected"), countChecked()
}), $(".bulk_action input").on("ifUnchecked", function() {
    checkState = "", $(this).parent().parent().parent().removeClass("selected"), countChecked()
}), $(".bulk_action input#check-all").on("ifChecked", function() {
    checkState = "all", countChecked()
}), $(".bulk_action input#check-all").on("ifUnchecked", function() {
    checkState = "none", countChecked()
}), $(document).ready(function() {
    $(".expand").on("click", function() {
        $(this).next().slideToggle(200), $expand = $(this).find(">:first-child"), "+" == $expand.text() ? $expand.text("-") : $expand.text("+")
    })
}), "undefined" != typeof NProgress && ($(document).ready(function() {
    NProgress.start()
}), $(window).load(function() {
    NProgress.done()
}));
var originalLeave = $.fn.popover.Constructor.prototype.leave;
$.fn.popover.Constructor.prototype.leave = function(a) {
    var c, d, b = a instanceof this.constructor ? a : $(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    originalLeave.call(this, a), a.currentTarget && (c = $(a.currentTarget).siblings(".popover"), d = b.timeout, c.one("mouseenter", function() {
        clearTimeout(d), c.one("mouseleave", function() {
            $.fn.popover.Constructor.prototype.leave.call(b, b)
        })
    }))
}, $("body").popover({
    selector: "[data-popover]",
    trigger: "click hover",
    delay: {
        show: 50,
        hide: 400
    }
}), $(document).ready(function() {
    init_sparklines(), init_flot_chart(), init_sidebar(), init_wysiwyg(), init_InputMask(), init_JQVmap(), init_cropper(), init_knob(), init_IonRangeSlider(), init_ColorPicker(), init_TagsInput(), init_parsley(), init_daterangepicker(), init_daterangepicker_right(), init_daterangepicker_single_call(), init_daterangepicker_reservation(), init_SmartWizard(), init_EasyPieChart(), init_charts(), init_echarts(), init_morris_charts(), init_skycons(), init_select2(), init_validator(), init_DataTables(), init_chart_doughnut(), init_gauge(), init_PNotify(), init_starrr(), init_calendar(), init_compose(), init_CustomNotification(), init_autosize(), init_autocomplete()
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
         trigger : 'hover'
    });
});    
