"use strict";

import {Platform} from 'react-native'

export const HOST = Platform.OS === 'android' ? 'http://10.0.2.2:3000/' : 'http://localhost:3000/';
