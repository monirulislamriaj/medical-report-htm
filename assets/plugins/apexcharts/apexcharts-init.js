(function ($) {
    // Chart-1
    const urinaryTotalProteinAll = document.getElementById(
        "urinary-total-proteinAll"
    );
    const urinaryTotalProtein1 = document.getElementById(
        "urinary-total-protein1"
    );
    const urinaryTotalProtein2 = document.getElementById(
        "urinary-total-protein2"
    );
    const urinaryTotalProtein3 = document.getElementById(
        "urinary-total-protein3"
    );

    var y2019 = [1, 5, 3]; 
    var y2020 = [4, 2, 6];
    var y2021 = [3, 5, 1];

    var totalY2019 = y2019.reduce(function (a, b) {
        return a + b; // 9
    }, 0); 
    var totalY2020 = y2020.reduce(function (a, b) {
        return a + b; // 14
    }, 0);
    var totalY2021 = y2021.reduce(function (a, b) {
        return a + b; // 9
    }, 0);

    var yAll = [totalY2019, totalY2020, totalY2021];

    var options = {
        series: [
            {
                name: "24hrs Urinary Total Protein",
                data: yAll,
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: "category",
            categories: ["2019", "2020", "2021"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " gm/24hrs";
                },
            },
        },
    };
    const chart = new ApexCharts(
        document.querySelector("#chart-timeline"),
        options
    );

    urinaryTotalProteinAll.addEventListener("click", function () {
        chart.updateOptions({
            series: [
                {
                    name: "24hrs Urinary Total Protein",
                    data: yAll,
                },
            ],
            xaxis: {
                categories: ["2019", "2020", "2021"],
            },
        });
    });
    urinaryTotalProtein1.addEventListener("click", function () {
        chart.updateOptions({
            series: [
                {
                    name: "aaa Urinary Total Protein",
                    data: y2019,
                },
            ],
            xaxis: {
                categories: ["Jan", "02 Dec"],
            },
        });
    });
    urinaryTotalProtein2.addEventListener("click", function () {
        chart.updateOptions({
            series: [
                {
                    // name: 'Sales',
                    data: y2020,
                },
            ],
            xaxis: {
                categories: ["06 Feb", "02 Mar"],
            },
        });
    });
    urinaryTotalProtein3.addEventListener("click", function () {
        chart.updateOptions({
            series: [
                {
                    data: y2021,
                },
            ],
            xaxis: {
                categories: [
                    "Jan",
                    " Feb",
                    " Mar",
                    "Apr",
                    " May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    " Dec",
                ],
            },
        });
    });
    chart.render();

    // Chart-2
    const haemoglobin1 = document.getElementById("haemoglobin-1");
    const haemoglobin2 = document.getElementById("haemoglobin-2");
    const haemoglobin3 = document.getElementById("haemoglobin-3");

    var options = {
        series: [
            {
                name: "Haemoglobin",
                data: [0, 13.8],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["Jan", "25 Aug"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " g/dl";
                },
            },
        },
    };
    const chart2 = new ApexCharts(
        document.querySelector("#chart-timeline-2"),
        options
    );

    haemoglobin1.addEventListener("click", function () {
        chart2.updateOptions({
            series: [
                {
                    name: "Haemoglobin",
                    data: [0, 13.8],
                },
            ],
        });
    });
    haemoglobin2.addEventListener("click", function () {
        chart2.updateOptions({
            series: [
                {
                    name: "Haemoglobin",
                    data: [14.1, 13.9, 13.5, 12.9],
                },
            ],
            xaxis: {
                categories: ["24 Aug", "24 Sep", "15 Nov", "18 Dec"],
            },
        });
    });
    haemoglobin3.addEventListener("click", function () {
        chart2.updateOptions({
            series: [
                {
                    name: "Haemoglobin",
                    data: [14.2, 13.5],
                },
            ],
            xaxis: {
                categories: ["23 Feb", "25 Feb"],
            },
        });
    });
    chart2.render();

    // Chart-3
    const tsh1 = document.getElementById("tsh-1");
    const tsh2 = document.getElementById("tsh-2");

    var options = {
        series: [
            {
                name: "TSH",
                data: [0, 3.76],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["Jan", "20 Oct"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " IU/ml";
                },
            },
        },
    };
    const chart3 = new ApexCharts(
        document.querySelector("#chart-timeline-3"),
        options
    );

    tsh1.addEventListener("click", function () {
        chart3.updateOptions({
            series: [
                {
                    name: "TSH",
                    data: [0, 3.76],
                },
            ],
        });
    });
    tsh2.addEventListener("click", function () {
        chart3.updateOptions({
            series: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
        });
    });
    chart3.render();

    // Chart-4
    const urineProtein1 = document.getElementById("urinary-protein1");
    const urineProtein2 = document.getElementById("urinary-protein2");
    const urineProtein3 = document.getElementById("urinary-protein3");

    var options = {
        series: [
            {
                name: "Urine Protein",
                data: [0, 163.0],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["Jan", "02 Dec"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " g/dl";
                },
            },
        },
    };
    const chart4 = new ApexCharts(
        document.querySelector("#chart-timeline-4"),
        options
    );

    urineProtein1.addEventListener("click", function () {
        chart4.updateOptions({
            series: [
                {
                    data: [163.0],
                },
            ],
        });
    });
    urineProtein2.addEventListener("click", function () {
        chart4.updateOptions({
            series: [
                {
                    data: [240.1, 164.7, 210.5, 594.0, 45.0, 92.3],
                },
            ],
            xaxis: {
                categories: [
                    "6 Feb",
                    "2 Mar",
                    "24 Aug",
                    "25 Sep",
                    "15 Nov",
                    "18 Dec",
                ],
            },
        });
    });
    urineProtein3.addEventListener("click", function () {
        chart4.updateOptions({
            series: [
                {
                    data: [78.3],
                },
            ],
            xaxis: {
                categories: ["23 Feb"],
            },
        });
    });
    chart4.render();

    // Chart-5
    const serumCreatinine1 = document.getElementById("serum-creatinine-1");
    const serumCreatinine2 = document.getElementById("serum-creatinine-2");
    const serumCreatinine3 = document.getElementById("serum-creatinine-3");
    const serumCreatinine4 = document.getElementById("serum-creatinine-4");

    var options = {
        series: [
            {
                name: "Serum Creatinine",
                data: [176.8, 159.12],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["05 Nov", "29 Nov"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " mol/l";
                },
            },
        },
    };
    const chart5 = new ApexCharts(
        document.querySelector("#chart-timeline-5"),
        options
    );

    serumCreatinine1.addEventListener("click", function () {
        chart5.updateOptions({
            series: [
                {
                    data: [176.8, 156.12],
                },
            ],
        });
    });
    serumCreatinine2.addEventListener("click", function () {
        chart5.updateOptions({
            series: [
                {
                    data: [1.83, 1.79, 2.06],
                },
            ],
            xaxis: {
                categories: [" 20 Oct", "12 Nov", "28 Nov"],
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " mg/dl";
                    },
                },
            },
        });
    });
    serumCreatinine3.addEventListener("click", function () {
        chart5.updateOptions({
            series: [
                {
                    data: [
                        1.83, 1.8, 2.01, 187, 194.48, 2.0, 2.38, 2.11, 1.85,
                        1.52,
                    ],
                },
            ],
            xaxis: {
                categories: [
                    "05 Jan",
                    "05 Feb",
                    "02 Mar",
                    "23 May",
                    "16 Jul",
                    "03 Aug",
                    "25 Aug",
                    "25 Sep",
                    "15 Nov",
                    "18 Dec",
                ],
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " mg/dl";
                    },
                },
            },
        });
    });
    serumCreatinine4.addEventListener("click", function () {
        chart5.updateOptions({
            series: [
                {
                    data: [1.81, 122.9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
            xaxis: {
                categories: [
                    "23 Feb",
                    "25 Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " mg/dl";
                    },
                },
            },
        });
    });
    chart5.render();

    // Chart-6
    const albumin1 = document.getElementById("albumin-1");
    const albumin2 = document.getElementById("albumin-2");

    var options = {
        series: [
            {
                name: "S. Albumin",
                data: [0, 3.4],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["Jan", "05 Jan"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " IU/ml";
                },
            },
        },
    };
    const chart6 = new ApexCharts(
        document.querySelector("#chart-timeline-6"),
        options
    );

    albumin1.addEventListener("click", function () {
        chart6.updateOptions({
            series: [
                {
                    data: [0, 3.4],
                },
            ],
        });
    });
    albumin2.addEventListener("click", function () {
        chart6.updateOptions({
            series: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
        });
    });
    chart6.render();

    // Chart-7
    const sodium1 = document.getElementById("sodium-1");
    const sodium2 = document.getElementById("sodium-2");

    var options = {
        series: [
            {
                name: "Sodium (Na)+",
                data: [143.5, 147, 147, 138, 148],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["16 July", "24 Aug", "25 Sep", "15 Nov", "18 Dec"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " mmol/l";
                },
            },
        },
    };
    const chart7 = new ApexCharts(
        document.querySelector("#chart-timeline-7"),
        options
    );

    sodium1.addEventListener("click", function () {
        chart7.updateOptions({
            series: [
                {
                    data: [143.5, 147, 147, 138, 148],
                },
            ],
        });
    });
    sodium2.addEventListener("click", function () {
        chart7.updateOptions({
            series: [
                {
                    data: [145, 141.05],
                },
            ],
            xaxis: {
                categories: ["23 Feb", "25 Feb"],
            },
        });
    });
    chart7.render();

    // Chart-8
    const potassium1 = document.getElementById("potassium-1");
    const potassium2 = document.getElementById("potassium-2");

    var options = {
        series: [
            {
                name: "Sodium (Na)+",
                data: [4.7, 4.2, 4.1, 4.6, 4.1],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["16 July", "24 Aug", "25 Sep", "15 Nov", "18 Dec"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " mmol/l";
                },
            },
        },
    };
    const chart8 = new ApexCharts(
        document.querySelector("#chart-timeline-8"),
        options
    );

    potassium1.addEventListener("click", function () {
        chart8.updateOptions({
            series: [
                {
                    data: [4.7, 4.2, 4.1, 4.6, 4.1],
                },
            ],
        });
    });
    potassium2.addEventListener("click", function () {
        chart8.updateOptions({
            series: [
                {
                    data: [5.1, 3.72],
                },
            ],
            xaxis: {
                categories: ["23 Feb", "25 Feb"],
            },
        });
    });
    chart8.render();

    // Chart-9
    const chloride1 = document.getElementById("chloride-1");
    const chloride2 = document.getElementById("chloride-2");

    var options = {
        series: [
            {
                name: "Sodium (Na)+",
                data: [103.4, 104, 106, 104, 109],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["16 July", "24 Aug", "25 Sep", "15 Nov", "18 Dec"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " mmol/l";
                },
            },
        },
    };
    const chart9 = new ApexCharts(
        document.querySelector("#chart-timeline-9"),
        options
    );

    chloride1.addEventListener("click", function () {
        chart9.updateOptions({
            series: [
                {
                    data: [103.4, 104, 106, 104, 109],
                },
            ],
        });
    });
    chloride2.addEventListener("click", function () {
        chart9.updateOptions({
            series: [
                {
                    data: [104, 111.23],
                },
            ],
            xaxis: {
                categories: ["23 Feb", "25 Feb"],
            },
        });
    });
    chart9.render();

    // Chart-10
    const co21 = document.getElementById("co2-1");
    const co22 = document.getElementById("co2-2");

    var options = {
        series: [
            {
                name: "Carbon Di-Oxide(Co2)",
                data: [26.1, 26, 27, 24, 27],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["16 July", "24 Aug", "25 Sep", "15 Nov", "18 Dec"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " mmol/l";
                },
            },
        },
    };
    const chart10 = new ApexCharts(
        document.querySelector("#chart-timeline-10"),
        options
    );

    co21.addEventListener("click", function () {
        chart10.updateOptions({
            series: [
                {
                    data: [26.1, 26, 27, 24, 27],
                },
            ],
        });
    });
    co22.addEventListener("click", function () {
        chart10.updateOptions({
            series: [
                {
                    data: [22, 24.12],
                },
            ],
            xaxis: {
                categories: ["23 Feb", "25 Feb"],
            },
        });
    });
    chart10.render();

    // Chart-11
    const serumUrea1 = document.getElementById("serum-urea1-1");
    const serumUrea2 = document.getElementById("serum-urea1-2");

    var options = {
        series: [
            {
                name: "Serum Urea",
                data: [39, 38],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["15 Nov", "18 Dec"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " mg/dl";
                },
            },
        },
    };
    const chart11 = new ApexCharts(
        document.querySelector("#chart-timeline-11"),
        options
    );

    serumUrea1.addEventListener("click", function () {
        chart11.updateOptions({
            series: [
                {
                    data: [39, 38],
                },
            ],
        });
    });
    serumUrea2.addEventListener("click", function () {
        chart11.updateOptions({
            series: [
                {
                    data: [0, 59],
                },
            ],
            xaxis: {
                categories: ["Jan", "23 Feb"],
            },
        });
    });
    chart11.render();

    // Chart-12
    const uricAcid1 = document.getElementById("uric-acid-1");
    const uricAcid2 = document.getElementById("uric-acid-2");

    var options = {
        series: [
            {
                name: "S. Uric Acid",
                data: [7.5, 4.8],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["15 Nov", "18 Dec"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " mg/dl";
                },
            },
        },
    };
    const chart12 = new ApexCharts(
        document.querySelector("#chart-timeline-12"),
        options
    );

    uricAcid1.addEventListener("click", function () {
        chart12.updateOptions({
            series: [
                {
                    data: [7.5, 4.8],
                },
            ],
        });
    });
    uricAcid2.addEventListener("click", function () {
        chart12.updateOptions({
            series: [
                {
                    data: [0, 8.6],
                },
            ],
            xaxis: {
                categories: ["Jan", "23 Feb"],
            },
        });
    });
    chart12.render();

    // Chart-13
    const proteinCreatinineRatio1 = document.getElementById(
        "protein-creatinine-ratio-1"
    );
    const proteinCreatinineRatio2 = document.getElementById(
        "protein-creatinine-ratio-2"
    );

    var options = {
        series: [
            {
                name: "Protein Creatinine Ratio",
                data: [0, 1.6],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["Jan", "16 July"],
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            show: true,
            borderColor: "#192573",
            row: {
                colors: ["#000524", "transparent"],
            },
        },

        yaxis: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " ";
                },
            },
        },
    };
    const chart13 = new ApexCharts(
        document.querySelector("#chart-timeline-13"),
        options
    );

    proteinCreatinineRatio1.addEventListener("click", function () {
        chart13.updateOptions({
            series: [
                {
                    data: [0, 1.6],
                },
            ],
        });
    });
    proteinCreatinineRatio2.addEventListener("click", function () {
        chart13.updateOptions({
            series: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
        });
    });
    chart13.render();
})(jQuery);
