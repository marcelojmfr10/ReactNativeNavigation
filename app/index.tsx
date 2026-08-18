import { Redirect } from "expo-router";

const App = () => {
  return <Redirect href="/drawer" />;
  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-5xl" style={{ fontFamily: "WorkSans-Black" }}>
  //         hola mundo
  //       </Text>
  //       <Text className="text-4xl text-primary font-work-black ">
  //         hola mundo
  //       </Text>
  //       <Text className="text-3xl text-secondary font-work-light">
  //         hola mundo
  //       </Text>
  //       <Text className="text-2xl text-secondary-100 font-work-medium">
  //         hola mundo
  //       </Text>
  //       <Text className="text-xl text-tertiary">hola mundo</Text>
  //       <Link href="/products">Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
