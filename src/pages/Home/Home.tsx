import React, { useState } from "react";
import { Box, Stack, Heading, Center, Text } from "@chakra-ui/react";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SearchResultsSkeleton } from "@/components/SearchResultsSkeleton/SearchResultsSkeleton";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { useSearch } from "@/hooks/useSearch";
import { SearchResults } from "@/components/SearchResults/SearchResults";

export const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useSearch(query);

  return (
    <Box maxW="900px" mx="auto" p={4}>
      <Heading mb={4}>Search Songs & Albums</Heading>

      <SearchBar value={query} onChange={setQuery} />

      {isLoading && <SearchResultsSkeleton count={6} />}

      {error && <ErrorMessage message="Failed to fetch search results" />}

      {!isLoading &&
        data &&
        data.tracks.length === 0 &&
        data.albums.length === 0 && (
          <EmptyState message={`No results for "${query}"`} />
        )}

      {!isLoading &&
        data &&
        (data.tracks.length > 0 || data.albums.length > 0) && (
          <Stack gap={6}>
            <Box>
              <Heading size="md" mb={2}>
                Tracks
              </Heading>
              {data.tracks.length > 0 ? (
                <SearchResults tracks={data.tracks} albums={[]} />
              ) : (
                <EmptyState message="No tracks found." />
              )}
            </Box>

            <Box>
              <Heading size="md" mb={2}>
                Albums
              </Heading>
              {data.albums.length > 0 ? (
                <SearchResults tracks={[]} albums={data.albums} />
              ) : (
                <EmptyState message="No albums found." />
              )}
            </Box>
          </Stack>
        )}
    </Box>
  );
};

const EmptyState = ({ message = "No results found." }) => (
  <Center py={8}>
    {" "}
    <Text color="gray.500" fontSize="lg">
      {" "}
      {message}{" "}
    </Text>{" "}
  </Center>
);
