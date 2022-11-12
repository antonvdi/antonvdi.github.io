import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/map.json";

export default function Map({highlightedCountries}) {

    return ( 
    <div>
        <ComposableMap width={1600}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => {
                    if(highlightedCountries.includes(geo.id)) {
                        return (<Geography 
                            key={geo.rsmKey} 
                            geography={geo}
                            tabIndex={-1}
                            style = {{
                                default: {
                                    fill: "#0072b1",
                                    outline: "none",
                                },
                                hover: {
                                    outline: "none",
                                },
                                pressed: {
                                    outline: "none",
                                }
                            }}
                            />);
                    };
                    return (<></>);
                })
            }
          </Geographies>
          <Geographies geography={geoUrl}>
          {({ geographies }) =>
                geographies.map((geo) => {
                    if(!highlightedCountries.includes(geo.id)) {
                        return (<Geography 
                            key={geo.rsmKey} 
                            geography={geo}
                            tabIndex={-1}
                            style = {{
                                default: {
                                    fill: "#D6D6DA",
                                    outline: "none",
                                },
                                hover: {
                                    outline: "none",
                                },
                                pressed: {
                                    outline: "none",
                                }
                            }}
                            />);
                    }
                    return (<></>);
                })
            }
          </Geographies>
        </ComposableMap>
      </div>);
};

