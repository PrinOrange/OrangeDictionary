import { View, Text, Button, Alert } from "react-native";
export const HomePage = () => {
  return (
    <View>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ textAlign: "center", margin: "auto", fontSize: 20 }}>
          {"P201713081 张宇腾 数学与计算机科学学院"}
        </Text>
        <Text style={{ textAlign: "center", margin: "auto", fontSize: 30 }}>
          {"Hello World!"}
        </Text>
        <View style={{ flexDirection: "row",justifyContent:"center" }}>
          <Button
            title="Click Me!"
            onPress={() => Alert.alert("安卓APP开发测试")}
          ></Button>
        </View>
      </View>
    </View>
  );
};
