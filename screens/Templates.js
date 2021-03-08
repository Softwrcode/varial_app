import React, {Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNFetchBlob from 'react-native-fetch-blob';

export class Templates extends Component {
  constructor(props) {
    super(props);
  }
  onSurvey = () => {
    this.props.navigation.navigate('Newsurvey');
  };

  actualDownload = () => {
    const {dirs} = RNFetchBlob.fs;
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: 'template.pdf',
        path: `${dirs.DownloadDir}/template.pdf`,
      },
    })
      .fetch('GET', 'http://www.africau.edu/images/default/sample.pdf', {})
      .then((res) => {
        console.log('The file saved to ', res.path());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  downloadFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.actualDownload();
        Alert.alert('Download process', 'Successfully download');
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textheader}>ACPI Security Survey Assistant</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <LinearGradient
              colors={['#4F6D7A', '#699eb5']}
              style={styles.signIn}>
              <Text
                style={[styles.textSign, {color: '#fff'}]}
                onPress={this.onSurvey}>
                <FontAwesome name="edit" color="#053875a" size={20} />
                New Survey
              </Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={styles.cardHeader}>Security Survey Templates</Text>
          </View>
          <View>
            <Text style={styles.tempText}>Residential</Text>
          </View>
          <View>
            <Text style={{color: '#4F6D7A', marginTop: 10, marginLeft: 5}}>
              21- 4 United state,New york washington
            </Text>
          </View>
          <View>
            <Text style={styles.tempDownload} onPress={this.downloadFile}>
              Download New templates
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Templates;

// templates screen styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F6D7A',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
    paddingBottom: 50,
  },
  footer: {
    flex: 9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  iconStyle: {
    marginRight: '90%',
    paddingBottom: 10,
  },
  textheader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signIn: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
  },
  textSign: {
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  cardBody: {
    marginBottom: 10,
    marginRight: 5,
    borderRadius: 2,
    padding: 10,
    width: '100%',
  },
  cardHeader: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 5,
    color: 'grey',
    fontWeight: 'bold',
  },
  tempText: {
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  tempDownload: {
    marginTop: '70%',
    textAlign: 'center',
    color: '#4F6D7A',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
