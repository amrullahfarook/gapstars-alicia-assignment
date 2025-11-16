import React from "react";
import { Input, IconButton, Group } from "@chakra-ui/react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <Group mb={4}>
      <Input
        placeholder="Search for songs or albums"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <IconButton aria-label="Search" onClick={() => onChange(value)}>
        <Search />
      </IconButton>
    </Group>
  );
};
