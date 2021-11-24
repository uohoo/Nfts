const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const console = require("console");

const nom = 'Bolets'; // EDIT THIS!

const buildDir = `${process.cwd()}/${nom}/build`;
const layersDir = `${process.cwd()}/${nom}/layers`;
const { total, format, metadata, base_name, all_layers, test } = require(`./${nom}/config.js`);

function decodeNumbers(s) {
    let res = [];
    for (let c = 0; c < s.length; c++) { 
        const n = parseInt(s[c]);
        if (isNaN(n)) throw Error('NON-PARSEABLE NUM!!');
        res.push(n); 
    }
    return res;
}

function decodeFilename(s) {
    let aux = s.replace('.png','').split('_');
    let data = {name: aux[1], freq: parseFloat(aux[0]) / 10, cnt: 0};
    if ((aux.length > 2) && (aux[2] != undefined)) {
        data.fit = decodeNumbers(aux[2]); 
    }
    if (aux.length > 3) { 
        // NO CHECK UNDEFINED PERQUE FUNCIONI AMB CAP CAPA
        data.val = decodeNumbers(aux[3]); 
    } 
    return data;
}

function isNotNone(s) {
    return !(['none', 'None', 'NONE'].includes(s));
}


async function executa() {
    console.log('COLLECTION ' + nom);
    var attributes = [];
    var repeat = 0;
    const dirs = await fs.promises.readdir( layersDir );
    // LOAD
    for (let a = 0; a < dirs.length; a++) {
        let att = {name: decodeFilename(dirs[a]).name, items: []};
        var tot = 0;
        console.log("Loading layer " + att.name);
        const files = await fs.promises.readdir( layersDir + '/' + dirs[a] );
        for (let i = 0; i < files.length; i++) {
            let it = decodeFilename(files[i]);
            if (test) { it.freq = 100 / files.length };
            tot += it.freq;
            if (isNotNone(it.name)) {
                const im = await loadImage(`${layersDir}/${dirs[a]}/${files[i]}`);
                if ((im.width % format.width != 0) || (im.height % format.height != 0)) console.log('Dimensions not a divisor of original dimensions!')
                const cv = createCanvas(format.width, format.height);
                const ct = cv.getContext("2d");
                ct.drawImage(im, 0, 0, format.width, format.height);
                it.img = await loadImage(cv.toBuffer("image/png"));
            }
            att.items.push(it);
        }
        if (tot.toFixed(2) < 100) {
            let none_freq = 100 - tot;
            console.log("Adding None item for layer " + att.name + " (" + none_freq + "%)");
            att.items.push({name: 'None', freq: none_freq, cnt: 0});
        }
        attributes.push(att);
        if (tot.toFixed(2) > 100) console.log("ALERT!! Items freq for layer " + attributes[a].name + " bigger than 100, some items may be omitted!");
    }
    // RANDOM NUMBERS
    let tt = 0;
    for (let nn = 0; nn < 10000; nn++) { tt += Math.random(); }
    console.log(tt);
    // GENERATE
    fs.mkdirSync(buildDir, {recursive: true});
    var used = new Set();
    for (let n = 0; n < total; n++) {
        const canvas = createCanvas(format.width, format.height);
        const ctx = canvas.getContext("2d");
        var md = metadata;
        md.attributes = [];
        var valid_layers = new Set([0,1,2,3,4,5,6,7,8,9]);
        var fit = -1;
        let idx_attr = [];
        for (let a = 0; a < attributes.length; a++) {
            if (valid_layers.has(a)) {
                var i;
                // GET RANDOM ITEM
                do {
                    const r = Math.random() * 100;
                    i = 0; let t = 0.0;
                    for (; ; i++) { 
                        t += attributes[a].items[i].freq;
                        if (t >= r) break;
                    }
                }
                while ((fit != -1) && ("fit" in attributes[a].items[i]) && (!(new Set(attributes[a].items[i].fit)).has(fit)));
                // COUNT
                idx_attr.push(i);
                // GET LAYER RESTRICTION IF EXISTS
                if ("val" in attributes[a].items[i]) { valid_layers = new Set(attributes[a].items[i].val); }
                // GET ITEM RESTRICTION IF EXISTS AND NOT ALREADY ENFORCED
                if ((fit == -1) && ("fit" in attributes[a].items[i])) { fit = attributes[a].items[i].fit[0]; }
                // DRAW
                if (isNotNone(attributes[a].items[i].name)) { ctx.drawImage(attributes[a].items[i].img, 0, 0); }
                // PUSH ITEM METADATA
                md.attributes.push({ "trait_type": attributes[a].name, "value": attributes[a].items[i].name });
            } else {
                // PUSH ITEM METADATA - NO LAYER
                if (all_layers) { md.attributes.push({ "trait_type": attributes[a].name, "value": "None" }); }
                // COUNT
                idx_attr.push(i);
            }
        }
        // SAVE IMAGE
        fs.writeFileSync(`${buildDir}/${n}.png`, canvas.toBuffer("image/png"));
        // EDIT AND SAVE METADATA
        md.name = `${base_name} #${n}`;
        md.properties.files[0].uri = `${n}.png`;
        md.image = `${n}.png`;
        fs.writeFileSync(`${buildDir}/${n}.json`, JSON.stringify(md, null, 2));
        // NO REPEATS
        const id = JSON.stringify(idx_attr);
        if (used.has(id)) {
            n--;
            repeat++;
        } else {
            used.add(id);
            for (let a = 0; a < attributes.length; a++) attributes[a].items[idx_attr[a]].cnt += 100 / total;
            if (n % 100 == 0) console.log("Created edition " + n + " - " + repeat);
        }
    }
    // PRINT STATS
    for (let a = 0; a < attributes.length; a++) {
        // TODO: FALTA NORMALITZAR O TREURE ELS CNT DE MES DE LES REPETIDES
        for (let i = 0; i < attributes[a].items.length; i++) {
            console.log(attributes[a].name, attributes[a].items[i].name, attributes[a].items[i].freq.toFixed(1), attributes[a].items[i].cnt.toFixed(1))
        }
    }
}

(async () => {
    try {
        await executa();
        console.log('CREATED ', total, ' NFTs');
    } catch (e) {
        console.log(e);
    }
})();