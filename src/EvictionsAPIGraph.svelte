<script>
    import { onMount } from "svelte";

    import { Nav, NavItem, Button } from "sveltestrap";

    let evictionsData = [];
    let evictionsKey = [];
    let evictionsTotal = [];
    let evictionsRustic = [];
    let evictionsHousehold = [];
    let evictionsBuildinglot = [];
    let evictionsOther = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("api/v1/evictions");
        if (res.ok) {
            console.log("Ok");
            evictionsData = await res.json();
            console.log(`We have received ${evictionsData.length} resources.`);
            evictionsData.forEach((data) => {
                evictionsKey.unshift(data.location + "-" + data.year);
                evictionsTotal.unshift(parseInt(data["total"], 10));
                evictionsRustic.unshift(parseInt(data["rustic"], 10));
                evictionsHousehold.unshift(parseInt(data["household"], 10));
                evictionsBuildinglot.unshift(parseInt(data["buildinglot"], 10));
                evictionsOther.unshift(parseInt(data["other"], 10));
            });
            console.log("totales: " + evictionsTotal);
            console.log("total totales: " + evictionsTotal.length);
        }


        new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: "myfirstchart",
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
                {
                    com: evictionsKey[0],
                    a: evictionsTotal[0],
                    b: evictionsRustic[0],
                    c: evictionsHousehold[0],
                    d: evictionsBuildinglot[0],
                    e: evictionsOther[0]
                },
                {
                    com: evictionsKey[1],
                    a: evictionsTotal[1],
                    b: evictionsRustic[1],
                    c: evictionsHousehold[1],
                    d: evictionsBuildinglot[1],
                    e: evictionsOther[1]
                },
                {
                    com: evictionsKey[2],
                    a: evictionsTotal[2],
                    b: evictionsRustic[2],
                    c: evictionsHousehold[2],
                    d: evictionsBuildinglot[2],
                    e: evictionsOther[2]
                },
                {
                    com: evictionsKey[3],
                    a: evictionsTotal[3],
                    b: evictionsRustic[3],
                    c: evictionsHousehold[3],
                    d: evictionsBuildinglot[3],
                    e: evictionsOther[3]
                },
                {
                    com: evictionsKey[4],
                    a: evictionsTotal[4],
                    b: evictionsRustic[4],
                    c: evictionsHousehold[4],
                    d: evictionsBuildinglot[4],
                    e: evictionsOther[4]
                },
                {
                    com: evictionsKey[5],
                    a: evictionsTotal[5],
                    b: evictionsRustic[5],
                    c: evictionsHousehold[5],
                    d: evictionsBuildinglot[5],
                    e: evictionsOther[5]
                },
                {
                    com: evictionsKey[6],
                    a: evictionsTotal[6],
                    b: evictionsRustic[6],
                    c: evictionsHousehold[6],
                    d: evictionsBuildinglot[6],
                    e: evictionsOther[6]
                },
                {
                    com: evictionsKey[7],
                    a: evictionsTotal[7],
                    b: evictionsRustic[7],
                    c: evictionsHousehold[7],
                    d: evictionsBuildinglot[7],
                    e: evictionsOther[7]
                },
                {
                    com: evictionsKey[8],
                    a: evictionsTotal[8],
                    b: evictionsRustic[8],
                    c: evictionsHousehold[8],
                    d: evictionsBuildinglot[8],
                    e: evictionsOther[8]
                },
                {
                    com: evictionsKey[9],
                    a: evictionsTotal[9],
                    b: evictionsRustic[9],
                    c: evictionsHousehold[9],
                    d: evictionsBuildinglot[9],
                    e: evictionsOther[9]
                },
                {
                    com: evictionsKey[10],
                    a: evictionsTotal[10],
                    b: evictionsRustic[10],
                    c: evictionsHousehold[10],
                    d: evictionsBuildinglot[10],
                    e: evictionsOther[10]
                },
                {
                    com: evictionsKey[11],
                    a: evictionsTotal[11],
                    b: evictionsRustic[11],
                    c: evictionsHousehold[11],
                    d: evictionsBuildinglot[11],
                    e: evictionsOther[11]
                },
                {
                    com: evictionsKey[12],
                    a: evictionsTotal[12],
                    b: evictionsRustic[12],
                    c: evictionsHousehold[12],
                    d: evictionsBuildinglot[12],
                    e: evictionsOther[12]
                },
                {
                    com: evictionsKey[13],
                    a: evictionsTotal[13],
                    b: evictionsRustic[13],
                    c: evictionsHousehold[13],
                    d: evictionsBuildinglot[13],
                    e: evictionsOther[13]
                },
                {
                    com: evictionsKey[14],
                    a: evictionsTotal[14],
                    b: evictionsRustic[14],
                    c: evictionsHousehold[14],
                    d: evictionsBuildinglot[14],
                    e: evictionsOther[14]
                },
                {
                    com: evictionsKey[15],
                    a: evictionsTotal[15],
                    b: evictionsRustic[15],
                    c: evictionsHousehold[15],
                    d: evictionsBuildinglot[15],
                    e: evictionsOther[15]
                },
                {
                    com: evictionsKey[16],
                    a: evictionsTotal[16],
                    b: evictionsRustic[16],
                    c: evictionsHousehold[16],
                    d: evictionsBuildinglot[16],
                    e: evictionsOther[16]
                },
                {
                    com: evictionsKey[17],
                    a: evictionsTotal[17],
                    b: evictionsRustic[17],
                    c: evictionsHousehold[17],
                    d: evictionsBuildinglot[17],
                    e: evictionsOther[17]
                },
                {
                    com: evictionsKey[18],
                    a: evictionsTotal[18],
                    b: evictionsRustic[18],
                    c: evictionsHousehold[18],
                    d: evictionsBuildinglot[18],
                    e: evictionsOther[18]
                },
                {
                    com: evictionsKey[19],
                    a: evictionsTotal[19],
                    b: evictionsRustic[19],
                    c: evictionsHousehold[19],
                    d: evictionsBuildinglot[19],
                    e: evictionsOther[19]
                },
                {
                    com: evictionsKey[20],
                    a: evictionsTotal[20],
                    b: evictionsRustic[20],
                    c: evictionsHousehold[20],
                    d: evictionsBuildinglot[20],
                    e: evictionsOther[20]
                },
                {
                    com: evictionsKey[21],
                    a: evictionsTotal[21],
                    b: evictionsRustic[21],
                    c: evictionsHousehold[21],
                    d: evictionsBuildinglot[21],
                    e: evictionsOther[21]
                },
                {
                    com: evictionsKey[22],
                    a: evictionsTotal[22],
                    b: evictionsRustic[22],
                    c: evictionsHousehold[22],
                    d: evictionsBuildinglot[22],
                    e: evictionsOther[22]
                },
                {
                    com: evictionsKey[23],
                    a: evictionsTotal[23],
                    b: evictionsRustic[23],
                    c: evictionsHousehold[23],
                    d: evictionsBuildinglot[23],
                    e: evictionsOther[23]
                },
                {
                    com: evictionsKey[24],
                    a: evictionsTotal[24],
                    b: evictionsRustic[24],
                    c: evictionsHousehold[24],
                    d: evictionsBuildinglot[24],
                    e: evictionsOther[24]
                },
                {
                    com: evictionsKey[25],
                    a: evictionsTotal[25],
                    b: evictionsRustic[25],
                    c: evictionsHousehold[25],
                    d: evictionsBuildinglot[25],
                    e: evictionsOther[25]
                },
                {
                    com: evictionsKey[26],
                    a: evictionsTotal[26],
                    b: evictionsRustic[26],
                    c: evictionsHousehold[26],
                    d: evictionsBuildinglot[26],
                    e: evictionsOther[26]
                },
                {
                    com: evictionsKey[27],
                    a: evictionsTotal[27],
                    b: evictionsRustic[27],
                    c: evictionsHousehold[27],
                    d: evictionsBuildinglot[27],
                    e: evictionsOther[27]
                },
                {
                    com: evictionsKey[28],
                    a: evictionsTotal[28],
                    b: evictionsRustic[28],
                    c: evictionsHousehold[28],
                    d: evictionsBuildinglot[28],
                    e: evictionsOther[28]
                },
                {
                    com: evictionsKey[29],
                    a: evictionsTotal[29],
                    b: evictionsRustic[29],
                    c: evictionsHousehold[29],
                    d: evictionsBuildinglot[29],
                    e: evictionsOther[29]
                },
                {
                    com: evictionsKey[30],
                    a: evictionsTotal[30],
                    b: evictionsRustic[30],
                    c: evictionsHousehold[30],
                    d: evictionsBuildinglot[30],
                    e: evictionsOther[30]
                },
                {
                    com: evictionsKey[31],
                    a: evictionsTotal[31],
                    b: evictionsRustic[31],
                    c: evictionsHousehold[31],
                    d: evictionsBuildinglot[31],
                    e: evictionsOther[31]
                },
                {
                    com: evictionsKey[32],
                    a: evictionsTotal[32],
                    b: evictionsRustic[32],
                    c: evictionsHousehold[32],
                    d: evictionsBuildinglot[32],
                    e: evictionsOther[32]
                },
                {
                    com: evictionsKey[33],
                    a: evictionsTotal[33],
                    b: evictionsRustic[33],
                    c: evictionsHousehold[33],
                    d: evictionsBuildinglot[33],
                    e: evictionsOther[33]
                },
                {
                    com: evictionsKey[34],
                    a: evictionsTotal[34],
                    b: evictionsRustic[34],
                    c: evictionsHousehold[34],
                    d: evictionsBuildinglot[34],
                    e: evictionsOther[34]
                },
                {
                    com: evictionsKey[35],
                    a: evictionsTotal[35],
                    b: evictionsRustic[35],
                    c: evictionsHousehold[35],
                    d: evictionsBuildinglot[35],
                    e: evictionsOther[35]
                },
                {
                    com: evictionsKey[36],
                    a: evictionsTotal[36],
                    b: evictionsRustic[36],
                    c: evictionsHousehold[36],
                    d: evictionsBuildinglot[36],
                    e: evictionsOther[36]
                },
                {
                    com: evictionsKey[37],
                    a: evictionsTotal[37],
                    b: evictionsRustic[37],
                    c: evictionsHousehold[37],
                    d: evictionsBuildinglot[37],
                    e: evictionsOther[37]
                },
                {
                    com: evictionsKey[38],
                    a: evictionsTotal[38],
                    b: evictionsRustic[38],
                    c: evictionsHousehold[38],
                    d: evictionsBuildinglot[38],
                    e: evictionsOther[38]
                },
                {
                    com: evictionsKey[39],
                    a: evictionsTotal[39],
                    b: evictionsRustic[39],
                    c: evictionsHousehold[39],
                    d: evictionsBuildinglot[39],
                    e: evictionsOther[39]
                },
                {
                    com: evictionsKey[40],
                    a: evictionsTotal[40],
                    b: evictionsRustic[40],
                    c: evictionsHousehold[40],
                    d: evictionsBuildinglot[40],
                    e: evictionsOther[40]
                },
                {
                    com: evictionsKey[41],
                    a: evictionsTotal[41],
                    b: evictionsRustic[41],
                    c: evictionsHousehold[41],
                    d: evictionsBuildinglot[41],
                    e: evictionsOther[41]
                },
                {
                    com: evictionsKey[42],
                    a: evictionsTotal[42],
                    b: evictionsRustic[42],
                    c: evictionsHousehold[42],
                    d: evictionsBuildinglot[42],
                    e: evictionsOther[42]
                },
                {
                    com: evictionsKey[43],
                    a: evictionsTotal[43],
                    b: evictionsRustic[43],
                    c: evictionsHousehold[43],
                    d: evictionsBuildinglot[43],
                    e: evictionsOther[43]
                },
                {
                    com: evictionsKey[44],
                    a: evictionsTotal[44],
                    b: evictionsRustic[44],
                    c: evictionsHousehold[44],
                    d: evictionsBuildinglot[44],
                    e: evictionsOther[44]
                },
                {
                    com: evictionsKey[45],
                    a: evictionsTotal[45],
                    b: evictionsRustic[45],
                    c: evictionsHousehold[45],
                    d: evictionsBuildinglot[45],
                    e: evictionsOther[45]
                },
                {
                    com: evictionsKey[46],
                    a: evictionsTotal[46],
                    b: evictionsRustic[46],
                    c: evictionsHousehold[46],
                    d: evictionsBuildinglot[46],
                    e: evictionsOther[46]
                },
                {
                    com: evictionsKey[47],
                    a: evictionsTotal[47],
                    b: evictionsRustic[47],
                    c: evictionsHousehold[47],
                    d: evictionsBuildinglot[47],
                    e: evictionsOther[47]
                },
                {
                    com: evictionsKey[48],
                    a: evictionsTotal[48],
                    b: evictionsRustic[48],
                    c: evictionsHousehold[48],
                    d: evictionsBuildinglot[48],
                    e: evictionsOther[48]
                },
                {
                    com: evictionsKey[49],
                    a: evictionsTotal[49],
                    b: evictionsRustic[49],
                    c: evictionsHousehold[49],
                    d: evictionsBuildinglot[49],
                    e: evictionsOther[49]
                },
                {
                    com: evictionsKey[50],
                    a: evictionsTotal[50],
                    b: evictionsRustic[50],
                    c: evictionsHousehold[50],
                    d: evictionsBuildinglot[50],
                    e: evictionsOther[50]
                },
                {
                    com: evictionsKey[51],
                    a: evictionsTotal[51],
                    b: evictionsRustic[51],
                    c: evictionsHousehold[51],
                    d: evictionsBuildinglot[51],
                    e: evictionsOther[51]
                },
                {
                    com: evictionsKey[52],
                    a: evictionsTotal[52],
                    b: evictionsRustic[52],
                    c: evictionsHousehold[52],
                    d: evictionsBuildinglot[52],
                    e: evictionsOther[52]
                },
                {
                    com: evictionsKey[53],
                    a: evictionsTotal[53],
                    b: evictionsRustic[53],
                    c: evictionsHousehold[53],
                    d: evictionsBuildinglot[53],
                    e: evictionsOther[53]
                },
                {
                    com: evictionsKey[54],
                    a: evictionsTotal[54],
                    b: evictionsRustic[54],
                    c: evictionsHousehold[54],
                    d: evictionsBuildinglot[54],
                    e: evictionsOther[54]
                },
                {
                    com: evictionsKey[55],
                    a: evictionsTotal[55],
                    b: evictionsRustic[55],
                    c: evictionsHousehold[55],
                    d: evictionsBuildinglot[55],
                    e: evictionsOther[55]
                },
                {
                    com: evictionsKey[56],
                    a: evictionsTotal[56],
                    b: evictionsRustic[56],
                    c: evictionsHousehold[56],
                    d: evictionsBuildinglot[56],
                    e: evictionsOther[56]
                },
                {
                    com: evictionsKey[57],
                    a: evictionsTotal[57],
                    b: evictionsRustic[57],
                    c: evictionsHousehold[57],
                    d: evictionsBuildinglot[57],
                    e: evictionsOther[57]
                },
                {
                    com: evictionsKey[58],
                    a: evictionsTotal[58],
                    b: evictionsRustic[58],
                    c: evictionsHousehold[58],
                    d: evictionsBuildinglot[58],
                    e: evictionsOther[58]
                },
                {
                    com: evictionsKey[59],
                    a: evictionsTotal[59],
                    b: evictionsRustic[59],
                    c: evictionsHousehold[59],
                    d: evictionsBuildinglot[59],
                    e: evictionsOther[59]
                },
                {
                    com: evictionsKey[60],
                    a: evictionsTotal[60],
                    b: evictionsRustic[60],
                    c: evictionsHousehold[60],
                    d: evictionsBuildinglot[60],
                    e: evictionsOther[60]
                },
                {
                    com: evictionsKey[61],
                    a: evictionsTotal[61],
                    b: evictionsRustic[61],
                    c: evictionsHousehold[61],
                    d: evictionsBuildinglot[61],
                    e: evictionsOther[61]
                },
                {
                    com: evictionsKey[62],
                    a: evictionsTotal[62],
                    b: evictionsRustic[62],
                    c: evictionsHousehold[62],
                    d: evictionsBuildinglot[62],
                    e: evictionsOther[62]
                },
                {
                    com: evictionsKey[63],
                    a: evictionsTotal[63],
                    b: evictionsRustic[63],
                    c: evictionsHousehold[63],
                    d: evictionsBuildinglot[63],
                    e: evictionsOther[63]
                },
                {
                    com: evictionsKey[64],
                    a: evictionsTotal[64],
                    b: evictionsRustic[64],
                    c: evictionsHousehold[64],
                    d: evictionsBuildinglot[64],
                    e: evictionsOther[64]
                },
                {
                    com: evictionsKey[65],
                    a: evictionsTotal[65],
                    b: evictionsRustic[65],
                    c: evictionsHousehold[65],
                    d: evictionsBuildinglot[65],
                    e: evictionsOther[65]
                },
                {
                    com: evictionsKey[66],
                    a: evictionsTotal[66],
                    b: evictionsRustic[66],
                    c: evictionsHousehold[66],
                    d: evictionsBuildinglot[66],
                    e: evictionsOther[66]
                },
                {
                    com: evictionsKey[67],
                    a: evictionsTotal[67],
                    b: evictionsRustic[67],
                    c: evictionsHousehold[67],
                    d: evictionsBuildinglot[67],
                    e: evictionsOther[67]
                },
                {
                    com: evictionsKey[68],
                    a: evictionsTotal[68],
                    b: evictionsRustic[68],
                    c: evictionsHousehold[68],
                    d: evictionsBuildinglot[68],
                    e: evictionsOther[68]
                },
                {
                    com: evictionsKey[69],
                    a: evictionsTotal[69],
                    b: evictionsRustic[69],
                    c: evictionsHousehold[69],
                    d: evictionsBuildinglot[69],
                    e: evictionsOther[69]
                },
                {
                    com: evictionsKey[70],
                    a: evictionsTotal[70],
                    b: evictionsRustic[70],
                    c: evictionsHousehold[70],
                    d: evictionsBuildinglot[70],
                    e: evictionsOther[70]
                },
                {
                    com: evictionsKey[71],
                    a: evictionsTotal[71],
                    b: evictionsRustic[71],
                    c: evictionsHousehold[71],
                    d: evictionsBuildinglot[71],
                    e: evictionsOther[71]
                },
                {
                    com: evictionsKey[72],
                    a: evictionsTotal[72],
                    b: evictionsRustic[72],
                    c: evictionsHousehold[72],
                    d: evictionsBuildinglot[72],
                    e: evictionsOther[72]
                },
                {
                    com: evictionsKey[73],
                    a: evictionsTotal[73],
                    b: evictionsRustic[73],
                    c: evictionsHousehold[73],
                    d: evictionsBuildinglot[73],
                    e: evictionsOther[73]
                },
                {
                    com: evictionsKey[74],
                    a: evictionsTotal[74],
                    b: evictionsRustic[74],
                    c: evictionsHousehold[74],
                    d: evictionsBuildinglot[74],
                    e: evictionsOther[74]
                },
                {
                    com: evictionsKey[75],
                    a: evictionsTotal[75],
                    b: evictionsRustic[75],
                    c: evictionsHousehold[75],
                    d: evictionsBuildinglot[75],
                    e: evictionsOther[75]
                },
                {
                    com: evictionsKey[76],
                    a: evictionsTotal[76],
                    b: evictionsRustic[76],
                    c: evictionsHousehold[76],
                    d: evictionsBuildinglot[76],
                    e: evictionsOther[76]
                },
                {
                    com: evictionsKey[77],
                    a: evictionsTotal[77],
                    b: evictionsRustic[77],
                    c: evictionsHousehold[77],
                    d: evictionsBuildinglot[77],
                    e: evictionsOther[77]
                },
                {
                    com: evictionsKey[78],
                    a: evictionsTotal[78],
                    b: evictionsRustic[78],
                    c: evictionsHousehold[78],
                    d: evictionsBuildinglot[78],
                    e: evictionsOther[78]
                },
                {
                    com: evictionsKey[79],
                    a: evictionsTotal[79],
                    b: evictionsRustic[79],
                    c: evictionsHousehold[79],
                    d: evictionsBuildinglot[79],
                    e: evictionsOther[79]
                },
                {
                    com: evictionsKey[80],
                    a: evictionsTotal[80],
                    b: evictionsRustic[80],
                    c: evictionsHousehold[80],
                    d: evictionsBuildinglot[80],
                    e: evictionsOther[80]
                },
                {
                    com: evictionsKey[81],
                    a: evictionsTotal[81],
                    b: evictionsRustic[81],
                    c: evictionsHousehold[81],
                    d: evictionsBuildinglot[81],
                    e: evictionsOther[81]
                },
                {
                    com: evictionsKey[82],
                    a: evictionsTotal[82],
                    b: evictionsRustic[82],
                    c: evictionsHousehold[82],
                    d: evictionsBuildinglot[82],
                    e: evictionsOther[82]
                },
                {
                    com: evictionsKey[83],
                    a: evictionsTotal[83],
                    b: evictionsRustic[83],
                    c: evictionsHousehold[83],
                    d: evictionsBuildinglot[83],
                    e: evictionsOther[83]
                },
                {
                    com: evictionsKey[84],
                    a: evictionsTotal[84],
                    b: evictionsRustic[84],
                    c: evictionsHousehold[84],
                    d: evictionsBuildinglot[84],
                    e: evictionsOther[84]
                },
                {
                    com: evictionsKey[85],
                    a: evictionsTotal[85],
                    b: evictionsRustic[85],
                    c: evictionsHousehold[85],
                    d: evictionsBuildinglot[85],
                    e: evictionsOther[85]
                },
                {
                    com: evictionsKey[86],
                    a: evictionsTotal[86],
                    b: evictionsRustic[86],
                    c: evictionsHousehold[86],
                    d: evictionsBuildinglot[86],
                    e: evictionsOther[86]
                },
                {
                    com: evictionsKey[87],
                    a: evictionsTotal[87],
                    b: evictionsRustic[87],
                    c: evictionsHousehold[87],
                    d: evictionsBuildinglot[87],
                    e: evictionsOther[87]
                },
                {
                    com: evictionsKey[88],
                    a: evictionsTotal[88],
                    b: evictionsRustic[88],
                    c: evictionsHousehold[88],
                    d: evictionsBuildinglot[88],
                    e: evictionsOther[88]
                },
                {
                    com: evictionsKey[89],
                    a: evictionsTotal[89],
                    b: evictionsRustic[89],
                    c: evictionsHousehold[89],
                    d: evictionsBuildinglot[89],
                    e: evictionsOther[89]
                },
                {
                    com: evictionsKey[90],
                    a: evictionsTotal[90],
                    b: evictionsRustic[90],
                    c: evictionsHousehold[90],
                    d: evictionsBuildinglot[90],
                    e: evictionsOther[90]
                },
                {
                    com: evictionsKey[91],
                    a: evictionsTotal[91],
                    b: evictionsRustic[91],
                    c: evictionsHousehold[91],
                    d: evictionsBuildinglot[91],
                    e: evictionsOther[91]
                },
                {
                    com: evictionsKey[92],
                    a: evictionsTotal[92],
                    b: evictionsRustic[92],
                    c: evictionsHousehold[92],
                    d: evictionsBuildinglot[92],
                    e: evictionsOther[92]
                },
                {
                    com: evictionsKey[93],
                    a: evictionsTotal[93],
                    b: evictionsRustic[93],
                    c: evictionsHousehold[93],
                    d: evictionsBuildinglot[93],
                    e: evictionsOther[93]
                },
                {
                    com: evictionsKey[94],
                    a: evictionsTotal[94],
                    b: evictionsRustic[94],
                    c: evictionsHousehold[94],
                    d: evictionsBuildinglot[94],
                    e: evictionsOther[94]
                }
            ],
            // The name of the data record attribute that contains x-values.
            xkey: "com",
            // A list of names of data record attributes that contain y-values.
            ykeys: ["a", "b", "c", "d", "e"],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ["Total Desahucios", "Desahucios en viviendas rústicas", 
                "Desahucios de viviendas", "Desahucios de solares",
                "Otros desahucios"],
            stacked: true,
        });

        /*Highcharts.chart("container", {         
            chart: {
                type:'area',
            },
            title: {
                text: "Desahucios en España",
            },

            subtitle: {
                text: "Fuente: Instituto Nacional de Estadística",
            },

            yAxis: {
                title: {
                    text: "Número de desahucios",
                },
            },

            xAxis: {
                title: {
                    text: "Comunidad-Año",
                },
                categories: evictionsKey,
            },

            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },

            series: [
                {
                    name: "Total desahucios",
                    data: evictionsTotal,
                },
                {
                    name: "Viviendas rústicas",
                    data: evictionsRustic,
                },
                {
                    name: "Viviendas",
                    data: evictionsHousehold,
                },
                {
                    name: "Solares",
                    data: evictionsBuildinglot,
                },
                {
                    name: "Otros",
                    data: evictionsOther,
                },
            ],

            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                layout: "horizontal",
                                align: "center",
                                verticalAlign: "bottom",
                            },
                        },
                    },
                ],
            },
        });*/
    }
</script>

<svelte:head>
<!--   <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script
        src="https://code.highcharts.com/modules/accessibility.js"
        on:load={getDataGraph}></script>--> 

    <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css"
    />
    <script
        src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script
        src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script
        src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"
        on:load={getDataGraph}></script>
</svelte:head>

<main>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/#/info"
                    ><Button style="margin: 0 5px 10px 50px;" color="primary"
                        >Volver</Button
                    ></a
                >
                <a href="/#/evictions"
                    ><Button style="margin: 0 5px 10px 50px;" color="dark"
                        >Ver datos</Button
                    ></a
                >
            </NavItem>
        </Nav>
    </div>
    <div>
        <figure class="highcharts-figure">
            <div id="container" />
            <p class="highcharts-description">
                Información acerca de la cantidad de desahucios que tienen lugar
                a lo largo del año en cada comunidad autónoma, separándolos por
                tipo.
            </p>
        </figure>
    </div>
    <div id="myfirstchart" style="height: 250px;" />
</main>

<style>
    .highcharts-description {
        text-align: center;
    }
</style>
