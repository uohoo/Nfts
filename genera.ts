import  { createCanvas, loadImage, Image } from 'canvas';
import fs from 'fs';

const folder = 'irenedaold';
const px = 273;
const py = 531;

async function run() {
    // LOAD NEW IMAGES
    const newImgsDir = `${folder}/new/`;
    const newImgsNames = await fs.promises.readdir( newImgsDir );
    const newImgs: Image[] = [];
    await Promise.all(newImgsNames.map(async n => newImgs.push(await loadImage(newImgsDir + n))));

    // LOAD ORIGINAL IMAGES
    const orImgsDir = `${folder}/original/`;
    const orImgsNames = await fs.promises.readdir( orImgsDir );
    const orImgs: Image[] = [];
    await Promise.all(orImgsNames.map(async n => orImgs.push(await loadImage(orImgsDir + n))));

    // LOAD DOWN BANNER
    const banImg = await loadImage(`${folder}/banner.jpg`);

    // CANVAS
    const canvas = createCanvas(orImgs[0].width, orImgs[0].height);
    const ctx = canvas.getContext("2d");

    // CALC
    const lx = orImgs[0].width - px;
    const ly = orImgs[0].height - py;
    const by = orImgs[0].height - banImg.height;

    // CREA DIR SORTIDA
    const buildDir = `${folder}/build/`;
    fs.mkdirSync(buildDir, {recursive: true});

    // MOUNT
    orImgs.forEach((orIm, i) => {
        // ENGANXA NOVA RANDOM
        const rImg = newImgs[Math.floor(Math.random() * newImgs.length)];
        ctx.drawImage(rImg, 0, 0);

        // SOBREESCRIU NUM DE LA ORIGINAL
        ctx.drawImage(orImgs[i], px, py, lx, ly, px, py, lx, ly);

        // SOBREESCRIU BANNER
        ctx.drawImage(banImg, 0, by);

        // GUARDA
        fs.writeFileSync(`${buildDir}/${i}.png`, canvas.toBuffer("image/png"));

        // REPORT
        if (i % 100 === 0) console.log(i);
    })

    console.log('DONE');
}

(async () => await run())();