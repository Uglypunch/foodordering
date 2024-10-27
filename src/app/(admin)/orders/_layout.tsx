import { Stack, Link } from "expo-router";
import Colors from "@/constants/Colors";
import { Pressable} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MenuStack() {
    return (
    <Stack>
        {/* <Stack.Screen name="index" options={{ title: 'Last 10 orders', headerTitleAlign: 'center'}} /> */}
        <Stack.Screen name="list" options={{headerShown: false}} />
    </Stack>
    );
}

