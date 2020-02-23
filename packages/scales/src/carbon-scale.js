module.exports = (params = {}) => {
  const {
    length = 20,
    minSize = 12,
    interval = 4,
    step = 2,
    transform = v => v
  } = params;

  const getSize = count => {
    if (count <= 1) {
      return minSize;
    }

    return getSize(count - 1) + Math.floor((count - 2) / interval + 1) * step;
  };

  return Array.from({ length: length }, (_, i) => getSize(i + 1)).map(
    transform
  );
};
