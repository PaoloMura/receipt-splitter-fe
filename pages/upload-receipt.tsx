import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Item } from "@/app/(tabs)";

type UploadReceiptProps = {
  setItems: (items: Item[]) => void;
  onNext: () => void;
};

type ItemResponse = {
  label: string;
  cost: string;
  quantity: number;
};

export default function UploadReceipt({
  setItems,
  onNext,
}: UploadReceiptProps) {
  const [image, setImage] = React.useState<string | null>(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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

  useEffect(() => {
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
        setLoading(false);
        setError(true);
      } else {
        console.log("Image fetched successfully");

        const data = await response.json();
        console.log("data:", data);

        const formattedItems: Item[] = [];

        for (const item of data) {
          for (const _ of Array(item.quantity).fill(0)) {
            formattedItems.push({
              name: "",
              label: item.label,
              cost: item.cost,
            });
          }
        }

        setItems(formattedItems);

        onNext();
      }
    };

    if (loading) {
      submitImage();
    }
  }, [loading]);

  const onSubmit = () => {
    setError(false);
    setLoading(true);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ThemedText type="subtitle">Loading...</ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ThemedText type="title">Upload receipt</ThemedText>

      <ThemedText type="default">
        Choose an image from your camera roll:
      </ThemedText>

      <Button label="Pick an image" onPress={pickImage} variant="primary" />

      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Button label="Submit image" onPress={onSubmit} />
        </>
      )}
    </View>
  );
}
