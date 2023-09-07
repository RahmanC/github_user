import { View, SafeAreaView, ScrollView } from "react-native";
import SearchBox from "./components/SearchBox";
import { useState, useCallback } from "react";
import User from "./components/User";
import CardList from "./components/CardList";

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  location: string;
  name: string;
  public_repos: string | number;
  blog: string;
};

export default function App() {
  const [data, setData] = useState<Data>();

  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter something");
      return;
    }

    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        className="h-screen p-4 mx-auto"
      >
        <SearchBox onSearch={search} />
        {data && (
          <>
            <User
              src={data.avatar_url}
              location={data.location}
              name={data.name}
              url={data.blog}
            />
            <CardList data={data} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
