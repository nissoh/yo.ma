import {test} from 'ava';
import {create, map} from './src/observable/index';


// test(t => {
//   t.plan(3);
//
// });


test('boo will run but not exclusively', t => {
  const s$ = create((sink) => {
    sink.next(1)
  });


  return map(s$, (val) => {
    t.truthy(val)
  });
});

