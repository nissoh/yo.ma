import {test} from 'ava'
import {Stream} from './../src/observable/index'


test('fromArray return 3 even numbers in 6', t => {
  t.plan(3)

  return Stream.fromArray([1, 2, 3, 4, 5, 6])
    .filter(n => n % 2 === 0)
    .tap(x => t.true(!!x))
})


