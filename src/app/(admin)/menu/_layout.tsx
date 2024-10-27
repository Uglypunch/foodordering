import { Stack, Link } from "expo-router";
import Colors from "@/constants/Colors";
import { Pressable} from "react-native";
import { FontAwesome } from "@expo/vector-icons";


//this menu is a stack, stack of pages on top of each other
//i think that in here, we define that Menustack() is a stack where we have index at the top and [id] below it
//and they are all under the menu folder, which kind of represents the stack.
export default function MenuStack() {
    return (
    <Stack>
        <Stack.Screen name="index" options={{ 
          title: 'Menu', 
          headerShown: true, 
          headerTitleAlign: 'center', 
          headerRight: () => (
            <Link href="/(admin)/menu/create" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square-o"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
        ),
        headerLeft: () => (
          <Link href="../../" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="plus-square-o"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
      )
        }} />
        <Stack.Screen name="[id]" options={{ 
          title: 'Menu', 
          headerShown: true, 
          headerTitleAlign: 'center', 
          headerRight: () => (
            <Link href="/(admin)/menu/create" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
        ),}} />
    </Stack>
    );
}

