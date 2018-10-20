'use strict';

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import LoginScreen from "../../src/features/account/login-screen";

it('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});