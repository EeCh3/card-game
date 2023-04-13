import { describe, expect, test } from '@jest/globals';
import { shuffleArray } from '../web/index';

describe('shuffleArray', () => {
    test('returns an array with the same length as the input array', () => {
      const input = [1, 2, 3, 4, 5];
      const output = shuffleArray(input);
      expect(output).toHaveLength(input.length);
    });
  
    test('returns an array with the same elements as the input array', () => {
      const input = [1, 2, 3, 4, 5];
      const output = shuffleArray(input);
      expect(output).toEqual(expect.arrayContaining(input));
    });
  
    test('returns a different order than the input array', () => {
      const input = [1, 2, 3, 4, 5];
      const output = shuffleArray(input);
      expect(output).not.toEqual(input);
    });
  });