import debug from 'debug';

type ErrorType = typeof console.error;
type ConsoleType = typeof console.log;

export type LoggerType = {
  con: ConsoleType;
  log: debug.Debugger;
  wrn: debug.Debugger;
  err: ErrorType;
  warn: debug.Debugger;
  error: ErrorType;
  console: ConsoleType;
};

/**
 * Make a set of loggers useful for diagnostic & the like.
 *
 * @example
 * ```ts
 * import { MakeLog } from '@freik/logger';
 *
 * const {log, wrn, err, con} = MakeLog('scoped:file_name');
 * log("By default, this won't be displayed");
 * err("This will show up on console.error, unmodified [avoid mostly?]");
 * con("This shows up on the console, unmodified [avoid using]");
 * wrn("This will show up as a log entry with the :warn suffix")
 * log.enabled = true;
 * log("Now this will show up, with the :log suffix")
 * ```
 *
 * @param {string} name The name of the logger/error streams to log
 * @returns {LoggerType} A LoggerType tuple (meant to be destructured)
 */
export function MakeLog(name: string): LoggerType {
  const log = debug(name + ':log');
  const wrn: debug.Debugger = debug(name + ':warn');
  const err = console.error; // eslint-disable-line no-console
  const con = console.log; // eslint-disable-line no-console
  wrn.enabled = true;
  return { log, wrn, err, con, error: err, console: con, warn: wrn };
}
