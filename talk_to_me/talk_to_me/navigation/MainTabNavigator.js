import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ActionScreen from '../screens/ActionScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ConfigureScreen from '../screens/ConfigureScreen';

const ActionStack = createStackNavigator({
  Action: ActionScreen,
});

ActionStack.navigationOptions = {
  tabBarLabel: 'Action',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LibraryStack = createStackNavigator({
  Library: LibraryScreen,
});

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ConfigureStack = createStackNavigator({
  Configure: ConfigureScreen,
});

ConfigureStack.navigationOptions = {
  tabBarLabel: 'Configure',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ActionStack,
  LibraryStack,
  ConfigureStack,
});
