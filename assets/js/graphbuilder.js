window.addEventListener('load', showGraph, true);

const dataFromDB = [
    { legend: 'nouveaux cas', color: 'red', nbr: 800 },
    { legend: 'morts', color: 'black', nbr: 200 },
    { legend: 'guéris', color: 'green', nbr: 400 },
    { legend: 'en traitement', color: 'orange', nbr: 600 - 500 + 400 }
];
const provinceStat = {
    'antsiranana': [
        { legend: 'nouveaux cas', color: 'red', nbr: 800 },
        { legend: 'morts', color: 'black', nbr: 200 },
        { legend: 'guéris', color: 'green', nbr: 400 },
        { legend: 'en traitement', color: 'orange', nbr: 600 - 500 + 400 }
    ],
    'mahajanga': [
        { legend: 'nouveaux cas', color: 'red', nbr: 800 },
        { legend: 'morts', color: 'black', nbr: 200 },
        { legend: 'guéris', color: 'green', nbr: 400 },
        { legend: 'en traitement', color: 'orange', nbr: 600 - 500 + 400 }
    ],
    'antananarivo': [
        { legend: 'nouveaux cas', color: 'red', nbr: 800 },
        { legend: 'morts', color: 'black', nbr: 200 },
        { legend: 'guéris', color: 'green', nbr: 400 },
        { legend: 'en traitement', color: 'orange', nbr: 600 - 500 + 400 }
    ],
    'toamasina': [
        { legend: 'nouveaux cas', color: 'red', nbr: 800 },
        { legend: 'morts', color: 'black', nbr: 200 },
        { legend: 'guéris', color: 'green', nbr: 400 },
        { legend: 'en traitement', color: 'orange', nbr: 600 - 500 + 400 }
    ],
    'fianarantsoa': [
        { legend: 'nouveaux cas', color: 'red', nbr: 800 },
        { legend: 'morts', color: 'black', nbr: 200 },
        { legend: 'guéris', color: 'green', nbr: 400 },
        { legend: 'en traitement', color: 'orange', nbr: 600 - 500 + 400 }
    ],
    'toliara': [
        { legend: 'nouveaux cas', color: 'red', nbr: 800 },
        { legend: 'morts', color: 'black', nbr: 200 },
        { legend: 'guéris', color: 'green', nbr: 400 },
        { legend: 'en traitement', color: 'orange', nbr: 600 - 500 + 400 }
    ]
};

function showGraph() {
    const section_province = document.querySelector('#province_section');
    for (const province in provinceStat) {
        if (provinceStat.hasOwnProperty(province)) {
            const element = provinceStat[province];
            let canvas_for_province = document.createElement('canvas');
            canvas_for_province.className = 'col-md-4';
            section_province.appendChild(canvas_for_province);
            initGraph(canvas_for_province,
                element,
                true, province.toUpperCase(), 'pie')
        }
    }
    let now = new Date();
    initGraph(document.querySelector('#chart'), dataFromDB, true, "bilan du " + now.getDay() + "-" + now.getMonth() + "-" + now.getFullYear(), 'bar');
}

function initGraph(myCanvas, data_, withLegend = true, title = "", chart_type) {
    let count = new Array();
    let legends = new Array();
    let colors = new Array();
    data_.forEach(element => {
        count.push(element.nbr);
        legends.push(element.legend);
        colors.push(element.color);
    });
    let chrt = new Chart(myCanvas, {
        type: chart_type,
        data: {
            labels: withLegend ? legends : [],
            datasets: [{
                label: title,
                data: count,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: "#007bff",
                hoverBorderWidth: 3,
                hoverBorderColor: "rgb(18, 230, 245)"
            }]
        },
        options: {
            title: {
                display: true,
                text: title,
                fontSize: title == "" ? 0 : 30

            },
            legend: {
                position: "right",
                labels: {
                    fontColor: "white"
                }
            }
        }
    });
}