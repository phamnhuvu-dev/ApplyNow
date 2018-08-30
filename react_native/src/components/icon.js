import {Image} from "react-native";
import React from "react";


const Icon = ({source, tintColor = 'white'}) => (
  <Image
    fadeDuration={0}
    source={source}
    style={[{width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
  />
);

export default Icon;