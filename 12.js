const { runIfMain } = require('./lib');

const input = `abccccccccaaaaccccaaacaccccaaaaaacccccccccccaaaccccccccccaaaaaaacccccccccccccccccccccccccccccacaaaccccccccccccccccccccccccccccccccccccccccaaaaa
abccccccccaaaaccaaaaaaaacccaaaaaacccccccccccaaaacccccccccaaaaaaaaaacccccccccccccccaaccccccccaaaaaccaaaccaacccccccccccccccccccccccccccccccaaaaaa
abcccccccccaacccaaaaaaaaccccaaaaacccccccccccaaaacccccccaaaaaaaaaaaaaccccccccccaaaaaaccccccccaaaaaaaaaaaaaaccccccccccccccccaaaccccccccccccaaaaaa
abcccccccccccccccaaaaaccccccaacaaccccaacccccaaacccccccaaaaaaaaaaaaaaccccccccccaaaaaaacccccccccaaaaacaaaaaaccccccccccccccccaaccccccccccccccccaaa
abccccccccccccccccaaaaaccccccccccaaccaacccccccccccccccaaaaacaaaacacacccccaacccaaaaaaaacccccccaaaaacaaaaaaaccccccccccccccccaaacccccccccccccccaaa
abcccccccccccccccaaaaaaccccccccccaaaaaaccccccccccccccccaaaaaaaacaaaaacaaaaaccccaaaaaaacccccccaacaacaaaaaaaaccccccccaaaaccaakcccccccccccccccccaa
abcccccccccccccccaaaccacccccccccccaaaaaaacccccccaaaccccccaaaaaacaaaaaccaaaaaccaaaaaaccccccccccccaacaaaaaaaacccccccccaaaakkkklllcccccccccccccccc
abcccccaaaccccccccccccccccccccccccaaaaaaacccccccaaacacccaaaaaaaaaaaaacaaaaaaccaaaaaacccccccccccccccccaaaccccccccccccaaakkkkkllllcccccccaacccccc
abccccaaaacccccccccccccccccccccccaaaaaacccccccaccaaaaaccaaaaaaaaaaaaacaaaaccccccccaaccccccccccccccccccaaccccccccccccckkkkkkpllllccccaaaaaaccccc
abccccaaaacccccccccccccccccaaacccaaaaaacccccccaaaaaaaacccaaaaacaaaaaacccaaaccccccccccccccccccccccccccccccccccccccccckkkkpppppplllcccaaaaacccccc
abcccccaaaccccccccccccccccaaaacccccccaaccccccccaaaaacccccaaaccccaaacccccccccccccccccccccccccaaccccccccccccccccccjjjkkkkpppppppplllcccaaaaaacccc
abccccccccccccccccccccccccaaaaccccccccccccccccccaaaaacccccccccccccccccccccccccccccccccccccccaaaaaccccccccccccjjjjjjkkkrppppuppplllccccaaaaacccc
abccccccccccccccaaaccccccccaaaccccccccccccccccccaacaaccccccccccccccccccccccaaaccccccccaacccaaaaaccccccccccccjjjjjjjjrrrpuuuuuppplllcccccaaacccc
abcccccaaccaacccaaacacccccccccccccccccccccccccacaaaaccccccccccccccccccccccaaaaaaccccaaaacccaaaaaaccaccccccccjjjrrrrrrrrruuuuuppplllmcccddcccccc
abcccccaaaaaacaaaaaaaaccccccccccccccccccccccccaacaaaccccccccccccccccccccccaaaaaaccccaaaaaacccaaaaccaaacaaacjjjrrrrrrrrruuuxuuupqqlmmmmddddccccc
abcccccaaaaaccaaaaaaaaccccccccccccccccccccccccaaaaaccccaacccccccccccccccccaaaaaacccccaaaacccaacccccaaaaaaacjjjrrrrtuuuuuuxxyuvqqqqmmmmmddddcccc
abaacccaaaaaaccaaaaaccccccccccccccccccaaaaccccaaaaaaccaaaccccccccccccccccccaaaaaccccaaaaaccccccccccaaaaaaccjjjrrrtttuuuuuxxyvvvqqqqqmmmmdddcccc
abaaccaaaaaaaaccaaaaaccccccccccccccccaaaaaaaaaaaaaaaacaaacaaaccccccccccccccaacaacaacaacaaccccccccaaaaaaaaccijjqqrtttxxxxxxyyvvvvvqqqqmmmmdddccc
abaaccaaaaaaaacaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaacaaaccccccccccaaccaaaaaaaaaciiiqqqttxxxxxxxyyvvvvvvvqqqmmmdddccc
abaaaccccaaccccaaaccacccccccccccccccccaaaaaaccccaacaaaaaaaaaaccaaaccccccccccaaaaaaaccccccccccaaaaaaaaaaaaaaiiiqqqtttxxxxxxyyyyyyvvvqqqmmmdddccc
SbaaaccccaacccccccccccccccccccccccccaaaaaaaaccccaacccaaaaaaccaaaaaaccccccccccaaaaaacccccccccccaaaaacaaacaaaaiiiqqqttxxxxEzzyyyyyvvvqqqmmmdddccc
abaaaccccccccccccccccccccccccccccccaaaaaaaaaaccccccccaaaaaaccaaaaaaccccccccccaaaaaaaaccccccccaaaaaacaaaccaaaiiiqqqtttxxxyyyyyyvvvvqqqmmmdddcccc
abaccccccaacccccccccccccccccccccccccaaaaaaaaaaaacccccaaaaaaacaaaaaacccccccccaaaaaaaaacccccccaaaaaaaacaaaaaaaiiiqqqtttxxyyyyyyvvvvqqqqnnmeddcccc
abccccccaaaaccccccccccccaaaccccccccccccaaaaaaaaaaacccaaacaaacaaaaacccccccccaaaaaaaaaacccccccaaaaaaaaccaaaaaaaiiiqqtttxxyyyyyywvrrrrnnnneeeccccc
abccccccaaaacccccaacccccaaaacccccccccccaaaccaaaaaacccacccccccaaaaacccccccccaaacaaacccccccccccccaacccccccaaaaaiiqqqttxxwywwyyywwrrrnnnneeeeccccc
abccccccaaaaccaacaaaccccaaaaccccccaacccaacccaaaaaccccccccccccccccccccccccccccccaaacccccccccccccaaccccccaaaaaaiiqqqttwwwwwwwwywwrrrnnneeeecccccc
abccccccccccccaaaaacccccaaaccccacaaacccccccccaaaaacccccccccccccccccccccccccccccaaacccccccccccccccccccccaaaaaaiiqqpsswwwwsswwwwwrrnnneeeeccccccc
abcccccccccccccaaaaaacccccccccaaaaacaacccccccaacaacccccaaccccccccccccccccccccccccccccccccccccccccccccccaccaahhhpppssssssssswwwwrrnnneeeaccccccc
abcccccccccccaaaaaaaacccccccccaaaaaaaacccccaaccccccaaacaaccccccccccccccccccccccccccccccccccccaaaccaccccccccchhhpppsssssssssswwrrrnnneeeaaaacccc
abcccccccccccaaaaacaacccccccccccaaaaaccaaaaaaccccccaaaaaaccccccccccccccccccccccccccccaaccaaccaaaaaacccccccccchhpppppsspppossrrrrrnnneeeaaaacccc
abccccccccccccacaaaccccccccccccaaaaacccaaaaaaaacccccaaaaaaaccaaaccccccccaaaacccccccccaaaaaacccaaaaacccccccccchhhpppppppppoosrrrroonffeaaaaacccc
abccccccccccccccaaaccccccccccccaacaaaccaaaaaaaaccccaaaaaaaaacaaaccccccccaaaacccccccccaaaaaccaaaaaaacccccccccchhhhpppppppoooooooooonfffaaaaccccc
abcccccccccccccccccccccccaaaccccccaaccccaaaaaaaccccaaaaaaaaaaaaaaaccccccaaaacccccccccaaaaaacaaaaaaaacccccaacchhhhhhhhgggggoooooooofffaaaaaacccc
abcccccccccccccccccccccccaaaaacccaacccccaaaaaccccccaaaaaacaaaaaaaaccccccaaacccccccccaaaaaaaaaaaaaaaaccccaaacccchhhhhgggggggooooooffffaaaaaacccc
abccaaacccccccccccccccccaaaaaaccaaaccccaaaaaacccccccccaaacccaaaaacccccccccccccccccccaaaaaaaaccaaacacccccaaacaaachhhggggggggggfffffffcaacccccccc
abcaaaaccccccccccaacccccaaaaaaccaaacaaaccccaaccccccccccccccaaaaacccccccccccccccccccccccaacccccaaaccccaaaaaaaaaacccccccccaagggffffffcccccccccccc
abcaaaaccccccccccaaccccccaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaccccccccccccccccccccccaaccccccccccccaaaaaaaaaccccccccccaaacgfffffcccccccccccaa
abccaaacccccccaaaaaaaacccaaaaaaaaaaaaaaccccccccaaaaaccaaaaaaaaaaaaaacaacccccccccaaaccacccccccccccccccccaaaaacccccccccccaaaaccccccccccccccccccaa
abccccccccccccaaaaaaaacccccccccaaaaaaccccccccccaaaaaccaaaaaaaaaaaaaacaaaaaacccccaaaaaacccccccccccccccccaaaaaacccccccccccaacccccccccccccccacacaa
abccccccccccccccaaaacccccccccccaaaaaacccccccccaaaaaacccaaaaaaaaaaaaacaaaaaacccccaaaaaacccccccccccccccccaaaaaaaccccccccccaacccccccccccccccaaaaaa
abcccccccccccccaaaaaaccccccccccaaaaaaaccccccccaaaaaaccccccaaaaaacccaaaaaaaaccccaaaaaaaaccccccccccccccccaaacaaacccccccccccccccccccccccccccaaaaaa`;

