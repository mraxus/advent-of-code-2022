const { runIfMain } = require('./lib');

const input = `                    [L]     [H] [W]
                [J] [Z] [J] [Q] [Q]
[S]             [M] [C] [T] [F] [B]
[P]     [H]     [B] [D] [G] [B] [P]
[W]     [L] [D] [D] [J] [W] [T] [C]
[N] [T] [R] [T] [T] [T] [M] [M] [G]
[J] [S] [Q] [S] [Z] [W] [P] [G] [D]
[Z] [G] [V] [V] [Q] [M] [L] [N] [R]
 1   2   3   4   5   6   7   8   9 

move 1 from 3 to 5
move 2 from 2 to 8
move 4 from 1 to 3
move 2 from 1 to 4
move 1 from 7 to 1
move 2 from 9 to 7
move 4 from 5 to 9
move 7 from 8 to 9
move 2 from 5 to 2
move 1 from 2 to 9
move 1 from 1 to 8
move 1 from 2 to 7
move 3 from 8 to 2
move 6 from 9 to 7
move 5 from 4 to 1
move 7 from 9 to 5
move 1 from 4 to 5
move 4 from 1 to 7
move 1 from 8 to 1
move 4 from 7 to 9
move 1 from 5 to 8
move 9 from 9 to 3
move 1 from 8 to 9
move 1 from 1 to 5
move 4 from 3 to 2
move 10 from 5 to 3
move 8 from 2 to 8
move 7 from 8 to 3
move 9 from 7 to 5
move 1 from 9 to 3
move 3 from 6 to 4
move 3 from 7 to 6
move 1 from 8 to 7
move 1 from 1 to 8
move 1 from 4 to 7
move 5 from 7 to 6
move 14 from 3 to 7
move 16 from 3 to 9
move 1 from 8 to 4
move 2 from 4 to 9
move 1 from 3 to 7
move 1 from 6 to 8
move 15 from 7 to 2
move 10 from 9 to 7
move 7 from 2 to 4
move 1 from 2 to 7
move 11 from 6 to 7
move 5 from 5 to 9
move 15 from 7 to 8
move 1 from 7 to 2
move 2 from 9 to 7
move 4 from 5 to 1
move 5 from 4 to 9
move 6 from 2 to 4
move 2 from 2 to 5
move 2 from 1 to 4
move 1 from 1 to 5
move 3 from 5 to 6
move 8 from 7 to 9
move 9 from 4 to 9
move 1 from 4 to 8
move 11 from 9 to 7
move 4 from 6 to 1
move 17 from 8 to 7
move 26 from 7 to 1
move 1 from 4 to 8
move 24 from 1 to 7
move 22 from 9 to 3
move 1 from 8 to 2
move 6 from 3 to 4
move 2 from 1 to 2
move 1 from 7 to 9
move 16 from 7 to 3
move 1 from 9 to 5
move 6 from 4 to 1
move 1 from 2 to 7
move 6 from 3 to 2
move 1 from 5 to 4
move 6 from 3 to 5
move 1 from 4 to 1
move 3 from 1 to 4
move 4 from 5 to 4
move 7 from 1 to 7
move 6 from 4 to 3
move 1 from 1 to 6
move 1 from 2 to 5
move 1 from 1 to 7
move 15 from 3 to 1
move 2 from 2 to 7
move 3 from 5 to 8
move 9 from 7 to 5
move 8 from 5 to 7
move 3 from 8 to 5
move 1 from 6 to 9
move 5 from 7 to 8
move 3 from 2 to 4
move 2 from 2 to 5
move 4 from 3 to 7
move 5 from 8 to 3
move 1 from 5 to 8
move 5 from 3 to 1
move 2 from 5 to 7
move 1 from 9 to 8
move 1 from 5 to 8
move 19 from 1 to 4
move 19 from 7 to 1
move 7 from 1 to 4
move 1 from 7 to 4
move 3 from 3 to 5
move 22 from 4 to 5
move 3 from 8 to 3
move 7 from 1 to 8
move 3 from 3 to 5
move 3 from 3 to 6
move 3 from 6 to 9
move 3 from 9 to 1
move 1 from 3 to 4
move 2 from 8 to 9
move 25 from 5 to 6
move 4 from 1 to 5
move 5 from 5 to 4
move 2 from 8 to 2
move 1 from 9 to 2
move 3 from 5 to 7
move 12 from 6 to 8
move 1 from 7 to 3
move 7 from 8 to 1
move 1 from 5 to 7
move 1 from 3 to 8
move 2 from 7 to 4
move 6 from 8 to 5
move 10 from 6 to 3
move 2 from 6 to 2
move 1 from 6 to 3
move 17 from 4 to 6
move 3 from 3 to 9
move 3 from 8 to 4
move 1 from 7 to 5
move 1 from 3 to 8
move 1 from 2 to 5
move 10 from 1 to 7
move 3 from 2 to 7
move 2 from 1 to 8
move 15 from 6 to 3
move 7 from 5 to 9
move 9 from 9 to 5
move 1 from 9 to 3
move 2 from 3 to 5
move 3 from 8 to 6
move 1 from 9 to 3
move 11 from 5 to 8
move 9 from 3 to 8
move 1 from 5 to 6
move 9 from 8 to 5
move 10 from 7 to 5
move 5 from 5 to 3
move 4 from 6 to 8
move 2 from 6 to 8
move 2 from 5 to 6
move 1 from 2 to 1
move 9 from 5 to 3
move 2 from 7 to 5
move 3 from 5 to 4
move 1 from 4 to 1
move 2 from 4 to 3
move 1 from 7 to 1
move 2 from 1 to 7
move 3 from 4 to 5
move 2 from 7 to 3
move 14 from 3 to 9
move 13 from 3 to 1
move 8 from 1 to 4
move 6 from 1 to 2
move 11 from 8 to 6
move 4 from 3 to 9
move 2 from 9 to 2
move 1 from 5 to 2
move 6 from 4 to 9
move 6 from 8 to 9
move 6 from 9 to 4
move 2 from 4 to 7
move 4 from 4 to 6
move 4 from 2 to 9
move 2 from 7 to 9
move 2 from 2 to 1
move 3 from 5 to 3
move 2 from 1 to 7
move 1 from 5 to 2
move 7 from 9 to 7
move 2 from 2 to 8
move 10 from 6 to 5
move 5 from 5 to 6
move 9 from 7 to 8
move 3 from 3 to 9
move 4 from 5 to 1
move 10 from 9 to 3
move 7 from 6 to 2
move 5 from 3 to 9
move 3 from 1 to 7
move 1 from 4 to 7
move 1 from 4 to 9
move 1 from 3 to 7
move 1 from 2 to 1
move 1 from 5 to 1
move 1 from 1 to 7
move 3 from 6 to 3
move 3 from 3 to 4
move 6 from 7 to 4
move 3 from 9 to 8
move 9 from 8 to 1
move 3 from 8 to 1
move 13 from 9 to 5
move 2 from 2 to 8
move 4 from 8 to 3
move 11 from 1 to 2
move 14 from 2 to 6
move 6 from 3 to 8
move 4 from 9 to 7
move 10 from 5 to 3
move 2 from 7 to 3
move 1 from 1 to 8
move 1 from 1 to 7
move 1 from 7 to 8
move 1 from 1 to 4
move 8 from 4 to 2
move 2 from 5 to 1
move 1 from 1 to 9
move 1 from 7 to 3
move 1 from 9 to 5
move 1 from 4 to 2
move 1 from 4 to 6
move 1 from 7 to 3
move 11 from 6 to 9
move 4 from 2 to 5
move 4 from 2 to 5
move 10 from 5 to 6
move 9 from 9 to 5
move 1 from 9 to 2
move 2 from 8 to 4
move 1 from 9 to 6
move 5 from 2 to 1
move 5 from 8 to 6
move 4 from 1 to 9
move 1 from 8 to 1
move 3 from 9 to 4
move 5 from 5 to 1
move 1 from 9 to 7
move 11 from 6 to 3
move 4 from 4 to 9
move 9 from 6 to 5
move 2 from 6 to 5
move 3 from 9 to 1
move 1 from 4 to 8
move 4 from 1 to 3
move 3 from 5 to 4
move 2 from 4 to 9
move 2 from 9 to 4
move 1 from 9 to 8
move 6 from 5 to 4
move 1 from 7 to 8
move 3 from 5 to 2
move 3 from 8 to 5
move 1 from 2 to 1
move 24 from 3 to 9
move 2 from 2 to 1
move 10 from 1 to 7
move 18 from 9 to 8
move 5 from 3 to 7
move 5 from 9 to 5
move 12 from 7 to 2
move 1 from 7 to 6
move 8 from 4 to 7
move 1 from 4 to 5
move 12 from 5 to 9
move 1 from 6 to 9
move 3 from 2 to 8
move 5 from 7 to 3
move 21 from 8 to 7
move 3 from 3 to 8
move 11 from 9 to 5
move 10 from 5 to 6
move 3 from 7 to 2
move 3 from 6 to 4
move 2 from 3 to 1
move 2 from 3 to 5
move 1 from 1 to 7
move 1 from 1 to 4
move 3 from 4 to 1
move 1 from 9 to 1
move 1 from 4 to 3
move 3 from 5 to 8
move 1 from 9 to 6
move 4 from 2 to 3
move 6 from 8 to 6
move 1 from 9 to 3
move 7 from 2 to 4
move 5 from 4 to 5
move 1 from 2 to 6
move 3 from 1 to 9
move 3 from 9 to 4
move 1 from 1 to 9
move 2 from 5 to 3
move 3 from 5 to 2
move 4 from 7 to 2
move 2 from 4 to 3
move 2 from 2 to 3
move 2 from 4 to 8
move 5 from 2 to 3
move 6 from 6 to 4
move 8 from 7 to 3
move 4 from 4 to 5
move 1 from 3 to 1
move 2 from 8 to 6
move 7 from 7 to 5
move 1 from 9 to 1
move 14 from 3 to 6
move 4 from 7 to 1
move 6 from 5 to 3
move 4 from 1 to 2
move 9 from 3 to 5
move 1 from 7 to 2
move 2 from 3 to 7
move 1 from 4 to 8
move 1 from 4 to 9
move 3 from 3 to 6
move 9 from 5 to 2
move 1 from 8 to 9
move 1 from 1 to 7
move 1 from 9 to 3
move 1 from 4 to 8
move 1 from 9 to 4
move 3 from 5 to 1
move 2 from 1 to 9
move 1 from 4 to 9
move 15 from 6 to 9
move 3 from 3 to 5
move 2 from 1 to 3
move 2 from 7 to 4
move 5 from 6 to 5
move 6 from 2 to 9
move 1 from 7 to 2
move 2 from 4 to 6
move 2 from 3 to 1
move 1 from 1 to 6
move 1 from 8 to 3
move 1 from 3 to 9
move 3 from 5 to 1
move 3 from 6 to 2
move 6 from 5 to 3
move 6 from 6 to 8
move 4 from 1 to 6
move 12 from 9 to 7
move 4 from 6 to 8
move 1 from 5 to 1
move 2 from 8 to 2
move 2 from 2 to 1
move 5 from 3 to 6
move 3 from 1 to 6
move 5 from 8 to 6
move 1 from 3 to 6
move 5 from 2 to 7
move 8 from 9 to 4
move 15 from 7 to 8
move 5 from 6 to 3
move 1 from 3 to 8
move 15 from 8 to 3
move 7 from 2 to 9
move 1 from 7 to 4
move 10 from 9 to 5
move 4 from 6 to 4
move 3 from 8 to 6
move 1 from 8 to 6
move 1 from 7 to 3
move 10 from 6 to 9
move 7 from 3 to 2
move 10 from 9 to 7
move 8 from 5 to 7
move 8 from 3 to 7
move 1 from 5 to 9
move 1 from 6 to 8
move 1 from 5 to 4
move 1 from 8 to 6
move 5 from 3 to 8
move 9 from 4 to 2
move 1 from 9 to 2
move 4 from 2 to 3
move 2 from 2 to 9
move 2 from 4 to 8
move 4 from 9 to 1
move 1 from 4 to 9
move 1 from 7 to 8
move 9 from 2 to 1
move 1 from 2 to 5
move 1 from 5 to 3
move 1 from 9 to 3
move 4 from 3 to 6
move 4 from 8 to 9
move 2 from 3 to 6
move 2 from 6 to 9
move 1 from 4 to 8
move 3 from 6 to 3
move 2 from 6 to 5
move 1 from 5 to 2
move 2 from 2 to 1
move 9 from 7 to 3
move 7 from 3 to 9
move 9 from 9 to 8
move 10 from 7 to 1
move 3 from 9 to 3
move 3 from 3 to 1
move 5 from 8 to 3
move 1 from 9 to 3
move 1 from 5 to 6
move 3 from 8 to 4
move 1 from 8 to 4
move 2 from 8 to 2
move 7 from 3 to 8
move 4 from 4 to 2
move 1 from 4 to 6
move 1 from 8 to 1
move 5 from 7 to 5
move 2 from 6 to 7
move 3 from 8 to 7
move 2 from 2 to 1
move 23 from 1 to 6
move 2 from 3 to 5
move 1 from 3 to 6
move 1 from 7 to 2
move 22 from 6 to 4
move 5 from 2 to 7
move 6 from 5 to 3
move 17 from 4 to 1
move 5 from 8 to 2
move 23 from 1 to 7
move 5 from 3 to 1
move 15 from 7 to 2
move 2 from 3 to 4
move 1 from 8 to 4
move 5 from 1 to 9
move 6 from 7 to 1
move 8 from 4 to 6
move 4 from 9 to 5
move 3 from 5 to 7
move 1 from 9 to 1
move 7 from 7 to 4
move 7 from 1 to 5
move 10 from 2 to 3
move 4 from 2 to 4
move 6 from 2 to 8
move 7 from 6 to 7
move 7 from 3 to 1
move 3 from 6 to 2
move 5 from 8 to 7
move 7 from 5 to 7
move 1 from 5 to 6
move 1 from 6 to 2
move 2 from 3 to 4
move 1 from 3 to 7
move 1 from 2 to 6
move 3 from 7 to 6
move 1 from 8 to 3
move 4 from 4 to 2
move 2 from 4 to 9
move 2 from 1 to 7
move 1 from 4 to 9
move 1 from 3 to 5
move 4 from 6 to 1
move 3 from 4 to 5
move 2 from 4 to 1
move 8 from 7 to 1
move 1 from 4 to 1
move 6 from 2 to 3
move 1 from 2 to 4
move 4 from 3 to 2
move 1 from 4 to 5
move 3 from 2 to 5
move 11 from 7 to 5
move 2 from 9 to 1
move 8 from 7 to 4
move 2 from 3 to 5
move 1 from 2 to 1
move 8 from 4 to 1
move 1 from 9 to 4
move 7 from 5 to 4
move 22 from 1 to 5
move 5 from 4 to 2
move 6 from 1 to 7
move 4 from 2 to 7
move 19 from 5 to 4
move 1 from 7 to 6
move 3 from 1 to 6
move 3 from 7 to 9
move 1 from 2 to 4
move 20 from 4 to 6
move 13 from 5 to 9
move 2 from 1 to 3
move 10 from 9 to 8
move 3 from 9 to 4
move 1 from 8 to 1
move 1 from 1 to 8
move 1 from 3 to 1
move 2 from 9 to 2`;

