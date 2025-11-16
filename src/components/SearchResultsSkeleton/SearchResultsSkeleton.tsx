import React from "react";
import { SimpleGrid, Box, Skeleton, SkeletonText } from "@chakra-ui/react";

interface SearchResultsSkeletonProps {
  count?: number;
}

export const SearchResultsSkeleton: React.FC<SearchResultsSkeletonProps> = ({
  count = 6,
}) => (
  <SimpleGrid columns={[1, 2, 3]} gap={4}>
    {Array.from({ length: count }).map((_, idx) => (
      <Box key={idx} borderWidth="1px" borderRadius="md" p={2}>
        <Skeleton height="150px" mb={2} borderRadius="md" />
        <SkeletonText mt="2" noOfLines={2} gap="2" />
      </Box>
    ))}
  </SimpleGrid>
);
