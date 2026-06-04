const fs = require('fs');
const path = require('path');

const destDir = 'e:\\volddata\\InternShipLinksUs\\HKM-Landing-Test-2\\public\\assets\\festivals\\panihati';
const glimpsesDir = path.join(destDir, 'glimpses');

const posterSrc = "E:\\talentroanut -data\\hkm-images\\newlynew\\poster.jpeg";
const posterDest = path.join(destDir, 'poster.jpeg');

const glimpses = [
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163509_938.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163509_973.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163510_040.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163510_047.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163510_092.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163514_176.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163509_209.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163509_467.jpg.jpeg",
    "E:\\talentroanut -data\\hkm-images\\newlynew\\IMG_20260604_163509_839.jpg.jpeg"
];

// Copy poster
if (fs.existsSync(posterSrc)) {
    fs.copyFileSync(posterSrc, posterDest);
    console.log("Copied poster.");
} else {
    console.error("Poster not found:", posterSrc);
}

// Copy glimpses
glimpses.forEach((src) => {
    if (fs.existsSync(src)) {
        const fileName = path.basename(src);
        const dest = path.join(glimpsesDir, fileName);
        fs.copyFileSync(src, dest);
        console.log(`Copied ${fileName}`);
    } else {
        console.error("Glimpse not found:", src);
    }
});
