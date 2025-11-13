// validate simple structure (very lenient — you can extend)
export const isValidThemeObject = (obj) => {
  if (!obj || typeof obj !== "object") return false;
  // basic check: must have palette or typography or shape — optional
  return Boolean(obj.palette || obj.typography || obj.shape || obj.components);
};

/**
 * parseThemeJSON
 * Accept either object or JSON string.
 */
export const parseThemeJSON = (input) => {
  if (typeof input === "string") {
    try {
      return JSON.parse(input);
    } catch (e) {
      throw new Error("Invalid JSON");
    }
  }
  if (typeof input === "object") return input;
  throw new Error("Theme should be an object or JSON string");
};
