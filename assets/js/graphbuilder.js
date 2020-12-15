window.addEventListener('load', showGraph, false);

const params = [
    { legend: 'nouveaux cas', color: 'red', count: 1000 },
    { legend: 'morts', color: 'black', count: 100 },
    { legend: 'guéris', color: 'green', count: 500 }
];

function showGraph() {
    initGraph(document.querySelector('#chart'), params, true, "bilan quotidien");
}

function initGraph(myCanvas, params, withLegend = true, title = "") {
    let data = new Array();
    let legendes = new Array();
    let colors = new Array();
    params.forEach(element => {
        data.push(element.count);
        legendes.push(element.legend);
        colors.push(element.color);
    });
    let graph = new Chart(myCanvas, {
        type: "pie",
        params: {
            labels: withLegend ? legendes : [],
            paramssets: [{
                label: title,
                params: data,
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
                position: "left",
                labels: {
                    fontColor: "black"
                }
            }
        }
    });
}