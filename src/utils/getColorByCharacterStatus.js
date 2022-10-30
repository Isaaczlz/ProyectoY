import { CHARACTER_STATUS_COLORS } from "./constants";

const getColorByCharacterStatus = (status) =>
  CHARACTER_STATUS_COLORS[status.toLowerCase()];

export default getColorByCharacterStatus;
