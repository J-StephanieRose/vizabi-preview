let VIZABI_MODEL = {
  "state": {
    "time": {
      "startOrigin": "1993",
      "endOrigin": "2015",
      "value": "2014",
      "dim": "year",
      "delay": 700
    },
    "entities": {
      "dim": "municipality",
      "show": {}
    },
    "entities_colorlegend": {
      "dim": "municipality"
    },
    "entities_map_colorlegend": {
      "dim": "municipality"
    },
    "entities_tags": {
      "dim": "tag"
    },
    "marker": {
      "space": ["entities", "time"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_centroid": {
        "use": "property",
        "which": "map_id",
        "_important": true
      },
      "size": {
        "which": "population_20xx_12_31",
        "use": "indicator",
        "scaleType": "linear",
        "extent": [0, 0.95],
        "allow": {
          "scales": ["linear"]
        }
      },
      "color": {
        "use": "property",
        "which": "municipality",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend"]
      },
      "color_map": {
        "use": "property",
        "which": "municipality",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend"]
      }
    },
    "marker_allpossible": {
      "space": ["entities"],
      "label": {
          "use": "property",
          "which": "name"
      },
      "skipFilter": true
    },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "opacityRegular": 0.8,
      "opacityHighlightDim": 0.3,
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_rank": {
        "use": "property",
        "which": "rank"
      },
      "hook_geoshape": {
        "use": "property",
        "which": "shape_lores_svg"
      }
    },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_parent": {
        "use": "property",
        "which": "parent"
      }
    }
  },
  "ui": {
    "datawarning": {
      "doubtDomain": [1993, 2015],
      "doubtRange": [0, 0]
    },
    "map": {
      "scale": 1,
      "preserveAspectRatio": true,
      "mapEngine": "mapbox",
      "mapStyle": "mapbox://styles/mapbox/streets-v9",
      "showBubbles": true,
      "showAreas": true,
      "showMap": true,
      "offset": {
        "top": 0.05,
        "bottom": -0.12,
        "left": 0,
        "right": 0
      },
      "path": null,
      "bounds": {
        "north": 60.25,
        "west": 17.4,
        "south": 58.7,
        "east": 19.6
      },
      "projection": "mercator",
      "topology": {
        "path": "assets/sodertorn-kommun.json",
        "objects": {
          "geo": "SWE_adm2",
          "boundaries": "SWE_adm2"
        },
        "geoIdProperty": "ID_2"
      }
    },
    "splash": true
  },
  "data": {
    reader: 'waffle',
    path: 'https://waffle-server-dev.gapminderdev.org/api/ddf/ql',
    dataset: 'open-numbers/ddf--sodertornsmodellen',
    assetsPath: 'https://import-waffle-server-dev.gapminderdev.org/api/ddf/assets/'
  }
};
