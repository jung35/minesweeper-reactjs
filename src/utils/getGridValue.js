import { BLOCK_BOMB, BLOCK_EMPTY } from "../constants";

export default function getGridValue(i, j, width, height, bomb_locations) {
  const block_location = i * width + j;

  if (bomb_locations.indexOf(block_location) !== -1) {
    return BLOCK_BOMB;
  }

  let adjacent_bomb = 0;

  const check_left = j > 0;
  const check_right = j < width - 1;
  const check_top = i > 0;
  const check_bottom = i < height - 1;

  // found left
  if (check_left && bomb_locations.indexOf(block_location - 1) !== -1) {
    adjacent_bomb++;
  }

  // found right
  if (check_right && bomb_locations.indexOf(block_location + 1) !== -1) {
    adjacent_bomb++;
  }

  // found top
  if (check_top && bomb_locations.indexOf(block_location - width) !== -1) {
    adjacent_bomb++;
  }

  // found bottom
  if (check_bottom && bomb_locations.indexOf(block_location + width) !== -1) {
    adjacent_bomb++;
  }

  // found top left
  if (
    check_top &&
    check_left &&
    bomb_locations.indexOf(block_location - width - 1) !== -1
  ) {
    adjacent_bomb++;
  }

  // found top right
  if (
    check_top &&
    check_right &&
    bomb_locations.indexOf(block_location - width + 1) !== -1
  ) {
    adjacent_bomb++;
  }

  // found bottom left
  if (
    check_bottom &&
    check_left &&
    bomb_locations.indexOf(block_location + width - 1) !== -1
  ) {
    adjacent_bomb++;
  }

  // found bottom right
  if (
    check_bottom &&
    check_right &&
    bomb_locations.indexOf(block_location + width + 1) !== -1
  ) {
    adjacent_bomb++;
  }

  return adjacent_bomb > 0 ? adjacent_bomb.toString() : BLOCK_EMPTY;
}
