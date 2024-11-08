import proj4 from "proj4";
import Map from "ol/Map.js";
import View from "ol/View";
import { ImageWMS } from "ol/source";
import { Image as ImageLayer } from "ol/layer";
import { Projection } from "ol/proj";
import { register } from "ol/proj/proj4";
import { WMSGetFeatureInfo } from "ol/format.js";
import "./style.css";

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

const queriedLayers = [
  "at034_autorisation_construire_pendant",
  "at034_autorisation_construire_apres",
];

const view = new View({
  projection,
  center: [2550000, 1207000],
  zoom: 5,
});

const wmsSource = new ImageWMS({
  url: "https://sitn.ne.ch/services/wms",
  params: {
    LAYERS: queriedLayers.join(","),
  },
  serverType: "mapserver",
});

const map = new Map({
  layers: [
    new ImageLayer({
      extent,
      source: wmsSource,
    }),
  ],
  target: "map",
  view,
});

const resultElement = document.getElementById("result");
const bannedKeys = ["boundedBy", "geom", "instance_id"];

function showResults(gml) {
  let html = "<h4>Légende:</h4>";
  queriedLayers.forEach((layer) => {
    const gmlFormat = new WMSGetFeatureInfo({
      layers: layer,
    });
    const data = gmlFormat.readFeatures(gml);
    if (data.length > 0) {
      html += `<h5>${layer}</h5>`;
      data.forEach((feature) => {
        html += "<ul>";
        feature.getKeys().forEach((key) => {
          if (!bannedKeys.includes(key)) {
            html += `<li>${key}: ${feature.get(key)}</li>`;
          }
        });
        html += "</ul>";
      });
      html += "</hr>";
    }
  });
  resultElement.innerHTML = html;
}

function performRequest(coordinate) {
  const viewResolution = /** @type {number} */ (view.getResolution());
  const url = wmsSource.getFeatureInfoUrl(coordinate, viewResolution, crs, {
    INFO_FORMAT: "application/vnd.ogc.gml",
    FEATURE_COUNT: "10",
  });
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((gml) => {
      showResults(gml);
    });
}

map.on("singleclick", (e) => {
  performRequest(e.coordinate);
});
