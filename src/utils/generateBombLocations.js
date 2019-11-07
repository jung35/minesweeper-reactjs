export default function generateBombLocations(size, bombs) {
  const blocks = [...Array(size).keys()];
  const bomb_locations = [];

  for (let i = 0; i < bombs; i++) {
    bomb_locations.push(
      blocks.splice(Math.floor(Math.random() * blocks.length), 1)[0]
    );
  }

  console.log("bomb_locations", bomb_locations);

  return bomb_locations;
}
