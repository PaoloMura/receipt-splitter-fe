import { useState } from "react";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "@/constants/styles";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { InputRow } from "@/components/InputRow";
import IconButton from "@/components/IconButton";
import SelectInput from "@/components/SelectInput";

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 2,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const submitImage = async () => {
    const response = await fetch("http://127.0.0.1:5000/upload-receipt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image,
      }),
    });

    if (!response.ok) {
      console.log("Error fetching image:", response.statusText);
    } else {
      console.log("Image fetched successfully");

      const data = await response.json();
      console.log("data:", data);
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">Create group</ThemedText>
      <ThemedText type="default">Add people to your group:</ThemedText>
      <InputRow
        label="Ben owes £"
        value="4.0"
        setValue={(value) => console.log("Set value", value)}
        onRemove={() => console.log("Remove value")}
      />
      <IconButton name="plus" onPress={() => console.log("Remove")} />
      <SelectInput
        label="Paolo"
        checked
        onPress={() => console.log("Press Paolo")}
      />
      <SelectInput
        label="Faieq"
        checked={false}
        onPress={() => console.log("Press Faieq")}
      />
      <Button
        label="Pick an image from camera roll"
        onPress={pickImage}
        variant="primary"
      />
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Button label="Submit image" onPress={submitImage} />
        </>
      )}
    </View>
  );
}
