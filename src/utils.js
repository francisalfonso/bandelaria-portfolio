// export const getImageUrl = (path) => {
//   return new URL(`./assets/${path}`, import.meta.url).href;
// };

// export const getDocument = (path) => {
//   return new URL(`./assets/${path}`, import.meta.url).href;
// };

// src/utils.js

const imageModules = import.meta.glob("./assets/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const documentModules = import.meta.glob("./assets/**/*.{pdf,docx}", {
  eager: true,
});

export const getImageUrl = (path) => {
  const fullPath = `./assets/${path}`;
  const mod = imageModules[fullPath];
  if (!mod) throw new Error(`Image not found: ${path}`);
  return mod.default;
};

export const getDocument = (path) => {
  const fullPath = `./assets/${path}`;
  const mod = documentModules[fullPath];
  if (!mod) throw new Error(`Document not found: ${path}`);
  return mod.default;
};
