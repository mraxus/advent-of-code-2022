const { runIfMain } = require('./lib');

const input = `addx 1
addx 5
addx -1
addx 20
addx -14
addx -1
addx 5
addx 13
addx -12
addx 3
addx 3
addx 3
addx 1
addx 4
noop
noop
addx 1
noop
noop
addx 4
noop
addx -35
addx 11
addx -1
addx -7
addx 5
addx 2
addx 3
addx -2
addx 2
addx 5
addx 5
noop
noop
addx -2
addx 2
noop
addx 3
addx 2
addx 7
noop
noop
addx 3
addx -2
addx -36
noop
addx 25
addx -22
addx 7
noop
addx -2
noop
noop
noop
addx 5
addx 5
addx 4
noop
addx -2
addx 5
addx -4
addx 5
addx 4
noop
addx -29
addx 32
addx -23
addx -12
noop
addx 7
noop
addx -2
addx 4
addx 3
addx 20
addx 3
addx -20
addx 5
addx 16
addx -15
addx 6
noop
noop
noop
addx 5
noop
addx 5
noop
noop
noop
addx -37
addx 2
addx -2
addx 7
noop
addx -2
addx 5
addx 2
addx 3
addx -2
addx 2
addx 5
addx 2
addx -6
addx -15
addx 24
addx 2
noop
addx 3
addx -8
addx 15
addx -14
addx 15
addx -38
noop
noop
addx 21
addx -14
addx 1
addx 5
noop
addx -2
addx 7
addx -1
addx 5
noop
addx 2
addx 3
addx 3
addx -2
addx 4
addx 2
addx -17
addx 20
noop
noop
noop
noop`;

function part1(input, liveRun) {
  let currentCycle = 0;
  let currentValue = 1;
  let signalStrength = 0;

  const cyclesOfInterest = [20, 60, 100, 140, 180, 220];

  function cycleTick() {
    currentCycle += 1;
    if (cyclesOfInterest[0] === currentCycle) {
      signalStrength += currentCycle * currentValue;
      cyclesOfInterest.shift();
    }
  }

  input.split('\n')
    .forEach(line => {
      cycleTick();
      if (line === 'noop') {
        return;
      }
      cycleTick();
      currentValue += parseInt(line.split(' ')[1]);
    });


  return signalStrength;
}

function part2(input, liveRun) {
  let currentCycle = 0;
  let currentValue = 1;
  let screenOutput = '';

  function cycleTick() {
    currentCycle += 1;
    if ((currentCycle - 1) % 40 === 0) screenOutput += '\n'

    const rowCycle = currentCycle % 40;
    if (rowCycle >= currentValue && rowCycle <= (currentValue + 2)) {
      screenOutput += '#'
    } else {
      screenOutput += '.'
    }
  }

  input.split('\n')
    .forEach(line => {
      cycleTick();
      if (line === 'noop') {
        return;
      }
      cycleTick();
      currentValue += parseInt(line.split(' ')[1]);
    });


  return screenOutput;
}

part1.desc = '';
part1.tests = [[
  `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`,
  13140
]];

part2.desc = '';
part2.tests = [`
##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......###.
#######.......#######.......#######.....`];

runIfMain(module, input, part1, part2);

module.exports = {
  input,
  part1,
  part2,
};
