














const optionsArray =
!Array.isArray(options) && typeof options === "object"
    ? Object.values(options)
    : options;