import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
const iconSize = 35;
const facebook = <Icon name={"facebook-square"} size={iconSize} color={"#ff0000"} />;
const instagram = <Icon name={"instagram"} size={iconSize} color={"#ff0000"} />;
const twitter = <Icon name={"twitter-square"} size={iconSize} color={"#ff0000"} />;
const pinterest = <Icon name={"pinterest-square"} size={iconSize} color={"#ff0000"} />;

const Profile = () => {
  const user = {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png",
    name: "Pokedex",
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.backContainer} />
        <Image source={{ uri: user.avatar }} style={styles.photoContainer} />
        <Text style={styles.name}>{user.name}</Text>
      </View>

      <View style={styles.bottonContainer}>
        
        <Text style={styles.follow}></Text>
        <View style={styles.networkContainer}>
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL("https://www.facebook.com/erick.gordillo.9277")}
          >
            {facebook}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              Linking.openURL("https://www.instagram.com/peterpaan031/");
            }}
          >
            {instagram}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL("https://twitter.com/Eridaras")}
          >
            {twitter}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL("https://pinterest.com/")}
          >
            {pinterest}
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  topContainer: {
    width: "100%",
    height: "60%",
    alignItems: "center",
  },
  backContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    resizeMode: "cover",
    backgroundColor: "#0000000",
    zIndex: 0,
  },
  photoContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    top: "-25%",
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "white",
    zIndex: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "000000",
  },
  name: {
    top: "-20%",
    zIndex: 0,
    fontSize: 30,
    fontWeight: "semibold",
  },
  bottonContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGoogle: {
    alignItems: "center",
    marginBottom: "18%",
    borderColor: "#3e9f5e",
  },
  follow: {
    fontSize: 16,
  },
  networkContainer: {
    flexDirection: "row",
    marginTop: 115,
    width: "80%",
    justifyContent: "space-between",
  },
});

export default Profile;
