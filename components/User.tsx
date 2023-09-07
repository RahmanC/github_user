import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  src: string;
  location: string;
  name: string;
  url: string;
};

const User = ({ src, location, name, url }: Props) => {
  return (
    <View className="flex flex-row item-center space-x-3 mt-5 mx-auto w-11/12">
      <View>
        <Image source={{ uri: src }} className="w-10 h-10 rounded-full" />
      </View>
      <View className="flex flex-col gap-1">
        <Text className="text-lg text-gray-200 font-semibold">{name}</Text>
        <Text className="text-lg text-gray-500 font-[600]">{location}</Text>
        <Text className="text-lg text-blue-500 font-[600] underline">
          {url}
        </Text>
      </View>
    </View>
  );
};

export default User;
