export const pagesPath = {
  expense: {
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
