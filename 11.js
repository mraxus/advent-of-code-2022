const { runIfMain } = require('./lib');

const input = `Monkey 0:
  Starting items: 50, 70, 54, 83, 52, 78
  Operation: new = old * 3
  Test: divisible by 11
    If true: throw to monkey 2
    If false: throw to monkey 7

Monkey 1:
  Starting items: 71, 52, 58, 60, 71
  Operation: new = old * old
  Test: divisible by 7
    If true: throw to monkey 0
    If false: throw to monkey 2

Monkey 2:
  Starting items: 66, 56, 56, 94, 60, 86, 73
  Operation: new = old + 1
  Test: divisible by 3
    If true: throw to monkey 7
    If false: throw to monkey 5

Monkey 3:
  Starting items: 83, 99
  Operation: new = old + 8
  Test: divisible by 5
    If true: throw to monkey 6
    If false: throw to monkey 4

Monkey 4:
  Starting items: 98, 98, 79
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 1
    If false: throw to monkey 0

Monkey 5:
  Starting items: 76
  Operation: new = old + 4
  Test: divisible by 13
    If true: throw to monkey 6
    If false: throw to monkey 3

Monkey 6:
  Starting items: 52, 51, 84, 54
  Operation: new = old * 17
  Test: divisible by 19
    If true: throw to monkey 4
    If false: throw to monkey 1

Monkey 7:
  Starting items: 82, 86, 91, 79, 94, 92, 59, 94
  Operation: new = old + 7
  Test: divisible by 2
    If true: throw to monkey 5
    If false: throw to monkey 3`;

function parseMonkey(monkeyPart) {
  const [cLine, startLine, opLine, testLine, trueLine, falseLine] = monkeyPart.split('\n');
  const monkeyIndex = parseInt(cLine[7]);
  const items = startLine.substring(18).split(', ').map(BigInt);
  let [_, op, num] = opLine.substring(19).split(' ');
  const modNumber = BigInt(testLine.substring(21));
  const ifTrueMonkey = parseInt(trueLine.substring(28));
  const ifFalseMonkey = parseInt(falseLine.substring(29));

  var result = {
    monkey: monkeyIndex,
    items,
    op,
    opNum: num === 'old' ? null : BigInt(num),
    modNumber,
    on: ifTrueMonkey,
    off: ifFalseMonkey,
    inspections: 0,
  };

  return result;
}

function computeMonkeyRound(monkeys, relief, reducer) {
  // console.log([`Start:`, ...monkeys.map((x) => x.toString())].join('\n'));
  monkeys.forEach((monkey) => {
    monkey.items.forEach((level) => {
      if (monkey.op === '+') {
        level += monkey.opNum || level;
      } else {
        level *= monkey.opNum || level;
      }
      if (relief) level = level / relief;
      level %= reducer

      monkey.inspections += 1;

      const canDivide = !(level % monkey.modNumber);
      const passToMonkey = monkey[canDivide ? 'on' : 'off'];
      // console.log(`Can Divide: ${level} / ${monkey.modNumber}: ${canDivide} -> ${passToMonkey}`);

      monkeys[passToMonkey].items.push(level);
    });
    monkey.items = [];
    // console.log([`After M ${monkey.monkey}`, ...monkeys.map((x) => x.toString())].join('\n'));
  });
  // console.log([`After Round:`, ...monkeys.map((x) => x.toString())].join('\n'));
}

function computeMonkeyBusiness(input, rounds, relief) {
  const monkeys = input.split('\n\n').map(parseMonkey);

  const reducer = monkeys.reduce((prod, { modNumber }) => prod * modNumber, 1n);

  for (let i = 0; i < rounds; i += 1) {
    computeMonkeyRound(monkeys, relief, reducer);
  }

  const inspections = monkeys.map((x) => x.inspections);
  // const valPrint = monkeys.map(
  //   (x, i) => `Monkey ${i}: ${x.inspections} (items ${x.items.join(', ')})`
  // );
  // console.log([`After ${rounds} rounds:`, ...valPrint].join('\n'));

  const monkeyBusiness = [...inspections]
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a * b);

  return monkeyBusiness;
}

function part1(input, liveRun) {
  return computeMonkeyBusiness(input, 20, 3n);
}

function part2(input, liveRun) {
  return computeMonkeyBusiness(input, 10000);
}

part1.desc = '';
part1.tests = [
  [
    `Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`,
    10605,
  ],
];

part2.desc = '';
part2.tests = [2713310158];

runIfMain(module, input, part1, part2);

module.exports = {
  input,
  part1,
  part2,
};
