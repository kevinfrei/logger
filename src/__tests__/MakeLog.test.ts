import { MakeLog } from '../index';

test("Doesn't Crash", () => {
  expect(MakeLog).toBeTruthy();
  expect(MakeLog('test')).toBeTruthy();
});

test('Output testing', () => {
  const { log, wrn, err, con } = MakeLog('TestLogger');
  log('This should NOT be displayed');
  err('This should just look like an error');
  con('This should be just plain output');
  wrn('This should show up with a TestLogger:warn prefix');
  log.enabled = true;
  log('This should be displayed with a TestLogger:log prefix');
  log.enabled = false;
  log('This should not be displayed, either');
});
