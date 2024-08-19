import proj4 from "proj4";
import Map from "ol/Map.js";
import View from "ol/View";
import TileLayer from "ol/layer/Tile.js";
import { WMTS } from "ol/source";
import { Projection } from "ol/proj";
import { register } from "ol/proj/proj4";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import "../assets/style.css";

const extent = [2420000, 1030000, 2900000, 1360000];
const crs = "EPSG:2056";
const resolutions = [
  250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125,
  0.015625, 0.0078125,
];

proj4.defs(
  crs,
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs",
);
register(proj4);

const projection = new Projection({
  code: crs,
  extent: extent,
});

const matrixIds = [];
for (let i = 0; i < resolutions.length; i += 1) {
  matrixIds.push(i);
}

const tileGrid = new WMTSTileGrid({
  origin: [extent[0], extent[3]],
  resolutions,
  matrixIds,
});

function getWmtsSource(layerName, format) {
  return new WMTS({
    layer: layerName,
    crossOrigin: "anonymous",
    attributions:
      '<a target="new" href="https://www.ne.ch/sitn">SITN</a>',
    projection,
    url: `https://sitn.ne.ch/mapproxy95/wmts/1.0.0/{layer}/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.${format}`,
    tileGrid,
    matrixSet: "EPSG2056",
    style: "default",
    requestEncoding: "REST",
  });
}

const ortho2022 = new TileLayer({ source: getWmtsSource("ortho2022", "jpeg") });

new Map({
  target: "map",
  layers: [ortho2022],
  view: new View({
    projection: projection,
    center: [2550000, 1207000],
    zoom: 5,
    resolution: 1,
    resolutions: resolutions,
    constrainResolution: true,
  }),
});
