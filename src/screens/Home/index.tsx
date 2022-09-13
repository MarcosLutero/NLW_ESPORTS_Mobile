import { Inter_500Medium } from "@expo-google-fonts/inter";
import React from "react";
import { FlatList, Image, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre o seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
      data={GAMES}
      keyExtractor={item=>item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.contentList }
      renderItem={({item})=>( <GameCard data={item} />)}/>
     
    </View>
  );
}
