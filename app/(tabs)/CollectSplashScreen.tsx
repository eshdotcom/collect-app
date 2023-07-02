import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useEffect, useState } from 'react';
import Colors from '../../constants/Colors';

export default function CollectSplashScreen() {

  /*const [json, setJson] = useState({})
  const imgUrl = 'https://expensesreceipt.com/assets/img/standard-grocery-receipt-template.png?ver=1.231'
  const body = {
    file: 'http://dl.a9t9.com/ocrbenchmark/eng.png',
    filetype:'jpg'
  };

  const header = {
    "apikey": 'K88778600988957',
  }

  const url = "https://api.ocr.space/parse/image"

  useEffect(() => {
    fetch( url , {
      method: "POST",
      headers: header,
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((data) => {
        setJson(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);*/


  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Collect</Text>
    </View> 

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.CollectTheme.backgroundColorPrimary,
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.CollectTheme.darkBackedTextColor,
  }
});