function parseMaze(input) {
  let start, end;
  const maze = input.split('\n').map((line, y) =>
    line.split('').map((char, x) => {
      if (char === 'S') {
        start = [x, y];
        char = 'a';
      }
      if (char === 'E') {
        end = [x, y];
        char = 'z';
      }
      return char.charCodeAt(0) - 96;
    })
  );

  return {
    maze,
    start,
    end,
  };
}

function part1(input, liveRun) {
  const { maze, start, end } = parseMaze(input);
  const xMax = maze[0].length - 1;
  const yMax = maze.length - 1;

  const short = {};
  const backtrack = {};

  const eq = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;
  const get = ([x, y]) => maze[y][x];
  const up = ([x, y]) => (y === 0 ? null : [x, y - 1]);
  const down = ([x, y]) => (y === yMax ? null : [x, y + 1]);
  const left = ([x, y]) => (x === 0 ? null : [x - 1, y]);
  const right = ([x, y]) => (x === xMax ? null : [x + 1, y]);

  function go(pos, steps, lastVal, lastPos) {
    const [x, y] = pos;

    if (x < 0 || y < 0 || x > xMax || y > yMax) throw new Error('Out of bounds');
    if (short[pos] && short[pos] <= steps) return null;
    const val = get(pos);
    if (lastVal + 1 < val) return null;

    short[pos] = steps;
    backtrack[pos] = lastPos;

    if (eq(pos, end)) {
      return steps;
    }

    const xes = [left(pos), up(pos), down(pos), right(pos)]
      .filter(Boolean)
      .map((nextPos) => go(nextPos, steps + 1, val, pos))
    return xes[0];
  }

  go(start, 1, 1, 'S');

  let path = [];
  let bPos = [...end];

  while (bPos !== 'S') {
    path.push(bPos);
    bPos = backtrack[bPos];
  }

  path.reverse();

  return path.length - 1;
}

