import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, Image, Alert } from "react-native";
import axios from 'axios';

const List = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [showPokemonDetails, setShowPokemonDetails] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=33');
      const { results } = response.data;
      setPokemonList(results);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const fetchPokemonDetails = async (pokemonUrl) => {
    try {
      const response = await axios.get(pokemonUrl);
      setSelectedPokemon(response.data);
      setShowPokemonDetails(true);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  const PokemonItem = ({ pokemon }) => {
    return (
      <TouchableOpacity
        style={styles.perItem}
        onPress={() => {
          fetchPokemonDetails(pokemon.url);
        }}
      >
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png` }}
          style={styles.pokemonListImage}
        />
        <Text style={styles.pokemonName}>{pokemon.name}</Text>
      </TouchableOpacity>
    );
  };

  const closePokemonDetails = () => {
    setShowPokemonDetails(false);
    setSelectedPokemon(null);
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>Pokemon</Text>
      {pokemonList && (
        <View style={styles.container}>
          <View style={styles.gallery}>
            <FlatList
              data={pokemonList}
              numColumns={3}  
              renderItem={({ item }) => <PokemonItem pokemon={item} />}
              keyExtractor={(item) => item.name}
            />
          </View>

          <Modal
            transparent={true}
            animationType={"slide"}
            visible={showPokemonDetails}
            onRequestClose={() => {
              Alert.alert("Modal has been closed");
              closePokemonDetails();
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {selectedPokemon && (
                  <View>
                    <Image
                      source={{ uri: selectedPokemon.sprites.front_default }}
                      style={styles.pokemonImage}
                    />
                    <Text style={styles.modalText}>
                      Nombre: {selectedPokemon.name}
                    </Text>
                    <Text style={styles.modalText}>
                      Habilidades: {selectedPokemon.abilities.map((ability) => ability.ability.name).join(", ")}
                    </Text>
                    <Text style={styles.modalText}>
                      Tipo: {selectedPokemon.types.map((type) => type.type.name).join(", ")}
                    </Text>
                    {/* Aquí podrías mostrar más detalles del Pokémon */}
                  </View>
                )}
                <TouchableOpacity onPress={closePokemonDetails}>
                  <Text style={styles.closeButton}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "93%",
  },
  gallery: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  perItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "column",
    alignItems: "center",
  },
  pokemonListImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  pokemonName: {
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "80%",
  },
  pokemonImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
    alignSelf: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    textAlign: "center",
  },
});

export default List;