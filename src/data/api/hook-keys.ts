export const charactersKeys = {
  all: () => ["characters"] as const,
  list: (params: string) => [...charactersKeys.all(), params] as const,
  character: (params: string) => ["character", params] as const,
};
