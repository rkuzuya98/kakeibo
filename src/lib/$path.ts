export const pagesPath = {
  expense: {
    living: {
      _id: (id: string | number) => ({
        edit: {
          $url: (url?: { hash?: string }) => ({
            pathname: "/expense/living/[id]/edit" as const,
            query: { id },
            hash: url?.hash,
          }),
        },
        $url: (url?: { hash?: string }) => ({
          pathname: "/expense/living/[id]" as const,
          query: { id },
          hash: url?.hash,
        }),
      }),
      $url: (url?: { hash?: string }) => ({
        pathname: "/expense/living" as const,
        hash: url?.hash,
      }),
    },
    regular: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/expense/regular" as const,
        hash: url?.hash,
      }),
    },
    special: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/expense/special" as const,
        hash: url?.hash,
      }),
    },
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;