function setup(input) {
  const [diagram, instructions] = input.split('\n\n');

  // Crate setup
  const [labels, ...stackSetup] = diagram.split('\n').reverse();
  const noOfStacks = (labels.length + 1) / 4;
  const stacks = [...Array(noOfStacks)].map(() => []);

  stackSetup.forEach((line) => {
    for (let stack = 0; stack < noOfStacks; stack += 1) {
      const c = line[stack * 4 + 1];
      if (c !== ' ') {
        stacks[stack].push(c);
      }
    }
  });

  return {
    instructions: instructions.split('\n'),
    stacks,
  };
}

function part1(input) {
  const { instructions, stacks } = setup(input);

  // Run instructions
  instructions.forEach((line) => {
    const [moves, from, to] = line.split(' ').map(Number).filter(x => !Number.isNaN(x));

    for (let i = 0; i < moves; i += 1) {
      stacks[to - 1].push(stacks[from - 1].pop());
    }
  });

  // Extract the top crate from each stack
  return stacks.map(x => x.pop()).join('');
}

function part2(input) {
  const { instructions, stacks } = setup(input);

  // Run instructions
  instructions.forEach((line) => {
    const [moves, from, to] = line.split(' ').map(Number).filter(x => !Number.isNaN(x));

    stacks[to - 1].push(...stacks[from - 1].splice(stacks[from - 1].length - moves, moves));
  });

  // Extract the top crate from each stack
  return stacks.map(x => x.pop()).join('');
}

part1.desc = '';
part1.tests = [
  {
    input: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
    result: 'CMZ',
  },
];

part2.desc = '';
part2.tests = ['MCD'];

runIfMain(module, input, part1, part2);

module.exports = {
  part1,
  part2,
};
