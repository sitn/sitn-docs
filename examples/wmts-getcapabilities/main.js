import proj4 from "proj4";
import Map from "ol/Map.js";
import View from "ol/View";
import TileLayer from "ol/layer/Tile.js";
import WMTS, { optionsFromCapabilities } from "ol/source/WMTS";
import { Projection } from "ol/proj";
import WMTSCapabilities from "ol/format/WMTSCapabilities";
import { register } from "ol/proj/proj4";
import "../assets/style.css";

const parser = new WMTSCapabilities();
const crs = "EPSG:2056";
const extent = [2420000, 1030000, 2900000, 1360000];
proj4.defs(
  crs,
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000" +
    " +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs",
);
register(proj4);
const projection = new Projection({
  code: crs,
  extent: extent,
});

fetch("https://sitn.ne.ch/services/wmts?SERVICE=WMTS&REQUEST=GetCapabilities")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    const result = parser.read(text);
    const options = optionsFromCapabilities(result, {
      layer: "ortho2022",
      matrixSet: crs,
    });

    const source = new WMTS(options);
    source.setAttributions(
      '<a target="new" href="https://www.ne.ch/sitn">SITN</a>',
    );

    new Map({
      layers: [
        new TileLayer({
          opacity: 1,
          source,
        }),
      ],
      target: "map",
      view: new View({
        projection,
        center: [2550000, 1207000],
        zoom: 5,
      }),
    });
  });
