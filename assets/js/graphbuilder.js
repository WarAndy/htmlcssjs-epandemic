if(document.getElementById("graphNational")){
    let myCanvas = document.getElementById("graphNational").getContext('2d');
    getNationalResults(function(data){
        data = JSON.parse(data);
        initGraph(myCanvas, data.results, true, "Resultat national");
        initState(document.getElementById("nationState"), data.state);
    });
}
if(document.getElementById("graphProvince")){
    let myCanvas = document.getElementById("graphProvince");
    let province = myCanvas.parentNode.parentNode.parentNode.id ? myCanvas.parentNode.parentNode.parentNode.id : -3;
    myCanvas = myCanvas.getContext('2d');
    let data = {};
    data.id_province = province;
    getResultsFromProvince(data, function(data1){
        data1 = JSON.parse(data1);
        initGraph(myCanvas, data1.result ? data1.result : data1, data.id_province !== -3, data1.result ? data1.name_province : "");
        initState(document.getElementById("provinceState"), data1.state);
    });
}
if(document.getElementById("graphRegional")){

    let myCanvas = document.getElementById("graphRegional");
        let region = myCanvas.parentNode.parentNode.id ? myCanvas.parentNode.parentNode.id : -3;
        myCanvas = myCanvas.getContext('2d');
        let data = {};
        data.id_region = region;
        getResultsFromRegion(data, function(data1){
            data1 = JSON.parse(data1);
            initGraph(myCanvas, data1.result ? data1.result : data1, data.id_region !== -3, data1.result ? data1.name_region : "");
        });
}
if(document.getElementById("graphDistrict")){
    let myCanvas = document.getElementById("graphDistrict");
    let data = {};
    data.id_district =  myCanvas.parentNode.parentNode.id;
    myCanvas = myCanvas.getContext('2d');
    getResultsFromDistrict(data, function(data){
        data = JSON.parse(data);
        initGraph(myCanvas, data, data.id_province !== -3, data1.result ? data1.name_region : "");
    });
}
if(document.getElementById("graphCommune")){
    let myCanvas = document.getElementById("graphCommune");
    let data = {};
    data.id_commune =  myCanvas.parentNode.parentNode.id;
    myCanvas = myCanvas.getContext('2d');
    getResultsFromCommune(data, function(data){
        initGraph(myCanvas, JSON.parse(data), false);
    });
}

