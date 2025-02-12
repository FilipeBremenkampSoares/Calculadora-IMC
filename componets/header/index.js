import { View, Image, SafeAreaView } from "react-native";

import { HeaderContainer, HeaderContent, HeaderTitle, HeaderSubtitle } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <SafeAreaView />
      <HeaderContent>
        <Image
          width={100}
          height={100}
          source={{
            uri: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=144,h=144,fit=crop/Yg2lPq3o5otVG07P/group-4-4-AR0JzwZBGXcevZoy.png",
          }}
        />

        <View>
          <HeaderTitle>Calculadora</HeaderTitle>
          <HeaderSubtitle>De IMC</HeaderSubtitle>
        </View>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;