const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const console = require("console");
const { attributes, total, format, metadata, base_name, all_layers, test } = require("./config.js");
const { exit } = require("process");

const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext("2d");

if (!process.env.PWD) {
    process.env.PWD = process.cwd();
  }
  
const buildDir = `${process.env.PWD}/build`;
const layersDir = `${process.env.PWD}/layers`;


async function executa() {
    var repeat = 0;
    // LOAD
    for (let a = 0; a < attributes.length; a++) {
        var tot = 0;
        console.log("Loading layer " + attributes[a].name + " (" + a + ")");
        for (let i = 0; i < attributes[a].items.length; i++) {
            if (attributes[a].items[i].name != "NONE") {
                const im = await loadImage(`${layersDir}/${attributes[a].name}/${attributes[a].items[i].name}.png`);
                const cv = createCanvas(format.width, format.height);
                const ct = cv.getContext("2d");
                ct.drawImage(im, 0, 0, format.width, format.height);
                fs.writeFileSync(`a.png`, cv.toBuffer("image/png"));
                attributes[a].items[i].img = await loadImage(`a.png`);
            }
            attributes[a].items[i].cnt = 0
            if (test) { attributes[a].items[i].freq = 100 / attributes[a].items.length };            
            tot += attributes[a].items[i].freq;
        }
        if (tot != 100) {
            console.log("ERROR SUM LAYER " + a + " " + tot);
        }
    }
    // RANDOM NUMBERS
    let tt = 0;
    for (let nn = 0; nn < 10000; nn++) { tt += Math.random(); }
    console.log(tt);
    // GENERATE
    var used = new Set();
    for (let n = 0; n < total; n++) {
        if (n % 100 == 0) console.log("Creating edition " + n + " - " + repeat);
        var md = metadata;
        md.attributes = [];
        var valid_layers = new Set([0,1,2,3,4,5,6,7,8,9,10,11,12]);
        var fit = -1;
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
                attributes[a].items[i].cnt += (100.0 / total)
                // GET LAYER RESTRICTION IF EXISTS
                if ("val" in attributes[a].items[i]) { valid_layers = new Set(attributes[a].items[i].val); }
                // GET ITEM RESTRICTION IF EXISTS AND NOT ALREADY ENFORCED
                if ((fit == -1) && ("fit" in attributes[a].items[i])) { fit = attributes[a].items[i].fit[0]; }
                // DRAW
                if (attributes[a].items[i].name != "NONE") { ctx.drawImage(attributes[a].items[i].img, 0, 0); }
                // PUSH ITEM METADATA
                md.attributes.push({ "trait_type": attributes[a].name, "value": attributes[a].items[i].name });
            } else {
                // PUSH ITEM METADATA - NO LAYER
                if (all_layers) { md.attributes.push({ "trait_type": attributes[a].name, "value": "NONE" }); }
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
        const id = JSON.stringify(md.attributes);
        if (used.has(id)) {
            n--;
            repeat++;
        }
        used.add(id);
    }
    // PRINT STATS
    for (let a = 0; a < attributes.length; a++) {
        for (let i = 0; i < attributes[a].items.length; i++) {
            console.log(attributes[a].name, attributes[a].items[i].name, attributes[a].items[i].freq, attributes[a].items[i].cnt)
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


// TODO -> V2
// Output primera majuscula la resta minuscules
//  0_Background
//      50_BLUE.png
//      50_RED.png
// build_nomcoleccio i layers_nomcoleccio