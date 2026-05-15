import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, SiFigma, Ionicons } from '@expo/vector-icons';

export default function Habilidades() {

  const skills = [
    { name: 'React', icon: 'react', library: MaterialCommunityIcons, color: '#61DBFB' },
    { name: 'React Native', icon: 'react', library: MaterialCommunityIcons, color: '#61DBFB' },
    { name: 'Node.js', icon: 'nodejs', library: MaterialCommunityIcons, color: '#68A063' },
    { name: 'Express', icon: 'server', library: MaterialCommunityIcons, color: '#000' },
    { name: 'JavaScript', icon: 'language-javascript', library: MaterialCommunityIcons, color: '#F7DF1E' },
    { name: 'Python', icon: 'language-python', library: MaterialCommunityIcons, color: '#3776AB' },
    { name: 'Prisma', icon: 'triangle-outline', library: MaterialCommunityIcons, color: '#2D3748' },
    { name: 'Supabase', icon: 'database-import-outline', library: MaterialCommunityIcons, color: '#3ECF8E' },
    { name: 'PostgreSQL', icon: 'database', library: MaterialCommunityIcons, color: '#336791' },
    { name: 'HTML', icon: 'language-html5', library: MaterialCommunityIcons, color: '#E34F26' },
    { name: 'CSS', icon: 'language-css3', library: MaterialCommunityIcons, color: '#1572B6' },
    { name: 'Trello', icon: 'trello', library: MaterialCommunityIcons, color: '#0079BF' },
    { name: 'IA', icon: 'robot', library: MaterialCommunityIcons, color: '#FF5722' },
    { name: 'Postman', icon: 'rocket-launch', library: MaterialCommunityIcons, color: '#FF6C37' },
    { name: 'Git', icon: 'git', library: MaterialCommunityIcons, color: '#F05032' },
    { name: 'GitHub', icon: 'github', library: MaterialCommunityIcons, color: '#000' },
    { name: 'Linux', icon: 'linux', library: MaterialCommunityIcons, color: '#000' },
    { name: 'Windows', icon: 'microsoft-windows', library: MaterialCommunityIcons, color: '#00A4EF' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Habilidades & Ferramentas</Text>
        
        <ScrollView 
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        >
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <skill.library name={skill.icon} size={30} color={skill.color} />
              <Text style={styles.skillName}>{skill.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  caixa: {
    width: '85%',
    height: 450, 
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
  skillItem: {
    alignItems: 'center',
    width: 80,
    marginBottom: 10,
  },
  skillName: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '600',
    color: '#333'
  }
});