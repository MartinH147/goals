// In a component file (e.g., HomeScreen.js)
import React, { useEffect, useState } from "react";
import supabase from "./supabaseClient";

export default function HomeScreen() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const { data, error } = await supabase.from("goals").select("*");

    if (error) {
      console.error("Error fetching profiles:", error);
    } else {
      setProfiles(data);
    }
  };

  return (
    <View>
      {profiles.map((profile) => (
        <Text key={profile.id}>{profile.name}</Text>
      ))}
    </View>
  );
}
