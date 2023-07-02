import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

export default function HomePageScreen() {
  const pageHeaderTitle = 'Your finances'
  return (
    <View style={styles.pageContainer}>
      {renderHeaderBar(pageHeaderTitle)}
      <View style={styles.content}>
        {renderQuickInsightsSection()}
      </View>
    </View>
  );
}
const renderHeaderBar = (title: string) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}> {title} </Text>
    </View>)
}

const renderQuickInsightsSection = () => {
  return (
    <View style={styles.quickInsightsContainer}>

    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.CollectTheme.fullPageBackGroundColor,
    flex: 1
  },
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.CollectTheme.backgroundColorPrimary,
    height: '8%'
  },
  quickInsightsContainer: {
    backgroundColor: Colors.CollectTheme.backgroundColorSecondary,
    justifyContent: 'center',
    height: '8%'
  },
  content: {
    flex: 1
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: 'normal',
    textAlign: 'left',
    color: Colors.CollectTheme.darkBackedTextColor,
  }
});
