import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-2">
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/products")}
          color="primary"
        >
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/profile")}
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          className="mb-2"
          onPress={() => router.push("/settings")}
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton className="mb-10" color="primary" variant="text-only">
            Productos
          </CustomButton>
        </Link>
        {/* <Link className="mb-5" href="/products">
          Productos{" "}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil{" "}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes{" "}
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
