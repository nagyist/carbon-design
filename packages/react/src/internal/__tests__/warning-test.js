/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { warning } from '../warning';

describe('warning', () => {
  test('calls console.warn() when the condition is false', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    warning(false, 'The message');

    expect(spy).toHaveBeenCalledWith('Warning: The message');
    spy.mockRestore();
  });

  test('does not call console.warn() when the condition is true', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    warning(true, 'The message');

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  test('throws an error when no message is provided', () => {
    expect(() => {
      warning(true);
    }).toThrow();
  });
});
