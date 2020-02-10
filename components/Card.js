import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function EventCard({ event }) {

  return (
    <View style={styles.card}>
        <View>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subTitle}>{event.author}</Text>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      flex: 1,
      padding: 10,
      paddingTop: 10,
      paddingBottom: 20,
      margin: 10,
      marginTop: 5,
      marginBottom: 5,
    },
    cardHeader: {
      flex: 1,
      flexDirection: 'row',
    },
    title: {
      fontSize: 15,
      fontWeight: '300',
      marginLeft: 7,
      textAlign: 'center',
    },
    subTitle: {
        fontSize: 13,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
  });
  