if(document.getElementById("province-result-group")){
    let canvasGroup = document.getElementById("province-result-group");
    let data = {};
    data.id_province = -1;
    getResultsFromProvince(data, function(data){
        data = JSON.parse(data);
        data.forEach(element=>{
            let canvasContainer = document.createElement("section");
            let myCanvas = document.createElement("canvas");
            let h3 = document.createElement("h3");
            h3.style.textAlign = "center";
            h3.style.marginBottom = 0;
            let a = document.createElement("a");
            canvasContainer.className = "col-md-4";
            a.href="http://localhost/election-presidentielle/resultat/show?province="+element.id_province;
            a.innerHTML = element.name_province;
            h3.appendChild(a);
            canvasContainer.appendChild(h3);
            canvasContainer.appendChild(myCanvas);
            canvasGroup.appendChild(canvasContainer);
            initGraph(myCanvas, element.result, false, element.title);
        });
    });
}
if(document.getElementById("region-result-group")){
    let canvasGroup = document.getElementById("region-result-group");
    let data = {};
    data.id_province = canvasGroup.parentNode.parentNode.parentNode.id;
    getResultsFromRegion(data, function(data){
        data = JSON.parse(data);
        data.forEach(element=>{
            let canvasContainer = document.createElement("section");
            let myCanvas = document.createElement("canvas");
            let h3 = document.createElement("h3");
            h3.style.textAlign = "center";
            h3.style.marginBottom = 0;
            let a = document.createElement("a");
            canvasContainer.className = "col-md-4";
            a.href="http://localhost/election-presidentielle/resultat/show?region="+element.id_region;
            a.innerHTML = element.name_region;
            h3.appendChild(a);
            canvasContainer.appendChild(h3);
            canvasContainer.appendChild(myCanvas);
            canvasGroup.appendChild(canvasContainer);
            initGraph(myCanvas, element.result, false, element.title);
        });
    });
}
if(document.getElementById("district-result-group")){
    let canvasGroup = document.getElementById("district-result-group");
    let data = {};
    data.id_region = canvasGroup.parentNode.parentNode.id;
    getResultsFromDistrict(data, function(data){
        data = JSON.parse(data);
        data.forEach(element=>{
            let canvasContainer = document.createElement("section");
            let myCanvas = document.createElement("canvas");
            let h3 = document.createElement("h3");
            h3.style.textAlign = "center";
            h3.style.marginBottom = 0;
            let a = document.createElement("a");
            canvasContainer.className = "col-md-4";
            a.href="http://localhost/election-presidentielle/resultat/show?district="+element.id_district;
            a.innerHTML = element.name_district;
            h3.appendChild(a);
            canvasContainer.appendChild(h3);
            canvasContainer.appendChild(myCanvas);
            canvasGroup.appendChild(canvasContainer);
            initGraph(myCanvas, element.result, false, element.title);
        });
    });
}
if(document.getElementById("commune-result-group")){
    let canvasGroup = document.getElementById("commune-result-group");
    let data = {};
    data.id_district = canvasGroup.parentNode.parentNode.id;
    getResultsFromCommune(data, function(data){
        data = JSON.parse(data);
        data.forEach(element=>{
            let canvasContainer = document.createElement("section");
            let myCanvas = document.createElement("canvas");
            let h3 = document.createElement("h3");
            h3.style.textAlign = "center";
            h3.style.marginBottom = 0;
            let a = document.createElement("a");
            canvasContainer.className = "col-md-4";
            a.href="http://localhost/election-presidentielle/resultat/show?commune="+element.id_commune;
            a.innerHTML = element.name_commune;
            h3.appendChild(a);
            canvasContainer.appendChild(h3);
            canvasContainer.appendChild(myCanvas);
            canvasGroup.appendChild(canvasContainer);
            initGraph(myCanvas, element.result, false, element.title);
        });
    });
}
if(document.getElementById("fokotany-result-group")){
    let canvasGroup = document.getElementById("fokotany-result-group");
    let data = {};
    data.id_commune = canvasGroup.parentNode.parentNode.id;
    getResultsFromFokotany(data, function(data){
        data = JSON.parse(data);
        data.forEach(element=>{
            let canvasContainer = document.createElement("section");
            let myCanvas = document.createElement("canvas");
            let h3 = document.createElement("h3");
            h3.style.textAlign = "center";
            h3.style.marginBottom = 0;
            let a = document.createElement("a");
            canvasContainer.className = "col-md-4";
            a.href="http://localhost/election-presidentielle/resultat/show?fokotany="+element.id_fokotany;
            a.innerHTML = element.name_fokotany;
            h3.appendChild(a);
            canvasContainer.appendChild(h3);
            canvasContainer.appendChild(myCanvas);
            canvasGroup.appendChild(canvasContainer);
            initGraph(myCanvas, element.result, false, element.title);
        });
    });
}
function initGraph(myCanvas, data, withLegend = true, title=""){
        let voies = new Array();
        let legendes = new Array();
        let colors = new Array();
        data.forEach(element => {
            voies.push(element.voiesTotal);
            legendes.push(element.firstname_candidat+" "+element.lastname_candidat);
            colors.push(element.color_candidat);
        });
        let graph = new Chart(myCanvas, {
            type:"pie",
            data:{
                labels:withLegend?legendes:[],
                datasets:[{
                    label:title,
                    data:voies,
                    backgroundColor:colors,
                    borderWidth:2,
                    borderColor:"#007bff",
                    hoverBorderWidth:3,
                    hoverBorderColor:"rgb(18, 230, 245)"
                }]
            },
            options:{
                title:{
                    display:true,
                    text:title,
                    fontSize:title == "" ? 0 : 30

                },
                legend:{
                    position:"left",
                    labels:{
                        fontColor:"black"
                    }
                }
            }
        });
}
function initState(element, state){
    let data = new Array();
    data.push(state.voixMortes);
    data.push(state.voixBlanches);
    data.push(state.voixInsignifiantes);
    let legendes = new Array();
    legendes.push("vato maty");
    legendes.push("vato fotsy");
    legendes.push("vato tsy manan-kery");
    let colors = new Array();
    colors.push("black");
    colors.push("rgb(146, 250, 253)");
    colors.push("rgb(108, 27, 116)");
   
    let graph = new Chart(element, {
        type:"pie",
        data:{
            labels:legendes,
            datasets:[{
                label:"sdg",
                data:data,
                backgroundColor:colors,
                borderWidth:2,
                borderColor:"#007bff",
                hoverBorderWidth:3,
                hoverBorderColor:"rgb(18, 230, 245)"
            }]
        },
        options:{
            title:{
                display:true,
                text:"Etat",
                fontSize:30
            },
            legend:{
                position:"left",
                labels:{
                    fontColor:"black"
                }
            }
        }
    });
}