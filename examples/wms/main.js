import proj4 from "proj4";
import Map from "ol/Map.js";
import View from "ol/View";
import { ImageWMS } from "ol/source";
import { Image as ImageLayer } from "ol/layer";
import { Projection } from "ol/proj";
import { register } from "ol/proj/proj4";
import "../assets/style.css";

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

new Map({
  layers: [
    new ImageLayer({
      extent,
      source: new ImageWMS({
        url: "https://sitn.ne.ch/services/wms",
        params: {
          LAYERS: "at034_autorisation_construire_pendant,at034_autorisation_construire_apres",
        },
        serverType: "mapserver",
      }),
    }),
  ],
  target: "map",
  view: new View({
    projection,
    center: [2550000, 1207000],
    zoom: 5,
  }),
});