function part2(input, liveRun) {
  const { maze, start, end } = parseMaze(input);
  const xMax = maze[0].length - 1;
  const yMax = maze.length - 1;

  const short = {};
  const backtrack = {};
  let finalStep = null;

  const eq = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;
  const get = ([x, y]) => maze[y][x];
  const up = ([x, y]) => (y === 0 ? null : [x, y - 1]);
  const down = ([x, y]) => (y === yMax ? null : [x, y + 1]);
  const left = ([x, y]) => (x === 0 ? null : [x - 1, y]);
  const right = ([x, y]) => (x === xMax ? null : [x + 1, y]);

  function goDown(pos, steps, lastVal, lastPos) {
    const [x, y] = pos;

    if (x < 0 || y < 0 || x > xMax || y > yMax) throw new Error('Out of bounds');
    if (short[pos] && short[pos] <= steps) return null;
    const val = get(pos);

    if (val + 1 < lastVal) return null;

    short[pos] = steps;
    backtrack[pos] = lastPos;

    if (val === 1) {
      if (!finalStep || finalStep.steps > steps) finalStep = { steps, pos };
      return steps;
    }

    const xes = [left(pos), up(pos), down(pos), right(pos)]
      .filter(Boolean)
      .map((nextPos) => goDown(nextPos, steps + 1, val, pos))
    return xes[0];
  }

  goDown(end, 1, 1, 'E');

  let path = [];
  let bPos = [...finalStep.pos];

  while (bPos !== 'E') {
    path.push(bPos);
    bPos = backtrack[bPos];
  }

  path.reverse();

  return path.length - 1;
}

part1.desc = '';
part1.tests = [
  [
    `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`,
    31,
  ],
];

part2.desc = '';
part2.tests = [29];

runIfMain(module, input, part1, part2);

module.exports = {
  input,
  part1,
  part2,
};
