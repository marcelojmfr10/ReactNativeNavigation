import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

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

        <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>

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
